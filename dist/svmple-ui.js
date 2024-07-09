import { resolveComponent as ro, openBlock as Wh, createBlock as Bh, mergeProps as Hh, withCtx as zh, renderSlot as jh, reactive as Ot, inject as ut, computed as Q, provide as Xt, defineComponent as tt, h as r, createCommentVNode as Me, createApp as qh, ref as Ie, watch as lt, onMounted as yn, onUnmounted as On, nextTick as ae, onBeforeUnmount as Ci, Teleport as ts, TransitionGroup as fa, onActivated as cm, onDeactivated as Gh } from "vue";
const nA = {
  __name: "SpButton",
  props: {},
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    return (l, a) => {
      const c = ro("vxe-button");
      return Wh(), Bh(c, Hh(n, {
        onClick: a[0] || (a[0] = (p) => o("click", p))
      }), {
        default: zh(() => [
          jh(l.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
};
function Uh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kh = {
  cookies: {
    path: "/"
  },
  treeOptions: {
    parentKey: "parentId",
    key: "id",
    children: "children"
  },
  parseDateFormat: "yyyy-MM-dd HH:mm:ss",
  firstDayOfWeek: 1
}, Er = Kh;
function Yh(e, t, n) {
  if (e)
    if (e.forEach)
      e.forEach(t, n);
    else
      for (var o = 0, l = e.length; o < l; o++)
        t.call(n, e[o], o, e);
}
var bo = Yh, Xh = Object.prototype.toString, um = Xh, Zh = um;
function Jh(e) {
  return function(t) {
    return "[object " + e + "]" === Zh.call(t);
  };
}
var wi = Jh, Qh = wi, eb = Array.isArray || Qh("Array"), Cn = eb;
function tb(e, t) {
  return e && e.hasOwnProperty ? e.hasOwnProperty(t) : !1;
}
var Go = tb, nb = Go;
function ob(e, t, n) {
  if (e)
    for (var o in e)
      nb(e, o) && t.call(n, e[o], o, e);
}
var Ei = ob, rb = Cn, sb = bo, lb = Ei;
function ib(e, t, n) {
  return e && (rb(e) ? sb : lb)(e, t, n);
}
var Hn = ib;
function ab(e) {
  return function(t) {
    return typeof t === e;
  };
}
var Bl = ab, cb = Bl, ub = cb("function"), ko = ub, db = Hn;
function fb(e, t) {
  var n = Object[e];
  return function(o) {
    var l = [];
    if (o) {
      if (n)
        return n(o);
      db(o, t > 1 ? function(a) {
        l.push(["" + a, o[a]]);
      } : function() {
        l.push(arguments[t]);
      });
    }
    return l;
  };
}
var Ac = fb, pb = Ac, mb = pb("keys", 1), Sr = mb, gb = um, vb = Ei, hb = bo;
function Ka(e, t) {
  var n = e.__proto__.constructor;
  return t ? new n(t) : new n();
}
function Ui(e, t) {
  return t ? dm(e, t) : e;
}
function dm(e, t) {
  if (e)
    switch (gb.call(e)) {
      case "[object Object]": {
        var n = Object.create(Object.getPrototypeOf(e));
        return vb(e, function(c, p) {
          n[p] = Ui(c, t);
        }), n;
      }
      case "[object Date]":
      case "[object RegExp]":
        return Ka(e, e.valueOf());
      case "[object Array]":
      case "[object Arguments]": {
        var o = [];
        return hb(e, function(c) {
          o.push(Ui(c, t));
        }), o;
      }
      case "[object Set]": {
        var l = Ka(e);
        return l.forEach(function(c) {
          l.add(Ui(c, t));
        }), l;
      }
      case "[object Map]": {
        var a = Ka(e);
        return a.forEach(function(c, p) {
          a.set(p, Ui(c, t));
        }), a;
      }
    }
  return e;
}
function bb(e, t) {
  return e && dm(e, t);
}
var _c = bb, xb = bo, yb = Sr, Cb = Cn, wb = _c, Pd = Object.assign;
function Nd(e, t, n) {
  for (var o = t.length, l, a = 1; a < o; a++)
    l = t[a], xb(yb(t[a]), n ? function(c) {
      e[c] = wb(l[c], n);
    } : function(c) {
      e[c] = l[c];
    });
  return e;
}
var Eb = function(e) {
  if (e) {
    var t = arguments;
    if (e === !0) {
      if (t.length > 1)
        return e = Cb(e[1]) ? [] : {}, Nd(e, t, !0);
    } else
      return Pd ? Pd.apply(Object, t) : Nd(e, t);
  }
  return e;
}, Uo = Eb, Sb = Er, Db = bo, Ob = Hn, Tb = ko, Mb = Uo, bs = function() {
};
function Ib() {
  Db(arguments, function(e) {
    Ob(e, function(t, n) {
      bs[n] = Tb(t) ? function() {
        var o = t.apply(bs.$context, arguments);
        return bs.$context = null, o;
      } : t;
    });
  });
}
function kb(e) {
  return Mb(Sb, e);
}
bs.VERSION = "3.5.28";
bs.mixin = Ib;
bs.setup = kb;
var Vb = bs;
function $b(e, t, n) {
  for (var o = e.length - 1; o >= 0; o--)
    t.call(n, e[o], o, e);
}
var Wc = $b, Rb = Wc, Pb = Sr;
function Nb(e, t, n) {
  Rb(Pb(e), function(o) {
    t.call(n, e[o], o, e);
  });
}
var fm = Nb;
function Fb(e) {
  return e === null;
}
var Dr = Fb, Lb = Dr;
function Ab(e, t) {
  return function(n) {
    return Lb(n) ? t : n[e];
  };
}
var Hl = Ab, _b = Hn, Wb = ko, Bb = Hl;
function Hb(e, t, n) {
  var o = {};
  if (e)
    if (t)
      Wb(t) || (t = Bb(t)), _b(e, function(l, a) {
        o[a] = t.call(n, l, a, e);
      });
    else
      return e;
  return o;
}
var zb = Hb;
function jb(e) {
  return e ? e.constructor === Object : !1;
}
var zl = jb, Fd = Cn, Ld = zl, qb = Hn;
function pm(e, t) {
  return Ld(e) && Ld(t) || Fd(e) && Fd(t) ? (qb(t, function(n, o) {
    e[o] = pm(e[o], n);
  }), e) : t;
}
var Gb = function(e) {
  e || (e = {});
  for (var t = arguments, n = t.length, o, l = 1; l < n; l++)
    o = t[l], o && pm(e, o);
  return e;
}, Ub = Gb, Kb = Hn;
function Yb(e, t, n) {
  var o = [];
  if (e && arguments.length > 1) {
    if (e.map)
      return e.map(t, n);
    Kb(e, function() {
      o.push(t.apply(n, arguments));
    });
  }
  return o;
}
var jl = Yb, Xb = Go, Zb = Cn;
function Jb(e, t, n, o, l) {
  return function(a, c, p) {
    if (a && c) {
      if (e && a[e])
        return a[e](c, p);
      if (t && Zb(a)) {
        for (var d = 0, s = a.length; d < s; d++)
          if (!!c.call(p, a[d], d, a) === o)
            return [!0, !1, d, a[d]][n];
      } else
        for (var f in a)
          if (Xb(a, f) && !!c.call(p, a[f], f, a) === o)
            return [!0, !1, f, a[f]][n];
    }
    return l;
  };
}
var Ca = Jb, Qb = Ca, ex = Qb("some", 1, 0, !0, !1), mm = ex, tx = Ca, nx = tx("every", 1, 1, !1, !0), gm = nx, ox = Go;
function rx(e, t) {
  if (e) {
    if (e.includes)
      return e.includes(t);
    for (var n in e)
      if (ox(e, n) && t === e[n])
        return !0;
  }
  return !1;
}
var Si = rx, Ad = Cn, _d = Si;
function sx(e, t) {
  var n, o = 0;
  if (Ad(e) && Ad(t)) {
    for (n = t.length; o < n; o++)
      if (!_d(e, t[o]))
        return !1;
    return !0;
  }
  return _d(e, t);
}
var vm = sx, Wd = Hn, lx = Si, ix = ko, ax = Hl;
function cx(e, t, n) {
  var o = [];
  if (t) {
    ix(t) || (t = ax(t));
    var l, a = {};
    Wd(e, function(c, p) {
      l = t.call(n, c, p, e), a[l] || (a[l] = 1, o.push(c));
    });
  } else
    Wd(e, function(c) {
      lx(o, c) || o.push(c);
    });
  return o;
}
var hm = cx, ux = jl;
function dx(e) {
  return ux(e, function(t) {
    return t;
  });
}
var Bc = dx, fx = hm, px = Bc;
function mx() {
  for (var e = arguments, t = [], n = 0, o = e.length; n < o; n++)
    t = t.concat(px(e[n]));
  return fx(t);
}
var gx = mx, vx = "undefined", Ko = vx, hx = Ko, bx = Bl, xx = bx(hx), or = xx, yx = Dr, Cx = or;
function wx(e) {
  return yx(e) || Cx(e);
}
var ns = wx, Ex = /(.+)?\[(\d+)\]$/, bm = Ex;
function Sx(e) {
  return e ? e.splice && e.join ? e : ("" + e).replace(/(\[\d+\])\.?/g, "$1.").replace(/\.$/, "").split(".") : [];
}
var Hc = Sx, Dx = bm, Ox = Hc, Tx = Go, Mx = or, xm = ns;
function Ix(e, t, n) {
  if (xm(e))
    return n;
  var o = Vx(e, t);
  return Mx(o) ? n : o;
}
function kx(e, t) {
  var n = t ? t.match(Dx) : "";
  return n ? n[1] ? e[n[1]] ? e[n[1]][n[2]] : void 0 : e[n[2]] : e[t];
}
function Vx(e, t) {
  if (e) {
    var n, o, l, a = 0;
    if (e[t] || Tx(e, t))
      return e[t];
    if (o = Ox(t), l = o.length, l) {
      for (n = e; a < l; a++)
        if (n = kx(n, o[a]), xm(n))
          return a === l - 1 ? n : void 0;
    }
    return n;
  }
}
var Di = Ix, Bd = bo, $x = Bc, Hd = jl, zd = Cn, Rx = ko, Px = zl, jd = or, Nx = Dr, Fx = ns, Lx = Di, Ax = Hl, _x = "asc", Wx = "desc";
function Tc(e, t) {
  return jd(e) ? 1 : Nx(e) ? jd(t) ? -1 : 1 : e && e.localeCompare ? e.localeCompare(t) : e > t ? 1 : -1;
}
function Bx(e, t, n) {
  return function(o, l) {
    var a = o[e], c = l[e];
    return a === c ? n ? n(o, l) : 0 : t.order === Wx ? Tc(c, a) : Tc(a, c);
  };
}
function Hx(e, t, n, o) {
  var l = [];
  return n = zd(n) ? n : [n], Bd(n, function(a, c) {
    if (a) {
      var p = a, d;
      zd(a) ? (p = a[0], d = a[1]) : Px(a) && (p = a.field, d = a.order), l.push({
        field: p,
        order: d || _x
      }), Bd(t, Rx(p) ? function(s, f) {
        s[c] = p.call(o, s.data, f, e);
      } : function(s) {
        s[c] = p ? Lx(s.data, p) : s.data;
      });
    }
  }), l;
}
function zx(e, t, n) {
  if (e) {
    if (Fx(t))
      return $x(e).sort(Tc);
    for (var o, l = Hd(e, function(p) {
      return { data: p };
    }), a = Hx(e, l, t, n), c = a.length - 1; c >= 0; )
      o = Bx(c, a[c], o), c--;
    return o && (l = l.sort(o)), Hd(l, Ax("data"));
  }
  return [];
}
var zc = zx, jx = zc, qx = jx, Gx = qx;
function Ux(e, t) {
  return e >= t ? e : (e = e >> 0) + Math.round(Math.random() * ((t || 9) - e));
}
var ym = Ux, Kx = Ac, Yx = Kx("values", 0), ql = Yx, Xx = ym, Zx = ql;
function Jx(e) {
  for (var t, n = [], o = Zx(e), l = o.length - 1; l >= 0; l--)
    t = l > 0 ? Xx(0, l) : 0, n.push(o[t]), o.splice(t, 1);
  return n;
}
var Cm = Jx, Qx = Cm;
function ey(e, t) {
  var n = Qx(e);
  return arguments.length <= 1 ? n[0] : (t < n.length && (n.length = t || 0), n);
}
var ty = ey;
function ny(e) {
  return function(t) {
    if (t) {
      var n = e(t && t.replace ? t.replace(/,/g, "") : t);
      if (!isNaN(n))
        return n;
    }
    return 0;
  };
}
var wm = ny, oy = wm, ry = oy(parseFloat), Vs = ry, qd = Vs;
function sy(e, t, n) {
  var o = [], l = arguments.length;
  if (e) {
    if (t = l >= 2 ? qd(t) : 0, n = l >= 3 ? qd(n) : e.length, e.slice)
      return e.slice(t, n);
    for (; t < n; t++)
      o.push(e[t]);
  }
  return o;
}
var $s = sy, ly = Hn;
function iy(e, t, n) {
  var o = [];
  if (e && t) {
    if (e.filter)
      return e.filter(t, n);
    ly(e, function(l, a) {
      t.call(n, l, a, e) && o.push(l);
    });
  }
  return o;
}
var ay = iy, cy = Ca, uy = cy("", 0, 2, !0), dy = uy, fy = Ca, py = fy("find", 1, 3, !0), my = py, gy = Cn, vy = ql;
function hy(e, t, n) {
  if (e) {
    gy(e) || (e = vy(e));
    for (var o = e.length - 1; o >= 0; o--)
      if (t.call(n, e[o], o, e))
        return e[o];
  }
}
var by = hy, xy = Sr;
function yy(e, t, n) {
  if (e) {
    var o, l, a = 0, c = null, p = n, d = arguments.length > 2, s = xy(e);
    if (e.length && e.reduce)
      return l = function() {
        return t.apply(c, arguments);
      }, d ? e.reduce(l, p) : e.reduce(l);
    for (d && (a = 1, p = e[s[0]]), o = s.length; a < o; a++)
      p = t.call(c, p, e[s[a]], a, e);
    return p;
  }
}
var Cy = yy, wy = Cn;
function Ey(e, t, n, o) {
  if (wy(e) && e.copyWithin)
    return e.copyWithin(t, n, o);
  var l, a, c = t >> 0, p = n >> 0, d = e.length, s = arguments.length > 3 ? o >> 0 : d;
  if (c < d && (c = c >= 0 ? c : d + c, c >= 0 && (p = p >= 0 ? p : d + p, s = s >= 0 ? s : d + s, p < s)))
    for (l = 0, a = e.slice(p, s); c < d && !(a.length <= l); c++)
      e[c] = a[l++];
  return e;
}
var Sy = Ey, Dy = Cn;
function Oy(e, t) {
  var n, o = [], l = t >> 0 || 1;
  if (Dy(e))
    if (l >= 0 && e.length > l)
      for (n = 0; n < e.length; )
        o.push(e.slice(n, n + l)), n += l;
    else
      o = e.length ? [e] : e;
  return o;
}
var Ty = Oy, My = jl, Iy = Hl;
function ky(e, t) {
  return My(e, Iy(t));
}
var Em = ky, Vy = ko, Gd = ns, $y = Di, Ry = bo;
function Py(e) {
  return function(t, n) {
    if (t && t.length) {
      var o, l;
      return Ry(t, function(a, c) {
        n && (a = Vy(n) ? n(a, c, t) : $y(a, n)), !Gd(a) && (Gd(o) || e(o, a)) && (l = c, o = a);
      }), t[l];
    }
    return o;
  };
}
var Sm = Py, Ny = Sm, Fy = Ny(function(e, t) {
  return e < t;
}), Dm = Fy, Ly = Em, Ay = Dm;
function _y(e) {
  var t, n, o, l = [];
  if (e && e.length)
    for (t = 0, n = Ay(e, function(a) {
      return a ? a.length : 0;
    }), o = n ? n.length : 0; t < o; t++)
      l.push(Ly(e, t));
  return l;
}
var Om = _y, Wy = Om;
function By() {
  return Wy(arguments);
}
var Hy = By, zy = ql, jy = Hn;
function qy(e, t) {
  var n = {};
  return t = t || [], jy(zy(e), function(o, l) {
    n[o] = t[l];
  }), n;
}
var Gy = qy, Tm = Cn, Uy = bo;
function Mm(e, t) {
  var n = [];
  return Uy(e, function(o) {
    n = n.concat(Tm(o) ? t ? Mm(o, t) : o : [o]);
  }), n;
}
function Ky(e, t) {
  return Tm(e) ? Mm(e, t) : [];
}
var Yy = Ky, Xy = jl, Zy = Cn;
function Jy(e, t) {
  for (var n = 0, o = t.length; e && n < o; )
    e = e[t[n++]];
  return o && e ? e : 0;
}
function Qy(e, t) {
  for (var n, o = arguments, l = [], a = [], c = 2, p = o.length; c < p; c++)
    l.push(o[c]);
  if (Zy(t)) {
    for (p = t.length - 1, c = 0; c < p; c++)
      a.push(t[c]);
    t = t[p];
  }
  return Xy(e, function(d) {
    if (a.length && (d = Jy(d, a)), n = d[t] || t, n && n.apply)
      return n.apply(d, l);
  });
}
var eC = Qy;
function tC(e, t) {
  try {
    delete e[t];
  } catch {
    e[t] = void 0;
  }
}
var Im = tC, nC = Cn, oC = Wc, rC = fm;
function sC(e, t, n) {
  return e && (nC(e) ? oC : rC)(e, t, n);
}
var km = sC, lC = Bl, iC = lC("object"), wa = iC, aC = Im, cC = zl, uC = wa, dC = Cn, fC = Dr, pC = Uo, mC = Ei;
function gC(e, t, n) {
  if (e) {
    var o, l = arguments.length > 1 && (fC(t) || !uC(t)), a = l ? n : t;
    if (cC(e))
      mC(e, l ? function(c, p) {
        e[p] = t;
      } : function(c, p) {
        aC(e, p);
      }), a && pC(e, a);
    else if (dC(e)) {
      if (l)
        for (o = e.length; o > 0; )
          o--, e[o] = t;
      else
        e.length = 0;
      a && e.push.apply(e, a);
    }
  }
  return e;
}
var Vm = gC, vC = Im, hC = ko, bC = Cn, xC = Hn, yC = bo, CC = km, wC = Vm, EC = ns;
function SC(e) {
  return function(t, n) {
    return n === e;
  };
}
function DC(e, t, n) {
  if (e) {
    if (!EC(t)) {
      var o = [], l = [];
      return hC(t) || (t = SC(t)), xC(e, function(a, c, p) {
        t.call(n, a, c, p) && o.push(c);
      }), bC(e) ? CC(o, function(a, c) {
        l.push(e[a]), e.splice(a, 1);
      }) : (l = {}, yC(o, function(a) {
        l[a] = e[a], vC(e, a);
      })), l;
    }
    return wC(e);
  }
  return e;
}
var $m = DC, OC = Er, TC = zc, MC = _c, IC = ns, Mc = Hn, kC = $m, VC = Uo;
function $C(e, t) {
  Mc(e, function(n) {
    n[t] && !n[t].length && kC(n, t);
  });
}
function RC(e, t) {
  var n = VC({}, OC.treeOptions, t), o = n.strict, l = n.key, a = n.parentKey, c = n.children, p = n.mapChildren, d = n.sortKey, s = n.reverse, f = n.data, g = [], D = {}, b = {}, x, S, y;
  return d && (e = TC(MC(e), d), s && (e = e.reverse())), Mc(e, function(h) {
    x = h[l], b[x] = !0;
  }), Mc(e, function(h) {
    x = h[l], f ? (S = {}, S[f] = h) : S = h, y = h[a], D[x] = D[x] || [], D[y] = D[y] || [], D[y].push(S), S[l] = x, S[a] = y, S[c] = D[x], p && (S[p] = D[x]), (!o || o && IC(y)) && (b[y] || g.push(S));
  }), o && $C(e, c), g;
}
var PC = RC, NC = Er, FC = Hn, LC = Uo;
function Rm(e, t, n) {
  var o = n.children, l = n.data, a = n.clear;
  return FC(t, function(c) {
    var p = c[o];
    l && (c = c[l]), e.push(c), p && p.length && Rm(e, p, n), a && delete c[o];
  }), e;
}
function AC(e, t) {
  return Rm([], e, LC({}, NC.treeOptions, t));
}
var _C = AC;
function WC(e) {
  return function(t, n, o, l) {
    var a = o || {}, c = a.children || "children";
    return e(null, t, n, l, [], [], c, a);
  };
}
var Ea = WC, BC = Ea;
function Pm(e, t, n, o, l, a, c, p) {
  if (t) {
    var d, s, f, g, D, b;
    for (s = 0, f = t.length; s < f; s++) {
      if (d = t[s], g = l.concat(["" + s]), D = a.concat([d]), n.call(o, d, s, t, g, e, D))
        return { index: s, item: d, path: g, items: t, parent: e, nodes: D };
      if (c && d && (b = Pm(d, d[c], n, o, g.concat([c]), D, c), b))
        return b;
    }
  }
}
var HC = BC(Pm), zC = HC, jC = Ea, qC = Hn;
function Nm(e, t, n, o, l, a, c, p) {
  var d, s;
  qC(t, function(f, g) {
    d = l.concat(["" + g]), s = a.concat([f]), n.call(o, f, g, t, d, e, s), f && c && (d.push(c), Nm(f, f[c], n, o, d, s, c));
  });
}
var GC = jC(Nm), Fm = GC, UC = Ea, KC = jl;
function Lm(e, t, n, o, l, a, c, p) {
  var d, s, f, g = p.mapChildren || c;
  return KC(t, function(D, b) {
    return d = l.concat(["" + b]), s = a.concat([D]), f = n.call(o, D, b, t, d, e, s), f && D && c && D[c] && (f[g] = Lm(D, D[c], n, o, d, s, c, p)), f;
  });
}
var YC = UC(Lm), XC = YC, ZC = Fm;
function JC(e, t, n, o) {
  var l = [];
  return e && t && ZC(e, function(a, c, p, d, s, f) {
    t.call(o, a, c, p, d, s, f) && l.push(a);
  }, n), l;
}
var QC = JC, ew = Ea, tw = bo, nw = Uo;
function Am(e, t, n, o, l, a, c, p, d) {
  var s, f, g, D, b, x = [], S = d.original, y = d.data, h = d.mapChildren || p, O = d.isEvery;
  return tw(n, function(E, T) {
    s = a.concat(["" + T]), f = c.concat([E]), D = e && !O || o.call(l, E, T, n, s, t, f), b = p && E[p], D || b ? (S ? g = E : (g = nw({}, E), y && (g[y] = E)), g[h] = Am(D, E, E[p], o, l, s, f, p, d), (D || g[h].length) && x.push(g)) : D && x.push(g);
  }), x;
}
var ow = ew(function(e, t, n, o, l, a, c, p) {
  return Am(0, e, t, n, o, l, a, c, p);
}), rw = ow;
function sw(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var n = 0, o = e.length; n < o; n++)
    if (t === e[n])
      return n;
}
var _m = sw;
function lw(e, t) {
  if (e.lastIndexOf)
    return e.lastIndexOf(t);
  for (var n = e.length - 1; n >= 0; n--)
    if (t === e[n])
      return n;
  return -1;
}
var Wm = lw, iw = Bl, aw = iw("number"), rr = aw, cw = rr;
function uw(e) {
  return cw(e) && isNaN(e);
}
var dw = uw, fw = Bl, pw = fw("string"), Or = pw, mw = wi, gw = mw("Date"), os = gw, vw = parseInt, Oi = vw;
function hw(e) {
  return Date.UTC(e.y, e.M || 0, e.d || 1, e.H || 0, e.m || 0, e.s || 0, e.S || 0);
}
var bw = hw;
function xw(e) {
  return e.getTime();
}
var Fo = xw, pa = Oi, Ud = bw, yw = Fo, Cw = Or, ww = os;
function Ti(e) {
  return "(\\d{" + e + "})";
}
function Ew(e) {
  return e < 10 ? e * 100 : e < 100 ? e * 10 : e;
}
function Kd(e) {
  return isNaN(e) ? e : pa(e);
}
var _s = Ti(2), Qs = Ti("1,2"), Bm = Ti("1,7"), Hm = Ti("3,4"), zm = ".{1}", ri = zm + Qs, jm = "(([zZ])|([-+]\\d{2}:?\\d{2}))", Yd = [Hm, ri, ri, ri, ri, ri, zm + Bm, jm], Ic = [];
for (var Ya = Yd.length - 1; Ya >= 0; Ya--) {
  for (var Xd = "", xs = 0; xs < Ya + 1; xs++)
    Xd += Yd[xs];
  Ic.push(new RegExp("^" + Xd + "$"));
}
function Sw(e) {
  for (var t, n = {}, o = 0, l = Ic.length; o < l; o++)
    if (t = e.match(Ic[o]), t) {
      n.y = t[1], n.M = t[2], n.d = t[3], n.H = t[4], n.m = t[5], n.s = t[6], n.S = t[7], n.Z = t[8];
      break;
    }
  return n;
}
var Zd = [
  ["yyyy", Hm],
  ["yy", _s],
  ["MM", _s],
  ["M", Qs],
  ["dd", _s],
  ["d", Qs],
  ["HH", _s],
  ["H", Qs],
  ["mm", _s],
  ["m", Qs],
  ["ss", _s],
  ["s", Qs],
  ["SSS", Ti(3)],
  ["S", Bm],
  ["Z", jm]
], qm = {}, Gm = ["\\[([^\\]]+)\\]"];
for (var xs = 0; xs < Zd.length; xs++) {
  var Xa = Zd[xs];
  qm[Xa[0]] = Xa[1] + "?", Gm.push(Xa[0]);
}
var Dw = new RegExp(Gm.join("|"), "g"), Jd = {};
function Ow(e, t) {
  var n = Jd[t];
  if (!n) {
    var o = [], l = t.replace(/([$(){}*+.?\\^|])/g, "\\$1").replace(Dw, function(f, g) {
      var D = f.charAt(0);
      return D === "[" ? g : (o.push(D), qm[f]);
    });
    n = Jd[t] = {
      _i: o,
      _r: new RegExp(l)
    };
  }
  var a = {}, c = e.match(n._r);
  if (c) {
    for (var p = n._i, d = 1, s = c.length; d < s; d++)
      a[p[d - 1]] = c[d];
    return a;
  }
  return a;
}
function Tw(e) {
  if (/^[zZ]/.test(e.Z))
    return new Date(Ud(e));
  var t = e.Z.match(/([-+])(\d{2}):?(\d{2})/);
  return t ? new Date(Ud(e) - (t[1] === "-" ? -1 : 1) * pa(t[2]) * 36e5 + pa(t[3]) * 6e4) : /* @__PURE__ */ new Date("");
}
function Mw(e, t) {
  if (e) {
    var n = ww(e);
    if (n || !t && /^[0-9]{11,15}$/.test(e))
      return new Date(n ? yw(e) : pa(e));
    if (Cw(e)) {
      var o = t ? Ow(e, t) : Sw(e);
      if (o.y)
        return o.M && (o.M = Kd(o.M) - 1), o.S && (o.S = Ew(Kd(o.S.substring(0, 3)))), o.Z ? Tw(o) : new Date(o.y, o.M || 0, o.d || 1, o.H || 0, o.m || 0, o.s || 0, o.S || 0);
    }
  }
  return /* @__PURE__ */ new Date("");
}
var Vo = Mw;
function Iw() {
  return /* @__PURE__ */ new Date();
}
var Sa = Iw, kw = os, Vw = Vo, $w = Sa;
function Rw(e) {
  var t, n = e ? Vw(e) : $w();
  return kw(n) ? (t = n.getFullYear(), t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0)) : !1;
}
var Um = Rw, Pw = Cn, Nw = Go;
function Fw(e, t, n) {
  if (e) {
    if (Pw(e))
      for (var o = 0, l = e.length; o < l && t.call(n, e[o], o, e) !== !1; o++)
        ;
    else
      for (var a in e)
        if (Nw(e, a) && t.call(n, e[a], a, e) === !1)
          break;
  }
}
var Lw = Fw, Aw = Cn, _w = Go;
function Ww(e, t, n) {
  if (e) {
    var o, l;
    if (Aw(e))
      for (o = e.length - 1; o >= 0 && t.call(n, e[o], o, e) !== !1; o--)
        ;
    else
      for (l = _w(e), o = l.length - 1; o >= 0 && t.call(n, e[l[o]], l[o], e) !== !1; o--)
        ;
  }
}
var Bw = Ww, Hw = Cn, zw = Or, jw = Go;
function qw(e, t) {
  return function(n, o) {
    if (n) {
      if (n[e])
        return n[e](o);
      if (zw(n) || Hw(n))
        return t(n, o);
      for (var l in n)
        if (jw(n, l) && o === n[l])
          return l;
    }
    return -1;
  };
}
var Km = qw, Gw = Km, Uw = _m, Kw = Gw("indexOf", Uw), Yw = Kw, Xw = Km, Zw = Wm, Jw = Xw("lastIndexOf", Zw), Ym = Jw, Qw = Cn, eE = Or, tE = Hn;
function nE(e) {
  var t = 0;
  return eE(e) || Qw(e) ? e.length : (tE(e, function() {
    t++;
  }), t);
}
var Xm = nE, oE = rr;
function rE(e) {
  return oE(e) && isFinite(e);
}
var sE = rE, lE = Cn, iE = Dr, aE = function(e) {
  return !iE(e) && !isNaN(e) && !lE(e) && e % 1 === 0;
}, Zm = aE, cE = Cn, uE = Zm, dE = Dr;
function fE(e) {
  return !dE(e) && !isNaN(e) && !cE(e) && !uE(e);
}
var pE = fE, mE = Bl, gE = mE("boolean"), Jm = gE, vE = wi, hE = vE("RegExp"), jc = hE, bE = wi, xE = bE("Error"), Qm = xE;
function yE(e) {
  return e ? e.constructor === TypeError : !1;
}
var CE = yE;
function wE(e) {
  for (var t in e)
    return !1;
  return !0;
}
var eg = wE, EE = Ko, SE = typeof Symbol !== EE;
function DE(e) {
  return SE && Symbol.isSymbol ? Symbol.isSymbol(e) : typeof e == "symbol";
}
var tg = DE, OE = wi, TE = OE("Arguments"), ME = TE, IE = Or, kE = rr;
function VE(e) {
  return !!(e && IE(e.nodeName) && kE(e.nodeType));
}
var $E = VE, RE = Ko, PE = typeof document === RE ? 0 : document, qc = PE, NE = qc;
function FE(e) {
  return !!(e && NE && e.nodeType === 9);
}
var LE = FE, AE = Ko, _E = typeof window === AE ? 0 : window, ng = _E, WE = ng;
function BE(e) {
  return !!(WE && (e && e === e.window));
}
var HE = BE, zE = Ko, jE = typeof FormData !== zE;
function qE(e) {
  return jE && e instanceof FormData;
}
var GE = qE, UE = Ko, KE = typeof Map !== UE;
function YE(e) {
  return KE && e instanceof Map;
}
var XE = YE, ZE = Ko, JE = typeof WeakMap !== ZE;
function QE(e) {
  return JE && e instanceof WeakMap;
}
var eS = QE, tS = Ko, nS = typeof Set !== tS;
function oS(e) {
  return nS && e instanceof Set;
}
var rS = oS, sS = Ko, lS = typeof WeakSet !== sS;
function iS(e) {
  return lS && e instanceof WeakSet;
}
var aS = iS, cS = ko, uS = Or, dS = Cn, fS = Go;
function pS(e) {
  return function(t, n, o) {
    if (t && cS(n)) {
      if (dS(t) || uS(t))
        return e(t, n, o);
      for (var l in t)
        if (fS(t, l) && n.call(o, t[l], l, t))
          return l;
    }
    return -1;
  };
}
var og = pS, mS = og, gS = mS(function(e, t, n) {
  for (var o = 0, l = e.length; o < l; o++)
    if (t.call(n, e[o], o, e))
      return o;
  return -1;
}), Gc = gS, Qd = rr, ef = Cn, tf = Or, vS = jc, hS = os, bS = Jm, xS = or, nf = Sr, yS = gm;
function rg(e, t, n, o, l, a, c) {
  if (e === t)
    return !0;
  if (e && t && !Qd(e) && !Qd(t) && !tf(e) && !tf(t)) {
    if (vS(e))
      return n("" + e, "" + t, l, a, c);
    if (hS(e) || bS(e))
      return n(+e, +t, l, a, c);
    var p, d, s, f = ef(e), g = ef(t);
    if (f || g ? f && g : e.constructor === t.constructor)
      return d = nf(e), s = nf(t), o && (p = o(e, t, l)), d.length === s.length ? xS(p) ? yS(d, function(D, b) {
        return D === s[b] && rg(e[D], t[s[b]], n, o, f || g ? b : D, e, t);
      }) : !!p : !1;
  }
  return n(e, t, l, a, c);
}
var sg = rg;
function CS(e, t) {
  return e === t;
}
var lg = CS, wS = sg, ES = lg;
function SS(e, t) {
  return wS(e, t, ES);
}
var ig = SS, of = Sr, DS = Gc, rf = ig, OS = mm, TS = vm;
function MS(e, t) {
  var n = of(e), o = of(t);
  if (o.length) {
    if (TS(n, o))
      return OS(o, function(l) {
        return DS(n, function(a) {
          return a === l && rf(e[a], t[l]);
        }) > -1;
      });
  } else
    return !0;
  return rf(e, t);
}
var IS = MS, sf = sg, lf = lg, kS = ko, VS = or;
function $S(e, t, n) {
  return kS(n) ? sf(e, t, function(o, l, a, c, p) {
    var d = n(o, l, a, c, p);
    return VS(d) ? lf(o, l) : !!d;
  }, n) : sf(e, t, lf);
}
var RS = $S, PS = tg, NS = os, FS = Cn, LS = jc, AS = Qm, _S = Dr;
function WS(e) {
  return _S(e) ? "null" : PS(e) ? "symbol" : NS(e) ? "date" : FS(e) ? "array" : LS(e) ? "regexp" : AS(e) ? "error" : typeof e;
}
var BS = WS, HS = 0;
function zS(e) {
  return [e, ++HS].join("");
}
var jS = zS, qS = og, GS = qS(function(e, t, n) {
  for (var o = e.length - 1; o >= 0; o--)
    if (t.call(n, e[o], o, e))
      return o;
  return -1;
}), US = GS, KS = zl, YS = Or;
function XS(e) {
  if (KS(e))
    return e;
  if (YS(e))
    try {
      return JSON.parse(e);
    } catch {
    }
  return {};
}
var ZS = XS, JS = ns;
function QS(e) {
  return JS(e) ? "" : JSON.stringify(e);
}
var eD = QS, tD = Ac, nD = tD("entries", 2), oD = nD, rD = ko, sD = Cn, lD = Hn, iD = Gc;
function aD(e, t) {
  return function(n, o) {
    var l, a, c = {}, p = [], d = this, s = arguments, f = s.length;
    if (!rD(o)) {
      for (a = 1; a < f; a++)
        l = s[a], p.push.apply(p, sD(l) ? l : [l]);
      o = 0;
    }
    return lD(n, function(g, D) {
      ((o ? o.call(d, g, D, n) : iD(p, function(b) {
        return b === D;
      }) > -1) ? e : t) && (c[D] = g);
    }), c;
  };
}
var ag = aD, cD = ag, uD = cD(1, 0), dD = uD, fD = ag, pD = fD(0, 1), mD = pD, gD = ql;
function vD(e) {
  return gD(e)[0];
}
var hD = vD, bD = ql;
function xD(e) {
  var t = bD(e);
  return t[t.length - 1];
}
var yD = xD, CD = bm, wD = Hc, Ki = Go;
function ED(e, t) {
  if (e) {
    if (Ki(e, t))
      return !0;
    var n, o, l, a, c, p, d = wD(t), s = 0, f = d.length;
    for (c = e; s < f && (p = !1, n = d[s], a = n ? n.match(CD) : "", a ? (o = a[1], l = a[2], o ? c[o] && Ki(c[o], l) && (p = !0, c = c[o][l]) : Ki(c, l) && (p = !0, c = c[l])) : Ki(c, n) && (p = !0, c = c[n]), p); s++)
      if (s === f - 1)
        return !0;
  }
  return !1;
}
var SD = ED, af = Oi, DD = Hc, OD = Go, cf = /(.+)?\[(\d+)\]$/;
function TD(e, t, n, o, l) {
  if (e[t])
    n && (e[t] = l);
  else {
    var a, c, p = t ? t.match(cf) : null;
    if (n)
      c = l;
    else {
      var d = o ? o.match(cf) : null;
      d && !d[1] ? c = new Array(af(d[2]) + 1) : c = {};
    }
    return p ? p[1] ? (a = af(p[2]), e[p[1]] ? n ? e[p[1]][a] = c : e[p[1]][a] ? c = e[p[1]][a] : e[p[1]][a] = c : (e[p[1]] = new Array(a + 1), e[p[1]][a] = c)) : e[p[2]] = c : e[t] = c, c;
  }
  return e[t];
}
function MD(e, t, n) {
  if (e) {
    if ((e[t] || OD(e, t)) && !uf(t))
      e[t] = n;
    else
      for (var o = e, l = DD(t), a = l.length, c = 0; c < a; c++)
        if (!uf(l[c])) {
          var p = c === a - 1;
          o = TD(o, l[c], p, p ? null : l[c + 1], n);
        }
  }
  return e;
}
function uf(e) {
  return e === "__proto__" || e === "constructor" || e === "prototype";
}
var ID = MD, kD = eg, VD = wa, $D = ko, RD = Hl, PD = Hn;
function ND(e) {
  return function() {
    return kD(e);
  };
}
function FD(e, t, n) {
  var o, l = {};
  return e && (t && VD(t) ? t = ND(t) : $D(t) || (t = RD(t)), PD(e, function(a, c) {
    o = t ? t.call(n, a, c, e) : a, l[o] ? l[o].push(a) : l[o] = [a];
  })), l;
}
var cg = FD, LD = cg, AD = Ei;
function _D(e, t, n) {
  var o = LD(e, t, n || this);
  return AD(o, function(l, a) {
    o[a] = l.length;
  }), o;
}
var WD = _D;
function BD(e, t, n) {
  var o, l, a = [], c = arguments;
  if (c.length < 2 && (t = c[0], e = 0), o = e >> 0, l = t >> 0, o < t)
    for (n = n >> 0 || 1; o < l; o += n)
      a.push(o);
  return a;
}
var HD = BD, df = Sr, zD = $s, jD = Si, qD = bo, GD = Uo;
function UD(e, t) {
  if (e && t) {
    var n = GD.apply(this, [{}].concat(zD(arguments, 1))), o = df(n);
    qD(df(e), function(l) {
      jD(o, l) && (e[l] = n[l]);
    });
  }
  return e;
}
var KD = UD, YD = Sm, XD = YD(function(e, t) {
  return e > t;
}), ZD = XD;
function JD(e) {
  return (e.split(".")[1] || "").length;
}
var Da = JD, QD = Oi;
function eO(e, t) {
  if (e.repeat)
    return e.repeat(t);
  var n = isNaN(t) ? [] : new Array(QD(t));
  return n.join(e) + (n.length > 0 ? e : "");
}
var Mi = eO;
function tO(e, t) {
  return e.substring(0, t) + "." + e.substring(t, e.length);
}
var ug = tO, Yi = Mi, Za = ug;
function nO(e) {
  var t = "" + e, n = t.match(/^([-+]?)((\d+)|((\d+)?[.](\d+)?))e([-+]{1})([0-9]+)$/);
  if (n) {
    var o = e < 0, l = o ? "-" : "", a = n[3] || "", c = n[5] || "", p = n[6] || "", d = n[7], s = n[8], f = s - p.length, g = s - a.length, D = s - c.length;
    return d === "+" ? a ? l + a + Yi("0", s) : f > 0 ? l + c + p + Yi("0", f) : l + c + Za(p, s) : a ? g > 0 ? l + "0." + Yi("0", Math.abs(g)) + a : l + Za(a, g) : D > 0 ? l + "0." + Yi("0", Math.abs(D)) + c + p : l + Za(c, D) + p;
  }
  return t;
}
var rs = nO, ff = Da, pf = rs;
function oO(e, t) {
  var n = pf(e), o = pf(t);
  return parseInt(n.replace(".", "")) * parseInt(o.replace(".", "")) / Math.pow(10, ff(n) + ff(o));
}
var dg = oO, rO = dg, mf = Vs, sO = rs;
function lO(e) {
  return function(t, n) {
    var o = mf(t), l = o;
    if (o) {
      n = n >> 0;
      var a = sO(o), c = a.split("."), p = c[0], d = c[1] || "", s = d.substring(0, n + 1), f = p + (s ? "." + s : "");
      if (n >= d.length)
        return mf(f);
      if (f = o, n > 0) {
        var g = Math.pow(10, n);
        l = Math[e](rO(f, g)) / g;
      } else
        l = Math[e](f);
    }
    return l;
  };
}
var Uc = lO, iO = Uc, aO = iO("round"), Kc = aO, cO = Uc, uO = cO("ceil"), fg = uO, dO = Uc, fO = dO("floor"), pg = fO, pO = ns, mO = rr, gO = rs;
function vO(e) {
  return mO(e) ? gO(e) : "" + (pO(e) ? "" : e);
}
var xo = vO, hO = Kc, bO = xo, xO = Mi, yO = ug;
function CO(e, t) {
  t = t >> 0;
  var n = bO(hO(e, t)), o = n.split("."), l = o[0], a = o[1] || "", c = t - a.length;
  return t ? c > 0 ? l + "." + a + xO("0", c) : l + yO(a, Math.abs(c)) : l;
}
var Yc = CO, wO = Er, EO = Kc, SO = fg, DO = pg, OO = rr, TO = xo, MO = Yc, IO = rs, kO = Uo;
function VO(e, t) {
  var n = kO({}, wO.commafyOptions, t), o = n.digits, l = OO(e), a, c, p, d, s;
  return l ? (a = (n.ceil ? SO : n.floor ? DO : EO)(e, o), c = IO(o ? MO(a, o) : a).split("."), d = c[0], s = c[1], p = d && a < 0, p && (d = d.substring(1, d.length))) : (a = TO(e).replace(/,/g, ""), c = a ? [a] : [], d = c[0]), c.length ? (p ? "-" : "") + d.replace(new RegExp("(?=(?!(\\b))(.{" + (n.spaceNumber || 3) + "})+$)", "g"), n.separator || ",") + (s ? "." + s : "") : a;
}
var $O = VO, RO = Oi, PO = wm, NO = PO(RO), FO = NO, LO = dg, gf = Vs;
function AO(e, t) {
  var n = gf(e), o = gf(t);
  return LO(n, o);
}
var Xc = AO, vf = Da, hf = rs, bf = Xc;
function _O(e, t) {
  var n = hf(e), o = hf(t), l = Math.pow(10, Math.max(vf(n), vf(o)));
  return (bf(e, l) + bf(t, l)) / l;
}
var mg = _O, WO = mg, xf = Vs;
function BO(e, t) {
  return WO(xf(e), xf(t));
}
var HO = BO, yf = Da, Cf = rs, wf = Vs, zO = Yc;
function jO(e, t) {
  var n = wf(e), o = wf(t), l = Cf(n), a = Cf(o), c = yf(l), p = yf(a), d = Math.pow(10, Math.max(c, p)), s = c >= p ? c : p;
  return parseFloat(zO((n * d - o * d) / d, s));
}
var qO = jO, Ef = Da, Sf = rs, GO = Xc;
function UO(e, t) {
  var n = Sf(e), o = Sf(t), l = Ef(n), a = Ef(o), c = a - l, p = c < 0, d = Math.pow(10, p ? Math.abs(c) : c);
  return GO(n.replace(".", "") / o.replace(".", ""), p ? 1 / d : d);
}
var gg = UO, KO = gg, Df = Vs;
function YO(e, t) {
  return KO(Df(e), Df(t));
}
var XO = YO, Ja = mg, ZO = ko, JO = Hn, QO = Di;
function eT(e, t, n) {
  var o = 0;
  return JO(e, t ? ZO(t) ? function() {
    o = Ja(o, t.apply(n, arguments));
  } : function(l) {
    o = Ja(o, QO(l, t));
  } : function(l) {
    o = Ja(o, l);
  }), o;
}
var vg = eT, tT = gg, nT = Xm, oT = vg;
function rT(e, t, n) {
  return tT(oT(e, t, n), nT(e));
}
var sT = rT, lT = "first", Ii = lT, iT = "last", Oa = iT;
function aT(e) {
  return e.getFullYear();
}
var ki = aT, cT = 864e5, Vi = cT;
function uT(e) {
  return e.getMonth();
}
var Ta = uT, dT = os, fT = Fo;
function pT(e) {
  return dT(e) && !isNaN(fT(e));
}
var Lo = pT, Of = Ii, mT = Oa, gT = Vi, vT = ki, Tf = Fo, Mf = Ta, hT = Vo, bT = Lo, xT = rr;
function hg(e, t, n) {
  var o = t && !isNaN(t) ? t : 0;
  if (e = hT(e), bT(e)) {
    if (n === Of)
      return new Date(vT(e), Mf(e) + o, 1);
    if (n === mT)
      return new Date(Tf(hg(e, o + 1, Of)) - 1);
    if (xT(n) && e.setDate(n), o) {
      var l = e.getDate();
      if (e.setMonth(Mf(e) + o), l !== e.getDate())
        return e.setDate(1), new Date(Tf(e) - gT);
    }
  }
  return e;
}
var $i = hg, yT = Ii, If = Oa, kf = ki, CT = $i, wT = Vo, ET = Lo;
function ST(e, t, n) {
  var o;
  if (e = wT(e), ET(e) && (t && (o = t && !isNaN(t) ? t : 0, e.setFullYear(kf(e) + o)), n || !isNaN(n))) {
    if (n === yT)
      return new Date(kf(e), 0, 1);
    if (n === If)
      return e.setMonth(11), CT(e, 0, If);
    e.setMonth(n);
  }
  return e;
}
var Ma = ST, DT = $i, OT = Vo, TT = Lo;
function MT(e) {
  var t = e.getMonth();
  return t < 3 ? 1 : t < 6 ? 2 : t < 9 ? 3 : 4;
}
function IT(e, t, n) {
  var o, l = t && !isNaN(t) ? t * 3 : 0;
  return e = OT(e), TT(e) ? (o = (MT(e) - 1) * 3, e.setMonth(o), DT(e, l, n)) : e;
}
var kT = IT, Vf = Ii, VT = Oa, $T = Oi, RT = ki, PT = Ta, NT = Fo, FT = Vo, LT = Lo;
function bg(e, t, n) {
  if (e = FT(e), LT(e) && !isNaN(t)) {
    if (e.setDate(e.getDate() + $T(t)), n === Vf)
      return new Date(RT(e), PT(e), e.getDate());
    if (n === VT)
      return new Date(NT(bg(e, 1, Vf)) - 1);
  }
  return e;
}
var xg = bg;
function AT(e) {
  return e.toUpperCase();
}
var yg = AT, _T = Vi, WT = _T * 7, Cg = WT, BT = Er, Qa = Vi, HT = Cg, zT = Fo, jT = Vo, qT = Lo, $f = rr;
function GT(e, t, n, o) {
  if (e = jT(e), qT(e)) {
    var l = $f(n), a = $f(o), c = zT(e);
    if (l || a) {
      var p = a ? o : BT.firstDayOfWeek, d = e.getDay(), s = l ? n : d;
      if (d !== s) {
        var f = 0;
        p > d ? f = -(7 - p + d) : p < d && (f = p - d), s > p ? c += ((s === 0 ? 7 : s) - p + f) * Qa : s < p ? c += (7 - p + s + f) * Qa : c += f * Qa;
      }
    }
    return t && !isNaN(t) && (c += t * HT), new Date(c);
  }
  return e;
}
var wg = GT, UT = Er, KT = Cg, YT = rr, XT = Lo, ZT = wg, Rf = Fo;
function JT(e) {
  return function(t, n) {
    var o = YT(n) ? n : UT.firstDayOfWeek, l = ZT(t, 0, o, o);
    if (XT(l)) {
      var a = new Date(l.getFullYear(), l.getMonth(), l.getDate()), c = e(l), p = c.getDay();
      return p > o && c.setDate(7 - p + o + 1), p < o && c.setDate(o - p + 1), Math.floor((Rf(a) - Rf(c)) / KT + 1);
    }
    return NaN;
  };
}
var Eg = JT, QT = Eg, eM = QT(function(e) {
  return new Date(e.getFullYear(), 0, 1);
}), Sg = eM, tM = ki, nM = Ta;
function oM(e) {
  return new Date(tM(e), nM(e), e.getDate());
}
var rM = oM, sM = Fo, lM = rM;
function iM(e) {
  return sM(lM(e));
}
var aM = iM, cM = Vi, uM = Ii, Pf = aM, dM = Ma, fM = Vo, pM = Lo;
function mM(e) {
  return e = fM(e), pM(e) ? Math.floor((Pf(e) - Pf(dM(e, 0, uM))) / cM) + 1 : NaN;
}
var Dg = mM, gM = xo, vM = or, hM = Mi;
function bM(e, t, n) {
  var o = gM(e);
  return t = t >> 0, n = vM(n) ? " " : "" + n, o.padStart ? o.padStart(t, n) : t > o.length ? (t -= o.length, t > n.length && (n += hM(n, t / n.length)), n.slice(0, t) + o) : o;
}
var Og = bM, si = Er, xM = yg, yM = ki, Nf = Ta, CM = Vo, wM = Sg, EM = Dg, SM = Uo, DM = Lo, OM = ko, Jo = Og;
function kr(e, t, n, o) {
  var l = t[n];
  return l ? OM(l) ? l(o, n, e) : l[o] : o;
}
var TM = /\[([^\]]+)]|y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|S{1,3}|Z{1,2}|W{1,2}|D{1,3}|[aAeEq]/g;
function MM(e, t, n) {
  if (e) {
    if (e = CM(e), DM(e)) {
      var o = t || si.parseDateFormat || si.formatString, l = e.getHours(), a = l < 12 ? "am" : "pm", c = SM({}, si.parseDateRules || si.formatStringMatchs, n ? n.formats : null), p = function(E, T) {
        return ("" + yM(e)).substr(4 - T);
      }, d = function(E, T) {
        return Jo(Nf(e) + 1, T, "0");
      }, s = function(E, T) {
        return Jo(e.getDate(), T, "0");
      }, f = function(E, T) {
        return Jo(l, T, "0");
      }, g = function(E, T) {
        return Jo(l <= 12 ? l : l - 12, T, "0");
      }, D = function(E, T) {
        return Jo(e.getMinutes(), T, "0");
      }, b = function(E, T) {
        return Jo(e.getSeconds(), T, "0");
      }, x = function(E, T) {
        return Jo(e.getMilliseconds(), T, "0");
      }, S = function(E, T) {
        var W = e.getTimezoneOffset() / 60 * -1;
        return kr(e, c, E, (W >= 0 ? "+" : "-") + Jo(W, 2, "0") + (T === 1 ? ":" : "") + "00");
      }, y = function(E, T) {
        return Jo(kr(e, c, E, wM(e, (n ? n.firstDay : null) || si.firstDayOfWeek)), T, "0");
      }, h = function(E, T) {
        return Jo(kr(e, c, E, EM(e)), T, "0");
      }, O = {
        yyyy: p,
        yy: p,
        MM: d,
        M: d,
        dd: s,
        d: s,
        HH: f,
        H: f,
        hh: g,
        h: g,
        mm: D,
        m: D,
        ss: b,
        s: b,
        SSS: x,
        S: x,
        ZZ: S,
        Z: S,
        WW: y,
        W: y,
        DDD: h,
        D: h,
        a: function(E) {
          return kr(e, c, E, a);
        },
        A: function(E) {
          return kr(e, c, E, xM(a));
        },
        e: function(E) {
          return kr(e, c, E, e.getDay());
        },
        E: function(E) {
          return kr(e, c, E, e.getDay());
        },
        q: function(E) {
          return kr(e, c, E, Math.floor((Nf(e) + 3) / 3));
        }
      };
      return o.replace(TM, function(E, T) {
        return T || (O[E] ? O[E](E, E.length) : E);
      });
    }
    return "Invalid Date";
  }
  return "";
}
var Tg = MM, IM = Fo, kM = Sa, VM = Date.now || function() {
  return IM(kM());
}, Mg = VM, $M = Fo, RM = Mg, PM = Vo, NM = os, FM = function(e, t) {
  if (e) {
    var n = PM(e, t);
    return NM(n) ? $M(n) : n;
  }
  return RM();
}, LM = FM, Ff = Tg;
function AM(e, t, n) {
  return e && t ? (e = Ff(e, n), e !== "Invalid Date" && e === Ff(t, n)) : !1;
}
var _M = AM, WM = Eg, BM = WM(function(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}), HM = BM, zM = Ma, jM = Vo, qM = Lo, GM = Um;
function UM(e, t) {
  return e = jM(e), qM(e) ? GM(zM(e, t)) ? 366 : 365 : NaN;
}
var KM = UM, YM = Vi, XM = Ii, ZM = Oa, Lf = Fo, Af = $i, JM = Vo, QM = Lo;
function eI(e, t) {
  return e = JM(e), QM(e) ? Math.floor((Lf(Af(e, t, ZM)) - Lf(Af(e, t, XM))) / YM) + 1 : NaN;
}
var tI = eI, _f = Fo, nI = Sa, Wf = Vo, Bf = Lo, Hf = [
  ["yyyy", 31536e6],
  ["MM", 2592e6],
  ["dd", 864e5],
  ["HH", 36e5],
  ["mm", 6e4],
  ["ss", 1e3],
  ["S", 0]
];
function oI(e, t) {
  var n, o, l, a, c, p, d = { done: !1, time: 0 };
  if (e = Wf(e), t = t ? Wf(t) : nI(), Bf(e) && Bf(t) && (n = _f(e), o = _f(t), n < o))
    for (a = d.time = o - n, d.done = !0, p = 0, c = Hf.length; p < c; p++)
      l = Hf[p], a >= l[1] ? p === c - 1 ? d[l[0]] = a || 0 : (d[l[0]] = Math.floor(a / l[1]), a -= d[l[0]] * l[1]) : d[l[0]] = 0;
  return d;
}
var rI = oI, sI = xo, lI = or, iI = Mi;
function aI(e, t, n) {
  var o = sI(e);
  return t = t >> 0, n = lI(n) ? " " : "" + n, o.padEnd ? o.padEnd(t, n) : t > o.length ? (t -= o.length, t > n.length && (n += iI(n, t / n.length)), o + n.slice(0, t)) : o;
}
var cI = aI, uI = xo, dI = Mi;
function fI(e, t) {
  return dI(uI(e), t);
}
var pI = fI, mI = xo;
function gI(e) {
  return e && e.trimRight ? e.trimRight() : mI(e).replace(/[\s\uFEFF\xA0]+$/g, "");
}
var Ig = gI, vI = xo;
function hI(e) {
  return e && e.trimLeft ? e.trimLeft() : vI(e).replace(/^[\s\uFEFF\xA0]+/g, "");
}
var kg = hI, bI = Ig, xI = kg;
function yI(e) {
  return e && e.trim ? e.trim() : bI(xI(e));
}
var Vg = yI, CI = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
}, $g = CI, wI = xo, EI = Sr;
function SI(e) {
  var t = new RegExp("(?:" + EI(e).join("|") + ")", "g");
  return function(n) {
    return wI(n).replace(t, function(o) {
      return e[o];
    });
  };
}
var Rg = SI, DI = $g, OI = Rg, TI = OI(DI), MI = TI, zf = $g, II = Rg, kI = Hn, Pg = {};
kI(zf, function(e, t) {
  Pg[zf[t]] = t;
});
var VI = II(Pg), $I = VI;
function RI(e, t, n) {
  return e.substring(t, n);
}
var Ng = RI;
function PI(e) {
  return e.toLowerCase();
}
var Fg = PI, NI = xo, Vr = Ng, li = yg, FI = Fg, ec = {};
function LI(e) {
  if (e = NI(e), ec[e])
    return ec[e];
  var t = e.length, n = e.replace(/([-]+)/g, function(o, l, a) {
    return a && a + l.length < t ? "-" : "";
  });
  return t = n.length, n = n.replace(/([A-Z]+)/g, function(o, l, a) {
    var c = l.length;
    return l = FI(l), a ? c > 2 && a + c < t ? li(Vr(l, 0, 1)) + Vr(l, 1, c - 1) + li(Vr(l, c - 1, c)) : li(Vr(l, 0, 1)) + Vr(l, 1, c) : c > 1 && a + c < t ? Vr(l, 0, c - 1) + li(Vr(l, c - 1, c)) : l;
  }).replace(/(-[a-zA-Z])/g, function(o, l) {
    return li(Vr(l, 1, l.length));
  }), ec[e] = n, n;
}
var AI = LI, _I = xo, Ws = Ng, $r = Fg, tc = {};
function WI(e) {
  if (e = _I(e), tc[e])
    return tc[e];
  if (/^[A-Z]+$/.test(e))
    return $r(e);
  var t = e.replace(/^([a-z])([A-Z]+)([a-z]+)$/, function(n, o, l, a) {
    var c = l.length;
    return c > 1 ? o + "-" + $r(Ws(l, 0, c - 1)) + "-" + $r(Ws(l, c - 1, c)) + a : $r(o + "-" + l + a);
  }).replace(/^([A-Z]+)([a-z]+)?$/, function(n, o, l) {
    var a = o.length;
    return $r(Ws(o, 0, a - 1) + "-" + Ws(o, a - 1, a) + (l || ""));
  }).replace(/([a-z]?)([A-Z]+)([a-z]?)/g, function(n, o, l, a, c) {
    var p = l.length;
    return p > 1 && (o && (o += "-"), a) ? (o || "") + $r(Ws(l, 0, p - 1)) + "-" + $r(Ws(l, p - 1, p)) + a : (o || "") + (c ? "-" : "") + $r(l) + (a || "");
  });
  return t = t.replace(/([-]+)/g, function(n, o, l) {
    return l && l + o.length < t.length ? "-" : "";
  }), tc[e] = t, t;
}
var BI = WI, HI = xo;
function zI(e, t, n) {
  var o = HI(e);
  return (arguments.length === 1 ? o : o.substring(n)).indexOf(t) === 0;
}
var jI = zI, qI = xo;
function GI(e, t, n) {
  var o = qI(e), l = arguments.length;
  return l > 1 && (l > 2 ? o.substring(0, n).indexOf(t) === n - 1 : o.indexOf(t) === o.length - 1);
}
var UI = GI, KI = Er, YI = xo, XI = Vg, ZI = Di;
function JI(e, t, n) {
  return YI(e).replace((n || KI).tmplRE || /\{{2}([.\w[\]\s]+)\}{2}/g, function(o, l) {
    return ZI(t, XI(l));
  });
}
var Lg = JI, QI = Lg;
function ek(e, t) {
  return QI(e, t, { tmplRE: /\{([.\w[\]\s]+)\}/g });
}
var tk = ek;
function nk() {
}
var ok = nk, jf = $s;
function rk(e, t) {
  var n = jf(arguments, 2);
  return function() {
    return e.apply(t, jf(arguments).concat(n));
  };
}
var sk = rk, qf = $s;
function lk(e, t) {
  var n = !1, o = null, l = qf(arguments, 2);
  return function() {
    return n || (o = e.apply(t, qf(arguments).concat(l)), n = !0), o;
  };
}
var ik = lk, ak = $s;
function ck(e, t, n) {
  var o = 0, l = [];
  return function() {
    var a = arguments;
    o++, o <= e && l.push(a[0]), o >= e && t.apply(n, [l].concat(ak(a)));
  };
}
var uk = ck, dk = $s;
function fk(e, t, n) {
  var o = 0, l = [];
  return n = n || this, function() {
    var a = arguments;
    o++, o < e && (l.push(a[0]), t.apply(n, [l].concat(dk(a))));
  };
}
var pk = fk;
function mk(e, t, n) {
  var o = null, l = null, a = n || {}, c = !1, p = null, d = "leading" in a ? a.leading : !0, s = "trailing" in a ? a.trailing : !1, f = function() {
    o = null, l = null;
  }, g = function() {
    c = !0, e.apply(l, o), p = setTimeout(D, t), f();
  }, D = function() {
    p = null, !c && s === !0 && g();
  }, b = function() {
    var S = p !== null;
    return S && clearTimeout(p), f(), p = null, c = !1, S;
  }, x = function() {
    o = arguments, l = this, c = !1, p === null && (d === !0 ? g() : s === !0 && (p = setTimeout(D, t)));
  };
  return x.cancel = b, x;
}
var gk = mk;
function vk(e, t, n) {
  var o = null, l = null, a = n || {}, c = !1, p = null, d = typeof n == "boolean", s = "leading" in a ? a.leading : d, f = "trailing" in a ? a.trailing : !d, g = function() {
    o = null, l = null;
  }, D = function() {
    c = !0, e.apply(l, o), g();
  }, b = function() {
    s === !0 && (p = null), !c && f === !0 && D();
  }, x = function() {
    var y = p !== null;
    return y && clearTimeout(p), g(), p = null, c = !1, y;
  }, S = function() {
    c = !1, o = arguments, l = this, p === null ? s === !0 && D() : clearTimeout(p), p = setTimeout(b, t);
  };
  return S.cancel = x, S;
}
var hk = vk, bk = $s;
function xk(e, t) {
  var n = bk(arguments, 2), o = this;
  return setTimeout(function() {
    e.apply(o, n);
  }, t);
}
var yk = xk, Ck = decodeURIComponent, Ag = Ck, Gf = Ag, wk = bo, Ek = Or;
function Sk(e) {
  var t, n = {};
  return e && Ek(e) && wk(e.split("&"), function(o) {
    t = o.split("="), n[Gf(t[0])] = Gf(t[1] || "");
  }), n;
}
var _g = Sk, Dk = encodeURIComponent, Wg = Dk, ma = Wg, Bg = Hn, Hg = Cn, zg = Dr, Ok = or, jg = zl;
function qg(e, t, n) {
  var o, l = [];
  return Bg(e, function(a, c) {
    o = Hg(a), jg(a) || o ? l = l.concat(qg(a, t + "[" + c + "]", o)) : l.push(ma(t + "[" + (n ? "" : c) + "]") + "=" + ma(zg(a) ? "" : a));
  }), l;
}
function Tk(e) {
  var t, n = [];
  return Bg(e, function(o, l) {
    Ok(o) || (t = Hg(o), jg(o) || t ? n = n.concat(qg(o, l, t)) : n.push(ma(l) + "=" + ma(zg(o) ? "" : o)));
  }), n.join("&").replace(/%20/g, "+");
}
var Mk = Tk, Ik = Ko, kk = typeof location === Ik ? 0 : location, Ia = kk, Xi = Ia;
function Vk() {
  return Xi ? Xi.origin || Xi.protocol + "//" + Xi.host : "";
}
var Gg = Vk, Uf = Ia, $k = _g, Rk = Gg;
function Kf(e) {
  return $k(e.split("?")[1] || "");
}
function Pk(e) {
  var t, n, o, l, a = "" + e;
  return a.indexOf("//") === 0 ? a = (Uf ? Uf.protocol : "") + a : a.indexOf("/") === 0 && (a = Rk() + a), o = a.replace(/#.*/, "").match(/(\?.*)/), l = {
    href: a,
    hash: "",
    host: "",
    hostname: "",
    protocol: "",
    port: "",
    search: o && o[1] && o[1].length > 1 ? o[1] : ""
  }, l.path = a.replace(/^([a-z0-9.+-]*:)\/\//, function(c, p) {
    return l.protocol = p, "";
  }).replace(/^([a-z0-9.+-]*)(:\d+)?\/?/, function(c, p, d) {
    return n = d || "", l.port = n.replace(":", ""), l.hostname = p, l.host = p + n, "/";
  }).replace(/(#.*)/, function(c, p) {
    return l.hash = p.length > 1 ? p : "", "";
  }), t = l.hash.match(/#((.*)\?|(.*))/), l.pathname = l.path.replace(/(\?|#.*).*/, ""), l.origin = l.protocol + "//" + l.host, l.hashKey = t && (t[2] || t[1]) || "", l.hashQuery = Kf(l.hash), l.searchQuery = Kf(l.search), l;
}
var Ug = Pk, Yf = Ia, Nk = Gg, Fk = Ym;
function Lk() {
  if (Yf) {
    var e = Yf.pathname, t = Fk(e, "/") + 1;
    return Nk() + (t === e.length ? e : e.substring(0, t));
  }
  return "";
}
var Ak = Lk, Xf = Ia, _k = Ug;
function Wk() {
  return Xf ? _k(Xf.href) : {};
}
var Bk = Wk, Kg = Er, nc = qc, Zf = Ag, Jf = Wg, Hk = Cn, Qf = wa, Yg = os, zk = or, jk = Si, qk = Sr, ga = Uo, oc = bo, Gk = Sa, Zi = Fo, Uk = Ma, Kk = $i, Yk = xg;
function ep(e, t) {
  var n = parseFloat(t), o = Gk(), l = Zi(o);
  switch (e) {
    case "y":
      return Zi(Uk(o, n));
    case "M":
      return Zi(Kk(o, n));
    case "d":
      return Zi(Yk(o, n));
    case "h":
    case "H":
      return l + n * 60 * 60 * 1e3;
    case "m":
      return l + n * 60 * 1e3;
    case "s":
      return l + n * 1e3;
  }
  return l;
}
function rc(e) {
  return (Yg(e) ? e : new Date(e)).toUTCString();
}
function es(e, t, n) {
  if (nc) {
    var o, l, a, c, p, d, s = [], f = arguments;
    return Hk(e) ? s = e : f.length > 1 ? s = [ga({ name: e, value: t }, n)] : Qf(e) && (s = [e]), s.length > 0 ? (oc(s, function(g) {
      o = ga({}, Kg.cookies, g), a = [], o.name && (l = o.expires, a.push(Jf(o.name) + "=" + Jf(Qf(o.value) ? JSON.stringify(o.value) : o.value)), l && (isNaN(l) ? l = l.replace(/^([0-9]+)(y|M|d|H|h|m|s)$/, function(D, b, x) {
        return rc(ep(x, b));
      }) : /^[0-9]{11,13}$/.test(l) || Yg(l) ? l = rc(l) : l = rc(ep("d", l)), o.expires = l), oc(["expires", "path", "domain", "secure"], function(D) {
        zk(o[D]) || a.push(o[D] && D === "secure" ? D : D + "=" + o[D]);
      })), nc.cookie = a.join("; ");
    }), !0) : (c = {}, p = nc.cookie, p && oc(p.split("; "), function(g) {
      d = g.indexOf("="), c[Zf(g.substring(0, d))] = Zf(g.substring(d + 1) || "");
    }), f.length === 1 ? c[e] : c);
  }
  return !1;
}
function Xk(e) {
  return jk(Xg(), e);
}
function tp(e) {
  return es(e);
}
function np(e, t, n) {
  return es(e, t, n), es;
}
function op(e, t) {
  es(e, "", ga({ expires: -1 }, Kg.cookies, t));
}
function Xg() {
  return qk(es());
}
function Zk() {
  return es();
}
ga(es, {
  has: Xk,
  set: np,
  setItem: np,
  get: tp,
  getItem: tp,
  remove: op,
  removeItem: op,
  keys: Xg,
  getJSON: Zk
});
var Jk = es, Qk = Ko, sc = qc, lc = ng, eV = Uo, tV = bo;
function rp(e) {
  try {
    var t = "__xe_t";
    return e.setItem(t, 1), e.removeItem(t), !0;
  } catch {
    return !1;
  }
}
function Ji(e) {
  return navigator.userAgent.indexOf(e) > -1;
}
function nV() {
  var e, t, n, o = !1, l = !1, a = !1, c = {
    isNode: !1,
    isMobile: o,
    isPC: !1,
    isDoc: !!sc
  };
  if (!lc && typeof process !== Qk)
    c.isNode = !0;
  else {
    n = Ji("Edge"), t = Ji("Chrome"), o = /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent), c.isDoc && (e = sc.body || sc.documentElement, tV(["webkit", "khtml", "moz", "ms", "o"], function(p) {
      c["-" + p] = !!e[p + "MatchesSelector"];
    }));
    try {
      l = rp(lc.localStorage);
    } catch {
    }
    try {
      a = rp(lc.sessionStorage);
    } catch {
    }
    eV(c, {
      edge: n,
      firefox: Ji("Firefox"),
      msie: !n && c["-ms"],
      safari: !t && !n && Ji("Safari"),
      isMobile: o,
      isPC: !o,
      isLocalStorage: l,
      isSessionStorage: a
    });
  }
  return c;
}
var oV = nV, Zg = Vb, sp = Uo, rV = Ei, sV = fm, lV = zb, iV = Ub, aV = jl, cV = mm, uV = gm, dV = vm, fV = bo, pV = Wc, mV = hm, gV = gx, vV = Bc, hV = Gx, bV = zc, xV = Cm, yV = ty, CV = $s, wV = ay, EV = dy, SV = Si, DV = my, OV = by, TV = Cy, MV = Sy, IV = Ty, kV = Hy, VV = Om, $V = Gy, RV = Yy, PV = Em, NV = eC, FV = PC, LV = _C, AV = zC, _V = Fm, WV = XC, BV = QC, HV = rw, zV = _m, jV = Wm, qV = Go, GV = Cn, UV = Dr, KV = dw, YV = or, XV = ko, ZV = wa, JV = Or, QV = zl, e$ = Um, t$ = os, n$ = ns, o$ = Hn, r$ = Lw, s$ = Bw, l$ = Yw, i$ = Ym, a$ = Sr, c$ = ql, u$ = _c, d$ = Xm, f$ = km, p$ = $m, m$ = Vm, g$ = sE, v$ = pE, h$ = Zm, b$ = Jm, x$ = rr, y$ = jc, C$ = Qm, w$ = CE, E$ = eg, S$ = tg, D$ = ME, O$ = $E, T$ = LE, M$ = HE, I$ = GE, k$ = XE, V$ = eS, $$ = rS, R$ = aS, P$ = IS, N$ = ig, F$ = RS, L$ = BS, A$ = jS, _$ = Gc, W$ = US, B$ = ZS, H$ = eD, z$ = oD, j$ = dD, q$ = mD, G$ = hD, U$ = yD, K$ = SD, Y$ = Di, X$ = ID, Z$ = cg, J$ = WD, Q$ = HD, eR = KD, tR = ym, nR = Dm, oR = ZD, rR = $O, sR = Kc, lR = fg, iR = pg, aR = Yc, cR = FO, uR = Vs, dR = rs, fR = HO, pR = qO, mR = Xc, gR = XO, vR = vg, hR = sT, bR = Ma, xR = kT, yR = $i, CR = xg, wR = Vo, ER = Tg, SR = Mg, DR = LM, OR = Lo, TR = _M, MR = wg, IR = Dg, kR = Sg, VR = HM, $R = KM, RR = tI, PR = rI, NR = cI, FR = Og, LR = pI, AR = Vg, _R = Ig, WR = kg, BR = MI, HR = $I, zR = AI, jR = BI, qR = jI, GR = UI, UR = Lg, KR = tk, lp = xo, YR = ok, XR = Hl, ZR = sk, JR = ik, QR = uk, eP = pk, tP = gk, nP = hk, oP = yk, rP = _g, sP = Mk, lP = Ug, iP = Ak, aP = Bk, cP = Jk, uP = oV;
sp(Zg, {
  // object
  assign: sp,
  objectEach: rV,
  lastObjectEach: sV,
  objectMap: lV,
  merge: iV,
  // array
  uniq: mV,
  union: gV,
  sortBy: hV,
  orderBy: bV,
  shuffle: xV,
  sample: yV,
  some: cV,
  every: uV,
  slice: CV,
  filter: wV,
  find: DV,
  findLast: OV,
  findKey: EV,
  includes: SV,
  arrayIndexOf: zV,
  arrayLastIndexOf: jV,
  map: aV,
  reduce: TV,
  copyWithin: MV,
  chunk: IV,
  zip: kV,
  unzip: VV,
  zipObject: $V,
  flatten: RV,
  toArray: vV,
  includeArrays: dV,
  pluck: PV,
  invoke: NV,
  arrayEach: fV,
  lastArrayEach: pV,
  toArrayTree: FV,
  toTreeArray: LV,
  findTree: AV,
  eachTree: _V,
  mapTree: WV,
  filterTree: BV,
  searchTree: HV,
  // base
  hasOwnProp: qV,
  eqNull: n$,
  isNaN: KV,
  isFinite: g$,
  isUndefined: YV,
  isArray: GV,
  isFloat: v$,
  isInteger: h$,
  isFunction: XV,
  isBoolean: b$,
  isString: JV,
  isNumber: x$,
  isRegExp: y$,
  isObject: ZV,
  isPlainObject: QV,
  isDate: t$,
  isError: C$,
  isTypeError: w$,
  isEmpty: E$,
  isNull: UV,
  isSymbol: S$,
  isArguments: D$,
  isElement: O$,
  isDocument: T$,
  isWindow: M$,
  isFormData: I$,
  isMap: k$,
  isWeakMap: V$,
  isSet: $$,
  isWeakSet: R$,
  isLeapYear: e$,
  isMatch: P$,
  isEqual: N$,
  isEqualWith: F$,
  getType: L$,
  uniqueId: A$,
  getSize: d$,
  indexOf: l$,
  lastIndexOf: i$,
  findIndexOf: _$,
  findLastIndexOf: W$,
  toStringJSON: B$,
  toJSONString: H$,
  keys: a$,
  values: c$,
  entries: z$,
  pick: j$,
  omit: q$,
  first: G$,
  last: U$,
  each: o$,
  forOf: r$,
  lastForOf: s$,
  lastEach: f$,
  has: K$,
  get: Y$,
  set: X$,
  groupBy: Z$,
  countBy: J$,
  clone: u$,
  clear: m$,
  remove: p$,
  range: Q$,
  destructuring: eR,
  // number
  random: tR,
  min: oR,
  max: nR,
  commafy: rR,
  round: sR,
  ceil: lR,
  floor: iR,
  toFixed: aR,
  toNumber: uR,
  toNumberString: dR,
  toInteger: cR,
  add: fR,
  subtract: pR,
  multiply: mR,
  divide: gR,
  sum: vR,
  mean: hR,
  // date
  now: SR,
  timestamp: DR,
  isValidDate: OR,
  isDateSame: TR,
  toStringDate: wR,
  toDateString: ER,
  getWhatYear: bR,
  getWhatQuarter: xR,
  getWhatMonth: yR,
  getWhatWeek: MR,
  getWhatDay: CR,
  getYearDay: IR,
  getYearWeek: kR,
  getMonthWeek: VR,
  getDayOfYear: $R,
  getDayOfMonth: RR,
  getDateDiff: PR,
  // string
  trim: AR,
  trimLeft: WR,
  trimRight: _R,
  escape: BR,
  unescape: HR,
  camelCase: zR,
  kebabCase: jR,
  repeat: LR,
  padStart: FR,
  padEnd: NR,
  startsWith: qR,
  endsWith: GR,
  template: UR,
  toFormatString: KR,
  toString: lp,
  toValueString: lp,
  // function
  noop: YR,
  property: XR,
  bind: ZR,
  once: JR,
  after: QR,
  before: eP,
  throttle: tP,
  debounce: nP,
  delay: oP,
  // url
  unserialize: rP,
  serialize: sP,
  parseUrl: lP,
  // web
  getBaseURL: iP,
  locat: aP,
  browse: uP,
  cookie: cP
});
var dP = Zg;
const i = /* @__PURE__ */ Uh(dP);
var Rr = null, ip = "z-index-manage", Jg = "m", Qg = "s", bi = {
  m: 1e3,
  s: 1e3
};
function ev() {
  return typeof document < "u";
}
function fP() {
  var e = 0;
  if (ev())
    for (var t = document.body.getElementsByTagName("*"), n = 0; n < t.length; n++) {
      var o = t[n];
      if (o && o.style && o.nodeType === 1) {
        var l = o.style.zIndex;
        l && /^\d+$/.test(l) && (e = Math.max(e, Number(l)));
      }
    }
  return e;
}
function tv() {
  return Rr || ev() && (Rr = document.getElementById(ip), Rr || (Rr = document.createElement("div"), Rr.id = ip, Rr.style.display = "none", document.body.appendChild(Rr), Zc(bi.m), Qc(bi.s))), Rr;
}
function nv(e) {
  return function(t) {
    if (t) {
      t = Number(t), bi[e] = t;
      var n = tv();
      n && (n.dataset ? n.dataset[e] = t + "" : n.setAttribute("data-" + e, t + ""));
    }
    return bi[e];
  };
}
var Zc = nv(Jg);
function ov(e, t) {
  return function(o) {
    var l, a = tv();
    if (a) {
      var c = a.dataset ? a.dataset[e] : a.getAttribute("data-" + e);
      c && (l = Number(c));
    }
    return l || (l = bi[e]), o ? Number(o) < l ? t() : o : l;
  };
}
var Jc = ov(Jg, rv);
function rv() {
  return Zc(Jc() + 1);
}
var Qc = nv(Qg), sv = ov(Qg, iv);
function lv() {
  return Jc() + sv();
}
function iv() {
  return Qc(sv() + 1), lv();
}
var Ri = {
  setCurrent: Zc,
  getCurrent: Jc,
  getNext: rv,
  setSubCurrent: Qc,
  getSubCurrent: lv,
  getSubNext: iv,
  getMax: fP
};
const xi = {
  size: "",
  version: 1,
  zIndex: 999,
  resizeInterval: 500
}, kc = {}, av = {
  theme: ""
}, Pi = Ot({
  language: "",
  langMaps: {}
}), Vt = {
  F2: "F2",
  ESCAPE: "Escape",
  ENTER: "Enter",
  TAB: "Tab",
  DELETE: "Delete",
  BACKSPACE: "Backspace",
  SPACEBAR: " ",
  CONTEXT_MENU: "ContextMenu",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  R: "R",
  P: "P",
  Z: "Z",
  X: "X",
  C: "C",
  V: "V",
  M: "M"
}, Vc = i.browse(), ap = {
  " ": "Spacebar",
  Apps: Vt.CONTEXT_MENU,
  Del: Vt.DELETE,
  Up: Vt.ARROW_UP,
  Down: Vt.ARROW_DOWN,
  Left: Vt.ARROW_LEFT,
  Right: Vt.ARROW_RIGHT
}, cv = Vc.firefox ? "DOMMouseScroll" : "mousewheel", $c = [];
function ar(e) {
  const t = e.type === cv;
  $c.forEach(({ type: n, cb: o }) => {
    e.cancelBubble || (n === e.type || t && n === "mousewheel") && o(e);
  });
}
class pP {
  constructor(t, n, o) {
    Object.defineProperty(this, "$event", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.$event = t, Object.assign(this, n, o);
  }
  stopPropagation() {
    const t = this.$event;
    t && t.stopPropagation();
  }
  preventDefault() {
    const t = this.$event;
    t && t.preventDefault();
  }
}
const zt = (e, t, n) => new pP(e, t, n), it = {
  on(e, t, n) {
    $c.push({ comp: e, type: t, cb: n });
  },
  off(e, t) {
    i.remove($c, (n) => n.comp === e && n.type === t);
  },
  hasKey(e, t) {
    const { key: n } = e;
    return t = t.toLowerCase(), n ? t === n.toLowerCase() || !!(ap[n] && ap[n].toLowerCase() === t) : !1;
  }
};
Vc.isDoc && (Vc.msie || (window.addEventListener("copy", ar, !1), window.addEventListener("cut", ar, !1), window.addEventListener("paste", ar, !1)), document.addEventListener("keydown", ar, !1), document.addEventListener("contextmenu", ar, !1), window.addEventListener("mousedown", ar, !1), window.addEventListener("blur", ar, !1), window.addEventListener("resize", ar, !1), window.addEventListener(cv, i.throttle(ar, 100, { leading: !0, trailing: !1 }), { passive: !0, capture: !1 }));
let cp;
const gs = [], mP = 500;
function gP() {
  gs.length && (gs.forEach((e) => {
    e.tarList.forEach((t) => {
      const { target: n, width: o, heighe: l } = t, a = n.clientWidth, c = n.clientHeight;
      (a && o !== a || c && l !== c) && (t.width = a, t.heighe = c, setTimeout(e.callback));
    });
  }), uv());
}
function uv() {
  clearTimeout(cp), cp = setTimeout(gP, xi.resizeInterval || mP);
}
class vP {
  constructor(t) {
    Object.defineProperty(this, "tarList", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "callback", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.callback = t;
  }
  observe(t) {
    if (t) {
      const { tarList: n } = this;
      n.some((o) => o.target === t) || n.push({
        target: t,
        width: t.clientWidth,
        heighe: t.clientHeight
      }), gs.length || uv(), gs.some((o) => o === this) || gs.push(this);
    }
  }
  unobserve(t) {
    i.remove(gs, (n) => n.tarList.some((o) => o.target === t));
  }
  disconnect() {
    i.remove(gs, (t) => t === this);
  }
}
const eu = {
  create(e) {
    return window.ResizeObserver ? new window.ResizeObserver(e) : new vP(e);
  }
};
function Te(e, t) {
  const { langMaps: n, language: o } = Pi;
  return i.toFormatString(i.get(n[o], e, e), t);
}
function dv(e) {
  const { langMaps: t } = Pi;
  return !!t[e];
}
function fv() {
  const { language: e } = Pi;
  return e;
}
function ic(e, t) {
  return function(n, o) {
    const l = `[vxe ${t || ""}] ${Te(n, o)}`;
    return console[e](l), l;
  };
}
const up = "1.0.12", Mo = {
  create: ic,
  warn: ic("warn", `v${up}`),
  err: ic("error", `v${up}`)
}, ii = {}, on = {
  mixin(e) {
    return i.each(e, (t, n) => on.add(n, t)), on;
  },
  get(e) {
    return ii[e] || null;
  },
  add(e, t) {
    if (e && t) {
      const n = ii[e];
      n ? (process.env.NODE_ENV === "development" && i.each(t, (o, l) => {
        !i.eqNull(n[l]) && n[l] !== o && Mo.warn("vxe.error.coverProp", [`Renderer.${e}`, l]);
      }), Object.assign(n, t)) : ii[e] = t;
    }
    return on;
  },
  forEach(e) {
    return i.objectEach(ii, e), on;
  },
  delete(e) {
    return delete ii[e], on;
  }
};
class pv {
  constructor() {
    Object.defineProperty(this, "store", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    });
  }
  mixin(t) {
    return i.each(t, (n, o) => {
      this.add(o, n);
    }), this;
  }
  has(t) {
    return !!this.get(t);
  }
  get(t) {
    return this.store[t];
  }
  add(t, n) {
    const o = this.store[t];
    if (process.env.NODE_ENV === "development") {
      const l = i.keys(o);
      i.each(n, (a, c) => {
        l.includes(c) && Mo.warn("vxe.error.coverProp", [t, c]);
      });
    }
    return this.store[t] = o ? i.merge(o, n) : n, this;
  }
  delete(t) {
    delete this.store[t];
  }
  forEach(t) {
    i.objectEach(this.store, t);
  }
}
const ka = new pv();
process.env.NODE_ENV === "development" && Object.assign(ka, { _name: "Validators" });
class hP {
  constructor() {
    Object.defineProperty(this, "store", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    });
  }
  mixin(t) {
    return i.each(t, (n, o) => {
      this.add(o, n);
    }), this;
  }
  has(t) {
    return !!this.get(t);
  }
  get(t) {
    return this.store[t];
  }
  add(t, n) {
    const o = this.store[t];
    if (i.isFunction(n) && (process.env.NODE_ENV === "development" && Mo.warn("vxe.error.delProp", ["menus -> callback", "menuMethod"]), n = {
      menuMethod: n
    }), process.env.NODE_ENV === "development") {
      const l = i.keys(o);
      i.each(n, (a, c) => {
        l.includes(c) && Mo.warn("vxe.error.coverProp", [t, c]);
      });
    }
    return this.store[t] = o ? i.merge(o, n) : n, this;
  }
  delete(t) {
    delete this.store[t];
  }
  forEach(t) {
    i.objectEach(this.store, t);
  }
}
const tu = new hP();
process.env.NODE_ENV === "development" && Object.assign(tu, { _name: "Menus" });
class bP {
  constructor() {
    Object.defineProperty(this, "store", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    });
  }
  mixin(t) {
    return i.each(t, (n, o) => {
      this.add(o, n);
    }), this;
  }
  has(t) {
    return !!this.get(t);
  }
  get(t) {
    return this.store[t];
  }
  add(t, n) {
    const o = this.store[t];
    if (i.isFunction(n) && (process.env.NODE_ENV === "development" && Mo.warn("vxe.error.delProp", ["formats -> callback", "cellFormatMethod"]), n = {
      cellFormatMethod: n
    }), process.env.NODE_ENV === "development") {
      const l = i.keys(o);
      i.each(n, (a, c) => {
        l.includes(c) && Mo.warn("vxe.error.coverProp", [t, c]);
      });
    }
    return this.store[t] = o ? i.merge(o, n) : n, this;
  }
  delete(t) {
    delete this.store[t];
  }
  forEach(t) {
    i.objectEach(this.store, t);
  }
}
const nu = new bP();
process.env.NODE_ENV === "development" && Object.assign(nu, { _name: "Formats" });
class xP {
  constructor() {
    Object.defineProperty(this, "store", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    });
  }
  mixin(t) {
    return i.each(t, (n, o) => {
      this.add(o, n);
    }), this;
  }
  has(t) {
    return !!this.get(t);
  }
  get(t) {
    return this.store[t];
  }
  add(t, n) {
    const o = this.store[t];
    if (i.isFunction(n) && (process.env.NODE_ENV === "development" && Mo.warn("vxe.error.delProp", ["commands -> callback", "commandMethod"]), n = {
      commandMethod: n
    }), process.env.NODE_ENV === "development") {
      const l = i.keys(o);
      i.each(n, (a, c) => {
        l.includes(c) && Mo.warn("vxe.error.coverProp", [t, c]);
      });
    }
    return this.store[t] = o ? i.merge(o, n) : n, this;
  }
  delete(t) {
    delete this.store[t];
  }
  forEach(t) {
    i.objectEach(this.store, t);
  }
}
const ou = new xP();
process.env.NODE_ENV === "development" && Object.assign(ou, { _name: "Commands" });
const ai = {}, vi = {
  mixin(e) {
    return i.each(e, (t, n) => {
      vi.add(n, t);
    }), vi;
  },
  get(e) {
    return ai[e] || [];
  },
  add(e, t) {
    i.isFunction(t) && (t = {
      tableInterceptorMethod: t
    });
    const n = t.tableInterceptorMethod;
    if (n) {
      let o = ai[e];
      o || (o = ai[e] = []), process.env.NODE_ENV === "development" && o.indexOf(n) > -1 && Mo.warn("vxe.error.coverProp", ["Interceptor", e]), o.push(n);
    }
    return vi;
  },
  delete(e, t) {
    const n = ai[e];
    if (n) {
      i.isFunction(t) && (t = {
        tableInterceptorMethod: t
      });
      const o = t ? t.tableInterceptorMethod : null;
      o ? i.remove(n, (l) => l === o) : delete ai[e];
    }
  }
};
let er;
const Qi = {
  text: "",
  html: ""
};
function yP(e) {
  if (!er) {
    er = document.createElement("textarea"), er.id = "$VxeCopy";
    const t = er.style;
    t.width = "48px", t.height = "24px", t.position = "fixed", t.zIndex = "0", t.left = "-500px", t.top = "-500px", document.body.appendChild(er);
  }
  er.value = e;
}
const mv = {
  getStore() {
    return Qi;
  },
  setStore(e) {
    Object.assign(Qi, e || {});
  },
  /**
   * 复制内容到剪贴板
   *
   * @param {String} content Text 内容
   */
  copy(e) {
    let t = !1;
    try {
      const n = i.toValueString(e);
      yP(n), er.select(), er.setSelectionRange(0, er.value.length), t = document.execCommand("copy"), er.blur(), Qi.text = n, Qi.html = "";
    } catch {
    }
    return t;
  }
};
function hi(e, t) {
  let n = !0, o = !1;
  const l = t || xi.permissionMethod;
  if (e && l) {
    const c = l({ code: e });
    i.isBoolean(c) ? n = c : c && (n = !!c.visible, o = !!c.disabled);
  }
  return {
    code: e,
    visible: n,
    disabled: o
  };
}
const Va = {
  getCheckInfo(e) {
    return hi(e);
  },
  checkVisible(e) {
    return hi(e).visible;
  },
  checkDisable(e) {
    return hi(e).disabled;
  }
}, gv = new pv();
function Ln(e) {
  const t = ut("xeSizeInfo", null), n = Q(() => e.size || (t ? t.value : null));
  return Xt("xeSizeInfo", n), { computeSize: n };
}
function Ni(e) {
  return {
    computePermissionInfo: Q(() => hi(e.permissionCode, e.permissionMethod))
  };
}
const vv = {
  useSize: Ln,
  usePermission: Ni
};
function Fi(e) {
  const t = !e || e === "default" ? "light" : e;
  if (av.theme = t, typeof document < "u") {
    const n = document.documentElement;
    n && n.setAttribute("data-vxe-ui-theme", t);
  }
  return ue;
}
function hv() {
  return av.theme;
}
function ru(e) {
  return Pi.language = e || "zh-CN", ue;
}
function su(e, t) {
  return Pi.langMaps[e] = Object.assign({}, t), ue;
}
function Gl(e) {
  return e && (e.zIndex && Ri.setCurrent(e.zIndex), e.theme && Fi(e.theme), i.merge(xi, e)), ue;
}
function me(e, t) {
  return arguments.length ? i.get(xi, e, t) : xi;
}
function lu(e) {
  return e && Object.assign(kc, e), ue;
}
function dt(e) {
  return arguments.length ? i.get(kc, e) : kc;
}
const bv = "1.0.12", dp = [];
function xv(e, t) {
  return e && e.install && dp.indexOf(e) === -1 && (e.install(ue, t), dp.push(e)), ue;
}
const yv = {};
function Cv(e) {
  return yv[e] || null;
}
function wv(e) {
  e && e.name && (yv[e.name] = e);
}
const ue = {
  coreVersion: bv,
  setTheme: Fi,
  getTheme: hv,
  setConfig: Gl,
  getConfig: me,
  setIcon: lu,
  getIcon: dt,
  setLanguage: ru,
  hasLanguage: dv,
  getLanguage: fv,
  setI18n: su,
  getI18n: Te,
  globalEvents: it,
  GLOBAL_EVENT_KEYS: Vt,
  createEvent: zt,
  globalResize: eu,
  renderer: on,
  validators: ka,
  menus: tu,
  formats: nu,
  commands: ou,
  interceptor: vi,
  clipboard: mv,
  log: Mo,
  permission: Va,
  hooks: gv,
  component: wv,
  getComponent: Cv,
  useFns: vv,
  use: xv
};
Fi();
const CP = {
  vxe: {
    base: {
      pleaseInput: "请输入",
      pleaseSelect: "请选择",
      comma: "，",
      fullStop: "。"
    },
    loading: {
      text: "加载中..."
    },
    error: {
      groupFixed: "如果使用分组表头，冻结列必须按组设置",
      groupMouseRange: '分组表头与 "{0}" 不能同时使用，这可能会出现错误',
      groupTag: '分组列头应该使用 "{0}" 而不是 "{1}"，这可能会出现错误',
      scrollErrProp: '启用虚拟滚动后不支持该参数 "{0}"',
      errConflicts: '参数 "{0}" 与 "{1}" 有冲突',
      unableInsert: "无法插入到指定位置，请检查参数是否正确",
      useErr: '安装 "{0}" 模块时发生错误，可能顺序不正确，依赖的模块需要在 Table 之前安装',
      barUnableLink: "工具栏无法关联表格",
      expandContent: '展开行的插槽应该是 "content"，请检查是否正确',
      reqComp: '缺少 "{0}" 组件，请检查是否正确安装',
      reqModule: '缺少 "{0}" 模块',
      reqProp: '缺少必要的 "{0}" 参数，这可能会导致出现错误',
      emptyProp: '参数 "{0}" 不允许为空',
      errProp: '不支持的参数 "{0}"，可能为 "{1}"',
      colRepet: 'column.{0}="{1}" 重复了，这可能会导致某些功能无法使用',
      notFunc: '方法 "{0}" 不存在',
      errFunc: '参数 "{0}" 不是一个方法',
      notValidators: '全局校验 "{0}" 不存在',
      notFormats: '全局格式化 "{0}" 不存在',
      notCommands: '全局指令 "{0}" 不存在',
      notSlot: '插槽 "{0}" 不存在',
      noTree: '树结构不支持 "{0}"',
      notProp: '不支持的参数 "{0}"',
      checkProp: '当数据量过大时可能会导致复选框卡顿，建议设置参数 "{0}" 提升渲染速度',
      coverProp: '"{0}" 的参数 "{1}" 重复定义，这可能会出现错误',
      delFunc: '方法 "{0}" 已废弃，请使用 "{1}"',
      delProp: '参数 "{0}" 已废弃，请使用 "{1}"',
      delEvent: '事件 "{0}" 已废弃，请使用 "{1}"',
      removeProp: '参数 "{0}" 已废弃，不建议使用，这可能会导致出现错误',
      errFormat: '全局的格式化内容应该使用 "VXETable.formats" 定义，挂载 "formatter={0}" 的方式已不建议使用',
      notType: '不支持的文件类型 "{0}"',
      notExp: "该浏览器不支持导入/导出功能",
      impFields: "导入失败，请检查字段名和数据格式是否正确",
      treeNotImp: "树表格不支持导入"
    },
    table: {
      emptyText: "暂无数据",
      allTitle: "全选/取消",
      seqTitle: "序号",
      confirmFilter: "筛选",
      resetFilter: "重置",
      allFilter: "全部",
      sortAsc: "升序：最低到最高",
      sortDesc: "降序：最高到最低",
      filter: "对所选的列启用筛选",
      impSuccess: "成功导入 {0} 条记录",
      expLoading: "正在导出中",
      expSuccess: "导出成功",
      expFilename: "导出_{0}",
      expOriginFilename: "导出_源_{0}",
      customTitle: "列设置",
      customAll: "全部",
      customConfirm: "确认",
      customCancel: "取消",
      customRestore: "恢复默认",
      maxFixedCol: "最大冻结列的数量不能超过 {0} 个"
    },
    grid: {
      selectOneRecord: "请至少选择一条记录！",
      deleteSelectRecord: "您确定要删除所选记录吗？",
      removeSelectRecord: "您确定要移除所选记录吗？",
      dataUnchanged: "数据未改动！",
      delSuccess: "成功删除所选记录！",
      saveSuccess: "保存成功！",
      operError: "发生错误，操作失败！"
    },
    select: {
      search: "搜索",
      loadingText: "加载中",
      emptyText: "暂无数据"
    },
    pager: {
      goto: "前往",
      pagesize: "{0}条/页",
      total: "共 {0} 条记录",
      pageClassifier: "页",
      homePage: "首页",
      homePageTitle: "首页",
      prevPage: "上一页",
      prevPageTitle: "上一页",
      nextPage: "下一页",
      nextPageTitle: "下一页",
      prevJump: "向上跳页",
      prevJumpTitle: "向上跳页",
      nextJump: "向下跳页",
      nextJumpTitle: "向下跳页",
      endPage: "末页",
      endPageTitle: "末页"
    },
    alert: {
      title: "系统提示"
    },
    button: {
      confirm: "确认",
      cancel: "取消"
    },
    filter: {
      search: "搜索"
    },
    custom: {
      cstmTitle: "列设置",
      cstmRestore: "恢复默认",
      cstmCancel: "取消",
      cstmConfirm: "确定",
      cstmConfirmRestore: "请确认是否恢复成默认列配置？",
      cstmDragTarget: "移动目标：{0}",
      setting: {
        colSort: "排序",
        sortHelpTip: "点击并拖动图标可以调整列的排序",
        colTitle: "标题",
        colResizable: "列宽（像素）",
        colVisible: "是否显示",
        colFixed: "冻结列",
        colFixedMax: "冻结列（最多 {0} 列）",
        fixedLeft: "左侧",
        fixedUnset: "不设置",
        fixedRight: "右侧"
      }
    },
    import: {
      modes: {
        covering: "覆盖方式（直接覆盖表格数据）",
        insert: "底部追加（在表格的底部追加新数据）",
        insertTop: "顶部追加（在表格的顶部追加新数据）",
        insertBottom: "底部追加（在表格的底部追加新数据）"
      },
      impTitle: "导入数据",
      impFile: "文件名",
      impSelect: "选择文件",
      impType: "文件类型",
      impOpts: "参数设置",
      impMode: "导入模式",
      impConfirm: "导入",
      impCancel: "取消"
    },
    export: {
      types: {
        csv: "CSV (逗号分隔)(*.csv)",
        html: "网页(*.html)",
        xml: "XML 数据(*.xml)",
        txt: "文本文件(制表符分隔)(*.txt)",
        xls: "Excel 97-2003 工作簿(*.xls)",
        xlsx: "Excel 工作簿(*.xlsx)",
        pdf: "PDF (*.pdf)"
      },
      modes: {
        current: "当前数据（当前页的数据）",
        selected: "选中数据（当前页选中的数据）",
        all: "全量数据（包括所有分页的数据）"
      },
      printTitle: "打印数据",
      expTitle: "导出数据",
      expName: "文件名",
      expNamePlaceholder: "请输入文件名",
      expSheetName: "标题",
      expSheetNamePlaceholder: "请输入标题",
      expType: "保存类型",
      expMode: "选择数据",
      expCurrentColumn: "全部字段",
      expColumn: "选择字段",
      expOpts: "参数设置",
      expOptHeader: "表头",
      expHeaderTitle: "是否需要表头",
      expOptFooter: "表尾",
      expFooterTitle: "是否需要表尾",
      expOptColgroup: "分组表头",
      expColgroupTitle: "如果存在，则支持带有分组结构的表头",
      expOptMerge: "合并",
      expMergeTitle: "如果存在，则支持带有合并结构的单元格",
      expOptAllExpand: "展开层级",
      expAllExpandTitle: "如果存在，则支持将带有层级结构的数据全部展开",
      expOptUseStyle: "样式",
      expUseStyleTitle: "如果存在，则支持带样式的单元格",
      expOptOriginal: "源数据",
      expOriginalTitle: "如果为源数据，则支持导入到表格中",
      expPrint: "打印",
      expConfirm: "导出",
      expCancel: "取消"
    },
    modal: {
      errTitle: "错误提示",
      zoomMin: "最小化",
      zoomIn: "最大化",
      zoomOut: "还原",
      close: "关闭"
    },
    drawer: {
      close: "关闭"
    },
    form: {
      folding: "收起",
      unfolding: "展开"
    },
    toolbar: {
      import: "导入",
      export: "导出",
      print: "打印",
      refresh: "刷新",
      zoomIn: "全屏",
      zoomOut: "还原",
      custom: "列设置",
      customAll: "全部",
      customConfirm: "确认",
      customRestore: "重置",
      fixedLeft: "冻结在左侧",
      fixedRight: "冻结在右侧",
      cancelFixed: "取消冻结列"
    },
    input: {
      date: {
        m1: "01 月",
        m2: "02 月",
        m3: "03 月",
        m4: "04 月",
        m5: "05 月",
        m6: "06 月",
        m7: "07 月",
        m8: "08 月",
        m9: "09 月",
        m10: "10 月",
        m11: "11 月",
        m12: "12 月",
        quarterLabel: "{0} 年",
        monthLabel: "{0} 年",
        dayLabel: "{0} 年 {1}",
        labelFormat: {
          date: "yyyy-MM-dd",
          time: "HH:mm:ss",
          datetime: "yyyy-MM-dd HH:mm:ss",
          week: "yyyy 年第 WW 周",
          month: "yyyy-MM",
          quarter: "yyyy 年第 q 季度",
          year: "yyyy"
        },
        weeks: {
          w: "周",
          w0: "周日",
          w1: "周一",
          w2: "周二",
          w3: "周三",
          w4: "周四",
          w5: "周五",
          w6: "周六"
        },
        months: {
          m0: "一月",
          m1: "二月",
          m2: "三月",
          m3: "四月",
          m4: "五月",
          m5: "六月",
          m6: "七月",
          m7: "八月",
          m8: "九月",
          m9: "十月",
          m10: "十一月",
          m11: "十二月"
        },
        quarters: {
          q1: "第一季度",
          q2: "第二季度",
          q3: "第三季度",
          q4: "第四季度"
        }
      }
    },
    imagePreview: {
      popupTitle: "预览",
      operBtn: {
        zoomOut: "缩小",
        zoomIn: "放大",
        pctFull: "等比例缩放",
        pct11: "显示原始尺寸",
        rotateLeft: "向左旋转",
        rotateRight: "向右旋转",
        print: "点击打印图片",
        download: "点击下载图片"
      }
    },
    upload: {
      fileBtnText: "点击或拖拽上传",
      imgBtnText: "点击或拖拽上传",
      dragPlaceholder: "请把文件拖放到这个区域即可上传",
      imgSizeHint: "单张{0}",
      imgCountHint: "最多{0}张",
      fileTypeHint: "支持 {0} 文件类型",
      fileSizeHint: "单个文件大小不超过{0}",
      fileCountHint: "最多可上传{0}个文件",
      overCountErr: "最多只能选择{0}个文件！",
      overCountExtraErr: "已超出最大数量{0}个，超出的{1}个文件将被忽略！",
      overSizeErr: "文件大小最大不能超过{0}！",
      reUpload: "重新上传",
      uploadProgress: "上传中 {0}%",
      uploadErr: "上传失败",
      uploadSuccess: "上传成功"
    },
    formDesign: {
      formName: "表单名称",
      defFormTitle: "未命名的表单",
      widgetPropTab: "控件属性",
      widgetFormTab: "表单属性",
      styleSetting: {
        btn: "样式设置",
        title: "表单的样式设置",
        layoutTitle: "控件布局",
        verticalLayout: "上下布局",
        horizontalLayout: "横向布局",
        styleTitle: "标题样式",
        boldTitle: "标题加粗",
        fontBold: "加粗",
        fontNormal: "常规",
        colonTitle: "显示冒号",
        colonVisible: "显示",
        colonHidden: "隐藏",
        alignTitle: "对齐方式",
        widthTitle: "标题宽度",
        alignLeft: "居左",
        alignRight: "居右",
        unitPx: "像素",
        unitPct: "百分比"
      },
      widget: {
        group: {
          base: "基础控件",
          layout: "布局控件",
          advanced: "高级控件"
        },
        copyTitle: "副本_{0}",
        component: {
          input: "输入框",
          textarea: "文本域",
          select: "下拉框",
          row: "一行多列",
          title: "文本",
          subtable: "子表",
          VxeSwitch: "是/否",
          VxeInput: "输入框",
          VxeNumberInput: "数字",
          VxeDatePicker: "日期",
          VxeTextarea: "文本域",
          VxeSelect: "下拉框",
          VxeRadioGroup: "单选框",
          VxeCheckboxGroup: "复选框",
          VxeUploadFile: "文件",
          VxeUploadImage: "图片"
        }
      },
      widgetProp: {
        name: "控件名称",
        placeholder: "提示语",
        required: "必填校验",
        displaySetting: {
          name: "显示设置",
          pc: "电脑端",
          mobile: "手机端",
          visible: "显示",
          hidden: "隐藏"
        },
        dataSource: {
          name: "数据源",
          defValue: "选项{0}",
          addOption: "添加选项",
          batchEditOption: "批量编辑",
          batchEditTip: "每行对应一个选项，支持从表格、Excel、WPS 中直接复制粘贴。",
          batchEditSubTip: "每行对应一个选项，如果是分组，子项可以是空格或制表键开头，支持从表格、Excel、WPS 中直接复制粘贴。",
          buildOption: "生成选项"
        },
        rowProp: {
          colSize: "列数",
          col2: "两列",
          col3: "三列",
          col4: "四列",
          col6: "六列",
          layout: "布局"
        },
        textProp: {
          name: "内容",
          alignTitle: "对齐方式",
          alignLeft: "居左",
          alignCenter: "居中",
          alignRight: "居右",
          colorTitle: "字体颜色",
          sizeTitle: "字体大小",
          boldTitle: "字体加粗",
          fontNormal: "常规",
          fontBold: "加粗"
        },
        subtableProp: {
          seqTitle: "序号",
          showSeq: "显示序号",
          showCheckbox: "允许多选",
          errSubDrag: "子表不支持该控件，请使用其他控件"
        },
        uploadProp: {
          limitFileCount: "文件数量限制",
          limitFileSize: "文件大小限制",
          multiFile: "允许上传多个文件",
          limitImgCount: "图片数量限制",
          limitImgSize: "图片大小限制",
          multiImg: "允许上传多张图片"
        }
      }
    },
    listDesign: {
      fieldSettingTab: "字段设置",
      listSettingTab: "列表设置"
    },
    /**
     * 扩展插件
     */
    plugins: {
      extendCellArea: {
        area: {
          mergeErr: "无法对合并单元格进行该操作",
          multiErr: "无法对多重选择区域进行该操作",
          extendErr: "如果延伸的区域包含被合并的单元格，所有合并的单元格需大小相同",
          pasteMultiErr: "无法粘贴，需要相同大小的复制的区域和粘贴的区域才能执行此操作",
          cpInvalidErr: "该操作无法进行，您选择的区域中存在被禁止的列（{0}）"
        },
        fnr: {
          title: "查找和替换",
          findLabel: "查找",
          replaceLabel: "替换",
          findTitle: "查找内容：",
          replaceTitle: "替换为：",
          tabs: {
            find: "查找",
            replace: "替换"
          },
          filter: {
            re: "正则表达式",
            whole: "全词匹配",
            sensitive: "区分大小写"
          },
          btns: {
            findNext: "查找下一个",
            findAll: "查找全部",
            replace: "替换",
            replaceAll: "替换全部",
            cancel: "取消"
          },
          header: {
            seq: "#",
            cell: "单元格",
            value: "值"
          },
          empty: "(空值)",
          reError: "无效的正则表达式",
          recordCount: "已找到 {0} 个单元格",
          notCell: "找不到匹配的单元格",
          replaceSuccess: "成功替换 {0} 个单元格"
        }
      },
      filterComplexInput: {
        menus: {
          fixedColumn: "冻结列",
          fixedGroup: "冻结分组",
          cancelFixed: "取消冻结",
          fixedLeft: "冻结左侧",
          fixedRight: "冻结右侧"
        },
        cases: {
          equal: "等于",
          gt: "大于",
          lt: "小于",
          begin: "开头是",
          endin: "结尾是",
          include: "包含",
          isSensitive: "区分大小写"
        }
      },
      filterCombination: {
        menus: {
          clearSort: "清除排序",
          sortAsc: "升序",
          sortDesc: "降序",
          fixedColumn: "冻结列",
          fixedGroup: "冻结分组",
          cancelFixed: "取消冻结",
          fixedLeft: "冻结左侧",
          fixedRight: "冻结右侧",
          clearFilter: "清除筛选",
          textOption: "文本筛选",
          numberOption: "数值筛选"
        },
        popup: {
          title: "自定义筛选的方式",
          currColumnTitle: "当前列：",
          and: "与",
          or: "或",
          describeHtml: "可用 ? 代表单个字符<br/>用 * 代表任意多个字符"
        },
        cases: {
          equal: "等于",
          unequal: "不等于",
          gt: "大于",
          ge: "大于或等于",
          lt: "小于",
          le: "小于或等于",
          begin: "开头是",
          notbegin: "开头不是",
          endin: "结尾是",
          notendin: "结尾不是",
          include: "包含",
          exclude: "不包含",
          between: "介于",
          custom: "自定义筛选",
          insensitive: "不区分大小写",
          isSensitive: "区分大小写"
        },
        empty: "(空白)",
        notData: "无匹配项"
      }
    },
    /**
     * 以下废弃
     * @deprecated
     */
    pro: {
      area: {
        mergeErr: "无法对合并单元格进行该操作",
        multiErr: "无法对多重选择区域进行该操作",
        extendErr: "如果延伸的区域包含被合并的单元格，所有合并的单元格需大小相同",
        pasteMultiErr: "无法粘贴，需要相同大小的复制的区域和粘贴的区域才能执行此操作"
      },
      fnr: {
        title: "查找和替换",
        findLabel: "查找",
        replaceLabel: "替换",
        findTitle: "查找内容：",
        replaceTitle: "替换为：",
        tabs: {
          find: "查找",
          replace: "替换"
        },
        filter: {
          re: "正则表达式",
          whole: "全词匹配",
          sensitive: "区分大小写"
        },
        btns: {
          findNext: "查找下一个",
          findAll: "查找全部",
          replace: "替换",
          replaceAll: "替换全部",
          cancel: "取消"
        },
        header: {
          seq: "#",
          cell: "单元格",
          value: "值"
        },
        empty: "(空值)",
        reError: "无效的正则表达式",
        recordCount: "已找到 {0} 个单元格",
        notCell: "找不到匹配的单元格",
        replaceSuccess: "成功替换 {0} 个单元格"
      }
    },
    renderer: {
      search: "搜索",
      cases: {
        equal: "等于",
        unequal: "不等于",
        gt: "大于",
        ge: "大于或等于",
        lt: "小于",
        le: "小于或等于",
        begin: "开头是",
        notbegin: "开头不是",
        endin: "结尾是",
        notendin: "结尾不是",
        include: "包含",
        exclude: "不包含",
        between: "介于",
        custom: "自定义筛选",
        insensitive: "不区分大小写",
        isSensitive: "区分大小写"
      },
      combination: {
        menus: {
          clearSort: "清除排序",
          sortAsc: "升序",
          sortDesc: "降序",
          fixedColumn: "锁定列",
          fixedGroup: "锁定组",
          cancelFixed: "取消锁定",
          fixedLeft: "锁定左侧",
          fixedRight: "锁定右侧",
          clearFilter: "清除筛选",
          textOption: "文本筛选",
          numberOption: "数值筛选"
        },
        popup: {
          title: "自定义筛选的方式",
          currColumnTitle: "当前列：",
          and: "与",
          or: "或",
          describeHtml: "可用 ? 代表单个字符<br/>用 * 代表任意多个字符"
        },
        empty: "(空白)",
        notData: "无匹配项"
      }
    }
  }
};
let ci;
const ys = Ot({
  modals: [],
  drawers: []
}), wP = tt({
  setup() {
    return () => {
      const { modals: e, drawers: t } = ys;
      return [
        e.length ? r("div", {
          class: "vxe-dynamics--modal"
        }, e.map((n) => r(ro("vxe-modal"), n))) : Me(),
        t.length ? r("div", {
          class: "vxe-dynamics--drawer"
        }, t.map((n) => r(ro("vxe-drawer"), n))) : Me()
      ];
    };
  }
}), $t = qh(wP);
function Ev() {
  ci || (ci = document.createElement("div"), ci.className = "vxe-dynamics", document.body.appendChild(ci), $t.mount(ci));
}
function _l(e) {
  return e && e.enabled !== !1;
}
function Cr() {
  return Ri.getNext();
}
function ss() {
  return Ri.getCurrent();
}
function Vn(e, t) {
  if (e) {
    const n = me().translate;
    return i.toValueString(n ? n("" + e, t) : e);
  }
  return "";
}
function fp(e) {
  return e == null || e === "";
}
function pp(e) {
  return i.isBoolean(e) ? e : null;
}
const Sv = "ui v4.0.52", $a = Mo.create("warn", Sv), tl = Mo.create("error", Sv), iu = "4.0.52";
ue.version = iu;
ue.uiVersion = iu;
ue.tableVersion = "";
ue.t = ue.getI18n;
ue._t = Vn;
ue.dynamicApp = $t;
function Dv(e) {
  return $a("vxe.error.delFunc", ["config", "setConfig"]), Gl(e);
}
function Ov(e) {
  return $a("vxe.error.delFunc", ["setup", "setConfig"]), Gl(e);
}
ue.config = Dv;
ue.setup = Ov;
const Tv = {};
ue.globalStore = Tv;
Gl({
  alert: {},
  anchor: {},
  anchorLink: {},
  breadcrumb: {
    separator: "/"
  },
  breadcrumbItem: {},
  button: {
    trigger: "hover"
  },
  buttonGroup: {},
  card: {
    border: !0,
    padding: !0
  },
  checkbox: {},
  checkboxGroup: {},
  col: {},
  colgroup: {},
  collapse: {},
  collapsePane: {},
  column: {},
  datePicker: {
    // size: null,
    // transfer: false
    // parseFormat: 'yyyy-MM-dd HH:mm:ss.SSS',
    // labelFormat: '',
    // valueFormat: '',
    startDate: new Date(1900, 0, 1),
    endDate: new Date(2100, 0, 1),
    startDay: 1,
    selectDay: 1
  },
  drawer: {
    // size: null,
    position: "right",
    showHeader: !0,
    lockView: !0,
    mask: !0,
    showTitleOverflow: !0,
    showClose: !0,
    padding: !0
  },
  form: {
    // preventSubmit: false,
    // size: null,
    // colon: false,
    validConfig: {
      showMessage: !0,
      autoPos: !0
    },
    tooltipConfig: {
      enterable: !0
    },
    titleAsterisk: !0,
    titleOverflow: !1
  },
  formDesign: {
    height: 400,
    showPc: !0
  },
  formGather: {},
  formItem: {},
  formView: {},
  grid: {},
  icon: {},
  image: {},
  imagePreview: {},
  input: {
    // size: null,
    // transfer: false
    // parseFormat: 'yyyy-MM-dd HH:mm:ss.SSS',
    // labelFormat: '',
    // valueFormat: '',
    startDate: new Date(1900, 0, 1),
    endDate: new Date(2100, 0, 1),
    startDay: 1,
    selectDay: 1,
    digits: 2,
    controls: !0
  },
  layoutAside: {},
  layoutBody: {},
  layoutContainer: {},
  layoutFooter: {},
  layoutHeader: {},
  link: {
    underline: !0
  },
  listDesign: {
    height: 400,
    showPc: !0
  },
  list: {
    // size: null,
    scrollY: {
      enabled: !0,
      gt: 100
      // oSize: 0
    }
  },
  loading: {},
  modal: {
    // size: null,
    top: 16,
    showHeader: !0,
    minWidth: 340,
    minHeight: 140,
    lockView: !0,
    mask: !0,
    duration: 3e3,
    marginSize: 0,
    dblclickZoom: !0,
    showTitleOverflow: !0,
    animat: !0,
    showClose: !0,
    padding: !0,
    draggable: !0,
    showConfirmButton: null,
    // storage: false,
    storageKey: "VXE_MODAL_POSITION"
  },
  numberInput: {
    // size: null,
    // transfer: false
    digits: 2,
    controls: !0
  },
  optgroup: {},
  option: {},
  pager: {
    pageSizePlacement: "top"
    // size: null,
    // autoHidden: false,
    // perfect: true,
    // pageSize: 10,
    // pagerCount: 7,
    // pageSizes: [10, 15, 20, 50, 100],
    // layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']
  },
  print: {},
  passwordInput: {},
  printPageBreak: {},
  pulldown: {},
  radio: {
    strict: !0
  },
  radioButton: {
    strict: !0
  },
  radioGroup: {
    strict: !0
  },
  row: {},
  select: {
    multiCharOverflow: 8
  },
  switch: {},
  tabPane: {},
  table: {},
  tabs: {},
  textarea: {},
  toolbar: {},
  tip: {},
  tooltip: {
    // size: null,
    trigger: "hover",
    theme: "dark",
    enterDelay: 500,
    leaveDelay: 300
  },
  tree: {
    indent: 20,
    radioConfig: {
      strict: !0
    }
  },
  treeSelect: {},
  upload: {
    mode: "all",
    imageTypes: ["jpg", "jpeg", "png", "gif"],
    showList: !0
  }
});
const pt = "vxe-icon-";
lu({
  // loading
  LOADING: pt + "spinner roll vxe-loading--default-icon",
  // button
  BUTTON_DROPDOWN: pt + "arrow-down",
  BUTTON_LOADING: pt + "spinner roll",
  // menu
  MENU_ITEM_EXPAND_OPEN: pt + "arrow-down rotate180",
  MENU_ITEM_EXPAND_CLOSE: pt + "arrow-down",
  // select
  SELECT_LOADED: pt + "spinner roll",
  SELECT_OPEN: pt + "caret-down rotate180",
  SELECT_CLOSE: pt + "caret-down",
  // pager
  PAGER_HOME: pt + "home-page",
  PAGER_END: pt + "end-page",
  PAGER_JUMP_PREV: pt + "arrow-double-left",
  PAGER_JUMP_NEXT: pt + "arrow-double-right",
  PAGER_PREV_PAGE: pt + "arrow-left",
  PAGER_NEXT_PAGE: pt + "arrow-right",
  PAGER_JUMP_MORE: pt + "ellipsis-h",
  // radio
  RADIO_CHECKED: pt + "radio-checked-fill",
  RADIO_UNCHECKED: pt + "radio-unchecked",
  // checkbox
  CHECKBOX_INDETERMINATE: pt + "checkbox-indeterminate-fill",
  CHECKBOX_CHECKED: pt + "checkbox-checked-fill",
  CHECKBOX_UNCHECKED: pt + "checkbox-unchecked",
  // input
  INPUT_CLEAR: pt + "error-circle-fill",
  INPUT_SEARCH: pt + "search",
  // number-picker
  NUMBER_INPUT_PREV_NUM: pt + "caret-up",
  NUMBER_INPUT_NEXT_NUM: pt + "caret-down",
  // date-picker
  DATE_PICKER_DATE: pt + "calendar",
  // password-input
  PASSWORD_INPUT_SHOW_PWD: pt + "eye-fill-close",
  PASSWORD_INPUT_HIDE_PWD: pt + "eye-fill",
  // modal
  MODAL_ZOOM_MIN: pt + "minus",
  MODAL_ZOOM_REVERT: pt + "recover",
  MODAL_ZOOM_IN: pt + "square",
  MODAL_ZOOM_OUT: pt + "maximize",
  MODAL_CLOSE: pt + "close",
  MODAL_INFO: pt + "info-circle-fill",
  MODAL_SUCCESS: pt + "success-circle-fill",
  MODAL_WARNING: pt + "warning-circle-fill",
  MODAL_ERROR: pt + "error-circle-fill",
  MODAL_QUESTION: pt + "question-circle-fill",
  MODAL_LOADING: pt + "spinner roll",
  // form
  FORM_PREFIX: pt + "question-circle-fill",
  FORM_SUFFIX: pt + "question-circle-fill",
  FORM_FOLDING: pt + "arrow-up rotate180",
  FORM_UNFOLDING: pt + "arrow-up",
  // form-design
  FORM_DESIGN_STYLE_SETTING: pt + "layout",
  FORM_DESIGN_PROPS_PC: pt + "pc",
  FORM_DESIGN_PROPS_MOBILE: pt + "mobile",
  FORM_DESIGN_WIDGET_ADD: pt + "square-plus-fill",
  FORM_DESIGN_WIDGET_COPY: pt + "copy",
  FORM_DESIGN_WIDGET_DELETE: pt + "delete",
  FORM_DESIGN_WIDGET_OPTION_DELETE: pt + "delete",
  FORM_DESIGN_WIDGET_OPTION_EXPAND_OPEN: pt + "square-plus",
  FORM_DESIGN_WIDGET_OPTION_EXPAND_CLOSE: pt + "square-minus",
  // list-design
  LIST_DESIGN_FIELD_SETTING: pt + "custom-column",
  LIST_DESIGN_LIST_SETTING: pt + "menu",
  // upload
  UPLOAD_FILE_ERROR: pt + "warning-circle-fill",
  UPLOAD_FILE_ADD: pt + "upload",
  UPLOAD_FILE_DELETE: pt + "delete",
  UPLOAD_IMAGE_RE_UPLOAD: pt + "repeat",
  UPLOAD_IMAGE_ADD: pt + "add",
  UPLOAD_IMAGE_DELETE: pt + "close",
  UPLOAD_LOADING: pt + "spinner roll vxe-loading--default-icon",
  UPLOAD_FILE_TYPE_DEFAULT: pt + "file",
  UPLOAD_FILE_TYPE_XLSX: pt + "file-excel",
  UPLOAD_FILE_TYPE_XLS: pt + "file-excel",
  UPLOAD_FILE_TYPE_PDF: pt + "file-pdf",
  UPLOAD_FILE_TYPE_PNG: pt + "file-image",
  UPLOAD_FILE_TYPE_GIF: pt + "file-image",
  UPLOAD_FILE_TYPE_JPG: pt + "file-image",
  UPLOAD_FILE_TYPE_JPEG: pt + "file-image",
  UPLOAD_FILE_TYPE_MD: pt + "file-markdown",
  UPLOAD_FILE_TYPE_PPD: pt + "file-ppt",
  UPLOAD_FILE_TYPE_DOCX: pt + "file-word",
  UPLOAD_FILE_TYPE_DOC: pt + "file-word",
  UPLOAD_FILE_TYPE_ZIP: pt + "file-zip",
  UPLOAD_FILE_TYPE_TXT: pt + "file-txt",
  // image-preview
  IMAGE_PREVIEW_CLOSE: pt + "close",
  IMAGE_PREVIEW_PREVIOUS: pt + "arrow-left",
  IMAGE_PREVIEW_NEXT: pt + "arrow-right",
  IMAGE_PREVIEW_PCT_FULL: pt + "pct-full",
  IMAGE_PREVIEW_PCT_1_1: pt + "pct-1-1",
  IMAGE_PREVIEW_ZOOM_OUT: pt + "search-zoom-out",
  IMAGE_PREVIEW_ZOOM_IN: pt + "search-zoom-in",
  IMAGE_PREVIEW_ROTATE_LEFT: pt + "rotate-left",
  IMAGE_PREVIEW_ROTATE_RIGHT: pt + "rotate-right",
  IMAGE_PREVIEW_PRINT: pt + "print",
  IMAGE_PREVIEW_DOWNLOAD: pt + "download",
  // alert
  ALERT_CLOSE: pt + "close",
  ALERT_INFO: pt + "info-circle-fill",
  ALERT_SUCCESS: pt + "success-circle-fill",
  ALERT_WARNING: pt + "warning-circle-fill",
  ALERT_ERROR: pt + "error-circle-fill",
  // tree
  TREE_NODE_OPEN: pt + "caret-right rotate90",
  TREE_NODE_CLOSE: pt + "caret-right"
});
function nl(e) {
  return "on" + e.substring(0, 1).toLocaleUpperCase() + e.substring(1);
}
function Mv(e) {
  switch (e) {
    case "input":
    case "textarea":
      return "input";
  }
  return "update:modelValue";
}
function Iv(e) {
  switch (e) {
    case "input":
    case "textarea":
    case "VxeInput":
    case "VxeTextarea":
    case "$input":
    case "$textarea":
      return "input";
  }
  return "change";
}
function It(e) {
  return i.isArray(e) ? e : [e];
}
const ol = tt({
  name: "VxeAlert",
  props: {
    title: {
      type: [String, Number],
      default: () => me().alert.title
    },
    content: [String, Number],
    status: String,
    showIcon: Boolean,
    showClose: Boolean,
    icon: {
      type: String,
      default: () => me().alert.icon
    }
  },
  emits: [
    "close"
  ],
  setup(e, t) {
    const { emit: n, slots: o } = t, l = i.uniqueId(), a = Ie(), c = Ot({}), p = {
      refElem: a
    }, d = {}, s = {
      xID: l,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => p,
      getComputeMaps: () => d
    }, f = {
      dispatchEvent(x, S, y) {
        n(x, zt(y, { $alert: s }, S));
      }
    }, g = (x) => {
      f.dispatchEvent("close", {}, x);
    };
    Object.assign(s, f, {});
    const b = () => {
      const { status: x, content: S, icon: y, title: h, showIcon: O, showClose: E } = e, T = o.default, W = o.title, $ = o.icon;
      return r("div", {
        ref: a,
        class: ["vxe-alert", {
          [`theme--${x}`]: x
        }]
      }, [
        $ || O && x || y ? r("div", {
          class: "vxe-alert--icon"
        }, $ ? It($({})) : [
          r("i", {
            class: y || dt()[`ALERT_${x == null ? void 0 : x.toUpperCase()}`]
          })
        ]) : Me(),
        r("div", {
          class: "vxe-alert--body"
        }, [
          W || h ? r("div", {
            class: "vxe-alert--title"
          }, W ? It(W({})) : i.toValueString(h)) : Me(),
          r("div", {
            class: "vxe-alert--content"
          }, T ? It(T({})) : i.toValueString(S))
        ]),
        E ? r("div", {
          class: "vxe-alert--close-btn",
          onClick: g
        }, [
          r("i", {
            class: dt().ALERT_CLOSE
          })
        ]) : Me()
      ]);
    };
    return s.renderVN = b, s;
  },
  render() {
    return this.renderVN();
  }
}), au = Object.assign({}, ol, {
  install(e) {
    e.component(ol.name, ol);
  }
});
$t.component(ol.name, ol);
ue.component(ol);
const EP = au, SP = i.browse(), ac = {};
function kv(e) {
  return ac[e] || (ac[e] = new RegExp(`(?:^|\\s)${e}(?!\\S)`, "g")), ac[e];
}
function Vv(e, t, n) {
  if (e) {
    const o = e.parentNode;
    if (n.top += e.offsetTop, n.left += e.offsetLeft, o && o !== document.documentElement && o !== document.body && (n.top -= o.scrollTop, n.left -= o.scrollLeft), !(t && (e === t || e.offsetParent === t)) && e.offsetParent)
      return Vv(e.offsetParent, t, n);
  }
  return n;
}
function Li(e, t) {
  return e && e.className && e.className.match && e.className.match(kv(t));
}
function aa(e, t) {
  e && Li(e, t) && (e.className = e.className.replace(kv(t), ""));
}
function DP(e, t) {
  e && !Li(e, t) && (aa(e, t), e.className = `${e.className} ${t}`);
}
function Wn(e) {
  return /^\d+$/.test(`${e}`) ? `${e}px` : `${e || ""}`;
}
function vs() {
  const e = document.documentElement, t = document.body;
  return {
    scrollTop: e.scrollTop || t.scrollTop,
    scrollLeft: e.scrollLeft || t.scrollLeft,
    visibleHeight: e.clientHeight || t.clientHeight,
    visibleWidth: e.clientWidth || t.clientWidth
  };
}
function Bn(e, t, n, o) {
  let l, a = e.target.shadowRoot && e.composed && e.composedPath()[0] || e.target;
  for (; a && a.nodeType && a !== document; ) {
    if (n && Li(a, n) && !o)
      l = a;
    else if (a === t)
      return { flag: n ? !!l : !0, container: t, targetElem: l };
    a = a.parentNode;
  }
  return { flag: !1 };
}
function OP(e, t) {
  return Vv(e, t, { left: 0, top: 0 });
}
function Ul(e) {
  const t = e.getBoundingClientRect(), n = t.top, o = t.left, { scrollTop: l, scrollLeft: a, visibleHeight: c, visibleWidth: p } = vs();
  return { boundingTop: n, top: l + n, boundingLeft: o, left: a + o, visibleHeight: c, visibleWidth: p };
}
const mp = "scrollIntoViewIfNeeded", gp = "scrollIntoView";
function TP(e) {
  e && (e[mp] ? e[mp]() : e[gp] && e[gp]());
}
function MP(e, t, n, o) {
  const l = e.reactData.staticLinks, a = t.parentNode, c = o ? o.linkConfig : null, p = c ? c.children : l;
  a && p && (p.splice(i.arrayIndexOf(a.children, t), 0, n), e.reactData.staticLinks = l.slice(0));
}
function IP(e, t) {
  const n = e.reactData.staticLinks, o = i.findTree(n, (l) => l.id === t.id, { children: "children" });
  o && o.items.splice(o.index, 1), e.reactData.staticLinks = n.slice(0);
}
const Gr = tt({
  name: "VxeAnchorLink",
  props: {
    content: [String, Number],
    title: [String, Number],
    href: String
  },
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = Ot({
      id: o,
      href: e.href,
      children: []
    }), p = ut("$xeAnchor", null), d = ut("$xeAnchorLink", null), s = {
      refElem: l
    }, f = Q(() => {
      const { href: S } = e;
      return p ? p.reactData.activeHref === S : null;
    }), g = {}, D = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      linkConfig: c,
      getRefMaps: () => s,
      getComputeMaps: () => g
    }, b = (S) => {
      const { href: y } = e;
      p && p.handleClickLink(S, y);
    };
    lt(() => e.href, (S) => {
      c.href = S;
    }), yn(() => {
      p && l.value && MP(p, l.value, c, d);
    }), On(() => {
      p && IP(p, c);
    });
    const x = () => {
      const { href: S, content: y, title: h } = e, O = n.default, E = n.sub, T = f.value;
      return r("div", {
        ref: l,
        class: ["vxe-anchor-link", {
          "is--active": T
        }]
      }, [
        r("a", {
          class: "vxe-anchor-link--item",
          href: S,
          title: h,
          onClick: b
        }, O ? O({}) : i.toValueString(y)),
        E ? r("div", {
          class: "vxe-anchor-link--sub-items"
        }, E({})) : Me()
      ]);
    };
    return D.renderVN = x, Xt("$xeAnchorLink", D), D;
  },
  render() {
    return this.renderVN();
  }
}), rl = tt({
  name: "VxeAnchor",
  props: {
    modelValue: String,
    options: Array,
    container: [String, Object, Function],
    showMarker: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "update:modelValue",
    "change",
    "click"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = i.uniqueId(), a = Ie(), c = Ie(), p = Ot({
      activeHref: null,
      staticLinks: []
    }), d = {
      refElem: a
    }, s = Q(() => {
      const I = [];
      return i.eachTree(p.staticLinks, (z) => {
        I.push(z.href || "");
      }, { children: "children" }), I;
    }), f = {};
    let g = null;
    const D = {
      xID: l,
      props: e,
      context: t,
      reactData: p,
      getRefMaps: () => d,
      getComputeMaps: () => f
    }, b = {
      dispatchEvent(I, z, te) {
        o(I, zt(te, { $anchor: D }, z));
      }
    }, x = () => {
      const { container: I } = e;
      if (I) {
        if (i.isElement(I))
          return I;
        if (i.isString(I))
          return document.querySelector(I);
        if (i.isFunction(I))
          return I({ $anchor: D });
      }
      return null;
    }, S = (I) => {
      p.activeHref = I, o("update:modelValue", I);
    }, y = () => {
      const I = s.value;
      if (g) {
        const z = g.querySelectorAll(I.map((te) => `${te}`).join(","));
        for (let te = 0; te < z.length; te++) {
          const Ce = z[te];
          if (Ce.getBoundingClientRect().top > 0) {
            const F = Ce.id;
            p.activeHref = `#${F}`;
            break;
          }
        }
      }
    }, h = () => {
      g && g.removeEventListener("scroll", y);
    }, O = () => {
      g = x(), g && g.addEventListener("scroll", y, {
        passive: !1
      });
    }, E = () => {
      ae(() => {
        const { activeHref: I } = p, z = a.value, te = c.value;
        if (z && te && I) {
          const Ce = z.querySelector(`[href="${I}"]`);
          if (Ce) {
            const { top: N } = OP(Ce, z);
            te.style.top = `${N}px`;
          }
        }
      });
    };
    Object.assign(D, b, {
      handleClickLink(I, z) {
        I.preventDefault();
        const te = document.getElementById(`${z}`.replace("#", ""));
        te && te.scrollIntoView({
          behavior: "smooth"
        }), S(z), b.dispatchEvent("click", { href: z }, I);
      }
    });
    const W = (I) => {
      const z = [];
      return I && I.forEach((te) => {
        const Ce = te.children;
        Ce && Ce.length ? z.push(r(Gr, {
          content: te.content,
          title: te.title,
          href: te.href
        }, {
          sub: () => W(Ce)
        })) : z.push(r(Gr, {
          content: te.content,
          title: te.title,
          href: te.href
        }));
      }), z;
    }, $ = () => {
      const { options: I, showMarker: z } = e, te = n.default;
      return r("div", {
        ref: a,
        class: ["vxe-anchor", {
          "is--marker": z
        }]
      }, [
        r("div", {
          class: "vxe-anchor--list"
        }, te ? te({}) : W(I)),
        z ? r("div", {
          ref: c,
          class: "vxe-anchor--marker"
        }) : Me()
      ]);
    };
    return lt(() => e.modelValue, (I) => {
      p.activeHref = I;
    }), lt(() => p.activeHref, () => {
      E();
    }), lt(() => e.container, () => {
      h(), O();
    }), yn(() => {
      ae(() => {
        O();
      });
    }), Ci(() => {
      h();
    }), D.renderVN = $, Xt("$xeAnchor", D), D;
  },
  render() {
    return this.renderVN();
  }
}), cu = Object.assign({}, rl, {
  install(e) {
    e.component(rl.name, rl);
  }
});
$t.component(rl.name, rl);
ue.component(rl);
const kP = cu, uu = Object.assign({}, Gr, {
  install(e) {
    e.component(Gr.name, Gr);
  }
});
$t.component(Gr.name, Gr);
ue.component(Gr);
const VP = uu, Cs = tt({
  name: "VxeBreadcrumbItem",
  props: {
    title: String,
    routerLink: Object
  },
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = ut("$xeBreadcrumb", null), c = Ot({}), p = {
      refElem: l
    }, d = Q(() => a ? a.props.separator : ""), s = () => {
    }, f = {}, g = {
      xID: o,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => p,
      getComputeMaps: () => f
    }, D = () => {
      const { title: b } = e, x = d.value, S = n.default;
      return r("span", {
        ref: l,
        class: "vxe-breadcrumb-item",
        onClick: s
      }, [
        r("span", {
          class: "vxe-breadcrumb-item--content"
        }, S ? S({}) : `${b || ""}`),
        x ? r("span", {
          class: "vxe-breadcrumb-item--separator"
        }, `${x}`) : Me()
      ]);
    };
    return g.renderVN = D, g;
  },
  render() {
    return this.renderVN();
  }
}), sl = tt({
  name: "VxeBreadcrumb",
  props: {
    separator: {
      type: String,
      default: () => me().breadcrumb.separator
    },
    options: Array
  },
  emits: [
    "click"
  ],
  setup(e, t) {
    const { emit: n, slots: o } = t, l = i.uniqueId(), a = Ie(), c = Ot({}), p = {
      refElem: a
    }, d = {}, s = {
      xID: l,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => p,
      getComputeMaps: () => d
    }, f = {
      dispatchEvent(x, S, y) {
        n(x, zt(y, { $breadcrumb: s }, S));
      }
    };
    Object.assign(s, f, {
      handleClickLink(x, S) {
        f.dispatchEvent("click", { option: S }, x);
      }
    });
    const D = () => {
      const { options: x } = e;
      return x && x.length ? x.map((S) => r(Cs, {
        title: S.title,
        routerLink: S.routerLink
      })) : [];
    }, b = () => {
      const x = o.default;
      return r("div", {
        ref: a,
        class: "vxe-breadcrumb"
      }, x ? x({}) : D());
    };
    return s.renderVN = b, Xt("$xeBreadcrumb", s), s;
  },
  render() {
    return this.renderVN();
  }
}), du = Object.assign({}, sl, {
  install(e) {
    e.component(sl.name, sl);
  }
});
$t.component(sl.name, sl);
ue.component(sl);
const $P = du, fu = Object.assign({}, Cs, {
  install(e) {
    e.component(Cs.name, Cs);
  }
});
$t.component(Cs.name, Cs);
ue.component(Cs);
const RP = fu, $n = tt({
  name: "VxeButton",
  props: {
    /**
     * 按钮类型
     */
    type: String,
    mode: String,
    className: [String, Function],
    popupClassName: [String, Function],
    /**
     * 按钮尺寸
     */
    size: { type: String, default: () => me().button.size || me().size },
    /**
     * 用来标识这一项
     */
    name: [String, Number],
    /**
     * 权限码
     */
    permissionCode: [String, Number],
    permissionMethod: Function,
    /**
     * 按钮内容
     */
    content: String,
    /**
     * 固定显示下拉面板的方向
     */
    placement: String,
    /**
     * 按钮状态
     */
    status: String,
    /**
     * 标题
     */
    title: String,
    /**
     * 按钮的图标
     */
    icon: String,
    /**
     * 圆角边框
     */
    round: Boolean,
    /**
     * 圆角按钮
     */
    circle: Boolean,
    /**
     * 是否禁用
     */
    disabled: Boolean,
    /**
     * 是否加载中
     */
    loading: Boolean,
    trigger: { type: String, default: () => me().button.trigger },
    /**
     * 在下拉面板关闭时销毁内容
     */
    destroyOnClose: Boolean,
    /**
     * 是否将弹框容器插入于 body 内
     */
    transfer: {
      type: Boolean,
      default: null
    }
  },
  emits: [
    "click",
    "mouseenter",
    "mouseleave",
    "dropdown-click"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = ut("$xeTable", null), a = ut("$xeForm", null), c = ut("$xeButtonGroup", null), p = i.uniqueId(), { computeSize: d } = Ln(e), { computePermissionInfo: s } = Ni(e), f = Ot({
      inited: !1,
      visiblePanel: !1,
      animatVisible: !1,
      isActivated: !1,
      panelIndex: 0,
      panelStyle: {},
      panelPlacement: ""
    }), g = {
      showTime: null
    }, D = Ie(), b = Ie(), x = Ie(), S = {
      refElem: D
    }, y = {
      xID: p,
      props: e,
      context: t,
      reactData: f,
      internalData: g,
      getRefMaps: () => S
    };
    let h = {};
    const O = Q(() => {
      const { transfer: R } = e;
      if (R === null) {
        const k = me().button.transfer;
        if (i.isBoolean(k))
          return k;
        if (l || a)
          return !0;
      }
      return R;
    }), E = Q(() => {
      const { disabled: R } = e, k = s.value;
      return R || k.disabled;
    }), T = Q(() => {
      const { type: R } = e;
      return R ? ["submit", "reset", "button"].indexOf(R) > -1 : !1;
    }), W = Q(() => {
      const { type: R, mode: k } = e;
      return k === "text" || R === "text" || c && c.props.mode === "text" ? "text" : "button";
    }), $ = Q(() => {
      const { status: R } = e;
      return R || (c ? c.props.status : "");
    }), I = Q(() => {
      const { round: R } = e;
      return R || (c ? c.props.round : !1);
    }), z = Q(() => {
      const { circle: R } = e;
      return R || (c ? c.props.circle : !1);
    }), te = () => {
      f.panelIndex < ss() && (f.panelIndex = Cr());
    }, Ce = () => ae().then(() => {
      const { placement: R } = e, { panelIndex: k } = f, U = b.value, _ = x.value, K = O.value;
      if (_ && U) {
        const Z = U.offsetHeight, ke = U.offsetWidth, ye = _.offsetHeight, Ee = _.offsetWidth, xe = 5, Le = {
          zIndex: k
        }, { top: je, left: Ye, boundingTop: fe, visibleHeight: ge, visibleWidth: $e } = Ul(U);
        let Ve = "bottom";
        if (K) {
          let ce = Ye + ke - Ee, We = je + Z;
          R === "top" ? (Ve = "top", We = je - ye) : R || (fe + Z + ye + xe > ge && (Ve = "top", We = je - ye), We < xe && (Ve = "bottom", We = je + Z)), ce + Ee + xe > $e && (ce -= ce + Ee + xe - $e), ce < xe && (ce = xe), Object.assign(Le, {
            left: `${ce}px`,
            right: "auto",
            top: `${We}px`,
            minWidth: `${ke}px`
          });
        } else
          R === "top" ? (Ve = "top", Le.bottom = `${Z}px`) : R || fe + Z + ye > ge && fe - Z - ye > xe && (Ve = "top", Le.bottom = `${Z}px`);
        return f.panelStyle = Le, f.panelPlacement = Ve, ae();
      }
    }), N = (R) => {
      c ? c.handleClick({ name: e.name }, R) : h.dispatchEvent("click", { $event: R }, R);
    }, F = (R) => {
      R.button === 0 && R.stopPropagation();
    }, j = (R) => {
      const k = R.currentTarget, U = x.value, { flag: _, targetElem: K } = Bn(R, k, "vxe-button");
      _ && (U && (U.dataset.active = "N"), f.visiblePanel = !1, setTimeout(() => {
        (!U || U.dataset.active !== "Y") && (f.animatVisible = !1);
      }, 350), h.dispatchEvent("dropdown-click", { name: K.getAttribute("name"), $event: R }, R));
    }, ee = () => {
      const R = x.value;
      R && (R.dataset.active = "Y", f.animatVisible = !0, setTimeout(() => {
        R.dataset.active === "Y" && (f.visiblePanel = !0, te(), Ce(), setTimeout(() => {
          f.visiblePanel && Ce();
        }, 50));
      }, 20));
    }, oe = (R) => {
      M(), G(R);
    }, re = (R) => {
      H(), J(R);
    }, G = (R) => {
      o("mouseenter", zt(R, {}));
    }, J = (R) => {
      o("mouseleave", zt(R, {}));
    }, A = (R) => {
      const { trigger: k } = e;
      k === "click" && (f.visiblePanel ? H() : M()), N(R);
    }, M = () => {
      const { trigger: R } = e, k = x.value;
      return k && (k.dataset.active = "Y", f.inited || (f.inited = !0), g.showTime = setTimeout(() => {
        k.dataset.active === "Y" ? ee() : f.animatVisible = !1;
      }, R === "click" ? 50 : 250)), ae();
    }, H = () => {
      const R = x.value;
      return clearTimeout(g.showTime), R ? (R.dataset.active = "N", setTimeout(() => {
        R.dataset.active !== "Y" && (f.visiblePanel = !1, setTimeout(() => {
          R.dataset.active !== "Y" && (f.animatVisible = !1);
        }, 350));
      }, 100)) : (f.animatVisible = !1, f.visiblePanel = !1), ae();
    }, ne = () => {
      H();
    }, de = () => {
      const { content: R, icon: k, loading: U } = e, _ = [];
      return U ? _.push(r("i", {
        class: ["vxe-button--loading-icon", dt().BUTTON_LOADING]
      })) : n.icon ? _.push(r("span", {
        class: "vxe-button--custom-icon"
      }, n.icon({}))) : k && _.push(r("i", {
        class: ["vxe-button--icon", k]
      })), n.default ? _.push(r("span", {
        class: "vxe-button--content"
      }, n.default({}))) : R && _.push(r("span", {
        class: "vxe-button--content"
      }, Vn(R))), _;
    };
    h = {
      dispatchEvent(R, k, U) {
        o(R, zt(U, { $button: y }, k));
      },
      openPanel: M,
      closePanel: H,
      focus() {
        return b.value.focus(), ae();
      },
      blur() {
        return b.value.blur(), ae();
      }
    };
    const ve = (R) => {
      const k = x.value;
      f.visiblePanel && !Bn(R, k).flag && H();
    }, Oe = (R) => {
      const k = E.value, { visiblePanel: U } = f;
      if (!k) {
        const _ = D.value, K = x.value;
        f.isActivated = Bn(R, _).flag || Bn(R, K).flag, U && !f.isActivated && H();
      }
    };
    Object.assign(y, h);
    const Fe = () => {
      const { className: R, popupClassName: k, trigger: U, title: _, type: K, destroyOnClose: Z, name: ke, loading: ye } = e, { inited: Ee, visiblePanel: xe } = f, Le = T.value, je = W.value, Ye = $.value, fe = I.value, ge = z.value, $e = O.value, Ve = E.value, ce = s.value, We = d.value;
      if (!ce.visible)
        return Me();
      if (n.dropdowns) {
        const Ge = {}, Ze = {};
        return U === "hover" && (Ge.onMouseenter = oe, Ge.onMouseleave = re, Ze.onMouseenter = ee, Ze.onMouseleave = ne), r("div", {
          ref: D,
          class: ["vxe-button--dropdown", R ? i.isFunction(R) ? R({ $button: y }) : R : "", {
            [`size--${We}`]: We,
            "is--active": xe
          }]
        }, [
          r("button", Object.assign({
            ref: b,
            class: ["vxe-button", `type--${je}`, {
              [`size--${We}`]: We,
              [`theme--${Ye}`]: Ye,
              "is--round": fe,
              "is--circle": ge,
              "is--disabled": Ve || ye,
              "is--loading": ye
            }],
            title: _,
            name: ke,
            type: Le ? K : "button",
            disabled: Ve || ye,
            onClick: A
          }, Ge), de().concat([
            r("i", {
              class: `vxe-button--dropdown-arrow ${dt().BUTTON_DROPDOWN}`
            })
          ])),
          r(ts, {
            to: "body",
            disabled: $e ? !Ee : !0
          }, [
            r("div", Object.assign({ ref: x, class: ["vxe-button--dropdown-panel", k ? i.isFunction(k) ? k({ $button: y }) : k : "", {
              [`size--${We}`]: We,
              "animat--leave": f.animatVisible,
              "animat--enter": xe
            }], placement: f.panelPlacement, style: f.panelStyle }, Ze), Ee ? [
              r("div", {
                class: "vxe-button--dropdown-wrapper",
                onMousedown: F,
                onClick: j
              }, Z && !xe ? [] : n.dropdowns({}))
            ] : [])
          ])
        ]);
      }
      return r("button", {
        ref: b,
        class: ["vxe-button", `type--${je}`, R ? i.isFunction(R) ? R({ $button: y }) : R : "", {
          [`size--${We}`]: We,
          [`theme--${Ye}`]: Ye,
          "is--round": fe,
          "is--circle": ge,
          "is--disabled": Ve || ye,
          "is--loading": ye
        }],
        title: _,
        name: ke,
        type: Le ? K : "button",
        disabled: Ve || ye,
        onClick: N,
        onMouseenter: G,
        onMouseleave: J
      }, de());
    };
    return y.renderVN = Fe, yn(() => {
      process.env.NODE_ENV === "development" && e.type === "text" && $a("vxe.error.delProp", ["type=text", "mode=text"]), it.on(y, "mousewheel", ve), it.on(y, "mousedown", Oe);
    }), On(() => {
      it.off(y, "mousewheel"), it.off(y, "mousedown");
    }), y;
  },
  render() {
    return this.renderVN();
  }
}), pu = Object.assign({}, $n, {
  install(e) {
    e.component($n.name, $n);
  }
});
$t.component($n.name, $n);
ue.component($n);
const PP = pu, ll = tt({
  name: "VxeButtonGroup",
  props: {
    options: Array,
    mode: String,
    status: String,
    round: Boolean,
    circle: Boolean,
    className: [String, Function],
    disabled: Boolean,
    permissionCode: [String, Number],
    permissionMethod: Function,
    size: { type: String, default: () => me().buttonGroup.size || me().size }
  },
  emits: [
    "click"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = i.uniqueId(), a = {}, c = {
      xID: l,
      props: e,
      context: t,
      getComputeMaps: () => a
    };
    Ln(e);
    const { computePermissionInfo: p } = Ni(e), d = {
      dispatchEvent(g, D, b) {
        o(g, zt(b, { $buttonGroup: c }, D));
      }
    };
    Object.assign(c, d, {
      handleClick(g, D) {
        const { options: b } = e, { name: x } = g, S = b ? b.find((y) => y.name === x) : null;
        d.dispatchEvent("click", Object.assign(Object.assign({}, g), { option: S }), D);
      }
    });
    const f = () => {
      const { className: g, options: D } = e, b = p.value, x = n.default;
      return b.visible ? r("div", {
        class: ["vxe-button-group", g ? i.isFunction(g) ? g({ $buttonGroup: c }) : g : ""]
      }, x ? x({}) : D ? D.map((S, y) => r($n, Object.assign({ key: y }, S))) : []) : Me();
    };
    return c.renderVN = f, Xt("$xeButtonGroup", c), f;
  }
}), mu = Object.assign({}, ll, {
  install(e) {
    e.component(ll.name, ll);
  }
});
$t.component(ll.name, ll);
ue.component(ll);
const NP = mu, il = tt({
  name: "VxeCalendar",
  props: {},
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = {}, d = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => p
    }, s = () => {
      const f = n.default;
      return r("div", {
        ref: l,
        class: ["vxe-calendar"]
      }, f ? f({}) : []);
    };
    return d.renderVN = s, d;
  },
  render() {
    return this.renderVN();
  }
}), gu = Object.assign({}, il, {
  install(e) {
    e.component(il.name, il);
  }
});
$t.component(il.name, il);
ue.component(il);
const FP = gu, al = tt({
  name: "VxeCard",
  props: {
    title: String,
    showTitleOverflow: {
      type: Boolean,
      default: () => me().card.showTitleOverflow
    },
    width: [String, Number],
    height: [String, Number],
    border: {
      type: Boolean,
      default: () => me().card.border
    },
    shadow: {
      type: Boolean,
      default: () => me().card.shadow
    },
    padding: {
      type: Boolean,
      default: () => me().card.padding
    }
  },
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = Q(() => {
      const { height: g, width: D } = e, b = {};
      return D && (b.width = Wn(D)), g && (b.height = Wn(g)), b;
    }), d = {}, s = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => d
    }, f = () => {
      const { title: g, border: D, shadow: b, padding: x, showTitleOverflow: S } = e, y = n.default, h = n.header, O = n.title, E = n.extra, T = n.footer, W = n.left, $ = n.right, I = p.value;
      return r("div", {
        ref: l,
        class: ["vxe-card", {
          "is--border": D,
          "is--shadow": b,
          "is--padding": x
        }],
        style: I
      }, [
        g || O || h ? r("div", {
          class: "vxe-card--header"
        }, h ? It(h({})) : [
          r("div", {
            class: ["vxe-card--header-title", {
              "is--ellipsis": S
            }]
          }, O ? It(O({})) : `${g || ""}`),
          E ? r("div", {
            class: "vxe-card--header-extra"
          }, It(E({}))) : Me()
        ]) : Me(),
        r("div", {
          class: "vxe-card--body"
        }, [
          W ? r("div", {
            class: "vxe-card--body-left"
          }, It(W({}))) : Me(),
          r("div", {
            class: "vxe-card--body-content"
          }, y ? It(y({})) : []),
          $ ? r("div", {
            class: "vxe-card--body-right"
          }, It($({}))) : Me()
        ]),
        T ? r("div", {
          class: "vxe-card--footer"
        }, It(T({}))) : Me()
      ]);
    };
    return s.renderVN = f, s;
  },
  render() {
    return this.renderVN();
  }
}), vu = Object.assign({}, al, {
  install(e) {
    e.component(al.name, al);
  }
});
$t.component(al.name, al);
ue.component(al);
const LP = vu, cl = tt({
  name: "VxeCarousel",
  props: {},
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = {}, d = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => p
    }, s = () => {
      const f = n.default;
      return r("div", {
        ref: l,
        class: ["vxe-carousel"]
      }, f ? f({}) : []);
    };
    return d.renderVN = s, d;
  },
  render() {
    return this.renderVN();
  }
}), hu = Object.assign({}, cl, {
  install(e) {
    e.component(cl.name, cl);
  }
});
$t.component(cl.name, cl);
ue.component(cl);
const AP = hu, hr = tt({
  name: "VxeCheckbox",
  props: {
    modelValue: [String, Number, Boolean],
    label: { type: [String, Number], default: null },
    indeterminate: Boolean,
    title: [String, Number],
    checkedValue: { type: [String, Number, Boolean], default: !0 },
    uncheckedValue: { type: [String, Number, Boolean], default: !1 },
    content: [String, Number],
    disabled: {
      type: Boolean,
      default: null
    },
    size: { type: String, default: () => me().checkbox.size || me().size }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = ut("$xeForm", null), a = ut("xeFormItemInfo", null), c = ut("$xeCheckboxGroup", null), d = {
      xID: i.uniqueId(),
      props: e,
      context: t
    };
    let s = {};
    const { computeSize: f } = Ln(e), g = Q(() => c ? i.includes(c.props.modelValue, e.label) : e.modelValue === e.checkedValue), D = Q(() => {
      const { disabled: S } = e;
      if (S === null && c) {
        const { computeIsDisabled: y, computeIsMaximize: h } = c.getComputeMaps(), O = h.value, E = g.value;
        return y.value || O && !E;
      }
      return S;
    }), b = (S) => {
      const { checkedValue: y, uncheckedValue: h } = e;
      if (!D.value) {
        const E = S.target.checked, T = E ? y : h, W = { checked: E, value: T, label: e.label };
        c ? c.handleChecked(W, S) : (o("update:modelValue", T), s.dispatchEvent("change", W, S), l && a && l.triggerItemEvent(S, a.itemConfig.field, T));
      }
    };
    s = {
      dispatchEvent(S, y, h) {
        o(S, zt(h, { $checkbox: d }, y));
      }
    }, Object.assign(d, s);
    const x = () => {
      const S = f.value, y = D.value, h = g.value, O = e.indeterminate;
      return r("label", {
        class: ["vxe-checkbox", {
          [`size--${S}`]: S,
          "is--indeterminate": O,
          "is--disabled": y,
          "is--checked": h
        }],
        title: e.title
      }, [
        r("input", {
          class: "vxe-checkbox--input",
          type: "checkbox",
          disabled: y,
          checked: h,
          onChange: b
        }),
        r("span", {
          class: ["vxe-checkbox--icon", O ? dt().CHECKBOX_INDETERMINATE : h ? dt().CHECKBOX_CHECKED : dt().CHECKBOX_UNCHECKED]
        }),
        r("span", {
          class: "vxe-checkbox--label"
        }, n.default ? n.default({}) : Vn(e.content))
      ]);
    };
    return d.renderVN = x, d;
  },
  render() {
    return this.renderVN();
  }
}), bu = Object.assign(hr, {
  install(e) {
    e.component(hr.name, hr);
  }
}), _P = bu;
$t.component(hr.name, hr);
ue.component(hr);
const ws = tt({
  name: "VxeCheckboxGroup",
  props: {
    modelValue: Array,
    options: Array,
    optionProps: Object,
    disabled: {
      type: Boolean,
      default: null
    },
    max: { type: [String, Number], default: null },
    size: { type: String, default: () => me().checkboxGroup.size || me().size }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = ut("$xeForm", null), a = ut("xeFormItemInfo", null), c = i.uniqueId(), p = Q(() => {
      const { disabled: O } = e;
      return O === null ? l ? l.props.readonly || l.props.disabled : !1 : O;
    }), d = Q(() => {
      const { modelValue: O, max: E } = e;
      return E ? (O ? O.length : 0) >= i.toNumber(E) : !1;
    }), s = Q(() => e.optionProps || {}), f = Q(() => s.value.label || "label"), g = Q(() => s.value.value || "value"), D = Q(() => s.value.disabled || "disabled"), b = {
      computeIsMaximize: d,
      computeIsDisabled: p
    }, x = {
      xID: c,
      props: e,
      context: t,
      getComputeMaps: () => b
    };
    Ln(e), Object.assign(x, {
      dispatchEvent(O, E, T) {
        o(O, zt(T, { $checkboxGroup: x }, E));
      }
    }, {
      handleChecked(O, E) {
        const { checked: T, label: W } = O, $ = e.modelValue || [], I = $.indexOf(W);
        T ? I === -1 && $.push(W) : $.splice(I, 1), o("update:modelValue", $), x.dispatchEvent("change", Object.assign({ checklist: $ }, O), E), l && a && l.triggerItemEvent(E, a.itemConfig.field, $);
      }
    });
    const h = () => {
      const { options: O } = e, E = n.default, T = g.value, W = f.value, $ = D.value;
      return r("div", {
        class: "vxe-checkbox-group"
      }, E ? E({}) : O ? O.map((I) => r(hr, {
        label: I[T],
        content: I[W],
        disabled: I[$]
      })) : []);
    };
    return x.renderVN = h, Xt("$xeCheckboxGroup", x), h;
  }
}), xu = Object.assign(ws, {
  install(e) {
    e.component(ws.name, ws);
  }
});
$t.component(ws.name, ws);
ue.component(ws);
const WP = xu, Ur = tt({
  name: "VxeCol",
  props: {
    span: [Number, String],
    align: String,
    width: [Number, String],
    fill: Boolean,
    ellipsis: Boolean
  },
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = ut("$xeRow", null), d = Q(() => p ? p.props.gutter : null), s = Q(() => p ? p.props.vertical : null), f = Q(() => {
      const { width: x } = e, S = d.value, y = s.value, h = {};
      if (S) {
        let [O, E] = i.isArray(S) ? S : [S];
        if (y && (E = O, O = ""), O) {
          const T = i.isNumber(O) ? Wn(O / 2) : `calc(${Wn(O)} / 2)`;
          h.paddingLeft = T, h.paddingRight = T;
        }
        if (E) {
          const T = i.isNumber(E) ? Wn(E / 2) : `calc(${Wn(E)} / 2)`;
          h.paddingTop = T, h.paddingBottom = T;
        }
      }
      return x && (h.width = Wn(x)), h;
    }), g = {}, D = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => g
    }, b = () => {
      const { span: x, fill: S, align: y, ellipsis: h } = e, O = f.value, E = n.default;
      return r("div", {
        ref: l,
        class: ["vxe-col", x ? `span${x}` : "", y ? `align--${y}` : "", {
          "is--span": x,
          "is--fill": S,
          "is--ellipsis": h
        }],
        style: O
      }, E ? E({}) : []);
    };
    return D.renderVN = b, D;
  },
  render() {
    return this.renderVN();
  }
}), yu = Object.assign({}, Ur, {
  install(e) {
    e.component(Ur.name, Ur);
  }
});
$t.component(Ur.name, Ur);
ue.component(Ur);
const BP = yu, ul = tt({
  name: "VxeCollapse",
  props: {},
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = {}, d = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => p
    }, s = () => {
      const f = n.default;
      return r("div", {
        ref: l,
        class: ["vxe-collapse"]
      }, f ? f({}) : []);
    };
    return d.renderVN = s, d;
  },
  render() {
    return this.renderVN();
  }
}), Cu = Object.assign({}, ul, {
  install(e) {
    e.component(ul.name, ul);
  }
});
$t.component(ul.name, ul);
ue.component(ul);
const HP = Cu, dl = tt({
  name: "VxeCollapsePane",
  props: {},
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = {}, d = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => p
    }, s = () => {
      const f = n.default;
      return r("div", {
        ref: l,
        class: ["vxe-collapse-pane"]
      }, f ? f({}) : []);
    };
    return d.renderVN = s, d;
  },
  render() {
    return this.renderVN();
  }
}), wu = Object.assign({}, dl, {
  install(e) {
    e.component(dl.name, dl);
  }
});
$t.component(dl.name, dl);
ue.component(dl);
const zP = wu, cr = 12, jP = 20, qP = 8;
function GP(e) {
  if (e) {
    const t = /* @__PURE__ */ new Date();
    let n = 0, o = 0, l = 0;
    if (i.isDate(e))
      n = e.getHours(), o = e.getMinutes(), l = e.getSeconds();
    else {
      e = i.toValueString(e);
      const a = e.match(/^(\d{1,2})(:(\d{1,2}))?(:(\d{1,2}))?/);
      a && (n = i.toNumber(a[1]), o = i.toNumber(a[3]), l = i.toNumber(a[5]));
    }
    return t.setHours(n), t.setMinutes(o), t.setSeconds(l), t;
  }
  return /* @__PURE__ */ new Date("");
}
function vp(e) {
  const t = e.getMonth();
  return t < 3 ? 1 : t < 6 ? 2 : t < 9 ? 3 : 4;
}
const Br = tt({
  name: "VxeDatePicker",
  props: {
    modelValue: [String, Number, Date],
    immediate: { type: Boolean, default: !0 },
    name: String,
    type: { type: String, default: "date" },
    clearable: { type: Boolean, default: () => me().datePicker.clearable },
    readonly: {
      type: Boolean,
      default: null
    },
    disabled: {
      type: Boolean,
      default: null
    },
    placeholder: {
      type: String,
      default: () => i.eqNull(me().datePicker.placeholder) ? Te("vxe.base.pleaseSelect") : me().datePicker.placeholder
    },
    maxlength: [String, Number],
    autocomplete: { type: String, default: "off" },
    align: String,
    form: String,
    className: String,
    size: { type: String, default: () => me().datePicker.size || me().size },
    multiple: Boolean,
    // date、week、month、quarter、year
    startDate: { type: [String, Number, Date], default: () => me().datePicker.startDate },
    endDate: { type: [String, Number, Date], default: () => me().datePicker.endDate },
    minDate: [String, Number, Date],
    maxDate: [String, Number, Date],
    // 已废弃 startWeek，被 startDay 替换
    startWeek: Number,
    startDay: { type: [String, Number], default: () => me().datePicker.startDay },
    labelFormat: { type: String, default: () => me().datePicker.labelFormat },
    valueFormat: { type: String, default: () => me().datePicker.valueFormat },
    editable: { type: Boolean, default: !0 },
    festivalMethod: { type: Function, default: () => me().datePicker.festivalMethod },
    disabledMethod: { type: Function, default: () => me().datePicker.disabledMethod },
    // week
    selectDay: { type: [String, Number], default: () => me().datePicker.selectDay },
    prefixIcon: String,
    suffixIcon: String,
    placement: String,
    transfer: {
      type: Boolean,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "input",
    "change",
    "keydown",
    "keyup",
    "wheel",
    "click",
    "focus",
    "blur",
    "clear",
    "prefix-click",
    "suffix-click",
    "date-prev",
    "date-today",
    "date-next"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = ut("$xeTable", null), a = ut("$xeForm", null), c = ut("xeFormItemInfo", null), p = i.uniqueId(), { computeSize: d } = Ln(e), s = Ot({
      inited: !1,
      panelIndex: 0,
      showPwd: !1,
      visiblePanel: !1,
      animatVisible: !1,
      panelStyle: null,
      panelPlacement: "",
      isActivated: !1,
      inputValue: e.modelValue,
      datetimePanelValue: null,
      datePanelValue: null,
      datePanelLabel: "",
      datePanelType: "day",
      selectMonth: null,
      currentDate: null
    }), f = Ie(), g = Ie(), D = Ie(), b = Ie(), x = Ie(), S = {
      refElem: f,
      refInput: g
    }, y = {
      xID: p,
      props: e,
      context: t,
      reactData: s,
      getRefMaps: () => S
    };
    let h = {};
    const O = (q, Ne) => {
      const { type: qe } = e;
      return qe === "time" ? GP(q) : i.toStringDate(q, Ne);
    }, E = Q(() => {
      const { transfer: q } = e;
      if (q === null) {
        const Ne = me().datePicker.transfer;
        if (i.isBoolean(Ne))
          return Ne;
        if (l || a)
          return !0;
      }
      return q;
    }), T = Q(() => {
      const { readonly: q } = e;
      return q === null ? a ? a.props.readonly : !1 : q;
    }), W = Q(() => {
      const { disabled: q } = e;
      return q === null ? a ? a.props.disabled : !1 : q;
    }), $ = Q(() => {
      const { type: q } = e;
      return q === "time" || q === "datetime";
    }), I = Q(() => $.value || ["date", "week", "month", "quarter", "year"].indexOf(e.type) > -1), z = Q(() => e.clearable), te = Q(() => e.startDate ? i.toStringDate(e.startDate) : null), Ce = Q(() => e.endDate ? i.toStringDate(e.endDate) : null), N = Q(() => ["date", "week", "month", "quarter", "year"].includes(e.type)), F = Q(() => {
      const { modelValue: q, multiple: Ne } = e, qe = I.value, rt = oe.value;
      return Ne && q && qe ? i.toValueString(q).split(",").map((Ct) => {
        const ct = O(Ct, rt);
        return i.isValidDate(ct) ? ct : null;
      }) : [];
    }), j = Q(() => {
      const q = F.value, Ne = oe.value;
      return q.map((qe) => i.toDateString(qe, Ne));
    }), ee = Q(() => {
      const q = F.value, Ne = H.value;
      return q.map((qe) => i.toDateString(qe, Ne)).join(", ");
    }), oe = Q(() => {
      const { type: q } = e;
      return q === "time" ? "HH:mm:ss" : e.valueFormat || (q === "datetime" ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd");
    }), re = Q(() => {
      const { modelValue: q } = e, Ne = I.value, qe = oe.value;
      let rt = null;
      if (q && Ne) {
        const Ct = O(q, qe);
        i.isValidDate(Ct) && (rt = Ct);
      }
      return rt;
    }), G = Q(() => {
      const q = te.value, { selectMonth: Ne } = s;
      return Ne && q ? Ne <= q : !1;
    }), J = Q(() => {
      const q = Ce.value, { selectMonth: Ne } = s;
      return Ne && q ? Ne >= q : !1;
    }), A = Q(() => {
      const { datetimePanelValue: q } = s;
      return q ? i.toDateString(q, "HH:mm:ss") : "";
    }), M = Q(() => {
      const q = re.value, Ne = $.value;
      return q && Ne ? (q.getHours() * 3600 + q.getMinutes() * 60 + q.getSeconds()) * 1e3 : 0;
    }), H = Q(() => I.value ? e.labelFormat || Te(`vxe.input.date.labelFormat.${e.type}`) : null), ne = Q(() => {
      const { selectMonth: q, currentDate: Ne } = s, qe = [];
      if (q && Ne) {
        const rt = Ne.getFullYear(), Ct = q.getFullYear(), ct = new Date(Ct - Ct % cr, 0, 1);
        for (let xt = -4; xt < cr + 4; xt++) {
          const Tt = i.getWhatYear(ct, xt, "first"), Ke = Tt.getFullYear();
          qe.push({
            date: Tt,
            isCurrent: !0,
            isPrev: xt < 0,
            isNow: rt === Ke,
            isNext: xt >= cr,
            year: Ke
          });
        }
      }
      return qe;
    }), de = Q(() => {
      if (I.value) {
        const { datePanelType: Ne, selectMonth: qe } = s, rt = ne.value;
        let Ct = "", ct;
        return qe && (Ct = qe.getFullYear(), ct = qe.getMonth() + 1), Ne === "quarter" ? Te("vxe.input.date.quarterLabel", [Ct]) : Ne === "month" ? Te("vxe.input.date.monthLabel", [Ct]) : Ne === "year" ? rt.length ? `${rt[0].year} - ${rt[rt.length - 1].year}` : "" : Te("vxe.input.date.dayLabel", [Ct, ct ? Te(`vxe.input.date.m${ct}`) : "-"]);
      }
      return "";
    }), ve = Q(() => {
      const { startDay: q, startWeek: Ne } = e;
      return i.toNumber(i.isNumber(q) || i.isString(q) ? q : Ne);
    }), Oe = Q(() => {
      const q = [];
      if (I.value) {
        let qe = ve.value;
        q.push(qe);
        for (let rt = 0; rt < 6; rt++)
          qe >= 6 ? qe = 0 : qe++, q.push(qe);
      }
      return q;
    }), Fe = Q(() => I.value ? Oe.value.map((qe) => ({
      value: qe,
      label: Te(`vxe.input.date.weeks.w${qe}`)
    })) : []), R = Q(() => {
      if (I.value) {
        const Ne = Fe.value;
        return [{ label: Te("vxe.input.date.weeks.w") }].concat(Ne);
      }
      return [];
    }), k = Q(() => {
      const q = ne.value;
      return i.chunk(q, 4);
    }), U = Q(() => {
      const { selectMonth: q, currentDate: Ne } = s, qe = [];
      if (q && Ne) {
        const rt = Ne.getFullYear(), Ct = vp(Ne), ct = i.getWhatYear(q, 0, "first"), xt = ct.getFullYear();
        for (let Tt = -2; Tt < qP - 2; Tt++) {
          const Ke = i.getWhatQuarter(ct, Tt), yt = Ke.getFullYear(), sn = vp(Ke), Gt = yt < xt;
          qe.push({
            date: Ke,
            isPrev: Gt,
            isCurrent: yt === xt,
            isNow: yt === rt && sn === Ct,
            isNext: !Gt && yt > xt,
            quarter: sn
          });
        }
      }
      return qe;
    }), _ = Q(() => {
      const q = U.value;
      return i.chunk(q, 2);
    }), K = Q(() => {
      const { selectMonth: q, currentDate: Ne } = s, qe = [];
      if (q && Ne) {
        const rt = Ne.getFullYear(), Ct = Ne.getMonth(), ct = i.getWhatYear(q, 0, "first").getFullYear();
        for (let xt = -4; xt < jP - 4; xt++) {
          const Tt = i.getWhatYear(q, 0, xt), Ke = Tt.getFullYear(), yt = Tt.getMonth(), sn = Ke < ct;
          qe.push({
            date: Tt,
            isPrev: sn,
            isCurrent: Ke === ct,
            isNow: Ke === rt && yt === Ct,
            isNext: !sn && Ke > ct,
            month: yt
          });
        }
      }
      return qe;
    }), Z = Q(() => {
      const q = K.value;
      return i.chunk(q, 4);
    }), ke = Q(() => {
      const { selectMonth: q, currentDate: Ne } = s, qe = [];
      if (q && Ne) {
        const rt = M.value, Ct = Oe.value, ct = Ne.getFullYear(), xt = Ne.getMonth(), Tt = Ne.getDate(), Ke = q.getFullYear(), yt = q.getMonth(), sn = q.getDay(), Gt = -Ct.indexOf(sn), gn = new Date(i.getWhatDay(q, Gt).getTime() + rt);
        for (let mo = 0; mo < 42; mo++) {
          const to = i.getWhatDay(gn, mo), qn = to.getFullYear(), Mn = to.getMonth(), Co = to.getDate(), Rs = to < q;
          qe.push({
            date: to,
            isPrev: Rs,
            isCurrent: qn === Ke && Mn === yt,
            isNow: qn === ct && Mn === xt && Co === Tt,
            isNext: !Rs && yt !== Mn,
            label: Co
          });
        }
      }
      return qe;
    }), ye = Q(() => {
      const q = ke.value;
      return i.chunk(q, 7);
    }), Ee = Q(() => {
      const q = ye.value, Ne = ve.value;
      return q.map((qe) => {
        const rt = qe[0];
        return [{
          date: rt.date,
          isWeekNumber: !0,
          isPrev: !1,
          isCurrent: !1,
          isNow: !1,
          isNext: !1,
          label: i.getYearWeek(rt.date, Ne)
        }].concat(qe);
      });
    }), xe = Q(() => {
      const q = [];
      if ($.value)
        for (let qe = 0; qe < 24; qe++)
          q.push({
            value: qe,
            label: ("" + qe).padStart(2, "0")
          });
      return q;
    }), Le = Q(() => {
      const q = [];
      if ($.value)
        for (let qe = 0; qe < 60; qe++)
          q.push({
            value: qe,
            label: ("" + qe).padStart(2, "0")
          });
      return q;
    }), je = Q(() => Le.value), Ye = Q(() => {
      const { type: q, editable: Ne, multiple: qe } = e;
      return T.value || qe || !Ne || q === "week" || q === "quarter";
    }), fe = Q(() => "text"), ge = Q(() => {
      const { placeholder: q } = e;
      return q ? Vn(q) : "";
    }), $e = Q(() => {
      const { immediate: q } = e;
      return q;
    }), Ve = (q) => {
      const { inputValue: Ne } = s;
      h.dispatchEvent(q.type, { value: Ne }, q);
    }, ce = (q, Ne) => {
      s.inputValue = q, o("update:modelValue", q), h.dispatchEvent("input", { value: q }, Ne), i.toValueString(e.modelValue) !== q && (h.dispatchEvent("change", { value: q }, Ne), a && c && a.triggerItemEvent(Ne, c.itemConfig.field, q));
    }, We = (q, Ne) => {
      const qe = I.value, rt = $e.value;
      s.inputValue = q, qe || (rt ? ce(q, Ne) : h.dispatchEvent("input", { value: q }, Ne));
    }, Ge = (q) => {
      const qe = q.target.value;
      We(qe, q);
    }, Ze = (q) => {
      $e.value || Ve(q);
    }, pe = (q) => {
      s.isActivated = !0, I.value && _o(q), Ve(q);
    }, Y = (q) => {
      if (!W.value) {
        const { inputValue: qe } = s;
        h.dispatchEvent("prefix-click", { value: qe }, q);
      }
    };
    let le;
    const he = () => new Promise((q) => {
      s.visiblePanel = !1, le = window.setTimeout(() => {
        s.animatVisible = !1, q();
      }, 350);
    }), He = (q, Ne) => {
      I.value && he(), ce("", q), h.dispatchEvent("clear", { value: Ne }, q);
    }, se = (q) => {
      if (!W.value) {
        const { inputValue: qe } = s;
        h.dispatchEvent("suffix-click", { value: qe }, q);
      }
    }, Se = (q) => {
      const { type: Ne } = e, { valueFormat: qe } = e, rt = H.value, Ct = ve.value;
      let ct = null, xt = "";
      if (q && (ct = O(q, qe)), i.isValidDate(ct)) {
        if (xt = i.toDateString(ct, rt, { firstDay: Ct }), rt && Ne === "week" && i.getWhatWeek(ct, 0, Ct, Ct).getFullYear() < ct.getFullYear()) {
          const Ke = rt.indexOf("yyyy");
          if (Ke > -1) {
            const yt = Number(xt.substring(Ke, Ke + 4));
            yt && !isNaN(yt) && (xt = xt.replace(`${yt}`, `${yt - 1}`));
          }
        }
      } else
        ct = null;
      s.datePanelValue = ct, s.datePanelLabel = xt;
    }, ze = () => {
      const q = I.value, { inputValue: Ne } = s;
      q && (Se(Ne), s.inputValue = e.multiple ? ee.value : s.datePanelLabel);
    }, Xe = () => {
      I.value && ze();
    }, et = () => {
      s.inputValue = e.multiple ? ee.value : s.datePanelLabel;
    }, at = (q) => {
      const Ne = i.getWhatMonth(q, 0, "first");
      i.isEqual(Ne, s.selectMonth) || (s.selectMonth = Ne);
    }, ft = (q) => {
      const { modelValue: Ne, multiple: qe } = e, { datetimePanelValue: rt } = s, Ct = $.value, ct = oe.value, xt = ve.value;
      if (e.type === "week") {
        const Ke = i.toNumber(e.selectDay);
        q = i.getWhatWeek(q, 0, Ke, xt);
      } else Ct && (q.setHours(rt.getHours()), q.setMinutes(rt.getMinutes()), q.setSeconds(rt.getSeconds()));
      const Tt = i.toDateString(q, ct, { firstDay: xt });
      if (at(q), qe) {
        const Ke = j.value;
        if (Ct) {
          const yt = [...F.value], sn = [], Gt = i.findIndexOf(yt, (gn) => i.isDateSame(q, gn, "yyyyMMdd"));
          Gt === -1 ? yt.push(q) : yt.splice(Gt, 1), yt.forEach((gn) => {
            gn && (gn.setHours(rt.getHours()), gn.setMinutes(rt.getMinutes()), gn.setSeconds(rt.getSeconds()), sn.push(gn));
          }), ce(sn.map((gn) => i.toDateString(gn, ct)).join(","), { type: "update" });
        } else
          Ke.some((yt) => i.isEqual(yt, Tt)) ? ce(Ke.filter((yt) => !i.isEqual(yt, Tt)).join(","), { type: "update" }) : ce(Ke.concat([Tt]).join(","), { type: "update" });
      } else
        i.isEqual(Ne, Tt) || ce(Tt, { type: "update" });
    }, mt = () => {
      const { type: q } = e, { inputValue: Ne, datetimePanelValue: qe } = s, rt = H.value;
      if (!Ye.value)
        if (Ne) {
          let ct = O(Ne, rt);
          if (i.isValidDate(ct))
            if (q === "time")
              ct = i.toDateString(ct, rt), Ne !== ct && ce(ct, { type: "check" }), s.inputValue = ct;
            else {
              let xt = !1;
              const Tt = ve.value;
              if (q === "datetime") {
                const Ke = re.value;
                (Ne !== i.toDateString(Ke, rt) || Ne !== i.toDateString(ct, rt)) && (xt = !0, qe.setHours(ct.getHours()), qe.setMinutes(ct.getMinutes()), qe.setSeconds(ct.getSeconds()));
              } else
                xt = !0;
              s.inputValue = i.toDateString(ct, rt, { firstDay: Tt }), xt && ft(ct);
            }
          else
            et();
        } else
          ce("", { type: "check" });
    }, B = (q) => {
      const { inputValue: Ne } = s;
      $e.value || ce(Ne, q), mt(), s.visiblePanel || (s.isActivated = !1), h.dispatchEvent("blur", { value: Ne }, q);
    }, Mt = (q) => {
      Ve(q);
    }, St = (q) => {
      Ve(q);
    }, gt = (q) => {
      Ve(q);
    }, bt = (q, Ne) => {
      s.selectMonth = i.getWhatMonth(q, Ne, "first");
    }, Dt = () => {
      const q = i.getWhatDay(Date.now(), 0, "first");
      s.currentDate = q, bt(q, 0);
    }, Bt = () => {
      let { datePanelType: q } = s;
      q === "month" || q === "quarter" ? q = "year" : q = "month", s.datePanelType = q;
    }, Wt = (q) => {
      const { type: Ne } = e, { datePanelType: qe, selectMonth: rt } = s;
      G.value || (Ne === "year" ? s.selectMonth = i.getWhatYear(rt, -cr, "first") : Ne === "month" || Ne === "quarter" ? qe === "year" ? s.selectMonth = i.getWhatYear(rt, -cr, "first") : s.selectMonth = i.getWhatYear(rt, -1, "first") : qe === "year" ? s.selectMonth = i.getWhatYear(rt, -cr, "first") : qe === "month" ? s.selectMonth = i.getWhatYear(rt, -1, "first") : s.selectMonth = i.getWhatMonth(rt, -1, "first"), h.dispatchEvent("date-prev", { type: Ne }, q));
    }, Pt = (q) => {
      Dt(), e.multiple || (ft(s.currentDate), he()), h.dispatchEvent("date-today", { type: e.type }, q);
    }, jt = (q) => {
      const { type: Ne } = e, { datePanelType: qe, selectMonth: rt } = s;
      J.value || (Ne === "year" ? s.selectMonth = i.getWhatYear(rt, cr, "first") : Ne === "month" || Ne === "quarter" ? qe === "year" ? s.selectMonth = i.getWhatYear(rt, cr, "first") : s.selectMonth = i.getWhatYear(rt, 1, "first") : qe === "year" ? s.selectMonth = i.getWhatYear(rt, cr, "first") : qe === "month" ? s.selectMonth = i.getWhatYear(rt, 1, "first") : s.selectMonth = i.getWhatMonth(rt, 1, "first"), h.dispatchEvent("date-next", { type: Ne }, q));
    }, At = (q) => {
      const { disabledMethod: Ne } = e, { datePanelType: qe } = s;
      return Ne && Ne({ type: qe, viewType: qe, date: q.date, $datePicker: y });
    }, Rn = (q) => {
      const { type: Ne, multiple: qe } = e, { datePanelType: rt } = s;
      Ne === "month" ? rt === "year" ? (s.datePanelType = "month", at(q)) : (ft(q), qe || he()) : Ne === "year" ? (ft(q), qe || he()) : Ne === "quarter" ? rt === "year" ? (s.datePanelType = "quarter", at(q)) : (ft(q), qe || he()) : rt === "month" ? (s.datePanelType = Ne === "week" ? Ne : "day", at(q)) : rt === "year" ? (s.datePanelType = "month", at(q)) : (ft(q), Ne === "datetime" || qe || he());
    }, _t = (q) => {
      At(q) || Rn(q.date);
    }, Ht = (q) => {
      At({ date: q }) || (ke.value.some((qe) => i.isDateSame(qe.date, q, "yyyyMMdd")) || at(q), Se(q));
    }, Kt = (q) => {
      At({ date: q }) || (ne.value.some((qe) => i.isDateSame(qe.date, q, "yyyy")) || at(q), Se(q));
    }, pn = (q) => {
      At({ date: q }) || (U.value.some((qe) => i.isDateSame(qe.date, q, "yyyyq")) || at(q), Se(q));
    }, Tn = (q) => {
      At({ date: q }) || (K.value.some((qe) => i.isDateSame(qe.date, q, "yyyyMM")) || at(q), Se(q));
    }, mn = (q) => {
      if (!At(q)) {
        const { datePanelType: Ne } = s;
        Ne === "month" ? Tn(q.date) : Ne === "quarter" ? pn(q.date) : Ne === "year" ? Kt(q.date) : Ht(q.date);
      }
    }, hn = (q) => {
      if (q) {
        const Ne = q.offsetHeight, qe = q.parentNode;
        qe.scrollTop = q.offsetTop - Ne * 4;
      }
    }, Pn = (q) => {
      s.datetimePanelValue = new Date(s.datetimePanelValue.getTime()), hn(q.currentTarget);
    }, cn = (q, Ne) => {
      s.datetimePanelValue.setHours(Ne.value), Pn(q);
    }, Qt = () => {
      const { multiple: q } = e, { datetimePanelValue: Ne } = s, qe = re.value, rt = $.value;
      if (rt) {
        const Ct = oe.value;
        if (q) {
          const ct = j.value;
          if (rt) {
            const xt = [...F.value], Tt = [];
            xt.forEach((Ke) => {
              Ke && (Ke.setHours(Ne.getHours()), Ke.setMinutes(Ne.getMinutes()), Ke.setSeconds(Ne.getSeconds()), Tt.push(Ke));
            }), ce(Tt.map((Ke) => i.toDateString(Ke, Ct)).join(","), { type: "update" });
          } else
            ce(ct.join(","), { type: "update" });
        } else
          ft(qe || s.currentDate);
      }
      he();
    }, wn = (q, Ne) => {
      s.datetimePanelValue.setMinutes(Ne.value), Pn(q);
    }, Zt = (q, Ne) => {
      s.datetimePanelValue.setSeconds(Ne.value), Pn(q);
    }, _n = (q) => {
      const { isActivated: Ne, datePanelValue: qe, datePanelType: rt } = s;
      if (Ne) {
        q.preventDefault();
        const Ct = it.hasKey(q, Vt.ARROW_LEFT), ct = it.hasKey(q, Vt.ARROW_UP), xt = it.hasKey(q, Vt.ARROW_RIGHT), Tt = it.hasKey(q, Vt.ARROW_DOWN);
        if (rt === "year") {
          let Ke = i.getWhatYear(qe || Date.now(), 0, "first");
          Ct ? Ke = i.getWhatYear(Ke, -1) : ct ? Ke = i.getWhatYear(Ke, -4) : xt ? Ke = i.getWhatYear(Ke, 1) : Tt && (Ke = i.getWhatYear(Ke, 4)), Kt(Ke);
        } else if (rt === "quarter") {
          let Ke = i.getWhatQuarter(qe || Date.now(), 0, "first");
          Ct ? Ke = i.getWhatQuarter(Ke, -1) : ct ? Ke = i.getWhatQuarter(Ke, -2) : xt ? Ke = i.getWhatQuarter(Ke, 1) : Tt && (Ke = i.getWhatQuarter(Ke, 2)), pn(Ke);
        } else if (rt === "month") {
          let Ke = i.getWhatMonth(qe || Date.now(), 0, "first");
          Ct ? Ke = i.getWhatMonth(Ke, -1) : ct ? Ke = i.getWhatMonth(Ke, -4) : xt ? Ke = i.getWhatMonth(Ke, 1) : Tt && (Ke = i.getWhatMonth(Ke, 4)), Tn(Ke);
        } else {
          let Ke = qe || i.getWhatDay(Date.now(), 0, "first");
          const yt = ve.value;
          Ct ? Ke = i.getWhatDay(Ke, -1) : ct ? Ke = i.getWhatWeek(Ke, -1, yt) : xt ? Ke = i.getWhatDay(Ke, 1) : Tt && (Ke = i.getWhatWeek(Ke, 1, yt)), Ht(Ke);
        }
      }
    }, Yo = (q) => {
      const { isActivated: Ne } = s;
      if (Ne) {
        const qe = it.hasKey(q, Vt.PAGE_UP);
        q.preventDefault(), qe ? Wt(q) : jt(q);
      }
    }, Zn = () => {
      const { type: q } = e, Ne = $.value, qe = re.value;
      ["year", "quarter", "month", "week"].indexOf(q) > -1 ? s.datePanelType = q : s.datePanelType = "day", s.currentDate = i.getWhatDay(Date.now(), 0, "first"), qe ? (bt(qe, 0), Se(qe)) : Dt(), Ne && (s.datetimePanelValue = s.datePanelValue || i.getWhatDay(Date.now(), 0, "first"), ae(() => {
        const rt = x.value;
        i.arrayEach(rt.querySelectorAll("li.is--selected"), hn);
      }));
    }, Tr = () => {
      s.panelIndex < ss() && (s.panelIndex = Cr());
    }, $o = () => ae().then(() => {
      const { placement: q } = e, { panelIndex: Ne } = s, qe = g.value, rt = D.value, Ct = E.value;
      if (qe && rt) {
        const ct = qe.offsetHeight, xt = qe.offsetWidth, Tt = rt.offsetHeight, Ke = rt.offsetWidth, yt = 5, sn = {
          zIndex: Ne
        }, { boundingTop: Gt, boundingLeft: gn, visibleHeight: mo, visibleWidth: to } = Ul(qe);
        let qn = "bottom";
        if (Ct) {
          let Mn = gn, Co = Gt + ct;
          q === "top" ? (qn = "top", Co = Gt - Tt) : q || (Co + Tt + yt > mo && (qn = "top", Co = Gt - Tt), Co < yt && (qn = "bottom", Co = Gt + ct)), Mn + Ke + yt > to && (Mn -= Mn + Ke + yt - to), Mn < yt && (Mn = yt), Object.assign(sn, {
            left: `${Mn}px`,
            top: `${Co}px`,
            minWidth: `${xt}px`
          });
        } else
          q === "top" ? (qn = "top", sn.bottom = `${ct}px`) : q || (sn.top = `${ct}px`, Gt + ct + Tt > mo && Gt - ct - Tt > yt && (qn = "top", sn.top = "", sn.bottom = `${ct}px`));
        return s.panelStyle = sn, s.panelPlacement = qn, ae();
      }
    }), Ao = () => {
      const { visiblePanel: q } = s, Ne = W.value, qe = I.value;
      return !Ne && !q ? (s.inited || (s.inited = !0), clearTimeout(le), s.isActivated = !0, s.animatVisible = !0, qe && Zn(), setTimeout(() => {
        s.visiblePanel = !0;
      }, 10), Tr(), $o()) : ae();
    }, _o = (q) => {
      T.value || (q.preventDefault(), Ao());
    }, fo = (q) => {
      Ve(q);
    }, Wo = (q) => {
      const { visiblePanel: Ne, isActivated: qe } = s, rt = I.value, Ct = f.value, ct = b.value;
      !W.value && qe && (s.isActivated = Bn(q, Ct).flag || Bn(q, ct).flag, s.isActivated || (rt ? Ne && (he(), mt()) : mt()));
    }, zn = (q) => {
      const { clearable: Ne } = e, { visiblePanel: qe } = s, rt = I.value;
      if (!W.value) {
        const ct = it.hasKey(q, Vt.TAB), xt = it.hasKey(q, Vt.DELETE), Tt = it.hasKey(q, Vt.ESCAPE), Ke = it.hasKey(q, Vt.ENTER), yt = it.hasKey(q, Vt.ARROW_LEFT), sn = it.hasKey(q, Vt.ARROW_UP), Gt = it.hasKey(q, Vt.ARROW_RIGHT), gn = it.hasKey(q, Vt.ARROW_DOWN), mo = it.hasKey(q, Vt.PAGE_UP), to = it.hasKey(q, Vt.PAGE_DOWN), qn = yt || sn || Gt || gn;
        let Mn = s.isActivated;
        ct ? (Mn && mt(), Mn = !1, s.isActivated = Mn) : qn ? rt && Mn && (qe ? _n(q) : (sn || gn) && _o(q)) : Ke ? rt && (qe ? s.datePanelValue ? Rn(s.datePanelValue) : he() : Mn && _o(q)) : (mo || to) && rt && Mn && Yo(q), ct || Tt ? qe && he() : xt && Ne && Mn && He(q, null);
      }
    }, Ro = (q) => {
      const { visiblePanel: Ne } = s;
      if (!W.value && Ne) {
        const rt = b.value;
        Bn(q, rt).flag ? $o() : (he(), mt());
      }
    }, Bo = () => {
      const { isActivated: q, visiblePanel: Ne } = s;
      Ne ? (he(), mt()) : q && mt();
    }, En = (q, Ne) => {
      const { festivalMethod: qe } = e;
      if (qe) {
        const { datePanelType: rt } = s, Ct = qe({ type: rt, viewType: rt, date: q.date, $datePicker: y }), ct = Ct ? i.isString(Ct) ? { label: Ct } : Ct : {}, xt = ct.extra ? i.isString(ct.extra) ? { label: ct.extra } : ct.extra : null, Tt = [
          r("span", {
            class: ["vxe-date-picker--date-label", {
              "is-notice": ct.notice
            }]
          }, xt && xt.label ? [
            r("span", Ne),
            r("span", {
              class: ["vxe-date-picker--date-label--extra", xt.important ? "is-important" : "", xt.className],
              style: xt.style
            }, i.toValueString(xt.label))
          ] : Ne)
        ], Ke = ct.label;
        if (Ke) {
          const yt = i.toValueString(Ke).split(",");
          Tt.push(r("span", {
            class: ["vxe-date-picker--date-festival", ct.important ? "is-important" : "", ct.className],
            style: ct.style
          }, [
            yt.length > 1 ? r("span", {
              class: ["vxe-date-picker--date-festival--overlap", `overlap--${yt.length}`]
            }, yt.map((sn) => r("span", sn.substring(0, 3)))) : r("span", {
              class: "vxe-date-picker--date-festival--label"
            }, yt[0].substring(0, 3))
          ]));
        }
        return Tt;
      }
      return Ne;
    }, lo = () => {
      const { multiple: q } = e, { datePanelType: Ne, datePanelValue: qe } = s, rt = re.value, Ct = Fe.value, ct = ye.value, xt = F.value, Tt = "yyyyMMdd";
      return [
        r("table", {
          class: `vxe-date-picker--date-${Ne}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          r("thead", [
            r("tr", Ct.map((Ke) => r("th", Ke.label)))
          ]),
          r("tbody", ct.map((Ke) => r("tr", Ke.map((yt) => r("td", {
            class: {
              "is--prev": yt.isPrev,
              "is--current": yt.isCurrent,
              "is--now": yt.isNow,
              "is--next": yt.isNext,
              "is--disabled": At(yt),
              "is--selected": q ? xt.some((sn) => i.isDateSame(sn, yt.date, Tt)) : i.isDateSame(rt, yt.date, Tt),
              "is--hover": i.isDateSame(qe, yt.date, Tt)
            },
            onClick: () => _t(yt),
            onMouseenter: () => mn(yt)
          }, En(yt, yt.label))))))
        ])
      ];
    }, Jn = () => {
      const { multiple: q } = e, { datePanelType: Ne, datePanelValue: qe } = s, rt = re.value, Ct = R.value, ct = Ee.value, xt = F.value, Tt = "yyyyMMdd";
      return [
        r("table", {
          class: `vxe-date-picker--date-${Ne}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          r("thead", [
            r("tr", Ct.map((Ke) => r("th", Ke.label)))
          ]),
          r("tbody", ct.map((Ke) => {
            const yt = q ? Ke.some((Gt) => xt.some((gn) => i.isDateSame(gn, Gt.date, Tt))) : Ke.some((Gt) => i.isDateSame(rt, Gt.date, Tt)), sn = Ke.some((Gt) => i.isDateSame(qe, Gt.date, Tt));
            return r("tr", Ke.map((Gt) => r("td", {
              class: {
                "is--prev": Gt.isPrev,
                "is--current": Gt.isCurrent,
                "is--now": Gt.isNow,
                "is--next": Gt.isNext,
                "is--disabled": At(Gt),
                "is--selected": yt,
                "is--hover": sn
              },
              // event
              onClick: () => _t(Gt),
              onMouseenter: () => mn(Gt)
            }, En(Gt, Gt.label))));
          }))
        ])
      ];
    }, Xo = () => {
      const { multiple: q } = e, { datePanelType: Ne, datePanelValue: qe } = s, rt = re.value, Ct = Z.value, ct = F.value, xt = "yyyyMM";
      return [
        r("table", {
          class: `vxe-date-picker--date-${Ne}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          r("tbody", Ct.map((Tt) => r("tr", Tt.map((Ke) => r("td", {
            class: {
              "is--prev": Ke.isPrev,
              "is--current": Ke.isCurrent,
              "is--now": Ke.isNow,
              "is--next": Ke.isNext,
              "is--disabled": At(Ke),
              "is--selected": q ? ct.some((yt) => i.isDateSame(yt, Ke.date, xt)) : i.isDateSame(rt, Ke.date, xt),
              "is--hover": i.isDateSame(qe, Ke.date, xt)
            },
            onClick: () => _t(Ke),
            onMouseenter: () => mn(Ke)
          }, En(Ke, Te(`vxe.input.date.months.m${Ke.month}`)))))))
        ])
      ];
    }, po = () => {
      const { multiple: q } = e, { datePanelType: Ne, datePanelValue: qe } = s, rt = re.value, Ct = _.value, ct = F.value, xt = "yyyyq";
      return [
        r("table", {
          class: `vxe-date-picker--date-${Ne}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          r("tbody", Ct.map((Tt) => r("tr", Tt.map((Ke) => r("td", {
            class: {
              "is--prev": Ke.isPrev,
              "is--current": Ke.isCurrent,
              "is--now": Ke.isNow,
              "is--next": Ke.isNext,
              "is--disabled": At(Ke),
              "is--selected": q ? ct.some((yt) => i.isDateSame(yt, Ke.date, xt)) : i.isDateSame(rt, Ke.date, xt),
              "is--hover": i.isDateSame(qe, Ke.date, xt)
            },
            onClick: () => _t(Ke),
            onMouseenter: () => mn(Ke)
          }, En(Ke, Te(`vxe.input.date.quarters.q${Ke.quarter}`)))))))
        ])
      ];
    }, sr = () => {
      const { multiple: q } = e, { datePanelType: Ne, datePanelValue: qe } = s, rt = re.value, Ct = k.value, ct = F.value, xt = "yyyy";
      return [
        r("table", {
          class: `vxe-date-picker--date-${Ne}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          r("tbody", Ct.map((Tt) => r("tr", Tt.map((Ke) => r("td", {
            class: {
              "is--prev": Ke.isPrev,
              "is--current": Ke.isCurrent,
              "is--now": Ke.isNow,
              "is--next": Ke.isNext,
              "is--disabled": At(Ke),
              "is--selected": q ? ct.some((yt) => i.isDateSame(yt, Ke.date, xt)) : i.isDateSame(rt, Ke.date, xt),
              "is--hover": i.isDateSame(qe, Ke.date, xt)
            },
            onClick: () => _t(Ke),
            onMouseenter: () => mn(Ke)
          }, En(Ke, Ke.year))))))
        ])
      ];
    }, Po = () => {
      const { datePanelType: q } = s;
      switch (q) {
        case "week":
          return Jn();
        case "month":
          return Xo();
        case "quarter":
          return po();
        case "year":
          return sr();
      }
      return lo();
    }, io = () => {
      const { multiple: q } = e, { datePanelType: Ne } = s, qe = G.value, rt = J.value, Ct = de.value;
      return [
        r("div", {
          class: "vxe-date-picker--date-picker-header"
        }, [
          r("div", {
            class: "vxe-date-picker--date-picker-type-wrapper"
          }, [
            Ne === "year" ? r("span", {
              class: "vxe-date-picker--date-picker-label"
            }, Ct) : r("span", {
              class: "vxe-date-picker--date-picker-btn",
              onClick: Bt
            }, Ct)
          ]),
          r("div", {
            class: "vxe-date-picker--date-picker-btn-wrapper"
          }, [
            r("span", {
              class: ["vxe-date-picker--date-picker-btn vxe-date-picker--date-picker-prev-btn", {
                "is--disabled": qe
              }],
              onClick: Wt
            }, [
              r("i", {
                class: "vxe-icon-caret-left"
              })
            ]),
            r("span", {
              class: "vxe-date-picker--date-picker-btn vxe-date-picker--date-picker-current-btn",
              onClick: Pt
            }, [
              r("i", {
                class: "vxe-icon-dot"
              })
            ]),
            r("span", {
              class: ["vxe-date-picker--date-picker-btn vxe-date-picker--date-picker-next-btn", {
                "is--disabled": rt
              }],
              onClick: jt
            }, [
              r("i", {
                class: "vxe-icon-caret-right"
              })
            ]),
            q && N.value ? r("span", {
              class: "vxe-date-picker--date-picker-btn vxe-date-picker--date-picker-confirm-btn"
            }, [
              r("button", {
                class: "vxe-date-picker--date-picker-confirm",
                type: "button",
                onClick: Qt
              }, Te("vxe.button.confirm"))
            ]) : null
          ])
        ]),
        r("div", {
          class: "vxe-date-picker--date-picker-body"
        }, Po())
      ];
    }, jn = () => {
      const { datetimePanelValue: q } = s, Ne = A.value, qe = xe.value, rt = Le.value, Ct = je.value;
      return [
        r("div", {
          class: "vxe-date-picker--time-picker-header"
        }, [
          r("span", {
            class: "vxe-date-picker--time-picker-title"
          }, Ne),
          r("button", {
            class: "vxe-date-picker--time-picker-confirm",
            type: "button",
            onClick: Qt
          }, Te("vxe.button.confirm"))
        ]),
        r("div", {
          ref: x,
          class: "vxe-date-picker--time-picker-body"
        }, [
          r("ul", {
            class: "vxe-date-picker--time-picker-hour-list"
          }, qe.map((ct, xt) => r("li", {
            key: xt,
            class: {
              "is--selected": q && q.getHours() === ct.value
            },
            onClick: (Tt) => cn(Tt, ct)
          }, ct.label))),
          r("ul", {
            class: "vxe-date-picker--time-picker-minute-list"
          }, rt.map((ct, xt) => r("li", {
            key: xt,
            class: {
              "is--selected": q && q.getMinutes() === ct.value
            },
            onClick: (Tt) => wn(Tt, ct)
          }, ct.label))),
          r("ul", {
            class: "vxe-date-picker--time-picker-second-list"
          }, Ct.map((ct, xt) => r("li", {
            key: xt,
            class: {
              "is--selected": q && q.getSeconds() === ct.value
            },
            onClick: (Tt) => Zt(Tt, ct)
          }, ct.label)))
        ])
      ];
    }, Sn = () => {
      const { type: q } = e, { inited: Ne, animatVisible: qe, visiblePanel: rt, panelPlacement: Ct, panelStyle: ct } = s, xt = d.value, Tt = I.value, Ke = E.value, yt = [];
      return Tt ? (q === "datetime" ? yt.push(r("div", {
        key: q,
        ref: b,
        class: "vxe-date-picker--panel-layout-wrapper"
      }, [
        r("div", {
          class: "vxe-date-picker--panel-left-wrapper"
        }, io()),
        r("div", {
          class: "vxe-date-picker--panel-right-wrapper"
        }, jn())
      ])) : q === "time" ? yt.push(r("div", {
        key: q,
        ref: b,
        class: "vxe-date-picker--panel-wrapper"
      }, jn())) : yt.push(r("div", {
        key: q || "default",
        ref: b,
        class: "vxe-date-picker--panel-wrapper"
      }, io())), r(ts, {
        to: "body",
        disabled: Ke ? !Ne : !0
      }, [
        r("div", {
          ref: D,
          class: ["vxe-table--ignore-clear vxe-date-picker--panel", `type--${q}`, {
            [`size--${xt}`]: xt,
            "is--transfer": Ke,
            "animat--leave": qe,
            "animat--enter": rt
          }],
          placement: Ct,
          style: ct
        }, yt)
      ])) : Me();
    }, yo = () => {
      const { prefixIcon: q } = e, Ne = n.prefix;
      return Ne || q ? r("div", {
        class: "vxe-date-picker--prefix",
        onClick: Y
      }, [
        r("div", {
          class: "vxe-date-picker--prefix-icon"
        }, Ne ? It(Ne({})) : [
          r("i", {
            class: q
          })
        ])
      ]) : null;
    }, tn = () => {
      const { suffixIcon: q } = e, { inputValue: Ne } = s, qe = n.suffix, rt = W.value, Ct = z.value;
      return r("div", {
        class: ["vxe-date-picker--suffix", {
          "is--clear": Ct && !rt && !(Ne === "" || i.eqNull(Ne))
        }]
      }, [
        Ct ? r("div", {
          class: "vxe-date-picker--clear-icon",
          onClick: He
        }, [
          r("i", {
            class: dt().INPUT_CLEAR
          })
        ]) : Me(),
        Qn(),
        qe || q ? r("div", {
          class: "vxe-date-picker--suffix-icon",
          onClick: se
        }, qe ? It(qe({})) : [
          r("i", {
            class: q
          })
        ]) : Me()
      ]);
    }, Qn = () => r("div", {
      class: "vxe-date-picker--control-icon",
      onClick: _o
    }, [
      r("i", {
        class: ["vxe-date-picker--date-picker-icon", dt().DATE_PICKER_DATE]
      })
    ]);
    h = {
      dispatchEvent(q, Ne, qe) {
        o(q, zt(qe, { $input: y }, Ne));
      },
      focus() {
        const q = g.value;
        return s.isActivated = !0, q.focus(), ae();
      },
      blur() {
        return g.value.blur(), s.isActivated = !1, ae();
      },
      select() {
        return g.value.select(), s.isActivated = !1, ae();
      },
      showPanel: Ao,
      hidePanel: he,
      updatePlacement: $o
    }, Object.assign(y, h), lt(() => e.modelValue, (q) => {
      s.inputValue = q, ze();
    }), lt(() => e.type, () => {
      Object.assign(s, {
        inputValue: e.modelValue,
        datetimePanelValue: null,
        datePanelValue: null,
        datePanelLabel: "",
        datePanelType: "day",
        selectMonth: null,
        currentDate: null
      }), Xe();
    }), lt(H, () => {
      I.value && (Se(s.datePanelValue), s.inputValue = e.multiple ? ee.value : s.datePanelLabel);
    }), ae(() => {
      it.on(y, "mousewheel", Ro), it.on(y, "mousedown", Wo), it.on(y, "keydown", zn), it.on(y, "blur", Bo);
    }), On(() => {
      it.off(y, "mousewheel"), it.off(y, "mousedown"), it.off(y, "keydown"), it.off(y, "blur");
    }), Xe();
    const ao = () => {
      const { className: q, type: Ne, align: qe, name: rt, autocomplete: Ct } = e, { inputValue: ct, visiblePanel: xt, isActivated: Tt } = s, Ke = d.value, yt = W.value;
      if (T.value)
        return r("div", {
          ref: f,
          class: ["vxe-date-picker--readonly", `type--${Ne}`, q]
        }, ct);
      const Gt = Ye.value, gn = fe.value, mo = ge.value, to = z.value, qn = yo(), Mn = tn();
      return r("div", {
        ref: f,
        class: ["vxe-date-picker", `type--${Ne}`, q, {
          [`size--${Ke}`]: Ke,
          [`is--${qe}`]: qe,
          "is--prefix": !!qn,
          "is--suffix": !!Mn,
          "is--visible": xt,
          "is--disabled": yt,
          "is--active": Tt,
          "show--clear": to && !yt && !(ct === "" || i.eqNull(ct))
        }]
      }, [
        qn || Me(),
        r("div", {
          class: "vxe-date-picker--wrapper"
        }, [
          r("input", {
            ref: g,
            class: "vxe-date-picker--inner",
            value: ct,
            name: rt,
            type: gn,
            placeholder: mo,
            readonly: Gt,
            disabled: yt,
            autocomplete: Ct,
            onKeydown: Mt,
            onKeyup: St,
            onWheel: gt,
            onClick: fo,
            onDatePicker: Ge,
            onChange: Ze,
            onFocus: pe,
            onBlur: B
          })
        ]),
        Mn || Me(),
        // 下拉面板
        Sn()
      ]);
    };
    return y.renderVN = ao, y;
  },
  render() {
    return this.renderVN();
  }
}), Eu = Object.assign({}, Br, {
  install(e) {
    e.component(Br.name, Br), e.component("VxeDateInput", Br);
  }
});
$t.component(Br.name, Br);
ue.component(Br);
const UP = Eu, Kr = tt({
  name: "VxeLoading",
  props: {
    modelValue: Boolean,
    icon: String,
    text: {
      type: String,
      default: () => me().loading.text
    }
  },
  setup(e, { slots: t }) {
    const n = Q(() => e.icon || dt().LOADING), o = Q(() => {
      const { text: l } = e;
      return i.isString(l) ? l : Te("vxe.loading.text");
    });
    return () => {
      const l = n.value, a = o.value;
      return r("div", {
        class: ["vxe-loading", {
          "is--visible": e.modelValue
        }]
      }, t.default ? [
        r("div", {
          class: "vxe-loading--wrapper"
        }, t.default({}))
      ] : [
        r("div", {
          class: "vxe-loading--chunk"
        }, [
          l ? r("i", {
            class: l
          }) : r("div", {
            class: "vxe-loading--spinner"
          }),
          a ? r("div", {
            class: "vxe-loading--text"
          }, `${a}`) : null
        ])
      ]);
    };
  }
}), Ai = Object.assign({}, Kr, {
  install(e) {
    e.component(Kr.name, Kr);
  }
});
$t.component(Kr.name, Kr);
ue.component(Kr);
const KP = Ai, hs = [], Es = tt({
  name: "VxeDrawer",
  props: {
    modelValue: Boolean,
    id: String,
    title: String,
    loading: { type: Boolean, default: null },
    className: String,
    position: {
      type: [String, Object],
      default: () => me().drawer.position
    },
    lockView: { type: Boolean, default: () => me().drawer.lockView },
    lockScroll: Boolean,
    mask: { type: Boolean, default: () => me().drawer.mask },
    maskClosable: { type: Boolean, default: () => me().drawer.maskClosable },
    escClosable: { type: Boolean, default: () => me().drawer.escClosable },
    showHeader: { type: Boolean, default: () => me().drawer.showHeader },
    showFooter: { type: Boolean, default: () => me().drawer.showFooter },
    showClose: { type: Boolean, default: () => me().drawer.showClose },
    content: [Number, String],
    showCancelButton: { type: Boolean, default: null },
    cancelButtonText: { type: String, default: () => me().drawer.cancelButtonText },
    showConfirmButton: { type: Boolean, default: () => me().drawer.showConfirmButton },
    confirmButtonText: { type: String, default: () => me().drawer.confirmButtonText },
    destroyOnClose: { type: Boolean, default: () => me().drawer.destroyOnClose },
    showTitleOverflow: { type: Boolean, default: () => me().drawer.showTitleOverflow },
    width: [Number, String],
    height: [Number, String],
    zIndex: Number,
    transfer: { type: Boolean, default: () => me().drawer.transfer },
    padding: { type: Boolean, default: () => me().drawer.padding },
    size: { type: String, default: () => me().drawer.size || me().size },
    beforeHideMethod: { type: Function, default: () => me().drawer.beforeHideMethod },
    slots: Number
  },
  emits: [
    "update:modelValue",
    "show",
    "hide",
    "before-hide",
    "close",
    "confirm",
    "cancel"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = i.uniqueId(), { computeSize: a } = Ln(e), c = Ie(), p = Ie(), d = Ie(), s = Ie(), f = Ot({
      inited: !1,
      visible: !1,
      contentVisible: !1,
      drawerZIndex: 0,
      firstOpen: !0
    }), g = {
      refElem: c
    }, D = {}, b = {
      xID: l,
      props: e,
      context: t,
      reactData: f,
      getRefMaps: () => g,
      getComputeMaps: () => D
    }, x = () => p.value, S = () => {
      const { width: J, height: A } = e, M = x();
      return M.style.width = `${J ? isNaN(J) ? J : `${J}px` : ""}`, M.style.height = `${A ? isNaN(A) ? A : `${A}px` : ""}`, ae();
    }, y = () => {
      const { zIndex: J } = e, { drawerZIndex: A } = f;
      J ? f.drawerZIndex = J : A < ss() && (f.drawerZIndex = Cr());
    }, h = () => ae().then(() => {
    }), O = (J) => {
      const { beforeHideMethod: A } = e, { visible: M } = f, H = { type: J };
      return M && Promise.resolve(A ? A(H) : null).then((ne) => {
        i.isError(ne) || (f.contentVisible = !1, i.remove(hs, (de) => de === b), I.dispatchEvent("before-hide", H, null), setTimeout(() => {
          f.visible = !1, o("update:modelValue", !1), I.dispatchEvent("hide", H, null);
        }, 200));
      }).catch((ne) => ne), ae();
    }, E = (J) => {
      const A = "close";
      I.dispatchEvent(A, { type: A }, J), O(A);
    }, T = (J) => {
      const A = "confirm";
      I.dispatchEvent(A, { type: A }, J), O(A);
    }, W = (J) => {
      const A = "cancel";
      I.dispatchEvent(A, { type: A }, J), O(A);
    }, $ = () => {
      const { showFooter: J } = e, { inited: A, visible: M } = f;
      return A || (f.inited = !0), M || (S(), f.visible = !0, f.contentVisible = !1, y(), hs.push(b), setTimeout(() => {
        f.contentVisible = !0, ae(() => {
          if (J) {
            const de = d.value, ve = s.value, Oe = de || ve;
            Oe && Oe.focus();
          }
          const ne = { type: "" };
          o("update:modelValue", !0), I.dispatchEvent("show", ne, null);
        });
      }, 10), ae(() => {
        const { firstOpen: H } = f;
        H && h().then(() => {
          setTimeout(() => h(), 20);
        }), H && (f.firstOpen = !1);
      })), ae();
    }, I = {
      dispatchEvent(J, A, M) {
        o(J, zt(M, { $drawer: b }, A));
      },
      open: $,
      close() {
        return O("close");
      },
      getBox: x
    }, z = (J) => {
      const A = c.value;
      e.maskClosable && J.target === A && O("mask");
    }, te = (J) => {
      if (it.hasKey(J, Vt.ESCAPE)) {
        const M = i.max(hs, (H) => H.reactData.drawerZIndex);
        M && setTimeout(() => {
          M === b && M.props.escClosable && O("exit");
        }, 10);
      }
    }, Ce = () => {
      const { drawerZIndex: J } = f;
      hs.some((A) => A.reactData.visible && A.reactData.drawerZIndex > J) && y();
    };
    Object.assign(b, I, {});
    const F = () => {
      const { slots: J = {}, showClose: A, title: M } = e, H = n.title || J.title, ne = n.corner || J.corner, de = [
        r("div", {
          class: "vxe-drawer--header-title"
        }, H ? It(H({ $drawer: b })) : M ? Vn(M) : Te("vxe.alert.title"))
      ], ve = [];
      return ne && ve.push(r("span", {
        class: "vxe-drawer--corner-wrapper"
      }, It(ne({ $drawer: b })))), A && ve.push(r("i", {
        class: ["vxe-drawer--close-btn", "trigger--btn", dt().MODAL_CLOSE],
        title: Te("vxe.drawer.close"),
        onClick: E
      })), de.push(r("div", {
        class: "vxe-drawer--header-right"
      }, ve)), de;
    }, j = () => {
      const { slots: J = {}, showTitleOverflow: A } = e, M = n.header || J.header, H = [];
      return e.showHeader && H.push(r("div", {
        class: ["vxe-drawer--header", {
          "is--ellipsis": A
        }]
      }, M ? !f.inited || e.destroyOnClose && !f.visible ? [] : It(M({ $drawer: b })) : F())), H;
    }, ee = () => {
      const { slots: J = {}, content: A } = e, M = n.default || J.default;
      return [
        r("div", {
          class: "vxe-drawer--body"
        }, [
          r("div", {
            class: "vxe-drawer--content"
          }, M ? !f.inited || e.destroyOnClose && !f.visible ? [] : It(M({ $drawer: b })) : Vn(A)),
          r(Ai, {
            class: "vxe-drawer--loading",
            modelValue: e.loading
          })
        ])
      ];
    }, oe = () => {
      const { showCancelButton: J, showConfirmButton: A } = e, M = [];
      return J && M.push(r($n, {
        key: 1,
        ref: s,
        content: e.cancelButtonText || Te("vxe.button.cancel"),
        onClick: W
      })), A && M.push(r($n, {
        key: 2,
        ref: d,
        status: "primary",
        content: e.confirmButtonText || Te("vxe.button.confirm"),
        onClick: T
      })), M;
    }, re = () => {
      const { slots: J = {} } = e, A = n.footer || J.footer, M = [];
      return e.showFooter && M.push(r("div", {
        class: "vxe-drawer--footer"
      }, A ? !f.inited || e.destroyOnClose && !f.visible ? [] : It(A({ $drawer: b })) : oe())), M;
    }, G = () => {
      const { className: J, position: A, loading: M, lockScroll: H, padding: ne, lockView: de, mask: ve } = e, { inited: Oe, contentVisible: Fe, visible: R } = f, k = a.value;
      return r(ts, {
        to: "body",
        disabled: e.transfer ? !Oe : !0
      }, [
        r("div", {
          ref: c,
          class: ["vxe-drawer--wrapper", `pos--${A}`, J || "", {
            [`size--${k}`]: k,
            "is--padding": ne,
            "lock--scroll": H,
            "lock--view": de,
            "is--mask": ve,
            "is--visible": Fe,
            "is--active": R,
            "is--loading": M
          }],
          style: {
            zIndex: f.drawerZIndex
          },
          onClick: z
        }, [
          r("div", {
            ref: p,
            class: "vxe-drawer--box",
            onMousedown: Ce
          }, j().concat(ee(), re()))
        ])
      ]);
    };
    return b.renderVN = G, lt(() => e.width, S), lt(() => e.height, S), lt(() => e.modelValue, (J) => {
      J ? $() : O("model");
    }), yn(() => {
      ae(() => {
        e.modelValue && $(), S();
      }), e.escClosable && it.on(b, "keydown", te);
    }), On(() => {
      it.off(b, "keydown");
    }), b;
  },
  render() {
    return this.renderVN();
  }
});
function YP(e) {
  return Ev(), new Promise((t) => {
    if (e && e.id && hs.some((n) => n.props.id === e.id))
      t("exist");
    else {
      const n = e.onHide, o = Object.assign(e, {
        key: i.uniqueId(),
        modelValue: !0,
        onHide(l) {
          const a = ys.drawers;
          n && n(l), ys.drawers = a.filter((c) => c.key !== o.key), t(l.type);
        }
      });
      ys.drawers.push(o);
    }
  });
}
function $v(e) {
  return i.find(hs, (t) => t.props.id === e);
}
function XP(e) {
  const t = e ? [$v(e)] : hs, n = [];
  return t.forEach((o) => {
    o && n.push(o.close());
  }), Promise.all(n);
}
const Su = {
  get: $v,
  close: XP,
  open: YP
}, Du = Object.assign(Es, {
  install: function(e) {
    e.component(Es.name, Es);
  }
});
$t.component(Es.name, Es);
ue.component(Es);
ue.drawer = Su;
const ZP = Du;
class Rv {
  constructor(t, n) {
    Object.assign(this, {
      id: i.uniqueId("item_"),
      title: n.title,
      field: n.field,
      span: n.span,
      align: n.align,
      titleBold: n.titleBold,
      titleAlign: n.titleAlign,
      titleWidth: n.titleWidth,
      titleColon: n.titleColon,
      titleAsterisk: n.titleAsterisk,
      titlePrefix: n.titlePrefix,
      titleSuffix: n.titleSuffix,
      titleOverflow: n.titleOverflow,
      showTitle: n.showTitle,
      resetValue: n.resetValue,
      visibleMethod: n.visibleMethod,
      visible: n.visible,
      folding: n.folding,
      collapseNode: n.collapseNode,
      className: n.className,
      contentClassName: n.contentClassName,
      contentStyle: n.contentStyle,
      titleClassName: n.titleClassName,
      titleStyle: n.titleStyle,
      itemRender: n.itemRender,
      rules: n.rules,
      // 渲染属性
      showError: !1,
      errRule: null,
      slots: n.slots,
      children: []
    });
  }
  update(t, n) {
    this[t] = n;
  }
}
function JP(e) {
  return e instanceof Rv;
}
function Ou(e, t) {
  return JP(t) ? t : new Rv(e, t);
}
function hp(e, t) {
  return t ? i.isString(t) ? e.getItemByField(t) : t : null;
}
function QP(e, t) {
  const { reactData: n } = e, { collapseAll: o } = n, { folding: l, visible: a } = t;
  return a === !1 || l && o;
}
function Tu(e, t) {
  let { visibleMethod: n, itemRender: o, visible: l, field: a } = t;
  if (l === !1)
    return l;
  const c = _l(o) ? on.get(o.name) : null, p = c ? c.formItemVisibleMethod || c.itemVisibleMethod : null;
  if (!n && p && (n = p), !n)
    return !0;
  const { data: d } = e.props;
  return n({ data: d, field: a, property: a, item: t, $form: e, $grid: e.xegrid });
}
function Pv(e, t) {
  Object.keys(e).forEach((n) => {
    lt(() => e[n], (o) => {
      t.update(n, o);
    });
  });
}
function Nv(e, t, n, o) {
  const { reactData: l } = e, { staticItems: a } = l, c = t.parentNode, p = o ? o.formItem : null, d = p ? p.children : a;
  c && (d.splice(i.arrayIndexOf(c.children, t), 0, n), l.staticItems = a.slice(0));
}
function Fv(e, t) {
  const { reactData: n } = e, { staticItems: o } = n, l = i.findIndexOf(o, (a) => a.id === t.id);
  l > -1 && o.splice(l, 1), n.staticItems = o.slice(0);
}
const br = tt({
  name: "VxeTooltip",
  props: {
    modelValue: Boolean,
    size: { type: String, default: () => me().tooltip.size || me().size },
    trigger: { type: String, default: () => me().tooltip.trigger || "hover" },
    theme: { type: String, default: () => me().tooltip.theme || "dark" },
    content: { type: [String, Number], default: null },
    useHTML: Boolean,
    zIndex: [String, Number],
    popupClassName: [String, Function],
    isArrow: { type: Boolean, default: !0 },
    enterable: Boolean,
    enterDelay: { type: Number, default: () => me().tooltip.enterDelay },
    leaveDelay: { type: Number, default: () => me().tooltip.leaveDelay }
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = i.uniqueId(), { computeSize: a } = Ln(e), c = Ot({
      target: null,
      isUpdate: !1,
      visible: !1,
      tipContent: "",
      tipActive: !1,
      tipTarget: null,
      tipZindex: 0,
      tipStore: {
        style: {},
        placement: "",
        arrowStyle: {}
      }
    }), p = Ie(), d = {
      refElem: p
    }, s = {
      xID: l,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => d
    };
    let f = {};
    const g = () => {
      const { tipTarget: I, tipStore: z } = c;
      if (I) {
        const { scrollTop: te, scrollLeft: Ce, visibleWidth: N } = vs(), { top: F, left: j } = Ul(I), ee = p.value, oe = 6, re = ee.offsetHeight, G = ee.offsetWidth;
        let J = j, A = F - re - oe;
        J = Math.max(oe, j + Math.floor((I.offsetWidth - G) / 2)), J + G + oe > Ce + N && (J = Ce + N - G - oe), F - re < te + oe && (z.placement = "bottom", A = F + I.offsetHeight + oe), z.style.top = `${A}px`, z.style.left = `${J}px`, z.arrowStyle.left = `${j - J + I.offsetWidth / 2}px`;
      }
    }, D = (I) => {
      I !== c.visible && (c.visible = I, c.isUpdate = !0, o("update:modelValue", I));
    }, b = () => {
      c.tipZindex < ss() && (c.tipZindex = Cr());
    }, x = () => {
      c.visible ? f.close() : f.open();
    }, S = () => {
      f.open();
    }, y = () => {
      const { trigger: I, enterable: z, leaveDelay: te } = e;
      c.tipActive = !1, z && I === "hover" ? setTimeout(() => {
        c.tipActive || f.close();
      }, te) : f.close();
    }, h = () => {
      c.tipActive = !0;
    }, O = () => {
      const { trigger: I, enterable: z, leaveDelay: te } = e;
      c.tipActive = !1, z && I === "hover" && setTimeout(() => {
        c.tipActive || f.close();
      }, te);
    }, E = () => {
      const { tipStore: I } = c, z = p.value;
      return z && (z.parentNode || document.body.appendChild(z)), D(!0), b(), I.placement = "top", I.style = { width: "auto", left: 0, top: 0, zIndex: e.zIndex || c.tipZindex }, I.arrowStyle = { left: "50%" }, f.updatePlacement();
    }, T = i.debounce(() => {
      c.tipActive && E();
    }, e.enterDelay, { leading: !1, trailing: !0 });
    f = {
      dispatchEvent(I, z, te) {
        o(I, zt(te, { $tooltip: s }, z));
      },
      open(I, z) {
        return f.toVisible(I || c.target, z);
      },
      close() {
        return c.tipTarget = null, c.tipActive = !1, Object.assign(c.tipStore, {
          style: {},
          placement: "",
          arrowStyle: null
        }), D(!1), ae();
      },
      toVisible(I, z) {
        if (I) {
          const { trigger: te, enterDelay: Ce } = e;
          if (c.tipActive = !0, c.tipTarget = I, z && (c.tipContent = z), Ce && te === "hover")
            T();
          else
            return E();
        }
        return ae();
      },
      updatePlacement() {
        return ae().then(() => {
          const { tipTarget: I } = c, z = p.value;
          if (I && z)
            return g(), ae().then(g);
        });
      },
      isActived() {
        return c.tipActive;
      },
      setActived(I) {
        c.tipActive = !!I;
      }
    }, Object.assign(s, f), lt(() => e.content, () => {
      c.tipContent = e.content;
    }), lt(() => e.modelValue, () => {
      c.isUpdate || (e.modelValue ? f.open() : f.close()), c.isUpdate = !1;
    }), yn(() => {
      ae(() => {
        const { trigger: I, content: z, modelValue: te } = e, Ce = p.value;
        if (Ce) {
          const N = Ce.parentNode;
          if (N) {
            c.tipContent = z, c.tipZindex = Cr(), i.arrayEach(Ce.children, (j, ee) => {
              ee > 1 && (N.insertBefore(j, Ce), c.target || (c.target = j));
            }), N.removeChild(Ce);
            const { target: F } = c;
            F && (I === "hover" ? (F.onmouseenter = S, F.onmouseleave = y) : I === "click" && (F.onclick = x)), te && f.open();
          }
        }
      });
    }), Ci(() => {
      const { trigger: I } = e, { target: z } = c, te = p.value;
      if (z && (I === "hover" ? (z.onmouseenter = null, z.onmouseleave = null) : I === "click" && (z.onclick = null)), te) {
        const Ce = te.parentNode;
        Ce && Ce.removeChild(te);
      }
    });
    const W = () => {
      const { useHTML: I } = e, { tipContent: z } = c, te = n.content;
      return te ? r("div", {
        key: 1,
        class: "vxe-table--tooltip-content"
      }, It(te({}))) : I ? r("div", {
        key: 2,
        class: "vxe-table--tooltip-content",
        innerHTML: z
      }) : r("div", {
        key: 3,
        class: "vxe-table--tooltip-content"
      }, `${z}`);
    }, $ = () => {
      const { popupClassName: I, theme: z, isArrow: te, enterable: Ce } = e, { tipActive: N, visible: F, tipStore: j } = c, ee = n.default, oe = a.value;
      let re;
      return Ce && (re = {
        onMouseenter: h,
        onMouseleave: O
      }), r("div", Object.assign({ ref: p, class: ["vxe-table--tooltip-wrapper", `theme--${z}`, I ? i.isFunction(I) ? I({ $tooltip: s }) : I : "", {
        [`size--${oe}`]: oe,
        [`placement--${j.placement}`]: j.placement,
        "is--enterable": Ce,
        "is--visible": F,
        "is--arrow": te,
        "is--active": N
      }], style: j.style }, re), [
        W(),
        r("div", {
          class: "vxe-table--tooltip-arrow",
          style: j.arrowStyle
        }),
        ...ee ? It(ee({})) : []
      ]);
    };
    return s.renderVN = $, s;
  },
  render() {
    return this.renderVN();
  }
}), Yr = tt({
  name: "VxeIcon",
  props: {
    name: String,
    className: String,
    roll: Boolean,
    status: String
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const n = (o) => {
      t("click", zt(o, {}));
    };
    return () => {
      const { name: o, roll: l, status: a, className: c } = e;
      return r("i", {
        class: [`vxe-icon-${o}`, l ? "roll" : "", a ? [`theme--${a}`] : "", `${c || ""}`],
        onClick: n
      });
    };
  }
});
function bp(e) {
  return r("span", {
    class: "vxe-form--item-title-prefix"
  }, [
    r(Yr, {
      class: e.icon || dt().FORM_PREFIX,
      status: e.iconStatus
    })
  ]);
}
function xp(e) {
  return r("span", {
    class: "vxe-form--item-title-suffix"
  }, [
    r(Yr, {
      class: e.icon || dt().FORM_SUFFIX,
      status: e.iconStatus
    })
  ]);
}
function Lv(e, t) {
  const { data: n, readonly: o, disabled: l } = e.props, { computeTooltipOpts: a } = e.getComputeMaps(), { slots: c, field: p, itemRender: d, titlePrefix: s, titleSuffix: f } = t, g = a.value, D = _l(d) ? on.get(d.name) : null, b = { data: n, readonly: o, disabled: l, field: p, property: p, item: t, $form: e, $grid: e.xegrid }, x = c ? c.title : null, S = [], y = [];
  s && y.push(s.content || s.message ? r(br, Object.assign(Object.assign(Object.assign({}, g), s), { content: Vn(s.content || s.message) }), {
    default: () => bp(s)
  }) : bp(s));
  const h = D ? D.renderFormItemTitle || D.renderItemTitle : null;
  y.push(r("span", {
    class: "vxe-form--item-title-label"
  }, x ? e.callSlot(x, b) : h ? It(h(d, b)) : Vn(t.title))), S.push(r("div", {
    class: "vxe-form--item-title-content"
  }, y));
  const O = [];
  return f && O.push(f.content || f.message ? r(br, Object.assign(Object.assign(Object.assign({}, g), f), { content: Vn(f.content || f.message) }), {
    default: () => xp(f)
  }) : xp(f)), S.push(r("div", {
    class: "vxe-form--item-title-postfix"
  }, O)), S;
}
const Av = tt({
  name: "VxeFormConfigItem",
  props: {
    itemConfig: Object
  },
  setup(e) {
    const t = ut("$xeForm", {}), n = { itemConfig: e.itemConfig };
    Xt("xeFormItemInfo", n);
    const l = {
      renderVN: () => {
        const { reactData: a } = t, { data: c, rules: p, readonly: d, disabled: s, span: f, align: g, titleBold: D, titleAlign: b, titleWidth: x, titleColon: S, titleAsterisk: y, titleOverflow: h, vertical: O } = t.props, { computeValidOpts: E } = t.getComputeMaps(), T = e.itemConfig, { collapseAll: W } = a, $ = E.value, { slots: I, title: z, visible: te, folding: Ce, field: N, collapseNode: F, itemRender: j, showError: ee, errRule: oe, className: re, titleOverflow: G, vertical: J, children: A, showTitle: M, contentClassName: H, contentStyle: ne, titleClassName: de, titleStyle: ve } = T, Oe = _l(j) ? on.get(j.name) : null, Fe = Oe ? Oe.formItemClassName || Oe.itemClassName : "", R = Oe ? Oe.formItemStyle || Oe.itemStyle : null, k = Oe ? Oe.formItemContentClassName || Oe.itemContentClassName : "", U = Oe ? Oe.formItemContentStyle || Oe.itemContentStyle : null, _ = Oe ? Oe.formItemTitleClassName || Oe.itemTitleClassName : "", K = Oe ? Oe.formItemTitleStyle || Oe.itemTitleStyle : null, Z = I ? I.default : null, ke = I ? I.title : null, ye = T.span || f, Ee = T.align || g, xe = i.eqNull(T.titleBold) ? D : T.titleBold, Le = i.eqNull(T.titleAlign) ? b : T.titleAlign, je = i.eqNull(T.titleWidth) ? x : T.titleWidth, Ye = i.eqNull(T.titleColon) ? S : T.titleColon, fe = i.eqNull(T.titleAsterisk) ? y : T.titleAsterisk, ge = i.isUndefined(G) || i.isNull(G) ? h : G, $e = i.isUndefined(J) || i.isNull(J) ? O : J, Ve = ge === "ellipsis", ce = ge === "title", We = ge === !0 || ge === "tooltip", Ge = ce || We || Ve, Ze = { data: c, disabled: s, readonly: d, field: N, property: N, item: T, $form: t, $grid: t.xegrid };
        if (te === !1)
          return Me();
        let pe = !1;
        if (!d && p) {
          const se = p[N];
          se && (pe = se.some((Se) => Se.required));
        }
        if (A && A.length > 0) {
          const se = A.map((Se, ze) => r(Av, {
            key: ze,
            itemConfig: Se
          }));
          return se.length ? r("div", {
            class: ["vxe-form--gather vxe-form--item-row", T.id, ye ? `vxe-form--item-col_${ye} is--span` : "", re ? i.isFunction(re) ? re(Ze) : re : ""]
          }, se) : Me();
        }
        let le = [];
        const he = Oe ? Oe.renderFormItemContent || Oe.renderItemContent : null;
        Z ? le = t.callSlot(Z, Ze) : he ? le = It(he(j, Ze)) : N && (le = [i.toValueString(i.get(c, N))]), F && le.push(r("div", {
          class: "vxe-form--item-trigger-node",
          onClick: t.toggleCollapseEvent
        }, [
          r("span", {
            class: "vxe-form--item-trigger-text"
          }, Te(W ? "vxe.form.unfolding" : "vxe.form.folding")),
          r("i", {
            class: ["vxe-form--item-trigger-icon", W ? dt().FORM_FOLDING : dt().FORM_UNFOLDING]
          })
        ])), oe && $.showMessage && le.push(r("div", {
          class: "vxe-form--item-valid",
          style: oe.maxWidth ? {
            width: `${oe.maxWidth}px`
          } : null
        }, oe.content));
        const He = We ? {
          onMouseenter(se) {
            t.triggerTitleTipEvent(se, Ze);
          },
          onMouseleave: t.handleTitleTipLeaveEvent
        } : {};
        return r("div", {
          class: [
            "vxe-form--item",
            T.id,
            ye ? `vxe-form--item-col_${ye} is--span` : "",
            re ? i.isFunction(re) ? re(Ze) : re : "",
            Fe ? i.isFunction(Fe) ? Fe(Ze) : Fe : "",
            {
              "is--title": z,
              "is--colon": Ye,
              "is--bold": xe,
              "is--vertical": $e,
              "is--asterisk": fe,
              "is--required": pe,
              "is--hidden": Ce && W,
              "is--active": Tu(t, T),
              "is--error": ee
            }
          ],
          style: i.isFunction(R) ? R(Ze) : R
        }, [
          r("div", {
            class: "vxe-form--item-inner"
          }, [
            M !== !1 && (z || ke) ? r("div", Object.assign({ class: [
              "vxe-form--item-title",
              Le ? `align--${Le}` : "",
              Ge ? "is--ellipsis" : "",
              _ ? i.isFunction(_) ? _(Ze) : _ : "",
              de ? i.isFunction(de) ? de(Ze) : de : ""
            ], style: Object.assign({}, i.isFunction(K) ? K(Ze) : K, i.isFunction(ve) ? ve(Ze) : ve, je ? {
              width: isNaN(je) ? je : `${je}px`
            } : null), title: ce ? Vn(z) : null }, He), Lv(t, T)) : null,
            r("div", {
              class: [
                "vxe-form--item-content",
                Ee ? `align--${Ee}` : "",
                k ? i.isFunction(k) ? k(Ze) : k : "",
                H ? i.isFunction(H) ? H(Ze) : H : ""
              ],
              style: Object.assign({}, i.isFunction(U) ? U(Ze) : U, i.isFunction(ne) ? ne(Ze) : ne)
            }, le)
          ])
        ]);
      }
    };
    return Xt("$xeFormGather", null), l;
  },
  render() {
    return this.renderVN();
  }
});
let ui = class {
  constructor(t) {
    Object.assign(this, {
      $options: t,
      required: t.required,
      min: t.min,
      max: t.min,
      type: t.type,
      pattern: t.pattern,
      validator: t.validator,
      trigger: t.trigger,
      maxWidth: t.maxWidth
    });
  }
  get content() {
    return Vn(this.$options.content || this.$options.message);
  }
  get message() {
    return this.content;
  }
};
const yp = (e, t) => {
  const { type: n, min: o, max: l, pattern: a } = e, c = n === "number", p = c ? i.toNumber(t) : i.getSize(t);
  return !!(c && isNaN(t) || !i.eqNull(o) && p < i.toNumber(o) || !i.eqNull(l) && p > i.toNumber(l) || a && !(i.isRegExp(a) ? a : new RegExp(a)).test(t));
};
function eN(e, t) {
  return i.isArray(e) && (t = []), t;
}
const fn = tt({
  name: "VxeForm",
  props: {
    collapseStatus: { type: Boolean, default: !0 },
    loading: Boolean,
    data: Object,
    size: {
      type: String,
      default: () => me().form.size || me().size
    },
    span: {
      type: [String, Number],
      default: () => me().form.span
    },
    align: {
      type: String,
      default: () => me().form.align
    },
    titleBold: {
      type: Boolean,
      default: () => me().form.titleBold
    },
    titleAlign: {
      type: String,
      default: () => me().form.titleAlign
    },
    titleWidth: {
      type: [String, Number],
      default: () => me().form.titleWidth
    },
    titleColon: {
      type: Boolean,
      default: () => me().form.titleColon
    },
    titleAsterisk: {
      type: Boolean,
      default: () => me().form.titleAsterisk
    },
    titleOverflow: {
      type: [Boolean, String],
      default: () => me().form.titleOverflow
    },
    vertical: {
      type: Boolean,
      default: () => me().form.vertical
    },
    className: [String, Function],
    readonly: Boolean,
    disabled: Boolean,
    items: Array,
    rules: Object,
    preventSubmit: {
      type: Boolean,
      default: () => me().form.preventSubmit
    },
    validConfig: Object,
    tooltipConfig: Object,
    customLayout: {
      type: Boolean,
      default: () => me().form.customLayout
    }
  },
  emits: [
    "update:collapseStatus",
    "collapse",
    "toggle-collapse",
    "submit",
    "submit-invalid",
    "reset"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = i.uniqueId(), { computeSize: a } = Ln(e), c = Ot({
      collapseAll: e.collapseStatus,
      staticItems: [],
      formItems: []
    }), p = Ot({
      tooltipTimeout: null,
      tooltipStore: {
        item: null,
        visible: !1
      }
    });
    Xt("xeFormItemInfo", null);
    const d = ut("$xeGrid", null), s = Ie(), f = Ie();
    let g = {};
    const D = Q(() => Object.assign({}, me().form.validConfig, e.validConfig)), b = Q(() => Object.assign({}, me().tooltip, me().form.tooltipConfig, e.tooltipConfig)), x = {
      refElem: s
    }, S = {
      computeSize: a,
      computeValidOpts: D,
      computeTooltipOpts: b
    }, y = {
      xID: l,
      props: e,
      context: t,
      reactData: c,
      xegrid: d,
      getRefMaps: () => x,
      getComputeMaps: () => S
    }, h = (R, k) => R && (i.isString(R) && (R = n[R] || null), i.isFunction(R)) ? It(R(k)) : [], O = (R) => (R.length && process.env.NODE_ENV === "development" && R.forEach((k) => {
      k.slots && i.each(k.slots, (U) => {
        i.isFunction(U) || n[U] || tl("vxe.error.notSlot", [U]);
      });
    }), c.staticItems = i.mapTree(R, (k) => Ou(y, k), { children: "children" }), ae()), E = () => {
      const R = [];
      return i.eachTree(c.formItems, (k) => {
        R.push(k);
      }, { children: "children" }), R;
    }, T = (R) => {
      const k = i.findTree(c.formItems, (U) => U.field === R, { children: "children" });
      return k ? k.item : null;
    }, W = () => c.collapseAll, $ = () => {
      const R = !W();
      return c.collapseAll = R, o("update:collapseStatus", R), ae();
    }, I = (R) => {
      $();
      const k = W();
      g.dispatchEvent("toggle-collapse", { status: k, collapse: k, data: e.data }, R), g.dispatchEvent("collapse", { status: k, collapse: k, data: e.data }, R);
    }, z = (R) => {
      if (R) {
        let k = R;
        i.isArray(R) || (k = [R]), k.forEach((U) => {
          if (U) {
            const _ = hp(y, U);
            _ && (_.showError = !1);
          }
        });
      } else
        E().forEach((k) => {
          k.showError = !1;
        });
      return ae();
    }, te = () => {
      const { data: R } = e, k = E();
      return R && k.forEach((U) => {
        const { field: _, resetValue: K, itemRender: Z } = U;
        if (_l(Z)) {
          const ke = on.get(Z.name), ye = ke ? ke.formItemResetMethod || ke.itemResetMethod : null;
          ke && ye ? ye({ data: R, field: _, property: _, item: U, $form: y, $grid: y.xegrid }) : _ && i.set(R, _, K === null ? eN(i.get(R, _), void 0) : i.clone(K, !0));
        }
      }), z();
    }, Ce = (R) => {
      R.preventDefault(), te(), g.dispatchEvent("reset", { data: e.data }, R);
    }, N = (R) => {
      const k = s.value;
      if (k)
        for (let U = 0; U < R.length; U++) {
          const _ = R[U], K = T(_);
          if (K && _l(K.itemRender)) {
            const { itemRender: Z } = K, ke = on.get(Z.name);
            U || TP(k.querySelector(`.${K.id}`));
            let ye = null;
            const Ee = ke ? ke.formItemAutoFocus : null;
            if (i.isFunction(Ee) ? ye = Ee({ $form: y, $grid: d, item: K, data: e.data, field: _ }) : Ee && (ye = k.querySelector(`.${K.id} ${Ee}`)), ye) {
              ye.focus();
              break;
            }
          }
        }
    }, F = (R, k, U) => {
      const { data: _, rules: K } = e, Z = {};
      return i.isArray(k) || (k = [k]), Promise.all(k.map((ke) => {
        const ye = [], Ee = [];
        if (ke && K) {
          const xe = i.get(K, ke);
          if (xe) {
            const Le = i.isUndefined(U) ? i.get(_, ke) : U;
            xe.forEach((je) => {
              const { type: Ye, trigger: fe, required: ge, validator: $e } = je;
              if (R === "all" || !fe || R === fe)
                if ($e) {
                  const Ve = {
                    itemValue: Le,
                    rule: je,
                    rules: xe,
                    data: _,
                    field: ke,
                    property: ke,
                    $form: y
                  };
                  let ce;
                  if (i.isString($e)) {
                    const We = ka.get($e);
                    if (We) {
                      const Ge = We.formItemValidatorMethod || We.itemValidatorMethod;
                      Ge ? ce = Ge(Ve) : process.env.NODE_ENV === "development" && $a("vxe.error.notValidators", [$e]);
                    } else
                      process.env.NODE_ENV === "development" && tl("vxe.error.notValidators", [$e]);
                  } else
                    ce = $e(Ve);
                  ce && (i.isError(ce) ? ye.push(new ui({ type: "custom", trigger: fe, content: ce.message, rule: new ui(je) })) : ce.catch && Ee.push(ce.catch((We) => {
                    ye.push(new ui({ type: "custom", trigger: fe, content: We ? We.message : je.content || je.message, rule: new ui(je) }));
                  })));
                } else {
                  const Ve = Ye === "array", ce = i.isArray(Le);
                  let We = !0;
                  Ve || ce ? We = !ce || !Le.length : i.isString(Le) ? We = fp(Le.trim()) : We = fp(Le), (ge ? We || yp(je, Le) : !We && yp(je, Le)) && ye.push(new ui(je));
                }
            });
          }
        }
        return Promise.all(Ee).then(() => {
          ye.length && (Z[ke] = ye.map((xe) => ({
            $form: y,
            rule: xe,
            data: _,
            field: ke,
            property: ke
          })));
        });
      })).then(() => {
        if (!i.isEmpty(Z))
          return Promise.reject(Z);
      });
    };
    let j;
    const ee = (R, k, U) => {
      const { data: _, rules: K } = e, Z = D.value, ke = {}, ye = [], Ee = [];
      return clearTimeout(j), _ && K ? (R.forEach((xe) => {
        const { field: Le } = xe;
        Le && !QP(y, xe) && Tu(y, xe) && Ee.push(F(k || "all", Le).then(() => {
          xe.errRule = null;
        }).catch((je) => {
          const Ye = je[Le];
          return ke[Le] || (ke[Le] = []), ke[Le].push(Ye), ye.push(Le), xe.errRule = Ye[0].rule, Promise.reject(Ye);
        }));
      }), Promise.all(Ee).then(() => {
        U && U();
      }).catch(() => new Promise((xe) => {
        j = window.setTimeout(() => {
          R.forEach((Le) => {
            Le.errRule && (Le.showError = !0);
          });
        }, 20), Z.autoPos !== !1 && ae(() => {
          N(ye);
        }), U ? (U(ke), xe()) : xe(ke);
      }))) : (U && U(), Promise.resolve());
    }, oe = (R) => {
      const { readonly: k } = e;
      return z(), k ? ae() : ee(E(), "", R);
    }, re = (R, k) => {
      const { readonly: U } = e;
      if (U)
        return ae();
      let _ = [];
      return i.isArray(R) ? _ = R : _ = [R], ee(_.map((K) => hp(y, K)), "", k);
    }, G = (R) => {
      const { readonly: k } = e;
      if (R.preventDefault(), !e.preventSubmit) {
        if (z(), k) {
          g.dispatchEvent("submit", { data: e.data }, R);
          return;
        }
        ee(E()).then((U) => {
          U ? g.dispatchEvent("submit-invalid", { data: e.data, errMap: U }, R) : g.dispatchEvent("submit", { data: e.data }, R);
        });
      }
    }, J = () => {
      const { tooltipStore: R } = p, k = f.value;
      return R.visible && (Object.assign(R, {
        item: null,
        visible: !1
      }), k && k.close()), ae();
    }, A = (R, k) => {
      const { item: U } = k, { tooltipStore: _ } = p, K = f.value, Z = R.currentTarget.children[0], ke = (Z.textContent || "").trim(), ye = Z.scrollWidth > Z.clientWidth;
      clearTimeout(p.tooltipTimeout), _.item !== U && J(), ke && ye && (Object.assign(_, {
        item: U,
        visible: !0
      }), K && K.open(Z, ke));
    }, M = () => {
      const R = b.value;
      let k = f.value;
      k && k.setActived(!1), R.enterable ? p.tooltipTimeout = setTimeout(() => {
        k = f.value, k && !k.isActived() && J();
      }, R.leaveDelay) : J();
    }, H = (R, k, U) => k ? F(R ? ["blur"].includes(R.type) ? "blur" : "change" : "all", k, U).then(() => {
      z(k);
    }).catch((_) => {
      const K = _[k], Z = T(k);
      K && Z && (Z.showError = !0, Z.errRule = K[0].rule);
    }) : ae();
    g = {
      dispatchEvent(R, k, U) {
        o(R, zt(U, { $form: y, $grid: d }, k));
      },
      reset: te,
      validate: oe,
      validateField: re,
      clearValidate: z,
      updateStatus: (R, k) => {
        const { field: U } = R;
        return H(new Event("change"), U, k);
      },
      toggleCollapse: $,
      getItems: E,
      getItemByField: T,
      closeTooltip: J
    }, Object.assign(y, g, {
      callSlot: h,
      triggerItemEvent: H,
      toggleCollapseEvent: I,
      triggerTitleTipEvent: A,
      handleTitleTipLeaveEvent: M
    });
    const ve = () => {
      const { loading: R, className: k, data: U, customLayout: _ } = e, { formItems: K } = c, Z = a.value, ke = b.value, ye = n.default;
      return r("form", {
        ref: s,
        class: ["vxe-form", k ? i.isFunction(k) ? k({ items: K, data: U, $form: y }) : k : "", {
          [`size--${Z}`]: Z,
          "is--loading": R
        }],
        onSubmit: G,
        onReset: Ce
      }, [
        r("div", {
          class: "vxe-form--wrapper vxe-form--item-row"
        }, _ ? ye ? ye({}) : [] : K.map((Ee, xe) => r(Av, {
          key: xe,
          itemConfig: Ee
        }))),
        r("div", {
          class: "vxe-form-slots",
          ref: "hideItem"
        }, _ ? [] : ye ? ye({}) : []),
        /**
         * 加载中
         */
        r(Kr, {
          class: "vxe-form--loading",
          modelValue: R
        }),
        /**
         * 工具提示
         */
        r(br, Object.assign({ ref: f }, ke))
      ]);
    };
    y.renderVN = ve;
    const Oe = Ie(0);
    lt(() => c.staticItems.length, () => {
      Oe.value++;
    }), lt(() => c.staticItems, () => {
      Oe.value++;
    }), lt(Oe, () => {
      c.formItems = c.staticItems;
    });
    const Fe = Ie(0);
    return lt(() => e.items ? e.items.length : -1, () => {
      Fe.value++;
    }), lt(() => e.items, () => {
      Fe.value++;
    }), lt(Fe, () => {
      O(e.items || []);
    }), lt(() => e.collapseStatus, (R) => {
      c.collapseAll = !!R;
    }), lt(() => e.readonly, () => {
      z();
    }), lt(() => e.disabled, () => {
      z();
    }), yn(() => {
      ae(() => {
        process.env.NODE_ENV === "development" && e.customLayout && e.items && tl("vxe.error.errConflicts", ["custom-layout", "items"]);
      });
    }), e.items && O(e.items), Xt("$xeForm", y), Xt("$xeFormGather", null), Xt("$xeFormItem", null), y;
  },
  render() {
    return this.renderVN();
  }
}), tN = "modelValue", nN = { transfer: !0 };
function _v(e) {
  return `vxe-${e.replace("$", "")}`;
}
function yi({ name: e }) {
  return ro(e);
}
function Wv({ name: e }) {
  return ro(_v(e));
}
function Bv(e) {
  let { name: t, attrs: n } = e;
  return t === "input" && (n = Object.assign({ type: "text" }, n)), n;
}
function nr(e, t, n, o) {
  return i.assign({}, nN, o, e.props, { [tN]: n });
}
function oN(e, t, n, o) {
  const { events: l } = e, a = Mv(e.name), c = Iv(e.name), p = c === a, d = {};
  return l && i.objectEach(l, (s, f) => {
    d[nl(f)] = function(...g) {
      s(t, ...g);
    };
  }), n && (d[nl(a)] = function(s) {
    n(s), p && o && o(s), l && l[a] && l[a](t, s);
  }), !p && o && (d[nl(c)] = function(...s) {
    o(...s), l && l[c] && l[c](t, ...s);
  }), d;
}
function Hv(e, t, n, o) {
  const { events: l } = e, a = Mv(e.name), c = Iv(e.name), p = {};
  return i.objectEach(l, (d, s) => {
    p[nl(s)] = function(...f) {
      process.env.NODE_ENV === "development" && (i.isFunction(d) || tl("vxe.error.errFunc", [d])), d(t, ...f);
    };
  }), n && (p[nl(a)] = function(d) {
    n(d), l && l[a] && l[a](t, d);
  }), o && (p[nl(c)] = function(...d) {
    o(...d), l && l[c] && l[c](t, ...d);
  }), p;
}
function xr(e, t) {
  const { $form: n, data: o, property: l } = t;
  return Hv(e, t, (a) => {
    i.set(o, l, a);
  }, () => {
    n.updateStatus(t);
  });
}
function zv(e, t) {
  const { $form: n, data: o, property: l } = t;
  return oN(e, t, (a) => {
    const c = a.target.value;
    i.set(o, l, c);
  }, () => {
    n.updateStatus(t);
  });
}
function rN(e, t, n) {
  const { optionGroups: o, optionGroupProps: l = {} } = e, a = l.options || "options", c = l.label || "label";
  return o.map((p, d) => r("optgroup", {
    key: d,
    label: p[c]
  }, n(p[a], e, t)));
}
function Cp(e, t) {
  const { data: n, property: o } = t, { name: l } = e, a = Bv(e), c = i.get(n, o);
  return [
    r(l, Object.assign(Object.assign(Object.assign({ class: `vxe-default-${l}` }, a), { value: a && l === "input" && (a.type === "submit" || a.type === "reset") ? null : c }), zv(e, t)))
  ];
}
function Bs(e, t) {
  const { data: n, property: o } = t, l = i.get(n, o);
  return [
    r(yi(e), Object.assign(Object.assign({}, nr(e, t, l)), xr(e, t)))
  ];
}
function cc(e, t) {
  const { data: n, property: o } = t, l = i.get(n, o);
  return [
    r(Wv(e), Object.assign(Object.assign({}, nr(e, t, l)), xr(e, t)))
  ];
}
function jv(e, t) {
  return [
    r(ro("vxe-button"), Object.assign(Object.assign({}, nr(e, t, null)), Hv(e, t)))
  ];
}
function sN(e, t) {
  return e.children.map((n) => jv(n, t)[0]);
}
function wp(e, t, n) {
  const { data: o, property: l } = n, { optionProps: a = {} } = t, c = a.label || "label", p = a.value || "value", d = a.disabled || "disabled", s = i.get(o, l);
  return e.map((f, g) => r("option", {
    key: g,
    value: f[p],
    disabled: f[d],
    /* eslint-disable eqeqeq */
    selected: f[p] == s
  }, f[c]));
}
function uc(e, t) {
  const { data: n, property: o } = t, l = i.get(n, o);
  return [
    r(yi(e), Object.assign(Object.assign({}, nr(e, t, l)), xr(e, t)))
  ];
}
function Ep(e, t) {
  const { options: n, optionProps: o } = e, { data: l, property: a } = t, c = i.get(l, a);
  return [
    r(yi(e), Object.assign(Object.assign({
      options: n,
      optionProps: o
    }, nr(e, t, c)), xr(e, t)))
  ];
}
function Sp(e, t) {
  const { name: n, options: o, optionProps: l = {} } = e, { data: a, property: c } = t, p = l.label || "label", d = l.value || "value", s = l.disabled || "disabled", f = i.get(a, c), g = _v(n);
  return o ? [
    r(ro(`${g}-group`), Object.assign(Object.assign({}, nr(e, t, f)), xr(e, t)), {
      default: () => o.map((D, b) => r(ro(g), {
        key: b,
        label: D[d],
        content: D[p],
        disabled: D[s]
      }))
    })
  ] : [
    r(ro(g), Object.assign(Object.assign({}, nr(e, t, f)), xr(e, t)))
  ];
}
on.mixin({
  input: {
    renderItemContent: Cp
  },
  textarea: {
    renderItemContent: Cp
  },
  select: {
    renderItemContent(e, t) {
      return [
        r("select", Object.assign(Object.assign({ class: "vxe-default-select" }, Bv(e)), zv(e, t)), e.optionGroups ? rN(e, t, wp) : wp(e.options, e, t))
      ];
    }
  },
  VxeInput: {
    renderItemContent: Bs
  },
  VxeNumberInput: {
    renderItemContent: Bs
  },
  VxeTextarea: {
    renderItemContent: Bs
  },
  VxeDatePicker: {
    renderItemContent: Bs
  },
  VxeButton: {
    renderItemContent: uc
  },
  VxeButtonGroup: {
    renderItemContent(e, t) {
      const { options: n } = e, { data: o, property: l } = t, a = i.get(o, l);
      return [
        r(yi(e), Object.assign(Object.assign({ options: n }, nr(e, t, a)), xr(e, t)))
      ];
    }
  },
  VxeSelect: {
    renderItemContent(e, t) {
      const { data: n, property: o } = t, { options: l, optionProps: a, optionGroups: c, optionGroupProps: p } = e, d = i.get(n, o);
      return [
        r(yi(e), Object.assign(Object.assign({}, nr(e, t, d, { options: l, optionProps: a, optionGroups: c, optionGroupProps: p })), xr(e, t)))
      ];
    }
  },
  VxeRadio: {
    renderItemContent: uc
  },
  VxeRadioGroup: {
    renderItemContent: Ep
  },
  VxeCheckbox: {
    renderItemContent: uc
  },
  VxeCheckboxGroup: {
    renderItemContent: Ep
  },
  VxeSwitch: {
    renderItemContent: Bs
  },
  VxeUpload: {
    renderItemContent: Bs
  },
  // 以下已废弃
  $input: {
    renderItemContent: cc
  },
  $textarea: {
    renderItemContent: cc
  },
  $button: {
    renderItemContent: jv
  },
  $buttons: {
    renderItemContent: sN
  },
  $select: {
    renderItemContent(e, t) {
      const { data: n, property: o } = t, { options: l, optionProps: a, optionGroups: c, optionGroupProps: p } = e, d = i.get(n, o);
      return [
        r(Wv(e), Object.assign(Object.assign({}, nr(e, t, d, { options: l, optionProps: a, optionGroups: c, optionGroupProps: p })), xr(e, t)))
      ];
    }
  },
  $radio: {
    renderItemContent: Sp
  },
  $checkbox: {
    renderItemContent: Sp
  },
  $switch: {
    renderItemContent: cc
  }
  // 以上已废弃
});
const Mu = Object.assign(fn, {
  install(e) {
    e.component(fn.name, fn);
  }
});
$t.component(fn.name, fn);
ue.component(fn);
const lN = Mu;
let Dp = 1e5;
function iN(e) {
  let t = ++Dp;
  return i.eachTree(e, (n) => {
    n && (t = Math.max(t, n.id));
  }, { children: "children" }), Dp;
}
const Rc = (e) => e && qv(e.name) === "layout", Wl = Ie({});
function aN(e, t) {
  const o = Wl.value[e];
  if (o) {
    const l = o.title, a = { name: e, $formDesign: t };
    return i.toValueString(i.isFunction(l) ? l(a) : l);
  }
  return e;
}
function cN(e) {
  const n = Wl.value[e];
  return n ? n.icon : "";
}
function qv(e) {
  const n = Wl.value[e];
  return n ? n.group : "";
}
function uN(e, t) {
  const o = Wl.value[e];
  if (o) {
    const l = o.customGroup, a = { name: e, $formDesign: t };
    return i.toValueString(i.isFunction(l) ? l(a) : l);
  }
  return e;
}
class Pc {
  constructor(t, n, o) {
    if (Object.defineProperty(this, "id", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "field", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ""
    }), Object.defineProperty(this, "title", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ""
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ""
    }), Object.defineProperty(this, "required", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, "children", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "model", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        update: !1,
        value: ""
      }
    }), n) {
      const a = on.get(n) || {};
      if (a) {
        const c = Wl.value, p = a.createFormDesignWidgetConfig;
        if (p) {
          const d = { name: n, $formDesign: t }, s = p(d) || {}, f = s.title;
          this.title = i.toValueString(i.isFunction(f) ? f(d) : f), this.options = s.options || {}, this.children = s.children || [], c[n] || (c[n] = {
            title: f,
            icon: s.icon,
            group: s.group,
            customGroup: s.customGroup
          }, Wl.value = Object.assign({}, c));
        }
      }
    }
    const l = iN(o);
    this.id = l, this.field = `${n}${l}`, this.name = n;
  }
}
function Iu(e) {
  const t = new Pc(null, e.name, []);
  return t.id = e.id, t.title = e.title, t.field = e.field, t.required = e.required, t.options = Object.assign({}, t.options, e.options), t.children = e.children ? e.children.map((n) => Iu(n)) : [], t;
}
const dN = tt({
  props: {},
  emits: [],
  setup() {
    const e = ut("$xeFormDesign", null);
    if (!e)
      return () => [];
    const { reactData: t } = e, n = (d) => {
      const s = d.currentTarget, f = d.dataTransfer, g = s.getAttribute("data-widget-name") || "", D = e.createWidget(g);
      f && f.setData("text/plain", g), t.sortWidget = null, t.dragWidget = D;
    }, o = (d) => {
      t.dragWidget && (t.activeWidget = t.dragWidget, e.dispatchEvent("add-widget", {}, d)), t.dragWidget = null, t.sortWidget = null;
    }, l = (d, s) => {
      const { widgetObjList: f, dragWidget: g } = t;
      if (g && s.children.some((D) => D.name === g.name)) {
        const D = i.findTree(f, (b) => b && b.id === g.id, { children: "children" });
        D && D.items.splice(D.index, 1);
      }
    }, a = (d, s) => {
      const { widgetObjList: f } = t, g = e.createWidget(s);
      f.push(g), t.activeWidget = g, t.sortWidget = null, t.dragWidget = null, e.dispatchEvent("add-widget", {}, d);
    }, c = (d) => {
      const s = [];
      return d.children && d.children.forEach((f, g) => {
        const { name: D } = f, b = aN(D, e), S = (on.get(D) || {}).renderFormDesignWidgetItem;
        s.push(r("div", {
          key: g,
          class: "vxe-form-design--widget-item"
        }, r("div", {
          class: "vxe-form-design--widget-box",
          "data-widget-name": D,
          title: b,
          draggable: !0,
          onDragstart: n,
          onDragend: o,
          onDblclick(y) {
            a(y, D);
          }
        }, S ? It(S({}, { $formDesign: e })) : [
          r("i", {
            class: ["vxe-form-design--widget-item-icon", cN(D)]
          }),
          r("span", {
            class: "vxe-form-design--widget-item-name"
          }, b),
          r("span", {
            class: "vxe-form-design--widget-item-add",
            onClick(y) {
              a(y, D);
            }
          }, [
            r("i", {
              class: dt().FORM_DESIGN_WIDGET_ADD
            })
          ])
        ])));
      }), s;
    }, p = () => {
      const { widgetConfigs: d } = t;
      return d.map((s, f) => {
        const { title: g, group: D } = s;
        return r("div", {
          key: f,
          class: "vxe-form-design--widget-group"
        }, [
          r("div", {
            class: "vxe-form-design--widget-title"
          }, D ? Te(`vxe.formDesign.widget.group.${D}`) : `${g || ""}`),
          r("div", {
            class: "vxe-form-design--widget-list",
            onDragover(b) {
              l(b, s);
            }
          }, c(s))
        ]);
      });
    };
    return () => r("div", {
      class: "vxe-form-design--widget"
    }, p());
  }
}), fN = tt({
  name: "FormDesignLayoutViewItem",
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    itemIndex: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  emits: [],
  setup(e, { slots: t }) {
    const n = ut("$xeFormDesign", null);
    if (!n)
      return () => [];
    const { reactData: o } = n, l = (f) => {
      const { widgetObjList: g, sortSubWidget: D } = o;
      if (D) {
        f.preventDefault();
        return;
      }
      const b = f.currentTarget, x = Number(b.getAttribute("data-widget-id")), S = i.findTree(g, (y) => y && y.id === x, { children: "children" });
      S && (o.dragWidget = null, o.sortWidget = S.item, o.sortSubWidget = null);
    }, a = () => {
      o.activeWidget = o.sortWidget, o.sortWidget = null;
    };
    let c = !1;
    const p = (f) => {
      const { widgetObjList: g, sortWidget: D, sortSubWidget: b } = o;
      if (c || b) {
        f.preventDefault();
        return;
      }
      if (D) {
        const x = f.currentTarget;
        f.preventDefault();
        const S = Number(x.getAttribute("data-widget-id"));
        if (S !== D.id) {
          const y = i.findTree(g, (h) => h && h.id === S, { children: "children" });
          if (y) {
            const h = i.findTree(g, (O) => O && O.id === D.id, { children: "children" });
            h && (h.items.splice(h.index, 1), y.items.splice(y.index, 0, h.item), c = !0, setTimeout(() => {
              c = !1;
            }, 150));
          }
        }
      }
    }, d = (f) => {
      const { sortWidget: g, dragWidget: D, sortSubWidget: b } = o;
      (g || D || b) && f.preventDefault();
    }, s = (f, g) => {
      n.handleClickWidget(f, g), o.sortSubWidget = null;
    };
    return () => {
      const { dragWidget: f, activeWidget: g, sortWidget: D } = o, { item: b } = e, { name: x } = b, S = g && g.id === b.id, y = t.default;
      return r("div", {
        key: b.id,
        "data-widget-id": b.id,
        draggable: !0,
        class: ["vxe-form-design--preview-item", `widget-${i.kebabCase(x)}`, {
          "is--active": S,
          "is--sort": D && D.id === b.id,
          "is--drag": f && f.id === b.id
        }],
        onDragstart: l,
        onDragend: a,
        onDragenter: p,
        onDragover: d,
        onClick(h) {
          s(h, b);
        }
      }, [
        r("div", {
          class: "vxe-form-design--preview-item-view vxe-form--item-row"
        }, y ? y({}) : []),
        S ? r("div", {
          class: "vxe-form-design--preview-item-operate"
        }, [
          r($n, {
            icon: dt().FORM_DESIGN_WIDGET_COPY,
            status: "primary",
            size: "mini",
            circle: !0,
            onClick(h) {
              n.handleCopyWidget(h.$event, b);
            }
          }),
          r($n, {
            icon: dt().FORM_DESIGN_WIDGET_DELETE,
            status: "danger",
            size: "mini",
            circle: !0,
            onClick(h) {
              n.handleRemoveWidget(h.$event, b);
            }
          })
        ]) : Me()
      ]);
    };
  }
}), pN = tt({
  name: "FormDesignLayoutPreview",
  props: {},
  emits: [],
  setup() {
    const e = ut("$xeFormDesign", null);
    if (!e)
      return () => [];
    const { reactData: t } = e, n = (o) => {
      const { widgetObjList: l, dragWidget: a } = t;
      a && (o.preventDefault(), i.findTree(l, (p) => p && p.id === a.id, { children: "children" }) || (t.sortWidget = a, l.push(a)));
    };
    return () => {
      const { widgetObjList: o } = t;
      return r("div", {
        class: "vxe-form-design--preview",
        onDragover: n
      }, [
        r("div", {
          class: "vxe-form-design--preview-wrapper"
        }, [
          r(fn, {
            customLayout: !0,
            span: 24,
            vertical: !0
          }, {
            default() {
              return r(fa, {
                class: "vxe-form-design--preview-list",
                tag: "div",
                name: "vxe-form-design--preview-list"
              }, {
                default: () => o.map((l, a) => r(fN, {
                  key: l.id,
                  item: l,
                  itemIndex: a,
                  items: o
                }, {
                  default() {
                    const { name: c } = l, p = on.get(c) || {}, d = p.renderFormDesignWidgetEdit || p.renderFormDesignWidgetView;
                    return d ? It(d(l, { widget: l, isEditMode: !0, isViewMode: !1, $formDesign: e, $formView: null })) : [];
                  }
                }))
              });
            }
          })
        ])
      ]);
    };
  }
});
function mN(e, t, n) {
  const o = e.reactData.staticTabs, l = t.parentNode;
  l && (o.splice(i.arrayIndexOf(l.children, t), 0, n), e.reactData.staticTabs = o.slice(0));
}
function gN(e, t) {
  const n = e.reactData.staticTabs, o = i.findTree(n, (l) => l.id === t.id, { children: "children" });
  o && o.items.splice(o.index, 1), e.reactData.staticTabs = n.slice(0);
}
const To = tt({
  name: "VxeTabPane",
  props: {
    title: [String, Number],
    name: [String, Number],
    icon: String,
    titleWidth: [String, Number],
    titleAlign: [String, Number],
    permissionCode: [String, Number]
  },
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = ut("$xeTabs", null), c = Ot({}), p = Ot({
      id: o,
      title: e.title,
      name: e.name,
      icon: e.icon,
      titleWidth: e.titleWidth,
      titleAlign: e.titleAlign,
      permissionCode: e.permissionCode,
      slots: {
        default: n.default
      }
    }), d = {
      refElem: l
    }, s = {}, f = {
      xID: o,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => d,
      getComputeMaps: () => s
    };
    lt(() => e.title, (D) => {
      p.title = D;
    }), lt(() => e.name, (D) => {
      p.name = D;
    }), lt(() => e.icon, (D) => {
      p.icon = D;
    }), lt(() => e.permissionCode, (D) => {
      p.permissionCode = D;
    }), yn(() => {
      a && l.value && mN(a, l.value, p);
    }), On(() => {
      a && gN(a, p);
    });
    const g = () => r("div", {
      ref: l
    }, []);
    return f.renderVN = g, f;
  },
  render() {
    return this.renderVN();
  }
}), yr = tt({
  name: "VxeTabs",
  props: {
    modelValue: [String, Number, Boolean],
    options: Array,
    height: [String, Number],
    destroyOnClose: Boolean,
    titleWidth: [String, Number],
    titleAlign: [String, Number],
    type: String,
    padding: {
      type: Boolean,
      default: () => me().tabs.padding
    }
  },
  emits: [
    "update:modelValue",
    "change",
    "tab-click",
    "tab-load"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = i.uniqueId(), a = Ie(), c = Ie(), p = Ot({
      staticTabs: [],
      activeName: e.modelValue,
      initNames: e.modelValue ? [e.modelValue] : [],
      lintLeft: 0,
      lintWidth: 0
    }), d = {
      refElem: a
    }, s = (N) => {
      const { permissionCode: F } = N;
      return !(F && !Va.checkVisible(F));
    }, f = Q(() => {
      const { options: N } = e;
      return (N || []).filter(s);
    }), g = Q(() => {
      const { staticTabs: N } = p;
      return N.filter(s);
    }), D = Q(() => {
      const { activeName: N } = p;
      return f.value.find((j) => j.name === N);
    }), b = Q(() => {
      const { activeName: N } = p;
      return g.value.find((j) => j.name === N);
    }), x = {}, S = {
      xID: l,
      props: e,
      context: t,
      reactData: p,
      getRefMaps: () => d,
      getComputeMaps: () => x
    }, y = (N, F) => N && (i.isString(N) && (N = n[N] || null), i.isFunction(N)) ? It(N(F)) : [], h = () => {
      ae(() => {
        const { type: N } = e, { activeName: F } = p, j = f.value, ee = g.value, oe = c.value;
        let re = 0, G = 0;
        if (oe) {
          const J = i.findIndexOf(ee.length ? ee : j, (A) => A.name === F);
          if (J > -1) {
            const A = oe.children[J], M = A.clientWidth;
            N ? N === "card" ? (re = M + 2, G = A.offsetLeft) : N === "border-card" && (re = M + 2, G = A.offsetLeft - 1) : (re = Math.max(4, Math.floor(M * 0.6)), G = A.offsetLeft + Math.floor((M - re) / 2));
          }
        }
        p.lintLeft = G, p.lintWidth = re;
      });
    }, O = (N, F) => {
      const { initNames: j, activeName: ee } = p, { name: oe } = F;
      let re = !1;
      const G = oe;
      j.includes(oe) || (re = !0, j.push(oe)), p.activeName = oe, o("update:modelValue", G), oe !== ee && o("change", { value: G, name: oe, $event: N }), o("tab-click", { name: oe, $event: N }), re && o("tab-load", { name: oe, $event: N });
    };
    Object.assign(S, {
      dispatchEvent(N, F, j) {
        o(N, zt(j, { $tabs: S }, F));
      }
    }, {});
    const W = (N) => {
      const { type: F, titleWidth: j, titleAlign: ee } = e, { activeName: oe, lintLeft: re, lintWidth: G } = p;
      return r("div", {
        class: "vxe-tabs-header"
      }, [
        r("div", {
          ref: c,
          class: "vxe-tabs-header--wrapper"
        }, N.map((J) => {
          const { title: A, titleWidth: M, titleAlign: H, icon: ne, name: de, slots: ve } = J, Oe = ve ? ve.tab : null, Fe = M || j, R = H || ee;
          return r("div", {
            key: `${de}`,
            class: ["vxe-tabs-header--item", R ? `align--${R}` : "", {
              "is--active": oe === de
            }],
            style: Fe ? {
              width: Wn(Fe)
            } : null,
            onClick(k) {
              O(k, J);
            }
          }, [
            r("div", {
              class: "vxe-tabs-header--item-inner"
            }, [
              ne ? r("div", {
                class: "vxe-tabs-header--item-icon"
              }, [
                r("i", {
                  class: ne
                })
              ]) : Me(),
              r("div", {
                class: "vxe-tabs-header--item-name"
              }, Oe ? y(Oe, { name: de, title: A }) : `${A}`)
            ])
          ]);
        })),
        r("span", {
          class: `vxe-tabs-header--active-line-${F || "default"}`,
          style: {
            left: `${re}px`,
            width: `${G}px`
          }
        })
      ]);
    }, $ = (N) => {
      const { initNames: F, activeName: j } = p, { name: ee, slots: oe } = N, re = oe ? oe.default : null;
      return r(To, Object.assign({ key: ee }, N), {
        default() {
          return ee && F.includes(ee) ? r("div", {
            key: ee,
            class: ["vxe-tabs-pane--item", {
              "is--visible": j === ee
            }]
          }, y(re, {})) : Me();
        }
      });
    }, I = (N) => {
      const { destroyOnClose: F } = e, j = D.value;
      return F ? j ? [$(j)] : Me() : N.map($);
    }, z = (N) => {
      const { initNames: F, activeName: j } = p, { name: ee, slots: oe } = N, re = oe ? oe.default : null;
      return ee && F.includes(ee) ? r("div", {
        key: ee,
        class: ["vxe-tabs-pane--item", {
          "is--visible": j === ee
        }]
      }, y(re, {})) : Me();
    }, te = (N) => {
      const { destroyOnClose: F } = e, j = b.value;
      return F ? j ? [z(j)] : Me() : N.map(z);
    }, Ce = () => {
      const { type: N, height: F, padding: j } = e, ee = f.value, oe = g.value, re = n.default;
      return r("div", {
        ref: a,
        class: ["vxe-tabs", `vxe-tabs--${N || "default"}`, {
          "is--padding": j
        }],
        style: F ? {
          height: Wn(F)
        } : null
      }, [
        r("div", {
          class: "vxe-tabs-slots"
        }, re ? re({}) : []),
        W(re ? oe : ee),
        r("div", {
          class: "vxe-tabs-pane"
        }, re ? te(oe) : I(ee))
      ]);
    };
    return lt(() => e.modelValue, (N) => {
      p.activeName = N;
    }), lt(() => p.activeName, () => {
      h();
    }), yn(() => {
      h();
    }), S.renderVN = Ce, Xt("$xeTabs", S), S;
  },
  render() {
    return this.renderVN();
  }
}), Gv = {
  title: String,
  field: String,
  span: [String, Number],
  align: String,
  titleBold: {
    type: Boolean,
    default: null
  },
  titleAlign: {
    type: String,
    default: null
  },
  titleWidth: {
    type: [String, Number],
    default: null
  },
  titleColon: {
    type: Boolean,
    default: null
  },
  titleAsterisk: {
    type: Boolean,
    default: null
  },
  showTitle: {
    type: Boolean,
    default: !0
  },
  vertical: {
    type: Boolean,
    default: null
  },
  className: [String, Function],
  contentClassName: [String, Function],
  contentStyle: [Object, Function],
  titleClassName: [String, Function],
  titleStyle: [Object, Function],
  titleOverflow: {
    type: [Boolean, String],
    default: null
  },
  titlePrefix: Object,
  titleSuffix: Object,
  resetValue: { default: null },
  visibleMethod: Function,
  visible: { type: Boolean, default: null },
  folding: Boolean,
  collapseNode: Boolean,
  itemRender: Object,
  rules: Array
}, vt = tt({
  name: "VxeFormItem",
  props: Gv,
  setup(e, { slots: t }) {
    const n = Ie(), o = ut("$xeForm", {}), l = ut("$xeFormGather", null), a = Ot(Ou(o, e));
    a.slots = t, Xt("xeFormItemInfo", { itemConfig: a }), Pv(e, a), yn(() => {
      Nv(o, n.value, a, l);
    }), On(() => {
      Fv(o, a);
    });
    const p = (f, g) => {
      const { props: D, reactData: b } = f, { data: x, rules: S, readonly: y, disabled: h, titleBold: O, titleAlign: E, titleWidth: T, titleColon: W, titleAsterisk: $, titleOverflow: I, vertical: z } = D, { collapseAll: te } = b, { computeValidOpts: Ce } = f.getComputeMaps(), N = Ce.value, { slots: F, title: j, visible: ee, folding: oe, field: re, collapseNode: G, itemRender: J, showError: A, errRule: M, className: H, titleOverflow: ne, vertical: de, showTitle: ve, contentClassName: Oe, contentStyle: Fe, titleClassName: R, titleStyle: k } = g, U = _l(J) ? on.get(J.name) : null, _ = U ? U.formItemClassName || U.itemClassName : "", K = U ? U.formItemStyle || U.itemStyle : null, Z = U ? U.formItemContentClassName || U.itemContentClassName : "", ke = U ? U.formItemContentStyle || U.itemContentStyle : null, ye = U ? U.formItemTitleClassName || U.itemTitleClassName : "", Ee = U ? U.formItemTitleStyle || U.itemTitleStyle : null, xe = F ? F.default : null, Le = F ? F.title : null, je = g.span || D.span, Ye = g.align || D.align, fe = i.eqNull(g.titleBold) ? O : g.titleBold, ge = i.eqNull(g.titleAlign) ? E : g.titleAlign, $e = i.eqNull(g.titleWidth) ? T : g.titleWidth, Ve = i.eqNull(g.titleColon) ? W : g.titleColon, ce = i.eqNull(g.titleAsterisk) ? $ : g.titleAsterisk, We = i.isUndefined(ne) || i.isNull(ne) ? I : ne, Ge = i.isUndefined(de) || i.isNull(de) ? z : de, Ze = We === "ellipsis", pe = We === "title", Y = We === !0 || We === "tooltip", le = pe || Y || Ze, he = { data: x, disabled: h, readonly: y, field: re, property: re, item: g, $form: f, $grid: f.xegrid };
      let He = !1;
      if (ee === !1)
        return Me();
      if (!y && S) {
        const Xe = S[re];
        Xe && (He = Xe.some((et) => et.required));
      }
      let se = [];
      const Se = U ? U.renderFormItemContent || U.renderItemContent : null;
      xe ? se = f.callSlot(xe, he) : Se ? se = It(Se(J, he)) : re && (se = [`${i.get(x, re)}`]), G && se.push(r("div", {
        class: "vxe-form--item-trigger-node",
        onClick: f.toggleCollapseEvent
      }, [
        r("span", {
          class: "vxe-form--item-trigger-text"
        }, Te(te ? "vxe.form.unfolding" : "vxe.form.folding")),
        r("i", {
          class: ["vxe-form--item-trigger-icon", te ? dt().FORM_FOLDING : dt().FORM_UNFOLDING]
        })
      ])), M && N.showMessage && se.push(r("div", {
        class: "vxe-form--item-valid",
        style: M.maxWidth ? {
          width: `${M.maxWidth}px`
        } : null
      }, M.message));
      const ze = Y ? {
        onMouseenter(Xe) {
          f.triggerTitleTipEvent(Xe, he);
        },
        onMouseleave: f.handleTitleTipLeaveEvent
      } : {};
      return r("div", {
        ref: n,
        class: [
          "vxe-form--item",
          g.id,
          je ? `vxe-form--item-col_${je} is--span` : "",
          H ? i.isFunction(H) ? H(he) : H : "",
          _ ? i.isFunction(_) ? _(he) : _ : "",
          {
            "is--title": j,
            "is--colon": Ve,
            "is--bold": fe,
            "is--vertical": Ge,
            "is--asterisk": ce,
            "is--required": He,
            "is--hidden": oe && te,
            "is--active": Tu(f, g),
            "is--error": A
          }
        ],
        style: i.isFunction(K) ? K(he) : K
      }, [
        r("div", {
          class: "vxe-form--item-inner"
        }, [
          ve !== !1 && (j || Le) ? r("div", Object.assign({ class: [
            "vxe-form--item-title",
            ge ? `align--${ge}` : "",
            le ? "is--ellipsis" : "",
            ye ? i.isFunction(ye) ? ye(he) : ye : "",
            R ? i.isFunction(R) ? R(he) : R : ""
          ], style: Object.assign({}, i.isFunction(Ee) ? Ee(he) : Ee, i.isFunction(k) ? k(he) : k, $e ? {
            width: isNaN($e) ? $e : `${$e}px`
          } : null), title: pe ? Vn(j) : null }, ze), Lv(f, g)) : null,
          r("div", {
            class: [
              "vxe-form--item-content",
              Ye ? `align--${Ye}` : "",
              Z ? i.isFunction(Z) ? Z(he) : Z : "",
              Oe ? i.isFunction(Oe) ? Oe(he) : Oe : ""
            ],
            style: Object.assign({}, i.isFunction(ke) ? ke(he) : ke, i.isFunction(Fe) ? Fe(he) : Fe)
          }, se)
        ])
      ]);
    }, s = {
      formItem: a,
      renderVN: () => {
        const f = o ? o.props : null;
        return f && f.customLayout ? p(o, a) : r("div", {
          ref: n
        });
      }
    };
    return Xt("$xeFormItem", s), Xt("$xeFormGather", null), s;
  },
  render() {
    return this.renderVN();
  }
}), Fn = tt({
  name: "VxeSwitch",
  props: {
    modelValue: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: null
    },
    size: { type: String, default: () => me().switch.size || me().size },
    openLabel: String,
    closeLabel: String,
    openValue: { type: [String, Number, Boolean], default: !0 },
    closeValue: { type: [String, Number, Boolean], default: !1 },
    openIcon: String,
    closeIcon: String,
    openActiveIcon: String,
    closeActiveIcon: String
  },
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const { emit: n } = t, o = ut("$xeForm", null), l = ut("xeFormItemInfo", null), a = i.uniqueId(), { computeSize: c } = Ln(e), p = Ot({
      isActivated: !1,
      hasAnimat: !1,
      offsetLeft: 0
    }), d = {
      xID: a,
      props: e,
      context: t,
      reactData: p
    }, s = Ie();
    let f = {};
    const g = Q(() => {
      const { disabled: T } = e;
      return T === null ? o ? o.props.readonly || o.props.disabled : !1 : T;
    }), D = Q(() => Vn(e.openLabel)), b = Q(() => Vn(e.closeLabel)), x = Q(() => e.modelValue === e.openValue);
    let S;
    const y = (T) => {
      if (!g.value) {
        const $ = x.value;
        clearTimeout(S);
        const I = $ ? e.closeValue : e.openValue;
        p.hasAnimat = !0, n("update:modelValue", I), f.dispatchEvent("change", { value: I }, T), o && l && o.triggerItemEvent(T, l.itemConfig.field, I), S = setTimeout(() => {
          p.hasAnimat = !1;
        }, 400);
      }
    }, h = (T) => {
      p.isActivated = !0, f.dispatchEvent("focus", { value: e.modelValue }, T);
    }, O = (T) => {
      p.isActivated = !1, f.dispatchEvent("blur", { value: e.modelValue }, T);
    };
    f = {
      dispatchEvent(T, W, $) {
        n(T, zt($, { $switch: d }, W));
      },
      focus() {
        const T = s.value;
        return p.isActivated = !0, T.focus(), ae();
      },
      blur() {
        return s.value.blur(), p.isActivated = !1, ae();
      }
    }, Object.assign(d, f);
    const E = () => {
      const { openIcon: T, closeIcon: W, openActiveIcon: $, closeActiveIcon: I } = e, z = c.value, te = x.value, Ce = D.value, N = b.value, F = g.value;
      return r("div", {
        class: ["vxe-switch", te ? "is--on" : "is--off", {
          [`size--${z}`]: z,
          "is--disabled": F,
          "is--animat": p.hasAnimat
        }]
      }, [
        r("button", {
          ref: s,
          class: "vxe-switch--button",
          type: "button",
          disabled: F,
          onClick: y,
          onFocus: h,
          onBlur: O
        }, [
          r("span", {
            class: "vxe-switch--label vxe-switch--label-on"
          }, [
            T ? r("i", {
              class: ["vxe-switch--label-icon", T]
            }) : Me(),
            Ce
          ]),
          r("span", {
            class: "vxe-switch--label vxe-switch--label-off"
          }, [
            W ? r("i", {
              class: ["vxe-switch--label-icon", W]
            }) : Me(),
            N
          ]),
          r("span", {
            class: ["vxe-switch--icon"]
          }, $ || I ? [
            r("i", {
              class: te ? $ : I
            })
          ] : [])
        ])
      ]);
    };
    return d.renderVN = E, d;
  },
  render() {
    return this.renderVN();
  }
}), jo = tt({
  name: "VxeText",
  props: {
    status: String,
    title: [String, Number],
    icon: String,
    content: [String, Number]
  },
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = {}, d = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => p
    }, s = () => {
      const { icon: g, content: D } = e, b = n.default, x = n.icon;
      return [
        x || g ? r("span", {
          class: "vxe-text--icon"
        }, x ? It(x({})) : [
          r("i", {
            class: g
          })
        ]) : Me(),
        r("span", {
          class: "vxe-text--content"
        }, b ? b({}) : i.toValueString(D))
      ];
    }, f = () => {
      const { status: g, title: D } = e;
      return r("span", {
        ref: l,
        title: D,
        class: ["vxe-text", {
          [`theme--${g}`]: g
        }]
      }, s());
    };
    return d.renderVN = f, d;
  },
  render() {
    return this.renderVN();
  }
}), vN = tt({
  name: "DefaultSettingForm",
  props: {
    formData: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormDesign", null);
    if (!t)
      return () => [];
    const { props: n } = t;
    return () => {
      const { formData: o } = e;
      return r(fn, {
        data: o,
        span: 24,
        vertical: !0,
        titleBold: !0
      }, {
        default() {
          const { showPc: l, showMobile: a } = n;
          return [
            r(vt, {
              title: Te("vxe.formDesign.formName"),
              field: "title",
              itemRender: { name: "VxeInput", props: { placeholder: Te("vxe.formDesign.defFormTitle") } }
            }),
            l && a ? r(vt, {
              title: Te("vxe.formDesign.widgetProp.displaySetting.name")
            }, {
              default() {
                return [
                  r("div", {
                    class: "vxe-form-design--widget-form-item-devices"
                  }, [
                    r("div", {
                      class: "vxe-form-design--widget-form-item-pc"
                    }, [
                      r(jo, {
                        icon: dt().FORM_DESIGN_PROPS_PC,
                        content: Te("vxe.formDesign.widgetProp.displaySetting.pc")
                      }),
                      r(Fn, {
                        modelValue: o.pcVisible,
                        openLabel: Te("vxe.formDesign.widgetProp.displaySetting.visible"),
                        closeLabel: Te("vxe.formDesign.widgetProp.displaySetting.hidden"),
                        "onUpdate:modelValue"(c) {
                          o.pcVisible = c;
                        }
                      })
                    ]),
                    r("div", {
                      class: "vxe-form-design--widget-form-item-mobile"
                    }, [
                      r(jo, {
                        icon: dt().FORM_DESIGN_PROPS_MOBILE,
                        content: Te("vxe.formDesign.widgetProp.displaySetting.mobile")
                      }),
                      r(Fn, {
                        modelValue: o.mobileVisible,
                        openLabel: Te("vxe.formDesign.widgetProp.displaySetting.visible"),
                        closeLabel: Te("vxe.formDesign.widgetProp.displaySetting.hidden"),
                        "onUpdate:modelValue"(c) {
                          o.mobileVisible = c;
                        }
                      })
                    ])
                  ])
                ];
              }
            }) : Me()
          ];
        }
      });
    };
  }
}), hN = tt({
  name: "FormDesignLayoutSetting",
  props: {},
  emits: [],
  setup() {
    const e = ut("$xeFormDesign", null);
    if (!e)
      return () => [];
    const { props: t, reactData: n } = e, o = Ie(1), l = () => {
      const { activeWidget: c } = n;
      if (c) {
        const p = on.get(c.name), d = p ? p.renderFormDesignWidgetFormView : null;
        if (d)
          return r("div", {
            class: "vxe-form-design--custom-widget-form-view"
          }, It(d(c, { widget: c, $formDesign: e })));
      }
      return Me();
    }, a = () => {
      const { formRender: c } = t, { formData: p } = n;
      if (c) {
        const d = on.get(c.name), s = d ? d.renderFormDesignSettingFormView : null;
        if (s)
          return r("div", {
            class: "vxe-form-design--custom-setting-form-view"
          }, It(s({}, { $formDesign: e })));
      }
      return r(vN, {
        formData: p
      });
    };
    return lt(() => n.activeWidget, () => {
      o.value = 1;
    }), () => r("div", {
      class: "vxe-form-design--setting"
    }, [
      r("div", {
        class: "vxe-form-design--setting-form"
      }, [
        r(yr, {
          modelValue: o.value,
          titleWidth: "50%",
          titleAlign: "center",
          padding: !0,
          class: "vxe-form-design--setting-form-tabs",
          "onUpdate:modelValue"(c) {
            o.value = c;
          }
        }, {
          default() {
            return [
              r(To, {
                title: Te("vxe.formDesign.widgetPropTab"),
                name: 1
              }, {
                default() {
                  return l();
                }
              }),
              r(To, {
                title: Te("vxe.formDesign.widgetFormTab"),
                name: 2
              }, {
                default() {
                  return a();
                }
              })
            ];
          }
        })
      ])
    ]);
  }
}), bN = (e) => ({
  title: "",
  pcVisible: e ? !!e.pcVisible : !0,
  pcVertical: !0,
  pcTitleBold: !1,
  pcTitleColon: !1,
  pcTitleAlign: "",
  pcTitleWidth: "",
  pcTitleWidthUnit: "",
  mobileVisible: e ? !!e.mobileVisible : !0,
  mobileVertical: !0,
  mobileTitleBold: !1,
  mobileTitleColon: !1,
  mobileTitleAlign: "",
  mobileTitleWidth: "",
  mobileTitleWidthUnit: ""
}), Uv = (e) => {
  const { formConfig: t } = e;
  return {
    vertical: t.pcVertical,
    titleBold: t.pcTitleBold,
    titleColon: t.pcTitleColon,
    titleAlign: t.pcTitleAlign,
    titleWidth: t.pcTitleWidth
  };
}, xN = (e) => {
  const { formConfig: t } = e;
  return {
    vertical: t.mobileVertical,
    titleBold: t.mobileTitleBold,
    titleColon: t.mobileTitleColon,
    titleAlign: t.mobileTitleAlign,
    titleWidth: t.mobileTitleWidth
  };
}, Xr = tt({
  name: "VxeFormGather",
  props: Gv,
  setup(e, { slots: t }) {
    const n = Ie(), o = ut("$xeForm", {}), l = ut("$xeFormGather", null), a = Ot(Ou(o, e));
    a.children = [], Xt("xeFormItemInfo", { itemConfig: a }), Pv(e, a), yn(() => {
      Nv(o, n.value, a, l);
    }), On(() => {
      Fv(o, a);
    });
    const d = {
      formItem: a,
      renderVN: () => {
        const { className: s, field: f } = e, g = e.span || (o ? o.props.span : null), D = t.default;
        return r("div", {
          ref: n,
          class: ["vxe-form--gather vxe-form--item-row", a.id, g ? `vxe-form--item-col_${g} is--span` : "", s ? i.isFunction(s) ? s({ $form: o, data: o ? o.props.data : {}, item: a, field: f, property: f }) : s : ""]
        }, D ? D({}) : []);
      }
    };
    return Xt("$xeFormGather", d), Xt("$xeFormItem", null), d;
  },
  render() {
    return this.renderVN();
  }
}), Ss = tt({
  name: "VxeFormView",
  props: {
    modelValue: Object,
    config: {
      type: Object,
      default: () => ({})
    },
    viewRender: Object,
    createFormConfig: Function
  },
  emits: [
    "update:modelValue",
    "submit",
    "reset"
  ],
  setup(e, t) {
    const { emit: n, slots: o } = t, l = i.uniqueId(), a = Ie(), c = Ie(), p = ut("$xeFormDesignLayoutStyle", null), d = Ot({
      formConfig: {},
      formRules: {},
      widgetObjList: []
    }), s = {
      refElem: a
    }, f = {}, g = {
      xID: l,
      props: e,
      context: t,
      reactData: d,
      getRefMaps: () => s,
      getComputeMaps: () => f
    }, D = (N) => {
      if (N) {
        const { formConfig: F, widgetData: j } = N;
        b(F || {}), x(j || []);
      }
      return ae();
    }, b = (N) => {
      const { viewRender: F } = e, { createFormConfig: j } = e, ee = { viewRender: F, formConfig: N };
      if (j)
        d.formConfig = j(ee);
      else {
        const { name: oe } = F || {}, re = on.get(oe) || {}, G = re ? re.createFormViewFormConfig : null;
        d.formConfig = Object.assign({}, G ? G(ee) : Uv(ee));
      }
      return ae();
    }, x = (N) => (d.widgetObjList = (N || []).map((F) => Iu(F)), h(), ae()), S = (N) => {
      switch (N.name) {
        case "subtable":
          return [];
      }
      return null;
    }, y = () => [
      { required: !0, content: "该填写该字段！" }
    ], h = () => {
      const N = {}, F = {};
      i.eachTree(d.widgetObjList, (j) => {
        const { name: ee, field: oe, required: re } = j, G = on.get(ee) || {}, J = G.createFormDesignWidgetFieldValue, A = G.createFormDesignWidgetFieldRules;
        if (N[oe] = J ? J({ widget: j, $formView: g }) : S(j), A) {
          const M = A({ widget: j, $formView: g });
          M && M.length && (F[oe] = M);
        } else re && (F[oe] = y());
      }, { children: "children" }), d.formRules = F, n("update:modelValue", Object.assign(N, e.modelValue));
    }, O = (N, F) => {
      const { field: j } = N, ee = c.value;
      return ee && ee.updateStatus({ field: j }, F), ae();
    }, E = (N, F) => {
      const { modelValue: j } = e, { field: ee } = N, oe = c.value;
      return j && (j[ee] = F), oe && oe.updateStatus({ field: ee }, F), ae();
    }, T = (N) => {
      const { modelValue: F } = e;
      return F ? F[N.field] : null;
    }, W = (N, F, j) => {
      n(N, zt(j, { $formView: g }, F));
    }, $ = {
      dispatchEvent: W,
      loadConfig: D,
      loadFormConfig: b,
      loadWidgetData: x,
      updateItemStatus: O,
      setItemValue: E,
      getItemValue: T
    }, I = (N) => {
      W("submit", N, N.$event);
    }, z = (N) => {
      W("reset", N, N.$event);
    };
    Object.assign(g, $, {});
    const Ce = () => {
      const { modelValue: N } = e, { formConfig: F, formRules: j, widgetObjList: ee } = d, oe = o.header, re = o.footer;
      return r("div", {
        ref: a,
        class: "vxe-form-view"
      }, [
        r(fn, {
          ref: c,
          data: N,
          customLayout: !0,
          span: 24,
          vertical: F.vertical,
          titleBold: F.titleBold,
          titleColon: F.titleColon,
          titleAlign: F.titleAlign,
          titleWidth: F.titleWidth,
          rules: j,
          onSubmit: I,
          onReset: z
        }, {
          default() {
            return [
              oe ? r(vt, {}, {
                default() {
                  return oe({});
                }
              }) : Me(),
              ...ee.map((G) => {
                const { name: J } = G, A = on.get(J) || {}, M = A.renderFormDesignWidgetView, H = A.renderFormDesignWidgetPreview, ne = A.renderFormDesignWidgetMobilePreview, de = G, ve = { widget: G, isEditMode: !1, isViewMode: !0, $formDesign: null, $formView: g };
                return r(Xr, {
                  key: G.id
                }, {
                  default() {
                    if (p) {
                      if (p.reactData.activeTab === 2) {
                        if (ne)
                          return It(ne(de, ve));
                      } else if (H)
                        return It(H(de, ve));
                    }
                    return M ? It(M(de, ve)) : [];
                  }
                });
              }),
              re ? r(vt, {}, {
                default() {
                  return re({});
                }
              }) : Me()
            ];
          }
        })
      ]);
    };
    return g.renderVN = Ce, lt(() => e.config, () => {
      D(e.config);
    }), D(e.config), Xt("$xeFormView", g), g;
  },
  render() {
    return this.renderVN();
  }
});
function yN(e) {
  if (e) {
    const t = /* @__PURE__ */ new Date();
    let n = 0, o = 0, l = 0;
    if (i.isDate(e))
      n = e.getHours(), o = e.getMinutes(), l = e.getSeconds();
    else {
      e = i.toValueString(e);
      const a = e.match(/^(\d{1,2})(:(\d{1,2}))?(:(\d{1,2}))?/);
      a && (n = i.toNumber(a[1]), o = i.toNumber(a[3]), l = i.toNumber(a[5]));
    }
    return t.setHours(n), t.setMinutes(o), t.setSeconds(l), t;
  }
  return /* @__PURE__ */ new Date("");
}
function Op(e) {
  const t = e.getMonth();
  return t < 3 ? 1 : t < 6 ? 2 : t < 9 ? 3 : 4;
}
function Hs(e) {
  return i.isString(e) ? e.replace(/,/g, "") : e;
}
function Tp(e, t) {
  return /^-/.test("" + e) ? i.toFixed(i.ceil(e, t), t) : i.toFixed(i.floor(e, t), t);
}
const ur = 12, CN = 20, wN = 8, Dn = tt({
  name: "VxeInput",
  props: {
    modelValue: [String, Number, Date],
    immediate: { type: Boolean, default: !0 },
    name: String,
    type: { type: String, default: "text" },
    clearable: { type: Boolean, default: () => me().input.clearable },
    readonly: {
      type: Boolean,
      default: null
    },
    disabled: {
      type: Boolean,
      default: null
    },
    placeholder: {
      type: String,
      default: () => i.eqNull(me().input.placeholder) ? Te("vxe.base.pleaseInput") : me().input.placeholder
    },
    maxlength: [String, Number],
    autocomplete: { type: String, default: "off" },
    align: String,
    form: String,
    className: String,
    size: { type: String, default: () => me().input.size || me().size },
    multiple: Boolean,
    // text
    showWordCount: Boolean,
    countMethod: Function,
    // number、integer、float
    min: { type: [String, Number], default: null },
    max: { type: [String, Number], default: null },
    step: [String, Number],
    exponential: { type: Boolean, default: () => me().input.exponential },
    // number、integer、float、password
    controls: { type: Boolean, default: () => me().input.controls },
    // float
    digits: { type: [String, Number], default: () => me().input.digits },
    // date、week、month、quarter、year
    startDate: { type: [String, Number, Date], default: () => me().input.startDate },
    endDate: { type: [String, Number, Date], default: () => me().input.endDate },
    minDate: [String, Number, Date],
    maxDate: [String, Number, Date],
    // 已废弃 startWeek，被 startDay 替换
    startWeek: Number,
    startDay: { type: [String, Number], default: () => me().input.startDay },
    labelFormat: { type: String, default: () => me().input.labelFormat },
    valueFormat: { type: String, default: () => me().input.valueFormat },
    editable: { type: Boolean, default: !0 },
    festivalMethod: { type: Function, default: () => me().input.festivalMethod },
    disabledMethod: { type: Function, default: () => me().input.disabledMethod },
    // week
    selectDay: { type: [String, Number], default: () => me().input.selectDay },
    prefixIcon: String,
    suffixIcon: String,
    placement: String,
    transfer: {
      type: Boolean,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "input",
    "change",
    "keydown",
    "keyup",
    "wheel",
    "click",
    "focus",
    "blur",
    "clear",
    "search-click",
    "toggle-visible",
    "prev-number",
    "next-number",
    "prefix-click",
    "suffix-click",
    "date-prev",
    "date-today",
    "date-next"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = ut("$xeTable", null), a = ut("$xeForm", null), c = ut("xeFormItemInfo", null), p = i.uniqueId(), { computeSize: d } = Ln(e), s = Ot({
      inited: !1,
      panelIndex: 0,
      showPwd: !1,
      visiblePanel: !1,
      animatVisible: !1,
      panelStyle: null,
      panelPlacement: "",
      isActivated: !1,
      inputValue: e.modelValue,
      datetimePanelValue: null,
      datePanelValue: null,
      datePanelLabel: "",
      datePanelType: "day",
      selectMonth: null,
      currentDate: null
    }), f = Ie(), g = Ie(), D = Ie(), b = Ie(), x = Ie(), S = {
      refElem: f,
      refInput: g
    }, y = {
      xID: p,
      props: e,
      context: t,
      reactData: s,
      getRefMaps: () => S
    };
    let h = {};
    const O = (V, be) => {
      const { type: Re } = e;
      return Re === "time" ? yN(V) : i.toStringDate(V, be);
    }, E = Q(() => {
      const { transfer: V } = e;
      if (V === null) {
        const be = me().input.transfer;
        if (i.isBoolean(be))
          return be;
        if (l || a)
          return !0;
      }
      return V;
    }), T = Q(() => a ? a.props.readonly : !1), W = Q(() => {
      const { readonly: V } = e;
      return V;
    }), $ = Q(() => {
      const { disabled: V } = e;
      return V === null ? a ? a.props.disabled : !1 : V;
    }), I = Q(() => {
      const { type: V } = e;
      return V === "time" || V === "datetime";
    }), z = Q(() => ["number", "integer", "float"].indexOf(e.type) > -1), te = Q(() => i.getSize(s.inputValue)), Ce = Q(() => {
      const V = te.value;
      return e.maxlength && V > i.toNumber(e.maxlength);
    }), N = Q(() => I.value || ["date", "week", "month", "quarter", "year"].indexOf(e.type) > -1), F = Q(() => e.type === "password"), j = Q(() => e.type === "search"), ee = Q(() => i.toInteger(e.digits) || 1), oe = Q(() => {
      const { type: V } = e, be = ee.value, Re = e.step;
      return V === "integer" ? i.toInteger(Re) || 1 : V === "float" ? i.toNumber(Re) || 1 / Math.pow(10, be) : i.toNumber(Re) || 1;
    }), re = Q(() => {
      const { type: V } = e, be = z.value, Re = N.value, Je = F.value;
      return e.clearable && (Je || be || Re || V === "text" || V === "search");
    }), G = Q(() => e.startDate ? i.toStringDate(e.startDate) : null), J = Q(() => e.endDate ? i.toStringDate(e.endDate) : null), A = Q(() => ["date", "week", "month", "quarter", "year"].includes(e.type)), M = Q(() => {
      const { modelValue: V, multiple: be } = e, Re = N.value, Je = de.value;
      return be && V && Re ? i.toValueString(V).split(",").map((u) => {
        const m = O(u, Je);
        return i.isValidDate(m) ? m : null;
      }) : [];
    }), H = Q(() => {
      const V = M.value, be = de.value;
      return V.map((Re) => i.toDateString(Re, be));
    }), ne = Q(() => {
      const V = M.value, be = U.value;
      return V.map((Re) => i.toDateString(Re, be)).join(", ");
    }), de = Q(() => {
      const { type: V } = e;
      return V === "time" ? "HH:mm:ss" : e.valueFormat || (V === "datetime" ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd");
    }), ve = Q(() => {
      const { modelValue: V } = e, be = N.value, Re = de.value;
      let Je = null;
      if (V && be) {
        const u = O(V, Re);
        i.isValidDate(u) && (Je = u);
      }
      return Je;
    }), Oe = Q(() => {
      const V = G.value, { selectMonth: be } = s;
      return be && V ? be <= V : !1;
    }), Fe = Q(() => {
      const V = J.value, { selectMonth: be } = s;
      return be && V ? be >= V : !1;
    }), R = Q(() => {
      const { datetimePanelValue: V } = s;
      return V ? i.toDateString(V, "HH:mm:ss") : "";
    }), k = Q(() => {
      const V = ve.value, be = I.value;
      return V && be ? (V.getHours() * 3600 + V.getMinutes() * 60 + V.getSeconds()) * 1e3 : 0;
    }), U = Q(() => N.value ? e.labelFormat || Te(`vxe.input.date.labelFormat.${e.type}`) : null), _ = Q(() => {
      const { selectMonth: V, currentDate: be } = s, Re = [];
      if (V && be) {
        const Je = be.getFullYear(), u = V.getFullYear(), m = new Date(u - u % ur, 0, 1);
        for (let v = -4; v < ur + 4; v++) {
          const w = i.getWhatYear(m, v, "first"), C = w.getFullYear();
          Re.push({
            date: w,
            isCurrent: !0,
            isPrev: v < 0,
            isNow: Je === C,
            isNext: v >= ur,
            year: C
          });
        }
      }
      return Re;
    }), K = Q(() => {
      if (N.value) {
        const { datePanelType: be, selectMonth: Re } = s, Je = _.value;
        let u = "", m;
        return Re && (u = Re.getFullYear(), m = Re.getMonth() + 1), be === "quarter" ? Te("vxe.input.date.quarterLabel", [u]) : be === "month" ? Te("vxe.input.date.monthLabel", [u]) : be === "year" ? Je.length ? `${Je[0].year} - ${Je[Je.length - 1].year}` : "" : Te("vxe.input.date.dayLabel", [u, m ? Te(`vxe.input.date.m${m}`) : "-"]);
      }
      return "";
    }), Z = Q(() => {
      const { startDay: V, startWeek: be } = e;
      return i.toNumber(i.isNumber(V) || i.isString(V) ? V : be);
    }), ke = Q(() => {
      const V = [];
      if (N.value) {
        let Re = Z.value;
        V.push(Re);
        for (let Je = 0; Je < 6; Je++)
          Re >= 6 ? Re = 0 : Re++, V.push(Re);
      }
      return V;
    }), ye = Q(() => N.value ? ke.value.map((Re) => ({
      value: Re,
      label: Te(`vxe.input.date.weeks.w${Re}`)
    })) : []), Ee = Q(() => {
      if (N.value) {
        const be = ye.value;
        return [{ label: Te("vxe.input.date.weeks.w") }].concat(be);
      }
      return [];
    }), xe = Q(() => {
      const V = _.value;
      return i.chunk(V, 4);
    }), Le = Q(() => {
      const { selectMonth: V, currentDate: be } = s, Re = [];
      if (V && be) {
        const Je = be.getFullYear(), u = Op(be), m = i.getWhatYear(V, 0, "first"), v = m.getFullYear();
        for (let w = -2; w < wN - 2; w++) {
          const C = i.getWhatQuarter(m, w), P = C.getFullYear(), L = Op(C), X = P < v;
          Re.push({
            date: C,
            isPrev: X,
            isCurrent: P === v,
            isNow: P === Je && L === u,
            isNext: !X && P > v,
            quarter: L
          });
        }
      }
      return Re;
    }), je = Q(() => {
      const V = Le.value;
      return i.chunk(V, 2);
    }), Ye = Q(() => {
      const { selectMonth: V, currentDate: be } = s, Re = [];
      if (V && be) {
        const Je = be.getFullYear(), u = be.getMonth(), m = i.getWhatYear(V, 0, "first").getFullYear();
        for (let v = -4; v < CN - 4; v++) {
          const w = i.getWhatYear(V, 0, v), C = w.getFullYear(), P = w.getMonth(), L = C < m;
          Re.push({
            date: w,
            isPrev: L,
            isCurrent: C === m,
            isNow: C === Je && P === u,
            isNext: !L && C > m,
            month: P
          });
        }
      }
      return Re;
    }), fe = Q(() => {
      const V = Ye.value;
      return i.chunk(V, 4);
    }), ge = Q(() => {
      const { selectMonth: V, currentDate: be } = s, Re = [];
      if (V && be) {
        const Je = k.value, u = ke.value, m = be.getFullYear(), v = be.getMonth(), w = be.getDate(), C = V.getFullYear(), P = V.getMonth(), L = V.getDay(), X = -u.indexOf(L), ie = new Date(i.getWhatDay(V, X).getTime() + Je);
        for (let we = 0; we < 42; we++) {
          const De = i.getWhatDay(ie, we), _e = De.getFullYear(), Ae = De.getMonth(), Pe = De.getDate(), Qe = De < V;
          Re.push({
            date: De,
            isPrev: Qe,
            isCurrent: _e === C && Ae === P,
            isNow: _e === m && Ae === v && Pe === w,
            isNext: !Qe && P !== Ae,
            label: Pe
          });
        }
      }
      return Re;
    }), $e = Q(() => {
      const V = ge.value;
      return i.chunk(V, 7);
    }), Ve = Q(() => {
      const V = $e.value, be = Z.value;
      return V.map((Re) => {
        const Je = Re[0];
        return [{
          date: Je.date,
          isWeekNumber: !0,
          isPrev: !1,
          isCurrent: !1,
          isNow: !1,
          isNext: !1,
          label: i.getYearWeek(Je.date, be)
        }].concat(Re);
      });
    }), ce = Q(() => {
      const V = [];
      if (I.value)
        for (let Re = 0; Re < 24; Re++)
          V.push({
            value: Re,
            label: ("" + Re).padStart(2, "0")
          });
      return V;
    }), We = Q(() => {
      const V = [];
      if (I.value)
        for (let Re = 0; Re < 60; Re++)
          V.push({
            value: Re,
            label: ("" + Re).padStart(2, "0")
          });
      return V;
    }), Ge = Q(() => We.value), Ze = Q(() => {
      const { type: V, editable: be, multiple: Re } = e;
      return W.value || Re || !be || V === "week" || V === "quarter";
    }), pe = Q(() => {
      const { type: V } = e, { showPwd: be } = s, Re = z.value, Je = N.value, u = F.value;
      return Je || Re || u && be || V === "number" ? "text" : V;
    }), Y = Q(() => {
      const { placeholder: V } = e;
      return V ? Vn(V) : "";
    }), le = Q(() => {
      const { maxlength: V } = e;
      return z.value && !i.toNumber(V) ? 16 : V;
    }), he = Q(() => {
      const { type: V, immediate: be } = e;
      return be || !(V === "text" || V === "number" || V === "integer" || V === "float");
    }), He = Q(() => {
      const { type: V } = e, { inputValue: be } = s;
      return z.value ? V === "integer" ? i.toInteger(Hs(be)) : i.toNumber(Hs(be)) : 0;
    }), se = Q(() => {
      const { min: V } = e, { inputValue: be } = s, Re = z.value, Je = He.value;
      return (be || be === 0) && Re && V !== null ? Je <= i.toNumber(V) : !1;
    }), Se = Q(() => {
      const { max: V } = e, { inputValue: be } = s, Re = z.value, Je = He.value;
      return (be || be === 0) && Re && V !== null ? Je >= i.toNumber(V) : !1;
    }), ze = (V) => {
      const { type: be, exponential: Re } = e, Je = le.value, u = ee.value, m = be === "float" ? Tp(V, u) : i.toValueString(V);
      return Re && (V === m || i.toValueString(V).toLowerCase() === i.toNumber(m).toExponential()) ? V : m.slice(0, Je);
    }, Xe = (V) => {
      const { inputValue: be } = s;
      h.dispatchEvent(V.type, { value: be }, V);
    }, et = (V, be) => {
      s.inputValue = V, o("update:modelValue", V), h.dispatchEvent("input", { value: V }, be), i.toValueString(e.modelValue) !== V && (h.dispatchEvent("change", { value: V }, be), a && c && a.triggerItemEvent(be, c.itemConfig.field, V));
    }, at = (V, be) => {
      const Re = N.value, Je = he.value;
      s.inputValue = V, Re || (Je ? et(V, be) : h.dispatchEvent("input", { value: V }, be));
    }, ft = (V) => {
      const Re = V.target.value;
      at(Re, V);
    }, mt = (V) => {
      he.value || Xe(V);
    }, B = (V) => {
      s.isActivated = !0, N.value && xt(V), Xe(V);
    }, Mt = (V) => {
      if (!$.value) {
        const { inputValue: Re } = s;
        h.dispatchEvent("prefix-click", { value: Re }, V);
      }
    };
    let St;
    const gt = () => new Promise((V) => {
      s.visiblePanel = !1, St = window.setTimeout(() => {
        s.animatVisible = !1, V();
      }, 350);
    }), bt = (V, be) => {
      const { type: Re } = e, Je = z.value;
      N.value && gt(), (Je || ["text", "search", "password"].indexOf(Re) > -1) && focus(), et("", V), h.dispatchEvent("clear", { value: be }, V);
    }, Dt = (V) => {
      if (!$.value) {
        const { inputValue: Re } = s;
        h.dispatchEvent("suffix-click", { value: Re }, V);
      }
    }, Bt = (V) => {
      const { type: be } = e, { valueFormat: Re } = e, Je = U.value, u = Z.value;
      let m = null, v = "";
      if (V && (m = O(V, Re)), i.isValidDate(m)) {
        if (v = i.toDateString(m, Je, { firstDay: u }), Je && be === "week" && i.getWhatWeek(m, 0, u, u).getFullYear() < m.getFullYear()) {
          const C = Je.indexOf("yyyy");
          if (C > -1) {
            const P = Number(v.substring(C, C + 4));
            P && !isNaN(P) && (v = v.replace(`${P}`, `${P - 1}`));
          }
        }
      } else
        m = null;
      s.datePanelValue = m, s.datePanelLabel = v;
    }, Wt = () => {
      const V = N.value, { inputValue: be } = s;
      V && (Bt(be), s.inputValue = e.multiple ? ne.value : s.datePanelLabel);
    }, Pt = () => {
      const { type: V } = e, { inputValue: be } = s, Re = N.value, Je = ee.value;
      if (Re)
        Wt();
      else if (V === "float" && be) {
        const u = Tp(be, Je);
        be !== u && et(u, { type: "init" });
      }
    }, jt = (V) => e.max === null || i.toNumber(V) <= i.toNumber(e.max), At = (V) => e.min === null || i.toNumber(V) >= i.toNumber(e.min), Rn = () => {
      s.inputValue = e.multiple ? ne.value : s.datePanelLabel;
    }, _t = (V) => {
      const be = i.getWhatMonth(V, 0, "first");
      i.isEqual(be, s.selectMonth) || (s.selectMonth = be);
    }, Ht = (V) => {
      const { modelValue: be, multiple: Re } = e, { datetimePanelValue: Je } = s, u = I.value, m = de.value, v = Z.value;
      if (e.type === "week") {
        const C = i.toNumber(e.selectDay);
        V = i.getWhatWeek(V, 0, C, v);
      } else u && (V.setHours(Je.getHours()), V.setMinutes(Je.getMinutes()), V.setSeconds(Je.getSeconds()));
      const w = i.toDateString(V, m, { firstDay: v });
      if (_t(V), Re) {
        const C = H.value;
        if (u) {
          const P = [...M.value], L = [], X = i.findIndexOf(P, (ie) => i.isDateSame(V, ie, "yyyyMMdd"));
          X === -1 ? P.push(V) : P.splice(X, 1), P.forEach((ie) => {
            ie && (ie.setHours(Je.getHours()), ie.setMinutes(Je.getMinutes()), ie.setSeconds(Je.getSeconds()), L.push(ie));
          }), et(L.map((ie) => i.toDateString(ie, m)).join(","), { type: "update" });
        } else
          C.some((P) => i.isEqual(P, w)) ? et(C.filter((P) => !i.isEqual(P, w)).join(","), { type: "update" }) : et(C.concat([w]).join(","), { type: "update" });
      } else
        i.isEqual(be, w) || et(w, { type: "update" });
    }, Kt = () => {
      const { type: V, min: be, max: Re, exponential: Je } = e, { inputValue: u, datetimePanelValue: m } = s, v = z.value, w = N.value, C = U.value;
      if (!Ze.value) {
        if (v) {
          if (u) {
            let L = V === "integer" ? i.toInteger(Hs(u)) : i.toNumber(Hs(u));
            if (At(L) ? jt(L) || (L = Re) : L = be, Je) {
              const X = i.toValueString(u).toLowerCase();
              X === i.toNumber(L).toExponential() && (L = X);
            }
            et(ze(L), { type: "check" });
          }
        } else if (w)
          if (u) {
            let L = O(u, C);
            if (i.isValidDate(L))
              if (V === "time")
                L = i.toDateString(L, C), u !== L && et(L, { type: "check" }), s.inputValue = L;
              else {
                let X = !1;
                const ie = Z.value;
                if (V === "datetime") {
                  const we = ve.value;
                  (u !== i.toDateString(we, C) || u !== i.toDateString(L, C)) && (X = !0, m.setHours(L.getHours()), m.setMinutes(L.getMinutes()), m.setSeconds(L.getSeconds()));
                } else
                  X = !0;
                s.inputValue = i.toDateString(L, C, { firstDay: ie }), X && Ht(L);
              }
            else
              Rn();
          } else
            et("", { type: "check" });
      }
    }, pn = (V) => {
      const { inputValue: be } = s;
      he.value || et(be, V), Kt(), s.visiblePanel || (s.isActivated = !1), h.dispatchEvent("blur", { value: be }, V);
    }, Tn = (V) => {
      const { showPwd: be } = s, Re = $.value, Je = W.value;
      !Re && !Je && (s.showPwd = !be), h.dispatchEvent("toggle-visible", { visible: s.showPwd }, V);
    }, mn = (V) => {
      h.dispatchEvent("search-click", {}, V);
    }, hn = (V, be) => {
      const { min: Re, max: Je, type: u } = e, { inputValue: m } = s, v = oe.value, w = u === "integer" ? i.toInteger(Hs(m)) : i.toNumber(Hs(m)), C = V ? i.add(w, v) : i.subtract(w, v);
      let P;
      At(C) ? jt(C) ? P = C : P = Je : P = Re, at(ze(P), be);
    };
    let Pn;
    const cn = (V) => {
      const be = $.value, Re = W.value, Je = se.value;
      clearTimeout(Pn), !be && !Re && !Je && hn(!1, V), h.dispatchEvent("next-number", {}, V);
    }, Qt = (V) => {
      Pn = window.setTimeout(() => {
        cn(V), Qt(V);
      }, 60);
    }, wn = (V) => {
      const be = $.value, Re = W.value, Je = Se.value;
      clearTimeout(Pn), !be && !Re && !Je && hn(!0, V), h.dispatchEvent("prev-number", {}, V);
    }, Zt = (V) => {
      const be = it.hasKey(V, Vt.ARROW_UP), Re = it.hasKey(V, Vt.ARROW_DOWN);
      (be || Re) && (V.preventDefault(), be ? wn(V) : cn(V));
    }, _n = (V) => {
      const { exponential: be, controls: Re } = e;
      if (z.value) {
        const u = V.ctrlKey, m = V.shiftKey, v = V.altKey, w = V.keyCode;
        !u && !m && !v && (it.hasKey(V, Vt.SPACEBAR) || (!be || w !== 69) && w >= 65 && w <= 90 || w >= 186 && w <= 188 || w >= 191) && V.preventDefault(), Re && Zt(V);
      }
      Xe(V);
    }, Yo = (V) => {
      Xe(V);
    }, Zn = () => {
      clearTimeout(Pn);
    }, Tr = (V) => {
      Pn = window.setTimeout(() => {
        wn(V), Tr(V);
      }, 60);
    }, $o = (V) => {
      if (Zn(), V.button === 0) {
        const be = Li(V.currentTarget, "is--prev");
        be ? wn(V) : cn(V), Pn = window.setTimeout(() => {
          be ? Tr(V) : Qt(V);
        }, 500);
      }
    }, Ao = (V) => {
      if (z.value && e.controls && s.isActivated) {
        const Re = V.deltaY;
        Re > 0 ? cn(V) : Re < 0 && wn(V), V.preventDefault();
      }
      Xe(V);
    }, _o = (V, be) => {
      s.selectMonth = i.getWhatMonth(V, be, "first");
    }, fo = () => {
      const V = i.getWhatDay(Date.now(), 0, "first");
      s.currentDate = V, _o(V, 0);
    }, Wo = () => {
      let { datePanelType: V } = s;
      V === "month" || V === "quarter" ? V = "year" : V = "month", s.datePanelType = V;
    }, zn = (V) => {
      const { type: be } = e, { datePanelType: Re, selectMonth: Je } = s;
      Oe.value || (be === "year" ? s.selectMonth = i.getWhatYear(Je, -ur, "first") : be === "month" || be === "quarter" ? Re === "year" ? s.selectMonth = i.getWhatYear(Je, -ur, "first") : s.selectMonth = i.getWhatYear(Je, -1, "first") : Re === "year" ? s.selectMonth = i.getWhatYear(Je, -ur, "first") : Re === "month" ? s.selectMonth = i.getWhatYear(Je, -1, "first") : s.selectMonth = i.getWhatMonth(Je, -1, "first"), h.dispatchEvent("date-prev", { type: be }, V));
    }, Ro = (V) => {
      fo(), e.multiple || (Ht(s.currentDate), gt()), h.dispatchEvent("date-today", { type: e.type }, V);
    }, Bo = (V) => {
      const { type: be } = e, { datePanelType: Re, selectMonth: Je } = s;
      Fe.value || (be === "year" ? s.selectMonth = i.getWhatYear(Je, ur, "first") : be === "month" || be === "quarter" ? Re === "year" ? s.selectMonth = i.getWhatYear(Je, ur, "first") : s.selectMonth = i.getWhatYear(Je, 1, "first") : Re === "year" ? s.selectMonth = i.getWhatYear(Je, ur, "first") : Re === "month" ? s.selectMonth = i.getWhatYear(Je, 1, "first") : s.selectMonth = i.getWhatMonth(Je, 1, "first"), h.dispatchEvent("date-next", { type: be }, V));
    }, En = (V) => {
      const { disabledMethod: be } = e, { datePanelType: Re } = s;
      return be && be({ type: Re, viewType: Re, date: V.date, $input: y });
    }, lo = (V) => {
      const { type: be, multiple: Re } = e, { datePanelType: Je } = s;
      be === "month" ? Je === "year" ? (s.datePanelType = "month", _t(V)) : (Ht(V), Re || gt()) : be === "year" ? (Ht(V), Re || gt()) : be === "quarter" ? Je === "year" ? (s.datePanelType = "quarter", _t(V)) : (Ht(V), Re || gt()) : Je === "month" ? (s.datePanelType = be === "week" ? be : "day", _t(V)) : Je === "year" ? (s.datePanelType = "month", _t(V)) : (Ht(V), be === "datetime" || Re || gt());
    }, Jn = (V) => {
      En(V) || lo(V.date);
    }, Xo = (V) => {
      En({ date: V }) || (ge.value.some((Re) => i.isDateSame(Re.date, V, "yyyyMMdd")) || _t(V), Bt(V));
    }, po = (V) => {
      En({ date: V }) || (_.value.some((Re) => i.isDateSame(Re.date, V, "yyyy")) || _t(V), Bt(V));
    }, sr = (V) => {
      En({ date: V }) || (Le.value.some((Re) => i.isDateSame(Re.date, V, "yyyyq")) || _t(V), Bt(V));
    }, Po = (V) => {
      En({ date: V }) || (Ye.value.some((Re) => i.isDateSame(Re.date, V, "yyyyMM")) || _t(V), Bt(V));
    }, io = (V) => {
      if (!En(V)) {
        const { datePanelType: be } = s;
        be === "month" ? Po(V.date) : be === "quarter" ? sr(V.date) : be === "year" ? po(V.date) : Xo(V.date);
      }
    }, jn = (V) => {
      if (V) {
        const be = V.offsetHeight, Re = V.parentNode;
        Re.scrollTop = V.offsetTop - be * 4;
      }
    }, Sn = (V) => {
      s.datetimePanelValue = new Date(s.datetimePanelValue.getTime()), jn(V.currentTarget);
    }, yo = (V, be) => {
      s.datetimePanelValue.setHours(be.value), Sn(V);
    }, tn = () => {
      const { multiple: V } = e, { datetimePanelValue: be } = s, Re = ve.value, Je = I.value;
      if (Je) {
        const u = de.value;
        if (V) {
          const m = H.value;
          if (Je) {
            const v = [...M.value], w = [];
            v.forEach((C) => {
              C && (C.setHours(be.getHours()), C.setMinutes(be.getMinutes()), C.setSeconds(be.getSeconds()), w.push(C));
            }), et(w.map((C) => i.toDateString(C, u)).join(","), { type: "update" });
          } else
            et(m.join(","), { type: "update" });
        } else
          Ht(Re || s.currentDate);
      }
      gt();
    }, Qn = (V, be) => {
      s.datetimePanelValue.setMinutes(be.value), Sn(V);
    }, ao = (V, be) => {
      s.datetimePanelValue.setSeconds(be.value), Sn(V);
    }, q = (V) => {
      const { isActivated: be, datePanelValue: Re, datePanelType: Je } = s;
      if (be) {
        V.preventDefault();
        const u = it.hasKey(V, Vt.ARROW_LEFT), m = it.hasKey(V, Vt.ARROW_UP), v = it.hasKey(V, Vt.ARROW_RIGHT), w = it.hasKey(V, Vt.ARROW_DOWN);
        if (Je === "year") {
          let C = i.getWhatYear(Re || Date.now(), 0, "first");
          u ? C = i.getWhatYear(C, -1) : m ? C = i.getWhatYear(C, -4) : v ? C = i.getWhatYear(C, 1) : w && (C = i.getWhatYear(C, 4)), po(C);
        } else if (Je === "quarter") {
          let C = i.getWhatQuarter(Re || Date.now(), 0, "first");
          u ? C = i.getWhatQuarter(C, -1) : m ? C = i.getWhatQuarter(C, -2) : v ? C = i.getWhatQuarter(C, 1) : w && (C = i.getWhatQuarter(C, 2)), sr(C);
        } else if (Je === "month") {
          let C = i.getWhatMonth(Re || Date.now(), 0, "first");
          u ? C = i.getWhatMonth(C, -1) : m ? C = i.getWhatMonth(C, -4) : v ? C = i.getWhatMonth(C, 1) : w && (C = i.getWhatMonth(C, 4)), Po(C);
        } else {
          let C = Re || i.getWhatDay(Date.now(), 0, "first");
          const P = Z.value;
          u ? C = i.getWhatDay(C, -1) : m ? C = i.getWhatWeek(C, -1, P) : v ? C = i.getWhatDay(C, 1) : w && (C = i.getWhatWeek(C, 1, P)), Xo(C);
        }
      }
    }, Ne = (V) => {
      const { isActivated: be } = s;
      if (be) {
        const Re = it.hasKey(V, Vt.PAGE_UP);
        V.preventDefault(), Re ? zn(V) : Bo(V);
      }
    }, qe = () => {
      const { type: V } = e, be = I.value, Re = ve.value;
      ["year", "quarter", "month", "week"].indexOf(V) > -1 ? s.datePanelType = V : s.datePanelType = "day", s.currentDate = i.getWhatDay(Date.now(), 0, "first"), Re ? (_o(Re, 0), Bt(Re)) : fo(), be && (s.datetimePanelValue = s.datePanelValue || i.getWhatDay(Date.now(), 0, "first"), ae(() => {
        const Je = x.value;
        i.arrayEach(Je.querySelectorAll("li.is--selected"), jn);
      }));
    }, rt = () => {
      s.panelIndex < ss() && (s.panelIndex = Cr());
    }, Ct = () => ae().then(() => {
      const { placement: V } = e, { panelIndex: be } = s, Re = g.value, Je = D.value, u = E.value;
      if (Re && Je) {
        const m = Re.offsetHeight, v = Re.offsetWidth, w = Je.offsetHeight, C = Je.offsetWidth, P = 5, L = {
          zIndex: be
        }, { boundingTop: X, boundingLeft: ie, visibleHeight: we, visibleWidth: De } = Ul(Re);
        let _e = "bottom";
        if (u) {
          let Ae = ie, Pe = X + m;
          V === "top" ? (_e = "top", Pe = X - w) : V || (Pe + w + P > we && (_e = "top", Pe = X - w), Pe < P && (_e = "bottom", Pe = X + m)), Ae + C + P > De && (Ae -= Ae + C + P - De), Ae < P && (Ae = P), Object.assign(L, {
            left: `${Ae}px`,
            top: `${Pe}px`,
            minWidth: `${v}px`
          });
        } else
          V === "top" ? (_e = "top", L.bottom = `${m}px`) : V || (L.top = `${m}px`, X + m + w > we && X - m - w > P && (_e = "top", L.top = "", L.bottom = `${m}px`));
        return s.panelStyle = L, s.panelPlacement = _e, ae();
      }
    }), ct = () => {
      const { visiblePanel: V } = s, be = $.value, Re = N.value;
      return !be && !V ? (s.inited || (s.inited = !0), clearTimeout(St), s.isActivated = !0, s.animatVisible = !0, Re && qe(), setTimeout(() => {
        s.visiblePanel = !0;
      }, 10), rt(), Ct()) : ae();
    }, xt = (V) => {
      W.value || (V.preventDefault(), ct());
    }, Tt = (V) => {
      Xe(V);
    }, Ke = (V) => {
      const { visiblePanel: be, isActivated: Re } = s, Je = N.value, u = f.value, m = b.value;
      !$.value && Re && (s.isActivated = Bn(V, u).flag || Bn(V, m).flag, s.isActivated || (Je ? be && (gt(), Kt()) : Kt()));
    }, yt = (V) => {
      const { clearable: be } = e, { visiblePanel: Re } = s, Je = $.value, u = N.value;
      if (!Je) {
        const m = it.hasKey(V, Vt.TAB), v = it.hasKey(V, Vt.DELETE), w = it.hasKey(V, Vt.ESCAPE), C = it.hasKey(V, Vt.ENTER), P = it.hasKey(V, Vt.ARROW_LEFT), L = it.hasKey(V, Vt.ARROW_UP), X = it.hasKey(V, Vt.ARROW_RIGHT), ie = it.hasKey(V, Vt.ARROW_DOWN), we = it.hasKey(V, Vt.PAGE_UP), De = it.hasKey(V, Vt.PAGE_DOWN), _e = P || L || X || ie;
        let Ae = s.isActivated;
        m ? (Ae && Kt(), Ae = !1, s.isActivated = Ae) : _e ? u && Ae && (Re ? q(V) : (L || ie) && xt(V)) : C ? u && (Re ? s.datePanelValue ? lo(s.datePanelValue) : gt() : Ae && xt(V)) : (we || De) && u && Ae && Ne(V), m || w ? Re && gt() : v && be && Ae && bt(V, null);
      }
    }, sn = (V) => {
      const { visiblePanel: be } = s;
      if (!$.value && be) {
        const Je = b.value;
        Bn(V, Je).flag ? Ct() : (gt(), Kt());
      }
    }, Gt = () => {
      const { isActivated: V, visiblePanel: be } = s;
      be ? (gt(), Kt()) : V && Kt();
    }, gn = (V, be) => {
      const { festivalMethod: Re } = e;
      if (Re) {
        const { datePanelType: Je } = s, u = Re({ type: Je, viewType: Je, date: V.date, $input: y }), m = u ? i.isString(u) ? { label: u } : u : {}, v = m.extra ? i.isString(m.extra) ? { label: m.extra } : m.extra : null, w = [
          r("span", {
            class: ["vxe-input--date-label", {
              "is-notice": m.notice
            }]
          }, v && v.label ? [
            r("span", be),
            r("span", {
              class: ["vxe-input--date-label--extra", v.important ? "is-important" : "", v.className],
              style: v.style
            }, i.toValueString(v.label))
          ] : be)
        ], C = m.label;
        if (C) {
          const P = i.toValueString(C).split(",");
          w.push(r("span", {
            class: ["vxe-input--date-festival", m.important ? "is-important" : "", m.className],
            style: m.style
          }, [
            P.length > 1 ? r("span", {
              class: ["vxe-input--date-festival--overlap", `overlap--${P.length}`]
            }, P.map((L) => r("span", L.substring(0, 3)))) : r("span", {
              class: "vxe-input--date-festival--label"
            }, P[0].substring(0, 3))
          ]));
        }
        return w;
      }
      return be;
    }, mo = () => {
      const { multiple: V } = e, { datePanelType: be, datePanelValue: Re } = s, Je = ve.value, u = ye.value, m = $e.value, v = M.value, w = "yyyyMMdd";
      return [
        r("table", {
          class: `vxe-input--date-${be}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          r("thead", [
            r("tr", u.map((C) => r("th", C.label)))
          ]),
          r("tbody", m.map((C) => r("tr", C.map((P) => r("td", {
            class: {
              "is--prev": P.isPrev,
              "is--current": P.isCurrent,
              "is--now": P.isNow,
              "is--next": P.isNext,
              "is--disabled": En(P),
              "is--selected": V ? v.some((L) => i.isDateSame(L, P.date, w)) : i.isDateSame(Je, P.date, w),
              "is--hover": i.isDateSame(Re, P.date, w)
            },
            onClick: () => Jn(P),
            onMouseenter: () => io(P)
          }, gn(P, P.label))))))
        ])
      ];
    }, to = () => {
      const { multiple: V } = e, { datePanelType: be, datePanelValue: Re } = s, Je = ve.value, u = Ee.value, m = Ve.value, v = M.value, w = "yyyyMMdd";
      return [
        r("table", {
          class: `vxe-input--date-${be}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          r("thead", [
            r("tr", u.map((C) => r("th", C.label)))
          ]),
          r("tbody", m.map((C) => {
            const P = V ? C.some((X) => v.some((ie) => i.isDateSame(ie, X.date, w))) : C.some((X) => i.isDateSame(Je, X.date, w)), L = C.some((X) => i.isDateSame(Re, X.date, w));
            return r("tr", C.map((X) => r("td", {
              class: {
                "is--prev": X.isPrev,
                "is--current": X.isCurrent,
                "is--now": X.isNow,
                "is--next": X.isNext,
                "is--disabled": En(X),
                "is--selected": P,
                "is--hover": L
              },
              // event
              onClick: () => Jn(X),
              onMouseenter: () => io(X)
            }, gn(X, X.label))));
          }))
        ])
      ];
    }, qn = () => {
      const { multiple: V } = e, { datePanelType: be, datePanelValue: Re } = s, Je = ve.value, u = fe.value, m = M.value, v = "yyyyMM";
      return [
        r("table", {
          class: `vxe-input--date-${be}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          r("tbody", u.map((w) => r("tr", w.map((C) => r("td", {
            class: {
              "is--prev": C.isPrev,
              "is--current": C.isCurrent,
              "is--now": C.isNow,
              "is--next": C.isNext,
              "is--disabled": En(C),
              "is--selected": V ? m.some((P) => i.isDateSame(P, C.date, v)) : i.isDateSame(Je, C.date, v),
              "is--hover": i.isDateSame(Re, C.date, v)
            },
            onClick: () => Jn(C),
            onMouseenter: () => io(C)
          }, gn(C, Te(`vxe.input.date.months.m${C.month}`)))))))
        ])
      ];
    }, Mn = () => {
      const { multiple: V } = e, { datePanelType: be, datePanelValue: Re } = s, Je = ve.value, u = je.value, m = M.value, v = "yyyyq";
      return [
        r("table", {
          class: `vxe-input--date-${be}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          r("tbody", u.map((w) => r("tr", w.map((C) => r("td", {
            class: {
              "is--prev": C.isPrev,
              "is--current": C.isCurrent,
              "is--now": C.isNow,
              "is--next": C.isNext,
              "is--disabled": En(C),
              "is--selected": V ? m.some((P) => i.isDateSame(P, C.date, v)) : i.isDateSame(Je, C.date, v),
              "is--hover": i.isDateSame(Re, C.date, v)
            },
            onClick: () => Jn(C),
            onMouseenter: () => io(C)
          }, gn(C, Te(`vxe.input.date.quarters.q${C.quarter}`)))))))
        ])
      ];
    }, Co = () => {
      const { multiple: V } = e, { datePanelType: be, datePanelValue: Re } = s, Je = ve.value, u = xe.value, m = M.value, v = "yyyy";
      return [
        r("table", {
          class: `vxe-input--date-${be}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          r("tbody", u.map((w) => r("tr", w.map((C) => r("td", {
            class: {
              "is--prev": C.isPrev,
              "is--current": C.isCurrent,
              "is--now": C.isNow,
              "is--next": C.isNext,
              "is--disabled": En(C),
              "is--selected": V ? m.some((P) => i.isDateSame(P, C.date, v)) : i.isDateSame(Je, C.date, v),
              "is--hover": i.isDateSame(Re, C.date, v)
            },
            onClick: () => Jn(C),
            onMouseenter: () => io(C)
          }, gn(C, C.year))))))
        ])
      ];
    }, Rs = () => {
      const { datePanelType: V } = s;
      switch (V) {
        case "week":
          return to();
        case "month":
          return qn();
        case "quarter":
          return Mn();
        case "year":
          return Co();
      }
      return mo();
    }, Hi = () => {
      const { multiple: V } = e, { datePanelType: be } = s, Re = Oe.value, Je = Fe.value, u = K.value;
      return [
        r("div", {
          class: "vxe-input--date-picker-header"
        }, [
          r("div", {
            class: "vxe-input--date-picker-type-wrapper"
          }, [
            be === "year" ? r("span", {
              class: "vxe-input--date-picker-label"
            }, u) : r("span", {
              class: "vxe-input--date-picker-btn",
              onClick: Wo
            }, u)
          ]),
          r("div", {
            class: "vxe-input--date-picker-btn-wrapper"
          }, [
            r("span", {
              class: ["vxe-input--date-picker-btn vxe-input--date-picker-prev-btn", {
                "is--disabled": Re
              }],
              onClick: zn
            }, [
              r("i", {
                class: "vxe-icon-caret-left"
              })
            ]),
            r("span", {
              class: "vxe-input--date-picker-btn vxe-input--date-picker-current-btn",
              onClick: Ro
            }, [
              r("i", {
                class: "vxe-icon-dot"
              })
            ]),
            r("span", {
              class: ["vxe-input--date-picker-btn vxe-input--date-picker-next-btn", {
                "is--disabled": Je
              }],
              onClick: Bo
            }, [
              r("i", {
                class: "vxe-icon-caret-right"
              })
            ]),
            V && A.value ? r("span", {
              class: "vxe-input--date-picker-btn vxe-input--date-picker-confirm-btn"
            }, [
              r("button", {
                class: "vxe-input--date-picker-confirm",
                type: "button",
                onClick: tn
              }, Te("vxe.button.confirm"))
            ]) : null
          ])
        ]),
        r("div", {
          class: "vxe-input--date-picker-body"
        }, Rs())
      ];
    }, zi = () => {
      const { datetimePanelValue: V } = s, be = R.value, Re = ce.value, Je = We.value, u = Ge.value;
      return [
        r("div", {
          class: "vxe-input--time-picker-header"
        }, [
          r("span", {
            class: "vxe-input--time-picker-title"
          }, be),
          r("button", {
            class: "vxe-input--time-picker-confirm",
            type: "button",
            onClick: tn
          }, Te("vxe.button.confirm"))
        ]),
        r("div", {
          ref: x,
          class: "vxe-input--time-picker-body"
        }, [
          r("ul", {
            class: "vxe-input--time-picker-hour-list"
          }, Re.map((m, v) => r("li", {
            key: v,
            class: {
              "is--selected": V && V.getHours() === m.value
            },
            onClick: (w) => yo(w, m)
          }, m.label))),
          r("ul", {
            class: "vxe-input--time-picker-minute-list"
          }, Je.map((m, v) => r("li", {
            key: v,
            class: {
              "is--selected": V && V.getMinutes() === m.value
            },
            onClick: (w) => Qn(w, m)
          }, m.label))),
          r("ul", {
            class: "vxe-input--time-picker-second-list"
          }, u.map((m, v) => r("li", {
            key: v,
            class: {
              "is--selected": V && V.getSeconds() === m.value
            },
            onClick: (w) => ao(w, m)
          }, m.label)))
        ])
      ];
    }, Ps = () => {
      const { type: V } = e, { inited: be, animatVisible: Re, visiblePanel: Je, panelPlacement: u, panelStyle: m } = s, v = d.value, w = E.value, C = N.value, P = [];
      return C ? (V === "datetime" ? P.push(r("div", {
        key: V,
        ref: b,
        class: "vxe-input--panel-layout-wrapper"
      }, [
        r("div", {
          class: "vxe-input--panel-left-wrapper"
        }, Hi()),
        r("div", {
          class: "vxe-input--panel-right-wrapper"
        }, zi())
      ])) : V === "time" ? P.push(r("div", {
        key: V,
        ref: b,
        class: "vxe-input--panel-wrapper"
      }, zi())) : P.push(r("div", {
        key: V || "default",
        ref: b,
        class: "vxe-input--panel-wrapper"
      }, Hi())), r(ts, {
        to: "body",
        disabled: w ? !be : !0
      }, [
        r("div", {
          ref: D,
          class: ["vxe-table--ignore-clear vxe-input--panel", `type--${V}`, {
            [`size--${v}`]: v,
            "is--transfer": w,
            "animat--leave": Re,
            "animat--enter": Je
          }],
          placement: u,
          style: m
        }, P)
      ])) : Me();
    }, Kl = () => {
      const V = Se.value, be = se.value;
      return r("div", {
        class: "vxe-input--control-icon"
      }, [
        r("div", {
          class: "vxe-input--number-icon"
        }, [
          r("div", {
            class: ["vxe-input--number-btn is--prev", {
              "is--disabled": V
            }],
            onMousedown: $o,
            onMouseup: Zn,
            onMouseleave: Zn
          }, [
            r("i", {
              class: dt().NUMBER_INPUT_PREV_NUM
            })
          ]),
          r("div", {
            class: ["vxe-input--number-btn is--next", {
              "is--disabled": be
            }],
            onMousedown: $o,
            onMouseup: Zn,
            onMouseleave: Zn
          }, [
            r("i", {
              class: dt().NUMBER_INPUT_NEXT_NUM
            })
          ])
        ])
      ]);
    }, ji = () => r("div", {
      class: "vxe-input--control-icon",
      onClick: xt
    }, [
      r("i", {
        class: ["vxe-input--date-picker-icon", dt().DATE_PICKER_DATE]
      })
    ]), Ha = () => r("div", {
      class: "vxe-input--control-icon",
      onClick: mn
    }, [
      r("i", {
        class: ["vxe-input--search-icon", dt().INPUT_SEARCH]
      })
    ]), Yl = () => {
      const { showPwd: V } = s;
      return r("div", {
        class: "vxe-input--control-icon",
        onClick: Tn
      }, [
        r("i", {
          class: ["vxe-input--password-icon", V ? dt().PASSWORD_INPUT_SHOW_PWD : dt().PASSWORD_INPUT_HIDE_PWD]
        })
      ]);
    }, Xl = () => {
      const { prefixIcon: V } = e, be = n.prefix;
      return be || V ? r("div", {
        class: "vxe-input--prefix",
        onClick: Mt
      }, [
        r("div", {
          class: "vxe-input--prefix-icon"
        }, be ? It(be({})) : [
          r("i", {
            class: V
          })
        ])
      ]) : null;
    }, Zl = () => {
      const { suffixIcon: V } = e, { inputValue: be } = s, Re = n.suffix, Je = $.value, u = z.value, m = N.value, v = F.value, w = j.value, C = re.value, P = v || u || m || w;
      return C || Re || V || P ? r("div", {
        class: ["vxe-input--suffix", {
          "is--clear": C && !Je && !(be === "" || i.eqNull(be))
        }]
      }, [
        C ? r("div", {
          class: "vxe-input--clear-icon",
          onClick: bt
        }, [
          r("i", {
            class: dt().INPUT_CLEAR
          })
        ]) : Me(),
        P ? Jl() : Me(),
        Re || V ? r("div", {
          class: "vxe-input--suffix-icon",
          onClick: Dt
        }, Re ? It(Re({})) : [
          r("i", {
            class: V
          })
        ]) : Me()
      ]) : null;
    }, Jl = () => {
      const { controls: V } = e, be = z.value, Re = N.value, Je = F.value, u = j.value;
      return Je ? Yl() : be && V ? Kl() : Re ? ji() : u ? Ha() : Me();
    };
    h = {
      dispatchEvent(V, be, Re) {
        o(V, zt(Re, { $input: y }, be));
      },
      focus() {
        const V = g.value;
        return s.isActivated = !0, V.focus(), ae();
      },
      blur() {
        return g.value.blur(), s.isActivated = !1, ae();
      },
      select() {
        return g.value.select(), s.isActivated = !1, ae();
      },
      showPanel: ct,
      hidePanel: gt,
      updatePlacement: Ct
    }, Object.assign(y, h), lt(() => e.modelValue, (V) => {
      s.inputValue = V, Wt();
    }), lt(() => e.type, () => {
      Object.assign(s, {
        inputValue: e.modelValue,
        datetimePanelValue: null,
        datePanelValue: null,
        datePanelLabel: "",
        datePanelType: "day",
        selectMonth: null,
        currentDate: null
      }), Pt();
    }), lt(U, () => {
      N.value && (Bt(s.datePanelValue), s.inputValue = e.multiple ? ne.value : s.datePanelLabel);
    }), ae(() => {
      it.on(y, "mousewheel", sn), it.on(y, "mousedown", Ke), it.on(y, "keydown", yt), it.on(y, "blur", Gt);
    }), On(() => {
      Zn(), it.off(y, "mousewheel"), it.off(y, "mousedown"), it.off(y, "keydown"), it.off(y, "blur");
    }), Pt();
    const Ql = () => {
      const { className: V, controls: be, type: Re, align: Je, showWordCount: u, countMethod: m, name: v, autocomplete: w } = e, { inputValue: C, visiblePanel: P, isActivated: L } = s, X = d.value, ie = $.value;
      if (T.value)
        return r("div", {
          ref: f,
          class: ["vxe-input--readonly", `type--${Re}`, V]
        }, C);
      const De = Ce.value, _e = te.value, Ae = Ze.value, Pe = le.value, Qe = pe.value, Ue = Y.value, nt = re.value, Be = u && ["text", "search"].includes(Re), ot = Xl(), ht = Zl();
      return r("div", {
        ref: f,
        class: ["vxe-input", `type--${Re}`, V, {
          [`size--${X}`]: X,
          [`is--${Je}`]: Je,
          "is--controls": be,
          "is--prefix": !!ot,
          "is--suffix": !!ht,
          "is--visible": P,
          "is--count": Be,
          "is--disabled": ie,
          "is--active": L,
          "show--clear": nt && !ie && !(C === "" || i.eqNull(C))
        }]
      }, [
        ot || Me(),
        r("div", {
          class: "vxe-input--wrapper"
        }, [
          r("input", {
            ref: g,
            class: "vxe-input--inner",
            value: C,
            name: v,
            type: Qe,
            placeholder: Ue,
            maxlength: Pe,
            readonly: Ae,
            disabled: ie,
            autocomplete: w,
            onKeydown: _n,
            onKeyup: Yo,
            onWheel: Ao,
            onClick: Tt,
            onInput: ft,
            onChange: mt,
            onFocus: B,
            onBlur: pn
          })
        ]),
        ht || Me(),
        // 下拉面板
        Ps(),
        // 字数统计
        Be ? r("span", {
          class: ["vxe-input--count", {
            "is--error": De
          }]
        }, m ? `${m({ value: C })}` : `${_e}${Pe ? `/${Pe}` : ""}`) : Me()
      ]);
    };
    return y.renderVN = Ql, y;
  },
  render() {
    return this.renderVN();
  }
}), Ds = tt({
  name: "VxeRadio",
  props: {
    modelValue: [String, Number, Boolean],
    label: { type: [String, Number, Boolean], default: null },
    title: [String, Number],
    content: [String, Number],
    disabled: {
      type: Boolean,
      default: null
    },
    name: String,
    strict: { type: Boolean, default: () => me().radio.strict },
    size: { type: String, default: () => me().radio.size || me().size }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = ut("$xeForm", null), a = ut("xeFormItemInfo", null), c = ut("$xeRadioGroup", null), d = {
      xID: i.uniqueId(),
      props: e,
      context: t
    }, { computeSize: s } = Ln(e);
    let f = {};
    const g = Q(() => {
      const { disabled: E } = e;
      if (E === null && c) {
        const { computeIsDisabled: T } = c.getComputeMaps();
        return T.value;
      }
      return E;
    }), D = Q(() => c ? c.name : e.name), b = Q(() => c ? c.props.strict : e.strict), x = Q(() => {
      const { modelValue: E, label: T } = e;
      return c ? c.props.modelValue === T : E === T;
    }), S = (E, T) => {
      c ? c.handleChecked({ label: E }, T) : (o("update:modelValue", E), f.dispatchEvent("change", { label: E }, T), l && a && l.triggerItemEvent(T, a.itemConfig.field, E));
    }, y = (E) => {
      g.value || S(e.label, E);
    }, h = (E) => {
      const T = g.value, W = b.value;
      !T && !W && e.label === (c ? c.props.modelValue : e.modelValue) && S(null, E);
    };
    f = {
      dispatchEvent(E, T, W) {
        o(E, zt(W, { $radio: d }, T));
      }
    }, Object.assign(d, f);
    const O = () => {
      const E = s.value, T = g.value, W = D.value, $ = x.value;
      return r("label", {
        class: ["vxe-radio", {
          [`size--${E}`]: E,
          "is--checked": $,
          "is--disabled": T
        }],
        title: e.title
      }, [
        r("input", {
          class: "vxe-radio--input",
          type: "radio",
          name: W,
          checked: $,
          disabled: T,
          onChange: y,
          onClick: h
        }),
        r("span", {
          class: ["vxe-radio--icon", $ ? dt().RADIO_CHECKED : dt().RADIO_UNCHECKED]
        }),
        r("span", {
          class: "vxe-radio--label"
        }, n.default ? n.default({}) : Vn(e.content))
      ]);
    };
    return d.renderVN = O, d;
  },
  render() {
    return this.renderVN();
  }
}), Os = tt({
  name: "VxeRadioButton",
  props: {
    modelValue: [String, Number, Boolean],
    label: { type: [String, Number, Boolean], default: null },
    title: [String, Number],
    content: [String, Number],
    disabled: {
      type: Boolean,
      default: null
    },
    strict: { type: Boolean, default: () => me().radioButton.strict },
    size: { type: String, default: () => me().radioButton.size || me().size }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = ut("$xeForm", null), a = ut("xeFormItemInfo", null), c = ut("$xeRadioGroup", null), p = i.uniqueId(), { computeSize: d } = Ln(e), s = {
      xID: p,
      props: e,
      context: t
    };
    let f = {};
    const g = Q(() => {
      const { disabled: E } = e;
      if (E === null && c) {
        const { computeIsDisabled: T } = c.getComputeMaps();
        return T.value;
      }
      return E;
    }), D = Q(() => c ? c.name : null), b = Q(() => c ? c.props.strict : e.strict), x = Q(() => {
      const { modelValue: E, label: T } = e;
      return c ? c.props.modelValue === T : E === T;
    });
    f = {
      dispatchEvent(E, T, W) {
        o(E, zt(W, { $radioButton: s }, T));
      }
    }, Object.assign(s, f);
    const S = (E, T) => {
      c ? c.handleChecked({ label: E }, T) : (o("update:modelValue", E), f.dispatchEvent("change", { label: E }, T), l && a && l.triggerItemEvent(T, a.itemConfig.field, E));
    }, y = (E) => {
      g.value || S(e.label, E);
    }, h = (E) => {
      const T = g.value, W = b.value;
      !T && !W && e.label === (c ? c.props.modelValue : e.modelValue) && S(null, E);
    }, O = () => {
      const E = d.value, T = g.value, W = D.value, $ = x.value;
      return r("label", {
        class: ["vxe-radio", "vxe-radio-button", {
          [`size--${E}`]: E,
          "is--disabled": T
        }],
        title: e.title
      }, [
        r("input", {
          class: "vxe-radio--input",
          type: "radio",
          name: W,
          checked: $,
          disabled: T,
          onChange: y,
          onClick: h
        }),
        r("span", {
          class: "vxe-radio--label"
        }, n.default ? n.default({}) : Vn(e.content))
      ]);
    };
    return Object.assign(s, {
      renderVN: O,
      dispatchEvent
    }), O;
  }
}), ho = tt({
  name: "VxeRadioGroup",
  props: {
    modelValue: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: null
    },
    type: String,
    options: Array,
    optionProps: Object,
    strict: { type: Boolean, default: () => me().radioGroup.strict },
    size: { type: String, default: () => me().radioGroup.size || me().size }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = ut("$xeForm", null), a = ut("xeFormItemInfo", null), c = i.uniqueId(), d = {
      computeIsDisabled: Q(() => {
        const { disabled: h } = e;
        return h === null ? l ? l.props.readonly || l.props.disabled : !1 : h;
      })
    }, s = {
      xID: c,
      props: e,
      context: t,
      name: i.uniqueId("xegroup_"),
      getComputeMaps: () => d
    }, f = Q(() => e.optionProps || {}), g = Q(() => f.value.label || "label"), D = Q(() => f.value.value || "value"), b = Q(() => f.value.disabled || "disabled");
    let x = {};
    Ln(e);
    const S = {
      handleChecked(h, O) {
        o("update:modelValue", h.label), x.dispatchEvent("change", h, O), l && a && l.triggerItemEvent(O, a.itemConfig.field, h.label);
      }
    };
    x = {
      dispatchEvent(h, O, E) {
        o(h, zt(E, { $radioGroup: s }, O));
      }
    };
    const y = () => {
      const { options: h, type: O } = e, E = n.default, T = D.value, W = g.value, $ = b.value, I = O === "button" ? Os : Ds;
      return r("div", {
        class: "vxe-radio-group"
      }, E ? E({}) : h ? h.map((z) => r(I, {
        label: z[T],
        content: z[W],
        disabled: z[$]
      })) : []);
    };
    return Object.assign(s, S, {
      renderVN: y,
      dispatchEvent
    }), Xt("$xeRadioGroup", s), y;
  }
});
function Pr(e) {
  return e.visible !== !1;
}
function EN() {
  return i.uniqueId("opt_");
}
const qo = tt({
  name: "VxeSelect",
  props: {
    modelValue: [String, Number, Array],
    clearable: Boolean,
    placeholder: {
      type: String,
      default: () => i.eqNull(me().select.placeholder) ? Te("vxe.base.pleaseSelect") : me().select.placeholder
    },
    readonly: {
      type: Boolean,
      default: null
    },
    loading: Boolean,
    disabled: {
      type: Boolean,
      default: null
    },
    multiple: Boolean,
    multiCharOverflow: { type: [Number, String], default: () => me().select.multiCharOverflow },
    prefixIcon: String,
    placement: String,
    options: Array,
    optionProps: Object,
    optionGroups: Array,
    optionGroupProps: Object,
    optionConfig: Object,
    className: [String, Function],
    popupClassName: [String, Function],
    max: { type: [String, Number], default: null },
    size: { type: String, default: () => me().select.size || me().size },
    filterable: Boolean,
    filterMethod: Function,
    remote: Boolean,
    remoteMethod: Function,
    emptyText: String,
    // 已废弃，被 option-config.keyField 替换
    optionId: { type: String, default: () => me().select.optionId },
    // 已废弃，被 option-config.useKey 替换
    optionKey: Boolean,
    transfer: {
      type: Boolean,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "change",
    "clear",
    "blur",
    "focus"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = ut("$xeTable", null), a = ut("$xeForm", null), c = ut("xeFormItemInfo", null), p = i.uniqueId(), { computeSize: d } = Ln(e), s = Ot({
      inited: !1,
      staticOptions: [],
      fullGroupList: [],
      fullOptionList: [],
      visibleGroupList: [],
      visibleOptionList: [],
      remoteValueList: [],
      panelIndex: 0,
      panelStyle: {},
      panelPlacement: null,
      currentOption: null,
      currentValue: null,
      visiblePanel: !1,
      animatVisible: !1,
      isActivated: !1,
      searchValue: "",
      searchLoading: !1
    }), f = Ie(), g = Ie(), D = Ie(), b = Ie(), x = Ie(), S = {
      refElem: f
    }, y = {
      xID: p,
      props: e,
      context: t,
      reactData: s,
      getRefMaps: () => S
    };
    let h = {};
    const O = Q(() => {
      const { readonly: se } = e;
      return se === null ? a ? a.props.readonly : !1 : se;
    }), E = Q(() => {
      const { disabled: se } = e;
      return se === null ? a ? a.props.disabled : !1 : se;
    }), T = Q(() => {
      const { transfer: se } = e;
      if (se === null) {
        const Se = me().select.transfer;
        if (i.isBoolean(Se))
          return Se;
        if (l || a)
          return !0;
      }
      return se;
    }), W = Q(() => e.optionProps || {}), $ = Q(() => e.optionGroupProps || {}), I = Q(() => W.value.label || "label"), z = Q(() => W.value.value || "value"), te = Q(() => $.value.label || "label"), Ce = Q(() => $.value.options || "options"), N = Q(() => {
      const { modelValue: se, multiple: Se, max: ze } = e;
      return Se && ze ? (se ? se.length : 0) >= i.toNumber(ze) : !1;
    }), F = Q(() => Object.assign({}, me().select.optionConfig, e.optionConfig)), j = Q(() => s.fullGroupList.some((se) => se.options && se.options.length)), ee = Q(() => i.toNumber(e.multiCharOverflow)), oe = (se, Se) => se && (i.isString(se) && (se = n[se] || null), i.isFunction(se)) ? It(se(Se)) : [], re = (se) => {
      const { fullOptionList: Se, fullGroupList: ze } = s, Xe = j.value, et = z.value;
      if (Xe)
        for (let at = 0; at < ze.length; at++) {
          const ft = ze[at];
          if (ft.options)
            for (let mt = 0; mt < ft.options.length; mt++) {
              const B = ft.options[mt];
              if (se === B[et])
                return B;
            }
        }
      return Se.find((at) => se === at[et]);
    }, G = (se) => {
      const { visibleOptionList: Se, visibleGroupList: ze } = s, Xe = j.value, et = z.value;
      if (Xe)
        for (let at = 0; at < ze.length; at++) {
          const ft = ze[at];
          if (ft.options)
            for (let mt = 0; mt < ft.options.length; mt++) {
              const B = ft.options[mt];
              if (se === B[et])
                return B;
            }
        }
      return Se.find((at) => se === at[et]);
    }, J = (se) => {
      const { remoteValueList: Se } = s, ze = I.value, Xe = Se.find((at) => se === at.key), et = Xe ? Xe.result : null;
      return i.toValueString(et ? et[ze] : se);
    }, A = (se) => {
      const Se = I.value, ze = re(se);
      return i.toValueString(ze ? ze[Se] : se);
    }, M = Q(() => {
      const { modelValue: se, multiple: Se, remote: ze } = e, Xe = ee.value;
      if (se && Se) {
        const et = i.isArray(se) ? se : [se];
        return ze ? et.map((at) => J(at)).join(", ") : et.map((at) => {
          const ft = A(at);
          return Xe > 0 && ft.length > Xe ? `${ft.substring(0, Xe)}...` : ft;
        }).join(", ");
      }
      return ze ? J(se) : A(se);
    }), H = () => F.value.keyField || e.optionId || "_X_OPTION_KEY", ne = (se) => {
      const Se = se[H()];
      return Se ? encodeURIComponent(Se) : "";
    }, de = () => {
      const { filterable: se, filterMethod: Se } = e, { fullOptionList: ze, fullGroupList: Xe, searchValue: et } = s, at = j.value, ft = te.value, mt = I.value;
      return at ? se && Se ? s.visibleGroupList = Xe.filter((B) => Pr(B) && Se({ group: B, option: null, searchValue: et })) : se ? s.visibleGroupList = Xe.filter((B) => Pr(B) && (!et || `${B[ft]}`.indexOf(et) > -1)) : s.visibleGroupList = Xe.filter(Pr) : se && Se ? s.visibleOptionList = ze.filter((B) => Pr(B) && Se({ group: null, option: B, searchValue: et })) : se ? s.visibleOptionList = ze.filter((B) => Pr(B) && (!et || `${B[mt]}`.indexOf(et) > -1)) : s.visibleOptionList = ze.filter(Pr), ae();
    }, ve = () => {
      const { fullOptionList: se, fullGroupList: Se } = s, ze = Ce.value, Xe = H(), et = (at) => {
        ne(at) || (at[Xe] = EN());
      };
      Se.length ? Se.forEach((at) => {
        et(at), at[ze] && at[ze].forEach(et);
      }) : se.length && se.forEach(et), de();
    }, Oe = (se) => {
      const Se = z.value;
      se && (s.currentOption = se, s.currentValue = se[Se]);
    }, Fe = (se, Se) => ae().then(() => {
      if (se) {
        const ze = b.value, et = x.value.querySelector(`[optid='${ne(se)}']`);
        if (ze && et) {
          const at = ze.offsetHeight, ft = 5;
          Se ? et.offsetTop + et.offsetHeight - ze.scrollTop > at && (ze.scrollTop = et.offsetTop + et.offsetHeight - at) : (et.offsetTop + ft < ze.scrollTop || et.offsetTop + ft > ze.scrollTop + ze.clientHeight) && (ze.scrollTop = et.offsetTop - ft);
        }
      }
    }), R = () => {
      s.panelIndex < ss() && (s.panelIndex = Cr());
    }, k = () => ae().then(() => {
      const { placement: se } = e, { panelIndex: Se } = s, ze = f.value, Xe = x.value, et = T.value;
      if (Xe && ze) {
        const at = ze.offsetHeight, ft = ze.offsetWidth, mt = Xe.offsetHeight, B = Xe.offsetWidth, Mt = 5, St = {
          zIndex: Se
        }, { boundingTop: gt, boundingLeft: bt, visibleHeight: Dt, visibleWidth: Bt } = Ul(ze);
        let Wt = "bottom";
        if (et) {
          let Pt = bt, jt = gt + at;
          se === "top" ? (Wt = "top", jt = gt - mt) : se || (jt + mt + Mt > Dt && (Wt = "top", jt = gt - mt), jt < Mt && (Wt = "bottom", jt = gt + at)), Pt + B + Mt > Bt && (Pt -= Pt + B + Mt - Bt), Pt < Mt && (Pt = Mt), Object.assign(St, {
            left: `${Pt}px`,
            top: `${jt}px`,
            minWidth: `${ft}px`
          });
        } else
          se === "top" ? (Wt = "top", St.bottom = `${at}px`) : se || gt + at + mt > Dt && gt - at - mt > Mt && (Wt = "top", St.bottom = `${at}px`);
        return s.panelStyle = St, s.panelPlacement = Wt, ae();
      }
    });
    let U;
    const _ = () => {
      const { loading: se, filterable: Se } = e, ze = E.value;
      !se && !ze && (clearTimeout(U), s.inited || (s.inited = !0), s.isActivated = !0, s.animatVisible = !0, Se && de(), setTimeout(() => {
        const { modelValue: Xe, multiple: et } = e, at = re(et && Xe ? Xe[0] : Xe);
        s.visiblePanel = !0, at && (Oe(at), Fe(at)), ge();
      }, 10), R(), k());
    }, K = () => {
      s.searchValue = "", s.searchLoading = !1, s.visiblePanel = !1, U = window.setTimeout(() => {
        s.animatVisible = !1;
      }, 350);
    }, Z = (se, Se) => {
      Se !== e.modelValue && (o("update:modelValue", Se), h.dispatchEvent("change", { value: Se }, se), a && c && a.triggerItemEvent(se, c.itemConfig.field, Se));
    }, ke = (se, Se) => {
      s.remoteValueList = [], Z(se, Se), h.dispatchEvent("clear", { value: Se }, se);
    }, ye = (se, Se) => {
      ke(Se, null), K();
    }, Ee = (se, Se, ze) => {
      const { modelValue: Xe, multiple: et } = e, { remoteValueList: at } = s;
      if (et) {
        let ft;
        Xe ? Xe.indexOf(Se) === -1 ? ft = Xe.concat([Se]) : ft = Xe.filter((B) => B !== Se) : ft = [Se];
        const mt = at.find((B) => B.key === Se);
        mt ? mt.result = ze : at.push({ key: Se, result: ze }), Z(se, ft);
      } else
        s.remoteValueList = [{ key: Se, result: ze }], Z(se, Se), K();
    }, xe = (se) => {
      const { visiblePanel: Se } = s;
      if (!E.value && Se) {
        const Xe = x.value;
        Bn(se, Xe).flag ? k() : K();
      }
    }, Le = (se) => {
      const { visiblePanel: Se } = s;
      if (!E.value) {
        const Xe = f.value, et = x.value;
        s.isActivated = Bn(se, Xe).flag || Bn(se, et).flag, Se && !s.isActivated && K();
      }
    }, je = (se, Se) => {
      const { visibleOptionList: ze, visibleGroupList: Xe } = s, et = j.value, at = z.value, ft = Ce.value;
      let mt, B, Mt, St;
      if (et)
        for (let gt = 0; gt < Xe.length; gt++) {
          const bt = Xe[gt], Dt = bt[ft], Bt = bt.disabled;
          if (Dt)
            for (let Wt = 0; Wt < Dt.length; Wt++) {
              const Pt = Dt[Wt], jt = Pr(Pt), At = Bt || Pt.disabled;
              if (!mt && !At && (mt = Pt), St && jt && !At && (Mt = Pt, !Se))
                return { offsetOption: Mt };
              if (se === Pt[at]) {
                if (St = Pt, Se)
                  return { offsetOption: B };
              } else
                jt && !At && (B = Pt);
            }
        }
      else
        for (let gt = 0; gt < ze.length; gt++) {
          const bt = ze[gt], Dt = bt.disabled;
          if (!mt && !Dt && (mt = bt), St && !Dt && (Mt = bt, !Se))
            return { offsetOption: Mt };
          if (se === bt[at]) {
            if (St = bt, Se)
              return { offsetOption: B };
          } else
            Dt || (B = bt);
        }
      return { firstOption: mt };
    }, Ye = (se) => {
      const { clearable: Se } = e, { visiblePanel: ze, currentValue: Xe, currentOption: et } = s;
      if (!E.value) {
        const ft = it.hasKey(se, Vt.TAB), mt = it.hasKey(se, Vt.ENTER), B = it.hasKey(se, Vt.ESCAPE), Mt = it.hasKey(se, Vt.ARROW_UP), St = it.hasKey(se, Vt.ARROW_DOWN), gt = it.hasKey(se, Vt.DELETE), bt = it.hasKey(se, Vt.SPACEBAR);
        if (ft && (s.isActivated = !1), ze)
          if (B || ft)
            K();
          else if (mt)
            se.preventDefault(), se.stopPropagation(), Ee(se, Xe, et);
          else if (Mt || St) {
            se.preventDefault();
            let { firstOption: Dt, offsetOption: Bt } = je(Xe, Mt);
            !Bt && !G(Xe) && (Bt = Dt), Oe(Bt), Fe(Bt, St);
          } else bt && se.preventDefault();
        else (Mt || St || mt || bt) && s.isActivated && (se.preventDefault(), _());
        s.isActivated && gt && Se && ke(se, null);
      }
    }, fe = () => {
      K();
    }, ge = () => {
      e.filterable && ae(() => {
        const se = D.value;
        se && se.focus();
      });
    }, $e = (se) => {
      E.value || (s.isActivated = !0), h.dispatchEvent("focus", {}, se);
    }, Ve = (se) => {
      s.isActivated = !1, h.dispatchEvent("blur", {}, se);
    }, ce = (se) => {
      s.searchValue = se;
    }, We = () => {
      s.isActivated = !0;
    }, Ge = i.debounce(function() {
      const { remote: se, remoteMethod: Se } = e, { searchValue: ze } = s;
      se && Se ? (s.searchLoading = !0, Promise.resolve(Se({ searchValue: ze })).then(() => ae()).catch(() => ae()).finally(() => {
        s.searchLoading = !1, de();
      })) : de();
    }, 350, { trailing: !0 }), Ze = (se) => {
      const { $event: Se } = se;
      Se.preventDefault(), s.visiblePanel ? K() : _();
    }, pe = (se, Se, ze) => !!(Se.disabled || ze && ze.disabled || N.value && !se), Y = (se, Se) => {
      const { optionKey: ze, modelValue: Xe, multiple: et } = e, { currentValue: at } = s, ft = F.value, mt = I.value, B = z.value, Mt = j.value, { useKey: St } = ft, gt = n.option;
      return se.map((bt, Dt) => {
        const { slots: Bt, className: Wt } = bt, Pt = bt[B], jt = et ? Xe && Xe.indexOf(Pt) > -1 : Xe === Pt, At = !Mt || Pr(bt), Rn = pe(jt, bt, Se), _t = ne(bt), Ht = Bt ? Bt.default : null, Kt = { option: bt, group: null, $select: y };
        return At ? r("div", {
          key: St || ze ? _t : Dt,
          class: ["vxe-select-option", Wt ? i.isFunction(Wt) ? Wt(Kt) : Wt : "", {
            "is--disabled": Rn,
            "is--selected": jt,
            "is--hover": at === Pt
          }],
          // attrs
          optid: _t,
          // event
          onMousedown: (pn) => {
            pn.button === 0 && pn.stopPropagation();
          },
          onClick: (pn) => {
            Rn || Ee(pn, Pt, bt);
          },
          onMouseenter: () => {
            Rn || Oe(bt);
          }
        }, gt ? oe(gt, Kt) : Ht ? oe(Ht, Kt) : Vn(bt[mt])) : Me();
      });
    }, le = () => {
      const { optionKey: se } = e, { visibleGroupList: Se } = s, ze = F.value, Xe = te.value, et = Ce.value, { useKey: at } = ze, ft = n.option;
      return Se.map((mt, B) => {
        const { slots: Mt, className: St } = mt, gt = ne(mt), bt = mt.disabled, Dt = Mt ? Mt.default : null, Bt = { option: mt, group: mt, $select: y };
        return r("div", {
          key: at || se ? gt : B,
          class: ["vxe-optgroup", St ? i.isFunction(St) ? St(Bt) : St : "", {
            "is--disabled": bt
          }],
          // attrs
          optid: gt
        }, [
          r("div", {
            class: "vxe-optgroup--title"
          }, ft ? oe(ft, Bt) : Dt ? oe(Dt, Bt) : Vn(mt[Xe])),
          r("div", {
            class: "vxe-optgroup--wrapper"
          }, Y(mt[et] || [], mt))
        ]);
      });
    }, he = () => {
      const { visibleGroupList: se, visibleOptionList: Se, searchLoading: ze } = s, Xe = j.value;
      if (ze)
        return [
          r("div", {
            class: "vxe-select--search-loading"
          }, [
            r("i", {
              class: ["vxe-select--search-icon", dt().SELECT_LOADED]
            }),
            r("span", {
              class: "vxe-select--search-text"
            }, Te("vxe.select.loadingText"))
          ])
        ];
      if (Xe) {
        if (se.length)
          return le();
      } else if (Se.length)
        return Y(Se);
      return [
        r("div", {
          class: "vxe-select--empty-placeholder"
        }, e.emptyText || Te("vxe.select.emptyText"))
      ];
    };
    h = {
      dispatchEvent(se, Se, ze) {
        o(se, zt(ze, { $select: y }, Se));
      },
      isPanelVisible() {
        return s.visiblePanel;
      },
      togglePanel() {
        return s.visiblePanel ? K() : _(), ae();
      },
      hidePanel() {
        return s.visiblePanel && K(), ae();
      },
      showPanel() {
        return s.visiblePanel || _(), ae();
      },
      refreshOption: de,
      focus() {
        const se = g.value;
        return s.isActivated = !0, se.blur(), ae();
      },
      blur() {
        return g.value.blur(), s.isActivated = !1, ae();
      }
    }, Object.assign(y, h), lt(() => s.staticOptions, (se) => {
      se.some((Se) => Se.options && Se.options.length) ? (s.fullOptionList = [], s.fullGroupList = se) : (s.fullGroupList = [], s.fullOptionList = se || []), ve();
    }), lt(() => e.options, (se) => {
      s.fullGroupList = [], s.fullOptionList = se || [], ve();
    }), lt(() => e.optionGroups, (se) => {
      s.fullOptionList = [], s.fullGroupList = se || [], ve();
    }), yn(() => {
      ae(() => {
        const { options: se, optionGroups: Se } = e;
        Se ? s.fullGroupList = Se : se && (s.fullOptionList = se), ve();
      }), it.on(y, "mousewheel", xe), it.on(y, "mousedown", Le), it.on(y, "keydown", Ye), it.on(y, "blur", fe);
    }), On(() => {
      it.off(y, "mousewheel"), it.off(y, "mousedown"), it.off(y, "keydown"), it.off(y, "blur");
    });
    const He = () => {
      const { className: se, popupClassName: Se, loading: ze, filterable: Xe } = e, { inited: et, isActivated: at, visiblePanel: ft } = s, mt = d.value, B = E.value, Mt = M.value, St = T.value, gt = O.value, bt = n.default, Dt = n.header, Bt = n.footer, Wt = n.prefix;
      return gt ? r("div", {
        ref: f,
        class: ["vxe-select--readonly", se]
      }, [
        r("div", {
          class: "vxe-select-slots",
          ref: "hideOption"
        }, bt ? bt({}) : []),
        r("span", {
          class: "vxe-select-label"
        }, Mt)
      ]) : r("div", {
        ref: f,
        class: ["vxe-select", se ? i.isFunction(se) ? se({ $select: y }) : se : "", {
          [`size--${mt}`]: mt,
          "is--visible": ft,
          "is--disabled": B,
          "is--filter": Xe,
          "is--loading": ze,
          "is--active": at
        }]
      }, [
        r("div", {
          class: "vxe-select-slots",
          ref: "hideOption"
        }, bt ? bt({}) : []),
        r(Dn, {
          ref: g,
          clearable: e.clearable,
          placeholder: e.placeholder,
          readonly: !1,
          disabled: B,
          type: "text",
          prefixIcon: e.prefixIcon,
          suffixIcon: ze ? dt().SELECT_LOADED : ft ? dt().SELECT_OPEN : dt().SELECT_CLOSE,
          modelValue: Mt,
          onClear: ye,
          onClick: Ze,
          onFocus: $e,
          onBlur: Ve,
          onSuffixClick: Ze
        }, Wt ? {
          prefix: () => Wt({})
        } : {}),
        r(ts, {
          to: "body",
          disabled: St ? !et : !0
        }, [
          r("div", {
            ref: x,
            class: ["vxe-table--ignore-clear vxe-select--panel", Se ? i.isFunction(Se) ? Se({ $select: y }) : Se : "", {
              [`size--${mt}`]: mt,
              "is--transfer": St,
              "animat--leave": !ze && s.animatVisible,
              "animat--enter": !ze && ft
            }],
            placement: s.panelPlacement,
            style: s.panelStyle
          }, et ? [
            Xe ? r("div", {
              class: "vxe-select--panel-search"
            }, [
              r(Dn, {
                ref: D,
                class: "vxe-select-search--input",
                modelValue: s.searchValue,
                clearable: !0,
                placeholder: Te("vxe.select.search"),
                prefixIcon: dt().INPUT_SEARCH,
                "onUpdate:modelValue": ce,
                onFocus: We,
                onChange: Ge,
                onSearch: Ge
              })
            ]) : Me(),
            r("div", {
              class: "vxe-select--panel-wrapper"
            }, [
              Dt ? r("div", {
                class: "vxe-select--panel-header"
              }, Dt({})) : Me(),
              r("div", {
                class: "vxe-select--panel-body"
              }, [
                r("div", {
                  ref: b,
                  class: "vxe-select-option--wrapper"
                }, he())
              ]),
              Bt ? r("div", {
                class: "vxe-select--panel-footer"
              }, Bt({})) : Me()
            ])
          ] : [])
        ])
      ]);
    };
    return y.renderVN = He, Xt("$xeSelect", y), y;
  },
  render() {
    return this.renderVN();
  }
}), Kv = () => [
  { label: Te("vxe.formDesign.styleSetting.fontNormal"), value: !1 },
  { label: Te("vxe.formDesign.styleSetting.fontBold"), value: !0 }
], Yv = () => [
  { label: Te("vxe.formDesign.styleSetting.colonVisible"), value: !0 },
  { label: Te("vxe.formDesign.styleSetting.colonHidden"), value: !1 }
], Xv = () => [
  { label: Te("vxe.formDesign.styleSetting.alignLeft"), value: "" },
  { label: Te("vxe.formDesign.styleSetting.alignRight"), value: "right" }
], Zv = () => [
  { label: Te("vxe.formDesign.styleSetting.unitPx"), value: "" },
  { label: Te("vxe.formDesign.styleSetting.unitPct"), value: "%" }
], va = (e, t, n, o) => {
  const l = n === "vertical";
  return r("div", {
    class: ["vxe-form-design--widget-form-item-option", `is--${n}`, {
      "is--active": l ? e[t] : !e[t]
    }],
    onClick() {
      e[t] = l, o();
    }
  }, [
    r("div", {
      class: "vxe-form-design--widget-form-item-option-row"
    }),
    r("div", {
      class: "vxe-form-design--widget-form-item-option-row"
    }),
    r("div", {}, Te(l ? "vxe.formDesign.styleSetting.verticalLayout" : "vxe.formDesign.styleSetting.horizontalLayout"))
  ]);
}, SN = tt({
  name: "DefaultPCStyleForm",
  props: {
    formData: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormDesign", null), n = "pcVertical", o = Ie(Kv()), l = Ie(Yv()), a = Ie(Xv()), c = Ie(Zv()), p = () => {
      t && t.refreshPreviewView();
    }, d = () => {
      const { formData: s } = e;
      s.pcTitleWidth || (s.pcTitleWidth = 100), p();
    };
    return () => {
      const { formData: s } = e;
      return r(fn, {
        data: s,
        span: 24,
        vertical: !0,
        titleBold: !0
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.styleSetting.layoutTitle"),
              field: n
            }, {
              default() {
                return [
                  r("div", {
                    class: "vxe-form-design--widget-form-item-layout"
                  }, [
                    va(s, n, "vertical", d),
                    va(s, n, "horizontal", d)
                  ])
                ];
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.styleSetting.styleTitle")
            }, {
              default() {
                return [
                  r("div", {
                    class: "vxe-form-design--widget-form-item-prop-list"
                  }, [
                    r("span", {}, Te("vxe.formDesign.styleSetting.boldTitle")),
                    r(ho, {
                      modelValue: s.pcTitleBold,
                      options: o.value,
                      onChange: p,
                      "onUpdate:modelValue"(f) {
                        s.pcTitleBold = f;
                      }
                    })
                  ]),
                  r("div", {
                    class: "vxe-form-design--widget-form-item-prop-list"
                  }, [
                    r("span", {}, Te("vxe.formDesign.styleSetting.colonTitle")),
                    r(ho, {
                      modelValue: s.pcTitleColon,
                      options: l.value,
                      onChange: p,
                      "onUpdate:modelValue"(f) {
                        s.pcTitleColon = f;
                      }
                    })
                  ]),
                  s.pcVertical ? Me() : r("div", {
                    class: "vxe-form-design--widget-form-item-prop-list"
                  }, [
                    r("span", {}, Te("vxe.formDesign.styleSetting.alignTitle")),
                    r(ho, {
                      modelValue: s.pcTitleAlign,
                      options: a.value,
                      onChange: p,
                      "onUpdate:modelValue"(f) {
                        s.pcTitleAlign = f;
                      }
                    })
                  ]),
                  s.pcVertical ? Me() : r("div", {
                    class: "vxe-form-design--widget-form-item-prop-list"
                  }, [
                    r("span", {}, Te("vxe.formDesign.styleSetting.widthTitle")),
                    r(Dn, {
                      class: "vxe-form-design--widget-form-item-prop-width",
                      modelValue: s.pcTitleWidth,
                      type: "integer",
                      onChange: p,
                      "onUpdate:modelValue"(f) {
                        s.pcTitleWidth = f;
                      }
                    }),
                    r(qo, {
                      class: "vxe-form-design--widget-form-item-prop-unit",
                      modelValue: s.pcTitleWidthUnit,
                      options: c.value,
                      transfer: !0,
                      onChange: p,
                      "onUpdate:modelValue"(f) {
                        s.pcTitleWidthUnit = f;
                      }
                    })
                  ])
                ];
              }
            })
          ];
        }
      });
    };
  }
}), DN = tt({
  name: "DefaultMobileStyleForm",
  props: {
    formData: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormDesign", null), n = "mobileVertical", o = Ie(Kv()), l = Ie(Yv()), a = Ie(Xv()), c = Ie(Zv()), p = () => {
      t && t.refreshPreviewView();
    }, d = () => {
      const { formData: s } = e;
      s.mobileTitleWidth || (s.mobileTitleWidth = 100), p();
    };
    return () => {
      const { formData: s } = e;
      return r(fn, {
        data: s,
        span: 24,
        vertical: !0,
        titleBold: !0
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.styleSetting.layoutTitle"),
              field: n
            }, {
              default() {
                return [
                  r("div", {
                    class: "vxe-form-design--widget-form-item-layout"
                  }, [
                    va(s, n, "vertical", d),
                    va(s, n, "horizontal", d)
                  ])
                ];
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.styleSetting.styleTitle")
            }, {
              default() {
                return [
                  r("div", {
                    class: "vxe-form-design--widget-form-item-prop-list"
                  }, [
                    r("span", {}, Te("vxe.formDesign.styleSetting.boldTitle")),
                    r(ho, {
                      modelValue: s.mobileTitleBold,
                      options: o.value,
                      onChange: p,
                      "onUpdate:modelValue"(f) {
                        s.mobileTitleBold = f;
                      }
                    })
                  ]),
                  r("div", {
                    class: "vxe-form-design--widget-form-item-prop-list"
                  }, [
                    r("span", {}, Te("vxe.formDesign.styleSetting.colonTitle")),
                    r(ho, {
                      modelValue: s.mobileTitleColon,
                      options: l.value,
                      onChange: p,
                      "onUpdate:modelValue"(f) {
                        s.mobileTitleColon = f;
                      }
                    })
                  ]),
                  s.mobileVertical ? Me() : r("div", {
                    class: "vxe-form-design--widget-form-item-prop-list"
                  }, [
                    r("span", {}, Te("vxe.formDesign.styleSetting.alignTitle")),
                    r(ho, {
                      modelValue: s.mobileTitleAlign,
                      options: a.value,
                      onChange: p,
                      "onUpdate:modelValue"(f) {
                        s.mobileTitleAlign = f;
                      }
                    })
                  ]),
                  s.mobileVertical ? Me() : r("div", {
                    class: "vxe-form-design--widget-form-item-prop-list"
                  }, [
                    r("span", {}, Te("vxe.formDesign.styleSetting.widthTitle")),
                    r(Dn, {
                      class: "vxe-form-design--widget-form-item-prop-width",
                      modelValue: s.mobileTitleWidth,
                      type: "integer",
                      onChange: p,
                      "onUpdate:modelValue"(f) {
                        s.mobileTitleWidth = f;
                      }
                    }),
                    r(qo, {
                      class: "vxe-form-design--widget-form-item-prop-unit",
                      modelValue: s.mobileTitleWidthUnit,
                      options: c.value,
                      transfer: !0,
                      onChange: p,
                      "onUpdate:modelValue"(f) {
                        s.mobileTitleWidthUnit = f;
                      }
                    })
                  ])
                ];
              }
            })
          ];
        }
      });
    };
  }
}), ON = tt({
  name: "FormDesignLayoutStyle",
  props: {},
  emits: [],
  setup() {
    const e = ut("$xeFormDesign", null), t = Ot({
      activeTab: 1
    }), n = {
      reactData: t,
      renderVN() {
        return [];
      }
    };
    if (!e)
      return n;
    const { props: o, reactData: l } = e, a = Ie(!1), c = Ie(null), p = Ie({}), d = () => {
      c.value = e.getConfig();
    }, s = (y) => {
      const { viewRender: h } = y, { activeTab: O } = t, { name: E } = h || {}, T = on.get(E) || {}, W = T ? T.createFormViewFormConfig : null, $ = T ? T.createFormViewMobileFormConfig : null;
      return O === 2 ? $ ? $(y) : xN(y) : W ? W(y) : Uv(y);
    };
    Object.assign(n, {
      updatePreviewView: d,
      openStylePreview() {
        const { showPc: y } = o;
        d(), t.activeTab = y ? 1 : 2, a.value = !0;
      }
    });
    const g = () => {
      const { activeTab: y } = t;
      return r("div", {
        class: ["vxe-form-design--layout-style-preview", `is--${y === 2 ? "mobile" : "pc"}`]
      }, [
        r(Ss, {
          modelValue: p.value,
          config: c.value,
          createFormConfig: s,
          "onUpdate:modelValue"(h) {
            p.value = h;
          }
        })
      ]);
    }, D = () => {
      const { formRender: y } = o, { formData: h } = l;
      if (y) {
        const O = on.get(y.name), E = O ? O.renderFormDesignMobileStyleFormView : null;
        if (E)
          return r("div", {
            class: "vxe-form-design--custom-setting-mobile-form-view"
          }, It(E({}, { $formDesign: e, formConfig: h })));
      }
      return r(DN, {
        formData: h
      });
    }, b = () => {
      const { formRender: y } = o, { formData: h } = l;
      if (y) {
        const O = on.get(y.name), E = O ? O.renderFormDesignStyleFormView : null;
        if (E)
          return r("div", {
            class: "vxe-form-design--custom-setting-pc-form-view"
          }, It(E({}, { $formDesign: e, formConfig: h })));
      }
      return r(SN, {
        formData: h
      });
    }, x = () => {
      const { showPc: y, showMobile: h } = o, { activeTab: O } = t;
      return r("div", {
        class: "vxe-form-design--layout-style-setting"
      }, [
        r(yr, {
          modelValue: O,
          titleWidth: y && h ? "50%" : "100%",
          titleAlign: "center",
          padding: !0,
          onChange: d,
          "onUpdate:modelValue"(E) {
            t.activeTab = E;
          }
        }, {
          default() {
            const E = [];
            return y && E.push(r(To, {
              title: Te("vxe.formDesign.widgetProp.displaySetting.pc"),
              icon: dt().FORM_DESIGN_PROPS_PC,
              k: 1,
              name: 1
            }, {
              default() {
                return b();
              }
            })), h && E.push(r(To, {
              title: Te("vxe.formDesign.widgetProp.displaySetting.mobile"),
              icon: dt().FORM_DESIGN_PROPS_MOBILE,
              key: 2,
              name: 2
            }, {
              default() {
                return D();
              }
            })), E;
          }
        })
      ]);
    }, S = () => {
      const { showPc: y, showMobile: h } = o;
      return r(Es, {
        modelValue: a.value,
        title: Te("vxe.formDesign.styleSetting.title"),
        height: "90vh",
        maskClosable: !0,
        destroyOnClose: !0,
        position: "bottom",
        "onUpdate:modelValue"(O) {
          a.value = O;
        }
      }, {
        default() {
          return r("div", {
            class: "vxe-form-design--layout-style"
          }, [
            g(),
            y || h ? x() : Me()
          ]);
        }
      });
    };
    return n.renderVN = S, Xt("$xeFormDesignLayoutStyle", n), n;
  },
  render() {
    return this.renderVN();
  }
}), fl = tt({
  name: "VxeFormDesign",
  props: {
    size: {
      type: String,
      default: () => me().formDesign.size
    },
    config: Object,
    height: {
      type: [String, Number],
      default: () => me().formDesign.height
    },
    widgets: {
      type: Array,
      default: () => i.clone(me().formDesign.widgets) || []
    },
    showPc: {
      type: Boolean,
      default: () => me().formDesign.showPc
    },
    showMobile: {
      type: Boolean,
      default: () => me().formDesign.showMobile
    },
    formRender: Object
  },
  emits: [
    "click-widget",
    "add-widget",
    "copy-widget",
    "remove-widget"
  ],
  setup(e, t) {
    const { emit: n, slots: o } = t, l = i.uniqueId(), a = Ie(), c = Ie(), p = Ot({
      formData: {},
      widgetConfigs: [],
      widgetObjList: [],
      dragWidget: null,
      sortWidget: null,
      activeWidget: null,
      sortSubWidget: null
    }), d = Ot({}), s = {
      refElem: a
    }, f = {}, g = {
      xID: l,
      props: e,
      context: t,
      reactData: p,
      internalData: d,
      getRefMaps: () => s,
      getComputeMaps: () => f
    }, D = (N) => new Pc(g, N, p.widgetObjList), b = () => new Pc(g, "", p.widgetObjList), x = (N) => {
      if (N) {
        const { formConfig: F, widgetData: j } = N;
        y(F || {}), O(j || []);
      }
      return ae();
    }, S = () => i.clone(p.formData, !0), y = (N) => (p.formData = Object.assign({}, N), ae()), h = () => {
      const N = i.clone(p.widgetObjList, !0);
      return i.eachTree(N, (F) => {
        F.model.value = null;
      }, { children: "children" }), N;
    }, O = (N) => (p.widgetObjList = (N || []).map((F) => Iu(F)), ae()), E = () => {
      const N = c.value;
      return N && N.openStylePreview(), ae();
    }, T = {
      dispatchEvent(N, F, j) {
        n(N, zt(j, { $xeFormDesign: g }, F));
      },
      createWidget: D,
      createEmptyWidget: b,
      getConfig() {
        return {
          formConfig: S(),
          widgetData: h()
        };
      },
      clearConfig() {
        return p.widgetObjList = [], I(), ae();
      },
      loadConfig: x,
      getFormConfig: S,
      loadFormConfig: y,
      getFormData() {
        const { widgetObjList: N } = p, F = {};
        return i.eachTree(N, (j) => {
          F[j.field] = null;
        }, { children: "children" }), F;
      },
      getWidgetData: h,
      loadWidgetData: O,
      refreshPreviewView() {
        const N = c.value;
        return N && N.updatePreviewView(), ae();
      },
      openStyleSetting: E
    }, W = () => {
      const { widgets: N } = e, F = [], j = [], ee = [], oe = [], re = [];
      on.forEach((G, J) => {
        const { createFormDesignWidgetConfig: A } = G;
        if (A) {
          const M = D(J), H = qv(J), ne = uN(J, g);
          if (ne) {
            const de = re.find((ve) => ve.title === ne);
            de ? de.children.push(M) : re.push({
              title: ne,
              children: [M]
            });
          } else
            switch (H) {
              case "layout":
                ee.push(M);
                break;
              case "advanced":
                oe.push(M);
                break;
              default:
                j.push(M);
                break;
            }
        }
      }), j.length && F.push({
        group: "base",
        children: j
      }), ee.length && F.push({
        group: "layout",
        children: ee
      }), oe.length && F.push({
        group: "advanced",
        children: oe
      }), re.length && F.push(...re), N && N.length ? p.widgetConfigs = e.widgets.map((G) => ({
        title: G.customGroup,
        group: G.group,
        children: G.children ? G.children.map((J) => D(J)) : []
      })) : p.widgetConfigs = F;
    }, $ = {
      handleClickWidget(N, F) {
        F && F.name && (N.stopPropagation(), p.activeWidget = F, T.dispatchEvent("click-widget", { item: F }, N));
      },
      handleCopyWidget(N, F) {
        const { widgetObjList: j } = p, ee = i.findTree(j, (oe) => oe.id === F.id, { children: "children" });
        if (ee) {
          N.stopPropagation();
          const { path: oe } = ee, re = Number(oe[0]), G = D(F.name);
          G.title && (G.title = Te("vxe.formDesign.widget.copyTitle", [`${F.title}`.replace(Te("vxe.formDesign.widget.copyTitle", [""]), "")])), re >= j.length - 1 ? j.push(G) : j.splice(re + 1, 0, G), p.activeWidget = G, p.widgetObjList = [...j], T.dispatchEvent("copy-widget", { widget: F, newWidget: G }, N);
        }
      },
      handleRemoveWidget(N, F) {
        const { widgetObjList: j } = p, ee = i.findTree(j, (oe) => oe.id === F.id, { children: "children" });
        if (ee) {
          const { index: oe, parent: re, items: G } = ee;
          N.stopPropagation(), oe >= G.length - 1 ? p.activeWidget = G[oe - 1] : p.activeWidget = G[oe + 1] || null, re && re.name === "row" ? G[oe] = b() : G.splice(oe, 1), p.widgetObjList = [...j], T.dispatchEvent("remove-widget", { widget: F }, N);
        }
      }
    }, I = () => {
      const { formRender: N, showPc: F, showMobile: j } = e;
      let ee = bN({
        pcVisible: F,
        mobileVisible: j
      });
      if (N) {
        const oe = on.get(N.name), re = oe ? oe.createFormDesignSettingFormConfig : null;
        ee = (re ? re({}) : {}) || {};
      }
      p.formData = ee;
    }, z = () => {
      E();
    };
    Object.assign(g, T, $);
    const te = () => r("div", {
      class: "vxe-form-design--header-wrapper"
    }, [
      r("div", {
        class: "vxe-form-design--header-left"
      }),
      r("div", {
        class: "vxe-form-design--header-middle"
      }),
      r("div", {
        class: "vxe-form-design--header-right"
      }, [
        r($n, {
          mode: "text",
          status: "primary",
          icon: dt().FORM_DESIGN_STYLE_SETTING,
          content: Te("vxe.formDesign.styleSetting.btn"),
          onClick: z
        })
      ])
    ]), Ce = () => {
      const { height: N } = e, F = o.header;
      return r("div", {
        ref: a,
        class: "vxe-form-design",
        style: N ? {
          height: Wn(N)
        } : null
      }, [
        r("div", {
          class: "vxe-form-design--header"
        }, F ? F({}) : te()),
        r("div", {
          class: "vxe-form-design--body"
        }, [
          r(dN),
          r(pN),
          r(hN),
          r(ON, {
            ref: c
          })
        ])
      ]);
    };
    return g.renderVN = Ce, lt(() => e.widgets, () => {
      W();
    }), lt(() => e.widgets, () => {
      W();
    }), lt(() => e.config, (N) => {
      x(N || {});
    }), I(), W(), e.config && x(e.config), Xt("$xeFormDesign", g), g;
  },
  render() {
    return this.renderVN();
  }
});
let dr;
const Zr = tt({
  name: "VxeTextarea",
  props: {
    modelValue: [String, Number],
    className: String,
    immediate: { type: Boolean, default: !0 },
    name: String,
    readonly: {
      type: Boolean,
      default: null
    },
    editable: { type: Boolean, default: !0 },
    disabled: {
      type: Boolean,
      default: null
    },
    placeholder: {
      type: String,
      default: () => i.eqNull(me().textarea.placeholder) ? Te("vxe.base.pleaseInput") : me().textarea.placeholder
    },
    maxlength: [String, Number],
    rows: { type: [String, Number], default: 2 },
    cols: { type: [String, Number], default: null },
    showWordCount: Boolean,
    countMethod: Function,
    autosize: [Boolean, Object],
    form: String,
    resize: { type: String, default: () => me().textarea.resize },
    size: { type: String, default: () => me().textarea.size || me().size }
  },
  emits: [
    "update:modelValue",
    "input",
    "keydown",
    "keyup",
    "click",
    "change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const { emit: n } = t, o = ut("$xeForm", null), l = ut("xeFormItemInfo", null), a = i.uniqueId(), { computeSize: c } = Ln(e), p = Ot({
      inputValue: e.modelValue
    }), d = Ie(), s = Ie(), f = {
      refElem: d,
      refTextarea: s
    }, g = {
      xID: a,
      props: e,
      context: t,
      reactData: p,
      getRefMaps: () => f
    };
    let D = {};
    const b = Q(() => {
      const { readonly: N } = e;
      return N === null ? o ? o.props.readonly : !1 : N;
    }), x = Q(() => {
      const { disabled: N } = e;
      return N === null ? o ? o.props.disabled : !1 : N;
    }), S = Q(() => {
      const { editable: N } = e;
      return b.value || !N;
    }), y = Q(() => i.getSize(p.inputValue)), h = Q(() => {
      const N = y.value;
      return e.maxlength && N > i.toNumber(e.maxlength);
    }), O = Q(() => Object.assign({ minRows: 1, maxRows: 10 }, me().textarea.autosize, e.autosize)), E = () => {
      const { size: N, autosize: F } = e, { inputValue: j } = p;
      if (F) {
        dr || (dr = document.createElement("div")), dr.parentNode || document.body.appendChild(dr);
        const ee = s.value;
        if (!ee)
          return;
        const oe = getComputedStyle(ee);
        dr.className = ["vxe-textarea--autosize", N ? `size--${N}` : ""].join(" "), dr.style.width = `${ee.clientWidth}px`, dr.style.padding = oe.padding, dr.innerText = ("" + (j || "　")).replace(/\n$/, `
　`);
      }
    }, T = () => {
      e.autosize && ae(() => {
        const N = O.value, { minRows: F, maxRows: j } = N, ee = s.value;
        if (!ee)
          return;
        const oe = dr.clientHeight, re = getComputedStyle(ee), G = i.toNumber(re.lineHeight), J = i.toNumber(re.paddingTop), A = i.toNumber(re.paddingBottom), M = i.toNumber(re.borderTopWidth), H = i.toNumber(re.borderBottomWidth), ne = J + A + M + H, de = (oe - ne) / G, ve = de && /[0-9]/.test("" + de) ? de : Math.floor(de) + 1;
        let Oe = ve;
        ve < F ? Oe = F : ve > j && (Oe = j), ee.style.height = `${Oe * G + ne}px`;
      });
    }, W = (N) => {
      const F = p.inputValue;
      g.dispatchEvent(N.type, { value: F }, N);
    }, $ = (N, F) => {
      p.inputValue = N, n("update:modelValue", N), i.toValueString(e.modelValue) !== N && (D.dispatchEvent("change", { value: N }, F), o && l && o.triggerItemEvent(F, l.itemConfig.field, N));
    }, I = (N) => {
      const { immediate: F } = e, ee = N.target.value;
      p.inputValue = ee, F && $(ee, N), g.dispatchEvent("input", { value: ee }, N), T();
    }, z = (N) => {
      const { immediate: F } = e;
      F ? W(N) : $(p.inputValue, N);
    }, te = (N) => {
      const { immediate: F } = e, { inputValue: j } = p;
      F || $(j, N), g.dispatchEvent("blur", { value: j }, N);
    };
    D = {
      dispatchEvent(N, F, j) {
        n(N, zt(j, { $textarea: g }, F));
      },
      focus() {
        return s.value.focus(), ae();
      },
      blur() {
        return s.value.blur(), ae();
      }
    }, Object.assign(g, D), lt(() => e.modelValue, (N) => {
      p.inputValue = N, E();
    }), lt(O, () => {
      E(), T();
    }), ae(() => {
      const { autosize: N } = e;
      N && (E(), T());
    });
    const Ce = () => {
      const { className: N, resize: F, placeholder: j, maxlength: ee, autosize: oe, showWordCount: re, countMethod: G, rows: J, cols: A } = e, { inputValue: M } = p, H = c.value, ne = x.value, de = h.value, ve = y.value, Oe = S.value;
      return b.value ? r("div", {
        ref: d,
        class: ["vxe-textarea--readonly", N]
      }, M) : r("div", {
        ref: d,
        class: ["vxe-textarea", N, {
          [`size--${H}`]: H,
          "is--autosize": oe,
          "is--count": re,
          "is--disabled": ne,
          "def--rows": !i.eqNull(J),
          "def--cols": !i.eqNull(A)
        }]
      }, [
        r("textarea", {
          ref: s,
          class: "vxe-textarea--inner",
          value: M,
          name: e.name,
          placeholder: j ? Vn(j) : null,
          maxlength: ee,
          readonly: Oe,
          disabled: ne,
          rows: J,
          cols: A,
          style: F ? {
            resize: F
          } : null,
          onInput: I,
          onChange: z,
          onKeydown: W,
          onKeyup: W,
          onClick: W,
          onFocus: W,
          onBlur: te
        }),
        re ? r("span", {
          class: ["vxe-textarea--count", {
            "is--error": de
          }]
        }, G ? `${G({ value: M })}` : `${ve}${ee ? `/${ee}` : ""}`) : null
      ]);
    };
    return g.renderVN = Ce, g;
  },
  render() {
    return this.renderVN();
  }
}), Hr = tt({
  name: "VxeTip",
  props: {
    title: {
      type: [String, Number],
      default: () => me().tip.title
    },
    content: [String, Number],
    status: String,
    icon: {
      type: String,
      default: () => me().tip.icon
    }
  },
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = {}, d = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => p
    }, s = () => {
      const { status: f, content: g, icon: D, title: b } = e, x = n.default, S = n.title, y = n.icon;
      return r("div", {
        ref: l,
        class: ["vxe-tip", {
          [`theme--${f}`]: f
        }]
      }, [
        y || D ? r("div", {
          class: "vxe-tip--icon"
        }, y ? It(y({})) : [
          r("i", {
            class: D
          })
        ]) : Me(),
        r("div", {
          class: "vxe-tip--body"
        }, [
          S || b ? r("div", {
            class: "vxe-tip--title"
          }, S ? It(S({})) : i.toValueString(b)) : Me(),
          r("div", {
            class: "vxe-tip--content"
          }, x ? It(x({})) : i.toValueString(g))
        ])
      ]);
    };
    return d.renderVN = s, d;
  },
  render() {
    return this.renderVN();
  }
});
function _i(e, t) {
  const n = Ie(""), o = Ie([]), l = () => {
    const { renderParams: b } = e, { widget: x } = b, S = x.options.options || [];
    S.push({
      value: Te("vxe.formDesign.widgetProp.dataSource.defValue", [S.length + 1])
    }), x.options.options = [...S];
  }, a = /^(\s|\t)+/, c = (b) => a.test(b), p = () => {
    const { renderParams: b } = e, { widget: x } = b, S = x.options.options || [], y = [];
    S.forEach((h, O) => {
      const { options: E } = h;
      E && E.length && y.push(O);
    }), o.value = y;
  }, d = (b, x) => {
    o.value.includes(x) ? o.value = o.value.filter((S) => S !== x) : o.value.push(x);
  }, s = () => {
    const { renderParams: b } = e, { widget: x } = b, S = [], y = n.value.split(`
`);
    let h = null;
    t ? y.forEach((O, E) => {
      const T = y[E + 1], W = O.trim();
      if (!W)
        return;
      const $ = {
        value: W
      };
      if (h) {
        if (c(O)) {
          h.options.push($);
          return;
        }
        h = null, S.push($);
      } else
        S.push($);
      T && c(T) && (h = Object.assign($, { options: [] }));
    }) : y.forEach((O) => {
      S.push({
        value: O.trim()
      });
    }), x.options.options = S, p();
  }, f = () => {
    var b;
    const { renderParams: x } = e, { widget: S } = x, y = [];
    (b = S.options.options) === null || b === void 0 || b.forEach((h) => {
      var O;
      y.push(h.value), (O = h.options) === null || O === void 0 || O.forEach((E) => {
        y.push(`	${E.value}`);
      });
    }), n.value = y.join(`
`), ue.modal.open({
      title: `${S.title} - ${Te("vxe.formDesign.widgetProp.dataSource.batchEditOption")}`,
      width: 500,
      height: "50vh ",
      resize: !0,
      showFooter: !0,
      showCancelButton: !0,
      showConfirmButton: !0,
      confirmButtonText: Te("vxe.formDesign.widgetProp.dataSource.buildOption"),
      onConfirm: s,
      slots: {
        default() {
          return r("div", {
            class: "vxe-form-design--widget-form-item-data-source-popup"
          }, [
            r(Hr, {
              status: "primary",
              title: "",
              content: Te(`vxe.formDesign.widgetProp.dataSource.${t ? "batchEditSubTip" : "batchEditTip"}`)
            }),
            r(Zr, {
              resize: "none",
              modelValue: n.value,
              "onUpdate:modelValue"(h) {
                n.value = h;
              }
            })
          ]);
        }
      }
    });
  }, g = (b, x, S, y, h, O, E) => r("div", {
    class: ["vxe-form-design--widget-form-item-data-source-option", {
      "is--first": O,
      "is--last": E
    }]
  }, [
    r("div", {
      class: "vxe-form-design--widget-expand-btn"
    }, x && h ? [
      r("i", {
        class: S ? dt().FORM_DESIGN_WIDGET_OPTION_EXPAND_CLOSE : dt().FORM_DESIGN_WIDGET_OPTION_EXPAND_OPEN,
        onClick() {
          d(b, y);
        }
      })
    ] : []),
    r("input", {
      class: "vxe-default-input",
      value: b.value,
      onInput(T) {
        b.value = T.target.value;
      }
    }),
    r($n, {
      status: "danger",
      mode: "text",
      icon: dt().FORM_DESIGN_WIDGET_DELETE
    })
  ]), D = () => {
    const { renderParams: b } = e, { widget: x } = b, { options: S } = x, y = S.options, h = [];
    return y && y.forEach((O, E) => {
      const { options: T } = O, W = o.value.includes(E);
      T && T.length ? (h.push(g(O, !0, W, E, !0, E === 0, E === y.length - 1)), W && h.push(r("div", {
        class: "vxe-form-design--widget-form-item-data-source-sub-option"
      }, T.map(($) => g($, !1, W, 0, !1, !1, !1))))) : h.push(g(O, !0, W, E, !1, E === 0, E === y.length - 1));
    }), h;
  };
  return lt(() => e.renderParams.widget, () => {
    p();
  }), yn(() => {
    p();
  }), {
    renderDataSourceFormItem() {
      return r(vt, {
        title: Te("vxe.formDesign.widgetProp.dataSource.name"),
        field: "options"
      }, {
        default() {
          return [
            r("div", {}, [
              r($n, {
                status: "primary",
                mode: "text",
                content: Te("vxe.formDesign.widgetProp.dataSource.addOption"),
                onClick: l
              }),
              r($n, {
                status: "primary",
                mode: "text",
                content: Te("vxe.formDesign.widgetProp.dataSource.batchEditOption"),
                onClick: f
              })
            ]),
            r("div", {
              class: "vxe-form-design--widget-form-item-data-source"
            }, D())
          ];
        }
      });
    }
  };
}
function rn(e) {
  return Q(() => {
    const { renderOpts: n } = e;
    return n ? i.kebabCase(n.name) : "";
  });
}
function TN(e) {
  const t = Q(() => {
    const { renderParams: o } = e;
    return o.widget;
  }), n = Q({
    get() {
      const { renderParams: o } = e, { $formView: l, widget: a } = o;
      return l ? l.getItemValue(a) : null;
    },
    set(o) {
      const { renderParams: l } = e, { $formView: a, widget: c } = l;
      a && a.setItemValue(c, o);
    }
  });
  return {
    currWidget: t,
    widgetModel: n
  };
}
const MN = (e) => Te(`vxe.formDesign.widget.component.${e}`), so = (e) => MN(e.name), IN = () => ({
  title: so,
  icon: "vxe-icon-title",
  group: "layout",
  options: {
    color: "",
    align: "",
    bold: !1,
    fontSize: ""
  }
}), kN = () => i.range(12, 27).map((e) => ({ label: `${e}px`, value: `${e}px` })), VN = () => [
  { label: Te("vxe.formDesign.widgetProp.textProp.alignLeft"), value: "" },
  { label: Te("vxe.formDesign.widgetProp.textProp.alignCenter"), value: "center" },
  { label: Te("vxe.formDesign.widgetProp.textProp.alignRight"), value: "right" }
], $N = () => [
  { label: Te("vxe.formDesign.widgetProp.textProp.fontNormal"), value: !1 },
  { label: Te("vxe.formDesign.widgetProp.textProp.fontBold"), value: !0 }
], RN = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = rn(e), n = Ie(VN()), o = Ie($N()), l = Ie(kN());
    return () => {
      const { renderParams: a } = e, { widget: c } = a, p = t.value;
      return r(fn, {
        class: ["vxe-form-design--widget-render-form-wrapper", `widget-${p}`],
        vertical: !0,
        span: 24,
        titleBold: !0,
        titleOverflow: !0,
        data: c.options
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.textProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: c.title,
                  "onUpdate:modelValue"(d) {
                    c.title = d;
                  }
                });
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.textProp.boldTitle"),
              field: "bold",
              itemRender: { name: "VxeRadioGroup", options: o.value }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.textProp.alignTitle"),
              field: "align",
              itemRender: { name: "VxeRadioGroup", options: n.value }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.textProp.sizeTitle"),
              field: "fontSize",
              itemRender: { name: "VxeSelect", options: l.value }
            })
          ];
        }
      });
    };
  }
}), PN = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = rn(e);
    return () => {
      const { renderParams: n } = e, { widget: o } = n, { options: l } = o, a = t.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${a}`],
        align: l.align
      }, {
        default() {
          return r("div", {
            style: {
              fontSize: l.fontSize,
              fontWeight: l.bold ? "bold" : ""
            }
          }, o.title);
        }
      });
    };
  }
}), NN = (e) => {
  const { $formDesign: t } = e, n = 2;
  return {
    title: so,
    group: "layout",
    icon: "vxe-icon-row-col",
    options: {
      colSize: n,
      colSpan: "12,12"
    },
    children: t ? i.range(0, n).map(() => t.createEmptyWidget()) : []
  };
}, Jr = tt({
  name: "VxeRow",
  props: {
    gutter: [Number, String, Array],
    wrap: {
      type: Boolean,
      default: !0
    },
    vertical: Boolean
  },
  emits: [
    "click"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = i.uniqueId(), a = Ie(), c = Ot({}), p = {
      refElem: a
    }, d = Q(() => {
      const { gutter: b, vertical: x } = e, S = {};
      if (b) {
        let [y, h] = i.isArray(b) ? b : [b];
        if (x && (h = y, y = ""), y) {
          const O = i.isNumber(y) ? Wn(-(y / 2)) : `calc(${Wn(y)} / 2 * -1)`;
          S.marginLeft = O, S.marginRight = O;
        }
        if (h) {
          const O = i.isNumber(h) ? Wn(-(h / 2)) : `calc(${Wn(h)} / 2 * -1)`;
          S.marginTop = O, S.marginBottom = O;
        }
      }
      return S;
    }), s = {}, f = {
      xID: l,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => p,
      getComputeMaps: () => s
    }, g = (b) => {
      o(b.type, zt(b, { $row: f }));
    }, D = () => {
      const { vertical: b } = e, x = d.value, S = n.default;
      return r("div", {
        ref: a,
        class: ["vxe-row", {
          "is--vertical": b
        }],
        style: x,
        onClick: g
      }, S ? S({}) : []);
    };
    return f.renderVN = D, Xt("$xeRow", f), f;
  },
  render() {
    return this.renderVN();
  }
}), FN = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormDesign", null);
    if (!t)
      return () => [];
    const n = rn(e), o = Ie([
      {
        label: Te("vxe.formDesign.widgetProp.rowProp.col3"),
        value: 2,
        list: [
          { value: "12,12", spans: [12, 12] },
          { value: "8,16", spans: [8, 16] },
          { value: "16,8", spans: [16, 8] },
          { value: "6,18", spans: [6, 18] },
          { value: "18,6", spans: [18, 6] }
        ]
      },
      {
        label: Te("vxe.formDesign.widgetProp.rowProp.col3"),
        value: 3,
        list: [
          { value: "8,8,8", spans: [8, 8, 8] },
          { value: "6,6,12", spans: [6, 6, 12] },
          { value: "12,6,6", spans: [12, 6, 6] },
          { value: "6,12,6", spans: [6, 12, 6] }
        ]
      },
      {
        label: Te("vxe.formDesign.widgetProp.rowProp.col4"),
        value: 4,
        list: [
          { value: "6,6,6,6", spans: [6, 6, 6, 6] }
        ]
      },
      {
        label: Te("vxe.formDesign.widgetProp.rowProp.col6"),
        value: 6,
        list: [
          { value: "4,4,4,4,4,4", spans: [4, 4, 4, 4, 4, 4] }
        ]
      }
    ]), l = {
      18: "3/4",
      16: "2/3",
      12: "1/2",
      8: "1/3",
      6: "1/4",
      4: "1/6"
    }, a = Q(() => {
      const { renderParams: p } = e, { widget: d } = p, { options: s } = d;
      return o.value.find((f) => f.value === s.colSize);
    }), c = (p) => {
      const { renderParams: d } = e, { widget: s } = d, { options: f } = s;
      f.colSpan = p.value, s.children = i.range(0, f.colSize).map(() => t.createEmptyWidget());
    };
    return () => {
      const { renderParams: p } = e, { widget: d } = p, s = n.value;
      return r(fn, {
        class: `vxe-form-design--widget-${s}-form`,
        vertical: !0,
        span: 24,
        titleBold: !0,
        titleOverflow: !0,
        data: d.options
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.rowProp.colSize"),
              field: "colSize",
              itemRender: { name: "VxeRadioGroup", options: o.value, props: { type: "button" } }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.rowProp.layout")
            }, {
              default() {
                const f = a.value;
                return f ? f.list.map((g, D) => r(Jr, {
                  key: D,
                  class: [`vxe-form-design--widget-${s}-form-row`, {
                    "is--active": g.value === d.options.colSpan
                  }],
                  onClick() {
                    c(g);
                  }
                }, {
                  default() {
                    return g.spans.map((b, x) => r(Ur, {
                      key: `${D}${x}`,
                      class: `vxe-form-design--widget-${s}-form-col`,
                      span: b
                    }, {
                      default() {
                        return r("div", {}, `${l[b]}`);
                      }
                    }));
                  }
                })) : [];
              }
            })
          ];
        }
      });
    };
  }
}), LN = tt({
  props: {
    parentWidget: {
      type: Object,
      default: () => ({})
    },
    widget: {
      type: Object,
      default: () => ({})
    },
    span: Number,
    colItemIndex: {
      type: Number,
      default: 0
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormDesign", null);
    if (!t)
      return () => [];
    const { reactData: n } = t, o = (l) => {
      const { parentWidget: a, colItemIndex: c } = e, { widgetObjList: p, sortWidget: d } = n, s = a.children[c];
      if (l.stopPropagation(), d && a && d.id !== a.id) {
        if (Rc(d))
          return;
        if ((!s || !s.name) && !Rc(s)) {
          const f = i.findTree(p, (g) => g.id === d.id, { children: "children" });
          if (f) {
            const { item: g, index: D, items: b } = f;
            a.children.length || (a.children = i.range(0, a.options.colSize).map(() => t.createEmptyWidget())), a.children[c] = g, b.splice(D, 1);
          }
        }
      }
    };
    return () => {
      const { widget: l, span: a } = e, { dragWidget: c, activeWidget: p, sortWidget: d } = n;
      return r(vt, {
        span: a
      }, {
        default() {
          const s = l ? l.name : "", f = on.get(s) || {}, g = f.renderFormDesignWidgetEdit || f.renderFormDesignWidgetView, D = l || { name: s }, b = { widget: l, isEditMode: !0, isViewMode: !1, $formDesign: t, $formView: null }, x = p && l && p.id === l.id;
          return r("div", {
            class: ["vxe-form-design--widget-row-view", {
              "is--active": x,
              "is--sort": d && l && d.id === l.id,
              "is--drag": c && l && c.id === l.id
            }],
            "data-widget-id": l.id,
            onDragover: o,
            onClick(S) {
              l && t.handleClickWidget(S, l);
            }
          }, [
            g ? r("div", {
              class: "vxe-form-design--widget-row-view-item-wrapper"
            }, [
              r("div", {
                class: "vxe-form-design--widget-row-view-item-box vxe-form--item-row"
              }, It(g(D, b))),
              x ? r("div", {
                class: "vxe-form-design--preview-item-operate"
              }, [
                r($n, {
                  icon: dt().FORM_DESIGN_WIDGET_COPY,
                  status: "primary",
                  size: "mini",
                  circle: !0,
                  onClick(S) {
                    t.handleCopyWidget(S.$event, l);
                  }
                }),
                r($n, {
                  icon: dt().FORM_DESIGN_WIDGET_DELETE,
                  status: "danger",
                  size: "mini",
                  circle: !0,
                  onClick(S) {
                    t.handleRemoveWidget(S.$event, l);
                  }
                })
              ]) : Me()
            ]) : r("div", {
              class: "vxe-form-design--widget-row-view-empty"
            }, "控件位置")
          ]);
        }
      });
    };
  }
}), AN = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = Q(() => {
      const { renderParams: n } = e, { widget: o } = n, { options: l } = o, { colSpan: a } = l;
      return (a ? `${a}`.split(",") : []).map((d) => Number(d));
    });
    return () => {
      const { renderParams: n } = e, { widget: o } = n;
      return r(Xr, {}, {
        default() {
          return t.value.map((a, c) => r(LN, {
            key: c,
            parentWidget: o,
            widget: o.children[c],
            span: a,
            colItemIndex: c
          }));
        }
      });
    };
  }
}), _N = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormDesign", null), n = Q(() => {
      const { renderParams: o } = e, { widget: l } = o, { options: a } = l, { colSpan: c } = a;
      return (c ? `${c}`.split(",") : []).map((s) => Number(s));
    });
    return () => {
      const { renderParams: o } = e, { widget: l } = o, a = n.value;
      return r(Jr, {
        gutter: 16
      }, {
        default() {
          return a.map((c, p) => r(Ur, {
            key: p,
            class: "vxe-form--item-row",
            span: c
          }, {
            default() {
              const d = l.children[p];
              if (d) {
                const { name: s } = d, g = (on.get(s) || {}).renderFormDesignWidgetView, D = d, b = { widget: d, isEditMode: !1, isViewMode: !0, $formDesign: t, $formView: null };
                if (g)
                  return It(g(D, b));
              }
              return Me();
            }
          }));
        }
      });
    };
  }
}), WN = () => ({
  title: so,
  group: "layout",
  icon: "vxe-icon-subtable",
  options: {
    showCheckbox: !1
  }
}), BN = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    if (!ut("$xeFormDesign", null))
      return () => [];
    const n = rn(e);
    return () => {
      const { renderParams: o } = e, { widget: l } = o, { options: a } = l, c = n.value;
      return r(fn, {
        class: `vxe-form-design--widget-${c}-form`,
        vertical: !0,
        span: 24,
        titleBold: !0,
        titleOverflow: !0,
        data: a
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: l.title,
                  "onUpdate:modelValue"(p) {
                    l.title = p;
                  }
                });
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.subtableProp.showCheckbox"),
              field: "showCheckbox"
            }, {
              default() {
                return r(Fn, {
                  modelValue: a.showCheckbox,
                  "onUpdate:modelValue"(p) {
                    a.showCheckbox = p;
                  }
                });
              }
            })
          ];
        }
      });
    };
  }
}), HN = tt({
  props: {
    parentWidget: {
      type: Object,
      default: () => ({})
    },
    widget: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormDesign", null);
    if (!t)
      return () => [];
    const { reactData: n } = t, o = (s) => {
      s.stopPropagation();
      const { widgetObjList: f } = n, g = s.currentTarget, D = Number(g.getAttribute("data-widget-id")), b = i.findTree(f, (x) => x && x.id === D, { children: "children" });
      b && (n.dragWidget = null, n.sortSubWidget = b.item, n.sortSubWidget = b.item);
    }, l = (s) => {
      s.stopPropagation(), n.activeWidget = n.sortSubWidget, n.sortWidget = null;
    };
    let a = !1;
    const c = (s) => {
      const { sortSubWidget: f } = n;
      if (f && s.stopPropagation(), a) {
        s.preventDefault();
        return;
      }
      const { widget: g, parentWidget: D } = e;
      if (D && g && f && g.id !== f.id) {
        s.preventDefault();
        const b = D.children.map((S) => S);
        if (!b.length) {
          D.children.push(f), a = !1;
          return;
        }
        const x = i.findIndexOf(b, (S) => S.id === g.id);
        if (x > -1) {
          const S = i.findIndexOf(b, (y) => y.id === f.id);
          S > -1 && (b[S] = g, b[x] = f, D.children = b, a = !0, setTimeout(() => {
            a = !1;
          }, 150));
        }
      }
    }, p = (s) => {
      const { sortSubWidget: f } = n;
      f && s.preventDefault();
    }, d = (s) => {
      const { widget: f } = e;
      f && (n.sortSubWidget = f, t.handleClickWidget(s, f));
    };
    return () => {
      const { widget: s } = e, { dragWidget: f, activeWidget: g, sortSubWidget: D } = n, b = s ? s.name : "", x = on.get(b) || {}, S = x.renderFormDesignWidgetEdit || x.renderFormDesignWidgetView, y = s || { name: b }, h = { widget: s, isEditMode: !0, isViewMode: !1, $formDesign: t, $formView: null }, O = g && s && g.id === s.id;
      return r("div", {
        class: ["vxe-form-design--widget-subtable-view-item", {
          "is--active": O,
          "is--sort": D && s && D.id === s.id,
          "is--drag": f && s && f.id === s.id
        }],
        draggable: !0,
        "data-widget-id": s.id,
        onDragstart: o,
        onDragend: l,
        onDragenter: c,
        onDragover: p,
        onClick: d
      }, [
        r("div", {
          class: "vxe-form-design--widget-subtable-view-item-wrapper"
        }, [
          r("div", {
            class: "vxe-form-design--widget-subtable-view-item-box vxe-form--item-row"
          }, S ? It(S(y, h)) : []),
          O ? r("div", {
            class: "vxe-form-design--preview-item-operate"
          }, [
            r($n, {
              icon: dt().FORM_DESIGN_WIDGET_COPY,
              status: "primary",
              size: "mini",
              circle: !0,
              onClick(E) {
                t.handleCopyWidget(E.$event, s);
              }
            }),
            r($n, {
              icon: dt().FORM_DESIGN_WIDGET_DELETE,
              status: "danger",
              size: "mini",
              circle: !0,
              onClick(E) {
                t.handleRemoveWidget(E.$event, s);
              }
            })
          ]) : Me()
        ])
      ]);
    };
  }
}), zN = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormDesign", null);
    if (!t)
      return () => [];
    const { reactData: n } = t, o = (l) => {
      const { sortWidget: a, widgetObjList: c } = n, { renderParams: p } = e, { widget: d } = p;
      if (l.stopPropagation(), !(!a || !d || d.id === a.id)) {
        if (Rc(a)) {
          ue.modal && ue.modal.message({
            content: Te("vxe.formDesign.widgetProp.subtableProp.errSubDrag"),
            status: "error",
            id: "errSubDrag"
          });
          return;
        }
        if (d.name && !d.children.some((s) => s.id === a.id)) {
          const s = i.findTree(c, (f) => f.id === a.id, { children: "children" });
          if (s) {
            const { item: f, index: g, items: D } = s;
            n.sortWidget = null, n.sortSubWidget = f, n.activeWidget = f, d.children.push(f), D.splice(g, 1);
          }
        }
      }
    };
    return () => {
      const { renderParams: l } = e, { widget: a } = l, { title: c, children: p, options: d } = a, { showCheckbox: s } = d;
      return r(vt, {
        title: c,
        className: "vxe-form-design--widget-subtable-form-item"
      }, {
        default() {
          return r("div", {
            class: "vxe-form-design--widget-subtable-view"
          }, [
            r("div", {
              class: "vxe-form-design--widget-subtable-view-left"
            }, [
              s ? r("div", {
                class: "vxe-form-design--widget-subtable-col"
              }, [
                r("div", {
                  class: "vxe-form-design--widget-subtable-head"
                }, [
                  r(hr)
                ]),
                r("div", {
                  class: "vxe-form-design--widget-subtable-body"
                }, [
                  r(hr)
                ])
              ]) : Me(),
              r("div", {
                class: "vxe-form-design--widget-subtable-col"
              }, [
                r("div", {
                  class: "vxe-form-design--widget-subtable-head"
                }, Te("vxe.formDesign.widgetProp.subtableProp.seqTitle")),
                r("div", {
                  class: "vxe-form-design--widget-subtable-body"
                }, "1")
              ])
            ]),
            r("div", {
              class: "vxe-form-design--widget-subtable-view-right"
            }, [
              r("div", {
                class: "vxe-form-design--widget-subtable-view-wrapper"
              }, [
                r(fa, {
                  class: "vxe-form-design--widget-subtable-view-list",
                  tag: "div",
                  name: "vxe-form-design--widget-subtable-view-list"
                }, {
                  default: () => p.map((f) => r(HN, {
                    key: f.id,
                    parentWidget: a,
                    widget: f
                  }))
                }),
                r("div", {
                  key: "empty",
                  class: "vxe-form-design--widget-subtable-view-empty",
                  onDragover: o
                }, "将控件拖拽进来")
              ])
            ])
          ]);
        }
      });
    };
  }
}), jN = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ue.getComponent("VxeGrid"), n = ut("$xeFormView", null), o = rn(e), l = Q(() => {
      const { renderParams: a } = e, { widget: c } = a, { children: p, options: d } = c, s = [];
      return d.showCheckbox && s.push({
        type: "checkbox",
        width: 60
      }), s.push({
        type: "seq",
        width: 60
      }), p && p.forEach((f) => {
        s.push({
          field: f.field,
          title: f.title
        });
      }), s;
    });
    return () => {
      const { renderParams: a } = e, { widget: c } = a, p = o.value, d = l.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${p}`],
        title: c.title,
        field: c.field,
        span: 24
      }, {
        default() {
          return t ? r(t, {
            border: !0,
            columnConfig: {
              resizable: !0
            },
            data: n ? n.getItemValue(c) : null,
            columns: d
          }) : Me();
        }
      });
    };
  }
}), qN = () => ({
  title: so,
  icon: "vxe-icon-input",
  options: {
    placeholder: ""
  }
}), GN = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = rn(e);
    return () => {
      const { renderParams: n } = e, { widget: o } = n, l = t.value;
      return r(fn, {
        class: ["vxe-form-design--widget-render-form-wrapper", `widget-${l}`],
        vertical: !0,
        span: 24,
        titleBold: !0,
        titleOverflow: !0,
        data: o.options
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: o.title,
                  "onUpdate:modelValue"(a) {
                    o.title = a;
                  }
                });
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.placeholder"),
              field: "placeholder",
              itemRender: { name: "VxeInput" }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.required")
            }, {
              default() {
                return r(Fn, {
                  modelValue: o.required,
                  "onUpdate:modelValue"(a) {
                    o.required = a;
                  }
                });
              }
            })
          ];
        }
      });
    };
  }
}), UN = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormView", null), n = rn(e), o = () => {
      const { renderParams: l } = e, { widget: a } = l;
      if (t) {
        const c = t ? t.getItemValue(a) : null;
        t.updateItemStatus(a, c);
      }
    };
    return () => {
      const { renderParams: l } = e, { widget: a } = l, { options: c } = a, p = n.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${p}`],
        field: a.field,
        title: a.title
      }, {
        default() {
          return r("input", {
            class: "vxe-default-input",
            type: "text",
            placeholder: c.placeholder || Te("vxe.base.pleaseInput"),
            value: t ? t.getItemValue(a) : null,
            onChange: o,
            onInput(d) {
              t && t.setItemValue(a, d.target.value);
            }
          });
        }
      });
    };
  }
}), KN = () => ({
  title: so,
  icon: "vxe-icon-textarea",
  options: {
    placeholder: ""
  }
}), YN = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = rn(e);
    return () => {
      const { renderParams: n } = e, { widget: o } = n, l = t.value;
      return r(fn, {
        class: ["vxe-form-design--widget-render-form-wrapper", `widget-${l}`],
        vertical: !0,
        span: 24,
        titleBold: !0,
        titleOverflow: !0,
        data: o.options
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: o.title,
                  "onUpdate:modelValue"(a) {
                    o.title = a;
                  }
                });
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.placeholder"),
              field: "placeholder",
              itemRender: { name: "VxeInput" }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.required")
            }, {
              default() {
                return r(Fn, {
                  modelValue: o.required,
                  "onUpdate:modelValue"(a) {
                    o.required = a;
                  }
                });
              }
            })
          ];
        }
      });
    };
  }
}), XN = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormView", null), n = rn(e), o = () => {
      const { renderParams: l } = e, { widget: a } = l;
      if (t) {
        const c = t ? t.getItemValue(a) : null;
        t.updateItemStatus(a, c);
      }
    };
    return () => {
      const { renderParams: l } = e, { widget: a } = l, { options: c } = a, p = n.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${p}`],
        title: a.title,
        field: a.field
      }, {
        default() {
          return r("textarea", {
            class: "vxe-default-textarea",
            placeholder: c.placeholder || Te("vxe.base.pleaseInput"),
            value: t ? t.getItemValue(a) : null,
            onChange: o,
            onInput(d) {
              t && t.setItemValue(a, d.target.value);
            }
          });
        }
      });
    };
  }
}), ZN = () => ({
  title: so,
  icon: "vxe-icon-select",
  options: {
    options: i.range(0, 3).map((e, t) => ({
      value: Te("vxe.formDesign.widgetProp.dataSource.defValue", [t + 1])
    }))
  }
}), JN = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const { renderDataSourceFormItem: t } = _i(e, !0), n = rn(e);
    return () => {
      const { renderParams: o } = e, { widget: l } = o, a = n.value;
      return r(fn, {
        class: ["vxe-form-design--widget-render-form-wrapper", `widget-${a}`],
        vertical: !0,
        span: 24,
        titleBold: !0,
        titleOverflow: !0,
        data: l.options
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: l.title,
                  "onUpdate:modelValue"(c) {
                    l.title = c;
                  }
                });
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.required")
            }, {
              default() {
                return r(Fn, {
                  modelValue: l.required,
                  "onUpdate:modelValue"(c) {
                    l.required = c;
                  }
                });
              }
            }),
            t()
          ];
        }
      });
    };
  }
}), QN = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormView", null), n = rn(e), o = () => {
      const { renderParams: a } = e, { widget: c } = a;
      if (t) {
        const p = t ? t.getItemValue(c) : null;
        t.updateItemStatus(c, p);
      }
    }, l = () => {
      const { renderParams: a } = e, { widget: c } = a, { options: p } = c.options;
      return p ? p.map((d) => d.options ? r("optgroup", {
        label: d.value
      }, d.options.map((s) => r("option", {
        value: s.value
      }, s.value))) : r("option", {}, d.value)) : [];
    };
    return () => {
      const { renderParams: a } = e, { widget: c, isViewMode: p } = a, d = n.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${d}`],
        field: c.field,
        title: c.title
      }, {
        default() {
          return r("select", {
            class: "vxe-default-select",
            value: t ? t.getItemValue(c) : null,
            onChange: o
          }, p ? l() : []);
        }
      });
    };
  }
}), eF = () => ({
  title: so,
  icon: "vxe-icon-input",
  options: {
    placeholder: ""
  }
}), tF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = rn(e);
    return () => {
      const { renderParams: n } = e, { widget: o } = n, l = t.value;
      return r(fn, {
        class: ["vxe-form-design--widget-render-form-wrapper", `widget-${l}`],
        vertical: !0,
        span: 24,
        titleBold: !0,
        titleOverflow: !0,
        data: o.options
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: o.title,
                  "onUpdate:modelValue"(a) {
                    o.title = a;
                  }
                });
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.placeholder"),
              field: "placeholder",
              itemRender: { name: "VxeInput" }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.required")
            }, {
              default() {
                return r(Fn, {
                  modelValue: o.required,
                  "onUpdate:modelValue"(a) {
                    o.required = a;
                  }
                });
              }
            })
          ];
        }
      });
    };
  }
}), nF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormView", null), n = rn(e), o = () => {
      const { renderParams: l } = e, { widget: a } = l;
      if (t) {
        const c = t ? t.getItemValue(a) : null;
        t.updateItemStatus(a, c);
      }
    };
    return () => {
      const { renderParams: l } = e, { widget: a } = l, c = n.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${c}`],
        field: a.field,
        title: a.title
      }, {
        default() {
          return r(Dn, {
            modelValue: t ? t.getItemValue(a) : null,
            onChange: o,
            "onUpdate:modelValue"(p) {
              t && t.setItemValue(a, p);
            }
          });
        }
      });
    };
  }
}), oF = () => ({
  title: so,
  icon: "vxe-icon-number",
  options: {
    placeholder: ""
  }
}), rF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = rn(e);
    return () => {
      const { renderParams: n } = e, { widget: o } = n, l = t.value;
      return r(fn, {
        class: ["vxe-form-design--widget-render-form-wrapper", `widget-${l}`],
        vertical: !0,
        span: 24,
        titleBold: !0,
        data: o.options
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: o.title,
                  "onUpdate:modelValue"(a) {
                    o.title = a;
                  }
                });
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.placeholder"),
              field: "placeholder",
              itemRender: { name: "VxeInput" }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.required")
            }, {
              default() {
                return r(Fn, {
                  modelValue: o.required,
                  "onUpdate:modelValue"(a) {
                    o.required = a;
                  }
                });
              }
            })
          ];
        }
      });
    };
  }
});
function zs(e) {
  return i.isString(e) ? e.replace(/,/g, "") : e;
}
function Mp(e, t) {
  return /^-/.test("" + e) ? i.toFixed(i.ceil(e, t), t) : i.toFixed(i.floor(e, t), t);
}
const Ts = tt({
  name: "VxeNumberInput",
  props: {
    modelValue: [String, Number],
    immediate: { type: Boolean, default: !0 },
    name: String,
    type: { type: String, default: "number" },
    clearable: { type: Boolean, default: () => me().numberInput.clearable },
    readonly: {
      type: Boolean,
      default: null
    },
    disabled: {
      type: Boolean,
      default: null
    },
    placeholder: {
      type: String,
      default: () => i.eqNull(me().numberInput.placeholder) ? Te("vxe.base.pleaseInput") : me().numberInput.placeholder
    },
    maxlength: [String, Number],
    autocomplete: { type: String, default: "off" },
    align: String,
    form: String,
    className: String,
    size: { type: String, default: () => me().numberInput.size || me().size },
    multiple: Boolean,
    // number、integer、float
    min: { type: [String, Number], default: null },
    max: { type: [String, Number], default: null },
    step: [String, Number],
    exponential: { type: Boolean, default: () => me().numberInput.exponential },
    // number、integer、float
    controls: { type: Boolean, default: () => me().numberInput.controls },
    // float
    digits: { type: [String, Number], default: () => me().numberInput.digits },
    prefixIcon: String,
    suffixIcon: String
  },
  emits: [
    "update:modelValue",
    "input",
    "change",
    "keydown",
    "keyup",
    "wheel",
    "click",
    "focus",
    "blur",
    "clear",
    "prev-number",
    "next-number",
    "prefix-click",
    "suffix-click"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = ut("$xeForm", null), a = ut("xeFormItemInfo", null), c = i.uniqueId(), { computeSize: p } = Ln(e), d = Ot({
      inited: !1,
      panelIndex: 0,
      showPwd: !1,
      visiblePanel: !1,
      animatVisible: !1,
      panelStyle: null,
      panelPlacement: "",
      isActivated: !1,
      inputValue: e.modelValue,
      datetimePanelValue: null,
      datePanelValue: null,
      datePanelLabel: "",
      datePanelType: "day",
      selectMonth: null,
      currentDate: null
    }), s = Ie(), f = Ie(), g = Ie(), D = {
      refElem: s,
      refInput: f
    }, b = {
      xID: c,
      props: e,
      context: t,
      reactData: d,
      getRefMaps: () => D
    };
    let x = {};
    const S = Q(() => {
      const { readonly: pe } = e;
      return pe === null ? l ? l.props.readonly : !1 : pe;
    }), y = Q(() => {
      const { disabled: pe } = e;
      return pe === null ? l ? l.props.disabled : !1 : pe;
    }), h = Q(() => !0), O = Q(() => i.toInteger(e.digits) || 1), E = Q(() => {
      const { type: pe } = e, Y = O.value, le = e.step;
      return pe === "integer" ? i.toInteger(le) || 1 : pe === "float" ? i.toNumber(le) || 1 / Math.pow(10, Y) : i.toNumber(le) || 1;
    }), T = Q(() => e.clearable), W = Q(() => {
      const { multiple: pe } = e;
      return S.value || pe;
    }), $ = Q(() => {
      const { placeholder: pe } = e;
      return pe ? Vn(pe) : "";
    }), I = Q(() => {
      const { maxlength: pe } = e;
      return i.toNumber(pe) ? pe : 16;
    }), z = Q(() => {
      const { type: pe, immediate: Y } = e;
      return Y || !(pe === "number" || pe === "integer" || pe === "float");
    }), te = Q(() => {
      const { type: pe } = e, { inputValue: Y } = d;
      return h.value ? pe === "integer" ? i.toInteger(zs(Y)) : i.toNumber(zs(Y)) : 0;
    }), Ce = Q(() => {
      const { min: pe } = e, { inputValue: Y } = d, le = h.value, he = te.value;
      return (Y || Y === 0) && le && pe !== null ? he <= i.toNumber(pe) : !1;
    }), N = Q(() => {
      const { max: pe } = e, { inputValue: Y } = d, le = h.value, he = te.value;
      return (Y || Y === 0) && le && pe !== null ? he >= i.toNumber(pe) : !1;
    }), F = (pe) => {
      const { type: Y, exponential: le } = e, he = I.value, He = O.value, se = Y === "float" ? Mp(pe, He) : i.toValueString(pe);
      return le && (pe === se || i.toValueString(pe).toLowerCase() === i.toNumber(se).toExponential()) ? pe : se.slice(0, he);
    }, j = (pe) => {
      const { inputValue: Y } = d;
      x.dispatchEvent(pe.type, { value: Y }, pe);
    }, ee = (pe, Y) => {
      d.inputValue = pe, o("update:modelValue", pe ? Number(pe) : null), x.dispatchEvent("input", { value: pe }, Y), i.toValueString(e.modelValue) !== pe && (x.dispatchEvent("change", { value: pe }, Y), l && a && l.triggerItemEvent(Y, a.itemConfig.field, pe));
    }, oe = (pe, Y) => {
      const le = z.value;
      d.inputValue = pe, le ? ee(pe, Y) : x.dispatchEvent("input", { value: pe }, Y);
    }, re = (pe) => {
      const le = pe.target.value;
      oe(le, pe);
    }, G = (pe) => {
      z.value || j(pe);
    }, J = (pe) => {
      d.isActivated = !0, j(pe);
    }, A = (pe) => {
      if (!y.value) {
        const { inputValue: le } = d;
        x.dispatchEvent("prefix-click", { value: le }, pe);
      }
    }, M = (pe, Y) => {
      focus(), ee("", pe), x.dispatchEvent("clear", { value: Y }, pe);
    }, H = (pe) => {
      if (!y.value) {
        const { inputValue: le } = d;
        x.dispatchEvent("suffix-click", { value: le }, pe);
      }
    }, ne = () => {
      const { type: pe } = e, { inputValue: Y } = d, le = O.value;
      if (pe === "float" && Y) {
        const he = Mp(Y, le);
        Y !== he && ee(he, { type: "init" });
      }
    }, de = (pe) => e.max === null || i.toNumber(pe) <= i.toNumber(e.max), ve = (pe) => e.min === null || i.toNumber(pe) >= i.toNumber(e.min), Oe = () => {
      const { type: pe, min: Y, max: le, exponential: he } = e, { inputValue: He } = d;
      if (!W.value && He) {
        let Se = pe === "integer" ? i.toInteger(zs(He)) : i.toNumber(zs(He));
        if (ve(Se) ? de(Se) || (Se = le) : Se = Y, he) {
          const ze = i.toValueString(He).toLowerCase();
          ze === i.toNumber(Se).toExponential() && (Se = ze);
        }
        ee(F(Se), { type: "check" });
      }
    }, Fe = (pe) => {
      const { inputValue: Y } = d;
      z.value || ee(Y, pe), Oe(), d.visiblePanel || (d.isActivated = !1), x.dispatchEvent("blur", { value: Y }, pe);
    }, R = (pe, Y) => {
      const { min: le, max: he, type: He } = e, { inputValue: se } = d, Se = E.value, ze = He === "integer" ? i.toInteger(zs(se)) : i.toNumber(zs(se)), Xe = pe ? i.add(ze, Se) : i.subtract(ze, Se);
      let et;
      ve(Xe) ? de(Xe) ? et = Xe : et = he : et = le, oe(F(et), Y);
    };
    let k;
    const U = (pe) => {
      const Y = y.value, le = S.value, he = Ce.value;
      clearTimeout(k), !Y && !le && !he && R(!1, pe), x.dispatchEvent("next-number", {}, pe);
    }, _ = (pe) => {
      k = window.setTimeout(() => {
        U(pe), _(pe);
      }, 60);
    }, K = (pe) => {
      const Y = y.value, le = S.value, he = N.value;
      clearTimeout(k), !Y && !le && !he && R(!0, pe), x.dispatchEvent("prev-number", {}, pe);
    }, Z = (pe) => {
      const Y = it.hasKey(pe, Vt.ARROW_UP), le = it.hasKey(pe, Vt.ARROW_DOWN);
      (Y || le) && (pe.preventDefault(), Y ? K(pe) : U(pe));
    }, ke = (pe) => {
      const { exponential: Y, controls: le } = e;
      if (h.value) {
        const He = pe.ctrlKey, se = pe.shiftKey, Se = pe.altKey, ze = pe.keyCode;
        !He && !se && !Se && (it.hasKey(pe, Vt.SPACEBAR) || (!Y || ze !== 69) && ze >= 65 && ze <= 90 || ze >= 186 && ze <= 188 || ze >= 191) && pe.preventDefault(), le && Z(pe);
      }
      j(pe);
    }, ye = (pe) => {
      j(pe);
    }, Ee = () => {
      clearTimeout(k);
    }, xe = (pe) => {
      k = window.setTimeout(() => {
        K(pe), xe(pe);
      }, 60);
    }, Le = (pe) => {
      if (Ee(), pe.button === 0) {
        const Y = Li(pe.currentTarget, "is--prev");
        Y ? K(pe) : U(pe), k = window.setTimeout(() => {
          Y ? xe(pe) : _(pe);
        }, 500);
      }
    }, je = (pe) => {
      if (h.value && e.controls && d.isActivated) {
        const le = pe.deltaY;
        le > 0 ? U(pe) : le < 0 && K(pe), pe.preventDefault();
      }
      j(pe);
    }, Ye = (pe) => {
      j(pe);
    }, fe = (pe) => {
      const { isActivated: Y } = d, le = s.value, he = g.value;
      !y.value && Y && (d.isActivated = Bn(pe, le).flag || Bn(pe, he).flag, d.isActivated || Oe());
    }, ge = (pe) => {
      const { clearable: Y } = e;
      if (!y.value) {
        const he = it.hasKey(pe, Vt.TAB), He = it.hasKey(pe, Vt.DELETE);
        let se = d.isActivated;
        he && (se && Oe(), se = !1, d.isActivated = se), He && Y && se && M(pe, null);
      }
    }, $e = () => {
      const { isActivated: pe } = d;
      pe && Oe();
    }, Ve = () => {
      const pe = N.value, Y = Ce.value;
      return r("div", {
        class: "vxe-input--control-icon"
      }, [
        r("div", {
          class: "vxe-input--number-icon"
        }, [
          r("div", {
            class: ["vxe-input--number-btn is--prev", {
              "is--disabled": pe
            }],
            onMousedown: Le,
            onMouseup: Ee,
            onMouseleave: Ee
          }, [
            r("i", {
              class: dt().NUMBER_INPUT_PREV_NUM
            })
          ]),
          r("div", {
            class: ["vxe-input--number-btn is--next", {
              "is--disabled": Y
            }],
            onMousedown: Le,
            onMouseup: Ee,
            onMouseleave: Ee
          }, [
            r("i", {
              class: dt().NUMBER_INPUT_NEXT_NUM
            })
          ])
        ])
      ]);
    }, ce = () => {
      const { prefixIcon: pe } = e, Y = n.prefix;
      return Y || pe ? r("div", {
        class: "vxe-number-input--prefix",
        onClick: A
      }, [
        r("div", {
          class: "vxe-number-input--prefix-icon"
        }, Y ? It(Y({})) : [
          r("i", {
            class: pe
          })
        ])
      ]) : null;
    }, We = () => {
      const { suffixIcon: pe } = e, { inputValue: Y } = d, le = n.suffix, he = y.value, He = T.value;
      return r("div", {
        class: ["vxe-number-input--suffix", {
          "is--clear": He && !he && !(Y === "" || i.eqNull(Y))
        }]
      }, [
        He ? r("div", {
          class: "vxe-number-input--clear-icon",
          onClick: M
        }, [
          r("i", {
            class: dt().INPUT_CLEAR
          })
        ]) : Me(),
        Ge(),
        le || pe ? r("div", {
          class: "vxe-number-input--suffix-icon",
          onClick: H
        }, le ? It(le({})) : [
          r("i", {
            class: pe
          })
        ]) : Me()
      ]);
    }, Ge = () => {
      const { controls: pe } = e;
      return pe ? Ve() : Me();
    };
    x = {
      dispatchEvent(pe, Y, le) {
        o(pe, zt(le, { $input: b }, Y));
      },
      focus() {
        const pe = f.value;
        return d.isActivated = !0, pe.focus(), ae();
      },
      blur() {
        return f.value.blur(), d.isActivated = !1, ae();
      },
      select() {
        return f.value.select(), d.isActivated = !1, ae();
      }
    }, Object.assign(b, x), lt(() => e.modelValue, (pe) => {
      d.inputValue = pe;
    }), lt(() => e.type, () => {
      Object.assign(d, {
        inputValue: e.modelValue,
        datetimePanelValue: null,
        datePanelValue: null,
        datePanelLabel: "",
        datePanelType: "day",
        selectMonth: null,
        currentDate: null
      }), ne();
    }), ae(() => {
      it.on(b, "mousedown", fe), it.on(b, "keydown", ge), it.on(b, "blur", $e);
    }), On(() => {
      Ee(), it.off(b, "mousedown"), it.off(b, "keydown"), it.off(b, "blur");
    }), ne();
    const Ze = () => {
      const { className: pe, controls: Y, type: le, align: he, name: He, autocomplete: se } = e, { inputValue: Se, isActivated: ze } = d, Xe = p.value, et = y.value;
      if (S.value)
        return r("div", {
          ref: s,
          class: ["vxe-number-input--readonly", `type--${le}`, pe]
        }, Se);
      const ft = W.value, mt = I.value, B = $.value, Mt = T.value, St = ce(), gt = We();
      return r("div", {
        ref: s,
        class: ["vxe-number-input", `type--${le}`, pe, {
          [`size--${Xe}`]: Xe,
          [`is--${he}`]: he,
          "is--controls": Y,
          "is--prefix": !!St,
          "is--suffix": !!gt,
          "is--disabled": et,
          "is--active": ze,
          "show--clear": Mt && !et && !(Se === "" || i.eqNull(Se))
        }]
      }, [
        St || Me(),
        r("div", {
          class: "vxe-number-input--wrapper"
        }, [
          r("input", {
            ref: f,
            class: "vxe-number-input--inner",
            value: Se,
            name: He,
            type: "text",
            placeholder: B,
            maxlength: mt,
            readonly: ft,
            disabled: et,
            autocomplete: se,
            onKeydown: ke,
            onKeyup: ye,
            onWheel: je,
            onClick: Ye,
            onInput: re,
            onChange: G,
            onFocus: J,
            onBlur: Fe
          })
        ]),
        gt || Me()
      ]);
    };
    return b.renderVN = Ze, b;
  },
  render() {
    return this.renderVN();
  }
}), sF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormView", null), n = rn(e), o = () => {
      const { renderParams: l } = e, { widget: a } = l;
      if (t) {
        const c = t ? t.getItemValue(a) : null;
        t.updateItemStatus(a, c);
      }
    };
    return () => {
      const { renderParams: l } = e, { widget: a } = l, c = n.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${c}`],
        title: a.title,
        field: a.field
      }, {
        default() {
          return r(Ts, {
            modelValue: t ? t.getItemValue(a) : null,
            onChange: o,
            "onUpdate:modelValue"(p) {
              t && t.setItemValue(a, p);
            }
          });
        }
      });
    };
  }
}), lF = () => ({
  title: so,
  icon: "vxe-icon-calendar",
  options: {
    placeholder: ""
  }
}), iF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = rn(e);
    return () => {
      const { renderParams: n } = e, { widget: o } = n, l = t.value;
      return r(fn, {
        class: ["vxe-form-design--widget-render-form-wrapper", `widget-${l}`],
        vertical: !0,
        span: 24,
        titleBold: !0,
        data: o.options
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: o.title,
                  "onUpdate:modelValue"(a) {
                    o.title = a;
                  }
                });
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.placeholder"),
              field: "placeholder",
              itemRender: { name: "VxeInput" }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.required")
            }, {
              default() {
                return r(Fn, {
                  modelValue: o.required,
                  "onUpdate:modelValue"(a) {
                    o.required = a;
                  }
                });
              }
            })
          ];
        }
      });
    };
  }
}), aF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormView", null), n = rn(e), o = () => {
      const { renderParams: l } = e, { widget: a } = l;
      if (t) {
        const c = t ? t.getItemValue(a) : null;
        t.updateItemStatus(a, c);
      }
    };
    return () => {
      const { renderParams: l } = e, { widget: a } = l, c = n.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${c}`],
        title: a.title,
        field: a.field
      }, {
        default() {
          return r(Br, {
            modelValue: t ? t.getItemValue(a) : null,
            onChange: o,
            "onUpdate:modelValue"(p) {
              t && t.setItemValue(a, p);
            }
          });
        }
      });
    };
  }
}), cF = () => ({
  title: so,
  icon: "vxe-icon-textarea",
  options: {
    placeholder: ""
  }
}), uF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = rn(e);
    return () => {
      const { renderParams: n } = e, { widget: o } = n, l = t.value;
      return r(fn, {
        class: ["vxe-form-design--widget-render-form-wrapper", `widget-${l}`],
        vertical: !0,
        span: 24,
        titleBold: !0,
        data: o.options
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: o.title,
                  "onUpdate:modelValue"(a) {
                    o.title = a;
                  }
                });
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.placeholder"),
              field: "placeholder",
              itemRender: { name: "VxeInput" }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.required")
            }, {
              default() {
                return r(Fn, {
                  modelValue: o.required,
                  "onUpdate:modelValue"(a) {
                    o.required = a;
                  }
                });
              }
            })
          ];
        }
      });
    };
  }
}), dF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormView", null), n = rn(e), o = () => {
      const { renderParams: l } = e, { widget: a } = l;
      if (t) {
        const c = t ? t.getItemValue(a) : null;
        t.updateItemStatus(a, c);
      }
    };
    return () => {
      const { renderParams: l } = e, { widget: a } = l, c = n.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${c}`],
        title: a.title,
        field: a.field
      }, {
        default() {
          return r(Zr, {
            modelValue: t ? t.getItemValue(a) : null,
            onChange: o,
            "onUpdate:modelValue"(p) {
              t && t.setItemValue(a, p);
            }
          });
        }
      });
    };
  }
}), fF = () => ({
  title: so,
  icon: "vxe-icon-switch",
  options: {}
}), pF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = rn(e);
    return () => {
      const { renderParams: n } = e, { widget: o } = n, l = t.value;
      return r(fn, {
        class: ["vxe-form-design--widget-render-form-wrapper", `widget-${l}`],
        vertical: !0,
        span: 24,
        titleBold: !0,
        titleOverflow: !0,
        data: o.options
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: o.title,
                  "onUpdate:modelValue"(a) {
                    o.title = a;
                  }
                });
              }
            })
          ];
        }
      });
    };
  }
}), mF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormView", null), n = rn(e), o = () => {
      const { renderParams: l } = e, { widget: a } = l;
      if (t) {
        const c = t ? t.getItemValue(a) : null;
        t.updateItemStatus(a, c);
      }
    };
    return () => {
      const { renderParams: l } = e, { widget: a } = l, c = n.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${c}`],
        field: a.field,
        title: a.title
      }, {
        default() {
          return r(Fn, {
            modelValue: t ? t.getItemValue(a) : null,
            onChange: o,
            "onUpdate:modelValue"(p) {
              t && t.setItemValue(a, p);
            }
          });
        }
      });
    };
  }
}), gF = () => ({
  title: so,
  icon: "vxe-icon-select",
  options: {
    placeholder: "",
    options: i.range(0, 3).map((e, t) => ({
      value: Te("vxe.formDesign.widgetProp.dataSource.defValue", [t + 1])
    }))
  }
}), vF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const { renderDataSourceFormItem: t } = _i(e, !1), n = rn(e);
    return () => {
      const { renderParams: o } = e, { widget: l } = o, a = n.value;
      return r(fn, {
        class: ["vxe-form-design--widget-render-form-wrapper", `widget-${a}`],
        vertical: !0,
        span: 24,
        titleBold: !0,
        titleOverflow: !0,
        data: l.options
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: l.title,
                  "onUpdate:modelValue"(c) {
                    l.title = c;
                  }
                });
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.placeholder"),
              field: "placeholder",
              itemRender: { name: "VxeInput" }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.required")
            }, {
              default() {
                return r(Fn, {
                  modelValue: l.required,
                  "onUpdate:modelValue"(c) {
                    l.required = c;
                  }
                });
              }
            }),
            t()
          ];
        }
      });
    };
  }
}), hF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormView", null), n = rn(e), o = () => {
      const { renderParams: l } = e, { widget: a } = l;
      if (t) {
        const c = t ? t.getItemValue(a) : null;
        t.updateItemStatus(a, c);
      }
    };
    return () => {
      const { renderParams: l } = e, { widget: a } = l, { options: c } = a, p = n.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${p}`],
        title: a.title,
        field: a.field
      }, {
        default() {
          return r(qo, {
            modelValue: t ? t.getItemValue(a) : null,
            placeholder: c.placeholder || Te("vxe.base.pleaseSelect"),
            options: c.options,
            optionProps: { label: "value", value: "value" },
            onChange: o,
            "onUpdate:modelValue"(d) {
              t && t.setItemValue(a, d);
            }
          });
        }
      });
    };
  }
}), bF = () => ({
  title: so,
  icon: "vxe-icon-radio-checked",
  options: {
    options: i.range(0, 3).map((e, t) => ({
      value: Te("vxe.formDesign.widgetProp.dataSource.defValue", [t + 1])
    }))
  }
}), xF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const { renderDataSourceFormItem: t } = _i(e, !1), n = rn(e);
    return () => {
      const { renderParams: o } = e, { widget: l } = o, a = n.value;
      return r(fn, {
        class: ["vxe-form-design--widget-render-form-wrapper", `widget-${a}`],
        vertical: !0,
        span: 24,
        titleBold: !0,
        titleOverflow: !0,
        data: l.options
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: l.title,
                  "onUpdate:modelValue"(c) {
                    l.title = c;
                  }
                });
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.placeholder"),
              field: "placeholder",
              itemRender: { name: "VxeInput" }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.required")
            }, {
              default() {
                return r(Fn, {
                  modelValue: l.required,
                  "onUpdate:modelValue"(c) {
                    l.required = c;
                  }
                });
              }
            }),
            t()
          ];
        }
      });
    };
  }
}), yF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormView", null), n = rn(e), o = () => {
      const { renderParams: l } = e, { widget: a } = l;
      if (t) {
        const c = t ? t.getItemValue(a) : null;
        t.updateItemStatus(a, c);
      }
    };
    return () => {
      const { renderParams: l } = e, { widget: a } = l, { options: c } = a, p = n.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${p}`],
        title: a.title,
        field: a.field
      }, {
        default() {
          return r(ho, {
            modelValue: t ? t.getItemValue(a) : null,
            options: c.options,
            optionProps: { label: "value", value: "value" },
            onChange: o,
            "onUpdate:modelValue"(d) {
              t && t.setItemValue(a, d);
            }
          });
        }
      });
    };
  }
}), CF = () => ({
  title: so,
  icon: "vxe-icon-checkbox-checked",
  options: {
    options: i.range(0, 3).map((e, t) => ({
      value: Te("vxe.formDesign.widgetProp.dataSource.defValue", [t + 1])
    }))
  }
}), wF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const { renderDataSourceFormItem: t } = _i(e, !1), n = rn(e);
    return () => {
      const { renderParams: o } = e, { widget: l } = o, a = n.value;
      return r(fn, {
        class: ["vxe-form-design--widget-render-form-wrapper", `widget-${a}`],
        vertical: !0,
        span: 24,
        titleBold: !0,
        titleOverflow: !0,
        data: l.options
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: l.title,
                  "onUpdate:modelValue"(c) {
                    l.title = c;
                  }
                });
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.placeholder"),
              field: "placeholder",
              itemRender: { name: "VxeInput" }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.required")
            }, {
              default() {
                return r(Fn, {
                  modelValue: l.required,
                  "onUpdate:modelValue"(c) {
                    l.required = c;
                  }
                });
              }
            }),
            t()
          ];
        }
      });
    };
  }
}), EF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormView", null), n = rn(e), o = () => {
      const { renderParams: l } = e, { widget: a } = l;
      if (t) {
        const c = t ? t.getItemValue(a) : null;
        t.updateItemStatus(a, c);
      }
    };
    return () => {
      const { renderParams: l } = e, { widget: a } = l, { options: c } = a, p = n.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${p}`],
        title: a.title,
        field: a.field
      }, {
        default() {
          return r(ws, {
            modelValue: t ? t.getItemValue(a) : null,
            options: c.options,
            optionProps: { label: "value", value: "value" },
            onChange: o,
            "onUpdate:modelValue"(d) {
              t && t.setItemValue(a, d);
            }
          });
        }
      });
    };
  }
});
function Jv() {
  const e = [
    { label: "无限制", value: "" }
  ];
  return [1, 2, 5, 10, 20, 50, 100, 200, 500].forEach((n) => {
    e.push({ label: `${n}M`, value: n });
  }), e;
}
const SF = () => ({
  title: so,
  icon: "vxe-icon-file",
  options: {
    limitCount: "",
    limitSize: 100,
    multiple: !1
  }
}), DF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = rn(e), n = Ie(Jv());
    return () => {
      const { renderParams: o } = e, { widget: l } = o, { options: a } = l, c = t.value;
      return r(fn, {
        class: ["vxe-form-design--widget-render-form-wrapper", `widget-${c}`],
        vertical: !0,
        span: 24,
        titleBold: !0,
        titleOverflow: !0,
        data: a
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: l.title,
                  "onUpdate:modelValue"(p) {
                    l.title = p;
                  }
                });
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.uploadProp.multiFile"),
              field: "multiple",
              itemRender: { name: "VxeSwitch" }
            }),
            a.multiple ? r(vt, {
              title: Te("vxe.formDesign.widgetProp.uploadProp.limitFileCount"),
              field: "limitCount",
              itemRender: { name: "VxeInput", props: { type: "integer", min: 1, clearable: !0 } }
            }) : Me(),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.uploadProp.limitFileSize"),
              field: "limitSize",
              itemRender: { name: "VxeSelect", options: n.value }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.required")
            }, {
              default() {
                return r(Fn, {
                  modelValue: l.required,
                  "onUpdate:modelValue"(p) {
                    l.required = p;
                  }
                });
              }
            })
          ];
        }
      });
    };
  }
});
let js = null, fr = null;
function OF(e) {
  const t = e.name, n = i.lastIndexOf(t, "."), o = t.substring(n + 1, t.length).toLowerCase();
  return { filename: t.substring(0, n), type: o };
}
const ku = (e) => {
  const t = Object.assign({}, e);
  return new Promise((n, o) => {
    fr || (fr = document.createElement("input"), fr.name = "file", fr.type = "file"), js || (js = document.createElement("form"), js.className = "vxe-table--file-form", js.appendChild(fr), document.body.appendChild(js));
    const l = t.types || [], a = !l.length || l.some((c) => c === "*");
    fr.multiple = !!t.multiple, fr.accept = a ? "" : `.${l.join(", .")}`, fr.onchange = (c) => {
      const p = c.target, d = Array.from(p.files || []), s = d[0];
      let f = "";
      if (!a)
        for (let g = 0; g < d.length; g++) {
          const { type: D } = OF(d[g]);
          if (!i.includes(l, D)) {
            f = D;
            break;
          }
        }
      f ? (t.message !== !1 && ue.modal && ue.modal.message({
        content: Te("vxe.error.notType", [f]),
        status: "error"
      }), o({ status: !1, files: d, file: s })) : n({ status: !0, files: d, file: s });
    }, js.reset(), fr.click();
  });
};
function TF(e, t) {
  return new Blob([e], { type: `text/${t.type};charset=utf-8;` });
}
const Qv = (e) => {
  const t = Object.assign({ type: "" }, e), { filename: n, type: o, content: l } = t, a = o ? `${n}.${o}` : `${n}`;
  if (window.Blob) {
    const c = l instanceof Blob ? l : TF(i.toValueString(l), t), p = window.navigator;
    if (p.msSaveBlob)
      p.msSaveBlob(c, a);
    else {
      const d = URL.createObjectURL(c), s = document.createElement("a");
      s.target = "_blank", s.download = a, s.href = d, document.body.appendChild(s), s.click(), requestAnimationFrame(() => {
        s.parentNode && s.parentNode.removeChild(s), URL.revokeObjectURL(d);
      });
    }
    return Promise.resolve();
  }
  return Promise.reject(new Error(Te("vxe.error.notExp")));
}, Qr = tt({
  name: "VxeUpload",
  props: {
    modelValue: Array,
    showList: {
      type: Boolean,
      default: () => me().upload.showList
    },
    readonly: {
      type: Boolean,
      default: null
    },
    disabled: {
      type: Boolean,
      default: null
    },
    mode: {
      type: String,
      default: () => me().upload.mode
    },
    imageTypes: {
      type: Array,
      default: () => i.clone(me().upload.imageTypes, !0)
    },
    fileTypes: {
      type: Array,
      default: () => i.clone(me().upload.fileTypes, !0)
    },
    multiple: Boolean,
    limitSize: {
      type: [String, Number],
      default: () => me().upload.limitSize
    },
    limitCount: {
      type: [String, Number],
      default: () => me().upload.limitCount
    },
    nameField: {
      type: String,
      default: () => me().upload.nameField
    },
    typeField: {
      type: String,
      default: () => me().upload.typeField
    },
    urlField: {
      type: String,
      default: () => me().upload.urlField
    },
    sizeField: {
      type: String,
      default: () => me().upload.sizeField
    },
    showErrorStatus: {
      type: Boolean,
      default: () => me().upload.showErrorStatus
    },
    showProgress: {
      type: Boolean,
      default: () => me().upload.showProgress
    },
    autoHiddenButton: {
      type: Boolean,
      default: () => me().upload.autoHiddenButton
    },
    buttonText: {
      type: String,
      default: () => me().upload.buttonText
    },
    tipText: String,
    hintText: String,
    uploadMethod: Function,
    getUrlMethod: Function
  },
  emits: [
    "update:modelValue",
    "add",
    "remove",
    "upload-success",
    "upload-error"
  ],
  setup(e, t) {
    const { emit: n, slots: o } = t, l = ut("$xeForm", null), a = ut("xeFormItemInfo", null), c = i.uniqueId(), p = Ie(), d = Ot({
      isDrag: !1,
      fileList: []
    }), s = {
      refElem: p
    }, f = Q(() => {
      const { readonly: R } = e;
      return R === null ? l ? l.props.readonly : !1 : R;
    }), g = Q(() => {
      const { disabled: R } = e;
      return R === null ? l ? l.props.disabled : !1 : R;
    }), D = Q(() => e.mode === "image"), b = Q(() => e.nameField || "name"), x = Q(() => e.typeField || "type"), S = Q(() => e.urlField || "url"), y = Q(() => e.sizeField || "size"), h = Q(() => i.toNumber(e.limitSize) * 1024 * 1024), O = Q(() => e.multiple ? i.toNumber(e.limitCount) : 1), E = Q(() => {
      const { multiple: R } = e, { fileList: k } = d, U = O.value;
      return R ? U ? k.length >= U : !0 : k.length >= 1;
    }), T = Q(() => {
      const R = i.toNumber(e.limitSize);
      return R ? R > 1048576 ? `${R / 1048576}T` : R > 1024 ? `${R / 1024}G` : `${R}M` : "";
    }), W = Q(() => {
      const { limitSize: R, fileTypes: k, multiple: U, limitCount: _ } = e, K = e.tipText || e.hintText, Z = D.value, ke = T.value;
      if (i.isString(K))
        return K;
      const ye = [];
      return Z ? (U && _ && ye.push(Te("vxe.upload.imgCountHint", [_])), R && ke && ye.push(Te("vxe.upload.imgSizeHint", [ke]))) : (k && k.length && ye.push(Te("vxe.upload.fileTypeHint", [k.join("/")])), R && ke && ye.push(Te("vxe.upload.fileSizeHint", [ke])), U && _ && ye.push(Te("vxe.upload.fileCountHint", [_]))), ye.join(Te("vxe.base.comma"));
    }), $ = {}, I = {
      xID: c,
      props: e,
      context: t,
      reactData: d,
      getRefMaps: () => s,
      getComputeMaps: () => $
    }, z = () => {
      const { modelValue: R, multiple: k } = e, U = f.value, _ = b.value, K = x.value, Z = S.value, ke = y.value, ye = R ? R.map((Ee) => {
        const xe = Ee[_] || "";
        return Ee[_] = xe, Ee[K] = Ee[K] || te(xe), Ee[Z] = Ee[Z] || "", Ee[ke] = Ee[ke] || 0, Ee;
      }) : [];
      d.fileList = U || k ? ye : ye.slice(0, 1);
    }, te = (R) => {
      const k = R ? R.indexOf(".") : -1;
      return k > -1 ? R.substring(k + 1, R.length).toLowerCase() : "";
    }, Ce = {
      dispatchEvent(R, k, U) {
        n(R, zt(U, { $upload: I }, k));
      }
    }, N = (R) => {
      n("update:modelValue", R ? R.slice(0) : []);
    }, F = (R) => {
      const k = e.getUrlMethod || me().upload.getUrlMethod, U = S.value;
      return k ? k({ option: R }) : R[U];
    }, j = (R, k, U) => {
      const { fileList: _ } = d;
      ue.previewImage && ue.previewImage({
        urlList: _.map((K) => F(K)),
        activeIndex: U
      });
    }, ee = (R, k) => {
      const { showErrorStatus: U } = e, _ = e.uploadMethod || me().upload.uploadMethod;
      _ && R._X_DATA && Promise.resolve(_({
        file: k,
        option: R,
        updateProgress(K) {
          Object.assign(R._X_DATA || {}, { p: Math.max(0, Math.min(99, i.toNumber(K))) });
        }
      })).then((K) => {
        Object.assign(R._X_DATA || {}, { l: !1, p: 100 }), Object.assign(R, K), Ce.dispatchEvent("upload-success", { option: R, data: K }, null);
      }).catch((K) => {
        Object.assign(R._X_DATA || {}, { l: !1, s: "error" }), U ? Object.assign(R, K) : d.fileList = d.fileList.filter((Z) => Z._X_DATA !== R._X_DATA), Ce.dispatchEvent("upload-error", { option: R, data: K }, null);
      });
    }, oe = (R) => {
      if ((e.uploadMethod || me().upload.uploadMethod) && R._X_DATA) {
        const U = R._X_DATA.f;
        Object.assign(R._X_DATA, {
          l: !0,
          s: "",
          p: 0
        }), ee(R, U);
      }
    }, re = (R, k) => {
      const { multiple: U } = e, { fileList: _ } = d, K = e.uploadMethod || me().upload.uploadMethod, Z = b.value, ke = x.value, ye = S.value, Ee = y.value, xe = h.value, Le = O.value, je = T.value;
      let Ye = R;
      if (Le) {
        if (_.length >= Le) {
          ue.modal && ue.modal.notification({
            title: Te("vxe.modal.errTitle"),
            status: "error",
            content: Te("vxe.upload.overCountErr", [Le])
          });
          return;
        }
        const ge = Ye.length - (Le - _.length);
        if (ge > 0) {
          const $e = Ye.slice(Le - _.length);
          ue.modal && ue.modal.notification({
            title: Te("vxe.modal.errTitle"),
            status: "error",
            slots: {
              default() {
                return r("div", {
                  class: "vxe-upload--file-message-over-error"
                }, [
                  r("div", {}, Te("vxe.upload.overCountExtraErr", [Le, ge])),
                  r("div", {
                    class: "vxe-upload--file-message-over-extra"
                  }, $e.map((Ve, ce) => r("div", {
                    key: ce,
                    class: "vxe-upload--file-message-over-extra-item"
                  }, Ve.name)))
                ]);
              }
            }
          });
        }
        Ye = Ye.slice(0, Le - _.length);
      }
      if (xe) {
        for (let ge = 0; ge < R.length; ge++)
          if (R[0].size > xe) {
            ue.modal && ue.modal.notification({
              title: Te("vxe.modal.errTitle"),
              status: "error",
              content: Te("vxe.upload.overSizeErr", [je])
            });
            return;
          }
      }
      const fe = U ? _ : [];
      Ye.forEach((ge) => {
        const { name: $e } = ge, Ve = {
          [Z]: $e,
          [ke]: te($e),
          [Ee]: ge.size,
          [ye]: ""
        };
        K && (Ve._X_DATA = {
          k: i.uniqueId(),
          f: ge,
          l: !0,
          s: "",
          p: 0
        });
        const ce = Ot(Ve);
        K && ee(ce, ge), fe.push(ce), Ce.dispatchEvent("add", { option: ce }, k);
      }), d.fileList = fe, N(fe), l && a && l.triggerItemEvent(k, a.itemConfig.field, fe);
    }, G = (R) => {
      const { multiple: k, imageTypes: U, fileTypes: _ } = e, K = g.value, Z = D.value;
      K || ku({
        multiple: k,
        types: Z ? U : _
      }).then(({ files: ke }) => {
        re(ke, R);
      }).catch(() => {
      });
    }, J = (R, k, U) => {
      const { fileList: _ } = d;
      _.splice(U, 1), N(_), Ce.dispatchEvent("remove", { option: k }, R), l && a && l.triggerItemEvent(R, a.itemConfig.field, _);
    }, A = (R) => {
      const k = p.value, { clientX: U, clientY: _ } = R;
      if (k) {
        const { x: K, y: Z, height: ke, width: ye } = k.getBoundingClientRect();
        (U < K || U > K + ye || _ < Z || _ > Z + ke) && (d.isDrag = !1);
      }
    }, M = (R) => {
      const k = R.dataTransfer;
      if (k) {
        const { items: U } = k;
        U && U.length && (R.preventDefault(), d.isDrag = !0);
      }
    }, H = (R) => {
      const k = R.dataTransfer;
      if (k) {
        const { items: U } = k;
        if (U && U.length) {
          const _ = [];
          Array.from(U).forEach((K) => {
            const Z = K.getAsFile();
            Z && _.push(Z);
          }), re(_, R), R.preventDefault();
        }
      }
      d.isDrag = !1;
    };
    Object.assign(I, Ce, {});
    const de = () => {
      const { buttonText: R, showProgress: k, showErrorStatus: U, autoHiddenButton: _ } = e, { fileList: K } = d, Z = o.default, ke = o.tip || o.hint, ye = g.value, Ee = f.value, xe = b.value, Le = x.value, je = W.value, Ye = E.value;
      return r("div", {
        key: "all",
        class: "vxe-upload--file-wrapper"
      }, [
        Ee ? Me() : r("div", {
          class: "vxe-upload--file-action"
        }, [
          _ && Ye ? Me() : r("div", {
            class: "vxe-upload--file-action-btn",
            onClick: G
          }, Z ? It(Z({ $upload: I })) : [
            r($n, {
              content: R ? `${R}` : Te("vxe.upload.fileBtnText"),
              icon: dt().UPLOAD_FILE_ADD,
              disabled: ye
            })
          ]),
          je || ke ? r("div", {
            class: "vxe-upload--file-action-tip"
          }, ke ? It(ke({ $upload: I })) : je) : Me()
        ]),
        K.length ? r("div", {
          class: "vxe-upload--file-list"
        }, K.map((fe, ge) => {
          const $e = fe._X_DATA && fe._X_DATA.l, Ve = fe._X_DATA && fe._X_DATA.s === "error";
          return r("div", {
            key: ge,
            class: ["vxe-upload--file-item", {
              "is--loading": $e,
              "is--error": Ve
            }]
          }, [
            r("div", {
              class: "vxe-upload--file-item-icon"
            }, [
              r("i", {
                class: dt()[`UPLOAD_FILE_TYPE_${`${fe[Le]}`.toLocaleUpperCase()}`] || dt().UPLOAD_FILE_TYPE_DEFAULT
              })
            ]),
            r("div", {
              class: "vxe-upload--file-item-name"
            }, `${fe[xe] || ""}`),
            $e ? r("div", {
              class: "vxe-upload--file-item-loading-icon"
            }, [
              r("i", {
                class: dt().UPLOAD_LOADING
              })
            ]) : Me(),
            k && $e && fe._X_DATA ? r("div", {
              class: "vxe-upload--file-item-loading-text"
            }, Te("vxe.upload.uploadProgress", [fe._X_DATA.p])) : Me(),
            U && Ve ? r("div", {
              class: "vxe-upload--image-item-error"
            }, [
              r($n, {
                icon: dt().UPLOAD_IMAGE_RE_UPLOAD,
                mode: "text",
                status: "primary",
                content: Te("vxe.upload.reUpload"),
                onClick() {
                  oe(fe);
                }
              })
            ]) : Me(),
            !Ee && !ye && !$e ? r("div", {
              class: "vxe-upload--file-item-remove-icon",
              onClick(ce) {
                J(ce, fe, ge);
              }
            }, [
              r("i", {
                class: dt().UPLOAD_FILE_DELETE
              })
            ]) : Me()
          ]);
        })) : Me()
      ]);
    }, ve = () => {
      const { buttonText: R, showProgress: k, showErrorStatus: U, autoHiddenButton: _ } = e, { fileList: K } = d, Z = g.value, ke = f.value, ye = W.value, Ee = E.value, xe = o.default, Le = o.hint;
      return r("div", {
        key: "image",
        class: "vxe-upload--image-wrapper"
      }, [
        r("div", {
          class: "vxe-upload--image-list"
        }, K.map((je, Ye) => {
          const fe = je._X_DATA && je._X_DATA.l, ge = je._X_DATA && je._X_DATA.s === "error";
          return r("div", {
            key: Ye,
            class: ["vxe-upload--image-item", {
              "is--loading": fe,
              "is--error": ge
            }]
          }, [
            r("div", {
              class: "vxe-upload--image-item-box",
              onClick($e) {
                !fe && !ge && j($e, je, Ye);
              }
            }, [
              fe && je._X_DATA ? r("div", {
                class: "vxe-upload--image-item-loading"
              }, [
                r("div", {
                  class: "vxe-upload--image-item-loading-icon"
                }, [
                  r("i", {
                    class: dt().UPLOAD_LOADING
                  })
                ]),
                k ? r("div", {
                  class: "vxe-upload--image-item-loading-text"
                }, Te("vxe.upload.uploadProgress", [je._X_DATA.p])) : Me()
              ]) : Me(),
              fe ? Me() : ge && U ? r("div", {
                class: "vxe-upload--image-item-error"
              }, [
                r($n, {
                  icon: dt().UPLOAD_IMAGE_RE_UPLOAD,
                  mode: "text",
                  status: "primary",
                  content: Te("vxe.upload.reUpload"),
                  onClick() {
                    oe(je);
                  }
                })
              ]) : r("img", {
                class: "vxe-upload--image-item-img",
                src: F(je)
              }),
              !ke && !Z && !fe ? r("div", {
                class: "vxe-upload--image-item-remove-icon",
                onClick($e) {
                  $e.stopPropagation(), J($e, je, Ye);
                }
              }, [
                r("i", {
                  class: dt().UPLOAD_IMAGE_DELETE
                })
              ]) : Me()
            ])
          ]);
        }).concat(ke || _ && Ee ? [] : [
          r("div", {
            class: "vxe-upload--image-action"
          }, [
            r("div", {
              class: "vxe-upload--image-action-btn",
              onClick: G
            }, xe ? xe({ $upload: I }) : [
              r("div", {
                class: "vxe-upload--image-action-box"
              }, [
                r("div", {
                  class: "vxe-upload--image-action-icon"
                }, [
                  r("i", {
                    class: dt().UPLOAD_IMAGE_ADD
                  })
                ]),
                r("div", {
                  class: "vxe-upload--image-action-content"
                }, R ? `${R}` : Te("vxe.upload.imgBtnText")),
                ye || Le ? r("div", {
                  class: "vxe-upload--image-action-hint"
                }, Le ? It(Le({ $upload: I })) : ye) : Me()
              ])
            ])
          ])
        ]))
      ]);
    }, Oe = () => {
      const { showErrorStatus: R } = e, { isDrag: k } = d, U = g.value, _ = f.value, K = D.value;
      return r("div", {
        ref: p,
        class: ["vxe-upload", {
          "is--readonly": _,
          "is--disabled": U,
          "show--error": R,
          "is--drag": k
        }],
        onDragover: M,
        onDragleave: A,
        onDrop: H
      }, [
        K ? ve() : de(),
        k ? r("div", {
          class: "vxe-upload--drag-placeholder"
        }, Te("vxe.upload.dragPlaceholder")) : Me()
      ]);
    };
    I.renderVN = Oe;
    const Fe = Ie(0);
    return lt(() => e.modelValue ? e.modelValue.length : 0, () => {
      Fe.value++;
    }), lt(() => e.modelValue, () => {
      Fe.value++;
    }), lt(Fe, () => {
      z();
    }), On(() => {
      d.isDrag = !1;
    }), z(), I;
  },
  render() {
    return this.renderVN();
  }
}), MF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormView", null), n = rn(e), o = () => {
      const { renderParams: l } = e, { widget: a } = l;
      if (t) {
        const c = t ? t.getItemValue(a) : null;
        t.updateItemStatus(a, c);
      }
    };
    return () => {
      const { renderParams: l } = e, { widget: a } = l, { options: c } = a, p = n.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${p}`],
        title: a.title,
        field: a.field
      }, {
        default() {
          return r(Qr, {
            modelValue: t ? t.getItemValue(a) : null,
            mode: "all",
            multiple: c.multiple,
            limitCount: c.limitCount,
            limitSize: c.limitSize,
            onChange: o,
            "onUpdate:modelValue"(d) {
              t && t.setItemValue(a, d);
            }
          });
        }
      });
    };
  }
}), IF = () => ({
  title: so,
  icon: "vxe-icon-file-image",
  options: {
    limitCount: 9,
    limitSize: 10,
    multiple: !1
  }
}), kF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = rn(e), n = Ie(Jv());
    return () => {
      const { renderParams: o } = e, { widget: l } = o, { options: a } = l, c = t.value;
      return r(fn, {
        class: ["vxe-form-design--widget-render-form-wrapper", `widget-${c}`],
        vertical: !0,
        span: 24,
        titleBold: !0,
        titleOverflow: !0,
        data: a
      }, {
        default() {
          return [
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.name")
            }, {
              default() {
                return r(Dn, {
                  modelValue: l.title,
                  "onUpdate:modelValue"(p) {
                    l.title = p;
                  }
                });
              }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.uploadProp.multiImg"),
              field: "multiple",
              itemRender: { name: "VxeSwitch" }
            }),
            a.multiple ? r(vt, {
              title: Te("vxe.formDesign.widgetProp.uploadProp.limitImgCount"),
              field: "limitCount",
              itemRender: { name: "VxeInput", props: { type: "integer", min: 1, clearable: !0 } }
            }) : Me(),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.uploadProp.limitImgSize"),
              field: "limitSize",
              itemRender: { name: "VxeSelect", options: n.value }
            }),
            r(vt, {
              title: Te("vxe.formDesign.widgetProp.required")
            }, {
              default() {
                return r(Fn, {
                  modelValue: l.required,
                  "onUpdate:modelValue"(p) {
                    l.required = p;
                  }
                });
              }
            })
          ];
        }
      });
    };
  }
}), VF = tt({
  props: {
    renderOpts: {
      type: Object,
      default: () => ({})
    },
    renderParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: [],
  setup(e) {
    const t = ut("$xeFormView", null), n = rn(e), o = () => {
      const { renderParams: l } = e, { widget: a } = l;
      if (t) {
        const c = t ? t.getItemValue(a) : null;
        t.updateItemStatus(a, c);
      }
    };
    return () => {
      const { renderParams: l } = e, { widget: a } = l, { options: c } = a, p = n.value;
      return r(vt, {
        class: ["vxe-form-design--widget-render-form-item", `widget-${p}`],
        title: a.title,
        field: a.field
      }, {
        default() {
          return r(Qr, {
            modelValue: t ? t.getItemValue(a) : null,
            mode: "image",
            multiple: c.multiple,
            limitCount: c.limitCount,
            limitSize: c.limitSize,
            onChange: o,
            "onUpdate:modelValue"(d) {
              t && t.setItemValue(a, d);
            }
          });
        }
      });
    };
  }
});
on.mixin({
  title: {
    createFormDesignWidgetConfig: IN,
    renderFormDesignWidgetView(e, t) {
      return r(PN, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(RN, { renderOpts: e, renderParams: t });
    }
  },
  row: {
    createFormDesignWidgetConfig: NN,
    renderFormDesignWidgetEdit(e, t) {
      return r(AN, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetView(e, t) {
      return r(_N, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(FN, { renderOpts: e, renderParams: t });
    }
  },
  subtable: {
    createFormDesignWidgetConfig: WN,
    renderFormDesignWidgetEdit(e, t) {
      return r(zN, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetView(e, t) {
      return r(jN, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(BN, { renderOpts: e, renderParams: t });
    }
  },
  input: {
    createFormDesignWidgetConfig: qN,
    renderFormDesignWidgetView(e, t) {
      return r(UN, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(GN, { renderOpts: e, renderParams: t });
    }
  },
  textarea: {
    createFormDesignWidgetConfig: KN,
    renderFormDesignWidgetView(e, t) {
      return r(XN, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(YN, { renderOpts: e, renderParams: t });
    }
  },
  select: {
    createFormDesignWidgetConfig: ZN,
    renderFormDesignWidgetView(e, t) {
      return r(QN, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(JN, { renderOpts: e, renderParams: t });
    }
  },
  VxeInput: {
    createFormDesignWidgetConfig: eF,
    renderFormDesignWidgetView(e, t) {
      return r(nF, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(tF, { renderOpts: e, renderParams: t });
    }
  },
  VxeNumberInput: {
    createFormDesignWidgetConfig: oF,
    renderFormDesignWidgetView(e, t) {
      return r(sF, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(rF, { renderOpts: e, renderParams: t });
    }
  },
  VxeDatePicker: {
    createFormDesignWidgetConfig: lF,
    renderFormDesignWidgetView(e, t) {
      return r(aF, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(iF, { renderOpts: e, renderParams: t });
    }
  },
  VxeTextarea: {
    createFormDesignWidgetConfig: cF,
    renderFormDesignWidgetView(e, t) {
      return r(dF, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(uF, { renderOpts: e, renderParams: t });
    }
  },
  VxeSwitch: {
    createFormDesignWidgetConfig: fF,
    renderFormDesignWidgetView(e, t) {
      return r(mF, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(pF, { renderOpts: e, renderParams: t });
    }
  },
  VxeSelect: {
    createFormDesignWidgetConfig: gF,
    renderFormDesignWidgetView(e, t) {
      return r(hF, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(vF, { renderOpts: e, renderParams: t });
    }
  },
  VxeRadioGroup: {
    createFormDesignWidgetConfig: bF,
    renderFormDesignWidgetView(e, t) {
      return r(yF, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(xF, { renderOpts: e, renderParams: t });
    }
  },
  VxeCheckboxGroup: {
    createFormDesignWidgetConfig: CF,
    renderFormDesignWidgetView(e, t) {
      return r(EF, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(wF, { renderOpts: e, renderParams: t });
    }
  },
  VxeUploadFile: {
    createFormDesignWidgetConfig: SF,
    renderFormDesignWidgetView(e, t) {
      return r(MF, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(DF, { renderOpts: e, renderParams: t });
    }
  },
  VxeUploadImage: {
    createFormDesignWidgetConfig: IF,
    renderFormDesignWidgetView(e, t) {
      return r(VF, { renderOpts: e, renderParams: t });
    },
    renderFormDesignWidgetFormView(e, t) {
      return r(kF, { renderOpts: e, renderParams: t });
    }
  }
});
const Vu = Object.assign({}, fl, {
  install(e) {
    e.component(fl.name, fl);
  }
}), $F = {
  useKebabCaseName: rn,
  useWidgetView: TN,
  useWidgetPropDataSource: _i
};
$t.component(fl.name, fl);
ue.component(fl);
ue.formDesign = $F;
const RF = Vu, $u = Object.assign(Xr, {
  install(e) {
    e.component(Xr.name, Xr);
  }
});
$t.component(Xr.name, Xr);
ue.component(Xr);
const PF = $u, Ru = Object.assign(vt, {
  install(e) {
    e.component(vt.name, vt);
  }
});
$t.component(vt.name, vt);
ue.component(vt);
const NF = Ru, Pu = Object.assign(Ss, {
  install: function(e) {
    e.component(Ss.name, Ss);
  }
});
$t.component(Ss.name, Ss);
ue.component(Ss);
const FF = Pu, Nu = Object.assign({}, Yr, {
  install(e) {
    e.component(Yr.name, Yr);
  }
});
$t.component(Yr.name, Yr);
ue.component(Yr);
const LF = Nu, Ms = tt({
  name: "VxeImagePreview",
  props: {
    modelValue: Number,
    urlList: Array,
    urlField: {
      type: String,
      default: () => me().imagePreview.urlField
    },
    maskClosable: {
      type: Boolean,
      default: () => me().imagePreview.maskClosable
    },
    marginSize: {
      type: String,
      default: () => me().imagePreview.marginSize
    }
  },
  emits: [
    "update:modelValue",
    "change",
    "close"
  ],
  setup(e, t) {
    const { emit: n } = t, o = i.uniqueId(), l = Ie(), a = {
      refElem: l
    }, c = Ot({
      activeIndex: e.modelValue || 0,
      offsetPct11: !1,
      offsetScale: 0,
      offsetRotate: 0,
      offsetLeft: 0,
      offsetTop: 0
    }), p = Q(() => e.urlField || "url"), d = Q(() => i.toNumber(e.marginSize || 0) || 16), s = Q(() => {
      const { offsetRotate: M } = c;
      return M ? `${M}°` : "0°";
    }), f = Q(() => {
      const { offsetScale: M } = c;
      return M ? `${i.ceil((1 + M) * 100)}%` : "100%";
    }), g = Q(() => {
      const { urlList: M } = e, H = p.value;
      return M && M.length ? M.map((ne) => i.isString(ne) ? ne : ne[H] ? ne[H] : "") : [];
    }), D = Q(() => {
      let { offsetScale: M, offsetRotate: H, offsetLeft: ne, offsetTop: de } = c;
      const ve = [];
      let Oe = 1;
      if (M && (Oe = 1 + M, ve.push(`scale(${Oe})`)), H && ve.push(`rotate(${H}deg)`), ne || de) {
        ne /= Oe, de /= Oe;
        let Fe = ne, R = de;
        if (H)
          switch (H % 360) {
            case 90:
            case -270:
              Fe = de, R = -ne;
              break;
            case 180:
            case -180:
              Fe = -ne, R = -de;
              break;
            case 270:
            case -90:
              Fe = -de, R = ne;
              break;
          }
        ve.push(`translate(${Fe}px, ${R}px)`);
      }
      return ve.length ? ve.join(" ") : "";
    }), b = {
      computeImgList: g
    }, x = {
      xID: o,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => a,
      getComputeMaps: () => b
    }, S = {
      dispatchEvent(M, H, ne) {
        n(M, zt(ne, { $imagePreview: x }, H));
      }
    }, y = (M) => {
      c.activeIndex = M, n("update:modelValue", M);
    }, h = (M) => {
      S.dispatchEvent("close", {}, M);
    }, O = {}, E = () => {
      const M = l.value;
      aa(M, "is--move"), Object.assign(c, {
        offsetPct11: !1,
        offsetScale: 0,
        offsetRotate: 0,
        offsetLeft: 0,
        offsetTop: 0
      });
    }, T = () => {
      const { offsetScale: M } = c;
      let H = 0.02;
      return M >= -0.6 && (H = 0.04, M >= -0.4 && (H = 0.07, M >= 0 && (H = 0.1, M >= 3 && (H = 0.25, M >= 8 && (H = 0.4, M >= 16 && (H = 0.6, M >= 24 && (H = 0.9, M >= 32 && (H = 1.3, M >= 39 && (H = 1.9, M >= 45 && (H = 2.5)))))))))), H;
    }, W = (M) => {
      const { offsetScale: H } = c, ne = T();
      M ? c.offsetScale = Number(Math.min(49, H + ne).toFixed(2)) : c.offsetScale = Number(Math.max(-0.9, H - ne).toFixed(2));
    }, $ = (M) => {
      let H = c.activeIndex || 0;
      const ne = g.value;
      M ? H >= ne.length - 1 ? H = 0 : H++ : H <= 0 ? H = ne.length - 1 : H--, E(), c.activeIndex = H, y(H);
    }, I = (M) => {
      let H = c.offsetRotate;
      M ? H += 90 : H -= 90, c.offsetRotate = H;
    }, z = () => {
      E(), c.offsetPct11 = !0;
    }, te = () => {
      const { activeIndex: M } = c, ne = g.value[M || 0];
      ue.print && ue.print({
        align: "center",
        pageBreaks: [
          {
            bodyHtml: `<img src="${ne}" style="max-width:100%;max-height:100%;">`
          }
        ]
      });
    }, Ce = () => {
      const { activeIndex: M } = c, ne = g.value[M || 0];
      ue.saveFile && fetch(ne).then((de) => {
        de.blob().then((ve) => {
          ue.saveFile({
            filename: ne,
            content: ve
          });
        });
      });
    }, N = (M) => {
      const { activeIndex: H } = c;
      if (g.value[H || 0])
        switch (M) {
          case "zoomOut":
            W(!1);
            break;
          case "zoomIn":
            W(!0);
            break;
          case "pctFull":
            E();
            break;
          case "pct11":
            z();
            break;
          case "rotateLeft":
            I(!1);
            break;
          case "rotateRight":
            I(!0);
            break;
          case "print":
            te();
            break;
          case "download":
            Ce();
            break;
        }
    }, F = (M) => {
      const H = M.deltaY;
      H > 0 ? W(!1) : H < 0 && W(!0);
    }, j = (M) => {
      const { offsetTop: H, offsetLeft: ne } = c, de = l.value;
      M.preventDefault();
      const ve = document.onmousemove, Oe = document.onmouseup, Fe = M.pageX, R = M.pageY, k = d.value;
      document.onmousemove = (U) => {
        const { pageX: _, pageY: K } = U, { visibleHeight: Z, visibleWidth: ke } = vs();
        U.preventDefault(), DP(de, "is--move"), _ > k && K > k && _ < ke - k && K < Z - k && (c.offsetLeft = ne + _ - Fe, c.offsetTop = H + K - R);
      }, document.onmouseup = () => {
        document.onmousemove = ve, document.onmouseup = Oe, aa(de, "is--move");
      };
    }, ee = (M) => {
      const H = M.ctrlKey, ne = M.shiftKey, de = it.hasKey(M, Vt.ARROW_UP), ve = it.hasKey(M, Vt.ARROW_DOWN), Oe = it.hasKey(M, Vt.ARROW_LEFT), Fe = it.hasKey(M, Vt.ARROW_RIGHT), R = it.hasKey(M, Vt.R), k = it.hasKey(M, Vt.P);
      de ? (M.preventDefault(), ne ? c.offsetTop -= 1 : W(!0)) : ve ? (M.preventDefault(), ne ? c.offsetTop += 1 : W(!1)) : Oe ? (M.preventDefault(), ne ? c.offsetLeft -= 1 : $(!1)) : Fe ? (M.preventDefault(), ne ? c.offsetLeft += 1 : $(!0)) : R && H ? (M.preventDefault(), I(!ne)) : k && H && (M.preventDefault(), te());
    }, oe = (M) => {
      e.maskClosable && M.target === M.currentTarget && S.dispatchEvent("close", {}, M);
    };
    Object.assign(x, S, O);
    const re = () => {
      const { activeIndex: M } = c, H = g.value, ne = D.value;
      return r("div", {
        class: "vxe-image-preview--img-list",
        onClick: oe
      }, H.map((de, ve) => {
        const Oe = M === ve;
        return r("img", {
          class: ["vxe-image-preview--img-item", {
            "is--active": Oe
          }],
          src: de,
          style: Oe ? {
            transform: ne
          } : null,
          onMousedown(Fe) {
            j(Fe);
          }
        });
      }));
    }, G = (M, H) => r("div", {
      class: "vxe-image-preview--operation-btn",
      title: Te(`vxe.imagePreview.operBtn.${M}`),
      onClick() {
        N(M);
      }
    }, [
      r("i", {
        class: dt()[H]
      })
    ]), J = () => {
      const { activeIndex: M } = c, H = g.value, ne = s.value, de = f.value;
      return r("div", {
        class: "vxe-image-preview--btn-wrapper"
      }, [
        r("div", {
          class: "vxe-image-preview--close-wrapper"
        }, [
          r("div", {
            class: "vxe-image-preview--close-btn",
            onClick: h
          }, [
            r("i", {
              class: dt().IMAGE_PREVIEW_CLOSE
            })
          ]),
          r("div", {
            class: "vxe-image-preview--close-bg"
          })
        ]),
        H.length > 1 ? r("div", {
          class: "vxe-image-preview--previous-btn",
          onClick() {
            $(!1);
          }
        }, [
          r("i", {
            class: dt().IMAGE_PREVIEW_PREVIOUS
          })
        ]) : Me(),
        H.length > 1 ? r("div", {
          class: "vxe-image-preview--next-btn",
          onClick() {
            $(!0);
          }
        }, [
          r("i", {
            class: dt().IMAGE_PREVIEW_NEXT
          })
        ]) : Me(),
        r("div", {
          class: "vxe-image-preview--operation-info"
        }, [
          r("div", {
            class: "vxe-image-preview--operation-deg"
          }, ne),
          r("div", {
            class: "vxe-image-preview--operation-pct"
          }, de)
        ]),
        r("div", {
          class: "vxe-image-preview--operation-wrapper"
        }, [
          r("div", {
            class: "vxe-image-preview--operation-active-count"
          }, `${(M || 0) + 1}/${H.length}`),
          G("zoomOut", "IMAGE_PREVIEW_ZOOM_OUT"),
          G("zoomIn", "IMAGE_PREVIEW_ZOOM_IN"),
          G("pctFull", "IMAGE_PREVIEW_PCT_FULL"),
          G("pct11", "IMAGE_PREVIEW_PCT_1_1"),
          G("rotateLeft", "IMAGE_PREVIEW_ROTATE_LEFT"),
          G("rotateRight", "IMAGE_PREVIEW_ROTATE_RIGHT"),
          G("print", "IMAGE_PREVIEW_PRINT"),
          G("download", "IMAGE_PREVIEW_DOWNLOAD")
        ])
      ]);
    }, A = () => {
      const { offsetPct11: M } = c;
      return r("div", {
        ref: l,
        class: ["vxe-image-preview", {
          "is--pct11": M
        }],
        onWheel: F
      }, [
        re(),
        J()
      ]);
    };
    return x.renderVN = A, lt(() => e.modelValue, (M) => {
      c.activeIndex = M, E();
    }), yn(() => {
      it.on(x, "keydown", ee);
    }), Ci(() => {
      const M = l.value;
      aa(M, "is--move");
    }), On(() => {
      it.off(x, "keydown");
    }), Xt("$xeImagePreview", x), A;
  }
}), eh = (e) => {
  if (ue.modal) {
    const t = Object.assign({
      escClosable: !0
    }, e), { urlList: n, activeIndex: o } = t, l = i.uniqueId("image-preview");
    ue.modal.open({
      id: l,
      title: "预览",
      width: "100%",
      height: "100%",
      showHeader: !1,
      showFooter: !1,
      padding: !1,
      escClosable: t.escClosable,
      className: "vxe-image-preview-popup-wrapper",
      slots: {
        default() {
          return r(Ms, {
            modelValue: o,
            urlList: n,
            urlField: t.urlField,
            marginSize: t.marginSize,
            maskClosable: t.maskClosable,
            onClose() {
              ue.modal.close(l);
            }
          });
        }
      }
    });
  }
  return Promise.resolve();
}, pl = tt({
  name: "VxeImage",
  props: {
    src: String,
    alt: [String, Number],
    loading: String,
    title: [String, Number],
    width: [String, Number],
    height: [String, Number]
  },
  emits: [
    "click"
  ],
  setup(e, t) {
    const { emit: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = Q(() => {
      const { width: x, height: S } = e, y = {};
      return x && (y.width = Wn(x)), S && (y.height = Wn(S)), y;
    }), d = {}, s = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => d
    }, f = {
      dispatchEvent(x, S, y) {
        n(x, zt(y, { $image: s }, S));
      }
    }, g = (x) => {
      const { src: S } = e;
      S && eh({
        urlList: [S]
      }), f.dispatchEvent("click", {}, x);
    };
    Object.assign(s, f, {});
    const b = () => {
      const { src: x, alt: S, loading: y } = e, h = p.value;
      return r("img", {
        ref: l,
        class: "vxe-image",
        src: x,
        alt: S,
        loading: y,
        style: h,
        onClick: g
      });
    };
    return s.renderVN = b, s;
  },
  render() {
    return this.renderVN();
  }
}), Fu = Object.assign({}, pl, {
  install(e) {
    e.component(pl.name, pl);
  }
});
$t.component(pl.name, pl);
ue.component(pl);
const AF = Fu, Lu = Object.assign(Ms, {
  install(e) {
    e.component(Ms.name, Ms), ue.previewImage = eh;
  }
});
$t.component(Ms.name, Ms);
ue.component(Ms);
const _F = Lu, Au = Object.assign(Dn, {
  install(e) {
    e.component(Dn.name, Dn);
  }
});
$t.component(Dn.name, Dn);
ue.component(Dn);
const WF = Au, ml = tt({
  name: "VxeLayoutAside",
  props: {
    width: [String, Number],
    collapsed: Boolean,
    collapseWidth: [String, Number],
    padding: Boolean
  },
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = Q(() => {
      const { width: g, collapsed: D, collapseWidth: b } = e;
      if (D) {
        if (b)
          return Wn(b);
      } else if (g)
        return Wn(g);
      return "";
    }), d = {}, s = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => d
    }, f = () => {
      const { width: g, collapsed: D, padding: b } = e, x = p.value, S = n.default;
      return r("aside", {
        ref: l,
        class: ["vxe-layout-aside", {
          "is--padding": b,
          "is--default-width": !g,
          "is--collapse": D
        }],
        style: x ? {
          width: x
        } : null
      }, S ? S({}) : []);
    };
    return yn(() => {
    }), s.renderVN = f, s;
  },
  render() {
    return this.renderVN();
  }
}), _u = Object.assign({}, ml, {
  install(e) {
    e.component(ml.name, ml);
  }
});
$t.component(ml.name, ml);
ue.component(ml);
const BF = _u, gl = tt({
  name: "VxeLayoutBody",
  props: {
    padding: Boolean
  },
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = {}, d = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => p
    }, s = () => {
      const { padding: f } = e, g = n.default;
      return r("div", {
        ref: l,
        class: ["vxe-layout-body", {
          "is--padding": f
        }]
      }, g ? g({}) : []);
    };
    return d.renderVN = s, d;
  },
  render() {
    return this.renderVN();
  }
}), Wu = Object.assign({}, gl, {
  install(e) {
    e.component(gl.name, gl);
  }
});
$t.component(gl.name, gl);
ue.component(gl);
const HF = Wu, vl = tt({
  name: "VxeLayoutContainer",
  props: {
    vertical: Boolean
  },
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = {}, d = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => p
    }, s = () => {
      const { vertical: f } = e, g = n.default;
      return r("div", {
        ref: l,
        class: ["vxe-layout-container", {
          "is--vertical": f
        }]
      }, g ? g({}) : []);
    };
    return d.renderVN = s, d;
  },
  render() {
    return this.renderVN();
  }
}), Bu = Object.assign({}, vl, {
  install(e) {
    e.component(vl.name, vl);
  }
});
$t.component(vl.name, vl);
ue.component(vl);
const zF = Bu, hl = tt({
  name: "VxeLayoutFooter",
  props: {
    fixed: Boolean,
    align: String
  },
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = {}, d = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => p
    }, s = () => {
      const { fixed: f, align: g } = e, D = n.default;
      return r("footer", {
        ref: l,
        class: ["vxe-layout-footer", g ? `align--${g}` : "", {
          "is--fixed": f
        }]
      }, D ? D({}) : []);
    };
    return d.renderVN = s, d;
  },
  render() {
    return this.renderVN();
  }
}), Hu = Object.assign({}, hl, {
  install(e) {
    e.component(hl.name, hl);
  }
});
$t.component(hl.name, hl);
ue.component(hl);
const jF = Hu, bl = tt({
  name: "VxeLayoutHeader",
  props: {
    fixed: Boolean
  },
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = {}, d = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => p
    }, s = () => {
      const f = n.default;
      return r("header", {
        ref: l,
        class: ["vxe-layout-header", {
          "is--fixed": e.fixed
        }]
      }, f ? f({}) : []);
    };
    return d.renderVN = s, d;
  },
  render() {
    return this.renderVN();
  }
}), zu = Object.assign({}, bl, {
  install(e) {
    e.component(bl.name, bl);
  }
});
$t.component(bl.name, bl);
ue.component(bl);
const qF = zu, xl = tt({
  name: "VxeLink",
  props: {
    href: String,
    target: String,
    status: String,
    title: [String, Number],
    icon: String,
    routerLink: Object,
    underline: {
      type: Boolean,
      default: () => me().link.underline
    },
    /**
     * 权限码
     */
    permissionCode: [String, Number],
    permissionMethod: Function,
    content: [String, Number]
  },
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), { computePermissionInfo: l } = Ni(e), a = Ie(), c = Ot({}), p = {
      refElem: a
    }, d = {}, s = {
      xID: o,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => p,
      getComputeMaps: () => d
    }, f = () => {
      const { icon: D, content: b } = e, x = n.default, S = n.icon;
      return [
        S || D ? r("span", {
          class: "vxe-link--icon"
        }, S ? It(S({})) : [
          r("i", {
            class: D
          })
        ]) : Me(),
        r("span", {
          class: "vxe-link--content"
        }, x ? x({}) : i.toValueString(b))
      ];
    }, g = () => {
      const { status: D, target: b, href: x, title: S, underline: y, routerLink: h } = e;
      return l.value.visible ? h ? r(ro("router-link"), {
        class: ["vxe-link", {
          "is--underline": y,
          [`theme--${D}`]: D
        }],
        title: S,
        target: b,
        to: h
      }, {
        default() {
          return f();
        }
      }) : r("a", {
        ref: a,
        href: x,
        target: b,
        title: S,
        class: ["vxe-link", {
          "is--underline": y,
          [`theme--${D}`]: D
        }]
      }, f()) : Me();
    };
    return s.renderVN = g, s;
  },
  render() {
    return this.renderVN();
  }
}), ju = Object.assign({}, xl, {
  install(e) {
    e.component(xl.name, xl);
  }
});
$t.component(xl.name, xl);
ue.component(xl);
const GF = ju, UF = () => ({
  listView: {
    enabled: !0
  },
  ganttView: {
    enabled: !1
  },
  chartView: {
    enabled: !1
  },
  showCheckbox: "auto",
  showSeq: !0,
  mobileDefaultView: "list",
  pcDefaultView: "list",
  activeBtnList: []
}), KF = tt({
  name: "ListDesignLayoutView",
  props: {},
  emits: [],
  setup() {
    const e = ut("$xeListDesign", null);
    if (!e)
      return () => [];
    const { reactData: t } = e, n = Ie(), o = Ie([]), l = () => {
      const { listTableColumns: c } = t, p = [{}, {}];
      p.forEach((d) => {
        c.forEach((s) => {
          d[s.field] = "-";
        });
      }), o.value = p;
    }, a = Ie(0);
    return lt(() => t.listTableColumns ? t.listTableColumns.length : -1, () => {
      a.value++;
    }), lt(() => t.listTableColumns, () => {
      a.value++;
    }), lt(a, () => {
      l();
    }), yn(() => {
      l();
    }), () => {
      const { searchFormItems: c, listTableColumns: p } = t;
      return r("div", {
        class: "vxe-list-design--preview"
      }, [
        r("div", {
          class: "vxe-list-design--preview-wrapper"
        }, [
          r("div", {
            class: "vxe-list-design--preview-search"
          }, [
            r("div", {
              class: "vxe-list-design--preview-title"
            }, "查询条件"),
            c.length ? r(fn, {
              items: c
            }) : r("div", {
              class: "vxe-list-design--widget-form-empty-data"
            }, [
              r("span", {}, "暂无查询条件")
            ])
          ]),
          r("div", {
            class: "vxe-list-design--preview-table"
          }, [
            r("div", {
              class: "vxe-list-design--preview-title"
            }, "列表字段"),
            r(ro("vxe-grid"), {
              ref: n,
              columns: p,
              data: o.value,
              columnConfig: {
                minWidth: 80
              }
            })
          ])
        ])
      ]);
    };
  }
}), YF = tt({
  name: "DefaultFieldSettingForm",
  props: {},
  emits: [],
  setup() {
    const e = ut("$xeListDesign", null);
    if (!e)
      return () => [];
    const { reactData: t } = e, n = Ie([
      { label: "显示", value: !0 },
      { label: "隐藏", value: !1 }
    ]), o = (c) => {
      c.visible = !c.visible, t.listTableColumns = t.listTableColumns.slice(0);
    }, l = (c) => {
      const { children: p } = c;
      return p && p.length ? r("div", {
        class: "vxe-list-design--field-sub-option",
        onClick() {
          o(c);
        }
      }, p.map((d) => {
        const { title: s, visible: f } = d;
        return r("div", {
          class: ["vxe-list-design--field-checkbox-option", {
            "is--checked": f
          }],
          onClick() {
            o(d);
          }
        }, [
          r("span", {
            class: ["vxe-checkbox--icon", f ? dt().CHECKBOX_CHECKED : dt().CHECKBOX_UNCHECKED]
          }),
          r("span", {
            class: "vxe-checkbox--label"
          }, `${s}`)
        ]);
      })) : Me();
    }, a = () => {
      const { listTableColumns: c } = t;
      return c.map((p) => {
        const { title: d, visible: s } = p;
        return r("div", {
          class: "vxe-list-design--field-options"
        }, [
          r("div", {
            class: ["vxe-list-design--field-checkbox-option", {
              "is--checked": s
            }],
            onClick() {
              o(p);
            }
          }, [
            r("span", {
              class: ["vxe-checkbox--icon", s ? dt().CHECKBOX_CHECKED : dt().CHECKBOX_UNCHECKED]
            }),
            r("span", {
              class: "vxe-checkbox--label"
            }, `${d}`)
          ]),
          l(p)
        ]);
      });
    };
    return () => {
      const { formData: c } = t;
      return r(fn, {
        span: 24,
        vertical: !0,
        titleBold: !0
      }, {
        default() {
          return [
            r(vt, {
              title: "查询条件"
            }, {
              default() {
                return [
                  r("div", {
                    class: "vxe-list-design--widget-form-empty-data"
                  }, [
                    r("span", {}, "暂无查询条件")
                  ])
                ];
              }
            }),
            r(vt, {
              title: "通用字段"
            }, {
              default() {
                return [
                  r("div", {
                    class: "vxe-list-design--widget-form-item-prop-list"
                  }, [
                    r("span", {}, "序号列"),
                    r(ho, {
                      modelValue: c.showSeq,
                      options: n.value,
                      "onUpdate:modelValue"(p) {
                        c.showSeq = p;
                      }
                    })
                  ])
                  // h('div', {
                  //   class: 'vxe-list-design--widget-form-item-prop-list'
                  // }, [
                  //   h('span', {}, '多选列'),
                  //   h(VxeRadioGroupComponent, {
                  //     modelValue: formData.showCheckbox,
                  //     options: refCheckboxOpts.value,
                  //     'onUpdate:modelValue' (val) {
                  //       formData.showCheckbox = val
                  //     }
                  //   })
                  // ])
                ];
              }
            }),
            r(vt, {
              title: "列表字段"
            }, {
              default() {
                return a();
              }
            })
          ];
        }
      });
    };
  }
}), XF = tt({
  name: "DefaultListSettingForm",
  props: {},
  emits: [],
  setup() {
    const e = ut("$xeListDesign", null);
    if (!e)
      return () => [];
    const { props: t, reactData: n } = e, o = Ie([
      { label: "列表视图", value: "list", isExpand: !1 }
    ]), l = Q(() => {
      const { formData: a } = n;
      return [a.listView.enabled, a.ganttView.enabled, a.chartView.enabled].filter((c) => c).length <= 1;
    });
    return () => {
      const { showPc: a, showMobile: c } = t, { formData: p } = n;
      return r(fn, {
        span: 24,
        vertical: !0,
        titleBold: !0
      }, {
        default() {
          return [
            r(vt, {
              title: "视图配置"
            }, {
              default() {
                return r("div", {
                  class: "vxe-form-design--widget-form-item-render-view"
                }, o.value.map((d) => r("div", {
                  key: d.value,
                  class: "vxe-form-design--widget-form-item-render-view-item"
                }, [
                  r(Fn, {
                    modelValue: p.listView.enabled,
                    disabled: l.value,
                    "onUpdate:modelValue"(s) {
                      p.listView.enabled = s;
                    }
                  }),
                  r(jo, {
                    content: d.label,
                    icon: "vxe-icon-table"
                  })
                ])));
              }
            }),
            r(vt, {
              title: "默认视图"
            }, {
              default() {
                return [
                  r("div", {
                    class: "vxe-form-design--widget-form-item-devices"
                  }, [
                    a ? r("div", {
                      class: "vxe-form-design--widget-form-item-devices-item"
                    }, [
                      r("div", {
                        class: "vxe-form-design--widget-form-item-devices-left"
                      }, [
                        r(jo, {
                          icon: dt().FORM_DESIGN_PROPS_PC,
                          content: Te("vxe.formDesign.widgetProp.displaySetting.pc")
                        })
                      ]),
                      r(qo, {
                        modelValue: p.pcDefaultView,
                        className: "vxe-form-design--widget-form-item-devices-select",
                        options: o.value,
                        "onUpdate:modelValue"(d) {
                          p.pcDefaultView = d;
                        }
                      })
                    ]) : Me(),
                    c ? r("div", {
                      class: "vxe-form-design--widget-form-item-devices-item"
                    }, [
                      r("div", {
                        class: "vxe-form-design--widget-form-item-devices-left"
                      }, [
                        r(jo, {
                          icon: dt().FORM_DESIGN_PROPS_MOBILE,
                          content: Te("vxe.formDesign.widgetProp.displaySetting.mobile")
                        })
                      ]),
                      r(qo, {
                        modelValue: p.mobileDefaultView,
                        className: "vxe-form-design--widget-form-item-devices-select",
                        options: o.value,
                        "onUpdate:modelValue"(d) {
                          p.mobileDefaultView = d;
                        }
                      })
                    ]) : Me()
                  ])
                ];
              }
            }),
            r(vt, {
              title: "功能按钮"
            }, {
              default() {
                return r("div", {
                  class: "vxe-list-design--widget-form-empty-data"
                }, [
                  r("span", {}, "无操作按钮")
                ]);
              }
            })
          ];
        }
      });
    };
  }
}), ZF = tt({
  name: "ListDesignLayoutSetting",
  props: {},
  emits: [],
  setup() {
    const e = Ie(1);
    return () => r("div", {
      class: "vxe-list-design--setting"
    }, [
      r("div", {
        class: "vxe-list-design--setting-form"
      }, [
        r(yr, {
          modelValue: e.value,
          titleWidth: "50%",
          titleAlign: "center",
          padding: !0,
          class: "vxe-list-design--setting-form-tabs",
          "onUpdate:modelValue"(t) {
            e.value = t;
          }
        }, {
          default() {
            return [
              r(To, {
                title: Te("vxe.listDesign.fieldSettingTab"),
                icon: dt().LIST_DESIGN_FIELD_SETTING,
                name: 1
              }, {
                default() {
                  return r(YF);
                }
              }),
              r(To, {
                title: Te("vxe.listDesign.listSettingTab"),
                icon: dt().LIST_DESIGN_LIST_SETTING,
                name: 2
              }, {
                default() {
                  return r(XF);
                }
              })
            ];
          }
        })
      ])
    ]);
  }
}), yl = tt({
  name: "VxeListDesign",
  props: {
    size: {
      type: String,
      default: () => me().listDesign.size
    },
    height: {
      type: [String, Number],
      default: () => me().listDesign.height
    },
    config: {
      type: Object,
      default: () => ({})
    },
    showPc: {
      type: Boolean,
      default: () => me().listDesign.showPc
    },
    showMobile: {
      type: Boolean,
      default: () => me().listDesign.showMobile
    },
    formRender: Object
  },
  emits: [],
  setup(e, t) {
    const { emit: n, slots: o } = t, l = i.uniqueId(), a = Ie(), c = Ot({
      formData: {},
      searchFormItems: [],
      listTableColumns: []
    }), p = {
      refElem: a
    }, d = {}, s = {
      xID: l,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => p,
      getComputeMaps: () => d
    }, f = (I) => ({
      title: I.title,
      field: I.field,
      visible: !0
    }), g = (I) => {
      const z = [];
      if (I) {
        const { widgetData: te } = I;
        te && te.forEach((Ce) => {
          Ce.name === "row" || Ce.name === "subTable" || z.push(f(Ce));
        });
      }
      return z;
    }, D = (I) => I ? I.map((z) => ({
      field: z.field,
      title: z.title
    })) : [], b = (I) => I ? I.map((z) => ({
      field: z.field,
      title: z.title,
      visible: !!z.visible
    })) : [], x = (I) => (y(I.searchItems || []), c.listTableColumns = b(I.listColumns || []), ae()), S = () => c.searchFormItems, y = (I) => (c.searchFormItems = D(I), ae()), h = () => c.listTableColumns, O = (I) => (c.listTableColumns = b(I), ae()), E = () => {
      const { formRender: I } = e;
      let z = UF();
      if (I) {
        const te = on.get(I.name), Ce = te ? te.createListDesignSettingFormConfig : null;
        z = (Ce ? Ce({}) : {}) || {};
      }
      c.formData = z;
    };
    Object.assign(s, {
      dispatchEvent(I, z, te) {
        n(I, zt(te, { $listDesign: s }, z));
      },
      loadFormDesignConfig(I) {
        return c.listTableColumns = g(I), ae();
      },
      getSearchItems: S,
      setSearchItems: y,
      getListColumns: h,
      setListColumns: O,
      getConfig() {
        return {
          formConfig: {},
          searchItems: S(),
          listColumns: h()
        };
      },
      loadConfig: x,
      clearConfig() {
        return c.searchFormItems = [], c.listTableColumns = [], E(), ae();
      }
    }, {});
    const $ = () => {
      const { height: I } = e, z = o.header;
      return r("div", {
        ref: a,
        class: "vxe-list-design",
        style: I ? {
          height: Wn(I)
        } : null
      }, [
        r("div", {
          class: "vxe-list-design--header"
        }, z ? z({}) : []),
        r("div", {
          class: "vxe-list-design--body"
        }, [
          r(KF),
          r(ZF)
        ])
      ]);
    };
    return s.renderVN = $, Xt("$xeListDesign", s), lt(() => e.config, (I) => {
      x(I || {});
    }), E(), e.config && x(e.config), s;
  },
  render() {
    return this.renderVN();
  }
}), qu = Object.assign({}, yl, {
  install(e) {
    e.component(yl.name, yl);
  }
});
$t.component(yl.name, yl);
ue.component(yl);
const JF = qu, Cl = tt({
  name: "VxeListView",
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    data: Array,
    viewRender: Object
  },
  emits: [],
  setup(e, t) {
    const { emit: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({
      searchFormItems: [],
      listTableColumns: []
    }), c = {
      refElem: l
    }, p = {}, d = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => p
    }, s = (y) => y ? y.map((h) => ({
      field: h.field,
      title: h.title
    })) : [], f = (y) => y ? y.map((h) => ({
      field: h.field,
      title: h.title,
      visible: !!h.visible
    })) : [], g = (y) => (y && (D(y.searchItems || []), a.listTableColumns = f(y.listColumns || [])), ae()), D = (y) => (a.searchFormItems = s(y), ae());
    Object.assign(d, {
      dispatchEvent(y, h, O) {
        n(y, zt(O, { $listView: d }, h));
      },
      loadConfig: g
    }, {});
    const S = () => {
      const { data: y } = e, { listTableColumns: h } = a;
      return r("div", {
        ref: l,
        class: ["vxe-list-view"]
      }, [
        r("div", {}, [
          r(ro("vxe-grid"), {
            columns: h,
            data: y,
            columnConfig: {
              minWidth: 80
            }
          })
        ])
      ]);
    };
    return d.renderVN = S, lt(() => e.config, () => {
      g(e.config);
    }), g(e.config), Xt("$xeListView", d), d;
  },
  render() {
    return this.renderVN();
  }
}), Gu = Object.assign(Cl, {
  install: function(e) {
    e.component(Cl.name, Cl);
  }
});
$t.component(Cl.name, Cl);
ue.component(Cl);
const QF = Gu, wl = tt({
  name: "VxeList",
  props: {
    data: Array,
    height: [Number, String],
    maxHeight: [Number, String],
    loading: Boolean,
    className: [String, Function],
    size: { type: String, default: () => me().list.size || me().size },
    autoResize: { type: Boolean, default: () => me().list.autoResize },
    syncResize: [Boolean, String, Number],
    scrollY: Object
  },
  emits: [
    "scroll"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = i.uniqueId(), { computeSize: a } = Ln(e), c = Ot({
      scrollYLoad: !1,
      bodyHeight: 0,
      rowHeight: 0,
      topSpaceHeight: 0,
      items: []
    }), p = Ie(), d = Ie(), s = Ie(), f = {
      fullData: [],
      lastScrollLeft: 0,
      lastScrollTop: 0,
      scrollYStore: {
        startIndex: 0,
        endIndex: 0,
        visibleSize: 0,
        offsetSize: 0,
        rowHeight: 0
      }
    }, g = {
      refElem: p
    }, D = {
      xID: l,
      props: e,
      context: t,
      reactData: c,
      internalData: f,
      getRefMaps: () => g
    };
    let b = {};
    const x = Q(() => Object.assign({}, me().list.scrollY, e.scrollY)), S = Q(() => {
      const { height: j, maxHeight: ee } = e, oe = {};
      return j ? oe.height = `${isNaN(j) ? j : `${j}px`}` : ee && (oe.height = "auto", oe.maxHeight = `${isNaN(ee) ? ee : `${ee}px`}`), oe;
    }), y = () => {
      const { scrollYLoad: j } = c, { scrollYStore: ee, fullData: oe } = f;
      c.bodyHeight = j ? oe.length * ee.rowHeight : 0, c.topSpaceHeight = j ? Math.max(ee.startIndex * ee.rowHeight, 0) : 0;
    }, h = () => {
      const { scrollYLoad: j } = c, { fullData: ee, scrollYStore: oe } = f;
      return c.items = j ? ee.slice(oe.startIndex, oe.endIndex) : ee.slice(0), ae();
    }, O = () => {
      h(), y();
    }, E = () => ae().then(() => {
      const { scrollYLoad: j } = c, { scrollYStore: ee } = f, oe = s.value, re = x.value;
      let G = 0, J;
      if (oe && (re.sItem && (J = oe.querySelector(re.sItem)), J || (J = oe.children[0])), J && (G = J.offsetHeight), G = Math.max(20, G), ee.rowHeight = G, j) {
        const A = d.value, M = Math.max(8, Math.ceil(A.clientHeight / G)), H = re.oSize ? i.toNumber(re.oSize) : SP.edge ? 10 : 0;
        ee.offsetSize = H, ee.visibleSize = M, ee.endIndex = Math.max(ee.startIndex, M + H, ee.endIndex), O();
      } else
        y();
      c.rowHeight = G;
    }), T = () => {
      const j = d.value;
      return j && (j.scrollTop = 0), ae();
    }, W = (j, ee) => {
      const oe = d.value;
      return i.isNumber(j) && (oe.scrollLeft = j), i.isNumber(ee) && (oe.scrollTop = ee), c.scrollYLoad ? new Promise((re) => {
        setTimeout(() => {
          ae(() => {
            re();
          });
        }, 50);
      }) : ae();
    }, $ = () => {
      const { lastScrollLeft: j, lastScrollTop: ee } = f;
      return T().then(() => {
        if (j || ee)
          return f.lastScrollLeft = 0, f.lastScrollTop = 0, W(j, ee);
      });
    }, I = () => {
      const j = p.value;
      return j.clientWidth && j.clientHeight ? E() : Promise.resolve();
    }, z = (j) => {
      const { scrollYStore: ee } = f, { startIndex: oe, endIndex: re, visibleSize: G, offsetSize: J, rowHeight: A } = ee, H = j.target.scrollTop, ne = Math.floor(H / A), de = Math.max(0, ne - 1 - J), ve = ne + G + J;
      (ne <= oe || ne >= re - G - 1) && (oe !== de || re !== ve) && (ee.startIndex = de, ee.endIndex = ve, O());
    }, te = (j) => {
      const ee = j.target, oe = ee.scrollTop, re = ee.scrollLeft, G = re !== f.lastScrollLeft, J = oe !== f.lastScrollTop;
      f.lastScrollTop = oe, f.lastScrollLeft = re, c.scrollYLoad && z(j), b.dispatchEvent("scroll", { scrollLeft: re, scrollTop: oe, isX: G, isY: J }, j);
    };
    b = {
      dispatchEvent(j, ee, oe) {
        o(j, zt(oe, { $list: D }, ee));
      },
      /**
       * 加载数据
       * @param {Array} datas 数据
       */
      loadData(j) {
        const { scrollYStore: ee } = f, oe = x.value, re = j || [];
        return Object.assign(ee, {
          startIndex: 0,
          endIndex: 1,
          visibleSize: 0
        }), f.fullData = re, c.scrollYLoad = !!oe.enabled && oe.gt > -1 && (oe.gt === 0 || oe.gt <= re.length), h(), E().then(() => {
          $();
        });
      },
      /**
       * 重新加载数据
       * @param {Array} datas 数据
       */
      reloadData(j) {
        return T(), b.loadData(j);
      },
      recalculate: I,
      scrollTo: W,
      refreshScroll: $,
      clearScroll: T
    }, Object.assign(D, b);
    const Ce = Ie(0);
    lt(() => e.data ? e.data.length : -1, () => {
      Ce.value++;
    }), lt(() => e.data, () => {
      Ce.value++;
    }), lt(Ce, () => {
      b.loadData(e.data || []);
    }), lt(() => e.syncResize, (j) => {
      j && (I(), ae(() => setTimeout(() => I())));
    }), cm(() => {
      I().then(() => $());
    });
    let N;
    ae(() => {
      if (it.on(D, "resize", () => {
        I();
      }), e.autoResize) {
        const j = p.value;
        N = eu.create(() => I()), N.observe(j);
      }
      b.loadData(e.data || []);
    }), On(() => {
      N && N.disconnect(), it.off(D, "resize");
    });
    const F = () => {
      const { className: j, loading: ee } = e, { bodyHeight: oe, topSpaceHeight: re, items: G } = c, J = a.value, A = S.value;
      return r("div", {
        ref: p,
        class: ["vxe-list", j ? i.isFunction(j) ? j({ $list: D }) : j : "", {
          [`size--${J}`]: J,
          "is--loading": ee
        }]
      }, [
        r("div", {
          ref: d,
          class: "vxe-list--virtual-wrapper",
          style: A,
          onScroll: te
        }, [
          r("div", {
            class: "vxe-list--y-space",
            style: {
              height: oe ? `${oe}px` : ""
            }
          }),
          r("div", {
            ref: s,
            class: "vxe-list--body",
            style: {
              marginTop: re ? `${re}px` : ""
            }
          }, n.default ? n.default({ items: G, $list: D }) : [])
        ]),
        /**
         * 加载中
         */
        r(Kr, {
          class: "vxe-list--loading",
          modelValue: ee
        })
      ]);
    };
    return D.renderVN = F, D;
  },
  render() {
    return this.renderVN();
  }
}), Uu = Object.assign(wl, {
  install(e) {
    e.component(wl.name, wl);
  }
});
$t.component(wl.name, wl);
ue.component(wl);
const eL = Uu, El = tt({
  name: "VxeMenu",
  props: {
    modelValue: [String, Number],
    expandAll: Boolean,
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: [
    "update:modelValue",
    "click"
  ],
  setup(e, t) {
    const { emit: n } = t, o = i.uniqueId(), l = Ie(), a = Ie(), c = Ot({
      activeName: e.modelValue,
      menuList: [],
      itemHeight: 1
    }), p = {
      refElem: l
    }, d = {}, s = {
      xID: o,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => p,
      getComputeMaps: () => d
    }, f = ($) => `${$.title || $.name}`, g = () => {
      const $ = a.value, I = $ ? $.children : [];
      I.length && (c.itemHeight = I[0].offsetHeight);
    }, D = ($) => {
      let I = 0;
      return $.isExpand && $.childList.forEach((z) => {
        I += D(z) + 1;
      }), I;
    }, b = () => {
      i.eachTree(c.menuList, ($) => {
        $.hasChild && $.isExpand ? $.childHeight = D($) * c.itemHeight : $.childHeight = 0;
      }, { children: "childList" });
    }, x = () => {
      const { activeName: $ } = c;
      i.eachTree(c.menuList, (I, z, te, Ce, N, F) => {
        I.itemKey === $ ? (F.forEach((j) => {
          j.isActive = !0;
        }), I.isExactActive = !0) : (I.isExactActive = !1, I.isActive = !1);
      }, { children: "childList" });
    }, S = () => {
      const { expandAll: $ } = e;
      c.menuList = i.mapTree(e.options, (I, z, te, Ce, N) => Object.assign(Object.assign({}, I), { parentKey: N ? N.name || Ce.slice(0, Ce.length - 1).join(",") : "", level: Ce.length, itemKey: I.name || Ce.join(","), isExactActive: !1, isActive: !1, isExpand: i.isBoolean(I.expanded) ? I.expanded : !!$, hasChild: I.children && I.children.length > 0, childHeight: 0 }), { children: "children", mapChildren: "childList" });
    }, y = ($, I) => {
      const { hasChild: z, isExpand: te } = I;
      z && ($.stopPropagation(), $.preventDefault(), I.isExpand = !te, g(), b());
    }, h = ($, I) => {
      const { routerLink: z, hasChild: te } = I;
      z ? (c.activeName = I.itemKey, x(), n("update:modelValue", I.itemKey)) : te && y($, I), n("click", zt($, { $menu: s, menu: I }));
    }, O = ($) => {
      const { icon: I, isExpand: z, hasChild: te } = $, Ce = f($);
      return [
        r("span", {
          class: "vxe-menu--item-link-icon"
        }, I ? [
          r("i", {
            class: I
          })
        ] : []),
        r("span", {
          class: "vxe-menu--item-link-title",
          title: Ce
        }, Ce),
        te ? r("span", {
          class: "vxe-menu--item-link-collapse",
          onClick(N) {
            y(N, $);
          }
        }, [
          r("i", {
            class: z ? dt().MENU_ITEM_EXPAND_OPEN : dt().MENU_ITEM_EXPAND_CLOSE
          })
        ]) : Me()
      ];
    }, E = ($) => {
      const { itemKey: I, level: z, hasChild: te, isActive: Ce, isExactActive: N, isExpand: F, routerLink: j, childList: ee } = $;
      return $.permissionCode && !Va.checkVisible($.permissionCode) ? Me() : r("div", {
        key: I,
        class: ["vxe-menu--item-wrapper", `vxe-menu--item-level${z}`, {
          "is--exact-active": N,
          "is--active": Ce,
          "is--expand": F
        }]
      }, [
        j ? r(ro("router-link"), {
          class: "vxe-menu--item-link",
          to: j,
          onClick(oe) {
            h(oe, $);
          }
        }, {
          default: () => O($)
        }) : r("div", {
          class: "vxe-menu--item-link",
          onClick(oe) {
            h(oe, $);
          }
        }, O($)),
        te ? r("div", {
          class: "vxe-menu--item-group",
          style: {
            // height: `${childHeight}px`
          }
        }, ee.map((oe) => E(oe))) : Me()
      ]);
    }, T = () => {
      const { menuList: $ } = c;
      return r("div", {
        ref: l,
        class: ["vxe-menu"]
      }, [
        r("div", {
          ref: a,
          class: "vxe-menu--item-list"
        }, $.map((I) => E(I)))
      ]);
    };
    s.renderVN = T;
    const W = Ie(0);
    return lt(() => e.options ? e.options.length : -1, () => {
      W.value++;
    }), lt(() => e.options, () => {
      W.value++;
    }), lt(W, () => {
      S();
    }), lt(() => e.modelValue, ($) => {
      c.activeName = $, x();
    }), yn(() => {
      ae(g);
    }), S(), x(), s;
  },
  render() {
    return this.renderVN();
  }
}), Ku = Object.assign({}, El, {
  install(e) {
    e.component(El.name, El);
  }
});
$t.component(El.name, El);
ue.component(El);
const tL = Ku, _r = [], dc = [], fc = [], Sl = tt({
  name: "VxeModal",
  props: {
    modelValue: Boolean,
    id: String,
    type: { type: String, default: "modal" },
    loading: { type: Boolean, default: null },
    status: String,
    iconStatus: String,
    className: String,
    top: { type: [Number, String], default: () => me().modal.top },
    position: [String, Object],
    title: String,
    duration: { type: [Number, String], default: () => me().modal.duration },
    message: [Number, String],
    content: [Number, String],
    showCancelButton: { type: Boolean, default: null },
    cancelButtonText: { type: String, default: () => me().modal.cancelButtonText },
    showConfirmButton: { type: Boolean, default: () => me().modal.showConfirmButton },
    confirmButtonText: { type: String, default: () => me().modal.confirmButtonText },
    lockView: { type: Boolean, default: () => me().modal.lockView },
    lockScroll: Boolean,
    mask: { type: Boolean, default: () => me().modal.mask },
    maskClosable: { type: Boolean, default: () => me().modal.maskClosable },
    escClosable: { type: Boolean, default: () => me().modal.escClosable },
    resize: Boolean,
    showHeader: { type: Boolean, default: () => me().modal.showHeader },
    showFooter: { type: Boolean, default: () => me().modal.showFooter },
    showZoom: Boolean,
    showMaximize: {
      type: Boolean,
      default: () => pp(me().modal.showMaximize)
    },
    showMinimize: {
      type: Boolean,
      default: () => pp(me().modal.showMinimize)
    },
    showClose: { type: Boolean, default: () => me().modal.showClose },
    dblclickZoom: { type: Boolean, default: () => me().modal.dblclickZoom },
    width: [Number, String],
    height: [Number, String],
    minWidth: { type: [Number, String], default: () => me().modal.minWidth },
    minHeight: { type: [Number, String], default: () => me().modal.minHeight },
    zIndex: Number,
    marginSize: { type: [Number, String], default: () => me().modal.marginSize },
    fullscreen: Boolean,
    draggable: { type: Boolean, default: () => me().modal.draggable },
    remember: { type: Boolean, default: () => me().modal.remember },
    destroyOnClose: { type: Boolean, default: () => me().modal.destroyOnClose },
    showTitleOverflow: { type: Boolean, default: () => me().modal.showTitleOverflow },
    transfer: { type: Boolean, default: () => me().modal.transfer },
    storage: { type: Boolean, default: () => me().modal.storage },
    storageKey: { type: String, default: () => me().modal.storageKey },
    padding: { type: Boolean, default: () => me().modal.padding },
    size: { type: String, default: () => me().modal.size || me().size },
    beforeHideMethod: Function,
    slots: Object,
    /**
     * 已废弃
     */
    animat: { type: Boolean, default: () => me().modal.animat }
  },
  emits: [
    "update:modelValue",
    "show",
    "hide",
    "before-hide",
    "close",
    "confirm",
    "cancel",
    "zoom",
    "resize",
    "move"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = i.uniqueId(), { computeSize: a } = Ln(e), c = Ot({
      inited: !1,
      visible: !1,
      contentVisible: !1,
      modalTop: 0,
      modalZindex: 0,
      zoomStatus: "",
      zoomLocat: null,
      firstOpen: !0
    }), p = Ie(), d = Ie(), s = Ie(), f = Ie(), g = Ie(), D = {
      refElem: p
    }, b = {
      xID: l,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => D
    };
    let x = {};
    const S = Q(() => e.type === "message" || e.type === "notification"), y = () => d.value, h = () => {
      const { width: fe, height: ge } = e, $e = y();
      return $e.style.width = `${fe ? isNaN(fe) ? fe : `${fe}px` : ""}`, $e.style.height = `${ge ? isNaN(ge) ? ge : `${ge}px` : ""}`, ae();
    }, O = () => {
      const { zIndex: fe } = e, { modalZindex: ge } = c;
      fe ? c.modalZindex = fe : ge < ss() && (c.modalZindex = Cr());
    }, E = () => ae().then(() => {
      const { position: fe } = e, ge = i.toNumber(e.marginSize), $e = y(), Ve = document.documentElement.clientWidth || document.body.clientWidth, ce = document.documentElement.clientHeight || document.body.clientHeight, We = fe === "center", { top: Ge, left: Ze } = i.isString(fe) ? { top: fe, left: fe } : Object.assign({}, fe), pe = We || Ge === "center", Y = We || Ze === "center";
      let le = "", he = "";
      Ze && !Y ? he = isNaN(Ze) ? Ze : `${Ze}px` : he = `${Math.max(ge, Ve / 2 - $e.offsetWidth / 2)}px`, Ge && !pe ? le = isNaN(Ge) ? Ge : `${Ge}px` : le = `${Math.max(ge, ce / 2 - $e.offsetHeight / 2)}px`, $e.style.top = le, $e.style.left = he;
    }), T = () => {
      ae(() => {
        const { type: fe } = e, ge = fe === "notification" ? fc : dc;
        let $e = 0;
        ge.forEach((Ve) => {
          const ce = Ve.getBox();
          $e += i.toNumber(Ve.props.top), Ve.reactData.modalTop = $e, $e += ce.clientHeight;
        });
      });
    }, W = () => {
      const { type: fe } = e, ge = fe === "notification" ? fc : dc;
      ge.indexOf(b) > -1 && i.remove(ge, ($e) => $e === b), T();
    }, $ = (fe) => {
      const { remember: ge } = e, { visible: $e } = c, Ve = S.value, ce = e.beforeHideMethod || me().modal.beforeHideMethod, We = { type: fe };
      return $e && Promise.resolve(ce ? ce(We) : null).then((Ge) => {
        i.isError(Ge) || (Ve && W(), c.contentVisible = !1, ge || Oe(), i.remove(_r, (Ze) => Ze === b), x.dispatchEvent("before-hide", We, null), setTimeout(() => {
          c.visible = !1, o("update:modelValue", !1), x.dispatchEvent("hide", We, null);
        }, 200));
      }).catch((Ge) => Ge), ae();
    }, I = (fe) => {
      const ge = "close";
      x.dispatchEvent(ge, { type: ge }, fe), $(ge);
    }, z = (fe) => {
      const ge = "confirm";
      x.dispatchEvent(ge, { type: ge }, fe), $(ge);
    }, te = (fe) => {
      const ge = "cancel";
      x.dispatchEvent(ge, { type: ge }, fe), $(ge);
    }, Ce = (fe) => {
      const ge = me().version, $e = i.toStringJSON(localStorage.getItem(fe) || "");
      return $e && $e._v === ge ? $e : { _v: ge };
    }, N = () => {
      const { id: fe, remember: ge, storage: $e, storageKey: Ve } = e;
      return !!(fe && ge && $e && Ce(Ve)[fe]);
    }, F = () => {
      const { id: fe, remember: ge, storage: $e, storageKey: Ve } = e;
      if (fe && ge && $e) {
        const ce = Ce(Ve)[fe];
        if (ce) {
          const We = y(), [Ge, Ze, pe, Y, le, he, He, se] = ce.split(",");
          Ge && (We.style.left = `${Ge}px`), Ze && (We.style.top = `${Ze}px`), pe && (We.style.width = `${pe}px`), Y && (We.style.height = `${Y}px`), le && he && (c.zoomLocat = {
            left: le,
            top: he,
            width: He,
            height: se
          });
        }
      }
    }, j = () => {
      const { type: fe } = e, ge = fe === "notification" ? fc : dc;
      ge.indexOf(b) === -1 && ge.push(b), T();
    }, ee = () => {
      const { id: fe, remember: ge, storage: $e, storageKey: Ve } = e, { zoomLocat: ce } = c;
      if (fe && ge && $e) {
        const We = y(), Ge = Ce(Ve);
        Ge[fe] = [
          We.style.left,
          We.style.top,
          We.style.width,
          We.style.height
        ].concat(ce ? [
          ce.left,
          ce.top,
          ce.width,
          ce.height
        ] : []).map((Ze) => Ze ? i.toNumber(Ze) : "").join(","), localStorage.setItem(Ve, i.toJSONString(Ge));
      }
    }, oe = () => (c.zoomStatus = "minimize", ae().then(() => {
      const fe = y(), ge = s.value;
      if (!ge)
        return;
      const { visibleHeight: $e } = vs();
      c.zoomLocat = {
        top: fe.offsetTop,
        left: fe.offsetLeft,
        width: fe.offsetWidth + (fe.style.width ? 0 : 1),
        height: fe.offsetHeight + (fe.style.height ? 0 : 1)
      };
      const Ve = i.min(_r.filter((Ge) => Ge.xID !== b.xID && Ge.props.type === "modal" && Ge.reactData.zoomStatus === "minimize"), (Ge) => {
        const Ze = Ge.getBox();
        return Ze ? i.toNumber(Ze.style.top) : 0;
      });
      let ce = $e - ge.offsetHeight - 16;
      const We = 16;
      if (Ve) {
        const Ge = Ve.getBox();
        Ge && (ce = i.toNumber(Ge.style.top) - 8);
      }
      Object.assign(fe.style, {
        top: `${ce}px`,
        left: `${We}px`,
        width: "200px",
        height: `${ge.offsetHeight}px`
      }), ee();
    })), re = () => (c.zoomStatus = "maximize", ae().then(() => {
      const fe = Math.max(0, i.toNumber(e.marginSize)), ge = y(), { visibleHeight: $e, visibleWidth: Ve } = vs();
      c.zoomLocat = {
        top: ge.offsetTop,
        left: ge.offsetLeft,
        width: ge.offsetWidth + (ge.style.width ? 0 : 1),
        height: ge.offsetHeight + (ge.style.height ? 0 : 1)
      }, Object.assign(ge.style, {
        top: `${fe}px`,
        left: `${fe}px`,
        width: `${Ve - fe * 2}px`,
        height: `${$e - fe * 2}px`
      }), ee();
    }));
    let G = null;
    const J = () => {
      const { duration: fe } = e;
      fe !== -1 && (G = setTimeout(() => $("close"), i.toNumber(fe)));
    }, A = () => {
      const { remember: fe, showFooter: ge } = e, { inited: $e, visible: Ve } = c, ce = S.value;
      return $e || (c.inited = !0), Ve || (fe || h(), c.visible = !0, c.contentVisible = !1, O(), _r.push(b), setTimeout(() => {
        c.contentVisible = !0, ae(() => {
          if (ge) {
            const Ze = f.value, pe = g.value, Y = Ze || pe;
            Y && Y.focus();
          }
          const Ge = { type: "" };
          o("update:modelValue", !0), x.dispatchEvent("show", Ge, null);
        });
      }, 10), ce ? (j(), J()) : ae(() => {
        const { fullscreen: We } = e, { firstOpen: Ge } = c;
        (!fe || Ge) && E().then(() => {
          setTimeout(() => E(), 20);
        }), Ge ? (c.firstOpen = !1, N() ? F() : We && ae(() => re())) : We && ae(() => re());
      })), ae();
    }, M = (fe) => {
      const ge = p.value;
      e.maskClosable && fe.target === ge && $("mask");
    }, H = () => {
      if (G === null)
        return;
      S.value && (clearTimeout(G), G = null);
    }, ne = () => {
      G === null && S.value && J();
    }, de = (fe) => {
      if (it.hasKey(fe, Vt.ESCAPE)) {
        const $e = i.max(_r, (Ve) => Ve.reactData.modalZindex);
        $e && setTimeout(() => {
          $e === b && $e.props.escClosable && $("exit");
        }, 10);
      }
    }, ve = () => !!c.zoomLocat, Oe = () => (c.zoomStatus = "", ae().then(() => {
      const { zoomLocat: fe } = c;
      if (fe) {
        const ge = y();
        return c.zoomLocat = null, Object.assign(ge.style, {
          top: `${fe.top}px`,
          left: `${fe.left}px`,
          width: `${fe.width}px`,
          height: `${fe.height}px`
        }), ee(), ae();
      }
    })), Fe = (fe) => {
      const { zoomStatus: ge } = c;
      return new Promise(($e) => {
        if (fe) {
          if (fe === "maximize") {
            $e(re());
            return;
          }
          if (fe === "minimize") {
            $e(oe());
            return;
          }
          $e(Oe());
          return;
        }
        $e(ge ? Oe() : re());
      }).then(() => c.zoomStatus || "revert");
    }, R = (fe) => {
      const { zoomStatus: ge } = c;
      return Fe(ge === "minimize" ? "revert" : "minimize").then(($e) => {
        const Ve = { type: $e };
        console.log(Ve), x.dispatchEvent("zoom", Ve, fe);
      });
    }, k = (fe) => Fe().then((ge) => {
      const $e = { type: ge };
      console.log($e), x.dispatchEvent("zoom", $e, fe);
    }), U = () => {
      if (!S.value) {
        const ge = y();
        if (ge)
          return {
            top: ge.offsetTop,
            left: ge.offsetLeft
          };
      }
      return null;
    }, _ = (fe, ge) => {
      if (!S.value) {
        const Ve = y();
        i.isNumber(fe) && (Ve.style.top = `${fe}px`), i.isNumber(ge) && (Ve.style.left = `${ge}px`);
      }
      return ae();
    }, K = () => {
      const { modalZindex: fe } = c;
      _r.some((ge) => ge.reactData.visible && ge.reactData.modalZindex > fe) && O();
    }, Z = (fe) => {
      const { remember: ge, storage: $e } = e, { zoomStatus: Ve } = c, ce = i.toNumber(e.marginSize), We = y();
      if (Ve !== "maximize" && fe.button === 0 && !Bn(fe, We, "trigger--btn").flag) {
        fe.preventDefault();
        const Ge = document.onmousemove, Ze = document.onmouseup, pe = fe.clientX - We.offsetLeft, Y = fe.clientY - We.offsetTop, { visibleHeight: le, visibleWidth: he } = vs();
        document.onmousemove = (He) => {
          He.preventDefault();
          const se = We.offsetWidth, Se = We.offsetHeight, ze = ce, Xe = he - se - ce - 1, et = ce, at = le - Se - ce - 1;
          let ft = He.clientX - pe, mt = He.clientY - Y;
          ft > Xe && (ft = Xe), ft < ze && (ft = ze), mt > at && (mt = at), mt < et && (mt = et), We.style.left = `${ft}px`, We.style.top = `${mt}px`, We.className = We.className.replace(/\s?is--drag/, "") + " is--drag", o("move", zt(He, { type: "move" }));
        }, document.onmouseup = () => {
          document.onmousemove = Ge, document.onmouseup = Ze, ge && $e && ae(() => {
            ee();
          }), setTimeout(() => {
            We.className = We.className.replace(/\s?is--drag/, "");
          }, 50);
        };
      }
    }, ke = (fe) => {
      fe.preventDefault();
      const { remember: ge, storage: $e } = e, { visibleHeight: Ve, visibleWidth: ce } = vs(), We = i.toNumber(e.marginSize), Ze = fe.target.getAttribute("type"), pe = i.toNumber(e.minWidth), Y = i.toNumber(e.minHeight), le = ce, he = Ve, He = y(), se = document.onmousemove, Se = document.onmouseup, ze = He.clientWidth, Xe = He.clientHeight, et = fe.clientX, at = fe.clientY, ft = He.offsetTop, mt = He.offsetLeft, B = { type: "resize" };
      document.onmousemove = (Mt) => {
        Mt.preventDefault();
        let St, gt, bt, Dt;
        switch (Ze) {
          case "wl":
            St = et - Mt.clientX, bt = St + ze, mt - St > We && bt > pe && (He.style.width = `${bt < le ? bt : le}px`, He.style.left = `${mt - St}px`);
            break;
          case "swst":
            St = et - Mt.clientX, gt = at - Mt.clientY, bt = St + ze, Dt = gt + Xe, mt - St > We && bt > pe && (He.style.width = `${bt < le ? bt : le}px`, He.style.left = `${mt - St}px`), ft - gt > We && Dt > Y && (He.style.height = `${Dt < he ? Dt : he}px`, He.style.top = `${ft - gt}px`);
            break;
          case "swlb":
            St = et - Mt.clientX, gt = Mt.clientY - at, bt = St + ze, Dt = gt + Xe, mt - St > We && bt > pe && (He.style.width = `${bt < le ? bt : le}px`, He.style.left = `${mt - St}px`), ft + Dt + We < Ve && Dt > Y && (He.style.height = `${Dt < he ? Dt : he}px`);
            break;
          case "st":
            gt = at - Mt.clientY, Dt = Xe + gt, ft - gt > We && Dt > Y && (He.style.height = `${Dt < he ? Dt : he}px`, He.style.top = `${ft - gt}px`);
            break;
          case "wr":
            St = Mt.clientX - et, bt = St + ze, mt + bt + We < ce && bt > pe && (He.style.width = `${bt < le ? bt : le}px`);
            break;
          case "sest":
            St = Mt.clientX - et, gt = at - Mt.clientY, bt = St + ze, Dt = gt + Xe, mt + bt + We < ce && bt > pe && (He.style.width = `${bt < le ? bt : le}px`), ft - gt > We && Dt > Y && (He.style.height = `${Dt < he ? Dt : he}px`, He.style.top = `${ft - gt}px`);
            break;
          case "selb":
            St = Mt.clientX - et, gt = Mt.clientY - at, bt = St + ze, Dt = gt + Xe, mt + bt + We < ce && bt > pe && (He.style.width = `${bt < le ? bt : le}px`), ft + Dt + We < Ve && Dt > Y && (He.style.height = `${Dt < he ? Dt : he}px`);
            break;
          case "sb":
            gt = Mt.clientY - at, Dt = gt + Xe, ft + Dt + We < Ve && Dt > Y && (He.style.height = `${Dt < he ? Dt : he}px`);
            break;
        }
        He.className = He.className.replace(/\s?is--drag/, "") + " is--drag", ge && $e && ee(), x.dispatchEvent("resize", B, Mt);
      }, document.onmouseup = () => {
        c.zoomLocat = null, document.onmousemove = se, document.onmouseup = Se, setTimeout(() => {
          He.className = He.className.replace(/\s?is--drag/, "");
        }, 50);
      };
    };
    x = {
      dispatchEvent(fe, ge, $e) {
        o(fe, zt($e, { $modal: b }, ge));
      },
      open: A,
      close() {
        return $("close");
      },
      getBox: y,
      getPosition: U,
      setPosition: _,
      isMaximized: ve,
      zoom: Fe,
      minimize: oe,
      maximize: re,
      revert: Oe
    }, Object.assign(b, x);
    const ye = () => {
      const { slots: fe = {}, showClose: ge, showZoom: $e, showMaximize: Ve, showMinimize: ce, title: We } = e, { zoomStatus: Ge } = c, Ze = n.title || fe.title, pe = n.corner || fe.corner;
      return [
        r("div", {
          class: "vxe-modal--header-title"
        }, Ze ? It(Ze({ $modal: b })) : We ? Vn(We) : Te("vxe.alert.title")),
        r("div", {
          class: "vxe-modal--header-right"
        }, [
          pe ? r("span", {
            class: "vxe-modal--corner-wrapper"
          }, It(pe({ $modal: b }))) : Me(),
          (i.isBoolean(ce) ? ce : $e) && Ge !== "maximize" ? r("span", {
            class: ["vxe-modal--zoom-btn", "trigger--btn"],
            title: Te(`vxe.modal.zoom${Ge === "minimize" ? "Out" : "Min"}`),
            onClick: R
          }, [
            r("i", {
              class: Ge === "minimize" ? dt().MODAL_ZOOM_REVERT : dt().MODAL_ZOOM_MIN
            })
          ]) : Me(),
          (i.isBoolean(Ve) ? Ve : $e) && Ge !== "minimize" ? r("span", {
            class: ["vxe-modal--zoom-btn", "trigger--btn"],
            title: Te(`vxe.modal.zoom${Ge === "maximize" ? "Out" : "In"}`),
            onClick: k
          }, [
            r("i", {
              class: Ge === "maximize" ? dt().MODAL_ZOOM_OUT : dt().MODAL_ZOOM_IN
            })
          ]) : Me(),
          ge ? r("span", {
            class: ["vxe-modal--close-btn", "trigger--btn"],
            title: Te("vxe.modal.close"),
            onClick: I
          }, [
            r("i", {
              class: dt().MODAL_CLOSE
            })
          ]) : Me()
        ])
      ];
    }, Ee = () => {
      const { slots: fe = {}, showZoom: ge, showMaximize: $e, draggable: Ve } = e, ce = S.value, We = n.header || fe.header, Ge = [];
      if (e.showHeader) {
        const Ze = {};
        Ve && (Ze.onMousedown = Z), (i.isBoolean($e) ? $e : ge) && e.dblclickZoom && e.type === "modal" && (Ze.onDblclick = k), Ge.push(r("div", Object.assign({ ref: s, class: ["vxe-modal--header", {
          "is--ellipsis": !ce && e.showTitleOverflow
        }] }, Ze), We ? !c.inited || e.destroyOnClose && !c.visible ? [] : It(We({ $modal: b })) : ye()));
      }
      return Ge;
    }, xe = () => {
      const { slots: fe = {}, status: ge, message: $e, iconStatus: Ve } = e, ce = e.content || $e, We = S.value, Ge = n.default || fe.default, Ze = [];
      return !We && (ge || Ve) && Ze.push(r("div", {
        class: "vxe-modal--status-wrapper"
      }, [
        r("i", {
          class: ["vxe-modal--status-icon", Ve || dt()[`MODAL_${ge}`.toLocaleUpperCase()]]
        })
      ])), Ze.push(r("div", {
        class: "vxe-modal--content"
      }, Ge ? !c.inited || e.destroyOnClose && !c.visible ? [] : It(Ge({ $modal: b })) : Vn(ce))), We || Ze.push(r(Ai, {
        class: "vxe-modal--loading",
        modelValue: e.loading
      })), [
        r("div", {
          class: "vxe-modal--body"
        }, Ze)
      ];
    }, Le = () => {
      const { showCancelButton: fe, showConfirmButton: ge, type: $e } = e, Ve = [];
      return (i.isBoolean(fe) ? fe : $e === "confirm") && Ve.push(r($n, {
        key: 1,
        ref: g,
        content: e.cancelButtonText || Te("vxe.button.cancel"),
        onClick: te
      })), (i.isBoolean(ge) ? ge : $e === "confirm" || $e === "alert") && Ve.push(r($n, {
        key: 2,
        ref: f,
        status: "primary",
        content: e.confirmButtonText || Te("vxe.button.confirm"),
        onClick: z
      })), Ve;
    }, je = () => {
      const { slots: fe = {} } = e, ge = S.value, $e = n.footer || fe.footer, Ve = [];
      return e.showFooter && Ve.push(r("div", {
        class: "vxe-modal--footer"
      }, $e ? !c.inited || e.destroyOnClose && !c.visible ? [] : It($e({ $modal: b })) : Le())), !ge && e.resize && Ve.push(r("span", {
        class: "vxe-modal--resize"
      }, ["wl", "wr", "swst", "sest", "st", "swlb", "selb", "sb"].map((ce) => r("span", {
        class: `${ce}-resize`,
        type: ce,
        onMousedown: ke
      })))), Ve;
    }, Ye = () => {
      const { className: fe, type: ge, animat: $e, draggable: Ve, iconStatus: ce, position: We, loading: Ge, status: Ze, lockScroll: pe, padding: Y, lockView: le, mask: he, resize: He } = e, { inited: se, zoomLocat: Se, modalTop: ze, contentVisible: Xe, visible: et, zoomStatus: at } = c, ft = n.aside, mt = a.value, B = S.value, Mt = {};
      return B && (Mt.onMouseover = H, Mt.onMouseout = ne), r(ts, {
        to: "body",
        disabled: e.transfer ? !se : !0
      }, [
        r("div", Object.assign({ ref: p, class: ["vxe-modal--wrapper", `type--${ge}`, `zoom--${at || "revert"}`, fe || "", We ? `pos--${We}` : "", {
          [`size--${mt}`]: mt,
          [`status--${Ze}`]: Ze,
          "is--padding": Y,
          "is--animat": $e,
          "lock--scroll": pe,
          "lock--view": le,
          "is--draggable": Ve,
          "is--resize": He,
          "is--mask": he,
          "is--maximize": Se,
          "is--visible": Xe,
          "is--active": et,
          "is--loading": Ge
        }], style: {
          zIndex: c.modalZindex,
          top: ze ? `${ze}px` : null
        }, onClick: M }, Mt), [
          r("div", {
            ref: d,
            class: "vxe-modal--box",
            onMousedown: K
          }, [
            B || ft ? r("div", {
              class: "vxe-modal--aside"
            }, ft ? It(ft({ $modal: b })) : [
              Ze || ce ? r("div", {
                class: "vxe-modal--status-wrapper"
              }, [
                r("i", {
                  class: ["vxe-modal--status-icon", ce || dt()[`MODAL_${Ze}`.toLocaleUpperCase()]]
                })
              ]) : Me()
            ]) : Me(),
            r("div", {
              class: "vxe-modal--container"
            }, Ee().concat(xe(), je()))
          ])
        ])
      ]);
    };
    return b.renderVN = Ye, lt(() => e.width, h), lt(() => e.height, h), lt(() => e.modelValue, (fe) => {
      fe ? A() : $("model");
    }), yn(() => {
      ae(() => {
        e.storage && !e.id && tl("vxe.error.reqProp", ["modal.id"]), e.modelValue && A(), h();
      }), e.escClosable && it.on(b, "keydown", de);
    }), On(() => {
      it.off(b, "keydown"), W();
    }), b;
  },
  render() {
    return this.renderVN();
  }
});
function th(e) {
  return Ev(), new Promise((t) => {
    if (e && e.id && _r.some((n) => n.props.id === e.id))
      t("exist");
    else {
      const n = e.onHide, o = Object.assign(e, {
        key: i.uniqueId(),
        modelValue: !0,
        onHide(l) {
          const a = ys.modals;
          n && n(l), ys.modals = a.filter((c) => c.key !== o.key), t(l.type);
        }
      });
      ys.modals.push(o);
    }
  });
}
function nh(e) {
  return i.find(_r, (t) => t.props.id === e);
}
function nL(e) {
  const t = e ? [nh(e)] : _r, n = [];
  return t.forEach((o) => {
    o && n.push(o.close());
  }), Promise.all(n);
}
function Ra(e, t, n, o) {
  let l;
  return i.isObject(t) ? l = t : l = { content: i.toValueString(t), title: n }, th(Object.assign(Object.assign(Object.assign({}, e), o), l));
}
function oL(e, t, n) {
  return Ra({
    type: "alert",
    showHeader: !0,
    showFooter: !0
  }, e, t, n);
}
function rL(e, t, n) {
  return Ra({
    type: "confirm",
    status: "question",
    showHeader: !0,
    showFooter: !0
  }, e, t, n);
}
function sL(e, t) {
  return Ra({
    type: "message",
    mask: !1,
    lockView: !1,
    showHeader: !1
  }, e, "", t);
}
function lL(e, t, n) {
  return Ra({
    type: "notification",
    mask: !1,
    lockView: !1,
    showHeader: !0,
    draggable: !1,
    position: "top-right",
    width: 320
  }, e, t, n);
}
const Yu = {
  get: nh,
  close: nL,
  open: th,
  alert: oL,
  confirm: rL,
  message: sL,
  notification: lL
}, Xu = Object.assign(Sl, {
  install: function(e) {
    e.component(Sl.name, Sl);
  }
});
$t.component(Sl.name, Sl);
ue.component(Sl);
ue.modal = Yu;
const iL = Xu, Zu = Object.assign({}, Ts, {
  install(e) {
    e.component(Ts.name, Ts);
  }
});
$t.component(Ts.name, Ts);
ue.component(Ts);
const aL = Zu;
class oh {
  constructor(t, n) {
    Object.assign(this, {
      id: i.uniqueId("option_"),
      value: n.value,
      label: n.label,
      visible: n.visible,
      className: n.className,
      disabled: n.disabled
    });
  }
  update(t, n) {
    this[t] = n;
  }
}
function cL(e) {
  return e instanceof oh;
}
function rh(e, t) {
  return cL(t) ? t : new oh(e, t);
}
function sh(e, t) {
  Object.keys(e).forEach((n) => {
    lt(() => e[n], (o) => {
      t.update(n, o);
    });
  });
}
function lh(e, t, n, o) {
  const { reactData: l } = e, { staticOptions: a } = l, c = t.parentNode, p = o ? o.option : null, d = p ? p.options : a;
  c && d && (d.splice(i.arrayIndexOf(c.children, t), 0, n), l.staticOptions = a.slice(0));
}
function ih(e, t) {
  const { reactData: n } = e, { staticOptions: o } = n, l = i.findTree(o, (a) => a.id === t.id, { children: "options" });
  l && l.items.splice(l.index, 1), n.staticOptions = o.slice(0);
}
const Dl = tt({
  name: "VxeOptgroup",
  props: {
    label: { type: [String, Number, Boolean], default: "" },
    visible: { type: Boolean, default: null },
    className: [String, Function],
    disabled: Boolean
  },
  setup(e, { slots: t }) {
    const n = Ie(), o = ut("$xeSelect", {}), l = rh(o, e), a = { option: l };
    return l.options = [], Xt("xeoptgroup", a), sh(e, l), yn(() => {
      lh(o, n.value, l);
    }), On(() => {
      ih(o, l);
    }), () => r("div", {
      ref: n
    }, t.default ? t.default() : []);
  }
}), Ju = Object.assign(Dl, {
  install: function(e) {
    e.component(Dl.name, Dl);
  }
});
$t.component(Dl.name, Dl);
ue.component(Dl);
const uL = Ju, Ol = tt({
  name: "VxeOption",
  props: {
    value: null,
    label: { type: [String, Number, Boolean], default: "" },
    visible: { type: Boolean, default: null },
    className: [String, Function],
    disabled: Boolean
  },
  setup(e, { slots: t }) {
    const n = Ie(), o = ut("$xeSelect", {}), l = ut("xeoptgroup", null), a = rh(o, e);
    return a.slots = t, sh(e, a), yn(() => {
      lh(o, n.value, a, l);
    }), On(() => {
      ih(o, a);
    }), () => r("div", {
      ref: n
    });
  }
}), Qu = Object.assign(Ol, {
  install: function(e) {
    e.component(Ol.name, Ol);
  }
});
$t.component(Ol.name, Ol);
ue.component(Ol);
const dL = Qu, Pa = Object.assign(qo, {
  install: function(e) {
    e.component(qo.name, qo);
  }
});
$t.component(qo.name, qo);
ue.component(qo);
const fL = Pa, Tl = tt({
  name: "VxePager",
  props: {
    size: { type: String, default: () => me().pager.size || me().size },
    // 自定义布局
    layouts: { type: Array, default: () => me().pager.layouts || ["PrevJump", "PrevPage", "Jump", "PageCount", "NextPage", "NextJump", "Sizes", "Total"] },
    // 当前页
    currentPage: { type: Number, default: 1 },
    // 加载中
    loading: Boolean,
    // 每页大小
    pageSize: { type: Number, default: () => me().pager.pageSize || 10 },
    // 总条数
    total: { type: Number, default: 0 },
    // 显示页码按钮的数量
    pagerCount: { type: Number, default: () => me().pager.pagerCount || 7 },
    // 每页大小选项列表
    pageSizes: { type: Array, default: () => me().pager.pageSizes || [10, 15, 20, 50, 100] },
    // 列对其方式
    align: { type: String, default: () => me().pager.align },
    // 带边框
    border: { type: Boolean, default: () => me().pager.border },
    // 带背景颜色
    background: { type: Boolean, default: () => me().pager.background },
    // 配套的样式
    perfect: { type: Boolean, default: () => me().pager.perfect },
    // 当只有一页时隐藏
    autoHidden: { type: Boolean, default: () => me().pager.autoHidden },
    transfer: { type: Boolean, default: () => me().pager.transfer },
    className: [String, Function],
    pageSizePlacement: {
      type: String,
      default: () => me().pager.pageSizePlacement
    },
    // 自定义图标
    iconPrevPage: String,
    iconJumpPrev: String,
    iconJumpNext: String,
    iconNextPage: String,
    iconJumpMore: String,
    iconHomePage: String,
    iconEndPage: String
  },
  emits: [
    "update:pageSize",
    "update:currentPage",
    "page-change"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = i.uniqueId(), { computeSize: a } = Ln(e), c = ut("$xeGrid", null), p = Ot({
      inpCurrPage: e.currentPage
    }), d = Ie(), s = {
      refElem: d
    }, f = {
      xID: l,
      props: e,
      context: t,
      getRefMaps: () => s
    };
    let g = {}, D = {};
    const b = (k, U) => Math.max(Math.ceil(k / U), 1), x = Q(() => b(e.total, e.pageSize)), S = (k, U) => {
      o("update:currentPage", U), k && U !== e.currentPage && g.dispatchEvent("page-change", { type: "current", pageSize: e.pageSize, currentPage: U }, k);
    }, y = (k, U) => {
      o("update:currentPage", k), U && k !== e.currentPage && g.dispatchEvent("page-change", { type: "current", pageSize: e.pageSize, currentPage: k }, U);
    }, h = (k) => {
      const U = k.target, _ = i.toInteger(U.value), K = x.value, Z = _ <= 0 ? 1 : _ >= K ? K : _, ke = i.toValueString(Z);
      U.value = ke, p.inpCurrPage = ke, y(Z, k);
    }, O = Q(() => {
      const { pagerCount: k } = e, _ = x.value > k ? k - 2 : k, K = [];
      for (let Z = 0; Z < _; Z++)
        K.push(Z);
      return K;
    }), E = Q(() => Math.floor((e.pagerCount - 2) / 2)), T = Q(() => e.pageSizes.map((k) => i.isNumber(k) ? {
      value: k,
      label: `${Te("vxe.pager.pagesize", [k])}`
    } : Object.assign({ value: "", label: "" }, k))), W = (k) => {
      const { currentPage: U } = e;
      U > 1 && y(1, k);
    }, $ = (k) => {
      const { currentPage: U } = e, _ = x.value;
      U < _ && y(_, k);
    }, I = (k) => {
      const { currentPage: U } = e, _ = x.value;
      U > 1 && y(Math.min(_, Math.max(U - 1, 1)), k);
    }, z = (k) => {
      const { currentPage: U } = e, _ = x.value;
      U < _ && y(Math.min(_, U + 1), k);
    }, te = (k) => {
      const U = O.value;
      y(Math.max(e.currentPage - U.length, 1), k);
    }, Ce = (k) => {
      const U = x.value, _ = O.value;
      y(Math.min(e.currentPage + _.length, U), k);
    }, N = (k) => {
      const { value: U } = k, _ = i.toNumber(U), K = b(e.total, _);
      let Z = e.currentPage;
      Z > K && (Z = K, o("update:currentPage", K)), o("update:pageSize", _), g.dispatchEvent("page-change", { type: "size", pageSize: _, currentPage: Z }, k.$event);
    }, F = (k) => {
      const U = k.target;
      p.inpCurrPage = U.value;
    }, j = (k) => {
      it.hasKey(k, Vt.ENTER) ? h(k) : it.hasKey(k, Vt.ARROW_UP) ? (k.preventDefault(), z(k)) : it.hasKey(k, Vt.ARROW_DOWN) && (k.preventDefault(), I(k));
    }, ee = () => r("button", {
      class: ["vxe-pager--prev-btn", {
        "is--disabled": e.currentPage <= 1
      }],
      type: "button",
      title: Te("vxe.pager.homePageTitle"),
      onClick: W
    }, [
      r("i", {
        class: ["vxe-pager--btn-icon", e.iconHomePage || dt().PAGER_HOME]
      })
    ]), oe = () => r("button", {
      class: ["vxe-pager--prev-btn", {
        "is--disabled": e.currentPage <= 1
      }],
      type: "button",
      title: Te("vxe.pager.prevPageTitle"),
      onClick: I
    }, [
      r("i", {
        class: ["vxe-pager--btn-icon", e.iconPrevPage || dt().PAGER_PREV_PAGE]
      })
    ]), re = (k) => r(k || "button", {
      class: ["vxe-pager--jump-prev", {
        "is--fixed": !k,
        "is--disabled": e.currentPage <= 1
      }],
      type: "button",
      title: Te("vxe.pager.prevJumpTitle"),
      onClick: te
    }, [
      k ? r("i", {
        class: ["vxe-pager--jump-more-icon", e.iconJumpMore || dt().PAGER_JUMP_MORE]
      }) : null,
      r("i", {
        class: ["vxe-pager--jump-icon", e.iconJumpPrev || dt().PAGER_JUMP_PREV]
      })
    ]), G = (k) => {
      const U = x.value;
      return r(k || "button", {
        class: ["vxe-pager--jump-next", {
          "is--fixed": !k,
          "is--disabled": e.currentPage >= U
        }],
        type: "button",
        title: Te("vxe.pager.nextJumpTitle"),
        onClick: Ce
      }, [
        k ? r("i", {
          class: ["vxe-pager--jump-more-icon", e.iconJumpMore || dt().PAGER_JUMP_MORE]
        }) : null,
        r("i", {
          class: ["vxe-pager--jump-icon", e.iconJumpNext || dt().PAGER_JUMP_NEXT]
        })
      ]);
    }, J = () => {
      const k = x.value;
      return r("button", {
        class: ["vxe-pager--next-btn", {
          "is--disabled": e.currentPage >= k
        }],
        type: "button",
        title: Te("vxe.pager.nextPageTitle"),
        onClick: z
      }, [
        r("i", {
          class: ["vxe-pager--btn-icon", e.iconNextPage || dt().PAGER_NEXT_PAGE]
        })
      ]);
    }, A = () => {
      const k = x.value;
      return r("button", {
        class: ["vxe-pager--prev-btn", {
          "is--disabled": e.currentPage >= k
        }],
        type: "button",
        title: Te("vxe.pager.endPageTitle"),
        onClick: $
      }, [
        r("i", {
          class: ["vxe-pager--btn-icon", e.iconEndPage || dt().PAGER_END]
        })
      ]);
    }, M = (k) => {
      const { currentPage: U, pagerCount: _ } = e, K = [], Z = x.value, ke = O.value, ye = E.value, Ee = Z > _, xe = Ee && U > ye + 1, Le = Ee && U < Z - ye;
      let je = 1;
      return Ee && (U >= Z - ye ? je = Math.max(Z - ke.length + 1, 1) : je = Math.max(U - ye, 1)), k && xe && K.push(r("button", {
        class: "vxe-pager--num-btn",
        type: "button",
        onClick: (Ye) => S(Ye, 1)
      }, 1), re("span")), ke.forEach((Ye, fe) => {
        const ge = je + fe;
        ge <= Z && K.push(r("button", {
          key: ge,
          class: ["vxe-pager--num-btn", {
            "is--active": U === ge
          }],
          type: "button",
          onClick: ($e) => S($e, ge)
        }, ge));
      }), k && Le && K.push(G("button"), r("button", {
        class: "vxe-pager--num-btn",
        type: "button",
        onClick: (Ye) => S(Ye, Z)
      }, Z)), r("span", {
        class: "vxe-pager--btn-wrapper"
      }, K);
    }, H = () => M(!0), ne = () => {
      const k = T.value;
      return r(Pa, {
        class: "vxe-pager--sizes",
        modelValue: e.pageSize,
        placement: e.pageSizePlacement,
        transfer: e.transfer,
        options: k,
        onChange: N
      });
    }, de = (k) => r("span", {
      class: "vxe-pager--jump"
    }, [
      k ? r("span", {
        class: "vxe-pager--goto-text"
      }, Te("vxe.pager.goto")) : null,
      r("input", {
        class: "vxe-pager--goto",
        value: p.inpCurrPage,
        type: "text",
        autocomplete: "off",
        onInput: F,
        onKeydown: j,
        onBlur: h
      }),
      k ? r("span", {
        class: "vxe-pager--classifier-text"
      }, Te("vxe.pager.pageClassifier")) : null
    ]), ve = () => de(!0), Oe = () => {
      const k = x.value;
      return r("span", {
        class: "vxe-pager--count"
      }, [
        r("span", {
          class: "vxe-pager--separator"
        }),
        r("span", k)
      ]);
    }, Fe = () => r("span", {
      class: "vxe-pager--total"
    }, Te("vxe.pager.total", [e.total]));
    g = {
      dispatchEvent(k, U, _) {
        o(k, zt(_, { $pager: f }, U));
      },
      homePage() {
        return W(), ae();
      },
      endPage() {
        return $(), ae();
      },
      prevPage() {
        return I(), ae();
      },
      nextPage() {
        return z(), ae();
      },
      prevJump() {
        return te(), ae();
      },
      nextJump() {
        return Ce(), ae();
      }
    }, D = {
      handlePrevPage: I,
      handleNextPage: z,
      handlePrevJump: te,
      handleNextJump: Ce
    }, Object.assign(f, g, D), lt(() => e.currentPage, (k) => {
      p.inpCurrPage = k;
    });
    const R = () => {
      const { align: k, layouts: U, className: _ } = e, K = [], Z = a.value, ke = x.value;
      return n.left && K.push(r("span", {
        class: "vxe-pager--left-wrapper"
      }, n.left({ $grid: c }))), U.forEach((ye) => {
        let Ee;
        switch (ye) {
          case "Home":
            Ee = ee;
            break;
          case "PrevJump":
            Ee = re;
            break;
          case "PrevPage":
            Ee = oe;
            break;
          case "Number":
            Ee = M;
            break;
          case "JumpNumber":
            Ee = H;
            break;
          case "NextPage":
            Ee = J;
            break;
          case "NextJump":
            Ee = G;
            break;
          case "End":
            Ee = A;
            break;
          case "Sizes":
            Ee = ne;
            break;
          case "FullJump":
            Ee = ve;
            break;
          case "Jump":
            Ee = de;
            break;
          case "PageCount":
            Ee = Oe;
            break;
          case "Total":
            Ee = Fe;
            break;
        }
        Ee ? K.push(Ee()) : process.env.NODE_ENV === "development" && tl("vxe.error.notProp", [`layouts -> ${ye}`]);
      }), n.right && K.push(r("span", {
        class: "vxe-pager--right-wrapper"
      }, n.right({ $grid: c }))), r("div", {
        ref: d,
        class: ["vxe-pager", _ ? i.isFunction(_) ? _({ $pager: f }) : _ : "", {
          [`size--${Z}`]: Z,
          [`align--${k}`]: k,
          "is--border": e.border,
          "is--background": e.background,
          "is--perfect": e.perfect,
          "is--hidden": e.autoHidden && ke === 1,
          "is--loading": e.loading
        }]
      }, [
        r("div", {
          class: "vxe-pager--wrapper"
        }, K)
      ]);
    };
    return f.renderVN = R, f;
  },
  render() {
    return this.renderVN();
  }
}), ed = Object.assign(Tl, {
  install: function(e) {
    e.component(Tl.name, Tl);
  }
});
$t.component(Tl.name, Tl);
ue.component(Tl);
const pL = ed, Ml = tt({
  name: "VxePasswordInput",
  props: {
    modelValue: String,
    name: String,
    clearable: { type: Boolean, default: () => me().passwordInput.clearable },
    readonly: Boolean,
    disabled: Boolean,
    placeholder: {
      type: String,
      default: () => i.eqNull(me().passwordInput.placeholder) ? Te("vxe.base.pleaseInput") : me().passwordInput.placeholder
    },
    autocomplete: { type: String, default: "off" },
    className: String,
    size: { type: String, default: () => me().passwordInput.size || me().size },
    prefixIcon: String,
    suffixIcon: String
  },
  emits: [
    "update:modelValue",
    "input",
    "change",
    "click",
    "focus",
    "blur",
    "clear",
    "toggle-visible",
    "prefix-click",
    "suffix-click"
  ],
  setup(e, t) {
    const { emit: n, slots: o } = t, l = ut("$xeForm", null), a = ut("xeFormItemInfo", null), c = i.uniqueId(), { computeSize: p } = Ln(e), d = Ot({
      showPwd: !1,
      isActivated: !1,
      inputValue: e.modelValue
    }), s = Ie(), f = Ie(), g = {
      refElem: s,
      refInput: f
    }, D = {
      xID: c,
      props: e,
      context: t,
      reactData: d,
      getRefMaps: () => g
    };
    let b = {};
    const x = Q(() => e.clearable), S = Q(() => {
      const { readonly: A } = e;
      return A;
    }), y = Q(() => {
      const { placeholder: A } = e;
      return A ? Vn(A) : "";
    }), h = Q(() => {
      const { showPwd: A } = d;
      return A ? "text" : "password";
    }), O = (A) => {
      const { inputValue: M } = d;
      b.dispatchEvent(A.type, { value: M }, A);
    }, E = (A, M) => {
      d.inputValue = A, b.dispatchEvent("input", { value: A }, M);
    }, T = (A) => {
      const H = A.target.value;
      E(H, A);
    }, W = (A, M) => {
      d.inputValue = A, n("update:modelValue", A), b.dispatchEvent("input", { value: A }, M), i.toValueString(e.modelValue) !== A && (b.dispatchEvent("change", { value: A }, M), l && a && l.triggerItemEvent(M, a.itemConfig.field, A));
    }, $ = (A) => {
      O(A);
      const { inputValue: M } = d;
      l && a && l.triggerItemEvent(A, a.itemConfig.field, M);
    }, I = (A) => {
      d.isActivated = !0, O(A);
    }, z = (A) => {
      const { inputValue: M } = d;
      b.dispatchEvent("blur", { value: M }, A);
    }, te = (A) => {
      const { readonly: M, disabled: H } = e, { showPwd: ne } = d;
      !H && !M && (d.showPwd = !ne), b.dispatchEvent("toggle-visible", { visible: d.showPwd }, A);
    }, Ce = (A) => {
      O(A);
    }, N = (A, M) => {
      focus(), W("", A), b.dispatchEvent("clear", { value: M }, A);
    }, F = (A) => {
      const { disabled: M } = e;
      if (!M) {
        const { inputValue: H } = d;
        b.dispatchEvent("suffix-click", { value: H }, A);
      }
    }, j = (A) => {
      const { disabled: M } = e;
      if (!M) {
        const { inputValue: H } = d;
        b.dispatchEvent("prefix-click", { value: H }, A);
      }
    }, ee = () => {
      const { showPwd: A } = d;
      return r("div", {
        class: "password-input--control-icon",
        onClick: te
      }, [
        r("i", {
          class: ["password-input--password-icon", A ? dt().PASSWORD_INPUT_SHOW_PWD : dt().PASSWORD_INPUT_HIDE_PWD]
        })
      ]);
    }, oe = () => {
      const { prefixIcon: A } = e, M = o.prefix;
      return M || A ? r("div", {
        class: "password-input--prefix",
        onClick: j
      }, [
        r("div", {
          class: "password-input--prefix-icon"
        }, M ? It(M({})) : [
          r("i", {
            class: A
          })
        ])
      ]) : null;
    }, re = () => {
      const { disabled: A, suffixIcon: M } = e, { inputValue: H } = d, ne = o.suffix, de = x.value;
      return de || ne || M ? r("div", {
        class: ["password-input--suffix", {
          "is--clear": de && !A && !(H === "" || i.eqNull(H))
        }]
      }, [
        de ? r("div", {
          class: "password-input--clear-icon",
          onClick: N
        }, [
          r("i", {
            class: dt().INPUT_CLEAR
          })
        ]) : Me(),
        G(),
        ne || M ? r("div", {
          class: "password-input--suffix-icon",
          onClick: F
        }, ne ? It(ne({})) : [
          r("i", {
            class: M
          })
        ]) : Me()
      ]) : null;
    }, G = () => ee();
    b = {
      dispatchEvent(A, M, H) {
        n(A, zt(H, { $passwordInput: D }, M));
      },
      focus() {
        const A = f.value;
        return d.isActivated = !0, A.focus(), ae();
      },
      blur() {
        return f.value.blur(), d.isActivated = !1, ae();
      },
      select() {
        return f.value.select(), d.isActivated = !1, ae();
      }
    }, Object.assign(D, b), lt(() => e.modelValue, (A) => {
      d.inputValue = A;
    });
    const J = () => {
      const { className: A, name: M, disabled: H, readonly: ne, autocomplete: de } = e, { inputValue: ve, isActivated: Oe } = d, Fe = p.value, R = S.value, k = h.value, U = y.value, _ = x.value, K = oe(), Z = re();
      return r("div", {
        ref: s,
        class: ["password-input", A, {
          [`size--${Fe}`]: Fe,
          "is--prefix": !!K,
          "is--suffix": !!Z,
          "is--readonly": ne,
          "is--disabled": H,
          "is--active": Oe,
          "show--clear": _ && !H && !(ve === "" || i.eqNull(ve))
        }]
      }, [
        K || Me(),
        r("div", {
          class: "password-input--wrapper"
        }, [
          r("input", {
            ref: f,
            class: "password-input--inner",
            value: ve,
            name: M,
            type: k,
            placeholder: U,
            readonly: R,
            disabled: H,
            autocomplete: de,
            onClick: Ce,
            onInput: T,
            onChange: $,
            onFocus: I,
            onBlur: z
          })
        ]),
        Z || Me()
      ]);
    };
    return D.renderVN = J, D;
  },
  render() {
    return this.renderVN();
  }
}), td = Object.assign({}, Ml, {
  install(e) {
    e.component(Ml.name, Ml);
  }
});
$t.component(Ml.name, Ml);
ue.component(Ml);
const mL = td;
let oo;
const gL = 'body{margin:0;padding:0;color:#000000;font-size:14px;font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu}body *{-webkit-box-sizing:border-box;box-sizing:border-box}.vxe-table{border-collapse:collapse;text-align:left;border-spacing:0}.vxe-table:not(.is--print){table-layout:fixed}.vxe-table,.vxe-table th,.vxe-table td,.vxe-table td{border-color:#D0D0D0;border-style:solid;border-width:0}.vxe-table.is--print{width:100%}.border--default,.border--full,.border--outer{border-top-width:1px}.border--default,.border--full,.border--outer{border-left-width:1px}.border--outer,.border--default th,.border--default td,.border--full th,.border--full td,.border--outer th,.border--inner th,.border--inner td{border-bottom-width:1px}.border--default,.border--outer,.border--full th,.border--full td{border-right-width:1px}.border--default th,.border--full th,.border--outer th{background-color:#f8f8f9}.vxe-table td>div,.vxe-table th>div{padding:.5em .4em}.col--center{text-align:center}.col--right{text-align:right}.vxe-table:not(.is--print) .col--ellipsis>div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.vxe-table--tree-node{text-align:left}.vxe-table--tree-node-wrapper{position:relative}.vxe-table--tree-icon-wrapper{position:absolute;top:50%;width:1em;height:1em;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.vxe-table--tree-unfold-icon,.vxe-table--tree-fold-icon{position:absolute;width:0;height:0;border-style:solid;border-width:.5em;border-right-color:transparent;border-bottom-color:transparent}.vxe-table--tree-unfold-icon{left:.3em;top:0;border-left-color:#939599;border-top-color:transparent}.vxe-table--tree-fold-icon{left:0;top:.3em;border-left-color:transparent;border-top-color:#939599}.vxe-table--tree-cell{display:block;padding-left:1.5em}.vxe-table input[type="checkbox"]{margin:0}.vxe-table input[type="checkbox"],.vxe-table input[type="radio"],.vxe-table input[type="checkbox"]+span,.vxe-table input[type="radio"]+span{vertical-align:middle;padding-left:0.4em}';
function Ip() {
  const e = document.createElement("iframe");
  return e.className = "vxe-table--print-frame", e;
}
function kp() {
  oo.parentNode || document.body.appendChild(oo);
}
function vL() {
  requestAnimationFrame(ah);
}
function ah() {
  if (oo) {
    if (oo.parentNode) {
      try {
        oo.contentDocument.write("");
      } catch {
      }
      oo.parentNode.removeChild(oo);
    }
    oo = null;
  }
}
function hL(e, t) {
  return new Blob([e], { type: `text/${t};charset=utf-8;` });
}
const ea = 80;
function bL(e, t) {
  const { customStyle: n } = e;
  return [
    "<!DOCTYPE html><html>",
    "<head>",
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">',
    `<title>${e.title}</title>`,
    e._pageBreaks || e.pageBreaks && e.pageBreaks.length ? '<style media="print">@page {size: auto;margin: 0mm;}</style>' : "",
    `<style>.vxe-print-slots{display: none;}.vxe-print-page-break.align--center{text-align:center;}.vxe-print-page-break.align--left{text-align:left;}.vxe-print-page-break.align--right{text-align:right;}.vxe-print-page-break--header-title{font-size:1.8em;text-align:center;line-height:${ea}px;}.vxe-print-page-break{page-break-before:always;display:flex;flex-direction:column;height:100vh;overflow:hidden;}.vxe-print-page-break--body{display:flex;flex-direction:row;flex-grow:1;overflow: hidden;}.vxe-print-page-break--left,.vxe-print-page-break--right{flex-shrink:0;width:${ea}px;height:100%;}.vxe-print-page-break--header,.vxe-print-page-break--footer{flex-shrink:0;height:${ea}px;width:100%;}.vxe-print-page-break--content{flex-grow: 1;overflow: hidden;}.vxe-print-page-break--footer-page-number{line-height:${ea}px;text-align:center;}</style>`,
    `<style>${gL}</style>`,
    n ? `<style>${n}</style>` : "",
    "</head>",
    "<body>",
    `${t}`,
    "</body>",
    "</html>"
  ].join("");
}
function Vp(e, t = "") {
  const { beforeMethod: n } = e;
  n && (t = n({ content: t, html: t, options: e }) || ""), t = bL(e, t);
  const o = hL(t, "html");
  return new Promise((l) => {
    i.browse().msie ? (ah(), oo = Ip(), kp(), oo.contentDocument.write(t), oo.contentDocument.execCommand("print"), setTimeout(() => {
      l({
        status: !0
      });
    }, 300)) : (oo || (oo = Ip(), oo.onload = (a) => {
      a.target.src && (a.target.contentWindow.onafterprint = vL, a.target.contentWindow.print()), l({
        status: !0
      });
    }, oo.onerror = () => {
      l({
        status: !1
      });
    }), kp(), oo.src = URL.createObjectURL(o));
  });
}
function xL(e) {
  const { title: t, showPageNumber: n, align: o, headerAlign: l, footerAlign: a, showAllPageTitle: c } = e, p = e.pageBreaks || [], d = p.length;
  return p.map((s, f) => {
    const g = s.bodyHtml, D = s.headerHtml || e.headerHtml, b = s.footerHtml || e.footerHtml, x = s.leftHtml || e.leftHtml, S = s.rightHtml || e.rightHtml, y = f + 1, h = {
      currentPage: y,
      pageCount: d
    };
    return [
      `<div class="${["vxe-print-page-break", o ? `align--${o}` : ""].join(" ")}">`,
      `<div class="${["vxe-print-page-break--header", l ? `align--${l}` : ""].join(" ")}">`,
      D ? `${i.isFunction(D) ? D(h) : D || ""}` : t && (c || !f) ? `<div class="vxe-print-page-break--header-title">${t || ""}</div>` : "",
      "</div>",
      '<div class="vxe-print-page-break--body">',
      `<div class="vxe-print-page-break--left">${i.isFunction(x) ? x(h) : x || ""}</div>`,
      `<div class="vxe-print-page-break--content">${i.isFunction(g) ? g(h) : g || ""}</div>`,
      `<div class="vxe-print-page-break--right">${i.isFunction(S) ? S(h) : S || ""}</div>`,
      "</div>",
      `<div class="${["vxe-print-page-break--footer", a ? `align--${a}` : ""].join(" ")}">`,
      b ? `${i.isFunction(b) ? b(h) : b || ""}` : n ? `<div class="vxe-print-page-break--footer-page-number">${y}/${d}</div>` : "",
      "</div>",
      "</div>"
    ].join("");
  }).join("");
}
const nd = (e) => {
  const t = Object.assign({ _pageBreaks: !1, customLayout: !0 }, e);
  if (t.sheetName && (t.title = t.title || t.sheetName), t.style && (t.customStyle = t.customStyle || t.style), t.beforePrintMethod && (t.beforeMethod = t.beforeMethod || t.beforePrintMethod), t.pageBreaks && t.pageBreaks.length)
    return Vp(t, xL(t));
  const n = t.html || t.content;
  return Vp(t, n);
};
function yL(e, t, n) {
  const o = e.reactData.staticPageBreaks, l = t.parentNode;
  l && o && (o.splice(i.arrayIndexOf(l.children, t), 0, n), e.reactData.staticPageBreaks = o.slice(0));
}
function CL(e, t) {
  e.reactData.staticPageBreaks = e.reactData.staticPageBreaks.filter((n) => n.id !== t.id);
}
const Il = tt({
  name: "VxePrintPageBreak",
  props: {},
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = ut("$xePrint", null), a = Ie(), c = Ot({}), p = {
      refElem: a
    }, d = {}, s = Ot({
      id: o,
      slots: n
    }), f = {
      xID: o,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => p,
      getComputeMaps: () => d
    };
    if (!l)
      return f.renderVN = () => [], f;
    const g = () => r("div", {
      ref: a
    });
    return f.renderVN = g, yn(() => {
      l && a.value && yL(l, a.value, s);
    }), On(() => {
      l && CL(l, s);
    }), f;
  },
  render() {
    return this.renderVN();
  }
}), od = Object.assign({}, Il, {
  install(e) {
    e.component(Il.name, Il);
  }
});
$t.component(Il.name, Il);
ue.component(Il);
const wL = od, kl = tt({
  name: "VxePrint",
  props: {
    align: {
      type: String,
      default: () => me().print.align
    },
    title: String,
    headerAlign: {
      type: String,
      default: () => me().print.headerAlign
    },
    footerAlign: {
      type: String,
      default: () => me().print.footerAlign
    },
    showPageNumber: {
      type: Boolean,
      default: () => me().print.showPageNumber
    },
    customLayout: Boolean,
    pageBreaks: Array,
    content: String,
    html: String,
    headerHtml: String,
    footerHtml: String,
    leftHtml: String,
    rightHtml: String,
    showAllPageTitle: {
      Boolean,
      default: () => me().print.showAllPageTitle
    },
    customStyle: {
      type: String,
      default: () => me().print.customStyle
    },
    beforeMethod: Function
  },
  emits: [],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = i.uniqueId(), a = Ie(), c = Ot({
      staticPageBreaks: []
    }), p = {
      refElem: a
    }, d = {}, s = {
      xID: l,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => p,
      getComputeMaps: () => d
    };
    Object.assign(s, {
      dispatchEvent(x, S, y) {
        o(x, zt(y, { $print: s }, S));
      },
      print() {
        const x = a.value;
        return nd(Object.assign({}, e, {
          _pageBreaks: !!c.staticPageBreaks.length,
          html: (x ? x.outerHTML : "") || e.html || e.content || ""
        }));
      }
    });
    const g = () => {
      const { title: x, showPageNumber: S, showAllPageTitle: y, align: h, headerAlign: O, footerAlign: E } = e, T = e.pageBreaks || [], W = T.length;
      return T.map(($, I) => {
        const z = $.bodyHtml, te = $.headerHtml || e.headerHtml, Ce = $.footerHtml || e.footerHtml, N = $.leftHtml || e.leftHtml, F = $.rightHtml || e.rightHtml, j = I + 1, ee = {
          currentPage: j,
          pageCount: W
        };
        return r("div", {
          class: ["vxe-print-page-break", h ? `align--${h}` : ""]
        }, [
          r("div", {
            class: ["vxe-print-page-break--header", O ? `align--${O}` : ""]
          }, te ? `${i.isFunction(te) ? te(ee) : te || ""}` : [
            x && (y || !I) ? r("div", {
              class: "vxe-print-page-break--header-title"
            }, `${x || ""}`) : Me()
          ]),
          r("div", {
            class: "vxe-print-page-break--body"
          }, [
            r("div", {
              class: "vxe-print-page-break--left"
            }, `${i.isFunction(N) ? N(ee) : N || ""}`),
            r("div", {
              class: "vxe-print-page-break--content"
            }, `${i.isFunction(z) ? z(ee) : z || ""}`),
            r("div", {
              class: "vxe-print-page-break--right"
            }, `${i.isFunction(F) ? F(ee) : F || ""}`)
          ]),
          r("div", {
            class: ["vxe-print-page-break--footer", E ? `align--${E}` : ""]
          }, Ce ? `${i.isFunction(Ce) ? Ce(ee) : Ce || ""}` : [
            S ? r("div", {
              class: "vxe-print-page-break--footer-page-number"
            }, `${j}/${W}`) : Me()
          ])
        ]);
      });
    }, D = () => {
      const { title: x, showPageNumber: S, showAllPageTitle: y, align: h, headerAlign: O, footerAlign: E } = e, { staticPageBreaks: T } = c, W = T.length;
      return T.map(($, I) => {
        const z = $.slots || {}, te = I + 1, Ce = z.default, N = z.header || n.header, F = z.footer || n.footer, j = z.left || n.left, ee = z.right || n.right, oe = {
          currentPage: te,
          pageCount: W
        };
        return r("div", {
          class: ["vxe-print-page-break", h ? `align--${h}` : ""]
        }, [
          r("div", {
            class: ["vxe-print-page-break--header", O ? `align--${O}` : ""]
          }, N ? It(N(oe)) : [
            x && (y || !I) ? r("div", {
              class: "vxe-print-page-break--header-title"
            }, `${x || ""}`) : Me()
          ]),
          r("div", {
            class: "vxe-print-page-break--body"
          }, [
            r("div", {
              class: "vxe-print-page-break--left"
            }, j ? It(j(oe)) : []),
            r("div", {
              class: "vxe-print-page-break--content"
            }, Ce ? It(Ce(oe)) : []),
            r("div", {
              class: "vxe-print-page-break--right"
            }, ee ? It(ee(oe)) : [])
          ]),
          r("div", {
            class: ["vxe-print-page-break--footer", E ? `align--${E}` : ""]
          }, F ? It(F(oe)) : [
            S ? r("div", {
              class: "vxe-print-page-break--footer-page-number"
            }, `${te}/${W}`) : Me()
          ])
        ]);
      });
    }, b = () => {
      const { customLayout: x } = e, { staticPageBreaks: S } = c, y = n.default;
      return r("div", {
        ref: a,
        class: ["vxe-print"]
      }, x ? y ? It(y({})) : [] : [
        r("div", {
          key: "slot",
          class: "vxe-print-slots"
        }, y ? It(y({})) : [])
      ].concat(S.length ? D() : g()));
    };
    return s.renderVN = b, Xt("$xePrint", s), s;
  },
  render() {
    return this.renderVN();
  }
}), rd = Object.assign({}, kl, {
  install(e) {
    e.component(kl.name, kl);
  }
});
$t.component(kl.name, kl);
ue.component(kl);
ue.print = nd;
const EL = rd, Vl = tt({
  name: "VxePulldown",
  props: {
    modelValue: Boolean,
    disabled: Boolean,
    placement: String,
    size: { type: String, default: () => me().size },
    className: [String, Function],
    popupClassName: [String, Function],
    destroyOnClose: Boolean,
    transfer: {
      type: Boolean,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "hide-panel"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = ut("$xeTable", null), a = ut("$xeForm", null), c = i.uniqueId(), { computeSize: p } = Ln(e), d = Ot({
      inited: !1,
      panelIndex: 0,
      panelStyle: null,
      panelPlacement: null,
      visiblePanel: !1,
      animatVisible: !1,
      isActivated: !1
    }), s = Ie(), f = Ie(), g = Ie(), D = Q(() => {
      const { transfer: N } = e;
      if (N === null) {
        const F = me().pulldown.transfer;
        if (i.isBoolean(F))
          return F;
        if (l || a)
          return !0;
      }
      return N;
    }), b = {
      refElem: s
    }, x = {
      xID: c,
      props: e,
      context: t,
      reactData: d,
      getRefMaps: () => b
    };
    let S = {};
    const y = () => {
      d.panelIndex < ss() && (d.panelIndex = Cr());
    }, h = () => d.visiblePanel, O = () => ae().then(() => {
      const { placement: N } = e, { panelIndex: F, visiblePanel: j } = d, ee = D.value;
      if (j) {
        const oe = f.value, re = g.value;
        if (re && oe) {
          const G = oe.offsetHeight, J = oe.offsetWidth, A = re.offsetHeight, M = re.offsetWidth, H = 5, ne = {
            zIndex: F
          }, { boundingTop: de, boundingLeft: ve, visibleHeight: Oe, visibleWidth: Fe } = Ul(oe);
          let R = "bottom";
          if (ee) {
            let k = ve, U = de + G;
            N === "top" ? (R = "top", U = de - A) : N || (U + A + H > Oe && (R = "top", U = de - A), U < H && (R = "bottom", U = de + G)), k + M + H > Fe && (k -= k + M + H - Fe), k < H && (k = H), Object.assign(ne, {
              left: `${k}px`,
              top: `${U}px`,
              minWidth: `${J}px`
            });
          } else
            N === "top" ? (R = "top", ne.bottom = `${G}px`) : N || de + G + A > Oe && de - G - A > H && (R = "top", ne.bottom = `${G}px`);
          d.panelStyle = ne, d.panelPlacement = R;
        }
      }
      return ae();
    });
    let E;
    const T = () => (d.inited || (d.inited = !0), new Promise((N) => {
      e.disabled ? ae(() => {
        N();
      }) : (clearTimeout(E), d.isActivated = !0, d.animatVisible = !0, setTimeout(() => {
        d.visiblePanel = !0, o("update:modelValue", !0), O(), setTimeout(() => {
          N(O());
        }, 40);
      }, 10), y());
    })), W = () => (d.visiblePanel = !1, o("update:modelValue", !1), new Promise((N) => {
      d.animatVisible ? E = window.setTimeout(() => {
        d.animatVisible = !1, ae(() => {
          N();
        });
      }, 350) : ae(() => {
        N();
      });
    })), $ = () => d.visiblePanel ? W() : T(), I = (N) => {
      const { disabled: F } = e, { visiblePanel: j } = d, ee = g.value;
      F || j && (Bn(N, ee).flag ? O() : (W(), S.dispatchEvent("hide-panel", {}, N)));
    }, z = (N) => {
      const { disabled: F } = e, { visiblePanel: j } = d, ee = s.value, oe = g.value;
      F || (d.isActivated = Bn(N, ee).flag || Bn(N, oe).flag, j && !d.isActivated && (W(), S.dispatchEvent("hide-panel", {}, N)));
    }, te = (N) => {
      d.visiblePanel && (d.isActivated = !1, W(), S.dispatchEvent("hide-panel", {}, N));
    };
    S = {
      dispatchEvent(N, F, j) {
        o(N, zt(j, { $pulldown: x }, F));
      },
      isPanelVisible: h,
      togglePanel: $,
      showPanel: T,
      hidePanel: W
    }, Object.assign(x, S), lt(() => e.modelValue, (N) => {
      N ? T() : W();
    }), ae(() => {
      it.on(x, "mousewheel", I), it.on(x, "mousedown", z), it.on(x, "blur", te);
    }), On(() => {
      it.off(x, "mousewheel"), it.off(x, "mousedown"), it.off(x, "blur");
    });
    const Ce = () => {
      const { className: N, popupClassName: F, destroyOnClose: j, disabled: ee } = e, { inited: oe, isActivated: re, animatVisible: G, visiblePanel: J, panelStyle: A, panelPlacement: M } = d, H = D.value, ne = p.value, de = n.default, ve = n.header, Oe = n.footer, Fe = n.dropdown;
      return r("div", {
        ref: s,
        class: ["vxe-pulldown", N ? i.isFunction(N) ? N({ $pulldown: x }) : N : "", {
          [`size--${ne}`]: ne,
          "is--visible": J,
          "is--disabled": ee,
          "is--active": re
        }]
      }, [
        r("div", {
          ref: f,
          class: "vxe-pulldown--content"
        }, de ? de({ $pulldown: x }) : []),
        r(ts, {
          to: "body",
          disabled: H ? !oe : !0
        }, [
          r("div", {
            ref: g,
            class: ["vxe-table--ignore-clear vxe-pulldown--panel", F ? i.isFunction(F) ? F({ $pulldown: x }) : F : "", {
              [`size--${ne}`]: ne,
              "is--transfer": H,
              "animat--leave": G,
              "animat--enter": J
            }],
            placement: M,
            style: A
          }, Fe ? [
            r("div", {
              class: "vxe-pulldown--panel-wrapper"
            }, !oe || j && !J && !G ? [] : [
              ve ? r("div", {
                class: "vxe-pulldown--panel-header"
              }, ve({ $pulldown: x })) : Me(),
              r("div", {
                class: "vxe-pulldown--panel-body"
              }, Fe({ $pulldown: x })),
              Oe ? r("div", {
                class: "vxe-pulldown--panel-footer"
              }, Oe({ $pulldown: x })) : Me()
            ])
          ] : [])
        ])
      ]);
    };
    return x.renderVN = Ce, x;
  },
  render() {
    return this.renderVN();
  }
}), sd = Object.assign(Vl, {
  install: function(e) {
    e.component(Vl.name, Vl);
  }
});
$t.component(Vl.name, Vl);
ue.component(Vl);
const SL = sd, ld = Object.assign(Ds, {
  install: function(e) {
    e.component(Ds.name, Ds);
  }
});
$t.component(Ds.name, Ds);
ue.component(Ds);
const DL = ld, id = Object.assign(Os, {
  install: function(e) {
    e.component(Os.name, Os);
  }
});
$t.component(Os.name, Os);
ue.component(Os);
const OL = id, ad = Object.assign(ho, {
  install: function(e) {
    e.component(ho.name, ho);
  }
});
$t.component(ho.name, ho);
ue.component(ho);
const TL = ad, cd = Object.assign({}, Jr, {
  install(e) {
    e.component(Jr.name, Jr);
  }
});
$t.component(Jr.name, Jr);
ue.component(Jr);
const ML = cd, ud = Object.assign(Fn, {
  install: function(e) {
    e.component(Fn.name, Fn);
  }
});
$t.component(Fn.name, Fn);
ue.component(Fn);
const IL = ud, dd = Object.assign({}, To, {
  install(e) {
    e.component(To.name, To);
  }
});
$t.component(To.name, To);
ue.component(To);
const kL = dd, fd = Object.assign({}, yr, {
  install(e) {
    e.component(yr.name, yr);
  }
});
$t.component(yr.name, yr);
ue.component(yr);
const VL = fd, $l = tt({
  name: "VxeTag",
  props: {
    status: String,
    title: [String, Number],
    icon: String,
    content: [String, Number]
  },
  emits: [],
  setup(e, t) {
    const { slots: n } = t, o = i.uniqueId(), l = Ie(), a = Ot({}), c = {
      refElem: l
    }, p = {}, d = {
      xID: o,
      props: e,
      context: t,
      reactData: a,
      getRefMaps: () => c,
      getComputeMaps: () => p
    }, s = () => {
      const { icon: g, content: D } = e, b = n.default, x = n.icon;
      return [
        x || g ? r("span", {
          class: "vxe-tag--icon"
        }, x ? It(x({})) : [
          r("i", {
            class: g
          })
        ]) : Me(),
        r("span", {
          class: "vxe-tag--content"
        }, b ? b({}) : i.toValueString(D))
      ];
    }, f = () => {
      const { status: g, title: D } = e;
      return r("span", {
        ref: l,
        title: D,
        class: ["vxe-tag", {
          [`theme--${g}`]: g
        }]
      }, s());
    };
    return d.renderVN = f, d;
  },
  render() {
    return this.renderVN();
  }
}), pd = Object.assign({}, $l, {
  install(e) {
    e.component($l.name, $l);
  }
});
$t.component($l.name, $l);
ue.component($l);
const $L = pd, md = Object.assign({}, jo, {
  install(e) {
    e.component(jo.name, jo);
  }
});
$t.component(jo.name, jo);
ue.component(jo);
const RL = md, gd = Object.assign(Zr, {
  install: function(e) {
    e.component(Zr.name, Zr);
  }
});
$t.component(Zr.name, Zr);
ue.component(Zr);
const PL = gd, Na = Object.assign({}, Hr, {
  install(e) {
    e.component(Hr.name, Hr), e.component("VxeTipsComponent", Hr);
  }
});
$t.component(Hr.name, Hr);
ue.component(Hr);
const NL = Na, FL = Na, vd = Object.assign({}, br, {
  install(e) {
    e.component(br.name, br);
  }
});
$t.component(br.name, br);
ue.component(br);
const LL = vd;
function AL() {
  return i.uniqueId("node_");
}
const Rl = tt({
  name: "VxeTree",
  props: {
    data: Array,
    childrenField: {
      type: String,
      default: () => me().tree.childrenField
    },
    keyField: {
      type: String,
      default: () => me().tree.keyField
    },
    parentField: {
      type: String,
      default: () => me().tree.parentField
    },
    titleField: {
      type: String,
      default: () => me().tree.titleField
    },
    isCurrent: {
      type: Boolean,
      default: () => me().tree.isCurrent
    },
    isHover: {
      type: Boolean,
      default: () => me().tree.isHover
    },
    showLine: {
      type: Boolean,
      default: () => me().tree.showLine
    },
    trigger: String,
    indent: {
      type: Number,
      default: () => me().tree.indent
    },
    showRadio: {
      type: Boolean,
      default: () => me().tree.showRadio
    },
    radioCheckRowKey: {
      type: [String, Number],
      default: () => me().tree.radioCheckRowKey
    },
    radioConfig: {
      type: Object,
      default: () => i.clone(me().tree.radioConfig, !0)
    },
    showCheckbox: {
      type: Boolean,
      default: () => me().tree.showCheckbox
    },
    checkboxCheckRowKeys: {
      type: Array,
      default: () => me().tree.checkboxCheckRowKeys
    },
    checkboxConfig: {
      type: Object,
      default: () => i.clone(me().tree.checkboxConfig, !0)
    },
    toggleMethod: Function,
    showIcon: {
      type: Boolean,
      default: () => me().tree.showIcon
    },
    iconOpen: {
      type: String,
      default: () => me().tree.iconOpen
    },
    iconClose: {
      type: String,
      default: () => me().tree.iconClose
    },
    iconLoaded: {
      type: String,
      default: () => me().tree.iconLoaded
    }
  },
  emits: [
    "update:modelValue",
    "update:radioCheckRowKey",
    "update:checkboxCheckRowKeys",
    "row-click",
    "row-dblclick"
  ],
  setup(e, t) {
    const { emit: n, slots: o } = t, l = i.uniqueId(), a = Ie(), c = Ot({
      currentNode: null,
      selectRadioKey: e.radioCheckRowKey,
      treeList: [],
      treeExpandedMaps: {},
      selectCheckboxMaps: {},
      indeterminateCheckboxMaps: {}
    }), p = {
      nodeMaps: {}
    }, d = {
      refElem: a
    }, s = Q(() => e.titleField || "title"), f = Q(() => e.keyField || "_X_NODE_KEY"), g = Q(() => e.childrenField || "children"), D = Q(() => Object.assign({}, e.radioConfig)), b = Q(() => Object.assign({}, e.checkboxConfig)), x = {}, S = {
      xID: l,
      props: e,
      context: t,
      internalData: p,
      reactData: c,
      getRefMaps: () => d,
      getComputeMaps: () => x
    }, y = (_) => {
      const K = f.value, Z = i.get(_, K);
      return i.eqNull(Z) ? "" : encodeURIComponent(Z);
    }, h = (_) => {
      const { treeExpandedMaps: K } = c, Z = y(_);
      return !!K[Z];
    }, O = (_) => {
      const { selectRadioKey: K } = c;
      return K === _;
    }, E = (_) => O(y(_)), T = (_) => {
      const { selectCheckboxMaps: K } = c;
      return !!K[_];
    }, W = (_) => T(y(_)), $ = (_) => {
      const { indeterminateCheckboxMaps: K } = c;
      return !!K[_];
    }, I = (_) => $(y(_)), z = (_) => {
      n("update:checkboxCheckRowKeys", _);
    }, te = (_) => {
      n("update:radioCheckRowKey", _);
    }, Ce = (_) => {
      const K = {};
      _ && _.forEach((Z) => {
        K[Z] = !0;
      }), c.selectCheckboxMaps = K;
    }, N = (_, K, Z) => {
      K ? Z[_] && (Z[_] = !0) : Z[_] && delete Z[_];
    }, F = (_, K, Z) => {
      n(_, zt(Z, { $tree: S }, K));
    }, j = {
      dispatchEvent: F,
      clearExpand() {
        return c.treeExpandedMaps = {}, ae();
      },
      setExpandByRowid(_, K) {
        const Z = Object.assign(c.treeExpandedMaps);
        return _ && (i.isArray(_) || (_ = [_]), _.forEach((ke) => {
          N(ke, K, Z);
        }), c.treeExpandedMaps = Z), ae();
      },
      setExpand(_, K) {
        const Z = Object.assign(c.treeExpandedMaps);
        return _ && (i.isArray(_) || (_ = [_]), _.forEach((ke) => {
          const ye = y(ke);
          N(ye, K, Z);
        }), c.treeExpandedMaps = Z), ae();
      },
      toggleExpandByRowid(_) {
        const K = Object.assign(c.treeExpandedMaps);
        return _ && (i.isArray(_) || (_ = [_]), _.forEach((Z) => {
          N(Z, !K[Z], K);
        }), c.treeExpandedMaps = K), ae();
      },
      toggleExpand(_) {
        const K = Object.assign(c.treeExpandedMaps);
        return _ && (i.isArray(_) || (_ = [_]), _.forEach((Z) => {
          const ke = y(Z);
          N(ke, !K[ke], K);
        }), c.treeExpandedMaps = K), ae();
      },
      setAllExpand() {
        const _ = Object.assign(c.treeExpandedMaps), K = g.value;
        return i.eachTree(c.treeList, (Z) => {
          const ke = y(Z);
          _[ke] = !0;
        }, { children: K }), c.treeExpandedMaps = _, ae();
      },
      isExpandByRow: h,
      isCheckedByRadioRowid: O,
      isCheckedByRadioRow: E,
      isCheckedByCheckboxRowid: T,
      isIndeterminateByCheckboxRow: I,
      isCheckedByCheckboxRow: W
    }, ee = (_) => {
      const K = f.value, Z = g.value, ke = {};
      i.eachTree(_, (ye, Ee, xe, Le, je, Ye) => {
        let fe = y(ye);
        fe || (fe = AL(), i.set(ye, K, fe)), ke[fe] = {
          row: ye,
          rowIndex: Ee,
          parent: je,
          level: Ye.length
        };
      }, { children: Z }), p.nodeMaps = ke, c.treeList = _ ? _.slice(0) : [];
    }, oe = (_, K) => {
      const { trigger: Z, isCurrent: ke } = e, ye = D.value, Ee = b.value;
      let xe = !1, Le = !1, je = !1;
      ke ? c.currentNode = K : c.currentNode = null, Z === "row" && (je = !0, G(_, K)), ye.trigger === "row" && (xe = !0, H(_, K)), Ee.trigger === "row" && (Le = !0, M(_, K)), F("row-click", { row: K, triggerRadio: xe, triggerCheckbox: Le, triggerExpand: je }, _);
    }, re = (_, K) => {
      F("row-dblclick", { row: K }, _);
    }, G = (_, K) => {
      _.stopPropagation();
      const Z = Object.assign({}, c.treeExpandedMaps), ke = y(K);
      Z[ke] ? delete Z[ke] : Z[ke] = !0, c.treeExpandedMaps = Z;
    }, J = (_, K, Z) => {
      const ke = g.value, ye = i.get(_, ke), Ee = y(_);
      if (ye && ye.length) {
        let xe = !1, Le = 0;
        ye.forEach((Ye) => {
          const fe = y(Ye), ge = K[fe];
          (ge || Z[fe]) && (ge && Le++, xe = !0);
        }), Le === ye.length ? (K[Ee] || (K[Ee] = !0), Z[Ee] && delete Z[Ee]) : (K[Ee] && delete K[Ee], Z[Ee] = xe);
      } else
        Z[Ee] && delete Z[Ee];
    }, A = () => {
      const { treeList: _ } = c, K = g.value, Z = b.value, { checkStrictly: ke } = Z;
      if (!ke) {
        const ye = Object.assign({}, c.selectCheckboxMaps), Ee = {};
        i.eachTree(_, (xe, Le, je, Ye, fe, ge) => {
          const $e = i.get(xe, K);
          if ((!$e || !$e.length) && J(xe, ye, Ee), Le === je.length - 1)
            for (let Ve = ge.length - 2; Ve >= 0; Ve--) {
              const ce = ge[Ve];
              J(ce, ye, Ee);
            }
        }), c.selectCheckboxMaps = ye, c.indeterminateCheckboxMaps = Ee;
      }
    }, M = (_, K) => {
      _.stopPropagation();
      const Z = b.value, { checkStrictly: ke } = Z, ye = Object.assign({}, c.selectCheckboxMaps), Ee = g.value, xe = y(K);
      let Le = !1;
      ye[xe] ? delete ye[xe] : (Le = !0, ye[xe] = Le), ke || i.eachTree(i.get(K, Ee), (je) => {
        const Ye = y(je);
        Le ? ye[Ye] || (ye[Ye] = !0) : ye[Ye] && delete ye[Ye];
      }, { children: Ee }), c.selectCheckboxMaps = ye, A(), z(Object.keys(c.selectCheckboxMaps));
    }, H = (_, K) => {
      _.stopPropagation();
      const Z = y(K);
      c.selectRadioKey = Z, te(Z);
    };
    Object.assign(S, j, {});
    const de = (_, K) => {
      const { showRadio: Z } = e, { selectRadioKey: ke } = c, ye = K === ke, Ee = !1;
      return Z ? r("div", {
        class: ["vxe-tree--radio-option", {
          "is--checked": ye,
          "is--disabled": Ee
        }],
        onClick: (xe) => {
          H(xe, _);
        }
      }, [
        r("span", {
          class: ["vxe-radio--icon", ye ? dt().RADIO_CHECKED : dt().RADIO_UNCHECKED]
        })
      ]) : Me();
    }, ve = (_, K) => {
      const { showCheckbox: Z } = e, ke = T(K), ye = $(K), Ee = !1;
      return Z ? r("div", {
        class: ["vxe-tree--checkbox-option", {
          "is--checked": ke,
          "is--indeterminate": ye,
          "is--disabled": Ee
        }],
        onClick: (xe) => {
          M(xe, _);
        }
      }, [
        r("span", {
          class: ["vxe-checkbox--icon", ye ? dt().CHECKBOX_INDETERMINATE : ke ? dt().CHECKBOX_CHECKED : dt().CHECKBOX_UNCHECKED]
        })
      ]) : Me();
    }, Oe = (_) => {
      const { indent: K, iconOpen: Z, iconClose: ke } = e, { treeExpandedMaps: ye, currentNode: Ee } = c, { nodeMaps: xe } = p, Le = g.value, je = s.value, Ye = i.get(_, Le), fe = Ye && Ye.length, ge = o.title, $e = y(_), Ve = ye[$e], ce = xe[$e], We = i.get(_, je);
      return r("div", {
        class: ["vxe-tree--node-item-row", `node--level-${ce.level}`, {
          "is--current": Ee && $e === y(Ee)
        }],
        rowid: $e
      }, [
        r("div", {
          class: "vxe-tree--node-item-wrapper",
          style: {
            paddingLeft: `${(ce.level - 1) * (K || 1)}px`
          },
          onClick(Ge) {
            oe(Ge, _);
          },
          onDblclick(Ge) {
            re(Ge, _);
          }
        }, [
          r("div", {
            class: "vxe-tree--node-item-switcher"
          }, fe ? [
            r("div", {
              class: "vxe-tree--node-item-icon",
              onClick(Ge) {
                G(Ge, _);
              }
            }, [
              r("i", {
                class: Ve ? Z || dt().TREE_NODE_OPEN : ke || dt().TREE_NODE_CLOSE
              })
            ])
          ] : []),
          de(_, $e),
          ve(_, $e),
          r("div", {
            class: "vxe-tree--node-item-label"
          }, ge ? It(ge({ row: _ })) : `${We}`)
        ]),
        fe && ye[$e] ? r("div", {
          class: "vxe-tree--node-child-wrapper"
        }, Ye.map((Ge) => Oe(Ge))) : Me()
      ]);
    }, Fe = () => {
      const { treeList: _ } = c;
      return r("div", {
        class: "vxe-tree--node-list-wrapper"
      }, _.map((K) => Oe(K)));
    }, R = () => {
      const { trigger: _, isHover: K } = e;
      return r("div", {
        ref: a,
        class: ["vxe-tree", {
          "row--hover": K,
          "row--trigger": _ === "row"
        }]
      }, [
        Fe()
      ]);
    };
    S.renderVN = R;
    const k = Ie(0);
    lt(() => e.data ? e.data.length : 0, () => {
      k.value++;
    }), lt(() => e.data, () => {
      k.value++;
    }), lt(k, () => {
      ee(e.data || []);
    }), lt(() => e.radioCheckRowKey, (_) => {
      c.selectRadioKey = _;
    });
    const U = Ie(0);
    return lt(() => e.checkboxCheckRowKeys ? e.checkboxCheckRowKeys.length : 0, () => {
      U.value++;
    }), lt(() => e.checkboxCheckRowKeys, () => {
      U.value++;
    }), lt(U, () => {
      Ce(e.checkboxCheckRowKeys || []);
    }), On(() => {
      c.treeList = [], c.treeExpandedMaps = {}, p.nodeMaps = {};
    }), ee(e.data || []), S;
  },
  render() {
    return this.renderVN();
  }
}), hd = Object.assign({}, Rl, {
  install(e) {
    e.component(Rl.name, Rl);
  }
});
$t.component(Rl.name, Rl);
ue.component(Rl);
const _L = hd, Pl = tt({
  name: "VxeTreeSelect",
  props: {},
  emits: [],
  setup(e, t) {
    const { emit: n, slots: o } = t, l = i.uniqueId(), a = Ie(), c = Ot({}), p = {
      refElem: a
    }, d = {}, s = {
      xID: l,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => p,
      getComputeMaps: () => d
    };
    Object.assign(s, {
      dispatchEvent(b, x, S) {
        n(b, zt(S, { $treeSelect: s }, x));
      }
    }, {});
    const D = () => {
      const b = o.default;
      return r("div", {
        ref: a,
        class: ["vxe-tree-select"]
      }, b ? b({}) : []);
    };
    return s.renderVN = D, s;
  },
  render() {
    return this.renderVN();
  }
}), bd = Object.assign({}, Pl, {
  install(e) {
    e.component(Pl.name, Pl);
  }
});
$t.component(Pl.name, Pl);
ue.component(Pl);
const WL = bd, xd = Object.assign({}, Qr, {
  install(e) {
    e.component(Qr.name, Qr);
  }
});
$t.component(Qr.name, Qr);
ue.component(Qr);
ue.saveFile = Qv;
ue.readFile = ku;
const BL = xd, HL = [
  au,
  cu,
  uu,
  du,
  fu,
  pu,
  mu,
  gu,
  vu,
  hu,
  bu,
  xu,
  yu,
  Cu,
  wu,
  Eu,
  Du,
  Mu,
  Vu,
  $u,
  Ru,
  Pu,
  Nu,
  Fu,
  Lu,
  Au,
  _u,
  Wu,
  Bu,
  Hu,
  zu,
  ju,
  qu,
  Gu,
  Uu,
  Ai,
  Ku,
  Xu,
  Zu,
  Ju,
  Qu,
  ed,
  td,
  od,
  rd,
  sd,
  ld,
  id,
  ad,
  cd,
  Pa,
  ud,
  dd,
  fd,
  pd,
  md,
  gd,
  Na,
  vd,
  hd,
  bd,
  xd
];
function zL(e, t) {
  Gl(t), HL.forEach((n) => e.use(n));
}
const ch = "zh-CN";
su(ch, CP);
ru(ch);
Fi("light");
const jL = Yu, qL = Su, GL = nd, UL = Qv, KL = ku, YL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alert: EP,
  Anchor: kP,
  AnchorLink: VP,
  Breadcrumb: $P,
  BreadcrumbItem: RP,
  Button: PP,
  ButtonGroup: NP,
  Calendar: FP,
  Card: LP,
  Carousel: AP,
  Checkbox: _P,
  CheckboxGroup: WP,
  Col: BP,
  Collapse: HP,
  CollapsePane: zP,
  DatePicker: UP,
  Drawer: ZP,
  DrawerController: Su,
  Form: lN,
  FormDesign: RF,
  FormGather: PF,
  FormItem: NF,
  FormView: FF,
  GLOBAL_EVENT_KEYS: Vt,
  Icon: LF,
  Image: AF,
  ImagePreview: _F,
  Input: WF,
  LayoutAside: BF,
  LayoutBody: HF,
  LayoutContainer: zF,
  LayoutFooter: jF,
  LayoutHeader: qF,
  Link: GF,
  List: eL,
  ListDesign: JF,
  ListView: QF,
  Loading: KP,
  Menu: tL,
  Modal: iL,
  ModalController: Yu,
  NumberInput: aL,
  Optgroup: uL,
  Option: dL,
  Pager: pL,
  PasswordInput: mL,
  Print: EL,
  PrintPageBreak: wL,
  Pulldown: SL,
  Radio: DL,
  RadioButton: OL,
  RadioGroup: TL,
  Row: ML,
  Select: fL,
  Switch: IL,
  TabPane: kL,
  Tabs: VL,
  Tag: $L,
  Text: RL,
  Textarea: PL,
  Tip: FL,
  Tips: NL,
  Tooltip: LL,
  Tree: _L,
  TreeSelect: WL,
  Upload: BL,
  VxeAlert: au,
  VxeAnchor: cu,
  VxeAnchorLink: uu,
  VxeBreadcrumb: du,
  VxeBreadcrumbItem: fu,
  VxeButton: pu,
  VxeButtonGroup: mu,
  VxeCalendar: gu,
  VxeCard: vu,
  VxeCarousel: hu,
  VxeCheckbox: bu,
  VxeCheckboxGroup: xu,
  VxeCol: yu,
  VxeCollapse: Cu,
  VxeCollapsePane: wu,
  VxeDatePicker: Eu,
  VxeDrawer: Du,
  VxeForm: Mu,
  VxeFormDesign: Vu,
  VxeFormGather: $u,
  VxeFormItem: Ru,
  VxeFormView: Pu,
  VxeIcon: Nu,
  VxeImage: Fu,
  VxeImagePreview: Lu,
  VxeInput: Au,
  VxeLayoutAside: _u,
  VxeLayoutBody: Wu,
  VxeLayoutContainer: Bu,
  VxeLayoutFooter: Hu,
  VxeLayoutHeader: zu,
  VxeLink: ju,
  VxeList: Uu,
  VxeListDesign: qu,
  VxeListView: Gu,
  VxeLoading: Ai,
  VxeMenu: Ku,
  VxeModal: Xu,
  VxeNumberInput: Zu,
  VxeOptgroup: Ju,
  VxeOption: Qu,
  VxePager: ed,
  VxePasswordInput: td,
  VxePrint: rd,
  VxePrintPageBreak: od,
  VxePulldown: sd,
  VxeRadio: ld,
  VxeRadioButton: id,
  VxeRadioGroup: ad,
  VxeRow: cd,
  VxeSelect: Pa,
  VxeSwitch: ud,
  VxeTabPane: dd,
  VxeTabs: fd,
  VxeTag: pd,
  VxeText: md,
  VxeTextarea: gd,
  VxeTip: Na,
  VxeTooltip: vd,
  VxeTree: hd,
  VxeTreeSelect: bd,
  VxeUI: ue,
  VxeUpload: xd,
  clipboard: mv,
  commands: ou,
  component: wv,
  config: Dv,
  coreVersion: bv,
  createEvent: zt,
  drawer: qL,
  formats: nu,
  getComponent: Cv,
  getConfig: me,
  getI18n: Te,
  getIcon: dt,
  getLanguage: fv,
  getTheme: hv,
  globalEvents: it,
  globalResize: eu,
  globalStore: Tv,
  handleCheckInfo: hi,
  hasLanguage: dv,
  hooks: gv,
  install: zL,
  interceptor: vi,
  log: Mo,
  menus: tu,
  modal: jL,
  permission: Va,
  print: GL,
  readFile: KL,
  renderer: on,
  saveFile: UL,
  setConfig: Gl,
  setI18n: su,
  setIcon: lu,
  setLanguage: ru,
  setTheme: Fi,
  setup: Ov,
  use: xv,
  useFns: vv,
  usePermission: Ni,
  useSize: Ln,
  validators: ka,
  version: iu
}, Symbol.toStringTag, { value: "Module" }));
function Lt(e) {
  return e && e.enabled !== !1;
}
function yd(e) {
  return e == null || e === "";
}
function uh(e) {
  const t = e.name, n = i.lastIndexOf(t, "."), o = t.substring(n + 1, t.length).toLowerCase();
  return { filename: t.substring(0, n), type: o };
}
function dh() {
  return Ri.getNext();
}
function fh() {
  return Ri.getCurrent();
}
function el(e) {
  return e && e.children && e.children.length > 0;
}
function wr(e, t) {
  if (e) {
    const n = ue.getConfig().translate;
    return i.toValueString(n ? n("" + e, t) : e);
  }
  return "";
}
function An(e, t) {
  return "" + (yd(e) ? t ? ue.getConfig().emptyCell : "" : e);
}
function gr(e) {
  return e === "" || i.eqNull(e);
}
const ph = "4.7.46";
ue.version = ph;
ue.tableVersion = "4.7.46";
ue.setConfig({
  emptyCell: "　",
  table: {
    fit: !0,
    showHeader: !0,
    animat: !0,
    delayHover: 250,
    autoResize: !0,
    minHeight: 144,
    // keepSource: false,
    // showOverflow: null,
    // showHeaderOverflow: null,
    // showFooterOverflow: null,
    // resizeInterval: 500,
    // size: null,
    // zIndex: null,
    // stripe: false,
    // border: false,
    // round: false,
    // emptyText: '暂无数据',
    // emptyRender: {
    //   name: ''
    // },
    // rowConfig: {
    //   keyField: '_X_ROW_KEY' // 行数据的唯一主键字段名
    // },
    resizeConfig: {
      refreshDelay: 250
    },
    radioConfig: {
      // trigger: 'default'
      strict: !0
    },
    checkboxConfig: {
      // trigger: 'default',
      strict: !0
    },
    tooltipConfig: {
      enterable: !0
    },
    validConfig: {
      showMessage: !0,
      autoClear: !0,
      autoPos: !0,
      message: "inline",
      msgMode: "single"
    },
    columnConfig: {
      maxFixedSize: 4
    },
    // menuConfig: {
    //   visibleMethod () {}
    // },
    customConfig: {
      allowVisible: !0,
      allowResizable: !0,
      allowFixed: !0,
      allowSort: !0,
      showFooter: !0,
      placement: "top-right",
      //  storage: false,
      //  checkMethod () {},
      modalOptions: {
        showMaximize: !0,
        mask: !0,
        lockView: !0,
        resize: !0,
        escClosable: !0
      }
    },
    sortConfig: {
      // remote: false,
      // trigger: 'default',
      // orders: ['asc', 'desc', null],
      // sortMethod: null,
      showIcon: !0,
      iconLayout: "vertical"
    },
    filterConfig: {
      // remote: false,
      // filterMethod: null,
      showIcon: !0
    },
    treeConfig: {
      rowField: "id",
      parentField: "parentId",
      childrenField: "children",
      hasChildField: "hasChild",
      mapChildrenField: "_X_ROW_CHILD",
      indent: 20,
      showIcon: !0
    },
    expandConfig: {
      // trigger: 'default',
      showIcon: !0
    },
    editConfig: {
      // mode: 'cell',
      showIcon: !0,
      showAsterisk: !0
    },
    importConfig: {
      _typeMaps: {
        csv: 1,
        html: 1,
        xml: 1,
        txt: 1
      }
    },
    exportConfig: {
      _typeMaps: {
        csv: 1,
        html: 1,
        xml: 1,
        txt: 1
      }
    },
    printConfig: {},
    mouseConfig: {
      extension: !0
    },
    keyboardConfig: {
      isEsc: !0
    },
    areaConfig: {
      autoClear: !0,
      selectCellByHeader: !0
    },
    clipConfig: {
      isCopy: !0,
      isCut: !0,
      isPaste: !0
    },
    fnrConfig: {
      isFind: !0,
      isReplace: !0
    },
    scrollX: {
      // enabled: false,
      gt: 60
      // oSize: 0
    },
    scrollY: {
      // enabled: false,
      gt: 100
      // oSize: 0
    }
  },
  // export: {
  //   types: {}
  // },
  grid: {
    // size: null,
    // zoomConfig: {
    //   escRestore: true
    // },
    formConfig: {
      enabled: !0
    },
    pagerConfig: {
      enabled: !0
      // perfect: false
    },
    toolbarConfig: {
      enabled: !0
      // perfect: false
    },
    proxyConfig: {
      enabled: !0,
      autoLoad: !0,
      message: !0,
      props: {
        list: null,
        result: "result",
        total: "page.total",
        message: "message"
      }
      // beforeItem: null,
      // beforeColumn: null,
      // beforeQuery: null,
      // afterQuery: null,
      // beforeDelete: null,
      // afterDelete: null,
      // beforeSave: null,
      // afterSave: null
    }
  },
  toolbar: {
    // size: null,
    // import: {
    //   mode: 'covering'
    // },
    // export: {
    //   types: ['csv', 'html', 'xml', 'txt']
    // },
    // buttons: []
  }
});
const ln = "vxe-table-icon-";
ue.setIcon({
  // table
  TABLE_SORT_ASC: ln + "caret-up",
  TABLE_SORT_DESC: ln + "caret-down",
  TABLE_FILTER_NONE: ln + "funnel",
  TABLE_FILTER_MATCH: ln + "funnel",
  TABLE_EDIT: ln + "edit",
  TABLE_TITLE_PREFIX: ln + "question-circle-fill",
  TABLE_TITLE_SUFFIX: ln + "question-circle-fill",
  TABLE_TREE_LOADED: ln + "spinner roll",
  TABLE_TREE_OPEN: ln + "caret-right rotate90",
  TABLE_TREE_CLOSE: ln + "caret-right",
  TABLE_EXPAND_LOADED: ln + "spinner roll",
  TABLE_EXPAND_OPEN: ln + "arrow-right rotate90",
  TABLE_EXPAND_CLOSE: ln + "arrow-right",
  TABLE_CHECKBOX_CHECKED: ln + "checkbox-checked-fill",
  TABLE_CHECKBOX_UNCHECKED: ln + "checkbox-unchecked",
  TABLE_CHECKBOX_INDETERMINATE: ln + "checkbox-indeterminate-fill",
  TABLE_RADIO_CHECKED: ln + "radio-checked-fill",
  TABLE_RADIO_UNCHECKED: ln + "radio-unchecked",
  TABLE_CUSTOM_SORT: ln + "drag-handle",
  // toolbar
  TOOLBAR_TOOLS_REFRESH: ln + "repeat",
  TOOLBAR_TOOLS_REFRESH_LOADING: ln + "repeat roll",
  TOOLBAR_TOOLS_IMPORT: ln + "upload",
  TOOLBAR_TOOLS_EXPORT: ln + "download",
  TOOLBAR_TOOLS_PRINT: ln + "print",
  TOOLBAR_TOOLS_FULLSCREEN: ln + "fullscreen",
  TOOLBAR_TOOLS_MINIMIZE: ln + "minimize",
  TOOLBAR_TOOLS_CUSTOM: ln + "custom-column",
  TOOLBAR_TOOLS_FIXED_LEFT: ln + "fixed-left",
  TOOLBAR_TOOLS_FIXED_LEFT_ACTIVE: ln + "fixed-left-fill",
  TOOLBAR_TOOLS_FIXED_RIGHT: ln + "fixed-right",
  TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVE: ln + "fixed-right-fill"
});
const XL = ue.setTheme, ZL = ue.getTheme, JL = ue.setConfig, QL = ue.getConfig, e1 = ue.setIcon, t1 = ue.getIcon, n1 = ue.setLanguage, o1 = ue.setI18n, r1 = ue.getI18n, s1 = ue.globalEvents, l1 = ue.globalResize, i1 = ue.renderer, a1 = ue.validators, c1 = ue.menus, u1 = ue.formats, d1 = ue.commands, f1 = ue.interceptor, p1 = ue.clipboard, m1 = ue.log, g1 = ue.hooks, v1 = ue.use, h1 = (e) => ue.setConfig(e), Cd = (e) => ue.setConfig(e), b1 = (e, t) => ue.getI18n(e, t), x1 = (e, t) => wr(e, t), wd = ue;
wd.setup = Cd;
wd.config = Cd;
const y1 = (e) => ue.saveFile(e), C1 = (e) => ue.readFile(e), w1 = (e) => ue.print(e), E1 = {
  /**
   * 已废弃，兼容老版本
   * @deprecated
   */
  get(e) {
    return ue.modal.get(e);
  },
  /**
   * 已废弃，兼容老版本
   * @deprecated
   */
  close(e) {
    return ue.modal.close(e);
  },
  /**
   * 已废弃，兼容老版本
   * @deprecated
   */
  open(e) {
    return ue.modal.open(e);
  },
  /**
   * 已废弃，兼容老版本
   * @deprecated
   */
  alert(e, t, n) {
    return ue.modal.alert(e, t, n);
  },
  /**
   * 已废弃，兼容老版本
   * @deprecated
   */
  confirm(e, t, n) {
    return ue.modal.confirm(e, t, n);
  },
  /**
   * 已废弃，兼容老版本
   * @deprecated
   */
  message(e, t) {
    return ue.modal.message(e, t);
  },
  /**
   * 已废弃，兼容老版本
   * @deprecated
   */
  notification(e, t, n) {
    return ue.modal.notification(e, t, n);
  }
}, { log: mh } = ue, gh = "table v4.7.46", Nt = mh.create("warn", gh), Et = mh.create("error", gh), { getI18n: S1, formats: $p } = ue;
class Nc {
  /* eslint-disable @typescript-eslint/no-use-before-define */
  constructor(t, n, { renderHeader: o, renderCell: l, renderFooter: a, renderData: c } = {}) {
    const p = t.xegrid, d = n.formatter, s = i.isBoolean(n.visible) ? n.visible : !0;
    if (process.env.NODE_ENV === "development") {
      const f = ["seq", "checkbox", "radio", "expand", "html"];
      if (n.type && f.indexOf(n.type) === -1 && Nt("vxe.error.errProp", [`type=${n.type}`, f.join(", ")]), (i.isBoolean(n.cellRender) || n.cellRender && !i.isObject(n.cellRender)) && Nt("vxe.error.errProp", [`column.cell-render=${n.cellRender}`, "column.cell-render={}"]), (i.isBoolean(n.editRender) || n.editRender && !i.isObject(n.editRender)) && Nt("vxe.error.errProp", [`column.edit-render=${n.editRender}`, "column.edit-render={}"]), n.cellRender && n.editRender && Nt("vxe.error.errConflicts", ["column.cell-render", "column.edit-render"]), n.type === "expand") {
        const { props: g } = t, { treeConfig: D } = g, { computeTreeOpts: b } = t.getComputeMaps(), x = b.value;
        D && (x.showLine || x.line) && Et("vxe.error.errConflicts", ["tree-config.showLine", "column.type=expand"]);
      }
      if (d) {
        if (i.isString(d)) {
          const g = $p.get(d) || i[d];
          (!g || !i.isFunction(g.tableCellFormatMethod || g.cellFormatMethod)) && Et("vxe.error.notFormats", [d]);
        } else if (i.isArray(d)) {
          const g = $p.get(d[0]) || i[d[0]];
          (!g || !i.isFunction(g.tableCellFormatMethod || g.cellFormatMethod)) && Et("vxe.error.notFormats", [d[0]]);
        }
      }
    }
    if (Object.assign(this, {
      // 基本属性
      type: n.type,
      property: n.field,
      field: n.field,
      title: n.title,
      width: n.width,
      minWidth: n.minWidth,
      maxWidth: n.maxWidth,
      resizable: n.resizable,
      fixed: n.fixed,
      align: n.align,
      headerAlign: n.headerAlign,
      footerAlign: n.footerAlign,
      showOverflow: n.showOverflow,
      showHeaderOverflow: n.showHeaderOverflow,
      showFooterOverflow: n.showFooterOverflow,
      className: n.className,
      headerClassName: n.headerClassName,
      footerClassName: n.footerClassName,
      formatter: d,
      sortable: n.sortable,
      sortBy: n.sortBy,
      sortType: n.sortType,
      filters: xh(n.filters),
      filterMultiple: i.isBoolean(n.filterMultiple) ? n.filterMultiple : !0,
      filterMethod: n.filterMethod,
      filterResetMethod: n.filterResetMethod,
      filterRecoverMethod: n.filterRecoverMethod,
      filterRender: n.filterRender,
      treeNode: n.treeNode,
      cellType: n.cellType,
      cellRender: n.cellRender,
      editRender: n.editRender,
      contentRender: n.contentRender,
      headerExportMethod: n.headerExportMethod,
      exportMethod: n.exportMethod,
      footerExportMethod: n.footerExportMethod,
      titleHelp: n.titleHelp,
      titlePrefix: n.titlePrefix,
      titleSuffix: n.titleSuffix,
      // 自定义参数
      params: n.params,
      // 渲染属性
      id: n.colId || i.uniqueId("col_"),
      parentId: null,
      visible: s,
      // 内部属性（一旦被使用，将导致不可升级版本）
      halfVisible: !1,
      defaultVisible: s,
      defaultFixed: n.fixed,
      checked: !1,
      halfChecked: !1,
      disabled: !1,
      // 分组层级
      level: 1,
      // 跨行
      rowSpan: 1,
      // 跨列
      colSpan: 1,
      // 数据排序
      order: null,
      sortTime: 0,
      // 列排序
      sortNumber: 0,
      renderSortNumber: 0,
      renderFixed: "",
      renderVisible: !1,
      renderWidth: 0,
      renderHeight: 0,
      renderResizeWidth: 0,
      resizeWidth: 0,
      renderLeft: 0,
      renderArgs: [],
      model: {},
      renderHeader: o || n.renderHeader,
      renderCell: l || n.renderCell,
      renderFooter: a || n.renderFooter,
      renderData: c,
      // 单元格插槽，只对 grid 有效
      slots: n.slots
    }), p) {
      const { computeProxyOpts: f } = p.getComputeMaps(), g = f.value;
      g.beforeColumn && g.beforeColumn({ $grid: p, column: this });
    }
  }
  getTitle() {
    return wr(this.title || (this.type === "seq" ? S1("vxe.table.seqTitle") : ""));
  }
  getKey() {
    return this.field || (this.type ? `type=${this.type}` : null);
  }
  update(t, n) {
    t !== "filters" && (t === "field" && (this.property = n), this[t] = n);
  }
}
const pc = {}, zr = i.browse();
function Wr(e, t) {
  return e ? i.isFunction(e) ? e(t) : e : "";
}
function vh(e) {
  return pc[e] || (pc[e] = new RegExp(`(?:^|\\s)${e}(?!\\S)`, "g")), pc[e];
}
function hh(e, t, n) {
  if (e) {
    const o = e.parentNode;
    if (n.top += e.offsetTop, n.left += e.offsetLeft, o && o !== document.documentElement && o !== document.body && (n.top -= o.scrollTop, n.left -= o.scrollLeft), !(t && (e === t || e.offsetParent === t)) && e.offsetParent)
      return hh(e.offsetParent, t, n);
  }
  return n;
}
function Fc(e) {
  return e && /^\d+(px)?$/.test(e);
}
function mi(e) {
  return e && /^\d+%$/.test(e);
}
function Is(e, t) {
  return e && e.className && e.className.match && e.className.match(vh(t));
}
function Oo(e, t) {
  e && Is(e, t) && (e.className = e.className.replace(vh(t), ""));
}
function vr(e, t) {
  e && !Is(e, t) && (Oo(e, t), e.className = `${e.className} ${t}`);
}
function Fa() {
  const e = document.documentElement, t = document.body;
  return {
    scrollTop: e.scrollTop || t.scrollTop,
    scrollLeft: e.scrollLeft || t.scrollLeft,
    visibleHeight: e.clientHeight || t.clientHeight,
    visibleWidth: e.clientWidth || t.clientWidth
  };
}
function di(e) {
  return e ? e.offsetHeight : 0;
}
function Lc(e) {
  if (e) {
    const t = getComputedStyle(e), n = i.toNumber(t.paddingTop), o = i.toNumber(t.paddingBottom);
    return n + o;
  }
  return 0;
}
function ta(e, t) {
  e && (e.scrollTop = t);
}
function Rp(e, t) {
  e && (e.scrollLeft = t);
}
function Ed(e, t) {
  const n = t.type === "html" ? e.innerText : e.textContent;
  e.getAttribute("title") !== n && e.setAttribute("title", n);
}
function nn(e, t, n, o) {
  let l, a = e.target.shadowRoot && e.composed && e.composedPath()[0] || e.target;
  for (; a && a.nodeType && a !== document; ) {
    if (n && Is(a, n) && (!o || o(a)))
      l = a;
    else if (a === t)
      return { flag: n ? !!l : !0, container: t, targetElem: l };
    a = a.parentNode;
  }
  return { flag: !1 };
}
function D1(e, t) {
  return hh(e, t, { left: 0, top: 0 });
}
function ca(e) {
  const t = e.getBoundingClientRect(), n = t.top, o = t.left, { scrollTop: l, scrollLeft: a, visibleHeight: c, visibleWidth: p } = Fa();
  return { boundingTop: n, top: l + n, boundingLeft: o, left: a + o, visibleHeight: c, visibleWidth: p };
}
const Pp = "scrollIntoViewIfNeeded", Np = "scrollIntoView";
function O1(e) {
  e && (e[Pp] ? e[Pp]() : e[Np] && e[Np]());
}
function T1(e, t) {
  e && e.dispatchEvent(new Event(t));
}
function mc(e) {
  return e && e.nodeType === 1;
}
const bh = (e, t) => {
  const n = [];
  return e.forEach((o) => {
    o.parentId = t ? t.id : null, o.visible && (o.children && o.children.length && o.children.some((l) => l.visible) ? (n.push(o), n.push(...bh(o.children, o))) : n.push(o));
  }), n;
}, M1 = (e) => {
  let t = 1;
  const n = (a, c) => {
    if (c && (a.level = c.level + 1, t < a.level && (t = a.level)), a.children && a.children.length && a.children.some((p) => p.visible)) {
      let p = 0;
      a.children.forEach((d) => {
        d.visible && (n(d, a), p += d.colSpan);
      }), a.colSpan = p;
    } else
      a.colSpan = 1;
  };
  e.forEach((a) => {
    a.level = 1, n(a);
  });
  const o = [];
  for (let a = 0; a < t; a++)
    o.push([]);
  return bh(e).forEach((a) => {
    a.children && a.children.length && a.children.some((c) => c.visible) ? a.rowSpan = 1 : a.rowSpan = t - a.level + 1, o[a.level - 1].push(a);
  }), o;
};
function gc(e, t, n) {
  const { internalData: o } = e;
  return e.clearScroll().then(() => {
    if (t || n)
      return o.lastScrollLeft = 0, o.lastScrollTop = 0, e.scrollTo(t, n);
  });
}
function Fp(e) {
  e && e._onscroll && (e.onscroll = null);
}
function ha(e) {
  e && e._onscroll && (e.onscroll = e._onscroll);
}
function vc() {
  return i.uniqueId("row_");
}
function ps(e) {
  const { props: t } = e, { computeRowOpts: n } = e.getComputeMaps(), { rowId: o } = t, l = n.value;
  return o || l.keyField || "_X_ROW_KEY";
}
function st(e, t) {
  const n = i.get(t, ps(e));
  return i.eqNull(n) ? "" : encodeURIComponent(n);
}
const Xn = (e, t) => t ? i.isString(t) ? e.getColumnByField(t) : t : null;
function hc(e) {
  if (e) {
    const t = getComputedStyle(e), n = i.toNumber(t.paddingLeft), o = i.toNumber(t.paddingRight);
    return n + o;
  }
  return 0;
}
function qs(e) {
  if (e) {
    const t = getComputedStyle(e), n = i.toNumber(t.marginLeft), o = i.toNumber(t.marginRight);
    return e.offsetWidth + n + o;
  }
  return 0;
}
function Nr(e, t) {
  return e.querySelector(".vxe-cell" + t);
}
function xh(e) {
  return e && i.isArray(e) ? e.map(({ label: t, value: n, data: o, resetValue: l, checked: a }) => ({ label: t, value: n, data: o, resetValue: l, checked: !!a, _checked: !!a })) : e;
}
function I1(e) {
  return e.map((t, n) => n % 2 === 0 ? Number(t) + 1 : ".").join("");
}
function Io(e, t) {
  return i.get(e, t.field);
}
function tr(e, t, n) {
  return i.set(e, t.field, n);
}
function k1(e) {
  const { $table: t, column: n, cell: o } = e, { props: l } = t, { computeResizableOpts: a } = t.getComputeMaps(), c = a.value, { minWidth: p } = c;
  if (p) {
    const E = i.isFunction(p) ? p(e) : p;
    if (E !== "auto")
      return Math.max(1, i.toNumber(E));
  }
  const { showHeaderOverflow: d } = l, { showHeaderOverflow: s, minWidth: f } = n, g = i.isUndefined(s) || i.isNull(s) ? d : s, S = g === "title" || (g === !0 || g === "tooltip") || g === "ellipsis", y = i.floor((i.toNumber(getComputedStyle(o).fontSize) || 14) * 1.6), h = hc(o) + hc(Nr(o, ""));
  let O = y + h;
  if (S) {
    const E = hc(Nr(o, "--title>.vxe-cell--checkbox")), T = qs(Nr(o, ">.vxe-cell--required-icon")), W = qs(Nr(o, ">.vxe-cell--edit-icon")), $ = qs(Nr(o, ">.vxe-cell-title-prefix-icon")), I = qs(Nr(o, ">.vxe-cell-title-suffix-icon")), z = qs(Nr(o, ">.vxe-cell--sort")), te = qs(Nr(o, ">.vxe-cell--filter"));
    O += E + T + W + $ + I + te + z;
  }
  if (f) {
    const { refTableBody: E } = t.getRefMaps(), T = E.value, W = T ? T.$el : null;
    if (W) {
      if (mi(f)) {
        const I = (W.clientWidth - 1) / 100;
        return Math.max(O, Math.floor(i.toInteger(f) * I));
      } else if (Fc(f))
        return Math.max(O, i.toInteger(f));
    }
  }
  return O;
}
function ua(e) {
  return e && (e.constructor === Nc || e instanceof Nc);
}
function V1(e, t, n) {
  return ua(t) ? t : Ot(new Nc(e, t, n));
}
function yh(e, t, n) {
  Object.keys(t).forEach((o) => {
    lt(() => t[o], (l) => {
      n.update(o, l), e && (o === "filters" ? (e.setFilter(n, l), e.handleUpdateDataQueue()) : ["visible", "fixed", "width", "minWidth", "maxWidth"].includes(o) && e.handleRefreshColumnQueue());
    });
  });
}
function Ch(e, t, n, o) {
  const { reactData: l } = e, { staticColumns: a } = l, c = t.parentNode, p = o ? o.column : null, d = p ? p.children : a;
  c && d && (d.splice(i.arrayIndexOf(c.children, t), 0, n), l.staticColumns = a.slice(0));
}
function wh(e, t) {
  const { reactData: n } = e, { staticColumns: o } = n, l = i.findTree(o, (a) => a.id === t.id, { children: "children" });
  l && l.items.splice(l.index, 1), n.staticColumns = o.slice(0);
}
function Lp(e, t) {
  const { internalData: n } = e, { fullColumnIdData: o } = n;
  if (!t)
    return null;
  let l = t.parentId;
  for (; o[l]; ) {
    const a = o[l].column;
    if (l = a.parentId, !l)
      return a;
  }
  return t;
}
function Eh(e, t, n) {
  for (let o = 0; o < e.length; o++) {
    const { row: l, col: a, rowspan: c, colspan: p } = e[o];
    if (a > -1 && l > -1 && c && p) {
      if (l === t && a === n)
        return { rowspan: c, colspan: p };
      if (t >= l && t < l + c && n >= a && n < a + p)
        return { rowspan: 0, colspan: 0 };
    }
  }
}
function $1(e) {
  const { props: t, internalData: n } = e;
  return n.initStatus = !1, e.clearSort(), e.clearCurrentRow(), e.clearCurrentColumn(), e.clearRadioRow(), e.clearRadioReserve(), e.clearCheckboxRow(), e.clearCheckboxReserve(), e.clearRowExpand(), e.clearTreeExpand(), e.clearTreeExpandReserve(), e.clearPendingRow(), e.clearFilter && e.clearFilter(), e.clearSelected && (t.keyboardConfig || t.mouseConfig) && e.clearSelected(), e.clearCellAreas && t.mouseConfig && (e.clearCellAreas(), e.clearCopyCellArea()), e.clearScroll();
}
function R1(e) {
  return e.clearFilter && e.clearFilter(), $1(e);
}
function Ap(e, t) {
  const { reactData: n, internalData: o } = e, { refTableBody: l } = e.getRefMaps(), { scrollYLoad: a } = n, { afterFullData: c, scrollYStore: p } = o, d = l.value, s = d ? d.$el : null;
  if (s) {
    const f = s.querySelector(`[rowid="${st(e, t)}"]`);
    if (f) {
      const g = s.clientHeight, D = s.scrollTop, b = f.offsetParent, x = f.offsetTop + (b ? b.offsetTop : 0), S = f.clientHeight;
      if (x < D || x > D + g)
        return e.scrollTo(null, x);
      if (x + S >= g + D)
        return e.scrollTo(null, D + S);
    } else if (a)
      return e.scrollTo(null, (c.indexOf(t) - 1) * p.rowHeight);
  }
  return Promise.resolve();
}
function P1(e, t) {
  const { reactData: n, internalData: o } = e, { refTableBody: l } = e.getRefMaps(), { scrollXLoad: a } = n, { visibleColumn: c } = o, p = l.value, d = p ? p.$el : null;
  if (d) {
    const s = d.querySelector(`.${t.id}`);
    if (s) {
      const f = d.clientWidth, g = d.scrollLeft, D = s.offsetParent, b = s.offsetLeft + (D ? D.offsetLeft : 0), x = s.clientWidth;
      if (b < g || b > g + f)
        return e.scrollTo(b);
      if (b + x >= f + g)
        return e.scrollTo(g + x);
    } else if (a) {
      let f = 0;
      for (let g = 0; g < c.length && c[g] !== t; g++)
        f += c[g].renderWidth;
      return e.scrollTo(f);
    }
  }
  return Promise.resolve();
}
function Nl(e) {
  return "on" + e.substring(0, 1).toLocaleUpperCase() + e.substring(1);
}
function uo(e) {
  return i.isArray(e) ? e : [e];
}
const { getI18n: na, getIcon: kn, renderer: gi } = ue;
function N1(e) {
  const { $table: t, column: n } = e, o = n.titlePrefix || n.titleHelp;
  return o ? [
    r("i", {
      class: ["vxe-cell-title-prefix-icon", o.icon || kn().TABLE_TITLE_PREFIX],
      onMouseenter(l) {
        t.triggerHeaderTitleEvent(l, o, e);
      },
      onMouseleave(l) {
        t.handleTargetLeaveEvent(l);
      }
    })
  ] : [];
}
function F1(e) {
  const { $table: t, column: n } = e, o = n.titleSuffix;
  return o ? [
    r("i", {
      class: ["vxe-cell-title-suffix-icon", o.icon || kn().TABLE_TITLE_SUFFIX],
      onMouseenter(l) {
        t.triggerHeaderTitleEvent(l, o, e);
      },
      onMouseleave(l) {
        t.handleTargetLeaveEvent(l);
      }
    })
  ] : [];
}
function Fr(e, t) {
  const { $table: n, column: o } = e, { props: l, reactData: a } = n, { computeTooltipOpts: c } = n.getComputeMaps(), { showHeaderOverflow: p } = l, { type: d, showHeaderOverflow: s } = o, g = c.value.showAll, D = i.isUndefined(s) || i.isNull(s) ? p : s, b = D === "title", x = D === !0 || D === "tooltip", S = {};
  return (b || x || g) && (S.onMouseenter = (y) => {
    a._isResize || (b ? Ed(y.currentTarget, o) : (x || g) && n.triggerHeaderTooltipEvent(y, e));
  }), (x || g) && (S.onMouseleave = (y) => {
    a._isResize || (x || g) && n.handleTargetLeaveEvent(y);
  }), [
    d === "html" && i.isString(t) ? r("span", Object.assign({ class: "vxe-cell--title", innerHTML: t }, S)) : r("span", Object.assign({ class: "vxe-cell--title" }, S), uo(t))
  ];
}
function L1(e) {
  const { $table: t, column: n, _columnIndex: o, items: l, row: a } = e, { slots: c, editRender: p, cellRender: d } = n, s = p || d, f = c ? c.footer : null;
  if (f)
    return t.callSlot(f, e);
  if (s) {
    const g = gi.get(s.name);
    if (g) {
      const D = g.renderTableFooter || g.renderFooter;
      if (D)
        return uo(D(s, e));
    }
  }
  return i.isArray(l) ? [An(l[o], 1)] : [An(i.get(a, n.field), 1)];
}
function _p(e) {
  const { $table: t, row: n, column: o } = e;
  return An(t.getCellLabel(n, o), 1);
}
const Rt = {
  createColumn(e, t) {
    const { type: n, sortable: o, filters: l, editRender: a, treeNode: c } = t, { props: p } = e, { editConfig: d } = p, { computeEditOpts: s, computeCheckboxOpts: f } = e.getComputeMaps(), g = f.value, D = s.value, b = {
      renderHeader: Rt.renderDefaultHeader,
      renderCell: c ? Rt.renderTreeCell : Rt.renderDefaultCell,
      renderFooter: Rt.renderDefaultFooter
    };
    switch (n) {
      case "seq":
        b.renderHeader = Rt.renderSeqHeader, b.renderCell = c ? Rt.renderTreeIndexCell : Rt.renderSeqCell;
        break;
      case "radio":
        b.renderHeader = Rt.renderRadioHeader, b.renderCell = c ? Rt.renderTreeRadioCell : Rt.renderRadioCell;
        break;
      case "checkbox":
        b.renderHeader = Rt.renderCheckboxHeader, b.renderCell = g.checkField ? c ? Rt.renderTreeSelectionCellByProp : Rt.renderCheckboxCellByProp : c ? Rt.renderTreeSelectionCell : Rt.renderCheckboxCell;
        break;
      case "expand":
        b.renderCell = Rt.renderExpandCell, b.renderData = Rt.renderExpandData;
        break;
      case "html":
        b.renderCell = c ? Rt.renderTreeHTMLCell : Rt.renderHTMLCell, l && o ? b.renderHeader = Rt.renderSortAndFilterHeader : o ? b.renderHeader = Rt.renderSortHeader : l && (b.renderHeader = Rt.renderFilterHeader);
        break;
      default:
        d && a ? (b.renderHeader = Rt.renderEditHeader, b.renderCell = D.mode === "cell" ? c ? Rt.renderTreeCellEdit : Rt.renderCellEdit : c ? Rt.renderTreeRowEdit : Rt.renderRowEdit) : l && o ? b.renderHeader = Rt.renderSortAndFilterHeader : o ? b.renderHeader = Rt.renderSortHeader : l && (b.renderHeader = Rt.renderFilterHeader);
    }
    return V1(e, t, b);
  },
  /**
   * 单元格
   */
  renderHeaderTitle(e) {
    const { $table: t, column: n } = e, { slots: o, editRender: l, cellRender: a } = n, c = l || a, p = o ? o.header : null;
    if (p)
      return Fr(e, t.callSlot(p, e));
    if (c) {
      const d = gi.get(c.name);
      if (d) {
        const s = d.renderTableHeader || d.renderHeader;
        if (s)
          return Fr(e, uo(s(c, e)));
      }
    }
    return Fr(e, An(n.getTitle(), 1));
  },
  renderDefaultHeader(e) {
    return N1(e).concat(Rt.renderHeaderTitle(e)).concat(F1(e));
  },
  renderDefaultCell(e) {
    const { $table: t, row: n, column: o } = e, { slots: l, editRender: a, cellRender: c } = o, p = a || c, d = l ? l.default : null;
    if (d)
      return t.callSlot(d, e);
    if (p) {
      const g = gi.get(p.name);
      if (g) {
        const D = g.renderTableCell || g.renderCell, b = g.renderTableDefault || g.renderDefault, x = a ? D : b;
        if (x)
          return uo(x(p, Object.assign({ $type: a ? "edit" : "cell" }, e)));
      }
    }
    const s = t.getCellLabel(n, o), f = a ? a.placeholder : "";
    return [
      r("span", {
        class: "vxe-cell--label"
      }, a && gr(s) ? [
        // 如果设置占位符
        r("span", {
          class: "vxe-cell--placeholder"
        }, An(wr(f), 1))
      ] : An(s, 1))
    ];
  },
  renderTreeCell(e) {
    return Rt.renderTreeIcon(e, Rt.renderDefaultCell(e));
  },
  renderDefaultFooter(e) {
    return [
      r("span", {
        class: "vxe-cell--item"
      }, L1(e))
    ];
  },
  /**
   * 树节点
   */
  renderTreeIcon(e, t) {
    const { $table: n, isHidden: o } = e, { reactData: l } = n, { computeTreeOpts: a } = n.getComputeMaps(), { treeExpandedMaps: c, treeExpandLazyLoadedMaps: p } = l, d = a.value, { row: s, column: f, level: g } = e, { slots: D } = f, { indent: b, lazy: x, trigger: S, iconLoaded: y, showIcon: h, iconOpen: O, iconClose: E } = d, T = d.children || d.childrenField, W = d.hasChild || d.hasChildField, $ = s[T], I = D ? D.icon : null;
    let z = !1, te = !1, Ce = !1;
    const N = {};
    if (I)
      return n.callSlot(I, e);
    if (!o) {
      const F = st(n, s);
      te = !!c[F], x && (Ce = !!p[F], z = s[W]);
    }
    return (!S || S === "default") && (N.onClick = (F) => {
      n.triggerTreeExpandEvent(F, e);
    }), [
      r("div", {
        class: ["vxe-cell--tree-node", {
          "is--active": te
        }],
        style: {
          paddingLeft: `${g * b}px`
        }
      }, [
        h && ($ && $.length || z) ? [
          r("div", Object.assign({ class: "vxe-tree--btn-wrapper" }, N), [
            r("i", {
              class: ["vxe-tree--node-btn", Ce ? y || kn().TABLE_TREE_LOADED : te ? O || kn().TABLE_TREE_OPEN : E || kn().TABLE_TREE_CLOSE]
            })
          ])
        ] : null,
        r("div", {
          class: "vxe-tree-cell"
        }, t)
      ])
    ];
  },
  /**
   * 索引
   */
  renderSeqHeader(e) {
    const { $table: t, column: n } = e, { slots: o } = n, l = o ? o.header : null;
    return Fr(e, l ? t.callSlot(l, e) : An(n.getTitle(), 1));
  },
  renderSeqCell(e) {
    const { $table: t, column: n } = e, { props: o } = t, { treeConfig: l } = o, { computeSeqOpts: a } = t.getComputeMaps(), c = a.value, { slots: p } = n, d = p ? p.default : null;
    if (d)
      return t.callSlot(d, e);
    const { seq: s } = e, f = c.seqMethod;
    return [An(f ? f(e) : l ? s : (c.startIndex || 0) + s, 1)];
  },
  renderTreeIndexCell(e) {
    return Rt.renderTreeIcon(e, Rt.renderSeqCell(e));
  },
  /**
   * 单选
   */
  renderRadioHeader(e) {
    const { $table: t, column: n } = e, { slots: o } = n, l = o ? o.header : null, a = o ? o.title : null;
    return Fr(e, l ? t.callSlot(l, e) : [
      r("span", {
        class: "vxe-radio--label"
      }, a ? t.callSlot(a, e) : An(n.getTitle(), 1))
    ]);
  },
  renderRadioCell(e) {
    const { $table: t, column: n, isHidden: o } = e, { reactData: l } = t, { computeRadioOpts: a } = t.getComputeMaps(), { selectRadioRow: c } = l, p = a.value, { slots: d } = n, { labelField: s, checkMethod: f, visibleMethod: g } = p, { row: D } = e, b = d ? d.default : null, x = d ? d.radio : null, S = t.eqRow(D, c), y = !g || g({ row: D });
    let h = !!f, O;
    o || (O = {
      onClick(W) {
        !h && y && t.triggerRadioRowEvent(W, e);
      }
    }, f && (h = !f({ row: D })));
    const E = Object.assign(Object.assign({}, e), { checked: S, disabled: h, visible: y });
    if (x)
      return t.callSlot(x, E);
    const T = [];
    return y && T.push(r("span", {
      class: ["vxe-radio--icon", S ? kn().TABLE_RADIO_CHECKED : kn().TABLE_RADIO_UNCHECKED]
    })), (b || s) && T.push(r("span", {
      class: "vxe-radio--label"
    }, b ? t.callSlot(b, E) : i.get(D, s))), [
      r("span", Object.assign({ class: ["vxe-cell--radio", {
        "is--checked": S,
        "is--disabled": h
      }] }, O), T)
    ];
  },
  renderTreeRadioCell(e) {
    return Rt.renderTreeIcon(e, Rt.renderRadioCell(e));
  },
  /**
   * 多选
   */
  renderCheckboxHeader(e) {
    const { $table: t, column: n, isHidden: o } = e, { reactData: l } = t, { computeIsAllCheckboxDisabled: a, computeCheckboxOpts: c } = t.getComputeMaps(), { isAllSelected: p, isIndeterminate: d } = l, s = a.value, { slots: f } = n, g = f ? f.header : null, D = f ? f.title : null, b = c.value, x = n.getTitle();
    let S;
    o || (S = {
      onClick(h) {
        s || t.triggerCheckAllEvent(h, !p);
      }
    });
    const y = Object.assign(Object.assign({}, e), { checked: p, disabled: s, indeterminate: d });
    return g ? Fr(y, t.callSlot(g, y)) : (b.checkStrictly ? !b.showHeader : b.showHeader === !1) ? Fr(y, [
      r("span", {
        class: "vxe-checkbox--label"
      }, D ? t.callSlot(D, y) : x)
    ]) : Fr(y, [
      r("span", Object.assign({ class: ["vxe-cell--checkbox", {
        "is--checked": p,
        "is--disabled": s,
        "is--indeterminate": d
      }], title: na("vxe.table.allTitle") }, S), [
        r("span", {
          class: ["vxe-checkbox--icon", d ? kn().TABLE_CHECKBOX_INDETERMINATE : p ? kn().TABLE_CHECKBOX_CHECKED : kn().TABLE_CHECKBOX_UNCHECKED]
        })
      ].concat(D || x ? [
        r("span", {
          class: "vxe-checkbox--label"
        }, D ? t.callSlot(D, y) : x)
      ] : []))
    ]);
  },
  renderCheckboxCell(e) {
    const { $table: t, row: n, column: o, isHidden: l } = e, { props: a, reactData: c } = t, { treeConfig: p } = a, { selectCheckboxMaps: d, treeIndeterminateMaps: s } = c, { computeCheckboxOpts: f } = t.getComputeMaps(), g = f.value, { labelField: D, checkMethod: b, visibleMethod: x } = g, { slots: S } = o, y = S ? S.default : null, h = S ? S.checkbox : null;
    let O = !1, E = !1;
    const T = !x || x({ row: n });
    let W = !!b, $;
    if (!l) {
      const te = st(t, n);
      E = !!d[te], $ = {
        onClick(Ce) {
          !W && T && t.triggerCheckRowEvent(Ce, e, !E);
        }
      }, b && (W = !b({ row: n })), p && (O = !!s[te]);
    }
    const I = Object.assign(Object.assign({}, e), { checked: E, disabled: W, visible: T, indeterminate: O });
    if (h)
      return t.callSlot(h, I);
    const z = [];
    return T && z.push(r("span", {
      class: ["vxe-checkbox--icon", O ? kn().TABLE_CHECKBOX_INDETERMINATE : E ? kn().TABLE_CHECKBOX_CHECKED : kn().TABLE_CHECKBOX_UNCHECKED]
    })), (y || D) && z.push(r("span", {
      class: "vxe-checkbox--label"
    }, y ? t.callSlot(y, I) : i.get(n, D))), [
      r("span", Object.assign({ class: ["vxe-cell--checkbox", {
        "is--checked": E,
        "is--disabled": W,
        "is--indeterminate": O,
        "is--hidden": !T
      }] }, $), z)
    ];
  },
  renderTreeSelectionCell(e) {
    return Rt.renderTreeIcon(e, Rt.renderCheckboxCell(e));
  },
  renderCheckboxCellByProp(e) {
    const { $table: t, row: n, column: o, isHidden: l } = e, { props: a, reactData: c } = t, { treeConfig: p } = a, { treeIndeterminateMaps: d } = c, { computeCheckboxOpts: s } = t.getComputeMaps(), f = s.value, { labelField: g, checkField: D, checkMethod: b, visibleMethod: x } = f, S = f.indeterminateField || f.halfField, { slots: y } = o, h = y ? y.default : null, O = y ? y.checkbox : null;
    let E = !1, T = !1;
    const W = !x || x({ row: n });
    let $ = !!b, I;
    if (!l) {
      const Ce = st(t, n);
      T = i.get(n, D), I = {
        onClick(N) {
          !$ && W && t.triggerCheckRowEvent(N, e, !T);
        }
      }, b && ($ = !b({ row: n })), p && (E = !!d[Ce]);
    }
    const z = Object.assign(Object.assign({}, e), { checked: T, disabled: $, visible: W, indeterminate: E });
    if (O)
      return t.callSlot(O, z);
    const te = [];
    return W && (te.push(r("span", {
      class: ["vxe-checkbox--icon", E ? kn().TABLE_CHECKBOX_INDETERMINATE : T ? kn().TABLE_CHECKBOX_CHECKED : kn().TABLE_CHECKBOX_UNCHECKED]
    })), (h || g) && te.push(r("span", {
      class: "vxe-checkbox--label"
    }, h ? t.callSlot(h, z) : i.get(n, g)))), [
      r("span", Object.assign({ class: ["vxe-cell--checkbox", {
        "is--checked": T,
        "is--disabled": $,
        "is--indeterminate": S && !T ? n[S] : E,
        "is--hidden": !W
      }] }, I), te)
    ];
  },
  renderTreeSelectionCellByProp(e) {
    return Rt.renderTreeIcon(e, Rt.renderCheckboxCellByProp(e));
  },
  /**
   * 展开行
   */
  renderExpandCell(e) {
    const { $table: t, isHidden: n, row: o, column: l } = e, { reactData: a } = t, { rowExpandedMaps: c, rowExpandLazyLoadedMaps: p } = a, { computeExpandOpts: d } = t.getComputeMaps(), s = d.value, { lazy: f, labelField: g, iconLoaded: D, showIcon: b, iconOpen: x, iconClose: S, visibleMethod: y } = s, { slots: h } = l, O = h ? h.default : null, E = h ? h.icon : null;
    let T = !1, W = !1;
    if (E)
      return t.callSlot(E, e);
    if (!n) {
      const $ = st(t, o);
      T = !!c[$], f && (W = !!p[$]);
    }
    return [
      b && (!y || y(e)) ? r("span", {
        class: ["vxe-table--expanded", {
          "is--active": T
        }],
        onClick($) {
          t.triggerRowExpandEvent($, e);
        }
      }, [
        r("i", {
          class: ["vxe-table--expand-btn", W ? D || kn().TABLE_EXPAND_LOADED : T ? x || kn().TABLE_EXPAND_OPEN : S || kn().TABLE_EXPAND_CLOSE]
        })
      ]) : null,
      O || g ? r("span", {
        class: "vxe-table--expand-label"
      }, O ? t.callSlot(O, e) : i.get(o, g)) : null
    ];
  },
  renderExpandData(e) {
    const { $table: t, column: n } = e, { slots: o, contentRender: l } = n, a = o ? o.content : null;
    if (a)
      return t.callSlot(a, e);
    if (l) {
      const c = gi.get(l.name);
      if (c) {
        const p = c.renderTableExpand || c.renderExpand;
        if (p)
          return uo(p(l, e));
      }
    }
    return [];
  },
  /**
   * HTML 标签
   */
  renderHTMLCell(e) {
    const { $table: t, column: n } = e, { slots: o } = n, l = o ? o.default : null;
    return l ? t.callSlot(l, e) : [
      r("span", {
        class: "vxe-cell--html",
        innerHTML: _p(e)
      })
    ];
  },
  renderTreeHTMLCell(e) {
    return Rt.renderTreeIcon(e, Rt.renderHTMLCell(e));
  },
  /**
   * 排序和筛选
   */
  renderSortAndFilterHeader(e) {
    return Rt.renderDefaultHeader(e).concat(Rt.renderSortIcon(e)).concat(Rt.renderFilterIcon(e));
  },
  /**
   * 排序
   */
  renderSortHeader(e) {
    return Rt.renderDefaultHeader(e).concat(Rt.renderSortIcon(e));
  },
  renderSortIcon(e) {
    const { $table: t, column: n } = e, { computeSortOpts: o } = t.getComputeMaps(), l = o.value, { showIcon: a, iconLayout: c, iconAsc: p, iconDesc: d } = l, { order: s } = n;
    return a ? [
      r("span", {
        class: ["vxe-cell--sort", `vxe-cell--sort-${c}-layout`]
      }, [
        r("i", {
          class: ["vxe-sort--asc-btn", p || kn().TABLE_SORT_ASC, {
            "sort--active": s === "asc"
          }],
          title: na("vxe.table.sortAsc"),
          onClick(f) {
            f.stopPropagation(), t.triggerSortEvent(f, n, "asc");
          }
        }),
        r("i", {
          class: ["vxe-sort--desc-btn", d || kn().TABLE_SORT_DESC, {
            "sort--active": s === "desc"
          }],
          title: na("vxe.table.sortDesc"),
          onClick(f) {
            f.stopPropagation(), t.triggerSortEvent(f, n, "desc");
          }
        })
      ])
    ] : [];
  },
  /**
   * 筛选
   */
  renderFilterHeader(e) {
    return Rt.renderDefaultHeader(e).concat(Rt.renderFilterIcon(e));
  },
  renderFilterIcon(e) {
    const { $table: t, column: n, hasFilter: o } = e, { reactData: l } = t, { filterStore: a } = l, { computeFilterOpts: c } = t.getComputeMaps(), p = c.value, { showIcon: d, iconNone: s, iconMatch: f } = p;
    return d ? [
      r("span", {
        class: ["vxe-cell--filter", {
          "is--active": a.visible && a.column === n
        }]
      }, [
        r("i", {
          class: ["vxe-filter--btn", o ? f || kn().TABLE_FILTER_MATCH : s || kn().TABLE_FILTER_NONE],
          title: na("vxe.table.filter"),
          onClick(g) {
            t.triggerFilterEvent && t.triggerFilterEvent(g, e.column, e);
          }
        })
      ])
    ] : [];
  },
  /**
   * 可编辑
   */
  renderEditHeader(e) {
    const { $table: t, column: n } = e, { props: o } = t, { computeEditOpts: l } = t.getComputeMaps(), { editConfig: a, editRules: c } = o, p = l.value, { sortable: d, filters: s, editRender: f } = n;
    let g = !1;
    if (c) {
      const D = i.get(c, n.field);
      D && (g = D.some((b) => b.required));
    }
    return (Lt(a) ? [
      g && p.showAsterisk ? r("i", {
        class: "vxe-cell--required-icon"
      }) : null,
      Lt(f) && p.showIcon ? r("i", {
        class: ["vxe-cell--edit-icon", p.icon || kn().TABLE_EDIT]
      }) : null
    ] : []).concat(Rt.renderDefaultHeader(e)).concat(d ? Rt.renderSortIcon(e) : []).concat(s ? Rt.renderFilterIcon(e) : []);
  },
  // 行格编辑模式
  renderRowEdit(e) {
    const { $table: t, column: n } = e, { reactData: o } = t, { editStore: l } = o, { actived: a } = l, { editRender: c } = n;
    return Rt.runRenderer(e, Lt(c) && a && a.row === e.row);
  },
  renderTreeRowEdit(e) {
    return Rt.renderTreeIcon(e, Rt.renderRowEdit(e));
  },
  // 单元格编辑模式
  renderCellEdit(e) {
    const { $table: t, column: n } = e, { reactData: o } = t, { editStore: l } = o, { actived: a } = l, { editRender: c } = n;
    return Rt.runRenderer(e, Lt(c) && a && a.row === e.row && a.column === e.column);
  },
  renderTreeCellEdit(e) {
    return Rt.renderTreeIcon(e, Rt.renderCellEdit(e));
  },
  runRenderer(e, t) {
    const { $table: n, column: o } = e, { slots: l, editRender: a, formatter: c } = o, p = l ? l.default : null, d = l ? l.edit : null, s = gi.get(a.name), f = s ? s.renderTableEdit || s.renderEdit : null;
    return t ? d ? n.callSlot(d, e) : f ? uo(f(a, Object.assign({ $type: "edit" }, e))) : [] : p ? n.callSlot(p, e) : c ? [
      r("span", {
        class: "vxe-cell--label"
      }, _p(e))
    ] : Rt.renderDefaultCell(e);
  }
}, Sh = {
  // 列唯一主键
  colId: [String, Number],
  // 渲染类型 index,radio,checkbox,expand,html
  type: String,
  // 列字段名
  field: String,
  // 列标题
  title: String,
  // 列宽度
  width: [Number, String],
  // 列最小宽度，把剩余宽度按比例分配
  minWidth: [Number, String],
  // 列最大宽度
  maxWidth: [Number, String],
  // 是否允许拖动列宽调整大小
  resizable: { type: Boolean, default: null },
  // 将列固定在左侧或者右侧
  fixed: String,
  // 列对其方式
  align: String,
  // 表头对齐方式
  headerAlign: String,
  // 表尾列的对齐方式
  footerAlign: String,
  // 当内容过长时显示为省略号
  showOverflow: { type: [Boolean, String], default: null },
  // 当表头内容过长时显示为省略号
  showHeaderOverflow: { type: [Boolean, String], default: null },
  // 当表尾内容过长时显示为省略号
  showFooterOverflow: { type: [Boolean, String], default: null },
  // 给单元格附加 className
  className: [String, Function],
  // 给表头单元格附加 className
  headerClassName: [String, Function],
  // 给表尾单元格附加 className
  footerClassName: [String, Function],
  // 格式化显示内容
  formatter: [Function, Array, String],
  // 是否允许排序
  sortable: Boolean,
  // 自定义排序的属性
  sortBy: [String, Function],
  // 排序的字段类型，比如字符串转数值等
  sortType: String,
  // 配置筛选条件数组
  filters: { type: Array, default: null },
  // 筛选是否允许多选
  filterMultiple: { type: Boolean, default: !0 },
  // 自定义筛选方法
  filterMethod: Function,
  // 筛选重置方法
  filterResetMethod: Function,
  // 筛选复原方法
  filterRecoverMethod: Function,
  // 筛选模板配置项
  filterRender: Object,
  // 指定为树节点
  treeNode: Boolean,
  // 是否可视
  visible: { type: Boolean, default: null },
  // 表头单元格数据导出方法
  headerExportMethod: Function,
  // 单元格数据导出方法
  exportMethod: Function,
  // 表尾单元格数据导出方法
  footerExportMethod: Function,
  // 已废弃，被 titlePrefix 替换
  titleHelp: Object,
  // 标题前缀图标配置项
  titlePrefix: Object,
  // 标题后缀图标配置项
  titleSuffix: Object,
  // 单元格值类型
  cellType: String,
  // 单元格渲染配置项
  cellRender: Object,
  // 单元格编辑渲染配置项
  editRender: Object,
  // 内容渲染配置项
  contentRender: Object,
  // 额外的参数
  params: Object
}, jr = tt({
  name: "VxeColumn",
  props: Sh,
  setup(e, { slots: t }) {
    const n = Ie(), o = ut("$xeTable", {}), l = ut("$xeColgroup", null), a = Rt.createColumn(o, e);
    a.slots = t;
    const c = () => r("div", {
      ref: n
    }), p = {
      column: a,
      renderVN: c
    };
    return yh(o, e, a), yn(() => {
      Ch(o, n.value, a, l);
    }), On(() => {
      wh(o, a);
    }), Xt("$xeColumn", p), Xt("$xeGrid", null), c;
  }
}), Sd = Object.assign({}, jr, {
  install(e) {
    e.component(jr.name, jr), e.component("VxeTableColumn", jr);
  }
});
ue.dynamicApp && (ue.dynamicApp.component(jr.name, jr), ue.dynamicApp.component("VxeTableColumn", jr));
ue.component(jr);
const A1 = Sd, qr = tt({
  name: "VxeColgroup",
  props: Sh,
  setup(e, { slots: t }) {
    const n = Ie(), o = ut("$xeTable", {}), l = ut("$xeColgroup", null), a = Rt.createColumn(o, e), c = {};
    t.header && (c.header = t.header), a.slots = c, a.children = [], yh(o, e, a), yn(() => {
      Ch(o, n.value, a, l);
    }), On(() => {
      wh(o, a);
    });
    const p = () => r("div", {
      ref: n
    }, t.default ? t.default() : []);
    return Xt("$xeColgroup", { column: a }), Xt("$xeGrid", null), p;
  }
}), Dd = Object.assign({}, qr, {
  install(e) {
    e.component(qr.name, qr), e.component("VxeTableColgroup", qr);
  }
});
ue.dynamicApp && (ue.dynamicApp.component(qr.name, qr), ue.dynamicApp.component("VxeTableColgroup", qr));
ue.component(qr);
const _1 = Dd, { getI18n: W1, renderer: Wp } = ue, Gs = "body", B1 = {
  mini: 3,
  small: 2,
  medium: 1
}, Bp = tt({
  name: "VxeTableBody",
  props: {
    tableData: Array,
    tableColumn: Array,
    fixedColumn: Array,
    fixedType: { type: String, default: null }
  },
  setup(e) {
    const t = ut("$xeTable", {}), n = ut("xesize", null), { xID: o, props: l, context: a, reactData: c, internalData: p } = t, { refTableHeader: d, refTableBody: s, refTableFooter: f, refTableLeftBody: g, refTableRightBody: D, refValidTooltip: b } = t.getRefMaps(), { computeEditOpts: x, computeMouseOpts: S, computeSYOpts: y, computeEmptyOpts: h, computeKeyboardOpts: O, computeTooltipOpts: E, computeRadioOpts: T, computeExpandOpts: W, computeTreeOpts: $, computeCheckboxOpts: I, computeValidOpts: z, computeRowOpts: te, computeColumnOpts: Ce } = t.getComputeMaps(), N = Ie(), F = Ie(), j = Ie(), ee = Ie(), oe = Ie(), re = Ie(), G = Ie(), J = () => {
      if (n) {
        const xe = n.value;
        if (xe)
          return B1[xe] || 0;
      }
      return 0;
    }, A = () => {
      const { delayHover: xe } = l, { lastScrollTime: Le, _isResize: je } = c;
      return !!(je || Le && Date.now() < Le + xe);
    }, M = (xe, Le) => {
      let je = 1;
      if (!xe)
        return je;
      const Ye = $.value, fe = Ye.children || Ye.childrenField, ge = xe[fe];
      if (ge && t.isTreeExpandByRow(xe))
        for (let $e = 0; $e < ge.length; $e++)
          je += M(ge[$e]);
      return je;
    }, H = (xe, Le, je) => {
      let Ye = 1;
      return je && (Ye = M(Le[je - 1])), c.rowHeight * Ye - (je ? 1 : 12 - J());
    }, ne = (xe) => {
      const { row: Le, column: je } = xe, { afterFullData: Ye } = p, { treeConfig: fe } = l, ge = $.value, { slots: $e, treeNode: Ve } = je, { fullAllDataRowIdData: ce } = p, We = st(t, Le), Ge = ce[We];
      let Ze = 0, pe = 0, Y = [];
      if (Ge && (Ze = Ge.level, pe = Ge._index, Y = Ge.items), $e && $e.line)
        return t.callSlot($e.line, xe);
      const le = t.eqRow(Ye[0], Le);
      return fe && Ve && (ge.showLine || ge.line) ? [
        r("div", {
          class: "vxe-tree--line-wrapper"
        }, [
          r("div", {
            class: "vxe-tree--line",
            style: {
              height: `${le ? 1 : H(xe, Y, pe)}px`,
              left: `${Ze * ge.indent + (Ze ? 2 - J() : 0) + 16}px`
            }
          })
        ])
      ] : [];
    }, de = (xe, Le, je, Ye, fe, ge, $e, Ve, ce, We, Ge, Ze) => {
      const { columnKey: pe, height: Y, showOverflow: le, cellClassName: he, cellStyle: He, align: se, spanMethod: Se, mouseConfig: ze, editConfig: Xe, editRules: et, tooltipConfig: at } = l, { tableData: ft, overflowX: mt, scrollYLoad: B, currentColumn: Mt, mergeList: St, editStore: gt, isAllOverflow: bt, validErrorMaps: Dt } = c, { afterFullData: Bt } = p, Wt = z.value, Pt = I.value, jt = x.value, At = E.value, Rn = te.value, _t = y.value, Ht = Ce.value, { type: Kt, cellRender: pn, editRender: Tn, align: mn, showOverflow: hn, className: Pn, treeNode: cn, slots: Qt } = ce, { actived: wn } = gt, { rHeight: Zt } = _t, { height: _n } = Rn, Yo = Tn || pn, Zn = Yo ? Wp.get(Yo.name) : null, Tr = Zn ? Zn.tableCellClassName || Zn.cellClassName : null, $o = Zn ? Zn.tableCellStyle || Zn.cellStyle : "", Ao = At.showAll, _o = t.getColumnIndex(ce), fo = t.getVTColumnIndex(ce), Wo = Lt(Tn);
      let zn = je ? ce.fixed !== je : ce.fixed && mt;
      const Ro = i.isUndefined(hn) || i.isNull(hn) ? le : hn;
      let Bo = Ro === "ellipsis";
      const En = Ro === "title", lo = Ro === !0 || Ro === "tooltip";
      let Jn = En || lo || Bo, Xo;
      const po = {}, sr = mn || se, Po = Dt[`${Le}:${ce.id}`], io = et && Wt.showMessage && (Wt.message === "default" ? Y || ft.length > 1 : Wt.message === "inline"), jn = { colid: ce.id }, Sn = { $table: t, $grid: t.xegrid, seq: xe, rowid: Le, row: fe, rowIndex: ge, $rowIndex: $e, _rowIndex: Ve, column: ce, columnIndex: _o, $columnIndex: We, _columnIndex: fo, fixed: je, type: Gs, isHidden: zn, level: Ye, visibleData: Bt, data: ft, items: Ze };
      if (B && !Jn && (Bo = Jn = !0), (En || lo || Ao || at) && (po.onMouseenter = (tn) => {
        A() || (En ? Ed(tn.currentTarget, ce) : (lo || Ao) && t.triggerBodyTooltipEvent(tn, Sn), t.dispatchEvent("cell-mouseenter", Object.assign({ cell: tn.currentTarget }, Sn), tn));
      }), (lo || Ao || at) && (po.onMouseleave = (tn) => {
        A() || ((lo || Ao) && t.handleTargetLeaveEvent(tn), t.dispatchEvent("cell-mouseleave", Object.assign({ cell: tn.currentTarget }, Sn), tn));
      }), (Pt.range || ze) && (po.onMousedown = (tn) => {
        t.triggerCellMousedownEvent(tn, Sn);
      }), po.onClick = (tn) => {
        t.triggerCellClickEvent(tn, Sn);
      }, po.onDblclick = (tn) => {
        t.triggerCellDblclickEvent(tn, Sn);
      }, St.length) {
        const tn = Eh(St, Ve, fo);
        if (tn) {
          const { rowspan: Qn, colspan: ao } = tn;
          if (!Qn || !ao)
            return null;
          Qn > 1 && (jn.rowspan = Qn), ao > 1 && (jn.colspan = ao);
        }
      } else if (Se) {
        const { rowspan: tn = 1, colspan: Qn = 1 } = Se(Sn) || {};
        if (!tn || !Qn)
          return null;
        tn > 1 && (jn.rowspan = tn), Qn > 1 && (jn.colspan = Qn);
      }
      zn && St && (jn.colspan > 1 || jn.rowspan > 1) && (zn = !1), !zn && Xe && (Tn || pn) && (jt.showStatus || jt.showUpdateStatus) && (Xo = t.isUpdateByRow(fe, ce.field));
      const yo = [];
      if (zn && le && bt)
        yo.push(r("div", {
          class: ["vxe-cell", {
            "c--title": En,
            "c--tooltip": lo,
            "c--ellipsis": Bo
          }],
          style: {
            maxHeight: Jn && (Zt || _n) ? `${Zt || _n}px` : ""
          }
        }));
      else if (yo.push(...ne(Sn), r("div", {
        class: ["vxe-cell", {
          "c--title": En,
          "c--tooltip": lo,
          "c--ellipsis": Bo
        }],
        style: {
          maxHeight: Jn && (Zt || _n) ? `${Zt || _n}px` : ""
        },
        title: En ? t.getCellLabel(fe, ce) : null
      }, ce.renderCell(Sn))), io && Po) {
        const tn = Po.rule, Qn = Qt ? Qt.valid : null, ao = Object.assign(Object.assign({}, Sn), Po);
        yo.push(r("div", {
          class: ["vxe-cell--valid-error-hint", Wr(Wt.className, ao)],
          style: tn && tn.maxWidth ? {
            width: `${tn.maxWidth}px`
          } : null
        }, Qn ? t.callSlot(Qn, ao) : [
          r("span", {
            class: "vxe-cell--valid-error-msg"
          }, Po.content)
        ]));
      }
      return r("td", Object.assign(Object.assign(Object.assign({ class: [
        "vxe-body--column",
        ce.id,
        {
          [`col--${sr}`]: sr,
          [`col--${Kt}`]: Kt,
          "col--last": We === Ge.length - 1,
          "col--tree-node": cn,
          "col--edit": Wo,
          "col--ellipsis": Jn,
          "fixed--hidden": zn,
          "col--dirty": Xo,
          "col--active": Xe && Wo && wn.row === fe && (wn.column === ce || jt.mode === "row"),
          "col--valid-error": !!Po,
          "col--current": Mt === ce
        },
        Wr(Tr, Sn),
        Wr(Pn, Sn),
        Wr(he, Sn)
      ], key: pe || Ht.useKey ? ce.id : We }, jn), { style: Object.assign({
        height: Jn && (Zt || _n) ? `${Zt || _n}px` : ""
      }, i.isFunction($o) ? $o(Sn) : $o, i.isFunction(He) ? He(Sn) : He) }), po), yo);
    }, ve = (xe, Le, je) => {
      const { stripe: Ye, rowKey: fe, highlightHoverRow: ge, rowClassName: $e, rowStyle: Ve, showOverflow: ce, editConfig: We, treeConfig: Ge } = l, { hasFixedColumn: Ze, treeExpandedMaps: pe, scrollYLoad: Y, rowExpandedMaps: le, expandColumn: he, selectRadioRow: He, pendingRowMaps: se, pendingRowList: Se } = c, { fullAllDataRowIdData: ze } = p, Xe = I.value, et = T.value, at = $.value, ft = x.value, mt = te.value, { transform: B } = at, Mt = at.children || at.childrenField, St = [];
      return Le.forEach((gt, bt) => {
        const Dt = {};
        let Bt = bt;
        Bt = t.getRowIndex(gt), (mt.isHover || ge) && (Dt.onMouseenter = (mn) => {
          A() || t.triggerHoverEvent(mn, { row: gt, rowIndex: Bt });
        }, Dt.onMouseleave = () => {
          A() || t.clearHoverRow();
        });
        const Wt = st(t, gt), Pt = ze[Wt];
        let jt = 0, At = -1, Rn = 0;
        Pt && (jt = Pt.level, At = Pt.seq, Rn = Pt._index);
        const _t = { $table: t, seq: At, rowid: Wt, fixed: xe, type: Gs, level: jt, row: gt, rowIndex: Bt, $rowIndex: bt, _rowIndex: Rn }, Ht = he && !!le[Wt];
        let Kt = !1, pn = [], Tn = !1;
        if (We && (Tn = t.isInsertByRow(gt)), Ge && !Y && !B && (pn = gt[Mt], Kt = pn && pn.length > 0 && !!pe[Wt]), St.push(r("tr", Object.assign({ class: [
          "vxe-body--row",
          Ge ? `row--level-${jt}` : "",
          {
            "row--stripe": Ye && (t.getVTRowIndex(gt) + 1) % 2 === 0,
            "is--new": Tn,
            "is--expand-row": Ht,
            "is--expand-tree": Kt,
            "row--new": Tn && (ft.showStatus || ft.showInsertStatus),
            "row--radio": et.highlight && t.eqRow(He, gt),
            "row--checked": Xe.highlight && t.isCheckedByCheckboxRow(gt),
            "row--pending": Se.length && !!se[Wt]
          },
          Wr($e, _t)
        ], rowid: Wt, style: Ve ? i.isFunction(Ve) ? Ve(_t) : Ve : null, key: fe || mt.useKey || Ge ? Wt : bt }, Dt), je.map((mn, hn) => de(At, Wt, xe, jt, gt, Bt, bt, Rn, mn, hn, je, Le)))), Ht) {
          const mn = W.value, { height: hn, padding: Pn } = mn, cn = {};
          hn && (cn.height = `${hn}px`), Ge && (cn.paddingLeft = `${jt * at.indent + 30}px`);
          const { showOverflow: Qt } = he, wn = i.isUndefined(Qt) || i.isNull(Qt) ? ce : Qt, Zt = { $table: t, seq: At, column: he, fixed: xe, type: Gs, level: jt, row: gt, rowIndex: Bt, $rowIndex: bt, _rowIndex: Rn };
          St.push(r("tr", Object.assign({ class: ["vxe-body--expanded-row", {
            "is--padding": Pn
          }], key: `expand_${Wt}`, style: Ve ? i.isFunction(Ve) ? Ve(Zt) : Ve : null }, Dt), [
            r("td", {
              class: {
                "vxe-body--expanded-column": 1,
                "fixed--hidden": xe && !Ze,
                "col--ellipsis": wn
              },
              colspan: je.length
            }, [
              r("div", {
                class: {
                  "vxe-body--expanded-cell": 1,
                  "is--ellipsis": hn
                },
                style: cn
              }, [
                he.renderData(Zt)
              ])
            ])
          ]));
        }
        Kt && St.push(...ve(xe, pn, je));
      }), St;
    };
    let Oe;
    const Fe = (xe, Le, je, Ye) => {
      (je || Ye) && (je && (Fp(je), je.scrollTop = Le), Ye && (Fp(Ye), Ye.scrollTop = Le), clearTimeout(Oe), Oe = setTimeout(() => {
        ha(je), ha(Ye), c.lastScrollTime = Date.now();
      }, 300));
    }, R = (xe) => {
      const { fixedType: Le } = e, { highlightHoverRow: je } = l, { scrollXLoad: Ye, scrollYLoad: fe } = c, { elemStore: ge, lastScrollTop: $e, lastScrollLeft: Ve } = p, ce = te.value, We = d.value, Ge = s.value, Ze = f.value, pe = g.value, Y = D.value, le = b.value, he = N.value, He = We ? We.$el : null, se = Ze ? Ze.$el : null, Se = Ge.$el, ze = pe ? pe.$el : null, Xe = Y ? Y.$el : null, et = ge["main-body-ySpace"], at = et ? et.value : null, ft = ge["main-body-xSpace"], mt = ft ? ft.value : null, B = fe && at ? at.clientHeight : Se.clientHeight, Mt = Ye && mt ? mt.clientWidth : Se.clientWidth;
      let St = he.scrollTop;
      const gt = Se.scrollLeft, bt = gt !== Ve, Dt = St !== $e;
      p.lastScrollTop = St, p.lastScrollLeft = gt, c.lastScrollTime = Date.now(), (ce.isHover || je) && t.clearHoverRow(), ze && Le === "left" ? (St = ze.scrollTop, Fe(Le, St, Se, Xe)) : Xe && Le === "right" ? (St = Xe.scrollTop, Fe(Le, St, Se, ze)) : (bt && (He && (He.scrollLeft = Se.scrollLeft), se && (se.scrollLeft = Se.scrollLeft)), (ze || Xe) && (t.checkScrolling(), Dt && Fe(Le, St, ze, Xe))), Ye && bt && t.triggerScrollXEvent(xe), fe && Dt && t.triggerScrollYEvent(xe), bt && le && le.reactData.visible && le.updatePlacement(), t.dispatchEvent("scroll", {
        type: Gs,
        fixed: Le,
        scrollTop: St,
        scrollLeft: gt,
        scrollHeight: Se.scrollHeight,
        scrollWidth: Se.scrollWidth,
        bodyHeight: B,
        bodyWidth: Mt,
        isX: bt,
        isY: Dt
      }, xe);
    };
    let k, U = 0, _ = 0, K = 0, Z = !1;
    const ke = (xe, Le, je, Ye, fe) => {
      const { elemStore: ge } = p, { scrollXLoad: $e, scrollYLoad: Ve } = c, ce = s.value, We = g.value, Ge = D.value, Ze = We ? We.$el : null, pe = Ge ? Ge.$el : null, Y = ce.$el, le = ge["main-body-ySpace"], he = le ? le.value : null, He = ge["main-body-xSpace"], se = He ? He.value : null, Se = Ve && he ? he.clientHeight : Y.clientHeight, ze = $e && se ? se.clientWidth : Y.clientWidth, Xe = Z === Le ? Math.max(0, U - K) : 0;
      Z = Le, U = Math.abs(Le ? je - Xe : je + Xe), _ = 0, K = 0, clearTimeout(k);
      const et = () => {
        if (K < U) {
          const { fixedType: at } = e;
          _ = Math.max(5, Math.floor(_ * 1.5)), K = K + _, K > U && (_ = _ - (K - U));
          const { scrollTop: ft, clientHeight: mt, scrollHeight: B } = Y, Mt = ft + _ * (Le ? -1 : 1);
          Y.scrollTop = Mt, Ze && (Ze.scrollTop = Mt), pe && (pe.scrollTop = Mt), (Le ? Mt < B - mt : Mt >= 0) && (k = setTimeout(et, 10)), t.dispatchEvent("scroll", {
            type: Gs,
            fixed: at,
            scrollTop: Y.scrollTop,
            scrollLeft: Y.scrollLeft,
            scrollHeight: Y.scrollHeight,
            scrollWidth: Y.scrollWidth,
            bodyHeight: Se,
            bodyWidth: ze,
            isX: Ye,
            isY: fe
          }, xe);
        }
      };
      et();
    }, ye = (xe) => {
      const { deltaY: Le, deltaX: je } = xe, { highlightHoverRow: Ye } = l, { scrollYLoad: fe } = c, { lastScrollTop: ge, lastScrollLeft: $e } = p, Ve = te.value, ce = s.value, We = N.value, Ge = ce.$el, Ze = Le, pe = je, Y = Ze < 0;
      if (Y ? We.scrollTop <= 0 : We.scrollTop >= We.scrollHeight - We.clientHeight)
        return;
      const le = We.scrollTop + Ze, he = Ge.scrollLeft + pe, He = he !== $e, se = le !== ge;
      se && (xe.preventDefault(), p.lastScrollTop = le, p.lastScrollLeft = he, c.lastScrollTime = Date.now(), (Ve.isHover || Ye) && t.clearHoverRow(), ke(xe, Y, Ze, He, se), fe && t.triggerScrollYEvent(xe));
    };
    return yn(() => {
      ae(() => {
        const { fixedType: xe } = e, { elemStore: Le } = p, je = `${xe || "main"}-body-`, Ye = N.value;
        Le[`${je}wrapper`] = N, Le[`${je}table`] = F, Le[`${je}colgroup`] = j, Le[`${je}list`] = ee, Le[`${je}xSpace`] = oe, Le[`${je}ySpace`] = re, Le[`${je}emptyBlock`] = G, Ye && (Ye.onscroll = R, Ye._onscroll = R);
      });
    }), Ci(() => {
      const xe = N.value;
      clearTimeout(k), xe && (xe._onscroll = null, xe.onscroll = null);
    }), On(() => {
      const { fixedType: xe } = e, { elemStore: Le } = p, je = `${xe || "main"}-body-`;
      Le[`${je}wrapper`] = null, Le[`${je}table`] = null, Le[`${je}colgroup`] = null, Le[`${je}list`] = null, Le[`${je}xSpace`] = null, Le[`${je}ySpace`] = null, Le[`${je}emptyBlock`] = null;
    }), () => {
      let { fixedColumn: xe, fixedType: Le, tableColumn: je } = e;
      const { keyboardConfig: Ye, showOverflow: fe, spanMethod: ge, mouseConfig: $e } = l, { tableData: Ve, mergeList: ce, scrollYLoad: We, isAllOverflow: Ge } = c, { visibleColumn: Ze } = p, { slots: pe } = a, Y = y.value, le = h.value, he = O.value, He = S.value;
      Le && (!c.expandColumn && (We || fe && Ge) && !ce.length && !ge && !(Ye && he.isMerge) ? je = xe : je = Ze);
      let se;
      const Se = pe ? pe.empty : null;
      if (Se)
        se = t.callSlot(Se, { $table: t, $grid: t.xegrid });
      else {
        const ze = le.name ? Wp.get(le.name) : null, Xe = ze ? ze.renderTableEmpty || ze.renderTableEmptyView || ze.renderEmpty : null;
        Xe ? se = uo(Xe(le, { $table: t })) : se = l.emptyText || W1("vxe.table.emptyText");
      }
      return r("div", Object.assign({ ref: N, class: ["vxe-table--body-wrapper", Le ? `fixed-${Le}--wrapper` : "body--wrapper"], xid: o }, Y.mode === "wheel" ? { onWheel: ye } : {}), [
        Le ? Me() : r("div", {
          ref: oe,
          class: "vxe-body--x-space"
        }),
        r("div", {
          ref: re,
          class: "vxe-body--y-space"
        }),
        r("table", {
          ref: F,
          class: "vxe-table--body",
          xid: o,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          /**
           * 列宽
           */
          r("colgroup", {
            ref: j
          }, je.map((ze, Xe) => r("col", {
            name: ze.id,
            key: Xe
          }))),
          /**
           * 内容
           */
          r("tbody", {
            ref: ee
          }, ve(Le, Ve, je))
        ]),
        r("div", {
          class: "vxe-table--checkbox-range"
        }),
        $e && He.area ? r("div", {
          class: "vxe-table--cell-area"
        }, [
          r("span", {
            class: "vxe-table--cell-main-area"
          }, He.extension ? [
            r("span", {
              class: "vxe-table--cell-main-area-btn",
              onMousedown(ze) {
                t.triggerCellExtendMousedownEvent(ze, { $table: t, fixed: Le, type: Gs });
              }
            })
          ] : []),
          r("span", {
            class: "vxe-table--cell-copy-area"
          }),
          r("span", {
            class: "vxe-table--cell-extend-area"
          }),
          r("span", {
            class: "vxe-table--cell-multi-area"
          }),
          r("span", {
            class: "vxe-table--cell-active-area"
          })
        ]) : null,
        Le ? null : r("div", {
          class: "vxe-table--empty-block",
          ref: G
        }, [
          r("div", {
            class: "vxe-table--empty-content"
          }, se)
        ])
      ]);
    };
  }
}), bc = "header", Hp = tt({
  name: "VxeTableHeader",
  props: {
    tableData: Array,
    tableColumn: Array,
    tableGroupColumn: Array,
    fixedColumn: Array,
    fixedType: { type: String, default: null }
  },
  setup(e) {
    const t = ut("$xeTable", {}), { xID: n, props: o, reactData: l, internalData: a } = t, { refElem: c, refTableBody: p, refLeftContainer: d, refRightContainer: s, refCellResizeBar: f } = t.getRefMaps(), { computeColumnOpts: g } = t.getComputeMaps(), D = Ie([]), b = Ie(), x = Ie(), S = Ie(), y = Ie(), h = Ie(), O = Ie(), E = () => {
      const { isGroup: $ } = l;
      D.value = $ ? M1(e.tableGroupColumn) : [];
    }, T = ($, I) => {
      const { column: z } = I, { fixedType: te } = e, Ce = p.value, N = d.value, F = s.value, j = f.value, { clientX: ee } = $, oe = b.value, re = $.target, G = I.cell = re.parentNode;
      let J = 0;
      const A = Ce.$el, M = D1(re, oe), H = re.clientWidth, ne = Math.floor(H / 2), de = k1(I) - ne;
      let ve = M.left - G.clientWidth + H + de, Oe = M.left + ne;
      const Fe = document.onmousemove, R = document.onmouseup, k = te === "left", U = te === "right", _ = c.value;
      let K = 0;
      if (k || U) {
        const ke = k ? "nextElementSibling" : "previousElementSibling";
        let ye = G[ke];
        for (; ye && !Is(ye, "fixed--hidden"); )
          Is(ye, "col--group") || (K += ye.offsetWidth), ye = ye[ke];
        U && F && (Oe = F.offsetLeft + K);
      }
      const Z = function(ke) {
        ke.stopPropagation(), ke.preventDefault();
        const ye = ke.clientX - ee;
        let Ee = Oe + ye;
        const xe = te ? 0 : A.scrollLeft;
        k ? Ee = Math.min(Ee, (F ? F.offsetLeft : A.clientWidth) - K - de) : U ? (ve = (N ? N.clientWidth : 0) + K + de, Ee = Math.min(Ee, Oe + G.clientWidth - de)) : ve = Math.max(A.scrollLeft, ve), J = Math.max(Ee, ve), j.style.left = `${J - xe}px`;
      };
      l._isResize = !0, vr(_, "drag--resize"), j.style.display = "block", document.onmousemove = Z, document.onmouseup = function(ke) {
        document.onmousemove = Fe, document.onmouseup = R;
        const ye = z.renderWidth + (U ? Oe - J : J - Oe);
        z.resizeWidth = ye, j.style.display = "none", l._isResize = !1, a._lastResizeTime = Date.now(), t.analyColumnWidth(), t.recalculate(!0).then(() => {
          t.saveCustomStore("update:visible"), t.updateCellAreas(), t.dispatchEvent("resizable-change", Object.assign(Object.assign({}, I), { resizeWidth: ye }), ke), setTimeout(() => t.recalculate(!0), 300);
        }), Oo(_, "drag--resize");
      }, Z($), t.closeMenu && t.closeMenu();
    };
    return lt(() => e.tableColumn, E), yn(() => {
      ae(() => {
        const { fixedType: $ } = e, { internalData: I } = t, { elemStore: z } = I, te = `${$ || "main"}-header-`;
        z[`${te}wrapper`] = b, z[`${te}table`] = x, z[`${te}colgroup`] = S, z[`${te}list`] = y, z[`${te}xSpace`] = h, z[`${te}repair`] = O, E();
      });
    }), On(() => {
      const { fixedType: $ } = e, { internalData: I } = t, { elemStore: z } = I, te = `${$ || "main"}-header-`;
      z[`${te}wrapper`] = null, z[`${te}table`] = null, z[`${te}colgroup`] = null, z[`${te}list`] = null, z[`${te}xSpace`] = null, z[`${te}repair`] = null;
    }), () => {
      const { fixedType: $, fixedColumn: I, tableColumn: z } = e, { resizable: te, border: Ce, columnKey: N, headerRowClassName: F, headerCellClassName: j, headerRowStyle: ee, headerCellStyle: oe, showHeaderOverflow: re, headerAlign: G, align: J, mouseConfig: A } = o, { isGroup: M, currentColumn: H, scrollXLoad: ne, overflowX: de, scrollbarWidth: ve } = l, { visibleColumn: Oe } = a, Fe = g.value;
      let R = D.value, k = z;
      return M ? k = Oe : ($ && (ne || re) && (k = I), R = [k]), r("div", {
        ref: b,
        class: ["vxe-table--header-wrapper", $ ? `fixed-${$}--wrapper` : "body--wrapper"],
        xid: n
      }, [
        $ ? Me() : r("div", {
          ref: h,
          class: "vxe-body--x-space"
        }),
        r("table", {
          ref: x,
          class: "vxe-table--header",
          xid: n,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          /**
           * 列宽
           */
          r("colgroup", {
            ref: S
          }, k.map((U, _) => r("col", {
            name: U.id,
            key: _
          })).concat(ve ? [
            r("col", {
              name: "col_gutter"
            })
          ] : [])),
          /**
           * 头部
           */
          r("thead", {
            ref: y
          }, R.map((U, _) => r("tr", {
            class: ["vxe-header--row", F ? i.isFunction(F) ? F({ $table: t, $rowIndex: _, fixed: $, type: bc }) : F : ""],
            style: ee ? i.isFunction(ee) ? ee({ $table: t, $rowIndex: _, fixed: $, type: bc }) : ee : null
          }, U.map((K, Z) => {
            const { type: ke, showHeaderOverflow: ye, headerAlign: Ee, align: xe, headerClassName: Le } = K, je = K.children && K.children.length, Ye = $ ? K.fixed !== $ && !je : !!K.fixed && de, fe = i.isUndefined(ye) || i.isNull(ye) ? re : ye, ge = Ee || xe || G || J;
            let $e = fe === "ellipsis";
            const Ve = fe === "title", ce = fe === !0 || fe === "tooltip";
            let We = Ve || ce || $e;
            const Ge = K.filters && K.filters.some((he) => he.checked), Ze = t.getColumnIndex(K), pe = t.getVTColumnIndex(K), Y = { $table: t, $grid: t.xegrid, $rowIndex: _, column: K, columnIndex: Ze, $columnIndex: Z, _columnIndex: pe, fixed: $, type: bc, isHidden: Ye, hasFilter: Ge }, le = {
              onClick: (he) => t.triggerHeaderCellClickEvent(he, Y),
              onDblclick: (he) => t.triggerHeaderCellDblclickEvent(he, Y)
            };
            return ne && !We && ($e = We = !0), A && (le.onMousedown = (he) => t.triggerHeaderCellMousedownEvent(he, Y)), r("th", Object.assign(Object.assign({ class: [
              "vxe-header--column",
              K.id,
              {
                [`col--${ge}`]: ge,
                [`col--${ke}`]: ke,
                "col--last": Z === U.length - 1,
                "col--fixed": K.fixed,
                "col--group": je,
                "col--ellipsis": We,
                "fixed--hidden": Ye,
                "is--sortable": K.sortable,
                "col--filter": !!K.filters,
                "is--filter-active": Ge,
                "col--current": H === K
              },
              Le ? i.isFunction(Le) ? Le(Y) : Le : "",
              j ? i.isFunction(j) ? j(Y) : j : ""
            ], colid: K.id, colspan: K.colSpan > 1 ? K.colSpan : null, rowspan: K.rowSpan > 1 ? K.rowSpan : null, style: oe ? i.isFunction(oe) ? oe(Y) : oe : null }, le), { key: N || Fe.useKey || je ? K.id : Z }), [
              r("div", {
                class: ["vxe-cell", {
                  "c--title": Ve,
                  "c--tooltip": ce,
                  "c--ellipsis": $e
                }]
              }, K.renderHeader(Y)),
              /**
               * 列宽拖动
               */
              !Ye && !je && (i.isBoolean(K.resizable) ? K.resizable : Fe.resizable || te) ? r("div", {
                class: ["vxe-resizable", {
                  "is--line": !Ce || Ce === "none"
                }],
                onMousedown: (he) => T(he, Y)
              }) : null
            ]);
          }).concat(ve ? [
            r("th", {
              class: "vxe-header--gutter col--gutter"
            })
          ] : []))))
        ]),
        /**
         * 其他
         */
        r("div", {
          ref: O,
          class: "vxe-table--header-border-line"
        })
      ]);
    };
  }
}), xc = "footer";
function H1(e, t, n) {
  for (let o = 0; o < e.length; o++) {
    const { row: l, col: a, rowspan: c, colspan: p } = e[o];
    if (a > -1 && l > -1 && c && p) {
      if (l === t && a === n)
        return { rowspan: c, colspan: p };
      if (t >= l && t < l + c && n >= a && n < a + p)
        return { rowspan: 0, colspan: 0 };
    }
  }
}
const zp = tt({
  name: "VxeTableFooter",
  props: {
    footerTableData: { type: Array, default: () => [] },
    tableColumn: { type: Array, default: () => [] },
    fixedColumn: { type: Array, default: () => [] },
    fixedType: { type: String, default: null }
  },
  setup(e) {
    const t = ut("$xeTable", {}), { xID: n, props: o, reactData: l, internalData: a } = t, { refTableHeader: c, refTableBody: p, refValidTooltip: d } = t.getRefMaps(), { computeTooltipOpts: s, computeColumnOpts: f } = t.getComputeMaps(), g = Ie(), D = Ie(), b = Ie(), x = Ie(), S = Ie(), y = (O) => {
      const { fixedType: E } = e, { scrollXLoad: T } = l, { lastScrollLeft: W } = a, $ = d.value, I = c.value, z = p.value, te = I ? I.$el : null, Ce = g.value, N = z.$el, F = Ce.scrollLeft, j = F !== W;
      a.lastScrollLeft = F, l.lastScrollTime = Date.now(), te && (te.scrollLeft = F), N && (N.scrollLeft = F), T && j && t.triggerScrollXEvent(O), j && $ && $.reactData.visible && $.updatePlacement(), t.dispatchEvent("scroll", { type: xc, fixed: E, scrollTop: N.scrollTop, scrollLeft: F, isX: j, isY: !1 }, O);
    };
    return yn(() => {
      ae(() => {
        const { fixedType: O } = e, { elemStore: E } = a, T = `${O || "main"}-footer-`;
        E[`${T}wrapper`] = g, E[`${T}table`] = D, E[`${T}colgroup`] = b, E[`${T}list`] = x, E[`${T}xSpace`] = S;
      });
    }), On(() => {
      const { fixedType: O } = e, { elemStore: E } = a, T = `${O || "main"}-footer-`;
      E[`${T}wrapper`] = null, E[`${T}table`] = null, E[`${T}colgroup`] = null, E[`${T}list`] = null, E[`${T}xSpace`] = null;
    }), () => {
      let { fixedType: O, fixedColumn: E, tableColumn: T, footerTableData: W } = e;
      const { footerRowClassName: $, footerCellClassName: I, footerRowStyle: z, footerCellStyle: te, footerAlign: Ce, footerSpanMethod: N, align: F, columnKey: j, showFooterOverflow: ee } = o, { visibleColumn: oe } = a, { scrollXLoad: re, overflowX: G, scrollbarWidth: J, currentColumn: A, mergeFooterList: M } = l, H = s.value, ne = f.value;
      return O && (!l.expandColumn && (re || ee) && (!M.length || !N) ? T = E : T = oe), r("div", {
        ref: g,
        class: ["vxe-table--footer-wrapper", O ? `fixed-${O}--wrapper` : "body--wrapper"],
        xid: n,
        onScroll: y
      }, [
        O ? Me() : r("div", {
          ref: S,
          class: "vxe-body--x-space"
        }),
        r("table", {
          ref: D,
          class: "vxe-table--footer",
          xid: n,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          /**
           * 列宽
           */
          r("colgroup", {
            ref: b
          }, T.map((de, ve) => r("col", {
            name: de.id,
            key: ve
          })).concat(J ? [
            r("col", {
              name: "col_gutter"
            })
          ] : [])),
          /**
           * 底部
           */
          r("tfoot", {
            ref: x
          }, W.map((de, ve) => {
            const Oe = ve, Fe = { $table: t, row: de, _rowIndex: ve, $rowIndex: Oe, fixed: O, type: xc };
            return r("tr", {
              class: ["vxe-footer--row", $ ? i.isFunction($) ? $(Fe) : $ : ""],
              style: z ? i.isFunction(z) ? z(Fe) : z : null
            }, T.map((R, k) => {
              const { type: U, showFooterOverflow: _, footerAlign: K, align: Z, footerClassName: ke } = R, ye = H.showAll, Ee = R.children && R.children.length, xe = O ? R.fixed !== O && !Ee : R.fixed && G, Le = i.isUndefined(_) || i.isNull(_) ? ee : _, je = K || Z || Ce || F;
              let Ye = Le === "ellipsis";
              const fe = Le === "title", ge = Le === !0 || Le === "tooltip";
              let $e = fe || ge || Ye;
              const Ve = { colid: R.id }, ce = {}, We = t.getColumnIndex(R), Ge = t.getVTColumnIndex(R), Ze = Ge, pe = {
                $table: t,
                $grid: t.xegrid,
                row: de,
                rowIndex: ve,
                _rowIndex: ve,
                $rowIndex: Oe,
                column: R,
                columnIndex: We,
                $columnIndex: k,
                _columnIndex: Ge,
                itemIndex: Ze,
                items: de,
                fixed: O,
                type: xc,
                data: W
              };
              if (re && !$e && (Ye = $e = !0), (fe || ge || ye) && (ce.onMouseenter = (Y) => {
                fe ? Ed(Y.currentTarget, R) : (ge || ye) && t.triggerFooterTooltipEvent(Y, pe);
              }), (ge || ye) && (ce.onMouseleave = (Y) => {
                (ge || ye) && t.handleTargetLeaveEvent(Y);
              }), ce.onClick = (Y) => {
                t.dispatchEvent("footer-cell-click", Object.assign({ cell: Y.currentTarget }, pe), Y);
              }, ce.onDblclick = (Y) => {
                t.dispatchEvent("footer-cell-dblclick", Object.assign({ cell: Y.currentTarget }, pe), Y);
              }, M.length) {
                const Y = H1(M, ve, Ge);
                if (Y) {
                  const { rowspan: le, colspan: he } = Y;
                  if (!le || !he)
                    return null;
                  le > 1 && (Ve.rowspan = le), he > 1 && (Ve.colspan = he);
                }
              } else if (N) {
                const { rowspan: Y = 1, colspan: le = 1 } = N(pe) || {};
                if (!Y || !le)
                  return null;
                Y > 1 && (Ve.rowspan = Y), le > 1 && (Ve.colspan = le);
              }
              return r("td", Object.assign(Object.assign(Object.assign(Object.assign({ class: ["vxe-footer--column", R.id, {
                [`col--${je}`]: je,
                [`col--${U}`]: U,
                "col--last": k === T.length - 1,
                "fixed--hidden": xe,
                "col--ellipsis": $e,
                "col--current": A === R
              }, Wr(ke, pe), Wr(I, pe)] }, Ve), { style: te ? i.isFunction(te) ? te(pe) : te : null }), ce), { key: j || ne.useKey ? R.id : k }), [
                r("div", {
                  class: ["vxe-cell", {
                    "c--title": fe,
                    "c--tooltip": ge,
                    "c--ellipsis": Ye
                  }]
                }, R.renderFooter(pe))
              ]);
            }).concat(J ? [
              r("td", {
                class: "vxe-footer--gutter col--gutter"
              })
            ] : []));
          }))
        ])
      ]);
    };
  }
}), { getConfig: In } = ue, Od = {
  /** 基本属性 */
  id: String,
  // 数据
  data: Array,
  // 表格的高度
  height: [Number, String],
  // 表格的最小高度
  minHeight: { type: [Number, String], default: () => In().table.minHeight },
  // 表格的最大高度
  maxHeight: [Number, String],
  // 已废弃，被 column-config.resizable 替换
  resizable: { type: Boolean, default: () => In().table.resizable },
  // 是否带有斑马纹
  stripe: { type: Boolean, default: () => In().table.stripe },
  // 是否带有边框
  border: { type: [Boolean, String], default: () => In().table.border },
  // 是否圆角边框
  round: { type: Boolean, default: () => In().table.round },
  // 表格的尺寸
  size: { type: String, default: () => In().table.size || In().size },
  // 列的宽度是否自撑开（可能会被废弃的参数，不要使用）
  fit: { type: Boolean, default: () => In().table.fit },
  // 表格是否加载中
  loading: Boolean,
  // 所有的列对其方式
  align: { type: String, default: () => In().table.align },
  // 所有的表头列的对齐方式
  headerAlign: { type: String, default: () => In().table.headerAlign },
  // 所有的表尾列的对齐方式
  footerAlign: { type: String, default: () => In().table.footerAlign },
  // 是否显示表头
  showHeader: { type: Boolean, default: () => In().table.showHeader },
  // （即将废弃）是否要高亮当前选中行
  highlightCurrentRow: { type: Boolean, default: () => In().table.highlightCurrentRow },
  // （即将废弃）鼠标移到行是否要高亮显示
  highlightHoverRow: { type: Boolean, default: () => In().table.highlightHoverRow },
  // （即将废弃）是否要高亮当前选中列
  highlightCurrentColumn: { type: Boolean, default: () => In().table.highlightCurrentColumn },
  // （即将废弃）鼠标移到列是否要高亮显示
  highlightHoverColumn: { type: Boolean, default: () => In().table.highlightHoverColumn },
  // （即将废弃）激活单元格编辑时是否高亮显示
  highlightCell: Boolean,
  // 是否显示表尾合计
  showFooter: Boolean,
  // 表尾数据
  footerData: Array,
  // 表尾合计的计算方法
  footerMethod: Function,
  // 给行附加 className
  rowClassName: [String, Function],
  // 给单元格附加 className
  cellClassName: [String, Function],
  // 给表头的行附加 className
  headerRowClassName: [String, Function],
  // 给表头的单元格附加 className
  headerCellClassName: [String, Function],
  // 给表尾的行附加 className
  footerRowClassName: [String, Function],
  // 给表尾的单元格附加 className
  footerCellClassName: [String, Function],
  // 给单元格附加样式
  cellStyle: [Object, Function],
  // 给表头单元格附加样式
  headerCellStyle: [Object, Function],
  // 给表尾单元格附加样式
  footerCellStyle: [Object, Function],
  // 给行附加样式
  rowStyle: [Object, Function],
  // 给表头行附加样式
  headerRowStyle: [Object, Function],
  // 给表尾行附加样式
  footerRowStyle: [Object, Function],
  // 合并指定单元格
  mergeCells: Array,
  // 合并指定的表尾
  mergeFooterItems: Array,
  // 自定义合并行或列的方法
  spanMethod: Function,
  // 表尾合并行或列
  footerSpanMethod: Function,
  // 设置所有内容过长时显示为省略号
  showOverflow: { type: [Boolean, String], default: () => In().table.showOverflow },
  // 设置表头所有内容过长时显示为省略号
  showHeaderOverflow: { type: [Boolean, String], default: () => In().table.showHeaderOverflow },
  // 设置表尾所有内容过长时显示为省略号
  showFooterOverflow: { type: [Boolean, String], default: () => In().table.showFooterOverflow },
  /** 高级属性 */
  // （即将废弃）columnKey 已废弃，被 column-config.useKey 替换
  columnKey: Boolean,
  // （即将废弃）rowKey 已废弃，被 row-config.useKey 替换
  rowKey: Boolean,
  // （即将废弃）rowId 已废弃，被 row-config.keyField 替换
  rowId: { type: String, default: () => In().table.rowId },
  zIndex: Number,
  emptyText: { type: String, default: () => In().table.emptyText },
  keepSource: { type: Boolean, default: () => In().table.keepSource },
  // 是否自动监听父容器变化去更新响应式表格宽高
  autoResize: { type: Boolean, default: () => In().table.autoResize },
  // 是否自动根据状态属性去更新响应式表格宽高
  syncResize: [Boolean, String, Number],
  // 响应式布局配置项
  resizeConfig: Object,
  // 列配置信息
  columnConfig: Object,
  // 行配置信息
  rowConfig: Object,
  // 列调整配置项
  resizableConfig: Object,
  // 序号配置项
  seqConfig: Object,
  // 排序配置项
  sortConfig: Object,
  // 筛选配置项
  filterConfig: Object,
  // 单选框配置
  radioConfig: Object,
  // 复选框配置项
  checkboxConfig: Object,
  // tooltip 配置项
  tooltipConfig: Object,
  // 导出配置项
  exportConfig: Object,
  // 导入配置项
  importConfig: Object,
  // 打印配置项
  printConfig: Object,
  // 展开行配置项
  expandConfig: Object,
  // 树形结构配置项
  treeConfig: Object,
  // 快捷菜单配置项
  menuConfig: Object,
  // 鼠标配置项
  mouseConfig: Object,
  // 区域配置项
  areaConfig: Object,
  // 按键配置项
  keyboardConfig: Object,
  // 复制粘/贴配置项
  clipConfig: Object,
  // 查找/替换配置项
  fnrConfig: Object,
  // 编辑配置项
  editConfig: Object,
  // 校验配置项
  validConfig: Object,
  // 校验规则配置项
  editRules: Object,
  // 加载中配置项
  loadingConfig: Object,
  // 空内容渲染配置项
  emptyRender: Object,
  // 自定义列配置项
  customConfig: Object,
  // 横向虚拟滚动配置项
  scrollX: Object,
  // 纵向虚拟滚动配置项
  scrollY: Object,
  // （即将废弃）优化相关
  animat: { type: Boolean, default: () => In().table.animat },
  // （可能会被废弃的参数，不要使用）
  delayHover: { type: Number, default: () => In().table.delayHover },
  // 额外的参数
  params: Object
}, Td = [
  "update:data",
  "keydown-start",
  "keydown",
  "keydown-end",
  "paste",
  "copy",
  "cut",
  "current-change",
  "radio-change",
  "checkbox-change",
  "checkbox-all",
  "checkbox-range-start",
  "checkbox-range-change",
  "checkbox-range-end",
  "checkbox-range-select",
  "cell-click",
  "cell-dblclick",
  "cell-menu",
  "cell-mouseenter",
  "cell-mouseleave",
  "cell-selected",
  "cell-delete-value",
  "cell-backspace-value",
  "header-cell-click",
  "header-cell-dblclick",
  "header-cell-menu",
  "footer-cell-click",
  "footer-cell-dblclick",
  "footer-cell-menu",
  "clear-merge",
  "sort-change",
  "clear-sort",
  "filter-change",
  "filter-visible",
  "clear-filter",
  "resizable-change",
  "toggle-row-expand",
  "toggle-tree-expand",
  "menu-click",
  "edit-closed",
  "edit-actived",
  "edit-activated",
  "edit-disabled",
  "valid-error",
  "scroll",
  "custom",
  "change-fnr",
  "open-fnr",
  "show-fnr",
  "hide-fnr",
  "fnr-change",
  "fnr-find",
  "fnr-find-all",
  "fnr-replace",
  "fnr-replace-all",
  "cell-area-copy",
  "cell-area-cut",
  "cell-area-paste",
  "cell-area-merge",
  "clear-cell-area-selection",
  "clear-cell-area-merge",
  "header-cell-area-selection",
  "cell-area-selection-invalid",
  "cell-area-selection-start",
  "cell-area-selection-drag",
  "cell-area-selection-end",
  "cell-area-extension-start",
  "cell-area-extension-drag",
  "cell-area-extension-end",
  "cell-area-selection-all-start",
  "cell-area-selection-all-end",
  "cell-area-arrows-start",
  "cell-area-arrows-end",
  "active-cell-change-start",
  "active-cell-change-end"
], { getI18n: dn, getIcon: Yn } = ue, z1 = tt({
  name: "TableCustomPanel",
  props: {
    customStore: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = ue.getComponent("VxeModal"), n = ue.getComponent("VxeDrawer"), o = ue.getComponent("VxeButton"), l = ue.getComponent("VxeInput"), a = ue.getComponent("VxeTooltip"), c = ue.getComponent("VxeRadioGroup"), p = ut("$xeTable", {}), { reactData: d } = p, { computeCustomOpts: s, computeColumnOpts: f, computeIsMaxFixedColumn: g } = p.getComputeMaps(), D = Ie(), b = Ie(), x = Ie(), S = Ie();
    let y;
    const h = (M) => {
      const { customStore: H } = e;
      H.activeWrapper = !0, p.customOpenEvent(M);
    }, O = (M) => {
      const { customStore: H } = e;
      H.activeWrapper = !1, setTimeout(() => {
        !H.activeBtn && !H.activeWrapper && p.customCloseEvent(M);
      }, 300);
    }, E = (M) => {
      const { customColumnList: H } = d, ne = s.value, { allowVisible: de, allowSort: ve, allowFixed: Oe, allowResizable: Fe } = ne;
      i.eachTree(H, (R, k, U, _, K) => {
        if (!K) {
          if (ve) {
            const Z = k + 1;
            R.renderSortNumber = Z;
          }
          Oe && (R.fixed = R.renderFixed);
        }
        Fe && R.renderVisible && (!R.children || R.children.length) && R.renderResizeWidth !== R.renderWidth && (R.resizeWidth = R.renderResizeWidth, R.renderWidth = R.renderResizeWidth), de && (R.visible = R.renderVisible);
      }), p.closeCustom(), p.emitCustomEvent("confirm", M), p.saveCustomStore("confirm");
    }, T = (M) => {
      const { customStore: H } = e, { customColumnList: ne } = d, { oldSortMaps: de, oldFixedMaps: ve, oldVisibleMaps: Oe } = H, Fe = s.value, { allowVisible: R, allowSort: k, allowFixed: U, allowResizable: _ } = Fe;
      i.eachTree(ne, (K) => {
        const Z = K.getKey(), ke = !!Oe[Z], ye = ve[Z] || "";
        R && (K.renderVisible = ke, K.visible = ke), U && (K.renderFixed = ye, K.fixed = ye), k && (K.renderSortNumber = de[Z] || 0), _ && (K.renderResizeWidth = K.renderWidth);
      }, { children: "children" }), p.closeCustom(), p.emitCustomEvent("cancel", M);
    }, W = (M) => {
      p.resetColumn(!0), p.closeCustom(), p.emitCustomEvent("reset", M);
    }, $ = (M) => {
      ue.modal ? ue.modal.confirm({
        content: dn("vxe.custom.cstmConfirmRestore"),
        className: "vxe-table--ignore-clear",
        escClosable: !0
      }).then((H) => {
        H === "confirm" && W(M);
      }) : W(M);
    }, I = (M) => {
      const { customColumnList: H } = d, ne = i.findTree(H, (de) => de === M);
      if (ne && ne.parent) {
        const { parent: de } = ne;
        de.children && de.children.length && (de.renderVisible = de.children.every((ve) => ve.renderVisible), de.halfVisible = !de.renderVisible && de.children.some((ve) => ve.renderVisible || ve.halfVisible), I(de));
      }
    }, z = (M) => {
      const H = !M.renderVisible, ne = s.value;
      i.eachTree([M], (de) => {
        de.renderVisible = H, de.halfVisible = !1;
      }), I(M), ne.immediate && (p.handleCustom(), p.saveCustomStore("update:visible")), p.checkCustomStatus();
    }, te = (M, H) => {
      const ne = g.value;
      M.renderFixed === H ? M.renderFixed = "" : (!ne || M.renderFixed) && (M.renderFixed = H);
    }, Ce = () => {
      const { customStore: M } = e, { customColumnList: H } = d, ne = s.value, { checkMethod: de } = ne, ve = !M.isAll;
      i.eachTree(H, (Oe) => {
        (!de || de({ column: Oe })) && (Oe.renderVisible = ve, Oe.halfVisible = !1);
      }), M.isAll = ve, p.checkCustomStatus();
    }, N = (M) => {
      const de = M.currentTarget.parentNode.parentNode, ve = de.getAttribute("colid"), Oe = p.getColumnById(ve);
      de.draggable = !0, S.value = Oe, vr(de, "active--drag-origin");
    }, F = (M) => {
      const de = M.currentTarget.parentNode.parentNode, ve = x.value;
      de.draggable = !1, S.value = null, Oo(de, "active--drag-origin"), ve && (ve.style.display = "");
    }, j = (M) => {
      const H = new Image();
      M.dataTransfer && M.dataTransfer.setDragImage(H, 0, 0);
    }, ee = (M) => {
      const { customColumnList: H } = d, ne = M.currentTarget, de = x.value;
      if (y) {
        if (y !== ne) {
          const ve = y.getAttribute("drag-pos"), Oe = ne.getAttribute("colid"), Fe = p.getColumnById(Oe);
          if (!Fe)
            return;
          const R = i.findIndexOf(H, (K) => K.id === Fe.id), k = y.getAttribute("colid"), U = p.getColumnById(k);
          if (!U)
            return;
          H.splice(R, 1);
          const _ = i.findIndexOf(H, (K) => K.id === U.id);
          H.splice(_ + (ve === "bottom" ? 1 : 0), 0, Fe);
        }
        y.draggable = !1, y.removeAttribute("drag-pos"), Oo(y, "active--drag-target");
      }
      S.value = null, ne.draggable = !1, ne.removeAttribute("drag-pos"), de && (de.style.display = ""), Oo(ne, "active--drag-target"), Oo(ne, "active--drag-origin");
    }, oe = (M) => {
      const H = M.currentTarget;
      y !== H && Oo(y, "active--drag-target");
      const ne = H.getAttribute("colid"), de = p.getColumnById(ne);
      if (de && de.level === 1) {
        M.preventDefault();
        const Oe = M.clientY - H.getBoundingClientRect().y < H.clientHeight / 2 ? "top" : "bottom";
        vr(H, "active--drag-target"), H.setAttribute("drag-pos", Oe), y = H;
      }
      re(M);
    }, re = (M) => {
      const H = x.value, ne = b.value;
      if (ne && H) {
        const de = ne.parentNode, ve = de.getBoundingClientRect();
        H.style.display = "block", H.style.top = `${Math.min(de.clientHeight - de.scrollTop - H.clientHeight, M.clientY - ve.y)}px`, H.style.left = `${Math.min(de.clientWidth - de.scrollLeft - H.clientWidth - 16, M.clientX - ve.x)}px`;
      }
    }, G = () => {
      const { customStore: M } = e, { customColumnList: H } = d, ne = s.value, { maxHeight: de } = M, { checkMethod: ve, visibleMethod: Oe, allowVisible: Fe, allowSort: R, allowFixed: k, trigger: U, placement: _ } = ne, K = g.value, Z = [], ke = {};
      U === "hover" && (ke.onMouseenter = h, ke.onMouseleave = O), i.eachTree(H, (xe, Le, je, Ye, fe) => {
        if (Oe ? Oe({ column: xe }) : !0) {
          const $e = xe.renderVisible, Ve = xe.halfVisible, ce = xe.children && xe.children.length, We = An(xe.getTitle(), 1), Ge = ve ? !ve({ column: xe }) : !1;
          Z.push(r("li", {
            key: xe.id,
            colid: xe.id,
            class: ["vxe-table-custom--option", `level--${xe.level}`, {
              "is--group": ce
            }],
            onDragstart: j,
            onDragend: ee,
            onDragover: oe
          }, [
            Fe ? r("div", {
              class: ["vxe-table-custom--checkbox-option", {
                "is--checked": $e,
                "is--indeterminate": Ve,
                "is--disabled": Ge
              }],
              title: dn("vxe.custom.setting.colVisible"),
              onClick: () => {
                Ge || z(xe);
              }
            }, [
              r("span", {
                class: ["vxe-checkbox--icon", Ve ? Yn().TABLE_CHECKBOX_INDETERMINATE : $e ? Yn().TABLE_CHECKBOX_CHECKED : Yn().TABLE_CHECKBOX_UNCHECKED]
              })
            ]) : Me(),
            R && xe.level === 1 ? r("div", {
              class: "vxe-table-custom--sort-option"
            }, [
              r("span", {
                class: "vxe-table-custom--sort-btn",
                title: dn("vxe.custom.setting.sortHelpTip"),
                onMousedown: N,
                onMouseup: F
              }, [
                r("i", {
                  class: Yn().TABLE_CUSTOM_SORT
                })
              ])
            ]) : Me(),
            r("div", {
              class: "vxe-table-custom--checkbox-label",
              title: We
            }, We),
            !fe && k ? r("div", {
              class: "vxe-table-custom--fixed-option"
            }, [
              r("span", {
                class: ["vxe-table-custom--fixed-left-option", xe.renderFixed === "left" ? Yn().TOOLBAR_TOOLS_FIXED_LEFT_ACTIVE : Yn().TOOLBAR_TOOLS_FIXED_LEFT, {
                  "is--checked": xe.renderFixed === "left",
                  "is--disabled": K && !xe.renderFixed
                }],
                title: dn(xe.renderFixed === "left" ? "vxe.toolbar.cancelFixed" : "vxe.toolbar.fixedLeft"),
                onClick: () => {
                  te(xe, "left");
                }
              }),
              r("span", {
                class: ["vxe-table-custom--fixed-right-option", xe.renderFixed === "right" ? Yn().TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVE : Yn().TOOLBAR_TOOLS_FIXED_RIGHT, {
                  "is--checked": xe.renderFixed === "right",
                  "is--disabled": K && !xe.renderFixed
                }],
                title: dn(xe.renderFixed === "right" ? "vxe.toolbar.cancelFixed" : "vxe.toolbar.fixedRight"),
                onClick: () => {
                  te(xe, "right");
                }
              })
            ]) : Me()
          ]));
        }
      });
      const ye = M.isAll, Ee = M.isIndeterminate;
      return r("div", {
        ref: D,
        key: "simple",
        class: ["vxe-table-custom-wrapper", `placement--${_}`, {
          "is--active": M.visible
        }],
        style: de && !["left", "right"].includes(_) ? {
          maxHeight: `${de}px`
        } : {}
      }, M.visible ? [
        r("ul", {
          class: "vxe-table-custom--header"
        }, [
          r("li", {
            class: "vxe-table-custom--option"
          }, [
            Fe ? r("div", {
              class: ["vxe-table-custom--checkbox-option", {
                "is--checked": ye,
                "is--indeterminate": Ee
              }],
              title: dn("vxe.table.allTitle"),
              onClick: Ce
            }, [
              r("span", {
                class: ["vxe-checkbox--icon", Ee ? Yn().TABLE_CHECKBOX_INDETERMINATE : ye ? Yn().TABLE_CHECKBOX_CHECKED : Yn().TABLE_CHECKBOX_UNCHECKED]
              }),
              r("span", {
                class: "vxe-checkbox--label"
              }, dn("vxe.toolbar.customAll"))
            ]) : r("span", {
              class: "vxe-checkbox--label"
            }, dn("vxe.table.customTitle"))
          ])
        ]),
        r("div", {
          ref: b,
          class: "vxe-table-custom--list-wrapper"
        }, [
          r(fa, Object.assign({ class: "vxe-table-custom--body", name: "vxe-table-custom--list", tag: "ul" }, ke), {
            default: () => Z
          }),
          r("div", {
            ref: x,
            class: "vxe-table-custom-popup--drag-hint"
          }, dn("vxe.custom.cstmDragTarget", [S.value ? S.value.getTitle() : ""]))
        ]),
        ne.showFooter ? r("div", {
          class: "vxe-table-custom--footer"
        }, [
          r("button", {
            class: "btn--reset",
            onClick: $
          }, ne.resetButtonText || dn("vxe.table.customRestore")),
          ne.immediate ? Me() : r("button", {
            class: "btn--cancel",
            onClick: T
          }, ne.resetButtonText || dn("vxe.table.customCancel")),
          r("button", {
            class: "btn--confirm",
            onClick: E
          }, ne.confirmButtonText || dn("vxe.table.customConfirm"))
        ]) : null
      ] : []);
    }, J = () => {
      const { customStore: M } = e, { customColumnList: H } = d, ne = s.value, { modalOptions: de, drawerOptions: ve, allowVisible: Oe, allowSort: Fe, allowFixed: R, allowResizable: k, checkMethod: U, visibleMethod: _ } = ne, K = f.value, { maxFixedSize: Z } = K, { mode: ke } = ne, ye = Object.assign({}, de), Ee = Object.assign({}, ve), xe = g.value, Le = [];
      i.eachTree(H, (ge, $e, Ve, ce, We) => {
        if (_ ? _({ column: ge }) : !0) {
          const Ze = ge.renderVisible, pe = ge.halfVisible, Y = An(ge.getTitle(), 1), le = ge.children && ge.children.length, he = U ? !U({ column: ge }) : !1;
          Le.push(r("tr", {
            key: ge.id,
            colid: ge.id,
            class: [`vxe-table-custom-popup--row level--${ge.level}`, {
              "is--group": le
            }],
            onDragstart: j,
            onDragend: ee,
            onDragover: oe
          }, [
            Oe ? r("td", {
              class: "vxe-table-custom-popup--column-item col--visible"
            }, [
              r("div", {
                class: ["vxe-table-custom--checkbox-option", {
                  "is--checked": Ze,
                  "is--indeterminate": pe,
                  "is--disabled": he
                }],
                title: dn("vxe.custom.setting.colVisible"),
                onClick: () => {
                  he || z(ge);
                }
              }, [
                r("span", {
                  class: ["vxe-checkbox--icon", pe ? Yn().TABLE_CHECKBOX_INDETERMINATE : Ze ? Yn().TABLE_CHECKBOX_CHECKED : Yn().TABLE_CHECKBOX_UNCHECKED]
                })
              ])
            ]) : Me(),
            Fe ? r("td", {
              class: "vxe-table-custom-popup--column-item col--sort"
            }, [
              ge.level === 1 ? r("span", {
                class: "vxe-table-custom-popup--column-sort-btn",
                title: dn("vxe.custom.setting.sortHelpTip"),
                onMousedown: N,
                onMouseup: F
              }, [
                r("i", {
                  class: Yn().TABLE_CUSTOM_SORT
                })
              ]) : r("span", "-")
            ]) : Me(),
            r("td", {
              class: "vxe-table-custom-popup--column-item col--name"
            }, [
              r("div", {
                class: "vxe-table-custom-popup--name",
                title: Y
              }, Y)
            ]),
            k ? r("td", {
              class: "vxe-table-custom-popup--column-item col--resizable"
            }, [
              !Ze || ge.children && ge.children.length ? r("span", "-") : l ? r(l, {
                type: "integer",
                min: 40,
                modelValue: ge.renderResizeWidth,
                "onUpdate:modelValue"(He) {
                  ge.renderResizeWidth = Math.max(40, Number(He));
                }
              }) : Me()
            ]) : Me(),
            R ? r("td", {
              class: "vxe-table-custom-popup--column-item col--fixed"
            }, [
              We ? r("span", "-") : c ? r(c, {
                modelValue: ge.renderFixed || "",
                type: "button",
                size: "mini",
                options: [
                  { label: dn("vxe.custom.setting.fixedLeft"), value: "left", disabled: xe },
                  { label: dn("vxe.custom.setting.fixedUnset"), value: "" },
                  { label: dn("vxe.custom.setting.fixedRight"), value: "right", disabled: xe }
                ],
                "onUpdate:modelValue"(He) {
                  ge.renderFixed = He;
                }
                // onChange () {
                //   changePopupFixedOption(column)
                // }
              }) : Me()
            ]) : Me()
          ]));
        }
      });
      const je = M.isAll, Ye = M.isIndeterminate, fe = {
        default: () => r("div", {
          ref: b,
          class: "vxe-table-custom-popup--body"
        }, [
          r("div", {
            class: "vxe-table-custom-popup--table-wrapper"
          }, [
            r("table", {}, [
              r("colgroup", {}, [
                Oe ? r("col", {
                  style: {
                    width: "80px"
                  }
                }) : Me(),
                Fe ? r("col", {
                  style: {
                    width: "80px"
                  }
                }) : Me(),
                r("col", {
                  style: {
                    minWidth: "120px"
                  }
                }),
                k ? r("col", {
                  style: {
                    width: "140px"
                  }
                }) : Me(),
                R ? r("col", {
                  style: {
                    width: "200px"
                  }
                }) : Me()
              ]),
              r("thead", {}, [
                r("tr", {}, [
                  Oe ? r("th", {}, [
                    r("div", {
                      class: ["vxe-table-custom--checkbox-option", {
                        "is--checked": je,
                        "is--indeterminate": Ye
                      }],
                      title: dn("vxe.table.allTitle"),
                      onClick: Ce
                    }, [
                      r("span", {
                        class: ["vxe-checkbox--icon", Ye ? Yn().TABLE_CHECKBOX_INDETERMINATE : je ? Yn().TABLE_CHECKBOX_CHECKED : Yn().TABLE_CHECKBOX_UNCHECKED]
                      }),
                      r("span", {
                        class: "vxe-checkbox--label"
                      }, dn("vxe.toolbar.customAll"))
                    ])
                  ]) : Me(),
                  Fe ? r("th", {}, [
                    r("span", {
                      class: "vxe-table-custom-popup--table-sort-help-title"
                    }, dn("vxe.custom.setting.colSort")),
                    a ? r(a, {
                      enterable: !0,
                      content: dn("vxe.custom.setting.sortHelpTip")
                    }, {
                      default: () => r("i", {
                        class: "vxe-table-custom-popup--table-sort-help-icon vxe-icon-question-circle-fill"
                      })
                    }) : Me()
                  ]) : Me(),
                  r("th", {}, dn("vxe.custom.setting.colTitle")),
                  k ? r("th", {}, dn("vxe.custom.setting.colResizable")) : Me(),
                  R ? r("th", {}, dn(`vxe.custom.setting.${Z ? "colFixedMax" : "colFixed"}`, [Z])) : Me()
                ])
              ]),
              r(fa, {
                class: "vxe-table-custom--body",
                tag: "tbody",
                name: "vxe-table-custom--list"
              }, {
                default: () => Le
              })
            ])
          ]),
          r("div", {
            ref: x,
            class: "vxe-table-custom-popup--drag-hint"
          }, dn("vxe.custom.cstmDragTarget", [S.value ? S.value.getTitle() : ""]))
        ]),
        footer: () => r("div", {
          class: "vxe-table-custom-popup--footer"
        }, [
          o ? r(o, {
            content: ne.resetButtonText || dn("vxe.custom.cstmRestore"),
            onClick: $
          }) : Me(),
          o ? r(o, {
            content: ne.resetButtonText || dn("vxe.custom.cstmCancel"),
            onClick: T
          }) : Me(),
          o ? r(o, {
            status: "primary",
            content: ne.confirmButtonText || dn("vxe.custom.cstmConfirm"),
            onClick: E
          }) : Me()
        ])
      };
      return ke === "drawer" ? n ? r(n, {
        key: "drawer",
        className: ["vxe-table-custom-drawer-wrapper", "vxe-table--ignore-clear", Ee.className || ""].join(" "),
        modelValue: M.visible,
        title: Ee.title || dn("vxe.custom.cstmTitle"),
        width: Ee.width || Math.min(880, document.documentElement.clientWidth),
        position: Ee.position,
        escClosable: !!Ee.escClosable,
        destroyOnClose: !0,
        showFooter: !0,
        "onUpdate:modelValue"(ge) {
          M.visible = ge;
        }
      }, fe) : Me() : t ? r(t, {
        key: "modal",
        className: ["vxe-table-custom-modal-wrapper", "vxe-table--ignore-clear", ye.className || ""].join(" "),
        modelValue: M.visible,
        title: ye.title || dn("vxe.custom.cstmTitle"),
        width: ye.width || Math.min(880, document.documentElement.clientWidth),
        minWidth: ye.minWidth || 700,
        height: ye.height || Math.min(680, document.documentElement.clientHeight),
        minHeight: ye.minHeight || 400,
        showZoom: ye.showZoom,
        showMaximize: ye.showMaximize,
        showMinimize: ye.showMinimize,
        mask: ye.mask,
        lockView: ye.lockView,
        resize: ye.resize,
        escClosable: !!ye.escClosable,
        destroyOnClose: !0,
        showFooter: !0,
        "onUpdate:modelValue"(ge) {
          M.visible = ge;
        }
      }, fe) : Me();
    }, A = () => {
      const M = s.value;
      return ["modal", "drawer", "popup"].includes(`${M.mode}`) ? J() : G();
    };
    return process.env.NODE_ENV === "development" && ae(() => {
      t || Et("vxe.error.reqComp", ["vxe-modal"]), o || Et("vxe.error.reqComp", ["vxe-button"]), l || Et("vxe.error.reqComp", ["vxe-input"]), a || Et("vxe.error.reqComp", ["vxe-tooltip"]), c || Et("vxe.error.reqComp", ["vxe-radio-group"]);
    }), A;
  }
}), { getI18n: oa, getIcon: fi, renderer: jp } = ue, j1 = tt({
  name: "VxeTableFilterPanel",
  props: {
    filterStore: Object
  },
  setup(e) {
    const t = ut("$xeTable", {}), { reactData: n, internalData: o, getComputeMaps: l } = t, { computeFilterOpts: a } = l(), c = Q(() => {
      const { filterStore: O } = e;
      return O && O.options.some((E) => E.checked);
    }), p = (O, E) => {
      const { filterStore: T } = e;
      T.options.forEach((W) => {
        W._checked = E, W.checked = E;
      }), T.isAllSelected = E, T.isIndeterminate = !1;
    }, d = (O) => {
      const { filterStore: E } = e;
      E.options.forEach((T) => {
        T.checked = T._checked;
      }), t.confirmFilterEvent(O);
    }, s = (O, E, T) => {
      const { filterStore: W } = e;
      W.options.forEach(($) => {
        $._checked = !1;
      }), T._checked = E, t.checkFilterOptions(), d(O);
    }, f = (O) => {
      const { filterStore: E } = e;
      t.handleClearFilter(E.column), t.confirmFilterEvent(O);
    }, g = (O, E, T) => {
      T._checked = E, t.checkFilterOptions();
    }, D = (O, E, T) => {
      const { filterStore: W } = e;
      W.multiple ? g(O, E, T) : s(O, E, T);
    }, b = (O, E) => {
      const { filterStore: T } = e;
      T.multiple ? p(O, E) : f(O);
    }, x = {
      changeRadioOption: s,
      changeMultipleOption: g,
      changeAllOption: b,
      changeOption: D,
      confirmFilter: d,
      resetFilter: f
    }, S = (O, E) => {
      const { filterStore: T } = e, { column: W, multiple: $, maxHeight: I } = T, { slots: z } = W, te = z ? z.filter : null, Ce = Object.assign({}, o._currFilterParams, { $panel: x, $table: t }), N = E ? E.renderTableFilter || E.renderFilter : null;
      if (te)
        return [
          r("div", {
            class: "vxe-table--filter-template"
          }, t.callSlot(te, Ce))
        ];
      if (N)
        return [
          r("div", {
            class: "vxe-table--filter-template"
          }, uo(N(O, Ce)))
        ];
      const F = $ ? T.isAllSelected : !T.options.some((ee) => ee._checked), j = $ && T.isIndeterminate;
      return [
        r("ul", {
          class: "vxe-table--filter-header"
        }, [
          r("li", {
            class: ["vxe-table--filter-option", {
              "is--checked": F,
              "is--indeterminate": j
            }],
            title: oa($ ? "vxe.table.allTitle" : "vxe.table.allFilter"),
            onClick: (ee) => {
              b(ee, !T.isAllSelected);
            }
          }, ($ ? [
            r("span", {
              class: ["vxe-checkbox--icon", j ? fi().TABLE_CHECKBOX_INDETERMINATE : F ? fi().TABLE_CHECKBOX_CHECKED : fi().TABLE_CHECKBOX_UNCHECKED]
            })
          ] : []).concat([
            r("span", {
              class: "vxe-checkbox--label"
            }, oa("vxe.table.allFilter"))
          ]))
        ]),
        r("ul", {
          class: "vxe-table--filter-body",
          style: I ? {
            maxHeight: `${I}px`
          } : {}
        }, T.options.map((ee) => {
          const oe = ee._checked;
          return r("li", {
            class: ["vxe-table--filter-option", {
              "is--checked": ee._checked
            }],
            title: ee.label,
            onClick: (re) => {
              D(re, !ee._checked, ee);
            }
          }, ($ ? [
            r("span", {
              class: ["vxe-checkbox--icon", oe ? fi().TABLE_CHECKBOX_CHECKED : fi().TABLE_CHECKBOX_UNCHECKED]
            })
          ] : []).concat([
            r("span", {
              class: "vxe-checkbox--label"
            }, An(ee.label, 1))
          ]));
        }))
      ];
    }, y = () => {
      const { filterStore: O } = e, { column: E, multiple: T } = O, W = a.value, $ = c.value, { filterRender: I } = E, z = Lt(I) ? jp.get(I.name) : null, te = !$ && !O.isAllSelected && !O.isIndeterminate;
      return T && (!z || !(z.showTableFilterFooter === !1 || z.showFilterFooter === !1)) ? [
        r("div", {
          class: "vxe-table--filter-footer"
        }, [
          r("button", {
            class: {
              "is--disabled": te
            },
            disabled: te,
            onClick: d
          }, W.confirmButtonText || oa("vxe.table.confirmFilter")),
          r("button", {
            onClick: f
          }, W.resetButtonText || oa("vxe.table.resetFilter"))
        ])
      ] : [];
    };
    return () => {
      const { filterStore: O } = e, { initStore: E } = n, { column: T } = O, W = T ? T.filterRender : null, $ = Lt(W) ? jp.get(W.name) : null, I = $ ? $.tableFilterClassName || $.filterClassName : "", z = Object.assign({}, o._currFilterParams, { $panel: x, $table: t });
      return r("div", {
        class: [
          "vxe-table--filter-wrapper",
          "filter--prevent-default",
          Wr(I, z),
          {
            "is--animat": t.props.animat,
            "is--multiple": O.multiple,
            "is--active": O.visible
          }
        ],
        style: O.style
      }, E.filter ? S(W, $).concat(y()) : []);
    };
  }
}), { getI18n: ds, getIcon: q1 } = ue, G1 = tt({
  name: "VxeTableImportPanel",
  props: {
    defaultOptions: Object,
    storeData: Object
  },
  setup(e) {
    const t = ue.getComponent("VxeModal"), n = ue.getComponent("VxeButton"), o = ue.getComponent("VxeSelect"), l = ut("$xeTable", {}), { computeImportOpts: a } = l.getComputeMaps(), c = Ot({
      loading: !1
    }), p = Ie(), d = Q(() => {
      const { storeData: h } = e;
      return `${h.filename}.${h.type}`;
    }), s = Q(() => {
      const { storeData: h } = e;
      return h.file && h.type;
    }), f = Q(() => {
      const { storeData: h } = e, { type: O, typeList: E } = h;
      if (O) {
        const T = i.find(E, (W) => O === W.value);
        return T ? T.label : "*.*";
      }
      return `*.${E.map((T) => T.value).join(", *.")}`;
    }), g = () => {
      const { storeData: h } = e;
      Object.assign(h, {
        filename: "",
        sheetName: "",
        type: ""
      });
    }, D = () => {
      const { storeData: h, defaultOptions: O } = e;
      l.readFile(O).then((E) => {
        const { file: T } = E;
        Object.assign(h, uh(T), { file: T });
      }).catch((E) => E);
    }, b = () => {
      ae(() => {
        const h = p.value;
        h && h.focus();
      });
    }, x = () => {
      const { storeData: h } = e;
      h.visible = !1;
    }, S = () => {
      const { storeData: h, defaultOptions: O } = e, E = a.value;
      c.loading = !0, l.importByFile(h.file, Object.assign({}, E, O)).then(() => {
        c.loading = !1, h.visible = !1;
      }).catch(() => {
        c.loading = !1;
      });
    }, y = () => {
      const { defaultOptions: h, storeData: O } = e, E = d.value, T = s.value, W = f.value;
      return t ? r(t, {
        modelValue: O.visible,
        title: ds("vxe.import.impTitle"),
        className: "vxe-table-import-popup-wrapper",
        width: 520,
        mask: !0,
        lockView: !0,
        showFooter: !1,
        escClosable: !0,
        maskClosable: !0,
        loading: c.loading,
        "onUpdate:modelValue"($) {
          O.visible = $;
        },
        onShow: b
      }, {
        default: () => r("div", {
          class: "vxe-export--panel"
        }, [
          r("table", {
            cellspacing: 0,
            cellpadding: 0,
            border: 0
          }, [
            r("tbody", [
              r("tr", [
                r("td", ds("vxe.import.impFile")),
                r("td", [
                  T ? r("div", {
                    class: "vxe-import-selected--file",
                    title: E
                  }, [
                    r("span", E),
                    r("i", {
                      class: q1().INPUT_CLEAR,
                      onClick: g
                    })
                  ]) : r("button", {
                    ref: p,
                    class: "vxe-import-select--file",
                    onClick: D
                  }, ds("vxe.import.impSelect"))
                ])
              ]),
              r("tr", [
                r("td", ds("vxe.import.impType")),
                r("td", W)
              ]),
              r("tr", [
                r("td", ds("vxe.import.impMode")),
                r("td", [
                  o ? r(o, {
                    modelValue: h.mode,
                    options: O.modeList,
                    "onUpdate:modelValue"($) {
                      h.mode = $;
                    }
                  }) : Me()
                ])
              ])
            ])
          ]),
          r("div", {
            class: "vxe-export--panel-btns"
          }, [
            n ? r(n, {
              content: ds("vxe.import.impCancel"),
              onClick: x
            }) : Me(),
            n ? r(n, {
              status: "primary",
              disabled: !T,
              content: ds("vxe.import.impConfirm"),
              onClick: S
            }) : Me()
          ])
        ])
      }) : Me();
    };
    return process.env.NODE_ENV === "development" && ae(() => {
      t || Et("vxe.error.reqComp", ["vxe-modal"]), n || Et("vxe.error.reqComp", ["vxe-button"]), o || Et("vxe.error.reqComp", ["vxe-select"]);
    }), y;
  }
}), { getI18n: vn, getIcon: Us } = ue, U1 = tt({
  name: "VxeTableExportPanel",
  props: {
    defaultOptions: Object,
    storeData: Object
  },
  setup(e) {
    const t = ue.getComponent("VxeModal"), n = ue.getComponent("VxeButton"), o = ue.getComponent("VxeSelect"), l = ue.getComponent("VxeInput"), a = ue.getComponent("VxeCheckbox"), c = ut("$xeTable", {}), { computeExportOpts: p, computePrintOpts: d } = c.getComputeMaps(), s = Ot({
      isAll: !1,
      isIndeterminate: !1,
      loading: !1
    }), f = Ie(), g = Ie(), D = Ie(), b = Q(() => {
      const { storeData: F } = e;
      return F.columns.every((j) => j.checked);
    }), x = Q(() => {
      const { defaultOptions: F } = e;
      return ["html", "xml", "xlsx", "pdf"].indexOf(F.type) > -1;
    }), S = Q(() => {
      const { storeData: F, defaultOptions: j } = e;
      return !j.original && j.mode === "current" && (F.isPrint || ["html", "xlsx"].indexOf(j.type) > -1);
    }), y = Q(() => {
      const { defaultOptions: F } = e;
      return !F.original && ["xlsx"].indexOf(F.type) > -1;
    }), h = (F) => {
      const { storeData: j } = e, ee = i.findTree(j.columns, (oe) => oe === F);
      if (ee && ee.parent) {
        const { parent: oe } = ee;
        oe.children && oe.children.length && (oe.checked = oe.children.every((re) => re.checked), oe.halfChecked = !oe.checked && oe.children.some((re) => re.checked || re.halfChecked), h(oe));
      }
    }, O = () => {
      const { storeData: F } = e, j = F.columns;
      s.isAll = j.every((ee) => ee.disabled || ee.checked), s.isIndeterminate = !s.isAll && j.some((ee) => !ee.disabled && (ee.checked || ee.halfChecked));
    }, E = (F) => {
      const j = !F.checked;
      i.eachTree([F], (ee) => {
        ee.checked = j, ee.halfChecked = !1;
      }), h(F), O();
    }, T = () => {
      const { storeData: F } = e, j = !s.isAll;
      i.eachTree(F.columns, (ee) => {
        ee.disabled || (ee.checked = j, ee.halfChecked = !1);
      }), s.isAll = j, O();
    }, W = () => {
      ae(() => {
        const F = g.value, j = D.value, ee = f.value, oe = F || j || ee;
        oe && oe.focus();
      }), O();
    }, $ = () => {
      const { storeData: F, defaultOptions: j } = e, { hasMerge: ee, columns: oe } = F, re = b.value, G = S.value, J = i.searchTree(oe, (A) => A.checked, { children: "children", mapChildren: "childNodes", original: !0 });
      return Object.assign({}, j, {
        columns: J,
        isMerge: ee && G && re ? j.isMerge : !1
      });
    }, I = () => {
      const { storeData: F } = e, j = d.value;
      F.visible = !1, c.print(Object.assign({}, j, $()));
    }, z = () => {
      const { storeData: F } = e, j = p.value;
      s.loading = !0, c.exportData(Object.assign({}, j, $())).then(() => {
        s.loading = !1, F.visible = !1;
      }).catch(() => {
        s.loading = !1;
      });
    }, te = () => {
      const { storeData: F } = e;
      F.visible = !1;
    }, Ce = () => {
      const { storeData: F } = e;
      F.isPrint ? I() : z();
    }, N = () => {
      const { defaultOptions: F, storeData: j } = e, { isAll: ee, isIndeterminate: oe } = s, { hasTree: re, hasMerge: G, isPrint: J, hasColgroup: A } = j, { isHeader: M } = F, H = [], ne = b.value, de = x.value, ve = S.value, Oe = y.value;
      return i.eachTree(j.columns, (Fe) => {
        const R = An(Fe.getTitle(), 1), k = Fe.children && Fe.children.length, U = Fe.checked, _ = Fe.halfChecked;
        H.push(r("li", {
          class: ["vxe-export--panel-column-option", `level--${Fe.level}`, {
            "is--group": k,
            "is--checked": U,
            "is--indeterminate": _,
            "is--disabled": Fe.disabled
          }],
          title: R,
          onClick: () => {
            Fe.disabled || E(Fe);
          }
        }, [
          r("span", {
            class: ["vxe-checkbox--icon", _ ? Us().TABLE_CHECKBOX_INDETERMINATE : U ? Us().TABLE_CHECKBOX_CHECKED : Us().TABLE_CHECKBOX_UNCHECKED]
          }),
          r("span", {
            class: "vxe-checkbox--label"
          }, R)
        ]));
      }), t ? r(t, {
        modelValue: j.visible,
        title: vn(J ? "vxe.export.printTitle" : "vxe.export.expTitle"),
        className: "vxe-table-export-popup-wrapper",
        width: 660,
        mask: !0,
        lockView: !0,
        showFooter: !1,
        escClosable: !0,
        maskClosable: !0,
        loading: s.loading,
        "onUpdate:modelValue"(Fe) {
          j.visible = Fe;
        },
        onShow: W
      }, {
        default: () => r("div", {
          class: "vxe-export--panel"
        }, [
          r("table", {
            cellspacing: 0,
            cellpadding: 0,
            border: 0
          }, [
            r("tbody", [
              [
                J ? Me() : r("tr", [
                  r("td", vn("vxe.export.expName")),
                  r("td", [
                    l ? r(l, {
                      ref: g,
                      modelValue: F.filename,
                      type: "text",
                      clearable: !0,
                      placeholder: vn("vxe.export.expNamePlaceholder"),
                      "onUpdate:modelValue"(Fe) {
                        F.filename = Fe;
                      }
                    }) : Me()
                  ])
                ]),
                J ? Me() : r("tr", [
                  r("td", vn("vxe.export.expType")),
                  r("td", [
                    o ? r(o, {
                      modelValue: F.type,
                      options: j.typeList,
                      "onUpdate:modelValue"(Fe) {
                        F.type = Fe;
                      }
                    }) : Me()
                  ])
                ]),
                J || de ? r("tr", [
                  r("td", vn("vxe.export.expSheetName")),
                  r("td", [
                    l ? r(l, {
                      ref: D,
                      modelValue: F.sheetName,
                      type: "text",
                      clearable: !0,
                      placeholder: vn("vxe.export.expSheetNamePlaceholder"),
                      "onUpdate:modelValue"(Fe) {
                        F.sheetName = Fe;
                      }
                    }) : Me()
                  ])
                ]) : Me(),
                r("tr", [
                  r("td", vn("vxe.export.expMode")),
                  r("td", [
                    o ? r(o, {
                      modelValue: F.mode,
                      options: j.modeList.map((Fe) => ({
                        value: Fe.value,
                        label: vn(Fe.label)
                      })),
                      "onUpdate:modelValue"(Fe) {
                        F.mode = Fe;
                      }
                    }) : Me()
                  ])
                ]),
                r("tr", [
                  r("td", [vn("vxe.export.expColumn")]),
                  r("td", [
                    r("div", {
                      class: "vxe-export--panel-column"
                    }, [
                      r("ul", {
                        class: "vxe-export--panel-column-header"
                      }, [
                        r("li", {
                          class: ["vxe-export--panel-column-option", {
                            "is--checked": ee,
                            "is--indeterminate": oe
                          }],
                          title: vn("vxe.table.allTitle"),
                          onClick: T
                        }, [
                          r("span", {
                            class: ["vxe-checkbox--icon", oe ? Us().TABLE_CHECKBOX_INDETERMINATE : ee ? Us().TABLE_CHECKBOX_CHECKED : Us().TABLE_CHECKBOX_UNCHECKED]
                          }),
                          r("span", {
                            class: "vxe-checkbox--label"
                          }, vn("vxe.export.expCurrentColumn"))
                        ])
                      ]),
                      r("ul", {
                        class: "vxe-export--panel-column-body"
                      }, H)
                    ])
                  ])
                ]),
                r("tr", [
                  r("td", vn("vxe.export.expOpts")),
                  r("td", [
                    r("div", {
                      class: "vxe-export--panel-option-row"
                    }, [
                      a ? r(a, {
                        modelValue: F.isHeader,
                        title: vn("vxe.export.expHeaderTitle"),
                        content: vn("vxe.export.expOptHeader"),
                        "onUpdate:modelValue"(Fe) {
                          F.isHeader = Fe;
                        }
                      }) : Me(),
                      a ? r(a, {
                        modelValue: F.isFooter,
                        disabled: !j.hasFooter,
                        title: vn("vxe.export.expFooterTitle"),
                        content: vn("vxe.export.expOptFooter"),
                        "onUpdate:modelValue"(Fe) {
                          F.isFooter = Fe;
                        }
                      }) : Me(),
                      a ? r(a, {
                        modelValue: F.original,
                        title: vn("vxe.export.expOriginalTitle"),
                        content: vn("vxe.export.expOptOriginal"),
                        "onUpdate:modelValue"(Fe) {
                          F.original = Fe;
                        }
                      }) : Me()
                    ]),
                    r("div", {
                      class: "vxe-export--panel-option-row"
                    }, [
                      a ? r(a, {
                        modelValue: M && A && ve ? F.isColgroup : !1,
                        title: vn("vxe.export.expColgroupTitle"),
                        disabled: !M || !A || !ve,
                        content: vn("vxe.export.expOptColgroup"),
                        "onUpdate:modelValue"(Fe) {
                          F.isColgroup = Fe;
                        }
                      }) : Me(),
                      a ? r(a, {
                        modelValue: G && ve && ne ? F.isMerge : !1,
                        title: vn("vxe.export.expMergeTitle"),
                        disabled: !G || !ve || !ne,
                        content: vn("vxe.export.expOptMerge"),
                        "onUpdate:modelValue"(Fe) {
                          F.isMerge = Fe;
                        }
                      }) : Me(),
                      J || !a ? Me() : r(a, {
                        modelValue: Oe ? F.useStyle : !1,
                        disabled: !Oe,
                        title: vn("vxe.export.expUseStyleTitle"),
                        content: vn("vxe.export.expOptUseStyle"),
                        "onUpdate:modelValue"(Fe) {
                          F.useStyle = Fe;
                        }
                      }),
                      a ? r(a, {
                        modelValue: re ? F.isAllExpand : !1,
                        disabled: !re,
                        title: vn("vxe.export.expAllExpandTitle"),
                        content: vn("vxe.export.expOptAllExpand"),
                        "onUpdate:modelValue"(Fe) {
                          F.isAllExpand = Fe;
                        }
                      }) : Me()
                    ])
                  ])
                ])
              ]
            ])
          ]),
          r("div", {
            class: "vxe-export--panel-btns"
          }, [
            n ? r(n, {
              content: vn("vxe.export.expCancel"),
              onClick: te
            }) : Me(),
            n ? r(n, {
              ref: f,
              status: "primary",
              content: vn(J ? "vxe.export.expPrint" : "vxe.export.expConfirm"),
              onClick: Ce
            }) : Me()
          ])
        ])
      }) : Me();
    };
    return process.env.NODE_ENV === "development" && ae(() => {
      t || Et("vxe.error.reqComp", ["vxe-modal"]), n || Et("vxe.error.reqComp", ["vxe-button"]), o || Et("vxe.error.reqComp", ["vxe-select"]), l || Et("vxe.error.reqComp", ["vxe-input"]), a || Et("vxe.error.reqComp", ["vxe-checkbox"]);
    }), N;
  }
}), K1 = tt({
  name: "VxeTableMenuPanel",
  setup(e, t) {
    const n = i.uniqueId(), o = ut("$xeTable", {}), { reactData: l } = o, a = Ie(), c = {
      refElem: a
    }, p = {
      xID: n,
      props: e,
      context: t,
      getRefMaps: () => c
    }, d = () => {
      const { ctxMenuStore: s } = l, { computeMenuOpts: f } = o.getComputeMaps(), g = f.value;
      return r(ts, {
        to: "body",
        disabled: !1
      }, [
        r("div", {
          ref: a,
          class: ["vxe-table--context-menu-wrapper", g.className, {
            "is--visible": s.visible
          }],
          style: s.style
        }, s.list.map((D, b) => D.every((x) => x.visible === !1) ? Me() : r("ul", {
          class: "vxe-context-menu--option-wrapper",
          key: b
        }, D.map((x, S) => {
          const y = x.children && x.children.some((h) => h.visible !== !1);
          return x.visible === !1 ? null : r("li", {
            class: [x.className, {
              "link--disabled": x.disabled,
              "link--active": x === s.selected
            }],
            key: `${b}_${S}`
          }, [
            r("a", {
              class: "vxe-context-menu--link",
              onClick(h) {
                o.ctxMenuLinkEvent(h, x);
              },
              onMouseover(h) {
                o.ctxMenuMouseoverEvent(h, x);
              },
              onMouseout(h) {
                o.ctxMenuMouseoutEvent(h, x);
              }
            }, [
              r("i", {
                class: ["vxe-context-menu--link-prefix", x.prefixIcon]
              }),
              r("span", {
                class: "vxe-context-menu--link-content"
              }, wr(x.name)),
              r("i", {
                class: ["vxe-context-menu--link-suffix", y ? x.suffixIcon || "suffix--haschild" : x.suffixIcon]
              })
            ]),
            y ? r("ul", {
              class: ["vxe-table--context-menu-clild-wrapper", {
                "is--show": x === s.selected && s.showChild
              }]
            }, x.children.map((h, O) => h.visible === !1 ? null : r("li", {
              class: [h.className, {
                "link--disabled": h.disabled,
                "link--active": h === s.selectChild
              }],
              key: `${b}_${S}_${O}`
            }, [
              r("a", {
                class: "vxe-context-menu--link",
                onClick(E) {
                  o.ctxMenuLinkEvent(E, h);
                },
                onMouseover(E) {
                  o.ctxMenuMouseoverEvent(E, x, h);
                },
                onMouseout(E) {
                  o.ctxMenuMouseoutEvent(E, x);
                }
              }, [
                r("i", {
                  class: ["vxe-context-menu--link-prefix", h.prefixIcon]
                }),
                r("span", {
                  class: "vxe-context-menu--link-content"
                }, wr(h.name))
              ])
            ]))) : null
          ]);
        }))))
      ]);
    };
    return p.renderVN = d, p;
  },
  render() {
    return this.renderVN();
  }
}), { getConfig: en, getI18n: qp, renderer: Gp, formats: Up, createEvent: Y1, globalResize: X1, interceptor: Kp, hooks: Z1, globalEvents: an, GLOBAL_EVENT_KEYS: So, useFns: J1 } = ue, Q1 = zr["-webkit"] && !zr.edge, Yp = "VXE_CUSTOM_STORE", Fl = tt({
  name: "VxeTable",
  props: Od,
  emits: Td,
  setup(e, t) {
    const { slots: n, emit: o } = t, l = i.uniqueId(), a = ue.getComponent("VxeLoading"), c = ue.getComponent("VxeTooltip"), { computeSize: p } = J1.useSize(e), d = Ot({
      // 低性能的静态列
      staticColumns: [],
      // 渲染的列分组
      tableGroupColumn: [],
      // 可视区渲染的列
      tableColumn: [],
      // 渲染中的数据
      tableData: [],
      // 是否启用了横向 X 可视渲染方式加载
      scrollXLoad: !1,
      // 是否启用了纵向 Y 可视渲染方式加载
      scrollYLoad: !1,
      // 是否存在纵向滚动条
      overflowY: !0,
      // 是否存在横向滚动条
      overflowX: !1,
      // 纵向滚动条的宽度
      scrollbarWidth: 0,
      // 横向滚动条的高度
      scrollbarHeight: 0,
      // 最后滚动时间戳
      lastScrollTime: 0,
      // 行高
      rowHeight: 0,
      // 表格父容器的高度
      parentHeight: 0,
      // 是否使用分组表头
      isGroup: !1,
      isAllOverflow: !1,
      // 复选框属性，是否全选
      isAllSelected: !1,
      // 复选框属性，有选中且非全选状态
      isIndeterminate: !1,
      // 复选框属性，已选中的行集合
      selectCheckboxMaps: {},
      // 当前行
      currentRow: null,
      // 单选框属性，选中列
      currentColumn: null,
      // 单选框属性，选中行
      selectRadioRow: null,
      // 表尾合计数据
      footerTableData: [],
      // 展开列信息
      expandColumn: null,
      // 树节点列信息
      treeNodeColumn: null,
      hasFixedColumn: !1,
      // 已展开的行集合
      rowExpandedMaps: {},
      // 懒加载中的展开行的集合
      rowExpandLazyLoadedMaps: {},
      // 已展开树节点集合
      treeExpandedMaps: {},
      // 懒加载中的树节点的集合
      treeExpandLazyLoadedMaps: {},
      // 树节点不确定状态的集合
      treeIndeterminateMaps: {},
      // 合并单元格的对象集
      mergeList: [],
      // 合并表尾数据的对象集
      mergeFooterList: [],
      // 刷新列标识，当列筛选被改变时，触发表格刷新数据
      upDataFlag: 0,
      // 刷新列标识，当列的特定属性被改变时，触发表格刷新列
      reColumnFlag: 0,
      // 已标记的对象集
      pendingRowMaps: {},
      // 已标记的行
      pendingRowList: [],
      // 初始化标识
      initStore: {
        filter: !1,
        import: !1,
        export: !1,
        custom: !1
      },
      // 自定义列相关的信息
      customStore: {
        btnEl: null,
        isAll: !1,
        isIndeterminate: !1,
        activeBtn: !1,
        activeWrapper: !1,
        visible: !1,
        maxHeight: 0,
        oldSortMaps: {},
        oldFixedMaps: {},
        oldVisibleMaps: {}
      },
      customColumnList: [],
      // 当前选中的筛选列
      filterStore: {
        isAllSelected: !1,
        isIndeterminate: !1,
        style: null,
        options: [],
        column: null,
        multiple: !1,
        visible: !1,
        maxHeight: null
      },
      // 存放列相关的信息
      columnStore: {
        leftList: [],
        centerList: [],
        rightList: [],
        resizeList: [],
        pxList: [],
        pxMinList: [],
        scaleList: [],
        scaleMinList: [],
        autoList: []
      },
      // 存放快捷菜单的信息
      ctxMenuStore: {
        selected: null,
        visible: !1,
        showChild: !1,
        selectChild: null,
        list: [],
        style: null
      },
      // 存放可编辑相关信息
      editStore: {
        indexs: {
          columns: []
        },
        titles: {
          columns: []
        },
        // 选中源
        selected: {
          row: null,
          column: null
        },
        // 已复制源
        copyed: {
          cut: !1,
          rows: [],
          columns: []
        },
        // 激活
        actived: {
          row: null,
          column: null
        },
        // 当前被强制聚焦单元格，只会在鼠标点击后算聚焦
        focused: {
          row: null,
          column: null
        },
        insertMaps: {},
        removeMaps: {}
      },
      // 存放 tooltip 相关信息
      tooltipStore: {
        row: null,
        column: null,
        content: null,
        visible: !1,
        currOpts: {}
      },
      // 存放数据校验相关信息
      validStore: {
        visible: !1
      },
      validErrorMaps: {},
      // 导入相关信息
      importStore: {
        inited: !1,
        file: null,
        type: "",
        modeList: [],
        typeList: [],
        filename: "",
        visible: !1
      },
      importParams: {
        mode: "",
        types: null,
        message: !0
      },
      // 导出相关信息
      exportStore: {
        inited: !1,
        name: "",
        modeList: [],
        typeList: [],
        columns: [],
        isPrint: !1,
        hasFooter: !1,
        hasMerge: !1,
        hasTree: !1,
        hasColgroup: !1,
        visible: !1
      },
      exportParams: {
        filename: "",
        sheetName: "",
        mode: "",
        type: "",
        isColgroup: !1,
        isMerge: !1,
        isAllExpand: !1,
        useStyle: !1,
        original: !1,
        message: !0,
        isHeader: !1,
        isFooter: !1
      },
      scrollVMLoading: !1,
      _isResize: !1,
      _isLoading: !1
    }), s = {
      tZindex: 0,
      elemStore: {},
      // 存放横向 X 虚拟滚动相关的信息
      scrollXStore: {
        offsetSize: 0,
        visibleSize: 0,
        startIndex: 0,
        endIndex: 0
      },
      // 存放纵向 Y 虚拟滚动相关信息
      scrollYStore: {
        rowHeight: 0,
        offsetSize: 0,
        visibleSize: 0,
        startIndex: 0,
        endIndex: 0
      },
      // 表格宽度
      tableWidth: 0,
      // 表格高度
      tableHeight: 0,
      // 表头高度
      headerHeight: 0,
      // 表尾高度
      footerHeight: 0,
      customHeight: 0,
      customMinHeight: 0,
      customMaxHeight: 0,
      // 当前 hover 行
      hoverRow: null,
      // 最后滚动位置
      lastScrollLeft: 0,
      lastScrollTop: 0,
      // 单选框属性，已选中保留的行
      radioReserveRow: null,
      // 复选框属性，已选中保留的行集合
      checkboxReserveRowMap: {},
      // 行数据，已展开保留的行集合
      rowExpandedReserveRowMap: {},
      // 树结构数据，已展开保留的行集合
      treeExpandedReserveRowMap: {},
      // 树结构数据，不确定状态的集合
      treeIndeterminateRowMaps: {},
      // 列表完整数据、条件处理后
      tableFullData: [],
      afterFullData: [],
      afterTreeFullData: [],
      // 列表条件处理后数据集合
      afterFullRowMaps: {},
      // 树结构完整数据、条件处理后
      tableFullTreeData: [],
      tableSynchData: [],
      tableSourceData: [],
      // 收集的列配置（带分组）
      collectColumn: [],
      // 完整所有列（不带分组）
      tableFullColumn: [],
      // 渲染所有列
      visibleColumn: [],
      // 总的缓存数据集
      fullAllDataRowIdData: {},
      // 渲染中缓存数据
      sourceDataRowIdData: {},
      fullDataRowIdData: {},
      fullColumnIdData: {},
      fullColumnFieldData: {},
      inited: !1,
      tooltipTimeout: null,
      initStatus: !1,
      isActivated: !1
    };
    let f = {}, g = {};
    const D = Ie(), b = Ie(), x = Ie(), S = Ie(), y = Ie(), h = Ie(), O = Ie(), E = Ie(), T = Ie(), W = Ie(), $ = Ie(), I = Ie(), z = Ie(), te = Ie(), Ce = Ie(), N = Ie(), F = Ie(), j = Ie(), ee = Ie(), oe = Ie(), re = ut("$xeGrid", null);
    let G;
    const J = Q(() => Object.assign({}, en().table.validConfig, e.validConfig)), A = Q(() => Object.assign({}, en().table.scrollX, e.scrollX)), M = Q(() => Object.assign({}, en().table.scrollY, e.scrollY)), H = Q(() => ({
      default: 48,
      medium: 44,
      small: 40,
      mini: 36
    })), ne = Q(() => Object.assign({}, en().table.columnConfig, e.columnConfig)), de = Q(() => Object.assign({}, en().table.rowConfig, e.rowConfig)), ve = Q(() => Object.assign({}, en().table.resizeConfig, e.resizeConfig)), Oe = Q(() => Object.assign({}, en().table.resizableConfig, e.resizableConfig)), Fe = Q(() => Object.assign({ startIndex: 0 }, en().table.seqConfig, e.seqConfig)), R = Q(() => Object.assign({}, en().table.radioConfig, e.radioConfig)), k = Q(() => Object.assign({}, en().table.checkboxConfig, e.checkboxConfig));
    let U = Ie();
    U = Q(() => Object.assign({}, en().tooltip, en().table.tooltipConfig, e.tooltipConfig));
    const _ = Q(() => {
      const u = U.value;
      return Object.assign({}, u);
    }), K = Q(() => {
      const u = U.value;
      return Object.assign({ isArrow: !1 }, u);
    }), Z = Q(() => Object.assign({}, en().table.editConfig, e.editConfig)), ke = Q(() => Object.assign({ orders: ["asc", "desc", null] }, en().table.sortConfig, e.sortConfig)), ye = Q(() => Object.assign({}, en().table.filterConfig, e.filterConfig)), Ee = Q(() => Object.assign({}, en().table.mouseConfig, e.mouseConfig)), xe = Q(() => Object.assign({}, en().table.areaConfig, e.areaConfig)), Le = Q(() => Object.assign({}, en().table.keyboardConfig, e.keyboardConfig)), je = Q(() => Object.assign({}, en().table.clipConfig, e.clipConfig)), Ye = Q(() => Object.assign({}, en().table.fnrConfig, e.fnrConfig)), fe = Q(() => Object.assign({}, en().table.menuConfig, e.menuConfig)), ge = Q(() => {
      const m = fe.value.header;
      return m && m.options ? m.options : [];
    }), $e = Q(() => {
      const m = fe.value.body;
      return m && m.options ? m.options : [];
    }), Ve = Q(() => {
      const m = fe.value.footer;
      return m && m.options ? m.options : [];
    }), ce = Q(() => {
      const u = fe.value, m = ge.value, v = $e.value, w = Ve.value;
      return !!(e.menuConfig && Lt(u) && (m.length || v.length || w.length));
    }), We = Q(() => {
      const { ctxMenuStore: u } = d, m = [];
      return u.list.forEach((v) => {
        v.forEach((w) => {
          m.push(w);
        });
      }), m;
    }), Ge = Q(() => Object.assign({}, en().table.exportConfig, e.exportConfig)), Ze = Q(() => Object.assign({}, en().table.importConfig, e.importConfig)), pe = Q(() => Object.assign({}, en().table.printConfig, e.printConfig)), Y = Q(() => Object.assign({}, en().table.expandConfig, e.expandConfig)), le = Q(() => Object.assign({}, en().table.treeConfig, e.treeConfig)), he = Q(() => Object.assign({}, en().table.emptyRender, e.emptyRender)), He = Q(() => Object.assign({}, en().table.loadingConfig, e.loadingConfig)), se = Q(() => e.border ? Math.max(2, Math.ceil(d.scrollbarWidth / d.tableColumn.length)) : 1), Se = Q(() => Object.assign({}, en().table.customConfig, e.customConfig)), ze = Q(() => {
      const { collectColumn: u } = s;
      let m = 0;
      return u.forEach((v) => {
        v.renderFixed && m++;
      }), m;
    }), Xe = Q(() => {
      const u = ze.value, m = ne.value, { maxFixedSize: v } = m;
      return v ? u >= v : !1;
    }), et = Q(() => {
      const { border: u } = e;
      return u === !0 ? "full" : u || "default";
    }), at = Q(() => {
      const { tableData: u } = d, { tableFullData: m } = s, v = k.value, { strict: w, checkMethod: C } = v;
      return w ? u.length || m.length ? C ? m.every((P) => !C({ row: P })) : !1 : !0 : !1;
    }), ft = {
      refElem: D,
      refTooltip: b,
      refValidTooltip: S,
      refTableFilter: h,
      refTableCustom: O,
      refTableMenu: y,
      refTableHeader: E,
      refTableBody: T,
      refTableFooter: W,
      refTableLeftHeader: $,
      refTableLeftBody: I,
      refTableLeftFooter: z,
      refTableRightHeader: te,
      refTableRightBody: Ce,
      refTableRightFooter: N,
      refLeftContainer: F,
      refRightContainer: j,
      refCellResizeBar: ee
    }, mt = {
      computeSize: p,
      computeValidOpts: J,
      computeSXOpts: A,
      computeSYOpts: M,
      computeColumnOpts: ne,
      computeRowOpts: de,
      computeResizeleOpts: ve,
      computeResizableOpts: Oe,
      computeSeqOpts: Fe,
      computeRadioOpts: R,
      computeCheckboxOpts: k,
      computeTooltipOpts: U,
      computeEditOpts: Z,
      computeSortOpts: ke,
      computeFilterOpts: ye,
      computeMouseOpts: Ee,
      computeAreaOpts: xe,
      computeKeyboardOpts: Le,
      computeClipOpts: je,
      computeFNROpts: Ye,
      computeHeaderMenu: ge,
      computeBodyMenu: $e,
      computeFooterMenu: Ve,
      computeIsMenu: ce,
      computeMenuOpts: fe,
      computeExportOpts: Ge,
      computeImportOpts: Ze,
      computePrintOpts: pe,
      computeExpandOpts: Y,
      computeTreeOpts: le,
      computeEmptyOpts: he,
      computeLoadingOpts: He,
      computeCustomOpts: Se,
      computeFixedColumnSize: ze,
      computeIsMaxFixedColumn: Xe,
      computeIsAllCheckboxDisabled: at
    }, B = {
      xID: l,
      props: e,
      context: t,
      reactData: d,
      internalData: s,
      getRefMaps: () => ft,
      getComputeMaps: () => mt,
      xegrid: re
    }, Mt = (u, m, v) => {
      const w = i.get(u, v), C = i.get(m, v);
      return gr(w) && gr(C) ? !0 : i.isString(w) || i.isNumber(w) ? "" + w == "" + C : i.isEqual(w, C);
    }, St = (u) => {
      const m = ke.value, { orders: v } = m, w = u.order || null, C = v.indexOf(w) + 1;
      return v[C < v.length ? C : 0];
    }, gt = (u) => {
      const m = en().version, v = i.toStringJSON(localStorage.getItem(Yp) || ""), w = v && v._v === m ? v : { _v: m };
      return (u ? w[u] : w) || {};
    }, bt = (u, m) => {
      const v = en().version, w = gt();
      w[u] = m || void 0, w._v = v, localStorage.setItem(Yp, i.toJSONString(w));
    }, Dt = (u) => {
      const { fullAllDataRowIdData: m } = s, v = {};
      return i.each(u, (w, C) => {
        m[C] && (v[C] = w);
      }), v;
    }, Bt = (u) => {
      const { fullDataRowIdData: m } = s, v = [];
      return i.each(u, (w, C) => {
        m[C] && B.findRowIndexOf(v, m[C].row) === -1 && v.push(m[C].row);
      }), v;
    }, Wt = () => {
      const { visibleColumn: u } = s, m = T.value, v = m ? m.$el : null;
      if (v) {
        const { scrollLeft: w, clientWidth: C } = v, P = w + C;
        let L = -1, X = 0, ie = 0;
        for (let we = 0, De = u.length; we < De && (X += u[we].renderWidth, L === -1 && w < X && (L = we), !(L >= 0 && (ie++, X > P))); we++)
          ;
        return { toVisibleIndex: Math.max(0, L), visibleSize: Math.max(8, ie) };
      }
      return { toVisibleIndex: 0, visibleSize: 8 };
    }, Pt = () => {
      const u = E.value, m = T.value, v = m ? m.$el : null, w = p.value, C = H.value;
      if (v) {
        const P = u ? u.$el : null;
        let L = 0, X;
        X = v.querySelector("tr"), !X && P && (X = P.querySelector("tr")), X && (L = X.clientHeight), L || (L = C[w || "default"]);
        const ie = Math.max(8, Math.ceil(v.clientHeight / L) + 2);
        return { rowHeight: L, visibleSize: ie };
      }
      return { rowHeight: 0, visibleSize: 8 };
    }, jt = (u, m, v) => {
      for (let w = 0, C = u.length; w < C; w++) {
        const P = u[w], { startIndex: L, endIndex: X } = m, ie = P[v], we = P[v + "span"], De = ie + we;
        ie < L && L < De && (m.startIndex = ie), ie < X && X < De && (m.endIndex = De), (m.startIndex !== L || m.endIndex !== X) && (w = -1);
      }
    }, At = (u, m, v) => {
      if (u) {
        const { treeConfig: w } = e, { visibleColumn: C } = s;
        i.isArray(u) || (u = [u]), w && u.length && Et("vxe.error.noTree", ["merge-cells | merge-footer-items"]), u.forEach((P) => {
          let { row: L, col: X, rowspan: ie, colspan: we } = P;
          if (v && i.isNumber(L) && (L = v[L]), i.isNumber(X) && (X = C[X]), (v ? L : i.isNumber(L)) && X && (ie || we) && (ie = i.toNumber(ie) || 1, we = i.toNumber(we) || 1, ie > 1 || we > 1)) {
            const De = i.findIndexOf(m, (Ae) => (Ae._row === L || st(B, Ae._row) === st(B, L)) && (Ae._col.id === X || Ae._col.id === X.id)), _e = m[De];
            if (_e)
              _e.rowspan = ie, _e.colspan = we, _e._rowspan = ie, _e._colspan = we;
            else {
              const Ae = v ? B.findRowIndexOf(v, L) : L, Pe = f.getVTColumnIndex(X);
              m.push({
                row: Ae,
                col: Pe,
                rowspan: ie,
                colspan: we,
                _row: L,
                _col: X,
                _rowspan: ie,
                _colspan: we
              });
            }
          }
        });
      }
    }, Rn = (u, m, v) => {
      const w = [];
      if (u) {
        const { treeConfig: C } = e, { visibleColumn: P } = s;
        i.isArray(u) || (u = [u]), C && u.length && Et("vxe.error.noTree", ["merge-cells | merge-footer-items"]), u.forEach((L) => {
          let { row: X, col: ie } = L;
          v && i.isNumber(X) && (X = v[X]), i.isNumber(ie) && (ie = P[ie]);
          const we = i.findIndexOf(m, (De) => (De._row === X || st(B, De._row) === st(B, X)) && (De._col.id === ie || De._col.id === ie.id));
          if (we > -1) {
            const De = m.splice(we, 1);
            w.push(De[0]);
          }
        });
      }
      return w;
    }, _t = () => {
      const { tableFullColumn: u } = s;
      u.forEach((m) => {
        m.order = null;
      });
    }, Ht = (u) => {
      const { parentHeight: m } = d, v = e[u];
      let w = 0;
      if (v)
        if (v === "auto")
          w = m;
        else {
          const C = B.getExcludeHeight();
          mi(v) ? w = Math.floor((i.toInteger(v) || 1) / 100 * m) : w = i.toNumber(v), w = Math.max(40, w - C);
        }
      return w;
    }, Kt = (u) => {
      let { collectColumn: m } = s;
      const { resizableData: v, sortData: w, visibleData: C, fixedData: P } = u;
      let L = !1;
      (v || w || C || P) && (i.eachTree(m, (X, ie, we, De, _e) => {
        const Ae = X.getKey();
        _e || (P && P[Ae] && (X.fixed = P[Ae]), w && i.isNumber(w[Ae]) && (L = !0, X.renderSortNumber = w[Ae])), v && i.isNumber(v[Ae]) && (X.resizeWidth = v[Ae]), C && i.isBoolean(C[Ae]) && (X.visible = C[Ae]);
      }), L && (m = i.orderBy(m, "renderSortNumber"), s.collectColumn = m, s.tableFullColumn = ao(m)));
    }, pn = () => {
      const { id: u, customConfig: m } = e, v = Se.value, { storage: w, restoreStore: C } = v, P = w === !0, L = P ? {} : Object.assign({}, w || {}), X = P || L.resizable, ie = P || L.visible, we = P || L.fixed, De = P || L.sort;
      if (m && (X || ie || we || De)) {
        if (!u) {
          Et("vxe.error.reqProp", ["id"]);
          return;
        }
        const _e = gt(u);
        return C ? Promise.resolve(C({ id: u, type: "restore", storeData: _e })).then((Ae) => {
          if (Ae)
            return Kt(Ae);
        }).catch((Ae) => Ae) : Kt(_e);
      }
    }, Tn = () => {
      const { tableFullColumn: u, collectColumn: m } = s, v = s.fullColumnIdData = {}, w = s.fullColumnFieldData = {}, C = Ee.value, P = ne.value, L = de.value, X = m.some(el);
      let ie = !!e.showOverflow, we, De, _e, Ae, Pe;
      const Qe = (Ue, nt, Be, ot, ht) => {
        const { id: kt, field: wt, fixed: Ft, type: Yt, treeNode: bn } = Ue, Jt = { column: Ue, colid: kt, index: nt, items: Be, parent: ht };
        wt && (process.env.NODE_ENV === "development" && w[wt] && Nt("vxe.error.colRepet", ["field", wt]), w[wt] = Jt), !Pe && Yt === "html" && (Pe = Ue), bn ? (process.env.NODE_ENV === "development" && De && Nt("vxe.error.colRepet", ["tree-node", bn]), De || (De = Ue)) : Yt === "expand" && (process.env.NODE_ENV === "development" && we && Nt("vxe.error.colRepet", ["type", Yt]), we || (we = Ue)), process.env.NODE_ENV === "development" && (Yt === "checkbox" ? (_e && Nt("vxe.error.colRepet", ["type", Yt]), _e || (_e = Ue)) : Yt === "radio" && (Ae && Nt("vxe.error.colRepet", ["type", Yt]), Ae || (Ae = Ue))), ie && Ue.showOverflow === !1 && (ie = !1), v[kt] && Et("vxe.error.colRepet", ["colId", kt]), v[kt] = Jt;
      };
      X ? i.eachTree(m, (Ue, nt, Be, ot, ht, kt) => {
        Ue.level = kt.length, Qe(Ue, nt, Be, ot, ht);
      }) : u.forEach(Qe), process.env.NODE_ENV === "development" && we && C.area && Et("vxe.error.errConflicts", ["mouse-config.area", "column.type=expand"]), process.env.NODE_ENV === "development" && Pe && (P.useKey || Et("vxe.error.reqProp", ["column-config.useKey", "column.type=html"]), L.useKey || Et("vxe.error.reqProp", ["row-config.useKey", "column.type=html"])), d.isGroup = X, d.treeNodeColumn = De, d.expandColumn = we, d.isAllOverflow = ie;
    }, mn = () => {
      s.customHeight = Ht("height"), s.customMinHeight = Ht("minHeight"), s.customMaxHeight = Ht("maxHeight");
    }, hn = () => {
      const u = E.value, m = T.value, v = W.value, w = m ? m.$el : null, C = u ? u.$el : null, P = v ? v.$el : null;
      if (!w)
        return;
      let L = 0;
      const X = 40, ie = w.clientWidth - 1;
      let we = ie, De = we / 100;
      const { fit: _e } = e, { columnStore: Ae } = d, { resizeList: Pe, pxMinList: Qe, pxList: Ue, scaleList: nt, scaleMinList: Be, autoList: ot } = Ae;
      if (Qe.forEach((Ut) => {
        const qt = i.toInteger(Ut.minWidth);
        L += qt, Ut.renderWidth = qt;
      }), Be.forEach((Ut) => {
        const qt = Math.floor(i.toInteger(Ut.minWidth) * De);
        L += qt, Ut.renderWidth = qt;
      }), nt.forEach((Ut) => {
        const qt = Math.floor(i.toInteger(Ut.width) * De);
        L += qt, Ut.renderWidth = qt;
      }), Ue.forEach((Ut) => {
        const qt = i.toInteger(Ut.width);
        L += qt, Ut.renderWidth = qt;
      }), Pe.forEach((Ut) => {
        const qt = i.toInteger(Ut.resizeWidth);
        L += qt, Ut.renderWidth = qt;
      }), we -= L, De = we > 0 ? Math.floor(we / (Be.length + Qe.length + ot.length)) : 0, _e ? we > 0 && Be.concat(Qe).forEach((Ut) => {
        L += De, Ut.renderWidth += De;
      }) : De = X, ot.forEach((Ut) => {
        const qt = Math.max(De, X);
        Ut.renderWidth = qt, L += qt;
      }), _e) {
        const Ut = nt.concat(Be).concat(Qe).concat(ot);
        let qt = Ut.length - 1;
        if (qt > 0) {
          let xn = ie - L;
          if (xn > 0) {
            for (; xn > 0 && qt >= 0; )
              xn--, Ut[qt--].renderWidth++;
            L = ie;
          }
        }
      }
      const ht = w.offsetHeight, kt = w.scrollHeight > w.clientHeight;
      let wt = 0;
      kt && (wt = Math.max(w.offsetWidth - w.clientWidth, 0)), d.scrollbarWidth = wt, d.overflowY = kt, s.tableWidth = L, s.tableHeight = ht;
      let Ft = 0;
      C && (Ft = C.clientHeight, ae(() => {
        C && w && C.scrollLeft !== w.scrollLeft && (C.scrollLeft = w.scrollLeft);
      })), s.headerHeight = Ft;
      let Yt = !1, bn = 0, Jt = 0;
      P ? (bn = P.offsetHeight, Yt = L > P.clientWidth, Yt && (Jt = Math.max(bn - P.clientHeight, 0))) : (Yt = L > ie, Yt && (Jt = Math.max(ht - w.clientHeight, 0))), s.footerHeight = bn, d.overflowX = Yt, d.scrollbarHeight = Jt, mn(), d.parentHeight = Math.max(s.headerHeight + bn + 20, g.getParentHeight()), Yt && g.checkScrolling();
    }, Pn = (u) => {
      const { sortBy: m, sortType: v } = u;
      return (w) => {
        let C;
        return m ? C = i.isFunction(m) ? m({ row: w, column: u }) : i.get(w, m) : C = f.getCellLabel(w, u), !v || v === "auto" ? isNaN(C) ? C : i.toNumber(C) : v === "number" ? i.toNumber(C) : v === "string" ? i.toValueString(C) : C;
      };
    }, cn = () => {
      const { treeConfig: u } = e, { afterFullData: m, fullDataRowIdData: v, fullAllDataRowIdData: w } = s, { afterTreeFullData: C } = s, P = le.value, L = P.children || P.childrenField, X = {};
      u ? i.eachTree(C, (ie, we, De, _e) => {
        const Ae = st(B, ie), Pe = w[Ae], Qe = _e.map((Ue, nt) => nt % 2 === 0 ? Number(Ue) + 1 : ".").join("");
        if (Pe)
          Pe.seq = Qe, Pe._index = we;
        else {
          const Ue = { row: ie, rowid: Ae, seq: Qe, index: -1, $index: -1, _index: we, items: [], parent: null, level: 0 };
          w[Ae] = Ue, v[Ae] = Ue;
        }
        X[Ae] = ie;
      }, { children: P.transform ? P.mapChildrenField : L }) : m.forEach((ie, we) => {
        const De = st(B, ie), _e = w[De], Ae = we + 1;
        if (_e)
          _e.seq = Ae, _e._index = we;
        else {
          const Pe = { row: ie, rowid: De, seq: Ae, index: -1, $index: -1, _index: we, items: [], parent: null, level: 0 };
          w[De] = Pe, v[De] = Pe;
        }
        X[De] = ie;
      }), s.afterFullRowMaps = X;
    }, Qt = () => {
      const { treeConfig: u } = e, { treeExpandedMaps: m } = d, v = le.value;
      if (u && v.transform) {
        const w = [], C = {};
        return i.eachTree(s.afterTreeFullData, (P, L, X, ie, we) => {
          const De = st(B, P), _e = st(B, we);
          (!we || C[_e] && m[_e]) && (C[De] = 1, w.push(P));
        }, { children: v.mapChildrenField }), s.afterFullData = w, rt(w), w;
      }
      return s.afterFullData;
    }, wn = () => {
      const { treeConfig: u } = e, { tableFullColumn: m, tableFullData: v, tableFullTreeData: w } = s, C = ye.value, P = ke.value, L = le.value, { transform: X } = L, { remote: ie, filterMethod: we } = C, { remote: De, sortMethod: _e, multiple: Ae, chronological: Pe } = P;
      let Qe = [], Ue = [];
      if (!ie || !De) {
        const nt = [];
        let Be = [];
        if (m.forEach((ot) => {
          const { field: ht, sortable: kt, order: wt, filters: Ft } = ot;
          if (!ie && Ft && Ft.length) {
            const Yt = [], bn = [];
            Ft.forEach((Jt) => {
              Jt.checked && (bn.push(Jt), Yt.push(Jt.value));
            }), bn.length && nt.push({ column: ot, valueList: Yt, itemList: bn });
          }
          !De && kt && wt && Be.push({ column: ot, field: ht, property: ht, order: wt, sortTime: ot.sortTime });
        }), Ae && Pe && Be.length > 1 && (Be = i.orderBy(Be, "sortTime")), !ie && nt.length) {
          const ot = (ht) => nt.every(({ column: kt, valueList: wt, itemList: Ft }) => {
            const { filterMethod: Yt, filterRender: bn } = kt, Jt = Lt(bn) ? Gp.get(bn.name) : null, Ut = Jt ? Jt.tableFilterMethod || Jt.filterMethod : null, qt = Jt ? Jt.defaultTableFilterMethod || Jt.defaultFilterMethod : null, xn = Io(ht, kt);
            return Yt ? Ft.some((Gn) => Yt({ value: Gn.value, option: Gn, cellValue: xn, row: ht, column: kt, $table: B })) : Ut ? Ft.some((Gn) => Ut({ value: Gn.value, option: Gn, cellValue: xn, row: ht, column: kt, $table: B })) : we ? we({ options: Ft, values: wt, cellValue: xn, row: ht, column: kt }) : qt ? Ft.some((Gn) => qt({ value: Gn.value, option: Gn, cellValue: xn, row: ht, column: kt, $table: B })) : wt.indexOf(i.get(ht, kt.field)) > -1;
          });
          u && X ? (Ue = i.searchTree(w, ot, Object.assign(Object.assign({}, L), { original: !0 })), Qe = Ue) : (Qe = u ? w.filter(ot) : v.filter(ot), Ue = Qe);
        } else
          u && X ? (Ue = i.searchTree(w, () => !0, Object.assign(Object.assign({}, L), { original: !0 })), Qe = Ue) : (Qe = u ? w.slice(0) : v.slice(0), Ue = Qe);
        if (!De && Be.length)
          if (u && X) {
            if (_e) {
              const ot = _e({ data: Ue, sortList: Be, $table: B });
              Ue = i.isArray(ot) ? ot : Ue;
            } else
              Ue = i.orderBy(Ue, Be.map(({ column: ot, order: ht }) => [Pn(ot), ht]));
            Qe = Ue;
          } else {
            if (_e) {
              const ot = _e({ data: Qe, sortList: Be, $table: B });
              Qe = i.isArray(ot) ? ot : Qe;
            } else
              Qe = i.orderBy(Qe, Be.map(({ column: ot, order: ht }) => [Pn(ot), ht]));
            Ue = Qe;
          }
      } else
        u && X ? (Ue = i.searchTree(w, () => !0, Object.assign(Object.assign({}, L), { original: !0 })), Qe = Ue) : (Qe = u ? w.slice(0) : v.slice(0), Ue = Qe);
      s.afterFullData = Qe, s.afterTreeFullData = Ue, cn();
    }, Zt = () => {
      const { border: u, showFooter: m, showOverflow: v, showHeaderOverflow: w, showFooterOverflow: C, mouseConfig: P, spanMethod: L, footerSpanMethod: X, keyboardConfig: ie } = e, { isGroup: we, currentRow: De, tableColumn: _e, scrollXLoad: Ae, scrollYLoad: Pe, scrollbarWidth: Qe, scrollbarHeight: Ue, columnStore: nt, editStore: Be, mergeList: ot, mergeFooterList: ht, isAllOverflow: kt } = d;
      let { visibleColumn: wt, fullColumnIdData: Ft, tableHeight: Yt, tableWidth: bn, headerHeight: Jt, footerHeight: Ut, elemStore: qt, customHeight: xn, customMinHeight: Gn, customMaxHeight: Ns } = s;
      const lr = ["main", "left", "right"], is = oe.value, Fs = se.value, Ls = Ee.value, ir = Le.value, as = qt["main-body-wrapper"], cs = as ? as.value : null;
      return is && (is.style.top = `${Jt}px`, is.style.height = cs ? `${cs.offsetHeight - Ue}px` : ""), xn > 0 && m && (xn += Ue), lr.forEach((wo, Mr) => {
        const Un = Mr > 0 ? wo : "", un = ["header", "body", "footer"], Nn = Un === "left";
        let Ho = [], ei;
        Un && (Ho = Nn ? nt.leftList : nt.rightList, ei = Nn ? F.value : j.value), un.forEach((No) => {
          const Id = qt[`${wo}-${No}-wrapper`], Zo = Id ? Id.value : null, kd = qt[`${wo}-${No}-table`], us = kd ? kd.value : null;
          if (No === "header") {
            let go = bn, co = _e;
            we ? co = wt : Un && (Ae || w) && (co = Ho), go = co.reduce((eo, ti) => eo + ti.renderWidth, 0), us && (us.style.width = go ? `${go + Qe}px` : "");
            const no = qt[`${wo}-${No}-repair`], Eo = no ? no.value : null;
            Eo && (Eo.style.width = `${bn}px`);
            const Kn = qt[`${wo}-${No}-list`], vo = Kn ? Kn.value : null;
            we && vo && i.arrayEach(vo.querySelectorAll(".col--group"), (eo) => {
              const ti = f.getColumnNode(eo);
              if (ti) {
                const qi = ti.item, { showHeaderOverflow: za } = qi, Ir = i.isBoolean(za) ? za : w, As = Ir === "title" || (Ir === !0 || Ir === "tooltip") || Ir === "ellipsis";
                let ni = 0, oi = 0;
                As && i.eachTree(qi.children, (Gi) => {
                  (!Gi.children || !qi.children.length) && oi++, ni += Gi.renderWidth;
                }, { children: "children" }), eo.style.width = As ? `${ni - oi - (u ? 2 : 0)}px` : "";
              }
            });
          } else if (No === "body") {
            const go = qt[`${wo}-${No}-emptyBlock`], co = go ? go.value : null;
            if (mc(Zo)) {
              let Kn = 0;
              const vo = Gn - Jt - Ut;
              if (Ns && (Kn = Ns - Jt - Ut, Un && (Kn -= m ? 0 : Ue), Kn = Math.max(vo, Kn), Zo.style.maxHeight = `${Kn}px`), xn) {
                let eo = xn - Jt - Ut;
                Un && (eo -= m ? 0 : Ue), Kn && (eo = Math.min(Kn, eo)), Zo.style.height = `${Math.max(vo, eo)}px`;
              } else
                Zo.style.height = "";
              Zo.style.minHeight = `${vo}px`;
            }
            ei && (mc(Zo) && (Zo.style.top = `${Jt}px`), ei.style.height = `${(xn > 0 ? xn - Jt - Ut : Yt) + Jt + Ut - Ue * (m ? 2 : 1)}px`, ei.style.width = `${Ho.reduce((Kn, vo) => Kn + vo.renderWidth, Nn ? 0 : Qe)}px`);
            let no = bn, Eo = _e;
            Un && (!d.expandColumn && (Pe || v && kt) && !ot.length && !L && !(ie && ir.isMerge) ? Eo = Ho : Eo = wt), no = Eo.reduce((Kn, vo) => Kn + vo.renderWidth, 0), us && (us.style.width = no ? `${no}px` : "", us.style.paddingRight = Qe && Un && (zr["-moz"] || zr.safari) ? `${Qe}px` : ""), co && (co.style.width = no ? `${no}px` : "");
          } else if (No === "footer") {
            let go = bn, co = _e;
            Un && (!d.expandColumn && (Ae || C) && (!ht.length || !X) ? co = Ho : co = wt), go = co.reduce((no, Eo) => no + Eo.renderWidth, 0), mc(Zo) && (ei && (Zo.style.top = `${xn > 0 ? xn - Ut : Yt + Jt}px`), Zo.style.marginTop = `${-Math.max(1, Ue)}px`), us && (us.style.width = go ? `${go + Qe}px` : "");
          }
          const Vd = qt[`${wo}-${No}-colgroup`], $d = Vd ? Vd.value : null;
          $d && i.arrayEach($d.children, (go) => {
            const co = go.getAttribute("name");
            if (co === "col_gutter" && (go.style.width = `${Qe}px`), Ft[co]) {
              const no = Ft[co].column, { showHeaderOverflow: Eo, showFooterOverflow: Kn, showOverflow: vo } = no;
              let eo;
              go.style.width = `${no.renderWidth}px`, No === "header" ? eo = i.isUndefined(Eo) || i.isNull(Eo) ? w : Eo : No === "footer" ? eo = i.isUndefined(Kn) || i.isNull(Kn) ? C : Kn : eo = i.isUndefined(vo) || i.isNull(vo) ? v : vo;
              let Ir = eo === "title" || (eo === !0 || eo === "tooltip") || eo === "ellipsis";
              const ja = qt[`${wo}-${No}-list`], qa = ja ? ja.value : null;
              Pe && !Ir && (Ir = !0), qa && i.arrayEach(qa.querySelectorAll(`.${no.id}`), (Ga) => {
                const As = parseInt(Ga.getAttribute("colspan") || 1), ni = Ga.querySelector(".vxe-cell");
                let oi = no.renderWidth;
                if (ni) {
                  if (As > 1) {
                    const Gi = f.getColumnIndex(no);
                    for (let Ua = 1; Ua < As; Ua++) {
                      const Rd = f.getColumns(Gi + Ua);
                      Rd && (oi += Rd.renderWidth);
                    }
                  }
                  ni.style.width = Ir ? `${oi - Fs * As}px` : "";
                }
              });
            }
          });
        });
      }), De && f.setCurrentRow(De), P && Ls.selected && Be.selected.row && Be.selected.column && B.addCellSelectedClass(), ae();
    }, _n = (u) => B.triggerValidate ? B.triggerValidate(u) : ae(), Yo = (u, m) => {
      _n("blur").catch((v) => v).then(() => {
        B.handleActived(m, u).then(() => _n("change")).catch((v) => v);
      });
    }, Zn = () => {
      const { sortConfig: u } = e;
      if (u) {
        const m = ke.value;
        let { defaultSort: v } = m;
        v && (i.isArray(v) || (v = [v]), v.length && ((u.multiple ? v : v.slice(0, 1)).forEach((w, C) => {
          const { field: P, order: L } = w;
          if (P && L) {
            const X = f.getColumnByField(P);
            X && X.sortable && (X.order = L, X.sortTime = Date.now() + C);
          }
        }), m.remote || g.handleTableData(!0).then(Zt)));
      }
    }, Tr = () => {
      const { checkboxConfig: u } = e;
      if (u) {
        const { fullDataRowIdData: m } = s, v = k.value, { checkAll: w, checkRowKeys: C } = v;
        if (w)
          Ro(!0, !0);
        else if (C) {
          const P = [];
          C.forEach((L) => {
            m[L] && P.push(m[L].row);
          }), zn(P, !0, !0);
        }
      }
    }, $o = () => {
      const { radioConfig: u } = e;
      if (u) {
        const { fullDataRowIdData: m } = s, v = R.value, { checkRowKey: w, reserve: C } = v;
        if (w && (m[w] && Wo(m[w].row, !0), C)) {
          const P = ps(B);
          s.radioReserveRow = { [P]: w };
        }
      }
    }, Ao = () => {
      const { expandConfig: u } = e;
      if (u) {
        const { fullDataRowIdData: m } = s, v = Y.value, { expandAll: w, expandRowKeys: C } = v;
        if (w)
          f.setAllRowExpand(!0);
        else if (C) {
          const P = [];
          C.forEach((L) => {
            m[L] && P.push(m[L].row);
          }), f.setRowExpand(P, !0);
        }
      }
    }, _o = (u) => {
      R.value.reserve && (s.radioReserveRow = u);
    }, fo = (u, m) => {
      const { checkboxReserveRowMap: v } = s;
      if (k.value.reserve) {
        const C = st(B, u);
        m ? v[C] = u : v[C] && delete v[C];
      }
    }, Wo = (u, m) => {
      const v = R.value, { checkMethod: w } = v;
      return u && (m || !w || w({ row: u })) && (d.selectRadioRow = u, _o(u)), ae();
    }, zn = (u, m, v) => (u && !i.isArray(u) && (u = [u]), u.forEach((w) => g.handleSelectRow({ row: w }, !!m, v)), ae()), Ro = (u, m) => {
      const { treeConfig: v } = e, { selectCheckboxMaps: w } = d, { afterFullData: C, afterFullRowMaps: P, checkboxReserveRowMap: L } = s, X = le.value, ie = X.children || X.childrenField, we = k.value, { checkField: De, reserve: _e, checkStrictly: Ae, checkMethod: Pe } = we, Qe = we.indeterminateField || we.halfField, Ue = {};
      if (v || i.each(w, (nt, Be) => {
        P[Be] || (Ue[Be] = nt);
      }), Ae)
        d.isAllSelected = u;
      else {
        if (De) {
          const nt = (Be) => {
            (m || !Pe || Pe({ row: Be })) && (u && (Ue[st(B, Be)] = Be), i.set(Be, De, u)), v && Qe && i.set(Be, Qe, !1);
          };
          v ? i.eachTree(C, nt, { children: ie }) : C.forEach(nt);
        } else
          v ? u ? i.eachTree(C, (nt) => {
            (m || !Pe || Pe({ row: nt })) && (Ue[st(B, nt)] = nt);
          }, { children: ie }) : !m && Pe && i.eachTree(C, (nt) => {
            const Be = st(B, nt);
            !Pe({ row: nt }) && w[Be] && (Ue[Be] = nt);
          }, { children: ie }) : u ? !m && Pe ? C.forEach((nt) => {
            const Be = st(B, nt);
            (w[Be] || Pe({ row: nt })) && (Ue[Be] = nt);
          }) : C.forEach((nt) => {
            Ue[st(B, nt)] = nt;
          }) : !m && Pe && C.forEach((nt) => {
            const Be = st(B, nt);
            !Pe({ row: nt }) && w[Be] && (Ue[Be] = nt);
          });
        _e && (u ? i.each(Ue, (nt, Be) => {
          L[Be] = nt;
        }) : C.forEach((nt) => fo(nt, !1))), d.selectCheckboxMaps = De ? {} : Ue;
      }
      return d.treeIndeterminateMaps = {}, s.treeIndeterminateRowMaps = {}, g.checkSelectionStatus(), ae();
    }, Bo = () => {
      const { treeConfig: u } = e, { expandColumn: m, currentRow: v, selectCheckboxMaps: w, selectRadioRow: C, rowExpandedMaps: P, treeExpandedMaps: L } = d, { fullDataRowIdData: X, fullAllDataRowIdData: ie, radioReserveRow: we } = s, De = Y.value, _e = le.value, Ae = R.value, Pe = k.value;
      if (C && !ie[st(B, C)] && (d.selectRadioRow = null), Ae.reserve && we) {
        const Qe = st(B, we);
        X[Qe] && Wo(X[Qe].row, !0);
      }
      d.selectCheckboxMaps = Dt(w), Pe.reserve && zn(Bt(s.checkboxReserveRowMap), !0, !0), v && !ie[st(B, v)] && (d.currentRow = null), d.rowExpandedMaps = m ? Dt(P) : {}, m && De.reserve && f.setRowExpand(Bt(s.rowExpandedReserveRowMap), !0), d.treeExpandedMaps = u ? Dt(L) : {}, u && _e.reserve && f.setTreeExpand(Bt(s.treeExpandedReserveRowMap), !0);
    }, En = () => {
      const { treeConfig: u } = e;
      if (u) {
        const { tableFullData: m } = s, v = le.value, { expandAll: w, expandRowKeys: C } = v, P = v.children || v.childrenField;
        if (w)
          f.setAllTreeExpand(!0);
        else if (C) {
          const L = [], X = ps(B);
          C.forEach((ie) => {
            const we = i.findTree(m, (De) => ie === i.get(De, X), { children: P });
            we && L.push(we.item);
          }), f.setTreeExpand(L, !0);
        }
      }
    }, lo = (u) => {
      const m = le.value, v = k.value, { transform: w, loadMethod: C } = m, { checkStrictly: P } = v;
      return new Promise((L) => {
        if (C) {
          const { treeExpandLazyLoadedMaps: X } = d, { fullAllDataRowIdData: ie } = s, we = st(B, u), De = ie[we];
          X[we] = u, C({ $table: B, row: u }).then((_e) => {
            if (De.treeLoaded = !0, X[we] && delete X[we], i.isArray(_e) || (_e = []), _e)
              return f.loadTreeChildren(u, _e).then((Ae) => {
                const { treeExpandedMaps: Pe } = d;
                return Ae.length && !Pe[we] && (Pe[we] = u), !P && f.isCheckedByCheckboxRow(u) && zn(Ae, !0), ae().then(() => {
                  if (w)
                    return g.handleTableData();
                });
              });
          }).catch(() => {
            const { treeExpandLazyLoadedMaps: _e } = d;
            De.treeLoaded = !1, _e[we] && delete _e[we];
          }).finally(() => {
            ae().then(() => f.recalculate()).then(() => L());
          });
        } else
          L();
      });
    }, Jn = (u, m) => {
      const { treeExpandedReserveRowMap: v } = s;
      if (le.value.reserve) {
        const C = st(B, u);
        m ? v[C] = u : v[C] && delete v[C];
      }
    }, Xo = (u) => new Promise((m) => {
      const v = Y.value, { loadMethod: w } = v;
      if (w) {
        const { fullAllDataRowIdData: C } = s, { rowExpandLazyLoadedMaps: P } = d, L = st(B, u), X = C[L];
        P[L] = u, w({ $table: B, row: u, rowIndex: f.getRowIndex(u), $rowIndex: f.getVMRowIndex(u) }).then(() => {
          const { rowExpandedMaps: ie } = d;
          X.expandLoaded = !0, ie[L] = u;
        }).catch(() => {
          X.expandLoaded = !1;
        }).finally(() => {
          const { rowExpandLazyLoadedMaps: ie } = d;
          ie[L] && delete ie[L], ae().then(() => f.recalculate()).then(() => m());
        });
      } else
        m();
    }), po = (u, m) => {
      const { rowExpandedReserveRowMap: v } = s;
      if (Y.value.reserve) {
        const C = st(B, u);
        m ? v[C] = u : v[C] && delete v[C];
      }
    }, sr = () => {
      const { mergeCells: u } = e;
      u && f.setMergeCells(u);
    }, Po = () => {
      const { mergeFooterItems: u } = e;
      u && f.setMergeFooterItems(u);
    }, io = () => ae().then(() => {
      const { scrollXLoad: u, scrollYLoad: m } = d, { scrollXStore: v, scrollYStore: w } = s, C = M.value, P = A.value;
      if (u) {
        const { visibleSize: ie } = Wt(), we = P.oSize ? i.toNumber(P.oSize) : zr.edge ? 5 : 0;
        v.offsetSize = we, v.visibleSize = ie, v.endIndex = Math.max(v.startIndex + v.visibleSize + we, v.endIndex), g.updateScrollXData();
      } else
        g.updateScrollXSpace();
      const { rowHeight: L, visibleSize: X } = Pt();
      if (w.rowHeight = L, m) {
        const ie = C.oSize ? i.toNumber(C.oSize) : zr.edge ? 10 : 0;
        w.offsetSize = ie, w.visibleSize = X, w.endIndex = Math.max(w.startIndex + X + ie, w.endIndex), g.updateScrollYData();
      } else
        g.updateScrollYSpace();
      d.rowHeight = L, ae(Zt);
    }), jn = (u) => {
      const { keepSource: m, treeConfig: v } = e, { editStore: w, scrollYLoad: C } = d, { scrollYStore: P, scrollXStore: L, lastScrollLeft: X, lastScrollTop: ie } = s, we = le.value, { transform: De } = we, _e = we.children || we.childrenField;
      let Ae = [], Pe = Ot(u ? u.slice(0) : []);
      v && (De ? (process.env.NODE_ENV === "development" && (we.rowField || Et("vxe.error.reqProp", ["tree-config.rowField"]), we.parentField || Et("vxe.error.reqProp", ["tree-config.parentField"]), _e || Et("vxe.error.reqProp", ["tree-config.childrenField"]), we.mapChildrenField || Et("vxe.error.reqProp", ["tree-config.mapChildrenField"]), _e === we.mapChildrenField && Et("vxe.error.errConflicts", ["tree-config.childrenField", "tree-config.mapChildrenField"])), Ae = i.toArrayTree(Pe, {
        key: we.rowField,
        parentKey: we.parentField,
        children: _e,
        mapChildren: we.mapChildrenField
      }), Pe = Ae.slice(0)) : Ae = Pe.slice(0)), P.startIndex = 0, P.endIndex = 1, L.startIndex = 0, L.endIndex = 1, d.scrollVMLoading = !1, w.insertMaps = {}, w.removeMaps = {};
      const Qe = rt(Pe);
      return d.scrollYLoad = Qe, s.tableFullData = Pe, s.tableFullTreeData = Ae, g.cacheRowMap(!0), s.tableSynchData = u, m && g.cacheSourceMap(Pe), process.env.NODE_ENV === "development" && Qe && (e.height || e.maxHeight || Et("vxe.error.reqProp", ["table.height | table.max-height | table.scroll-y={enabled: false}"]), e.showOverflow || Nt("vxe.error.reqProp", ["table.show-overflow"]), e.spanMethod && Nt("vxe.error.scrollErrProp", ["table.span-method"])), B.clearCellAreas && e.mouseConfig && (B.clearCellAreas(), B.clearCopyCellArea()), f.clearMergeCells(), f.clearMergeFooterItems(), g.handleTableData(!0), f.updateFooter(), ae().then(() => {
        mn(), Zt();
      }).then(() => {
        io();
      }).then(() => (Qe && (P.endIndex = P.visibleSize), Bo(), g.checkSelectionStatus(), new Promise((Ue) => {
        ae().then(() => f.recalculate()).then(() => {
          let nt = X, Be = ie;
          const ot = A.value, ht = M.value;
          ot.scrollToLeftOnChange && (nt = 0), ht.scrollToTopOnChange && (Be = 0), C === Qe ? gc(B, nt, Be).then(Ue) : setTimeout(() => gc(B, nt, Be).then(Ue));
        });
      })));
    }, Sn = () => {
      Tr(), $o(), Ao(), En(), sr(), Po(), ae(() => setTimeout(() => f.recalculate()));
    }, yo = () => {
      Zn();
    }, tn = () => {
      const { scrollXLoad: u } = d, { visibleColumn: m, scrollXStore: v, fullColumnIdData: w } = s, C = u ? m.slice(v.startIndex, v.endIndex) : m.slice(0);
      C.forEach((P, L) => {
        const X = P.id, ie = w[X];
        ie && (ie.$index = L);
      }), d.tableColumn = C;
    }, Qn = () => {
      const { mergeList: u, mergeFooterList: m } = d, { scrollXStore: v } = s, { startIndex: w, endIndex: C, offsetSize: P } = v, { toVisibleIndex: L, visibleSize: X } = Wt(), ie = {
        startIndex: Math.max(0, L - 1 - P),
        endIndex: L + X + P
      };
      jt(u.concat(m), ie, "col");
      const { startIndex: we, endIndex: De } = ie;
      (L <= w || L >= C - X - 1) && (w !== we || C !== De) && (v.startIndex = we, v.endIndex = De, g.updateScrollXData()), f.closeTooltip();
    }, ao = (u) => {
      const m = [];
      return u.forEach((v) => {
        m.push(...v.children && v.children.length ? ao(v.children) : [v]);
      }), m;
    }, q = () => {
      const u = [], m = [], v = [], { isGroup: w, columnStore: C } = d, P = A.value, { collectColumn: L, tableFullColumn: X, scrollXStore: ie, fullColumnIdData: we } = s;
      if (w) {
        const Ae = [], Pe = [], Qe = [];
        i.eachTree(L, (Ue, nt, Be, ot, ht) => {
          const kt = el(Ue);
          ht && ht.fixed && (Ue.fixed = ht.fixed), ht && Ue.fixed !== ht.fixed && Et("vxe.error.groupFixed"), kt ? Ue.visible = !!i.findTree(Ue.children, (wt) => el(wt) ? !1 : wt.visible) : Ue.visible && (Ue.fixed === "left" ? u.push(Ue) : Ue.fixed === "right" ? v.push(Ue) : m.push(Ue));
        }), L.forEach((Ue) => {
          Ue.visible && (Ue.fixed === "left" ? Ae.push(Ue) : Ue.fixed === "right" ? Qe.push(Ue) : Pe.push(Ue));
        }), d.tableGroupColumn = Ae.concat(Pe).concat(Qe);
      } else
        X.forEach((Ae) => {
          Ae.visible && (Ae.fixed === "left" ? u.push(Ae) : Ae.fixed === "right" ? v.push(Ae) : m.push(Ae));
        });
      const De = u.concat(m).concat(v), _e = !!P.enabled && P.gt > -1 && (P.gt === 0 || P.gt < X.length);
      if (d.hasFixedColumn = u.length > 0 || v.length > 0, Object.assign(C, { leftList: u, centerList: m, rightList: v }), _e) {
        process.env.NODE_ENV === "development" && (e.spanMethod && Nt("vxe.error.scrollErrProp", ["span-method"]), e.footerSpanMethod && Nt("vxe.error.scrollErrProp", ["footer-span-method"]));
        const { visibleSize: Ae } = Wt();
        ie.startIndex = 0, ie.endIndex = Ae, ie.visibleSize = Ae;
      }
      return (De.length !== s.visibleColumn.length || !s.visibleColumn.every((Ae, Pe) => Ae === De[Pe])) && (f.clearMergeCells(), f.clearMergeFooterItems()), d.scrollXLoad = _e, De.forEach((Ae, Pe) => {
        const Qe = Ae.id, Ue = we[Qe];
        Ue && (Ue._index = Pe);
      }), s.visibleColumn = De, tn(), f.updateFooter().then(() => f.recalculate()).then(() => (f.updateCellAreas(), f.recalculate()));
    }, Ne = () => {
      const { collectColumn: u } = s;
      u.forEach((m, v) => {
        const w = v + 1;
        m.sortNumber = w, m.renderSortNumber = w;
      });
    }, qe = (u) => {
      s.collectColumn = u;
      const m = ao(u);
      return s.tableFullColumn = m, d._isLoading = !0, Ne(), Promise.resolve(pn()).then(() => (d._isLoading = !1, Tn(), q().then(() => {
        d.scrollXLoad && Qn();
      }), f.clearMergeCells(), f.clearMergeFooterItems(), g.handleTableData(!0), process.env.NODE_ENV === "development" && (d.scrollXLoad || d.scrollYLoad) && d.expandColumn && Nt("vxe.error.scrollErrProp", ["column.type=expand"]), ae().then(() => (G && G.syncUpdate({ collectColumn: u, $table: B }), f.recalculate()))));
    }, rt = (u) => {
      const { treeConfig: m } = e, v = M.value, w = le.value, { transform: C } = w, P = u || s.tableFullData, L = (C || !m) && !!v.enabled && v.gt > -1 && (v.gt === 0 || v.gt < P.length);
      return d.scrollYLoad = L, L;
    }, Ct = (u, m) => {
      const { treeExpandedMaps: v, treeExpandLazyLoadedMaps: w, treeNodeColumn: C } = d, P = Object.assign({}, v), { fullAllDataRowIdData: L, tableFullData: X } = s, ie = le.value, { reserve: we, lazy: De, accordion: _e, toggleMethod: Ae } = ie, Pe = ie.children || ie.childrenField, Qe = ie.hasChild || ie.hasChildField, Ue = [], nt = f.getColumnIndex(C), Be = f.getVMColumnIndex(C);
      let ot = Ae ? u.filter((ht) => Ae({ $table: B, expanded: m, column: C, columnIndex: nt, $columnIndex: Be, row: ht })) : u;
      if (_e) {
        ot = ot.length ? [ot[ot.length - 1]] : [];
        const ht = i.findTree(X, (kt) => kt === ot[0], { children: Pe });
        ht && ht.items.forEach((kt) => {
          const wt = st(B, kt);
          P[wt] && delete P[wt];
        });
      }
      return m ? ot.forEach((ht) => {
        const kt = st(B, ht);
        if (!P[kt]) {
          const wt = L[kt];
          De && ht[Qe] && !wt.treeLoaded && !w[kt] ? Ue.push(lo(ht)) : ht[Pe] && ht[Pe].length && (P[kt] = ht);
        }
      }) : ot.forEach((ht) => {
        const kt = st(B, ht);
        P[kt] && delete P[kt];
      }), we && ot.forEach((ht) => Jn(ht, m)), d.treeExpandedMaps = P, Promise.all(Ue).then(() => f.recalculate());
    }, ct = (u, m) => Ct(u, m).then(() => (Qt(), g.handleTableData())).then(() => f.recalculate()), xt = (u, m) => {
      Ro(m), u && f.dispatchEvent("checkbox-all", {
        records: f.getCheckboxRecords(),
        reserves: f.getCheckboxReserveRecords(),
        indeterminates: f.getCheckboxIndeterminateRecords(),
        checked: m
      }, u);
    }, Tt = (u) => {
      const { mergeList: m } = d, { scrollYStore: v } = s, { startIndex: w, endIndex: C, visibleSize: P, offsetSize: L, rowHeight: X } = v, we = (u.currentTarget || u.target).scrollTop, De = Math.floor(we / X), _e = {
        startIndex: Math.max(0, De - 1 - L),
        endIndex: De + P + L
      };
      jt(m, _e, "row");
      const { startIndex: Ae, endIndex: Pe } = _e;
      (De <= w || De >= C - P - 1) && (w !== Ae || C !== Pe) && (v.startIndex = Ae, v.endIndex = Pe, g.updateScrollYData());
    }, Ke = (u) => function(m) {
      const { fullAllDataRowIdData: v } = s;
      if (m) {
        const w = st(B, m), C = v[w];
        if (C)
          return C[u];
      }
      return -1;
    }, yt = (u) => function(m) {
      const { fullColumnIdData: v } = s;
      if (m) {
        const w = v[m.id];
        if (w)
          return w[u];
      }
      return -1;
    }, sn = i.debounce(function(u) {
      Tt(u);
    }, 20, { leading: !1, trailing: !0 });
    let Gt;
    f = {
      dispatchEvent(u, m, v) {
        o(u, Y1(v, { $table: B, $grid: re }, m));
      },
      /**
       * 重置表格的一切数据状态
       */
      clearAll() {
        return R1(B);
      },
      /**
       * 同步 data 数据（即将废弃）
       * 如果用了该方法，那么组件将不再记录增删改的状态，只能自行实现对应逻辑
       * 对于某些特殊的场景，比如深层树节点元素发生变动时可能会用到
       */
      syncData() {
        return Nt("vxe.error.delFunc", ["syncData", "getData"]), ae().then(() => (d.tableData = [], o("update:data", s.tableFullData), ae()));
      },
      /**
       * 手动处理数据，用于手动排序与筛选
       * 对于手动更改了排序、筛选...等条件后需要重新处理数据时可能会用到
       */
      updateData() {
        const { scrollXLoad: u, scrollYLoad: m } = d;
        return g.handleTableData(!0).then(() => {
          if (f.updateFooter(), u || m)
            return u && g.updateScrollXSpace(), m && g.updateScrollYSpace(), f.refreshScroll();
        }).then(() => (f.updateCellAreas(), f.recalculate(!0))).then(() => {
          setTimeout(() => B.recalculate(), 50);
        });
      },
      /**
       * 重新加载数据，不会清空表格状态
       * @param {Array} datas 数据
       */
      loadData(u) {
        const { inited: m, initStatus: v } = s;
        return jn(u).then(() => (s.inited = !0, s.initStatus = !0, v || Sn(), m || yo(), f.recalculate()));
      },
      /**
       * 重新加载数据，会清空表格状态
       * @param {Array} datas 数据
       */
      reloadData(u) {
        const { inited: m } = s;
        return f.clearAll().then(() => (s.inited = !0, s.initStatus = !0, jn(u))).then(() => (Sn(), m || yo(), f.recalculate()));
      },
      /**
       * 修改行数据
       */
      setRow(u, m) {
        if (u && m) {
          let v = u;
          i.isArray(u) || (v = [u]), v.forEach((w) => Object.assign(w, m));
        }
        return ae();
      },
      /**
       * 局部加载行数据并恢复到初始状态
       * 对于行数据需要局部更改的场景中可能会用到
       * @param {Row} row 行对象
       * @param {Object} record 新数据
       * @param {String} field 字段名
       */
      reloadRow(u, m, v) {
        const { keepSource: w } = e, { tableData: C } = d, { tableSourceData: P } = s;
        if (w) {
          const L = f.getRowIndex(u), X = P[L];
          if (X && u)
            if (v) {
              const ie = i.get(m || u, v);
              i.set(u, v, ie), i.set(X, v, ie);
            } else {
              const ie = i.clone(Object.assign({}, m), !0);
              i.destructuring(X, Object.assign(u, ie));
            }
          d.tableData = C.slice(0);
        } else
          process.env.NODE_ENV === "development" && Nt("vxe.error.reqProp", ["keep-source"]);
        return ae();
      },
      getParams() {
        return e.params;
      },
      /**
       * 用于树结构，给行数据加载子节点
       */
      loadTreeChildren(u, m) {
        const { keepSource: v } = e, { tableSourceData: w, fullDataRowIdData: C, fullAllDataRowIdData: P, sourceDataRowIdData: L } = s, X = le.value, { transform: ie, mapChildrenField: we } = X, De = X.children || X.childrenField, _e = P[st(B, u)], Ae = _e ? _e.level : 0;
        return f.createData(m).then((Pe) => {
          if (v) {
            const Qe = st(B, u), Ue = i.findTree(w, (nt) => Qe === st(B, nt), { children: De });
            Ue && (Ue.item[De] = i.clone(Pe, !0)), Pe.forEach((nt) => {
              const Be = st(B, nt);
              L[Be] = i.clone(nt, !0);
            });
          }
          return i.eachTree(Pe, (Qe, Ue, nt, Be, ot, ht) => {
            const kt = st(B, Qe), wt = ot || _e.row, Ft = { row: Qe, rowid: kt, seq: -1, index: Ue, _index: -1, $index: -1, items: nt, parent: wt, level: Ae + ht.length };
            C[kt] = Ft, P[kt] = Ft;
          }, { children: De }), u[De] = Pe, ie && (u[we] = Pe), cn(), Pe;
        });
      },
      /**
       * 加载列配置
       * 对于表格列需要重载、局部递增场景下可能会用到
       * @param {ColumnInfo} columns 列配置
       */
      loadColumn(u) {
        const m = i.mapTree(u, (v) => Ot(Rt.createColumn(B, v)));
        return qe(m);
      },
      /**
       * 加载列配置并恢复到初始状态
       * 对于表格列需要重载、局部递增场景下可能会用到
       * @param {ColumnInfo} columns 列配置
       */
      reloadColumn(u) {
        return f.clearAll().then(() => f.loadColumn(u));
      },
      /**
       * 根据 tr 元素获取对应的 row 信息
       * @param {Element} tr 元素
       */
      getRowNode(u) {
        if (u) {
          const { fullAllDataRowIdData: m } = s, v = u.getAttribute("rowid");
          if (v) {
            const w = m[v];
            if (w)
              return { rowid: w.rowid, item: w.row, index: w.index, items: w.items, parent: w.parent };
          }
        }
        return null;
      },
      /**
       * 根据 th/td 元素获取对应的 column 信息
       * @param {Element} cell 元素
       */
      getColumnNode(u) {
        if (u) {
          const { fullColumnIdData: m } = s, v = u.getAttribute("colid");
          if (v) {
            const w = m[v];
            if (w)
              return { colid: w.colid, item: w.column, index: w.index, items: w.items, parent: w.parent };
          }
        }
        return null;
      },
      /**
       * 根据 row 获取序号
       * @param {Row} row 行对象
       */
      getRowSeq: Ke("seq"),
      /**
       * 根据 row 获取相对于 data 中的索引
       * @param {Row} row 行对象
       */
      getRowIndex: Ke("index"),
      /**
       * 根据 row 获取相对于当前数据中的索引
       * @param {Row} row 行对象
       */
      getVTRowIndex: Ke("_index"),
      /**
       * 根据 row 获取渲染中的虚拟索引
       * @param {Row} row 行对象
       */
      getVMRowIndex: Ke("$index"),
      /**
       * 根据 column 获取相对于 columns 中的索引
       * @param {ColumnInfo} column 列配置
       */
      getColumnIndex: yt("index"),
      /**
       * 根据 column 获取相对于当前表格列中的索引
       * @param {ColumnInfo} column 列配置
       */
      getVTColumnIndex: yt("_index"),
      /**
       * 根据 column 获取渲染中的虚拟索引
       * @param {ColumnInfo} column 列配置
       */
      getVMColumnIndex: yt("$index"),
      /**
       * 创建 data 对象
       * 对于某些特殊场景可能会用到，会自动对数据的字段名进行检测，如果不存在就自动定义
       * @param {Array} records 新数据
       */
      createData(u) {
        return ae().then(() => Ot(g.defineField(u)));
      },
      /**
       * 创建 Row|Rows 对象
       * 对于某些特殊场景需要对数据进行手动插入时可能会用到
       * @param {Array/Object} records 新数据
       */
      createRow(u) {
        const m = i.isArray(u);
        return m || (u = [u || {}]), f.createData(u).then((v) => m ? v : v[0]);
      },
      /**
       * 还原数据
       * 如果不传任何参数，则还原整个表格
       * 如果传 row 则还原一行
       * 如果传 rows 则还原多行
       * 如果还额外传了 field 则还原指定的单元格数据
       */
      revertData(u, m) {
        const { keepSource: v } = e, { tableSourceData: w, sourceDataRowIdData: C } = s;
        if (!v)
          return process.env.NODE_ENV === "development" && Nt("vxe.error.reqProp", ["keep-source"]), ae();
        let P = u;
        return u ? i.isArray(u) || (P = [u]) : P = i.toArray(B.getUpdateRecords()), P.length && P.forEach((L) => {
          if (!f.isInsertByRow(L)) {
            const X = st(B, L), ie = C[X];
            ie && L && (m ? i.set(L, m, i.clone(i.get(ie, m), !0)) : i.destructuring(L, i.clone(ie, !0)));
          }
        }), u ? ae() : f.reloadData(w);
      },
      /**
       * 清空单元格内容
       * 如果不创参数，则清空整个表格内容
       * 如果传 row 则清空一行内容
       * 如果传 rows 则清空多行内容
       * 如果还额外传了 field 则清空指定单元格内容
       * @param {Array/Row} rows 行数据
       * @param {String} field 字段名
       */
      clearData(u, m) {
        const { tableFullData: v, visibleColumn: w } = s;
        return arguments.length ? u && !i.isArray(u) && (u = [u]) : u = v, m ? u.forEach((C) => i.set(C, m, null)) : u.forEach((C) => {
          w.forEach((P) => {
            P.field && tr(C, P, null);
          });
        }), ae();
      },
      getCellElement(u, m) {
        const v = Xn(B, m);
        if (!v)
          return null;
        const w = st(B, u), C = T.value, P = I.value, L = Ce.value;
        let X;
        return v && (v.fixed && (v.fixed === "left" ? P && (X = P.$el) : L && (X = L.$el)), X || (X = C.$el), X) ? X.querySelector(`.vxe-body--row[rowid="${w}"] .${v.id}`) : null;
      },
      getCellLabel(u, m) {
        const v = Xn(B, m);
        if (!v)
          return null;
        const w = v.formatter, C = Io(u, v);
        let P = C;
        if (w) {
          let L;
          const { fullAllDataRowIdData: X } = s, ie = st(B, u), we = v.id, De = X[ie];
          if (De && (L = De.formatData, L || (L = X[ie].formatData = {}), De && L[we] && L[we].value === C))
            return L[we].label;
          const _e = { cellValue: C, row: u, rowIndex: f.getRowIndex(u), column: v, columnIndex: f.getColumnIndex(v) };
          if (i.isString(w)) {
            const Ae = Up.get(w), Pe = Ae ? Ae.tableCellFormatMethod || Ae.cellFormatMethod : null;
            P = Pe ? Pe(_e) : "";
          } else if (i.isArray(w)) {
            const Ae = Up.get(w[0]), Pe = Ae ? Ae.tableCellFormatMethod || Ae.cellFormatMethod : null;
            P = Pe ? Pe(_e, ...w.slice(1)) : "";
          } else
            P = w(_e);
          L && (L[we] = { value: C, label: P });
        }
        return P;
      },
      /**
       * 检查是否为临时行数据
       * @param {Row} row 行对象
       */
      isInsertByRow(u) {
        const { editStore: m } = d, v = st(B, u);
        return m.insertMaps[v];
      },
      /**
       * 删除所有新增的临时数据
       * @returns
       */
      removeInsertRow() {
        const { editStore: u } = d;
        return u.insertMaps = {}, B.remove(B.getInsertRecords());
      },
      /**
       * 检查行或列数据是否发生改变
       * @param {Row} row 行对象
       * @param {String} field 字段名
       */
      isUpdateByRow(u, m) {
        const { keepSource: v } = e, { tableFullColumn: w, fullDataRowIdData: C, sourceDataRowIdData: P } = s;
        if (v) {
          const L = st(B, u);
          if (!C[L])
            return !1;
          const X = P[L];
          if (X) {
            if (arguments.length > 1)
              return !Mt(X, u, m);
            for (let ie = 0, we = w.length; ie < we; ie++) {
              const De = w[ie].field;
              if (De && !Mt(X, u, De))
                return !0;
            }
          }
        }
        return !1;
      },
      /**
       * 获取表格的可视列，也可以指定索引获取列
       * @param {Number} columnIndex 索引
       */
      getColumns(u) {
        const m = s.visibleColumn;
        return i.isUndefined(u) ? m.slice(0) : m[u];
      },
      /**
       * 根据列获取列的唯一主键
       */
      getColid(u) {
        const m = Xn(B, u);
        return m ? m.id : null;
      },
      /**
       * 根据列的唯一主键获取列
       * @param {String} colid 列主键
       */
      getColumnById(u) {
        const m = s.fullColumnIdData;
        return u && m[u] ? m[u].column : null;
      },
      /**
       * 根据列的字段名获取列
       * @param {String} field 字段名
       */
      getColumnByField(u) {
        const m = s.fullColumnFieldData;
        return u && m[u] ? m[u].column : null;
      },
      /**
       * 获取当前表格的列
       * 收集到的全量列、全量表头列、处理条件之后的全量表头列、当前渲染中的表头列
       */
      getTableColumn() {
        return {
          collectColumn: s.collectColumn.slice(0),
          fullColumn: s.tableFullColumn.slice(0),
          visibleColumn: s.visibleColumn.slice(0),
          tableColumn: d.tableColumn.slice(0)
        };
      },
      /**
       * 获取数据，和 data 的行为一致，也可以指定索引获取数据
       */
      getData(u) {
        const m = e.data || s.tableSynchData;
        return i.isUndefined(u) ? m.slice(0) : m[u];
      },
      /**
       * 用于多选行，获取已选中的数据
       */
      getCheckboxRecords(u) {
        const { treeConfig: m } = e, { tableFullData: v, afterFullData: w, afterTreeFullData: C, tableFullTreeData: P, fullDataRowIdData: L, afterFullRowMaps: X } = s, ie = le.value, we = k.value, { transform: De, mapChildrenField: _e } = ie, { checkField: Ae } = we, Pe = ie.children || ie.childrenField;
        let Qe = [];
        const Ue = u ? De ? P : v : De ? C : w;
        if (Ae)
          m ? Qe = i.filterTree(Ue, (nt) => i.get(nt, Ae), { children: De ? _e : Pe }) : Qe = Ue.filter((nt) => i.get(nt, Ae));
        else {
          const { selectCheckboxMaps: nt } = d;
          i.each(nt, (Be, ot) => {
            u ? L[ot] && Qe.push(L[ot].row) : X[ot] && Qe.push(X[ot]);
          });
        }
        return Qe;
      },
      /**
       * 只对 tree-config 有效，获取行的父级
       */
      getParentRow(u) {
        const { treeConfig: m } = e, { fullDataRowIdData: v } = s;
        if (u && m) {
          let w;
          if (i.isString(u) ? w = u : w = st(B, u), w) {
            const C = v[w];
            return C ? C.parent : null;
          }
        }
        return null;
      },
      /**
       * 根据行的唯一主键获取行
       * @param {String/Number} rowid 行主键
       */
      getRowById(u) {
        const { fullDataRowIdData: m } = s, v = i.eqNull(u) ? "" : encodeURIComponent(u || "");
        return m[v] ? m[v].row : null;
      },
      /**
       * 根据行获取行的唯一主键
       * @param {Row} row 行对象
       */
      getRowid(u) {
        return st(B, u);
      },
      /**
       * 获取处理后的表格数据
       * 如果存在筛选条件，继续处理
       * 如果存在排序，继续处理
       */
      getTableData() {
        const { tableData: u, footerTableData: m } = d, { tableFullData: v, afterFullData: w, tableFullTreeData: C } = s;
        return {
          fullData: e.treeConfig ? C.slice(0) : v.slice(0),
          visibleData: w.slice(0),
          tableData: u.slice(0),
          footerData: m.slice(0)
        };
      },
      /**
       * 设置为固定列
       */
      setColumnFixed(u, m) {
        const v = Xn(B, u), w = Lp(B, v), C = Xe.value, P = ne.value;
        return w && w.fixed !== m ? !w.fixed && C ? (ue.modal && ue.modal.message({
          status: "error",
          content: qp("vxe.table.maxFixedCol", [P.maxFixedSize])
        }), ae()) : (i.eachTree([w], (L) => {
          L.fixed = m;
        }), g.saveCustomStore("update:fixed"), f.refreshColumn()) : ae();
      },
      /**
       * 取消指定固定列
       */
      clearColumnFixed(u) {
        const m = Xn(B, u), v = Lp(B, m);
        return v && v.fixed ? (i.eachTree([v], (w) => {
          w.fixed = null;
        }), g.saveCustomStore("update:fixed"), f.refreshColumn()) : ae();
      },
      /**
       * 隐藏指定列
       */
      hideColumn(u) {
        const m = Xn(B, u);
        return m && m.visible ? (m.visible = !1, g.handleCustom()) : ae();
      },
      /**
       * 显示指定列
       */
      showColumn(u) {
        const m = Xn(B, u);
        return m && !m.visible ? (m.visible = !0, g.handleCustom()) : ae();
      },
      setColumnWidth(u, m) {
        const v = Xn(B, u);
        if (v) {
          const w = i.toInteger(m);
          let C = w;
          if (mi(m)) {
            const P = T.value, L = P ? P.$el : null, X = L ? L.clientWidth - 1 : 0;
            C = Math.floor(w * X);
          }
          v.renderWidth = C;
        }
        return ae();
      },
      getColumnWidth(u) {
        const m = Xn(B, u);
        return m ? m.renderWidth : 0;
      },
      /**
       * 手动重置列的显示隐藏、列宽拖动的状态、固定列、排序列；
       * 如果为 true 则重置所有状态
       * 如果已关联工具栏，则会同步更新
       */
      resetColumn(u) {
        const { collectColumn: m } = s, v = Se.value, { checkMethod: w } = v, C = Object.assign({
          visible: !0,
          resizable: u === !0,
          fixed: u === !0,
          sort: u === !0
        }, u);
        return i.eachTree(m, (P) => {
          C.resizable && (P.resizeWidth = 0), C.fixed && (P.fixed = P.defaultFixed), C.sort && (P.renderSortNumber = P.sortNumber), (!w || w({ column: P })) && (P.visible = P.defaultVisible), P.renderResizeWidth = P.renderWidth;
        }), B.saveCustomStore("reset"), g.handleCustom();
      },
      /**
       * 刷新列信息
       * 将固定的列左边、右边分别靠边
       * 如果传 true 则会检查列顺序并排序
       */
      refreshColumn(u) {
        if (u) {
          const m = i.orderBy(s.collectColumn, "renderSortNumber");
          s.collectColumn = m;
          const v = ao(m);
          s.tableFullColumn = v, Tn();
        }
        return q().then(() => f.refreshScroll()).then(() => f.recalculate());
      },
      /**
       * 刷新滚动操作，手动同步滚动相关位置（对于某些特殊的操作，比如滚动条错位、固定列不同步）
       */
      refreshScroll() {
        const { lastScrollLeft: u, lastScrollTop: m } = s, v = T.value, w = W.value, C = I.value, P = Ce.value, L = v ? v.$el : null, X = C ? C.$el : null, ie = P ? P.$el : null, we = w ? w.$el : null;
        return new Promise((De) => {
          if (u || m)
            return gc(B, u, m).then().then(() => {
              setTimeout(De, 30);
            });
          ta(L, m), ta(X, m), ta(ie, m), Rp(we, u), setTimeout(De, 30);
        });
      },
      /**
       * 计算单元格列宽，动态分配可用剩余空间
       * 支持 width=? width=?px width=?% min-width=? min-width=?px min-width=?%
       */
      recalculate(u) {
        return hn(), u === !0 ? io().then(() => (hn(), io())) : io();
      },
      openTooltip(u, m) {
        const v = x.value;
        return v && v.open ? v.open(u, m) : ae();
      },
      /**
       * 关闭 tooltip
       */
      closeTooltip() {
        const { tooltipStore: u } = d, m = b.value, v = x.value;
        return u.visible && (Object.assign(u, {
          row: null,
          column: null,
          content: null,
          visible: !1,
          currOpts: {}
        }), m && m.close && m.close()), v && v.close && v.close(), ae();
      },
      /**
       * 判断列头复选框是否被选中
       */
      isAllCheckboxChecked() {
        return d.isAllSelected;
      },
      /**
       * 判断列头复选框是否被半选
       */
      isAllCheckboxIndeterminate() {
        return !d.isAllSelected && d.isIndeterminate;
      },
      /**
       * 获取复选框半选状态的行数据
       */
      getCheckboxIndeterminateRecords(u) {
        const { treeConfig: m } = e, { fullDataRowIdData: v } = s, { treeIndeterminateMaps: w } = d;
        if (m) {
          const C = [], P = [];
          return i.each(w, (L, X) => {
            L && (C.push(L), v[X] && P.push(L));
          }), u ? C : P;
        }
        return [];
      },
      /**
       * 用于多选行，设置行为选中状态，第二个参数为选中与否
       * @param {Array/Row} rows 行数据
       * @param {Boolean} value 是否选中
       */
      setCheckboxRow(u, m) {
        return zn(u, m, !0);
      },
      isCheckedByCheckboxRow(u) {
        const { selectCheckboxMaps: m } = d, v = k.value, { checkField: w } = v;
        return w ? i.get(u, w) : !!m[st(B, u)];
      },
      isIndeterminateByCheckboxRow(u) {
        const { treeIndeterminateMaps: m } = d;
        return !!m[st(B, u)] && !f.isCheckedByCheckboxRow(u);
      },
      /**
       * 多选，切换某一行的选中状态
       */
      toggleCheckboxRow(u) {
        const { selectCheckboxMaps: m } = d, v = k.value, { checkField: w } = v, C = w ? !i.get(u, w) : !m[st(B, u)];
        return g.handleSelectRow({ row: u }, C, !0), ae();
      },
      /**
       * 用于多选行，设置所有行的选中状态
       * @param {Boolean} value 是否选中
       */
      setAllCheckboxRow(u) {
        return Ro(u, !0);
      },
      /**
       * 获取单选框保留选中的行
       */
      getRadioReserveRecord(u) {
        const { treeConfig: m } = e, { fullDataRowIdData: v, radioReserveRow: w, afterFullData: C } = s, P = R.value, L = le.value, X = L.children || L.childrenField;
        if (P.reserve && w) {
          const ie = st(B, w);
          if (u) {
            if (!v[ie])
              return w;
          } else {
            const we = ps(B);
            if (m) {
              if (i.findTree(C, (_e) => ie === i.get(_e, we), { children: X }))
                return w;
            } else if (!C.some((De) => ie === i.get(De, we)))
              return w;
          }
        }
        return null;
      },
      clearRadioReserve() {
        return s.radioReserveRow = null, ae();
      },
      /**
       * 获取复选框保留选中的行
       */
      getCheckboxReserveRecords(u) {
        const { treeConfig: m } = e, { afterFullData: v, fullDataRowIdData: w, checkboxReserveRowMap: C } = s, P = k.value, L = le.value, X = L.children || L.childrenField, ie = [];
        if (P.reserve) {
          const we = {};
          m ? i.eachTree(v, (De) => {
            we[st(B, De)] = 1;
          }, { children: X }) : v.forEach((De) => {
            we[st(B, De)] = 1;
          }), i.each(C, (De, _e) => {
            De && (u ? w[_e] || ie.push(De) : we[_e] || ie.push(De));
          });
        }
        return ie;
      },
      clearCheckboxReserve() {
        return s.checkboxReserveRowMap = {}, ae();
      },
      /**
       * 多选，切换所有行的选中状态
       */
      toggleAllCheckboxRow() {
        return xt(null, !d.isAllSelected), ae();
      },
      /**
       * 用于多选行，手动清空用户的选择
       * 清空行为不管是否被禁用还是保留记录，都将彻底清空选中状态
       */
      clearCheckboxRow() {
        const { treeConfig: u } = e, { tableFullData: m } = s, v = le.value, w = v.children || v.childrenField, C = k.value, { checkField: P, reserve: L } = C, X = C.indeterminateField || C.halfField;
        if (P) {
          const ie = (we) => {
            u && X && i.set(we, X, !1), i.set(we, P, !1);
          };
          u ? i.eachTree(m, ie, { children: w }) : m.forEach(ie);
        }
        return L && m.forEach((ie) => fo(ie, !1)), d.isAllSelected = !1, d.isIndeterminate = !1, d.selectCheckboxMaps = {}, d.treeIndeterminateMaps = {}, ae();
      },
      /**
       * 用于当前行，设置某一行为高亮状态
       * @param {Row} row 行对象
       */
      setCurrentRow(u) {
        const m = de.value, v = D.value;
        return f.clearCurrentRow(), d.currentRow = u, (m.isCurrent || e.highlightCurrentRow) && v && i.arrayEach(v.querySelectorAll(`[rowid="${st(B, u)}"]`), (w) => vr(w, "row--current")), ae();
      },
      isCheckedByRadioRow(u) {
        return B.eqRow(d.selectRadioRow, u);
      },
      /**
       * 用于单选行，设置某一行为选中状态
       * @param {Row} row 行对象
       */
      setRadioRow(u) {
        return Wo(u, !0);
      },
      /**
       * 用于当前行，手动清空当前高亮的状态
       */
      clearCurrentRow() {
        const u = D.value;
        return d.currentRow = null, s.hoverRow = null, u && i.arrayEach(u.querySelectorAll(".row--current"), (m) => Oo(m, "row--current")), ae();
      },
      /**
       * 用于单选行，手动清空用户的选择
       */
      clearRadioRow() {
        return d.selectRadioRow = null, ae();
      },
      /**
       * 用于当前行，获取当前行的数据
       */
      getCurrentRecord() {
        return de.value.isCurrent || e.highlightCurrentRow ? d.currentRow : null;
      },
      /**
       * 用于单选行，获取当已选中的数据
       */
      getRadioRecord(u) {
        const { fullDataRowIdData: m, afterFullRowMaps: v } = s, { selectRadioRow: w } = d;
        if (w) {
          const C = st(B, w);
          if (u) {
            if (m[C])
              return w;
          } else if (v[C])
            return w;
        }
        return null;
      },
      getCurrentColumn() {
        return ne.value.isCurrent || e.highlightCurrentColumn ? d.currentColumn : null;
      },
      /**
       * 用于当前列，设置某列行为高亮状态
       */
      setCurrentColumn(u) {
        const m = Xn(B, u);
        return m && (f.clearCurrentColumn(), d.currentColumn = m), ae();
      },
      /**
       * 用于当前列，手动清空当前高亮的状态
       */
      clearCurrentColumn() {
        return d.currentColumn = null, ae();
      },
      setPendingRow(u, m) {
        const v = Object.assign({}, d.pendingRowMaps), w = [...d.pendingRowList];
        return u && !i.isArray(u) && (u = [u]), m ? u.forEach((C) => {
          const P = st(B, C);
          P && !v[P] && (w.push(C), v[P] = C);
        }) : u.forEach((C) => {
          const P = st(B, C);
          if (P && v[P]) {
            const L = B.findRowIndexOf(w, C);
            L > -1 && w.splice(L, 1), delete v[P];
          }
        }), d.pendingRowMaps = v, d.pendingRowList = w, ae();
      },
      togglePendingRow(u) {
        const m = Object.assign({}, d.pendingRowMaps), v = [...d.pendingRowList];
        return u && !i.isArray(u) && (u = [u]), u.forEach((w) => {
          const C = st(B, w);
          if (C)
            if (m[C]) {
              const P = B.findRowIndexOf(v, w);
              P > -1 && v.splice(P, 1), delete m[C];
            } else
              v.push(w), m[C] = w;
        }), d.pendingRowMaps = m, d.pendingRowList = v, ae();
      },
      hasPendingByRow(u) {
        return f.isPendingByRow(u);
      },
      isPendingByRow(u) {
        const { pendingRowMaps: m } = d, v = st(B, u);
        return !!m[v];
      },
      getPendingRecords() {
        const { pendingRowList: u } = d;
        return u.slice(0);
      },
      clearPendingRow() {
        return d.pendingRowMaps = {}, d.pendingRowList = [], ae();
      },
      sort(u, m) {
        const v = ke.value, { multiple: w, remote: C, orders: P } = v;
        return u && i.isString(u) && (u = [
          { field: u, order: m }
        ]), i.isArray(u) || (u = [u]), u.length ? (w || _t(), (w ? u : [u[0]]).forEach((L, X) => {
          let { field: ie, order: we } = L, De = ie;
          i.isString(ie) && (De = f.getColumnByField(ie)), De && De.sortable && (P.indexOf(we) === -1 && (we = St(De)), De.order !== we && (De.order = we), De.sortTime = Date.now() + X);
        }), C || g.handleTableData(!0), ae().then(() => (f.updateCellAreas(), Zt()))) : ae();
      },
      /**
       * 清空指定列的排序条件
       * 如果为空则清空所有列的排序条件
       * @param {String} fieldOrColumn 列或字段名
       */
      clearSort(u) {
        const m = ke.value;
        if (u) {
          const v = Xn(B, u);
          v && (v.order = null);
        } else
          _t();
        return m.remote || g.handleTableData(!0), ae().then(Zt);
      },
      isSort(u) {
        if (u) {
          const m = Xn(B, u);
          return m ? m.sortable && !!m.order : !1;
        }
        return f.getSortColumns().length > 0;
      },
      getSortColumns() {
        const u = ke.value, { multiple: m, chronological: v } = u, w = [], { tableFullColumn: C } = s;
        return C.forEach((P) => {
          const { field: L, order: X } = P;
          P.sortable && X && w.push({ column: P, field: L, property: L, order: X, sortTime: P.sortTime });
        }), m && v && w.length > 1 ? i.orderBy(w, "sortTime") : w;
      },
      /**
       * 关闭筛选
       * @param {Event} evnt 事件
       */
      closeFilter() {
        const { filterStore: u } = d, { column: m, visible: v } = u;
        return Object.assign(u, {
          isAllSelected: !1,
          isIndeterminate: !1,
          options: [],
          visible: !1
        }), v && B.dispatchEvent("filter-visible", { column: m, property: m.field, field: m.field, filterList: B.getCheckedFilters(), visible: !1 }, null), ae();
      },
      /**
       * 判断指定列是否为筛选状态，如果为空则判断所有列
       * @param {String} fieldOrColumn 字段名
       */
      isActiveFilterByColumn(u) {
        const m = Xn(B, u);
        return m ? m.filters && m.filters.some((v) => v.checked) : B.getCheckedFilters().length > 0;
      },
      isFilter(u) {
        return f.isActiveFilterByColumn(u);
      },
      /**
       * 判断展开行是否懒加载完成
       * @param {Row} row 行对象
       */
      isRowExpandLoaded(u) {
        const { fullAllDataRowIdData: m } = s, v = m[st(B, u)];
        return v && !!v.expandLoaded;
      },
      clearRowExpandLoaded(u) {
        const { rowExpandLazyLoadedMaps: m } = d, { fullAllDataRowIdData: v } = s, w = Y.value, { lazy: C } = w, P = st(B, u), L = v[P];
        return C && L && (L.expandLoaded = !1, delete m[P]), ae();
      },
      /**
       * 重新懒加载展开行，并展开内容
       * @param {Row} row 行对象
       */
      reloadRowExpand(u) {
        const { rowExpandLazyLoadedMaps: m } = d, v = Y.value, { lazy: w } = v, C = st(B, u);
        return w && !m[C] && f.clearRowExpandLoaded(u).then(() => Xo(u)), ae();
      },
      reloadExpandContent(u) {
        return process.env.NODE_ENV === "development" && Nt("vxe.error.delFunc", ["reloadExpandContent", "reloadRowExpand"]), f.reloadRowExpand(u);
      },
      /**
       * 切换展开行
       */
      toggleRowExpand(u) {
        return f.setRowExpand(u, !f.isRowExpandByRow(u));
      },
      /**
       * 设置所有行的展开与否
       * @param {Boolean} expanded 是否展开
       */
      setAllRowExpand(u) {
        const m = le.value, { tableFullData: v, tableFullTreeData: w } = s, C = m.children || m.childrenField;
        let P = [];
        return e.treeConfig ? i.eachTree(w, (L) => {
          P.push(L);
        }, { children: C }) : P = v, f.setRowExpand(P, u);
      },
      /**
       * 设置展开行，二个参数设置这一行展开与否
       * 支持单行
       * 支持多行
       * @param {Array/Row} rows 行数据
       * @param {Boolean} expanded 是否展开
       */
      setRowExpand(u, m) {
        const { rowExpandedMaps: v, rowExpandLazyLoadedMaps: w, expandColumn: C } = d, { fullAllDataRowIdData: P } = s;
        let L = Object.assign({}, v);
        const X = Y.value, { reserve: ie, lazy: we, accordion: De, toggleMethod: _e } = X, Ae = [], Pe = f.getColumnIndex(C), Qe = f.getVMColumnIndex(C);
        if (u) {
          i.isArray(u) || (u = [u]), De && (L = {}, u = u.slice(u.length - 1, u.length));
          const Ue = _e ? u.filter((nt) => _e({ $table: B, expanded: m, column: C, columnIndex: Pe, $columnIndex: Qe, row: nt, rowIndex: f.getRowIndex(nt), $rowIndex: f.getVMRowIndex(nt) })) : u;
          m ? Ue.forEach((nt) => {
            const Be = st(B, nt);
            if (!L[Be]) {
              const ot = P[Be];
              we && !ot.expandLoaded && !w[Be] ? Ae.push(Xo(nt)) : L[Be] = nt;
            }
          }) : Ue.forEach((nt) => {
            const Be = st(B, nt);
            L[Be] && delete L[Be];
          }), ie && Ue.forEach((nt) => po(nt, m));
        }
        return d.rowExpandedMaps = L, Promise.all(Ae).then(() => f.recalculate());
      },
      /**
       * 判断行是否为展开状态
       * @param {Row} row 行对象
       */
      isRowExpandByRow(u) {
        const { rowExpandedMaps: m } = d, v = st(B, u);
        return !!m[v];
      },
      isExpandByRow(u) {
        return process.env.NODE_ENV === "development" && Nt("vxe.error.delFunc", ["isExpandByRow", "isRowExpandByRow"]), f.isRowExpandByRow(u);
      },
      /**
       * 手动清空展开行状态，数据会恢复成未展开的状态
       */
      clearRowExpand() {
        const { tableFullData: u } = s, m = Y.value, { reserve: v } = m, w = f.getRowExpandRecords();
        return d.rowExpandedMaps = {}, v && u.forEach((C) => po(C, !1)), ae().then(() => {
          w.length && f.recalculate();
        });
      },
      clearRowExpandReserve() {
        return s.rowExpandedReserveRowMap = {}, ae();
      },
      getRowExpandRecords() {
        const u = [];
        return i.each(d.rowExpandedMaps, (m) => {
          m && u.push(m);
        }), u;
      },
      getTreeExpandRecords() {
        const u = [];
        return i.each(d.treeExpandedMaps, (m) => {
          m && u.push(m);
        }), u;
      },
      /**
       * 判断树节点是否懒加载完成
       * @param {Row} row 行对象
       */
      isTreeExpandLoaded(u) {
        const { fullAllDataRowIdData: m } = s, v = m[st(B, u)];
        return v && !!v.treeLoaded;
      },
      clearTreeExpandLoaded(u) {
        const { treeExpandedMaps: m } = d, { fullAllDataRowIdData: v } = s, w = le.value, { transform: C, lazy: P } = w, L = st(B, u), X = v[L];
        return P && X && (X.treeLoaded = !1, m[L] && delete m[L]), C ? (Qt(), g.handleTableData()) : ae();
      },
      /**
       * 重新懒加载树节点，并展开该节点
       * @param {Row} row 行对象
       */
      reloadTreeExpand(u) {
        const { treeExpandLazyLoadedMaps: m } = d, v = le.value, w = v.hasChild || v.hasChildField, { transform: C, lazy: P } = v, L = st(B, u);
        return P && u[w] && !m[L] && f.clearTreeExpandLoaded(u).then(() => lo(u)).then(() => {
          if (C)
            return Qt(), g.handleTableData();
        }).then(() => f.recalculate()), ae();
      },
      reloadTreeChilds(u) {
        return process.env.NODE_ENV === "development" && Nt("vxe.error.delFunc", ["reloadTreeChilds", "reloadTreeExpand"]), f.reloadTreeExpand(u);
      },
      /**
       * 切换/展开树节点
       */
      toggleTreeExpand(u) {
        return f.setTreeExpand(u, !f.isTreeExpandByRow(u));
      },
      /**
       * 设置所有树节点的展开与否
       * @param {Boolean} expanded 是否展开
       */
      setAllTreeExpand(u) {
        const { tableFullData: m } = s, v = le.value, { transform: w, lazy: C } = v, P = v.children || v.childrenField, L = [];
        return i.eachTree(m, (X) => {
          const ie = X[P];
          (C || ie && ie.length) && L.push(X);
        }, { children: P }), f.setTreeExpand(L, u).then(() => {
          if (w)
            return Qt(), f.recalculate();
        });
      },
      /**
       * 设置展开树形节点，二个参数设置这一行展开与否
       * 支持单行
       * 支持多行
       * @param {Array/Row} rows 行数据
       * @param {Boolean} expanded 是否展开
       */
      setTreeExpand(u, m) {
        const v = le.value, { transform: w } = v;
        return u && (i.isArray(u) || (u = [u]), u.length) ? w ? ct(u, m) : Ct(u, m) : ae();
      },
      /**
       * 判断行是否为树形节点展开状态
       * @param {Row} row 行对象
       */
      isTreeExpandByRow(u) {
        const { treeExpandedMaps: m } = d;
        return !!m[st(B, u)];
      },
      /**
       * 手动清空树形节点的展开状态，数据会恢复成未展开的状态
       */
      clearTreeExpand() {
        const { tableFullTreeData: u } = s, m = le.value, v = m.children || m.childrenField, { transform: w, reserve: C } = m, P = f.getTreeExpandRecords();
        return d.treeExpandedMaps = {}, C && i.eachTree(u, (L) => Jn(L, !1), { children: v }), g.handleTableData().then(() => {
          if (w)
            return Qt(), g.handleTableData();
        }).then(() => {
          if (P.length)
            return f.recalculate();
        });
      },
      clearTreeExpandReserve() {
        return s.treeExpandedReserveRowMap = {}, ae();
      },
      /**
       * 获取表格的滚动状态
       */
      getScroll() {
        const { scrollXLoad: u, scrollYLoad: m } = d, w = T.value.$el;
        return {
          virtualX: u,
          virtualY: m,
          scrollTop: w.scrollTop,
          scrollLeft: w.scrollLeft
        };
      },
      /**
       * 如果有滚动条，则滚动到对应的位置
       * @param {Number} scrollLeft 左距离
       * @param {Number} scrollTop 上距离
       */
      scrollTo(u, m) {
        const v = T.value, w = W.value, C = Ce.value, P = v ? v.$el : null, L = C ? C.$el : null, X = w ? w.$el : null;
        return i.isNumber(u) && Rp(X || P, u), i.isNumber(m) && ta(L || P, m), d.scrollXLoad || d.scrollYLoad ? new Promise((ie) => {
          setTimeout(() => {
            ae(() => {
              ie();
            });
          }, 50);
        }) : ae();
      },
      /**
       * 如果有滚动条，则滚动到对应的行
       * @param {Row} row 行对象
       * @param {ColumnInfo} fieldOrColumn 列配置
       */
      scrollToRow(u, m) {
        const v = [];
        return u && (e.treeConfig ? v.push(g.scrollToTreeRow(u)) : v.push(Ap(B, u))), m && v.push(f.scrollToColumn(m)), Promise.all(v);
      },
      /**
       * 如果有滚动条，则滚动到对应的列
       */
      scrollToColumn(u) {
        const { fullColumnIdData: m } = s, v = Xn(B, u);
        return v && m[v.id] ? P1(B, v) : ae();
      },
      /**
       * 手动清除滚动相关信息，还原到初始状态
       */
      clearScroll() {
        const { scrollXStore: u, scrollYStore: m } = s, v = T.value, w = W.value, C = Ce.value, P = v ? v.$el : null, L = C ? C.$el : null, X = w ? w.$el : null;
        return L && (ha(L), L.scrollTop = 0), X && (X.scrollLeft = 0), P && (ha(P), P.scrollTop = 0, P.scrollLeft = 0), u.startIndex = 0, u.endIndex = u.visibleSize, m.startIndex = 0, m.endIndex = m.visibleSize, ae();
      },
      /**
       * 更新表尾合计
       */
      updateFooter() {
        const { showFooter: u, footerData: m, footerMethod: v } = e, { visibleColumn: w, afterFullData: C } = s;
        let P = [];
        return u && m && m.length ? P = m.slice(0) : u && v && (P = w.length ? v({ columns: w, data: C, $table: B, $grid: re }) : []), d.footerTableData = P, ae();
      },
      /**
       * 更新列状态 updateStatus({ row, column }, cellValue)
       * 如果组件值 v-model 发生 change 时，调用改函数用于更新某一列编辑状态
       * 如果单元格配置了校验规则，则会进行校验
       */
      updateStatus(u, m) {
        const v = !i.isUndefined(m);
        return ae().then(() => {
          const { editRules: w } = e, { validStore: C } = d, P = T.value;
          if (u && P && w) {
            const { row: L, column: X } = u, ie = "change";
            if (B.hasCellRules && B.hasCellRules(ie, L, X)) {
              const we = f.getCellElement(L, X);
              if (we)
                return B.validCellRules(ie, L, X, m).then(() => {
                  v && C.visible && tr(L, X, m), B.clearValidate(L, X);
                }).catch(({ rule: De }) => {
                  v && tr(L, X, m), B.showValidTooltip({ rule: De, row: L, column: X, cell: we });
                });
            }
          }
        });
      },
      /**
       * 设置合并单元格
       * @param {TableMergeConfig[]} merges { row: Row|number, column: ColumnInfo|number, rowspan: number, colspan: number }
       */
      setMergeCells(u) {
        return e.spanMethod && Et("vxe.error.errConflicts", ["merge-cells", "span-method"]), At(u, d.mergeList, s.afterFullData), ae().then(() => (f.updateCellAreas(), Zt()));
      },
      /**
       * 移除单元格合并
       * @param {TableMergeConfig[]} merges 多个或数组 [{row:Row|number, col:ColumnInfo|number}]
       */
      removeMergeCells(u) {
        e.spanMethod && Et("vxe.error.errConflicts", ["merge-cells", "span-method"]);
        const m = Rn(u, d.mergeList, s.afterFullData);
        return ae().then(() => (f.updateCellAreas(), Zt(), m));
      },
      /**
       * 获取所有被合并的单元格
       */
      getMergeCells() {
        return d.mergeList.slice(0);
      },
      /**
       * 清除所有单元格合并
       */
      clearMergeCells() {
        return d.mergeList = [], ae().then(() => Zt());
      },
      setMergeFooterItems(u) {
        return e.footerSpanMethod && Et("vxe.error.errConflicts", ["merge-footer-items", "footer-span-method"]), At(u, d.mergeFooterList), ae().then(() => (f.updateCellAreas(), Zt()));
      },
      removeMergeFooterItems(u) {
        e.footerSpanMethod && Et("vxe.error.errConflicts", ["merge-footer-items", "footer-span-method"]);
        const m = Rn(u, d.mergeFooterList);
        return ae().then(() => (f.updateCellAreas(), Zt(), m));
      },
      /**
       * 获取所有被合并的表尾
       */
      getMergeFooterItems() {
        return d.mergeFooterList.slice(0);
      },
      /**
       * 清除所有表尾合并
       */
      clearMergeFooterItems() {
        return d.mergeFooterList = [], ae().then(() => Zt());
      },
      updateCellAreas() {
        const { mouseConfig: u } = e, m = Ee.value;
        return u && m.area && B.handleUpdateCellAreas ? B.handleUpdateCellAreas() : ae();
      },
      getCustomStoreData() {
        const { id: u } = e, m = Se.value, { collectColumn: v } = s, { checkMethod: w } = m, C = {}, P = {}, L = {}, X = {}, ie = {
          resizableData: void 0,
          sortData: void 0,
          visibleData: void 0,
          fixedData: void 0
        };
        if (!u)
          return Et("vxe.error.reqProp", ["id"]), ie;
        let we = 0, De = 0, _e = 0, Ae = 0;
        return i.eachTree(v, (Pe, Qe, Ue, nt, Be) => {
          if (!Be && (v.forEach((ot) => {
            const ht = ot.getKey();
            ht && (De = 1, P[ht] = ot.renderSortNumber);
          }), Pe.fixed && Pe.fixed !== Pe.defaultFixed)) {
            const ot = Pe.getKey();
            ot && (_e = 1, X[ot] = Pe.fixed);
          }
          if (Pe.resizeWidth) {
            const ot = Pe.getKey();
            ot && (we = 1, C[ot] = Pe.renderWidth);
          }
          if (!w || w({ column: Pe })) {
            if (!Pe.visible && Pe.defaultVisible) {
              const ot = Pe.getKey();
              ot && (Ae = 1, L[ot] = !1);
            } else if (Pe.visible && !Pe.defaultVisible) {
              const ot = Pe.getKey();
              ot && (Ae = 1, L[ot] = !0);
            }
          }
        }), we && (ie.resizableData = C), De && (ie.sortData = P), _e && (ie.fixedData = X), Ae && (ie.visibleData = L), ie;
      },
      focus() {
        return s.isActivated = !0, ae();
      },
      blur() {
        return s.isActivated = !1, ae();
      },
      /**
       * 连接工具栏
       * @param $toolbar
       */
      connect(u) {
        return u ? (G = u, G.syncUpdate({ collectColumn: s.collectColumn, $table: B })) : Et("vxe.error.barUnableLink"), ae();
      }
    };
    const gn = (u) => {
      const { editStore: m, ctxMenuStore: v, filterStore: w, customStore: C } = d, { mouseConfig: P, editRules: L } = e, X = D.value, ie = Z.value, we = J.value, De = xe.value, { actived: _e } = m, Ae = S.value, Pe = h.value, Qe = O.value, Ue = y.value;
      if (Pe && (nn(u, X, "vxe-cell--filter").flag || nn(u, Pe.$el).flag || nn(u, document.body, "vxe-table--ignore-clear").flag || g.preventEvent(u, "event.clearFilter", w.args, f.closeFilter)), Qe && (C.btnEl === u.target || nn(u, document.body, "vxe-toolbar-custom-target").flag || nn(u, Qe.$el).flag || nn(u, document.body, "vxe-table--ignore-clear").flag || g.preventEvent(u, "event.clearCustom", {}, () => {
        B.closeCustom && B.closeCustom();
      })), _e.row) {
        if (ie.autoClear !== !1) {
          const Be = _e.args.cell;
          (!Be || !nn(u, Be).flag) && (Ae && nn(u, Ae.$el).flag || (!s._lastCallTime || s._lastCallTime + 50 < Date.now()) && (nn(u, document.body, "vxe-table--ignore-clear").flag || g.preventEvent(u, "event.clearEdit", _e.args, () => {
            let ot;
            if (ie.mode === "row") {
              const ht = nn(u, X, "vxe-body--row"), kt = ht.flag ? f.getRowNode(ht.targetElem) : null;
              ot = kt ? !B.eqRow(kt.item, _e.args.row) : !1;
            } else
              ot = !nn(u, X, "col--edit").flag;
            if (ot || (ot = nn(u, X, "vxe-header--row").flag), ot || (ot = nn(u, X, "vxe-footer--row").flag), !ot && e.height && !d.overflowY) {
              const ht = u.target;
              Is(ht, "vxe-table--body-wrapper") && (ot = u.offsetY < ht.clientHeight);
            }
            (ot || // 如果点击了当前表格之外
            !nn(u, X).flag) && setTimeout(() => B.clearEdit(u));
          })));
        }
      } else if (P && !nn(u, X).flag && !(re && nn(u, re.getRefMaps().refElem.value).flag) && !(Ue && nn(u, Ue.getRefMaps().refElem.value).flag) && !(G && nn(u, G.getRefMaps().refElem.value).flag) && (B.clearSelected && B.clearSelected(), De.autoClear && B.clearCellAreas)) {
        const Be = B.getCellAreas();
        Be.length && !nn(u, document.body, "vxe-table--ignore-areas-clear").flag && g.preventEvent(u, "event.clearAreas", {}, () => {
          B.clearCellAreas(), B.clearCopyCellArea(), B.dispatchEvent("clear-cell-area-selection", { cellAreas: Be }, u);
        });
      }
      B.closeMenu && v.visible && Ue && !nn(u, Ue.getRefMaps().refElem.value).flag && B.closeMenu();
      const nt = nn(u, re ? re.getRefMaps().refElem.value : X).flag;
      !nt && L && we.autoClear && (d.validErrorMaps = {}), s.isActivated = nt;
    }, mo = () => {
      f.closeFilter(), B.closeMenu && B.closeMenu();
    }, to = () => {
      f.closeTooltip(), B.closeMenu && B.closeMenu();
    }, qn = (u) => {
      const { mouseConfig: m, keyboardConfig: v } = e, { filterStore: w, ctxMenuStore: C, editStore: P } = d, L = Ee.value, X = Le.value, { actived: ie } = P;
      an.hasKey(u, So.ESCAPE) && g.preventEvent(u, "event.keydown", null, () => {
        if (f.dispatchEvent("keydown-start", {}, u), v && m && L.area && B.handleKeyboardEvent)
          B.handleKeyboardEvent(u);
        else if ((ie.row || w.visible || C.visible) && (u.stopPropagation(), B.closeMenu && B.closeMenu(), f.closeFilter(), v && X.isEsc && ie.row)) {
          const De = ie.args;
          B.clearEdit(u), L.selected && ae(() => B.handleSelected(De, u));
        }
        f.dispatchEvent("keydown", {}, u), f.dispatchEvent("keydown-end", {}, u);
      });
    }, Mn = (u) => {
      s.isActivated && g.preventEvent(u, "event.keydown", null, () => {
        const { mouseConfig: m, keyboardConfig: v, treeConfig: w, editConfig: C, highlightCurrentRow: P } = e, { ctxMenuStore: L, editStore: X, currentRow: ie } = d, we = ce.value, De = $e.value, _e = Le.value, Ae = Ee.value, Pe = Z.value, Qe = le.value, Ue = We.value, nt = de.value, { selected: Be, actived: ot } = X, ht = Qe.children || Qe.childrenField, kt = u.keyCode, wt = an.hasKey(u, So.ESCAPE), Ft = an.hasKey(u, So.BACKSPACE), Yt = an.hasKey(u, So.TAB), bn = an.hasKey(u, So.ENTER), Jt = an.hasKey(u, So.SPACEBAR), Ut = an.hasKey(u, So.ARROW_LEFT), qt = an.hasKey(u, So.ARROW_UP), xn = an.hasKey(u, So.ARROW_RIGHT), Gn = an.hasKey(u, So.ARROW_DOWN), Ns = an.hasKey(u, So.DELETE), lr = an.hasKey(u, So.F2), is = an.hasKey(u, So.CONTEXT_MENU), Fs = u.metaKey, Ls = u.ctrlKey, ir = u.shiftKey, as = u.altKey, cs = Ut || qt || xn || Gn, wo = we && L.visible && (bn || Jt || cs), Mr = Lt(C) && ot.column && ot.row;
        let Un;
        if (wo)
          u.preventDefault(), L.showChild && el(L.selected) ? B.moveCtxMenu(u, L, "selectChild", Ut, !1, L.selected.children) : B.moveCtxMenu(u, L, "selected", xn, !0, Ue);
        else if (v && m && Ae.area && B.handleKeyboardEvent)
          B.handleKeyboardEvent(u);
        else if (wt) {
          if (B.closeMenu && B.closeMenu(), f.closeFilter(), v && _e.isEsc && ot.row) {
            const un = ot.args;
            B.clearEdit(u), Ae.selected && ae(() => B.handleSelected(un, u));
          }
        } else if (Jt && v && _e.isChecked && Be.row && Be.column && (Be.column.type === "checkbox" || Be.column.type === "radio"))
          u.preventDefault(), Be.column.type === "checkbox" ? g.handleToggleCheckRowEvent(u, Be.args) : g.triggerRadioRowEvent(u, Be.args);
        else if (lr && Lt(C))
          Mr || Be.row && Be.column && (u.preventDefault(), B.handleActived(Be.args, u));
        else if (is)
          s._keyCtx = Be.row && Be.column && De.length, clearTimeout(Gt), Gt = setTimeout(() => {
            s._keyCtx = !1;
          }, 1e3);
        else if (bn && !as && v && _e.isEnter && (Be.row || ot.row || w && (nt.isCurrent || P) && ie)) {
          if (Ls)
            ot.row && (Un = ot.args, B.clearEdit(u), Ae.selected && ae(() => B.handleSelected(Un, u)));
          else if (Be.row || ot.row) {
            const un = Be.row ? Be.args : ot.args;
            ir ? _e.enterToTab ? B.moveTabSelected(un, ir, u) : B.moveSelected(un, Ut, !0, xn, !1, u) : _e.enterToTab ? B.moveTabSelected(un, ir, u) : B.moveSelected(un, Ut, !1, xn, !0, u);
          } else if (w && (nt.isCurrent || P) && ie) {
            const un = ie[ht];
            if (un && un.length) {
              u.preventDefault();
              const Nn = un[0];
              Un = {
                $table: B,
                row: Nn,
                rowIndex: f.getRowIndex(Nn),
                $rowIndex: f.getVMRowIndex(Nn)
              }, f.setTreeExpand(ie, !0).then(() => f.scrollToRow(Nn)).then(() => g.triggerCurrentRowEvent(u, Un));
            }
          }
        } else if (cs && v && _e.isArrow)
          Mr || (Be.row && Be.column ? B.moveSelected(Be.args, Ut, qt, xn, Gn, u) : (qt || Gn) && (nt.isCurrent || P) && B.moveCurrentRow(qt, Gn, u));
        else if (Yt && v && _e.isTab)
          Be.row || Be.column ? B.moveTabSelected(Be.args, ir, u) : (ot.row || ot.column) && B.moveTabSelected(ot.args, ir, u);
        else if (v && _e.isDel && Ns && Lt(C) && (Be.row || Be.column)) {
          if (!Mr) {
            const { delMethod: un } = _e, Nn = {
              row: Be.row,
              rowIndex: f.getRowIndex(Be.row),
              column: Be.column,
              columnIndex: f.getColumnIndex(Be.column),
              $table: B
            };
            un ? un(Nn) : tr(Be.row, Be.column, null), f.updateFooter(), B.dispatchEvent("cell-delete-value", Nn, u);
          }
        } else if (Ft && v && _e.isBack && Lt(C) && (Be.row || Be.column)) {
          if (!Mr) {
            const { delMethod: un, backMethod: Nn } = _e;
            if (_e.isDel && Lt(C) && (Be.row || Be.column)) {
              const Ho = {
                row: Be.row,
                rowIndex: f.getRowIndex(Be.row),
                column: Be.column,
                columnIndex: f.getColumnIndex(Be.column),
                $table: B
              };
              un ? un(Ho) : tr(Be.row, Be.column, null), Nn ? Nn({
                row: Be.row,
                rowIndex: f.getRowIndex(Be.row),
                column: Be.column,
                columnIndex: f.getColumnIndex(Be.column),
                $table: B
              }) : B.handleActived(Be.args, u), B.dispatchEvent("cell-backspace-value", Ho, u);
            }
          }
        } else if (Ft && v && w && _e.isBack && (nt.isCurrent || P) && ie) {
          const { parent: un } = i.findTree(s.afterTreeFullData, (Nn) => Nn === ie, { children: ht });
          un && (u.preventDefault(), Un = {
            $table: B,
            row: un,
            rowIndex: f.getRowIndex(un),
            $rowIndex: f.getVMRowIndex(un)
          }, f.setTreeExpand(un, !1).then(() => f.scrollToRow(un)).then(() => g.triggerCurrentRowEvent(u, Un)));
        } else if (v && Lt(C) && _e.isEdit && !Ls && !Fs && (Jt || kt >= 48 && kt <= 57 || kt >= 65 && kt <= 90 || kt >= 96 && kt <= 111 || kt >= 186 && kt <= 192 || kt >= 219 && kt <= 222)) {
          const { editMethod: un } = _e;
          if (Be.column && Be.row && Lt(Be.column.editRender)) {
            const Nn = Pe.beforeEditMethod || Pe.activeMethod;
            if (!Nn || Nn(Object.assign(Object.assign({}, Be.args), { $table: B, $grid: re }))) {
              un ? un({
                row: Be.row,
                rowIndex: f.getRowIndex(Be.row),
                column: Be.column,
                columnIndex: f.getColumnIndex(Be.column),
                $table: B,
                $grid: re
              }) : (tr(Be.row, Be.column, null), B.handleActived(Be.args, u));
              const Ho = Pe.afterEditMethod;
              Ho && ae(() => {
                Ho({
                  row: Be.row,
                  rowIndex: f.getRowIndex(Be.row),
                  column: Be.column,
                  columnIndex: f.getColumnIndex(Be.column),
                  $table: B,
                  $grid: re
                });
              });
            }
          }
        }
        f.dispatchEvent("keydown", {}, u);
      });
    }, Co = (u) => {
      const { keyboardConfig: m, mouseConfig: v } = e, { editStore: w, filterStore: C } = d, { isActivated: P } = s, L = Ee.value, X = Le.value, { actived: ie } = w;
      P && !C.visible && (ie.row || ie.column || m && X.isClip && v && L.area && B.handlePasteCellAreaEvent && B.handlePasteCellAreaEvent(u), f.dispatchEvent("paste", {}, u));
    }, Rs = (u) => {
      const { keyboardConfig: m, mouseConfig: v } = e, { editStore: w, filterStore: C } = d, { isActivated: P } = s, L = Ee.value, X = Le.value, { actived: ie } = w;
      P && !C.visible && (ie.row || ie.column || m && X.isClip && v && L.area && B.handleCopyCellAreaEvent && B.handleCopyCellAreaEvent(u), f.dispatchEvent("copy", {}, u));
    }, Hi = (u) => {
      const { keyboardConfig: m, mouseConfig: v } = e, { editStore: w, filterStore: C } = d, { isActivated: P } = s, L = Ee.value, X = Le.value, { actived: ie } = w;
      P && !C.visible && (ie.row || ie.column || m && X.isClip && v && L.area && B.handleCutCellAreaEvent && B.handleCutCellAreaEvent(u), f.dispatchEvent("cut", {}, u));
    }, zi = () => {
      B.closeMenu && B.closeMenu(), f.updateCellAreas(), f.recalculate(!0);
    }, Ps = (u) => {
      const m = b.value;
      clearTimeout(s.tooltipTimeout), u ? f.closeTooltip() : m && m.setActived && m.setActived(!0);
    }, Kl = (u, m, v, w, C) => {
      C.cell = m;
      const { tooltipStore: P } = d, L = U.value, { column: X, row: ie } = C, { showAll: we, contentMethod: De } = L, _e = De ? De(C) : null, Ae = De && !i.eqNull(_e), Pe = Ae ? _e : i.toString(X.type === "html" ? v.innerText : v.textContent).trim(), Qe = v.scrollWidth > v.clientWidth;
      return Pe && (we || Ae || Qe) && (Object.assign(P, {
        row: ie,
        column: X,
        visible: !0,
        currOpts: {}
      }), ae(() => {
        const Ue = b.value;
        Ue && Ue.open && Ue.open(Qe ? v : w || v, An(Pe));
      })), ae();
    };
    g = {
      getSetupOptions() {
        return en();
      },
      updateAfterDataIndex: cn,
      callSlot(u, m) {
        if (u) {
          if (re)
            return re.callSlot(u, m);
          if (i.isFunction(u))
            return uo(u(m));
        }
        return [];
      },
      /**
       * 获取父容器元素
       */
      getParentElem() {
        const u = D.value;
        if (re) {
          const m = re.getRefMaps().refElem.value;
          return m ? m.parentNode : null;
        }
        return u ? u.parentNode : null;
      },
      /**
       * 获取父容器的高度
       */
      getParentHeight() {
        const { height: u } = e, m = D.value;
        if (m) {
          const v = m.parentNode, w = u === "auto" ? Lc(v) : 0;
          return Math.floor(re ? re.getParentHeight() : i.toNumber(getComputedStyle(v).height) - w);
        }
        return 0;
      },
      /**
       * 获取需要排除的高度
       * 但渲染表格高度时，需要排除工具栏或分页等相关组件的高度
       * 如果存在表尾合计滚动条，则需要排除滚动条高度
       */
      getExcludeHeight() {
        return re ? re.getExcludeHeight() : 0;
      },
      /**
       * 定义行数据中的列属性，如果不存在则定义
       * @param {Row} records 行数据
       */
      defineField(u) {
        const { treeConfig: m } = e, v = Y.value, w = le.value, C = R.value, P = k.value, L = w.children || w.childrenField, X = ps(B);
        return i.isArray(u) || (u = [u]), u.map((ie) => (s.tableFullColumn.forEach((De) => {
          const { field: _e, editRender: Ae } = De;
          if (_e && !i.has(ie, _e) && !ie[_e]) {
            let Pe = null;
            if (Ae) {
              const { defaultValue: Qe } = Ae;
              i.isFunction(Qe) ? Pe = Qe({ column: De }) : i.isUndefined(Qe) || (Pe = Qe);
            }
            i.set(ie, _e, Pe);
          }
        }), [C.labelField, P.checkField, P.labelField, v.labelField].forEach((De) => {
          De && gr(i.get(ie, De)) && i.set(ie, De, null);
        }), m && w.lazy && i.isUndefined(ie[L]) && (ie[L] = null), gr(i.get(ie, X)) && i.set(ie, X, vc()), ie));
      },
      handleTableData(u) {
        const { scrollYLoad: m } = d, { scrollYStore: v, fullDataRowIdData: w } = s;
        let C = s.afterFullData;
        u && (wn(), C = Qt());
        const P = m ? C.slice(v.startIndex, v.endIndex) : C.slice(0);
        return P.forEach((L, X) => {
          const ie = st(B, L), we = w[ie];
          we && (we.$index = X);
        }), d.tableData = P, ae();
      },
      /**
       * 更新数据行的 Map
       * 牺牲数据组装的耗时，用来换取使用过程中的流畅
       */
      cacheRowMap(u) {
        const { treeConfig: m } = e, v = le.value;
        let { fullDataRowIdData: w, fullAllDataRowIdData: C, tableFullData: P, tableFullTreeData: L } = s;
        const X = v.children || v.childrenField, ie = v.hasChild || v.hasChildField, we = ps(B), De = m && v.lazy, _e = (Ae, Pe, Qe, Ue, nt, Be) => {
          let ot = st(B, Ae);
          const ht = m && Ue ? I1(Ue) : Pe + 1, kt = Be ? Be.length - 1 : 0;
          gr(ot) && (ot = vc(), i.set(Ae, we, ot)), De && Ae[ie] && i.isUndefined(Ae[X]) && (Ae[X] = null);
          const wt = { row: Ae, rowid: ot, seq: ht, index: m && nt ? -1 : Pe, _index: -1, $index: -1, items: Qe, parent: nt, level: kt };
          u && (w[ot] = wt), C[ot] = wt;
        };
        u && (w = s.fullDataRowIdData = {}), C = s.fullAllDataRowIdData = {}, m ? i.eachTree(L, _e, { children: X }) : P.forEach(_e);
      },
      cacheSourceMap(u) {
        const { treeConfig: m } = e, v = le.value;
        let { sourceDataRowIdData: w } = s;
        const C = i.clone(u, !0), P = ps(B);
        w = s.sourceDataRowIdData = {};
        const L = (X) => {
          let ie = st(B, X);
          gr(ie) && (ie = vc(), i.set(X, P, ie)), w[ie] = X;
        };
        if (m) {
          const X = v.children || v.childrenField;
          i.eachTree(C, L, { children: v.transform ? v.mapChildrenField : X });
        } else
          C.forEach(L);
        s.tableSourceData = C;
      },
      /**
       * 指定列宽的列进行拆分
       */
      analyColumnWidth() {
        const { tableFullColumn: u } = s, m = ne.value, { width: v, minWidth: w } = m, C = [], P = [], L = [], X = [], ie = [], we = [];
        u.forEach((De) => {
          v && !De.width && (De.width = v), w && !De.minWidth && (De.minWidth = w), De.visible && (De.resizeWidth ? C.push(De) : Fc(De.width) ? P.push(De) : mi(De.width) ? X.push(De) : Fc(De.minWidth) ? L.push(De) : mi(De.minWidth) ? ie.push(De) : we.push(De));
        }), Object.assign(d.columnStore, { resizeList: C, pxList: P, pxMinList: L, scaleList: X, scaleMinList: ie, autoList: we });
      },
      saveCustomStore(u) {
        const { id: m } = e, v = Se.value, { updateStore: w, storage: C } = v, P = C === !0, L = P ? {} : Object.assign({}, C || {}), X = P || L.resizable, ie = P || L.visible, we = P || L.fixed, De = P || L.sort;
        if (X || ie || we || De) {
          if (!m)
            return Et("vxe.error.reqProp", ["id"]), ae();
          const _e = u === "reset" ? {
            resizableData: {},
            sortData: {},
            visibleData: {},
            fixedData: {}
          } : f.getCustomStoreData();
          if (w)
            return w({
              id: m,
              type: u,
              storeData: _e
            });
          bt(m, u === "reset" ? null : _e);
        }
        return ae();
      },
      handleCustom() {
        const { mouseConfig: u } = e;
        return u && (B.clearSelected && B.clearSelected(), B.clearCellAreas && (B.clearCellAreas(), B.clearCopyCellArea())), g.analyColumnWidth(), f.refreshColumn(!0);
      },
      handleUpdateDataQueue() {
        d.upDataFlag++;
      },
      handleRefreshColumnQueue() {
        d.reColumnFlag++;
      },
      preventEvent(u, m, v, w, C) {
        let P = Kp.get(m);
        !P.length && m === "event.clearEdit" && (P = Kp.get("event.clearActived"), process.env.NODE_ENV === "development" && P.length && Nt("vxe.error.delEvent", ["event.clearActived", "event.clearEdit"]));
        let L;
        return P.some((X) => X(Object.assign({ $grid: re, $table: B, $event: u }, v)) === !1) || w && (L = w()), C && C(), L;
      },
      checkSelectionStatus() {
        const { treeConfig: u } = e, { selectCheckboxMaps: m, treeIndeterminateMaps: v } = d, { afterFullData: w } = s, C = k.value, { checkField: P, checkStrictly: L, checkMethod: X } = C, ie = C.indeterminateField || C.halfField;
        if (!L) {
          const we = [];
          let De = !1, _e = !1, Ae = !1;
          P ? (De = w.every(X ? (Pe) => X({ row: Pe }) ? !!i.get(Pe, P) : (we.push(Pe), !0) : (Pe) => i.get(Pe, P)), _e = De && w.length !== we.length, u ? ie ? Ae = !_e && w.some((Pe) => i.get(Pe, P) || i.get(Pe, ie) || !!v[st(B, Pe)]) : Ae = !_e && w.some((Pe) => i.get(Pe, P) || !!v[st(B, Pe)]) : ie ? Ae = !_e && w.some((Pe) => i.get(Pe, P) || i.get(Pe, ie)) : Ae = !_e && w.some((Pe) => i.get(Pe, P))) : (De = w.every(X ? (Pe) => X({ row: Pe }) ? !!m[st(B, Pe)] : (we.push(Pe), !0) : (Pe) => m[st(B, Pe)]), _e = De && w.length !== we.length, u ? Ae = !_e && w.some((Pe) => {
            const Qe = st(B, Pe);
            return v[Qe] || m[Qe];
          }) : Ae = !_e && w.some((Pe) => m[st(B, Pe)])), d.isAllSelected = _e, d.isIndeterminate = Ae;
        }
      },
      /**
       * 多选，行选中事件
       * value 选中true 不选false 半选-1
       */
      handleSelectRow({ row: u }, m, v) {
        const { treeConfig: w } = e, { selectCheckboxMaps: C, treeIndeterminateMaps: P } = d, L = Object.assign({}, C), { afterFullData: X } = s, ie = le.value, we = ie.children || ie.childrenField, De = k.value, { checkField: _e, checkStrictly: Ae, checkMethod: Pe } = De, Qe = De.indeterminateField || De.halfField, Ue = st(B, u);
        if (_e)
          if (w && !Ae) {
            m === -1 ? (P[Ue] || (Qe && i.set(u, Qe, !0), P[Ue] = u), i.set(u, _e, !1)) : i.eachTree([u], (Be) => {
              (B.eqRow(Be, u) || v || !Pe || Pe({ row: Be })) && (i.set(Be, _e, m), Qe && i.set(u, Qe, !1), delete P[st(B, Be)], fo(u, m));
            }, { children: we });
            const nt = i.findTree(X, (Be) => B.eqRow(Be, u), { children: we });
            if (nt && nt.parent) {
              let Be;
              const ot = [], ht = {};
              if (!v && Pe ? nt.items.forEach((wt) => {
                if (Pe({ row: wt })) {
                  const Ft = st(B, wt);
                  ht[Ft] = wt, ot.push(wt);
                }
              }) : nt.items.forEach((wt) => {
                const Ft = st(B, wt);
                ht[Ft] = wt, ot.push(wt);
              }), i.find(nt.items, (wt) => !!P[st(B, wt)]))
                Be = -1;
              else {
                const wt = [];
                nt.items.forEach((Ft) => {
                  i.get(Ft, _e) && wt.push(Ft);
                }), Be = wt.filter((Ft) => ht[st(B, Ft)]).length === ot.length ? !0 : wt.length || m === -1 ? -1 : !1;
              }
              return d.selectCheckboxMaps = L, g.handleSelectRow({ row: nt.parent }, Be, v);
            }
          } else
            (v || !Pe || Pe({ row: u })) && (i.set(u, _e, m), fo(u, m));
        else if (w && !Ae) {
          m === -1 ? (P[Ue] || (Qe && i.set(u, Qe, !0), P[Ue] = u), L[Ue] && delete L[Ue]) : i.eachTree([u], (Be) => {
            const ot = st(B, Be);
            (B.eqRow(Be, u) || v || !Pe || Pe({ row: Be })) && (m ? L[ot] = Be : L[ot] && delete L[ot], Qe && i.set(u, Qe, !1), delete P[st(B, Be)], fo(u, m));
          }, { children: we });
          const nt = i.findTree(X, (Be) => B.eqRow(Be, u), { children: we });
          if (nt && nt.parent) {
            let Be;
            const ot = [], ht = {};
            if (!v && Pe ? nt.items.forEach((wt) => {
              if (Pe({ row: wt })) {
                const Ft = st(B, wt);
                ht[Ft] = wt, ot.push(wt);
              }
            }) : nt.items.forEach((wt) => {
              const Ft = st(B, wt);
              ht[Ft] = wt, ot.push(wt);
            }), i.find(nt.items, (wt) => !!P[st(B, wt)]))
              Be = -1;
            else {
              const wt = [];
              nt.items.forEach((Ft) => {
                const Yt = st(B, Ft);
                L[Yt] && wt.push(Ft);
              }), Be = wt.filter((Ft) => ht[st(B, Ft)]).length === ot.length ? !0 : wt.length || m === -1 ? -1 : !1;
            }
            return d.selectCheckboxMaps = L, g.handleSelectRow({ row: nt.parent }, Be, v);
          }
        } else
          (v || !Pe || Pe({ row: u })) && (m ? L[Ue] || (L[Ue] = u) : L[Ue] && delete L[Ue], fo(u, m));
        d.selectCheckboxMaps = L, g.checkSelectionStatus();
      },
      triggerHeaderTitleEvent(u, m, v) {
        const w = m.content || m.message;
        if (w) {
          const { tooltipStore: C } = d, { column: P } = v, L = wr(w);
          Ps(!0), C.row = null, C.column = P, C.visible = !0, C.currOpts = m, ae(() => {
            const X = b.value;
            X && X.open && X.open(u.currentTarget, L);
          });
        }
      },
      /**
       * 触发表头 tooltip 事件
       */
      triggerHeaderTooltipEvent(u, m) {
        const { tooltipStore: v } = d, { column: w } = m, C = u.currentTarget;
        Ps(!0), (v.column !== w || !v.visible) && Kl(u, C, C, null, m);
      },
      /**
       * 触发单元格 tooltip 事件
       */
      triggerBodyTooltipEvent(u, m) {
        const { editConfig: v } = e, { editStore: w } = d, { tooltipStore: C } = d, P = Z.value, { actived: L } = w, { row: X, column: ie } = m, we = u.currentTarget;
        if (Ps(C.column !== ie || C.row !== X), !(ie.editRender && Lt(v) && (P.mode === "row" && L.row === X || L.row === X && L.column === ie)) && (C.column !== ie || C.row !== X || !C.visible)) {
          let De, _e;
          ie.treeNode ? (De = we.querySelector(".vxe-tree-cell"), ie.type === "html" && (_e = we.querySelector(".vxe-cell--html"))) : _e = we.querySelector(ie.type === "html" ? ".vxe-cell--html" : ".vxe-cell--label"), Kl(u, we, De || we.children[0], _e, m);
        }
      },
      /**
       * 触发表尾 tooltip 事件
       */
      triggerFooterTooltipEvent(u, m) {
        const { column: v } = m, { tooltipStore: w } = d, C = u.currentTarget;
        Ps(w.column !== v || !!w.row), (w.column !== v || !w.visible) && Kl(u, C, C.querySelector(".vxe-cell--item") || C.children[0], null, m);
      },
      handleTargetLeaveEvent() {
        const u = U.value;
        let m = b.value;
        m && m.setActived && m.setActived(!1), u.enterable ? s.tooltipTimeout = setTimeout(() => {
          m = b.value, m && m.isActived && !m.isActived() && f.closeTooltip();
        }, u.leaveDelay) : f.closeTooltip();
      },
      triggerHeaderCellClickEvent(u, m) {
        const { _lastResizeTime: v } = s, w = ke.value, C = ne.value, { column: P } = m, L = u.currentTarget, X = v && v > Date.now() - 300, ie = nn(u, L, "vxe-cell--sort").flag, we = nn(u, L, "vxe-cell--filter").flag;
        w.trigger === "cell" && !(X || ie || we) && g.triggerSortEvent(u, P, St(P)), f.dispatchEvent("header-cell-click", Object.assign({ triggerResizable: X, triggerSort: ie, triggerFilter: we, cell: L }, m), u), (C.isCurrent || e.highlightCurrentColumn) && g.triggerCurrentColumnEvent(u, m);
      },
      triggerHeaderCellDblclickEvent(u, m) {
        f.dispatchEvent("header-cell-dblclick", Object.assign({ cell: u.currentTarget }, m), u);
      },
      /**
       * 列点击事件
       * 如果是单击模式，则激活为编辑状态
       * 如果是双击模式，则单击后选中状态
       */
      triggerCellClickEvent(u, m) {
        const { highlightCurrentRow: v, editConfig: w } = e, { editStore: C } = d, P = Y.value, L = Z.value, X = le.value, ie = R.value, we = k.value, De = Le.value, _e = de.value, { actived: Ae, focused: Pe } = C, { row: Qe, column: Ue } = m, { type: nt, treeNode: Be } = Ue, ot = nt === "radio", ht = nt === "checkbox", kt = nt === "expand", wt = u.currentTarget, Ft = ot && nn(u, wt, "vxe-cell--radio").flag, Yt = ht && nn(u, wt, "vxe-cell--checkbox").flag, bn = Be && nn(u, wt, "vxe-tree--btn-wrapper").flag, Jt = kt && nn(u, wt, "vxe-table--expanded").flag;
        m = Object.assign({ cell: wt, triggerRadio: Ft, triggerCheckbox: Yt, triggerTreeNode: bn, triggerExpandNode: Jt }, m), !Yt && !Ft && (!Jt && (P.trigger === "row" || kt && P.trigger === "cell") && g.triggerRowExpandEvent(u, m), (X.trigger === "row" || Be && X.trigger === "cell") && g.triggerTreeExpandEvent(u, m)), bn || (Jt || ((_e.isCurrent || v) && !Yt && !Ft && g.triggerCurrentRowEvent(u, m), !Ft && (ie.trigger === "row" || ot && ie.trigger === "cell") && g.triggerRadioRowEvent(u, m), !Yt && (we.trigger === "row" || ht && we.trigger === "cell") && g.handleToggleCheckRowEvent(u, m)), Lt(w) && (De.arrowCursorLock && u && L.mode === "cell" && u.target && /^input|textarea$/i.test(u.target.tagName) && (Pe.column = Ue, Pe.row = Qe), L.trigger === "manual" ? Ae.args && Ae.row === Qe && Ue !== Ae.column && Yo(u, m) : (!Ae.args || Qe !== Ae.row || Ue !== Ae.column) && (L.trigger === "click" || L.trigger === "dblclick" && L.mode === "row" && Ae.row === Qe) && Yo(u, m))), f.dispatchEvent("cell-click", m, u);
      },
      /**
       * 列双击点击事件
       * 如果是双击模式，则激活为编辑状态
       */
      triggerCellDblclickEvent(u, m) {
        const { editConfig: v } = e, { editStore: w } = d, C = Z.value, { actived: P } = w, L = u.currentTarget;
        m = Object.assign({ cell: L }, m), Lt(v) && C.trigger === "dblclick" && (!P.args || u.currentTarget !== P.args.cell) && (C.mode === "row" ? _n("blur").catch((X) => X).then(() => {
          B.handleActived(m, u).then(() => _n("change")).catch((X) => X);
        }) : C.mode === "cell" && B.handleActived(m, u).then(() => _n("change")).catch((X) => X)), f.dispatchEvent("cell-dblclick", m, u);
      },
      handleToggleCheckRowEvent(u, m) {
        const { selectCheckboxMaps: v } = d, w = k.value, { checkField: C, trigger: P } = w, { row: L } = m;
        if (P === "manual")
          return;
        let X = !1;
        C ? X = !i.get(L, C) : X = !v[st(B, L)], u ? g.triggerCheckRowEvent(u, m, X) : g.handleSelectRow(m, X);
      },
      triggerCheckRowEvent(u, m, v) {
        const w = k.value, { row: C } = m, { afterFullData: P } = s, { checkMethod: L, trigger: X } = w;
        if (X !== "manual") {
          if (u.stopPropagation(), w.isShiftKey && u.shiftKey && !e.treeConfig) {
            const ie = f.getCheckboxRecords();
            if (ie.length) {
              const we = ie[0], De = f.getVTRowIndex(C), _e = f.getVTRowIndex(we);
              if (De !== _e) {
                f.setAllCheckboxRow(!1);
                const Ae = De < _e ? P.slice(De, _e + 1) : P.slice(_e, De + 1);
                zn(Ae, !0, !1), f.dispatchEvent("checkbox-range-select", Object.assign({ rangeRecords: Ae }, m), u);
                return;
              }
            }
          }
          (!L || L({ row: C })) && (g.handleSelectRow(m, v), f.dispatchEvent("checkbox-change", Object.assign({
            records: f.getCheckboxRecords(),
            reserves: f.getCheckboxReserveRecords(),
            indeterminates: f.getCheckboxIndeterminateRecords(),
            checked: v
          }, m), u));
        }
      },
      /**
       * 多选，选中所有事件
       */
      triggerCheckAllEvent(u, m) {
        const v = k.value, { trigger: w } = v;
        w !== "manual" && (u && u.stopPropagation(), xt(u, m));
      },
      /**
       * 单选，行选中事件
       */
      triggerRadioRowEvent(u, m) {
        const { selectRadioRow: v } = d, { row: w } = m, C = R.value, { trigger: P } = C;
        if (P === "manual")
          return;
        u.stopPropagation();
        let L = w, X = v !== L;
        X ? Wo(L) : C.strict || (X = v === L, X && (L = null, f.clearRadioRow())), X && f.dispatchEvent("radio-change", Object.assign({ oldValue: v, newValue: L }, m), u);
      },
      triggerCurrentColumnEvent(u, m) {
        const v = ne, { currentMethod: w } = v.value, { column: C } = m;
        (!w || w({ column: C })) && f.setCurrentColumn(C);
      },
      triggerCurrentRowEvent(u, m) {
        const { currentRow: v } = d, w = de, { currentMethod: C } = w.value, { row: P } = m, L = v !== P;
        (!C || C({ row: P })) && (f.setCurrentRow(P), L && f.dispatchEvent("current-change", Object.assign({ oldValue: v, newValue: P }, m), u));
      },
      /**
       * 展开行事件
       */
      triggerRowExpandEvent(u, m) {
        const { rowExpandLazyLoadedMaps: v, expandColumn: w } = d, C = Y.value, { row: P } = m, { lazy: L, trigger: X } = C;
        if (X === "manual")
          return;
        u.stopPropagation();
        const ie = st(B, P);
        if (!L || !v[ie]) {
          const we = !f.isRowExpandByRow(P), De = f.getColumnIndex(w), _e = f.getVMColumnIndex(w);
          f.setRowExpand(P, we), f.dispatchEvent("toggle-row-expand", {
            expanded: we,
            column: w,
            columnIndex: De,
            $columnIndex: _e,
            row: P,
            rowIndex: f.getRowIndex(P),
            $rowIndex: f.getVMRowIndex(P)
          }, u);
        }
      },
      /**
       * 展开树节点事件
       */
      triggerTreeExpandEvent(u, m) {
        const { treeExpandLazyLoadedMaps: v } = d, w = le.value, { row: C, column: P } = m, { lazy: L, trigger: X } = w;
        if (X === "manual")
          return;
        u.stopPropagation();
        const ie = st(B, C);
        if (!L || !v[ie]) {
          const we = !f.isTreeExpandByRow(C), De = f.getColumnIndex(P), _e = f.getVMColumnIndex(P);
          f.setTreeExpand(C, we), f.dispatchEvent("toggle-tree-expand", { expanded: we, column: P, columnIndex: De, $columnIndex: _e, row: C }, u);
        }
      },
      /**
       * 点击排序事件
       */
      triggerSortEvent(u, m, v) {
        const { mouseConfig: w } = e, C = ke.value, P = Ee.value, { field: L, sortable: X } = m;
        if (X) {
          !v || m.order === v ? f.clearSort(C.multiple ? m : null) : f.sort({ field: L, order: v });
          const ie = { $table: B, $event: u, column: m, field: L, property: L, order: m.order, sortList: f.getSortColumns(), sortTime: m.sortTime };
          w && P.area && B.handleSortEvent && B.handleSortEvent(u, ie), f.dispatchEvent("sort-change", ie, u);
        }
      },
      /**
       * 横向 X 可视渲染事件处理
       */
      triggerScrollXEvent() {
        Qn();
      },
      /**
       * 纵向 Y 可视渲染事件处理
       */
      triggerScrollYEvent(u) {
        const { scrollYStore: m } = s, { adaptive: v, offsetSize: w, visibleSize: C } = m;
        Q1 && v && w * 2 + C <= 40 ? Tt(u) : sn(u);
      },
      /**
       * 对于树形结构中，可以直接滚动到指定深层节点中
       * 对于某些特定的场景可能会用到，比如定位到某一节点
       * @param {Row} row 行对象
       */
      scrollToTreeRow(u) {
        const { treeConfig: m } = e, { tableFullData: v } = s, w = [];
        if (m) {
          const C = le.value, P = C.children || C.childrenField, L = i.findTree(v, (X) => B.eqRow(X, u), { children: P });
          if (L) {
            const X = L.nodes;
            X.forEach((ie, we) => {
              we < X.length - 1 && !f.isTreeExpandByRow(ie) && w.push(f.setTreeExpand(ie, !0));
            });
          }
        }
        return Promise.all(w).then(() => Ap(B, u));
      },
      updateScrollYStatus: rt,
      // 更新横向 X 可视渲染上下剩余空间大小
      updateScrollXSpace() {
        const { isGroup: u, scrollXLoad: m, scrollbarWidth: v } = d, { visibleColumn: w, scrollXStore: C, elemStore: P, tableWidth: L } = s, X = E.value, ie = T.value, we = W.value, De = ie ? ie.$el : null;
        if (De) {
          const _e = X ? X.$el : null, Ae = we ? we.$el : null, Pe = _e ? _e.querySelector(".vxe-table--header") : null, Qe = De.querySelector(".vxe-table--body"), Ue = Ae ? Ae.querySelector(".vxe-table--footer") : null, nt = w.slice(0, C.startIndex).reduce((ht, kt) => ht + kt.renderWidth, 0);
          let Be = "";
          m && (Be = `${nt}px`), Pe && (Pe.style.marginLeft = u ? "" : Be), Qe.style.marginLeft = Be, Ue && (Ue.style.marginLeft = Be), ["main"].forEach((ht) => {
            ["header", "body", "footer"].forEach((wt) => {
              const Ft = P[`${ht}-${wt}-xSpace`], Yt = Ft ? Ft.value : null;
              Yt && (Yt.style.width = m ? `${L + (wt === "header" ? v : 0)}px` : "");
            });
          }), ae(Zt);
        }
      },
      // 更新纵向 Y 可视渲染上下剩余空间大小
      updateScrollYSpace() {
        const { scrollYLoad: u } = d, { scrollYStore: m, elemStore: v, afterFullData: w } = s, { startIndex: C, rowHeight: P } = m, L = w.length * P, X = Math.max(0, C * P), ie = ["main", "left", "right"];
        let we = "", De = "";
        u && (we = `${X}px`, De = `${L}px`), ie.forEach((_e) => {
          const Ae = ["header", "body", "footer"], Pe = v[`${_e}-body-table`], Qe = Pe ? Pe.value : null;
          Qe && (Qe.style.marginTop = we), Ae.forEach((Ue) => {
            const nt = v[`${_e}-${Ue}-ySpace`], Be = nt ? nt.value : null;
            Be && (Be.style.height = De);
          });
        }), ae(Zt);
      },
      updateScrollXData() {
        ae(() => {
          tn(), g.updateScrollXSpace();
        });
      },
      updateScrollYData() {
        ae(() => {
          g.handleTableData(), g.updateScrollYSpace();
        });
      },
      /**
       * 处理固定列的显示状态
       */
      checkScrolling() {
        const u = F.value, m = j.value, v = T.value, w = v ? v.$el : null;
        w && (u && (w.scrollLeft > 0 ? vr(u, "scrolling--middle") : Oo(u, "scrolling--middle")), m && (w.clientWidth < w.scrollWidth - Math.ceil(w.scrollLeft) ? vr(m, "scrolling--middle") : Oo(m, "scrolling--middle")));
      },
      updateZindex() {
        e.zIndex ? s.tZindex = e.zIndex : s.tZindex < fh() && (s.tZindex = dh());
      },
      handleCheckedCheckboxRow: zn,
      /**
       * 行 hover 事件
       */
      triggerHoverEvent(u, { row: m }) {
        g.setHoverRow(m);
      },
      setHoverRow(u) {
        const m = st(B, u), v = D.value;
        g.clearHoverRow(), v && i.arrayEach(v.querySelectorAll(`[rowid="${m}"]`), (w) => vr(w, "row--hover")), s.hoverRow = u;
      },
      clearHoverRow() {
        const u = D.value;
        u && i.arrayEach(u.querySelectorAll(".vxe-body--row.row--hover"), (m) => Oo(m, "row--hover")), s.hoverRow = null;
      },
      /**
       * 已废弃，被 getCellElement 替换
       * @deprecated
       */
      getCell(u, m) {
        return f.getCellElement(u, m);
      },
      findRowIndexOf(u, m) {
        return m ? i.findIndexOf(u, (v) => B.eqRow(v, m)) : -1;
      },
      eqRow(u, m) {
        return u && m ? u === m ? !0 : st(B, u) === st(B, m) : !1;
      }
    }, process.env.NODE_ENV === "development" && ("openExport,openPrint,exportData,openImport,importData,saveFile,readFile,importByFile,print".split(",").forEach((u) => {
      B[u] = function() {
        Et("vxe.error.reqModule", ["VxeTableExportModule"]);
      };
    }), "clearValidate,fullValidate,validate".split(",").forEach((u) => {
      B[u] = function() {
        Et("vxe.error.reqModule", ["VxeTableValidatorModule"]);
      };
    })), Object.assign(B, f, g);
    const ji = (u) => {
      const { showHeader: m, showFooter: v } = e, { tableData: w, tableColumn: C, tableGroupColumn: P, columnStore: L, footerTableData: X } = d, ie = u === "left", we = ie ? L.leftList : L.rightList;
      return r("div", {
        ref: ie ? F : j,
        class: `vxe-table--fixed-${u}-wrapper`
      }, [
        m ? r(Hp, {
          ref: ie ? $ : te,
          fixedType: u,
          tableData: w,
          tableColumn: C,
          tableGroupColumn: P,
          fixedColumn: we
        }) : Me(),
        r(Bp, {
          ref: ie ? I : Ce,
          fixedType: u,
          tableData: w,
          tableColumn: C,
          fixedColumn: we
        }),
        v ? r(zp, {
          ref: ie ? z : N,
          footerTableData: X,
          tableColumn: C,
          fixedColumn: we,
          fixedType: u
        }) : Me()
      ]);
    }, Ha = () => {
      const u = he.value, m = { $table: B };
      if (n.empty)
        return n.empty(m);
      {
        const v = u.name ? Gp.get(u.name) : null, w = v ? v.renderTableEmpty || v.renderTableEmptyView || v.renderEmpty : null;
        if (w)
          return uo(w(u, m));
      }
      return wr(e.emptyText) || qp("vxe.table.emptyText");
    };
    function Yl() {
      const u = D.value;
      u && u.clientWidth && u.clientHeight && f.recalculate();
    }
    const Xl = Ie(0);
    lt(() => e.data ? e.data.length : -1, () => {
      Xl.value++;
    }), lt(() => e.data, () => {
      Xl.value++;
    }), lt(Xl, () => {
      const { inited: u, initStatus: m } = s;
      jn(e.data || []).then(() => {
        const { scrollXLoad: v, scrollYLoad: w, expandColumn: C } = d;
        s.inited = !0, s.initStatus = !0, m || Sn(), u || yo(), process.env.NODE_ENV === "development" && (v || w) && C && Nt("vxe.error.scrollErrProp", ["column.type=expand"]), f.recalculate();
      });
    });
    const Zl = Ie(0);
    lt(() => d.staticColumns.length, () => {
      Zl.value++;
    }), lt(() => d.staticColumns, () => {
      Zl.value++;
    }), lt(Zl, () => {
      qe(d.staticColumns);
    });
    const Jl = Ie(0);
    lt(() => d.tableColumn.length, () => {
      Jl.value++;
    }), lt(() => d.tableColumn, () => {
      Jl.value++;
    }), lt(Jl, () => {
      g.analyColumnWidth();
    }), lt(() => d.upDataFlag, () => {
      ae(() => {
        f.updateData();
      });
    }), lt(() => d.reColumnFlag, () => {
      ae(() => {
        f.refreshColumn();
      });
    }), lt(() => e.showHeader, () => {
      ae(() => {
        f.recalculate(!0).then(() => f.refreshScroll());
      });
    }), lt(() => e.showFooter, () => {
      ae(() => {
        f.recalculate(!0).then(() => f.refreshScroll());
      });
    });
    const Ql = Ie(0);
    lt(() => e.footerData ? e.footerData.length : -1, () => {
      Ql.value++;
    }), lt(() => e.footerData, () => {
      Ql.value++;
    }), lt(Ql, () => {
      f.updateFooter();
    }), lt(() => e.height, () => {
      ae(() => f.recalculate(!0));
    }), lt(() => e.maxHeight, () => {
      ae(() => f.recalculate(!0));
    }), lt(() => e.syncResize, (u) => {
      u && (Yl(), ae(() => {
        Yl(), setTimeout(() => Yl());
      }));
    });
    const V = Ie(0);
    lt(() => e.mergeCells ? e.mergeCells.length : -1, () => {
      V.value++;
    }), lt(() => e.mergeCells, () => {
      V.value++;
    }), lt(V, () => {
      f.clearMergeCells(), ae(() => {
        e.mergeCells && f.setMergeCells(e.mergeCells);
      });
    });
    const be = Ie(0);
    lt(() => e.mergeFooterItems ? e.mergeFooterItems.length : -1, () => {
      be.value++;
    }), lt(() => e.mergeFooterItems, () => {
      be.value++;
    }), lt(be, () => {
      f.clearMergeFooterItems(), ae(() => {
        e.mergeFooterItems && f.setMergeFooterItems(e.mergeFooterItems);
      });
    }), Z1.forEach((u) => {
      const { setupTable: m } = u;
      if (m) {
        const v = m(B);
        v && i.isObject(v) && Object.assign(B, v);
      }
    }), g.preventEvent(null, "created", { $table: B });
    let Re;
    cm(() => {
      f.recalculate().then(() => f.refreshScroll()), g.preventEvent(null, "activated", { $table: B });
    }), Gh(() => {
      s.isActivated = !1, g.preventEvent(null, "deactivated", { $table: B });
    }), yn(() => {
      ae(() => {
        const { data: u, treeConfig: m, showOverflow: v } = e, { scrollXStore: w, scrollYStore: C } = s, P = M.value, L = Z.value, X = le.value, ie = R.value, we = k.value, De = Y.value, _e = de.value;
        if (process.env.NODE_ENV === "development") {
          e.rowId && Nt("vxe.error.delProp", ["row-id", "row-config.keyField"]), e.rowKey && Nt("vxe.error.delProp", ["row-key", "row-config.useKey"]), e.columnKey && Nt("vxe.error.delProp", ["column-id", "column-config.useKey"]), !(e.rowId || _e.keyField) && (we.reserve || we.checkRowKeys || ie.reserve || ie.checkRowKey || De.expandRowKeys || X.expandRowKeys) && Nt("vxe.error.reqProp", ["row-config.keyField"]), e.editConfig && (L.showStatus || L.showUpdateStatus || L.showInsertStatus) && !e.keepSource && Nt("vxe.error.reqProp", ["keep-source"]), m && (X.showLine || X.line) && (!(e.rowKey || _e.useKey) || !v) && Nt("vxe.error.reqProp", ["row-config.useKey | show-overflow"]), m && e.stripe && Nt("vxe.error.noTree", ["stripe"]), e.showFooter && !(e.footerMethod || e.footerData) && Nt("vxe.error.reqProp", ["footer-data | footer-method"]);
          const { exportConfig: Ae, importConfig: Pe } = e, Qe = Ge.value, Ue = Ze.value;
          Pe && Ue.types && !Ue.importMethod && !i.includeArrays(i.keys(Ue._typeMaps), Ue.types) && Nt("vxe.error.errProp", [`export-config.types=${Ue.types.join(",")}`, Ue.types.filter((nt) => i.includes(i.keys(Ue._typeMaps), nt)).join(",") || i.keys(Ue._typeMaps).join(",")]), Ae && Qe.types && !Qe.exportMethod && !i.includeArrays(i.keys(Qe._typeMaps), Qe.types) && Nt("vxe.error.errProp", [`export-config.types=${Qe.types.join(",")}`, Qe.types.filter((nt) => i.includes(i.keys(Qe._typeMaps), nt)).join(",") || i.keys(Qe._typeMaps).join(",")]);
        }
        if (process.env.NODE_ENV === "development") {
          const Ae = Se.value, Pe = Ee.value, Qe = de.value;
          if (!e.id && e.customConfig && (Ae.storage === !0 || Ae.storage && Ae.storage.resizable || Ae.storage && Ae.storage.visible) && Et("vxe.error.reqProp", ["id"]), e.treeConfig && we.range && Et("vxe.error.noTree", ["checkbox-config.range"]), Qe.height && !e.showOverflow && Nt("vxe.error.notProp", ["table.show-overflow"]), !B.handleUpdateCellAreas && (e.clipConfig && Nt("vxe.error.notProp", ["clip-config"]), e.fnrConfig && Nt("vxe.error.notProp", ["fnr-config"]), Pe.area)) {
            Et("vxe.error.notProp", ["mouse-config.area"]);
            return;
          }
          e.treeConfig && X.children && Nt("vxe.error.delProp", ["tree-config.children", "tree-config.childrenField"]), e.treeConfig && X.line && Nt("vxe.error.delProp", ["tree-config.line", "tree-config.showLine"]), Pe.area && Pe.selected && Nt("vxe.error.errConflicts", ["mouse-config.area", "mouse-config.selected"]), e.treeConfig && Pe.area && Et("vxe.error.noTree", ["mouse-config.area"]), e.editConfig && L.activeMethod && Nt("vxe.error.delProp", ["edit-config.activeMethod", "edit-config.beforeEditMethod"]), e.treeConfig && we.isShiftKey && Et("vxe.error.errConflicts", ["tree-config", "checkbox-config.isShiftKey"]), we.halfField && Nt("vxe.error.delProp", ["checkbox-config.halfField", "checkbox-config.indeterminateField"]);
        }
        if (process.env.NODE_ENV === "development" && (e.editConfig && !B.insert && Et("vxe.error.reqModule", ["Edit"]), e.editRules && !B.validate && Et("vxe.error.reqModule", ["Validator"]), (we.range || e.keyboardConfig || e.mouseConfig) && !B.triggerCellMousedownEvent && Et("vxe.error.reqModule", ["Keyboard"]), (e.printConfig || e.importConfig || e.exportConfig) && !B.exportData && Et("vxe.error.reqModule", ["Export"])), Object.assign(C, {
          startIndex: 0,
          endIndex: 0,
          visibleSize: 0,
          adaptive: P.adaptive !== !1
        }), Object.assign(w, {
          startIndex: 0,
          endIndex: 0,
          visibleSize: 0
        }), jn(u || []).then(() => {
          u && u.length && (s.inited = !0, s.initStatus = !0, Sn(), yo()), Zt();
        }), e.autoResize) {
          const Ae = ve.value, { refreshDelay: Pe } = Ae, Qe = D.value, Ue = g.getParentElem(), nt = Pe ? i.throttle(() => f.recalculate(!0), Pe, { leading: !0, trailing: !0 }) : null;
          Re = X1.create(nt ? () => {
            e.autoResize && requestAnimationFrame(nt);
          } : () => {
            e.autoResize && f.recalculate(!0);
          }), Qe && Re.observe(Qe), Ue && Re.observe(Ue);
        }
      }), an.on(B, "paste", Co), an.on(B, "copy", Rs), an.on(B, "cut", Hi), an.on(B, "mousedown", gn), an.on(B, "blur", mo), an.on(B, "mousewheel", to), an.on(B, "keydown", Mn), an.on(B, "resize", zi), B.handleGlobalContextmenuEvent && an.on(B, "contextmenu", B.handleGlobalContextmenuEvent), g.preventEvent(null, "mounted", { $table: B });
    }), Ci(() => {
      Re && Re.disconnect(), f.closeFilter(), B.closeMenu && B.closeMenu(), g.preventEvent(null, "beforeUnmount", { $table: B });
    }), On(() => {
      an.off(B, "paste"), an.off(B, "copy"), an.off(B, "cut"), an.off(B, "mousedown"), an.off(B, "blur"), an.off(B, "mousewheel"), an.off(B, "keydown"), an.off(B, "resize"), an.off(B, "contextmenu"), g.preventEvent(null, "unmounted", { $table: B });
    });
    const Je = () => {
      const { loading: u, stripe: m, showHeader: v, height: w, treeConfig: C, mouseConfig: P, showFooter: L, highlightCell: X, highlightHoverRow: ie, highlightHoverColumn: we, editConfig: De, editRules: _e } = e, { isGroup: Ae, overflowX: Pe, overflowY: Qe, scrollXLoad: Ue, scrollYLoad: nt, scrollbarHeight: Be, tableData: ot, tableColumn: ht, tableGroupColumn: kt, footerTableData: wt, initStore: Ft, columnStore: Yt, filterStore: bn, customStore: Jt, tooltipStore: Ut } = d, { leftList: qt, rightList: xn } = Yt, Gn = n.loading, Ns = _.value, lr = J.value, is = k.value, Fs = le.value, Ls = de.value, ir = ne.value, as = p.value, cs = et.value, wo = Ee.value, Mr = K.value, Un = He.value, un = ce.value, Nn = d._isLoading || u;
      return r("div", {
        ref: D,
        class: ["vxe-table", "vxe-table--render-default", `tid_${l}`, `border--${cs}`, {
          [`size--${as}`]: as,
          [`valid-msg--${lr.msgMode}`]: !!_e,
          "vxe-editable": !!De,
          "old-cell-valid": _e && en().cellVaildMode === "obsolete",
          "cell--highlight": X,
          "cell--selected": P && wo.selected,
          "cell--area": P && wo.area,
          "row--highlight": Ls.isHover || ie,
          "column--highlight": ir.isHover || we,
          "checkbox--range": is.range,
          "is--header": v,
          "is--footer": L,
          "is--group": Ae,
          "is--tree-line": C && (Fs.showLine || Fs.line),
          "is--fixed-left": qt.length,
          "is--fixed-right": xn.length,
          "is--animat": !!e.animat,
          "is--round": e.round,
          "is--stripe": !C && m,
          "is--loading": Nn,
          "is--empty": !Nn && !ot.length,
          "is--scroll-y": Qe,
          "is--scroll-x": Pe,
          "is--virtual-x": Ue,
          "is--virtual-y": nt
        }],
        onKeydown: qn
      }, [
        /**
         * 隐藏列
         */
        r("div", {
          class: "vxe-table-slots"
        }, n.default ? n.default({}) : []),
        r("div", {
          class: "vxe-table--render-wrapper"
        }, [
          r("div", {
            class: "vxe-table--main-wrapper"
          }, [
            /**
             * 表头
             */
            v ? r(Hp, {
              ref: E,
              tableData: ot,
              tableColumn: ht,
              tableGroupColumn: kt
            }) : Me(),
            /**
             * 表体
             */
            r(Bp, {
              ref: T,
              tableData: ot,
              tableColumn: ht
            }),
            /**
             * 表尾
             */
            L ? r(zp, {
              ref: W,
              footerTableData: wt,
              tableColumn: ht
            }) : Me()
          ]),
          r("div", {
            class: "vxe-table--fixed-wrapper"
          }, [
            /**
             * 左侧固定区域
             */
            qt && qt.length && Pe ? ji("left") : Me(),
            /**
             * 右侧固定区域
             */
            xn && xn.length && Pe ? ji("right") : Me()
          ])
        ]),
        /**
         * 空数据
         */
        r("div", {
          ref: oe,
          class: "vxe-table--empty-placeholder"
        }, [
          r("div", {
            class: "vxe-table--empty-content"
          }, Ha())
        ]),
        /**
         * 边框线
         */
        r("div", {
          class: "vxe-table--border-line"
        }),
        /**
         * 列宽线
         */
        r("div", {
          ref: ee,
          class: "vxe-table--resizable-bar",
          style: Pe ? {
            "padding-bottom": `${Be}px`
          } : null
        }),
        /**
         * 加载中
         */
        a ? r(a, {
          class: "vxe-table--loading",
          modelValue: Nn,
          icon: Un.icon,
          text: Un.text
        }, Gn ? {
          default: () => Gn({ $table: B, $grid: re })
        } : {}) : Me(),
        /**
         * 自定义列
         */
        Ft.custom ? r(z1, {
          ref: O,
          customStore: Jt
        }) : Me(),
        /**
         * 筛选
         */
        Ft.filter ? r(j1, {
          ref: h,
          filterStore: bn
        }) : Me(),
        /**
         * 导入
         */
        Ft.import && e.importConfig ? r(G1, {
          defaultOptions: d.importParams,
          storeData: d.importStore
        }) : Me(),
        /**
         * 导出/导出
         */
        Ft.export && (e.exportConfig || e.printConfig) ? r(U1, {
          defaultOptions: d.exportParams,
          storeData: d.exportStore
        }) : Me(),
        /**
         * 快捷菜单
         */
        un ? r(K1, {
          ref: y
        }) : Me(),
        /**
         * 通用提示
         */
        c ? r(c, {
          ref: x,
          isArrow: !1,
          enterable: !1
        }) : Me(),
        /**
         * 工具提示
         */
        c ? r(c, Object.assign({
          ref: b
        }, Ns, Ut.currOpts)) : Me(),
        /**
         * 校验提示
         */
        c && e.editRules && lr.showMessage && (lr.message === "default" ? !w : lr.message === "tooltip") ? r(c, Object.assign({ ref: S, class: [{
          "old-cell-valid": _e && en().cellVaildMode === "obsolete"
        }, "vxe-table--valid-error"] }, lr.message === "tooltip" || ot.length === 1 ? Mr : {})) : Me()
      ]);
    };
    return B.renderVN = Je, process.env.NODE_ENV === "development" && ae(() => {
      e.loading && (a || Et("vxe.error.reqComp", ["vxe-loading"])), (e.showOverflow === !0 || e.showOverflow === "tooltip" || e.showHeaderOverflow === !0 || e.showHeaderOverflow === "tooltip" || e.showFooterOverflow === !0 || e.showFooterOverflow === "tooltip" || e.tooltipConfig || e.editRules) && (c || Et("vxe.error.reqComp", ["vxe-tooltip"]));
    }), Xt("$xeColgroup", null), Xt("$xeTable", B), B;
  },
  render() {
    return this.renderVN();
  }
}), { renderer: Xp, hooks: e0 } = ue, t0 = ["setFilter", "clearFilter", "getCheckedFilters"];
e0.add("tableFilterModule", {
  setupTable(e) {
    const { props: t, reactData: n, internalData: o } = e, { refTableBody: l, refTableFilter: a } = e.getRefMaps(), { computeFilterOpts: c, computeMouseOpts: p } = e.getComputeMaps(), d = {
      checkFilterOptions() {
        const { filterStore: f } = n;
        f.isAllSelected = f.options.every((g) => g._checked), f.isIndeterminate = !f.isAllSelected && f.options.some((g) => g._checked);
      },
      /**
       * 点击筛选事件
       * 当筛选图标被点击时触发
       * 更新选项是否全部状态
       * 打开筛选面板
       * @param {Event} evnt 事件
       * @param {ColumnInfo} column 列配置
       * @param {Object} params 参数
       */
      triggerFilterEvent(f, g, D) {
        const { initStore: b, filterStore: x } = n;
        if (x.column === g && x.visible)
          x.visible = !1;
        else {
          const { target: S, pageX: y } = f, { visibleWidth: h } = Fa(), { filters: O, filterMultiple: E, filterRender: T } = g, W = Lt(T) ? Xp.get(T.name) : null, $ = g.filterRecoverMethod || (W ? W.tableFilterRecoverMethod || W.filterRecoverMethod : null);
          o._currFilterParams = D, Object.assign(x, {
            multiple: E,
            options: O,
            column: g,
            style: null
          }), x.options.forEach((I) => {
            const { _checked: z, checked: te } = I;
            I._checked = te, !te && z !== te && $ && $({ option: I, column: g, $table: e });
          }), this.checkFilterOptions(), x.visible = !0, b.filter = !0, ae(() => {
            const z = l.value.$el, te = a.value, Ce = te ? te.$el : null;
            let N = 0, F = 0, j = null, ee = null;
            Ce && (N = Ce.offsetWidth, F = Ce.offsetHeight, j = Ce.querySelector(".vxe-table--filter-header"), ee = Ce.querySelector(".vxe-table--filter-footer"));
            const oe = N / 2, re = 10, G = z.clientWidth - N - re;
            let J, A;
            const M = {
              top: `${S.offsetTop + S.offsetParent.offsetTop + S.offsetHeight + 8}px`
            };
            let H = null;
            if (F >= z.clientHeight && (H = Math.max(60, z.clientHeight - (ee ? ee.offsetHeight : 0) - (j ? j.offsetHeight : 0))), g.fixed === "left" ? J = S.offsetLeft + S.offsetParent.offsetLeft - oe : g.fixed === "right" ? A = S.offsetParent.offsetWidth - S.offsetLeft + (S.offsetParent.offsetParent.offsetWidth - S.offsetParent.offsetLeft) - g.renderWidth - oe : J = S.offsetLeft + S.offsetParent.offsetLeft - oe - z.scrollLeft, J) {
              const ne = y + N - oe + re - h;
              ne > 0 && (J -= ne), M.left = `${Math.min(G, Math.max(re, J))}px`;
            } else if (A) {
              const ne = y + N - oe + re - h;
              ne > 0 && (A += ne), M.right = `${Math.max(re, A)}px`;
            }
            x.style = M, x.maxHeight = H;
          });
        }
        e.dispatchEvent("filter-visible", { column: g, field: g.field, property: g.field, filterList: e.getCheckedFilters(), visible: x.visible }, f);
      },
      handleClearFilter(f) {
        if (f) {
          const { filters: g, filterRender: D } = f;
          if (g) {
            const b = Lt(D) ? Xp.get(D.name) : null, x = f.filterResetMethod || (b ? b.tableFilterResetMethod || b.filterResetMethod : null);
            g.forEach((S) => {
              S._checked = !1, S.checked = !1, x || (S.data = i.clone(S.resetValue, !0));
            }), x && x({ options: g, column: f, $table: e });
          }
        }
      },
      /**
       * 确认筛选
       * 当筛选面板中的确定按钮被按下时触发
       * @param {Event} evnt 事件
       */
      confirmFilterEvent(f) {
        const { mouseConfig: g } = t, { filterStore: D, scrollXLoad: b, scrollYLoad: x } = n, S = c.value, y = p.value, { column: h } = D, { field: O } = h, E = [], T = [];
        h.filters.forEach((I) => {
          I.checked && (E.push(I.value), T.push(I.data));
        });
        const W = e.getCheckedFilters(), $ = { $table: e, $event: f, column: h, field: O, property: O, values: E, datas: T, filters: W, filterList: W };
        S.remote || (e.handleTableData(!0), e.checkSelectionStatus()), g && y.area && e.handleFilterEvent && e.handleFilterEvent(f, $), e.dispatchEvent("filter-change", $, f), e.closeFilter(), e.updateFooter().then(() => {
          const { scrollXLoad: I, scrollYLoad: z } = n;
          if (b || I || x || z)
            return (b || I) && e.updateScrollXSpace(), (x || z) && e.updateScrollYSpace(), e.refreshScroll();
        }).then(() => (e.updateCellAreas(), e.recalculate(!0))).then(() => {
          setTimeout(() => e.recalculate(), 50);
        });
      }
    };
    return Object.assign(Object.assign({}, {
      /**
       * 手动弹出筛选面板
       * @param column
       */
      openFilter(f) {
        const g = Xn(e, f);
        if (g && g.filters) {
          const { elemStore: D } = o, { fixed: b } = g;
          return e.scrollToColumn(g).then(() => {
            const x = D[`${b || "main"}-header-wrapper`] || D["main-header-wrapper"], S = x ? x.value : null;
            if (S) {
              const y = S.querySelector(`.vxe-header--column.${g.id} .vxe-filter--btn`);
              T1(y, "click");
            }
          });
        }
        return ae();
      },
      /**
       * 修改筛选条件列表
       * @param {ColumnInfo} fieldOrColumn 列或字段名
       * @param {Array} options 选项
       */
      setFilter(f, g) {
        const D = Xn(e, f);
        return D && D.filters && (D.filters = xh(g || [])), ae();
      },
      /**
       * 清空指定列的筛选条件
       * 如果为空则清空所有列的筛选条件
       * @param {String} fieldOrColumn 列或字段名
       */
      clearFilter(f) {
        const { filterStore: g } = n, { tableFullColumn: D } = o, b = c.value;
        let x;
        return f ? (x = Xn(e, f), x && d.handleClearFilter(x)) : D.forEach(d.handleClearFilter), (!f || x !== g.column) && Object.assign(g, {
          isAllSelected: !1,
          isIndeterminate: !1,
          style: null,
          options: [],
          column: null,
          multiple: !1,
          visible: !1
        }), b.remote ? ae() : e.updateData();
      },
      getCheckedFilters() {
        const { tableFullColumn: f } = o, g = [];
        return f.forEach((D) => {
          const { field: b, filters: x } = D, S = [], y = [];
          x && x.length && (x.forEach((h) => {
            h.checked && (S.push(h.value), y.push(h.data));
          }), S.length && g.push({ column: D, field: b, property: b, values: S, datas: y }));
        }), g;
      }
    }), d);
  },
  setupGrid(e) {
    return e.extendTableMethods(t0);
  }
});
const { menus: n0, hooks: o0, globalEvents: ra, GLOBAL_EVENT_KEYS: sa } = ue, r0 = ["closeMenu"];
o0.add("tableMenuModule", {
  setupTable(e) {
    const { xID: t, props: n, reactData: o, internalData: l } = e, { refElem: a, refTableFilter: c, refTableMenu: p } = e.getRefMaps(), { computeMouseOpts: d, computeIsMenu: s, computeMenuOpts: f } = e.getComputeMaps();
    let g = {}, D = {};
    const b = (x, S, y) => {
      const { ctxMenuStore: h } = o, O = s.value, E = f.value, T = E[S], W = E.visibleMethod;
      if (T) {
        const { options: $, disabled: I } = T;
        I ? x.preventDefault() : O && $ && $.length && (y.options = $, e.preventEvent(x, "event.showMenu", y, () => {
          if (!W || W(y)) {
            x.preventDefault(), e.updateZindex();
            const { scrollTop: z, scrollLeft: te, visibleHeight: Ce, visibleWidth: N } = Fa();
            let F = x.clientY + z, j = x.clientX + te;
            const ee = () => {
              l._currMenuParams = y, Object.assign(h, {
                visible: !0,
                list: $,
                selected: null,
                selectChild: null,
                showChild: !1,
                style: {
                  zIndex: l.tZindex,
                  top: `${F}px`,
                  left: `${j}px`
                }
              }), ae(() => {
                const A = p.value.getRefMaps().refElem.value, M = A.clientHeight, H = A.clientWidth, { boundingTop: ne, boundingLeft: de } = ca(A), ve = ne + M - Ce, Oe = de + H - N;
                ve > -10 && (h.style.top = `${Math.max(z + 2, F - M - 2)}px`), Oe > -10 && (h.style.left = `${Math.max(te + 2, j - H - 2)}px`);
              });
            }, { keyboard: oe, row: re, column: G } = y;
            oe && re && G ? e.scrollToRow(re, G).then(() => {
              const J = e.getCellElement(re, G);
              if (J) {
                const { boundingTop: A, boundingLeft: M } = ca(J);
                F = A + z + Math.floor(J.offsetHeight / 2), j = M + te + Math.floor(J.offsetWidth / 2);
              }
              ee();
            }) : ee();
          } else
            g.closeMenu();
        }));
      }
      e.closeFilter();
    };
    return g = {
      /**
       * 关闭快捷菜单
       */
      closeMenu() {
        return Object.assign(o.ctxMenuStore, {
          visible: !1,
          selected: null,
          selectChild: null,
          showChild: !1
        }), ae();
      }
    }, D = {
      /**
       * 处理菜单的移动
       */
      moveCtxMenu(x, S, y, h, O, E) {
        let T;
        const W = i.findIndexOf(E, ($) => S[y] === $);
        if (h)
          O && el(S.selected) ? S.showChild = !0 : (S.showChild = !1, S.selectChild = null);
        else if (ra.hasKey(x, sa.ARROW_UP)) {
          for (let $ = W - 1; $ >= 0; $--)
            if (E[$].visible !== !1) {
              T = E[$];
              break;
            }
          S[y] = T || E[E.length - 1];
        } else if (ra.hasKey(x, sa.ARROW_DOWN)) {
          for (let $ = W + 1; $ < E.length; $++)
            if (E[$].visible !== !1) {
              T = E[$];
              break;
            }
          S[y] = T || E[0];
        } else S[y] && (ra.hasKey(x, sa.ENTER) || ra.hasKey(x, sa.SPACEBAR)) && D.ctxMenuLinkEvent(x, S[y]);
      },
      handleOpenMenuEvent: b,
      /**
       * 快捷菜单事件处理
       */
      handleGlobalContextmenuEvent(x) {
        const { mouseConfig: S, menuConfig: y } = n, { editStore: h, ctxMenuStore: O } = o, { visibleColumn: E } = l, T = c.value, W = p.value, $ = d.value, I = f.value, z = a.value, { selected: te } = h, Ce = ["header", "body", "footer"];
        if (Lt(y)) {
          if (O.visible && W && nn(x, W.getRefMaps().refElem.value).flag) {
            x.preventDefault();
            return;
          }
          if (l._keyCtx) {
            const N = "body", F = { type: N, $table: e, keyboard: !0, columns: E.slice(0), $event: x };
            if (S && $.area) {
              const j = e.getActiveCellArea();
              if (j && j.row && j.column) {
                F.row = j.row, F.column = j.column, b(x, N, F);
                return;
              }
            } else if (S && $.selected && te.row && te.column) {
              F.row = te.row, F.column = te.column, b(x, N, F);
              return;
            }
          }
          for (let N = 0; N < Ce.length; N++) {
            const F = Ce[N], j = nn(x, z, `vxe-${F}--column`, (oe) => oe.parentNode.parentNode.parentNode.getAttribute("xid") === t), ee = { type: F, $table: e, columns: E.slice(0), $event: x };
            if (j.flag) {
              const oe = j.targetElem, re = e.getColumnNode(oe), G = re ? re.item : null;
              let J = `${F}-`;
              if (G && Object.assign(ee, { column: G, columnIndex: e.getColumnIndex(G), cell: oe }), F === "body") {
                const M = e.getRowNode(oe.parentNode), H = M ? M.item : null;
                J = "", H && (ee.row = H, ee.rowIndex = e.getRowIndex(H));
              }
              const A = `${J}cell-menu`;
              b(x, F, ee), e.dispatchEvent(A, ee, x);
              return;
            } else if (nn(x, z, `vxe-table--${F}-wrapper`, (oe) => oe.getAttribute("xid") === t).flag) {
              I.trigger === "cell" ? x.preventDefault() : b(x, F, ee);
              return;
            }
          }
        }
        T && !nn(x, T.$el).flag && e.closeFilter(), g.closeMenu();
      },
      ctxMenuMouseoverEvent(x, S, y) {
        const h = x.currentTarget, { ctxMenuStore: O } = o;
        x.preventDefault(), x.stopPropagation(), O.selected = S, O.selectChild = y, y || (O.showChild = el(S), O.showChild && ae(() => {
          const E = h.nextElementSibling;
          if (E) {
            const { boundingTop: T, boundingLeft: W, visibleHeight: $, visibleWidth: I } = ca(h), z = T + h.offsetHeight, te = W + h.offsetWidth;
            let Ce = "", N = "";
            te + E.offsetWidth > I - 10 && (Ce = "auto", N = `${h.offsetWidth}px`);
            let F = "", j = "";
            z + E.offsetHeight > $ - 10 && (F = "auto", j = "0"), E.style.left = Ce, E.style.right = N, E.style.top = F, E.style.bottom = j;
          }
        }));
      },
      ctxMenuMouseoutEvent(x, S) {
        const { ctxMenuStore: y } = o;
        S.children || (y.selected = null), y.selectChild = null;
      },
      /**
       * 快捷菜单点击事件
       */
      ctxMenuLinkEvent(x, S) {
        if (!S.disabled && (S.code || !S.children || !S.children.length)) {
          const y = n0.get(S.code), h = Object.assign({}, l._currMenuParams, { menu: S, $table: e, $grid: e.xegrid, $event: x }), O = y ? y.tableMenuMethod || y.menuMethod : null;
          O && O(h, x), e.dispatchEvent("menu-click", h, x), g.closeMenu();
        }
      }
    }, Object.assign(Object.assign({}, g), D);
  },
  setupGrid(e) {
    return e.extendTableMethods(r0);
  }
});
const { getConfig: s0, renderer: l0, hooks: i0, getI18n: Zp } = ue, a0 = ["insert", "insertAt", "insertNextAt", "remove", "removeCheckboxRow", "removeRadioRow", "removeCurrentRow", "getRecordset", "getInsertRecords", "getRemoveRecords", "getUpdateRecords", "getEditRecord", "getActiveRecord", "getSelectedCell", "clearEdit", "clearActived", "clearSelected", "isEditByRow", "isActiveByRow", "setEditRow", "setActiveRow", "setEditCell", "setActiveCell", "setSelectCell"];
i0.add("tableEditModule", {
  setupTable(e) {
    const { props: t, reactData: n, internalData: o } = e, { refElem: l } = e.getRefMaps(), { computeMouseOpts: a, computeEditOpts: c, computeCheckboxOpts: p, computeTreeOpts: d } = e.getComputeMaps();
    let s = {}, f = {};
    const g = (h, O) => {
      const { model: E, editRender: T } = O;
      T && (E.value = Io(h, O), E.update = !1);
    }, D = (h, O) => {
      const { model: E, editRender: T } = O;
      T && E.update && (tr(h, O, E.value), E.update = !1, E.value = null);
    }, b = () => {
      const h = l.value;
      if (h) {
        const O = h.querySelector(".col--selected");
        O && Oo(O, "col--selected");
      }
    };
    function x() {
      const { editStore: h, tableColumn: O } = n, E = c.value, { actived: T } = h, { row: W, column: $ } = T;
      (W || $) && (E.mode === "row" ? O.forEach((I) => D(W, I)) : D(W, $));
    }
    function S(h, O) {
      const { tableFullTreeData: E, afterFullData: T, fullDataRowIdData: W, fullAllDataRowIdData: $ } = o, I = d.value, { rowField: z, parentField: te, mapChildrenField: Ce } = I, N = I.children || I.childrenField, F = O ? "push" : "unshift";
      h.forEach((j) => {
        const ee = j[te], oe = st(e, j), re = ee ? i.findTree(E, (G) => ee === G[z], { children: Ce }) : null;
        if (re) {
          const { item: G } = re, J = $[st(e, G)], A = J ? J.level : 0;
          let M = G[N], H = G[Ce];
          i.isArray(M) || (M = G[N] = []), i.isArray(H) || (H = G[N] = []), M[F](j), H[F](j);
          const ne = { row: j, rowid: oe, seq: -1, index: -1, _index: -1, $index: -1, items: M, parent: G, level: A + 1 };
          W[oe] = ne, $[oe] = ne;
        } else {
          process.env.NODE_ENV === "development" && ee && Nt("vxe.error.unableInsert"), T[F](j), E[F](j);
          const G = { row: j, rowid: oe, seq: -1, index: -1, _index: -1, $index: -1, items: E, parent: null, level: 0 };
          W[oe] = G, $[oe] = G;
        }
      });
    }
    const y = (h, O, E) => {
      const { treeConfig: T } = t, { mergeList: W, editStore: $ } = n, { tableFullTreeData: I, afterFullData: z, tableFullData: te, fullDataRowIdData: Ce, fullAllDataRowIdData: N } = o, F = d.value, { transform: j, rowField: ee, mapChildrenField: oe } = F, re = F.children || F.childrenField;
      i.isArray(h) || (h = [h]);
      const G = Ot(e.defineField(h.map((A) => Object.assign(T && j ? { [oe]: [], [re]: [] } : {}, A))));
      if (i.eqNull(O))
        T && j ? S(G, !1) : (z.unshift(...G), te.unshift(...G), W.forEach((A) => {
          const { row: M } = A;
          M > 0 && (A.row = M + G.length);
        }));
      else if (O === -1)
        T && j ? S(G, !0) : (z.push(...G), te.push(...G), W.forEach((A) => {
          const { row: M, rowspan: H } = A;
          M + H > z.length && (A.rowspan = H + G.length);
        }));
      else if (T && j) {
        const A = i.findTree(I, (M) => O[ee] === M[ee], { children: oe });
        if (A) {
          const { parent: M } = A, H = M ? M[oe] : I, ne = N[st(e, M)], de = ne ? ne.level : 0;
          if (G.forEach((ve, Oe) => {
            const Fe = st(e, ve);
            process.env.NODE_ENV === "development" && ve[F.parentField] && M && ve[F.parentField] !== M[ee] && Et("vxe.error.errProp", [`${F.parentField}=${ve[F.parentField]}`, `${F.parentField}=${M[ee]}`]), M && (ve[F.parentField] = M[ee]);
            let R = A.index + Oe;
            E && (R = R + 1), H.splice(R, 0, ve);
            const k = { row: ve, rowid: Fe, seq: -1, index: -1, _index: -1, $index: -1, items: H, parent: M, level: de + 1 };
            Ce[Fe] = k, N[Fe] = k;
          }), M) {
            const ve = i.findTree(I, (Oe) => O[ee] === Oe[ee], { children: re });
            if (ve) {
              const Oe = ve.items;
              let Fe = ve.index;
              E && (Fe = Fe + 1), Oe.splice(Fe, 0, ...G);
            }
          }
        } else
          process.env.NODE_ENV === "development" && Nt("vxe.error.unableInsert"), S(G, !0);
      } else {
        if (T)
          throw new Error(Zp("vxe.error.noTree", ["insert"]));
        let A = -1;
        if (i.isNumber(O) ? O < z.length && (A = O) : A = e.findRowIndexOf(z, O), E && (A = Math.min(z.length, A + 1)), A === -1)
          throw new Error(Zp("vxe.error.unableInsert"));
        z.splice(A, 0, ...G), te.splice(e.findRowIndexOf(te, O), 0, ...G), W.forEach((M) => {
          const { row: H, rowspan: ne } = M;
          H > A ? M.row = H + G.length : H + ne > A && (M.rowspan = ne + G.length);
        });
      }
      const { insertMaps: J } = $;
      return G.forEach((A) => {
        const M = st(e, A);
        J[M] = A;
      }), e.cacheRowMap(), e.updateScrollYStatus(), e.handleTableData(T && j), T && j || e.updateAfterDataIndex(), e.updateFooter(), e.checkSelectionStatus(), n.scrollYLoad && e.updateScrollYSpace(), ae().then(() => (e.updateCellAreas(), e.recalculate())).then(() => ({
        row: G.length ? G[G.length - 1] : null,
        rows: G
      }));
    };
    return s = {
      /**
       * 往表格中插入临时数据
       *
       * @param {*} records
       */
      insert(h) {
        return y(h, null);
      },
      /**
       * 往表格指定行中插入临时数据
       * 如果 row 为空则从插入到顶部，如果为树结构，则插入到目标节点顶部
       * 如果 row 为 -1 则从插入到底部，如果为树结构，则插入到目标节点底部
       * 如果 row 为有效行则插入到该行的位置，如果为树结构，则有插入到效的目标节点该行的位置
       * @param {Object/Array} records 新的数据
       * @param {Row} row 指定行
       */
      insertAt(h, O) {
        return y(h, O);
      },
      insertNextAt(h, O) {
        return y(h, O, !0);
      },
      /**
       * 删除指定行数据
       * 如果传 row 则删除一行
       * 如果传 rows 则删除多行
       * 如果为空则删除所有
       */
      remove(h) {
        const { treeConfig: O } = t, { mergeList: E, editStore: T, selectCheckboxMaps: W } = n, { tableFullTreeData: $, afterFullData: I, tableFullData: z } = o, te = p.value, Ce = d.value, { transform: N, mapChildrenField: F } = Ce, j = Ce.children || Ce.childrenField, { actived: ee, removeMaps: oe, insertMaps: re } = T, { checkField: G } = te;
        let J = [];
        if (h ? i.isArray(h) || (h = [h]) : h = z, h.forEach((A) => {
          if (!e.isInsertByRow(A)) {
            const M = st(e, A);
            oe[M] = A;
          }
        }), !G) {
          const A = Object.assign({}, W);
          h.forEach((M) => {
            const H = st(e, M);
            A[H] && delete A[H];
          }), n.selectCheckboxMaps = A;
        }
        return z === h ? (h = J = z.slice(0), o.tableFullData = [], o.afterFullData = [], e.clearMergeCells()) : O && N ? h.forEach((A) => {
          const M = st(e, A), H = i.findTree($, (ve) => M === st(e, ve), { children: F });
          if (H) {
            const ve = H.items.splice(H.index, 1);
            J.push(ve[0]);
          }
          const ne = i.findTree($, (ve) => M === st(e, ve), { children: j });
          ne && ne.items.splice(ne.index, 1);
          const de = e.findRowIndexOf(I, A);
          de > -1 && I.splice(de, 1);
        }) : h.forEach((A) => {
          const M = e.findRowIndexOf(z, A);
          if (M > -1) {
            const ne = z.splice(M, 1);
            J.push(ne[0]);
          }
          const H = e.findRowIndexOf(I, A);
          H > -1 && (E.forEach((ne) => {
            const { row: de, rowspan: ve } = ne;
            de > H ? ne.row = de - 1 : de + ve > H && (ne.rowspan = ve - 1);
          }), I.splice(H, 1));
        }), ee.row && e.findRowIndexOf(h, ee.row) > -1 && s.clearEdit(), h.forEach((A) => {
          const M = st(e, A);
          re[M] && delete re[M];
        }), e.updateFooter(), e.cacheRowMap(), e.handleTableData(O && N), O && N || e.updateAfterDataIndex(), e.checkSelectionStatus(), n.scrollYLoad && e.updateScrollYSpace(), ae().then(() => (e.updateCellAreas(), e.recalculate())).then(() => ({ row: J.length ? J[J.length - 1] : null, rows: J }));
      },
      /**
       * 删除复选框选中的数据
       */
      removeCheckboxRow() {
        return s.remove(e.getCheckboxRecords()).then((h) => (e.clearCheckboxRow(), h));
      },
      /**
       * 删除单选框选中的数据
       */
      removeRadioRow() {
        const h = e.getRadioRecord();
        return s.remove(h || []).then((O) => (e.clearRadioRow(), O));
      },
      /**
       * 删除当前行选中的数据
       */
      removeCurrentRow() {
        const h = e.getCurrentRecord();
        return s.remove(h || []).then((O) => (e.clearCurrentRow(), O));
      },
      /**
       * 获取表格数据集，包含新增、删除、修改、标记
       */
      getRecordset() {
        return {
          insertRecords: s.getInsertRecords(),
          removeRecords: s.getRemoveRecords(),
          updateRecords: s.getUpdateRecords(),
          pendingRecords: e.getPendingRecords()
        };
      },
      /**
       * 获取新增的临时数据
       */
      getInsertRecords() {
        const { editStore: h } = n, { fullAllDataRowIdData: O } = o, { insertMaps: E } = h, T = [];
        return i.each(E, (W, $) => {
          O[$] && T.push(W);
        }), T;
      },
      /**
       * 获取已删除的数据
       */
      getRemoveRecords() {
        const { editStore: h } = n, { removeMaps: O } = h, E = [];
        return i.each(O, (T) => {
          E.push(T);
        }), E;
      },
      /**
       * 获取更新数据
       * 只精准匹配 row 的更改
       * 如果是树表格，子节点更改状态不会影响父节点的更新状态
       */
      getUpdateRecords() {
        const { keepSource: h, treeConfig: O } = t, { tableFullData: E } = o, T = d.value;
        return h ? (x(), O ? i.filterTree(E, (W) => e.isUpdateByRow(W), T) : E.filter((W) => e.isUpdateByRow(W))) : [];
      },
      getActiveRecord() {
        return process.env.NODE_ENV === "development" && Nt("vxe.error.delFunc", ["getActiveRecord", "getEditRecord"]), this.getEditRecord();
      },
      getEditRecord() {
        const { editStore: h } = n, { afterFullData: O } = o, E = l.value, { args: T, row: W } = h.actived;
        return T && e.findRowIndexOf(O, W) > -1 && E.querySelectorAll(".vxe-body--column.col--active").length ? Object.assign({}, T) : null;
      },
      /**
       * 获取选中的单元格
       */
      getSelectedCell() {
        const { editStore: h } = n, { args: O, column: E } = h.selected;
        return O && E ? Object.assign({}, O) : null;
      },
      clearActived(h) {
        return process.env.NODE_ENV === "development" && Nt("vxe.error.delFunc", ["clearActived", "clearEdit"]), this.clearEdit(h);
      },
      /**
       * 清除激活的编辑
       */
      clearEdit(h) {
        const { editStore: O } = n, { actived: E, focused: T } = O, { row: W, column: $ } = E;
        return (W || $) && (x(), E.args = null, E.row = null, E.column = null, e.updateFooter(), e.dispatchEvent("edit-closed", {
          row: W,
          rowIndex: e.getRowIndex(W),
          $rowIndex: e.getVMRowIndex(W),
          column: $,
          columnIndex: e.getColumnIndex($),
          $columnIndex: e.getVMColumnIndex($)
        }, h || null)), s0().cellVaildMode === "obsolete" && e.clearValidate ? e.clearValidate() : (T.row = null, T.column = null, ae());
      },
      /**
       * 清除所选中源状态
       */
      clearSelected() {
        const { editStore: h } = n, { selected: O } = h;
        return O.row = null, O.column = null, b(), ae();
      },
      isActiveByRow(h) {
        return process.env.NODE_ENV === "development" && Nt("vxe.error.delFunc", ["isActiveByRow", "isEditByRow"]), this.isEditByRow(h);
      },
      /**
       * 判断行是否为激活编辑状态
       * @param {Row} row 行对象
       */
      isEditByRow(h) {
        const { editStore: O } = n;
        return O.actived.row === h;
      },
      setActiveRow(h) {
        return process.env.NODE_ENV === "development" && Nt("vxe.error.delFunc", ["setActiveRow", "setEditRow"]), s.setEditRow(h);
      },
      /**
       * 激活行编辑
       */
      setEditRow(h, O) {
        const { visibleColumn: E } = o;
        let T = i.find(E, (W) => Lt(W.editRender));
        return O && (T = i.isString(O) ? e.getColumnByField(O) : O), e.setEditCell(h, T);
      },
      setActiveCell(h, O) {
        return process.env.NODE_ENV === "development" && Nt("vxe.error.delFunc", ["setActiveCell", "setEditCell"]), s.setEditCell(h, O);
      },
      /**
       * 激活单元格编辑
       */
      setEditCell(h, O) {
        const { editConfig: E } = t, T = i.isString(O) ? e.getColumnByField(O) : O;
        return h && T && Lt(E) && Lt(T.editRender) ? e.scrollToRow(h, T).then(() => {
          const W = e.getCellElement(h, T);
          return W && (f.handleActived({
            row: h,
            rowIndex: e.getRowIndex(h),
            column: T,
            columnIndex: e.getColumnIndex(T),
            cell: W,
            $table: e
          }), o._lastCallTime = Date.now()), ae();
        }) : ae();
      },
      /**
       * 只对 trigger=dblclick 有效，选中单元格
       */
      setSelectCell(h, O) {
        const { tableData: E } = n, T = c.value, W = i.isString(O) ? e.getColumnByField(O) : O;
        if (h && W && T.trigger !== "manual") {
          const $ = e.findRowIndexOf(E, h);
          if ($ > -1 && W) {
            const I = e.getCellElement(h, W), z = {
              row: h,
              rowIndex: $,
              column: W,
              columnIndex: e.getColumnIndex(W),
              cell: I
            };
            e.handleSelected(z, {});
          }
        }
        return ae();
      }
    }, f = {
      /**
       * 处理激活编辑
       */
      handleActived(h, O) {
        const { editConfig: E, mouseConfig: T } = t, { editStore: W, tableColumn: $ } = n, I = c.value, { mode: z } = I, { actived: te, focused: Ce } = W, { row: N, column: F } = h, { editRender: j } = F, ee = h.cell || e.getCellElement(N, F), oe = I.beforeEditMethod || I.activeMethod;
        if (h.cell = ee, ee && Lt(E) && Lt(j) && !e.hasPendingByRow(N)) {
          if (te.row !== N || z === "cell" && te.column !== F) {
            let re = "edit-disabled";
            if (!oe || oe(Object.assign(Object.assign({}, h), { $table: e, $grid: e.xegrid }))) {
              T && (s.clearSelected(), e.clearCellAreas && (e.clearCellAreas(), e.clearCopyCellArea())), e.closeTooltip(), te.column && s.clearEdit(O), re = "edit-activated", F.renderHeight = ee.offsetHeight, te.args = h, te.row = N, te.column = F, z === "row" ? $.forEach((J) => g(N, J)) : g(N, F);
              const G = I.afterEditMethod;
              ae(() => {
                f.handleFocus(h, O), G && G(Object.assign(Object.assign({}, h), { $table: e, $grid: e.xegrid }));
              });
            }
            e.dispatchEvent(re, {
              row: N,
              rowIndex: e.getRowIndex(N),
              $rowIndex: e.getVMRowIndex(N),
              column: F,
              columnIndex: e.getColumnIndex(F),
              $columnIndex: e.getVMColumnIndex(F)
            }, O), re === "edit-activated" && e.dispatchEvent("edit-actived", {
              row: N,
              rowIndex: e.getRowIndex(N),
              $rowIndex: e.getVMRowIndex(N),
              column: F,
              columnIndex: e.getColumnIndex(F),
              $columnIndex: e.getVMColumnIndex(F)
            }, O);
          } else {
            const { column: re } = te;
            if (T && (s.clearSelected(), e.clearCellAreas && (e.clearCellAreas(), e.clearCopyCellArea())), re !== F) {
              const { model: G } = re;
              G.update && tr(N, re, G.value), e.clearValidate && e.clearValidate(N, F);
            }
            F.renderHeight = ee.offsetHeight, te.args = h, te.column = F, setTimeout(() => {
              f.handleFocus(h, O);
            });
          }
          Ce.column = null, Ce.row = null, e.focus();
        }
        return ae();
      },
      /**
       * 处理聚焦
       */
      handleFocus(h) {
        const { row: O, column: E, cell: T } = h, { editRender: W } = E;
        if (Lt(W)) {
          const $ = l0.get(W.name);
          let { autofocus: I, autoselect: z } = W, te;
          if (!I && $ && (I = $.tableAutoFocus || $.tableAutofocus || $.autofocus), !z && $ && (z = $.tableAutoSelect || $.autoselect), i.isFunction(I) ? te = I(h) : I && (te = T.querySelector(I), te && te.focus()), te) {
            if (z)
              te.select();
            else if (zr.msie) {
              const Ce = te.createTextRange();
              Ce.collapse(!1), Ce.select();
            }
          } else
            e.scrollToRow(O, E);
        }
      },
      /**
       * 处理选中源
       */
      handleSelected(h, O) {
        const { mouseConfig: E } = t, { editStore: T } = n, W = a.value, $ = c.value, { actived: I, selected: z } = T, { row: te, column: Ce } = h, N = E && W.selected;
        return N && (z.row !== te || z.column !== Ce) && (I.row !== te || $.mode === "cell" && I.column !== Ce) && (s.clearEdit(O), s.clearSelected(), e.clearCellAreas && (e.clearCellAreas(), e.clearCopyCellArea()), z.args = h, z.row = te, z.column = Ce, N && f.addCellSelectedClass(), e.focus(), O && e.dispatchEvent("cell-selected", h, O)), ae();
      },
      addCellSelectedClass() {
        const { editStore: h } = n, { selected: O } = h, { row: E, column: T } = O;
        if (b(), E && T) {
          const W = e.getCellElement(E, T);
          W && vr(W, "col--selected");
        }
      }
    }, Object.assign(Object.assign({}, s), f);
  },
  setupGrid(e) {
    return e.extendTableMethods(a0);
  }
});
const c0 = 'body{margin:0;padding: 0 1px;color:#333333;font-size:14px;font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu}body *{-webkit-box-sizing:border-box;box-sizing:border-box}.vxe-table{border-collapse:collapse;text-align:left;border-spacing:0}.vxe-table:not(.is--print){table-layout:fixed}.vxe-table,.vxe-table th,.vxe-table td,.vxe-table td{border-color:#D0D0D0;border-style:solid;border-width:0}.vxe-table.is--print{width:100%}.border--default,.border--full,.border--outer{border-top-width:1px}.border--default,.border--full,.border--outer{border-left-width:1px}.border--outer,.border--default th,.border--default td,.border--full th,.border--full td,.border--outer th,.border--inner th,.border--inner td{border-bottom-width:1px}.border--default,.border--outer,.border--full th,.border--full td{border-right-width:1px}.border--default th,.border--full th,.border--outer th{background-color:#f8f8f9}.vxe-table td>div,.vxe-table th>div{padding:.5em .4em}.col--center{text-align:center}.col--right{text-align:right}.vxe-table:not(.is--print) .col--ellipsis>div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.vxe-table--tree-node{text-align:left}.vxe-table--tree-node-wrapper{position:relative}.vxe-table--tree-icon-wrapper{position:absolute;top:50%;width:1em;height:1em;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.vxe-table--tree-unfold-icon,.vxe-table--tree-fold-icon{position:absolute;width:0;height:0;border-style:solid;border-width:.5em;border-right-color:transparent;border-bottom-color:transparent}.vxe-table--tree-unfold-icon{left:.3em;top:0;border-left-color:#939599;border-top-color:transparent}.vxe-table--tree-fold-icon{left:0;top:.3em;border-left-color:transparent;border-top-color:#939599}.vxe-table--tree-cell{display:block;padding-left:1.5em}.vxe-table input[type="checkbox"]{margin:0}.vxe-table input[type="checkbox"],.vxe-table input[type="radio"],.vxe-table input[type="checkbox"]+span,.vxe-table input[type="radio"]+span{vertical-align:middle;padding-left:0.4em}';
function u0(e, t) {
  return new Blob([e], { type: `text/${t.type};charset=utf-8;` });
}
function d0(e, t) {
  const { style: n } = e;
  return [
    "<!DOCTYPE html><html>",
    "<head>",
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">',
    `<title>${e.sheetName}</title>`,
    '<style media="print">.vxe-page-break-before{page-break-before:always;}.vxe-page-break-after{page-break-after:always;}</style>',
    `<style>${c0}</style>`,
    n ? `<style>${n}</style>` : "",
    "</head>",
    `<body>${t}</body>`,
    "</html>"
  ].join("");
}
const { getI18n: Qo, hooks: f0, renderer: yc } = ue;
let Ks;
const p0 = "\uFEFF", ms = `\r
`;
function Jp(e) {
  return e.property || ["seq", "checkbox", "radio"].indexOf(e.type) > -1;
}
const Dh = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.childNodes && n.childNodes.length ? (t.push(n), t.push(...Dh(n.childNodes))) : t.push(n);
  }), t;
}, m0 = (e) => {
  let t = 1;
  const n = (a, c) => {
    if (c && (a._level = c._level + 1, t < a._level && (t = a._level)), a.childNodes && a.childNodes.length) {
      let p = 0;
      a.childNodes.forEach((d) => {
        n(d, a), p += d._colSpan;
      }), a._colSpan = p;
    } else
      a._colSpan = 1;
  };
  e.forEach((a) => {
    a._level = 1, n(a);
  });
  const o = [];
  for (let a = 0; a < t; a++)
    o.push([]);
  return Dh(e).forEach((a) => {
    a.childNodes && a.childNodes.length ? a._rowSpan = 1 : a._rowSpan = t - a._level + 1, o[a._level - 1].push(a);
  }), o;
};
function g0(e) {
  return e === !0 ? "full" : e || "default";
}
function Ys(e) {
  return e === "TRUE" || e === "true" || e === !0;
}
function la(e, t) {
  const { footerFilterMethod: n } = e;
  return n ? t.filter((o, l) => n({ items: o, $rowIndex: l })) : t;
}
function v0(e, t) {
  if (t) {
    if (e.type === "seq")
      return `	${t}`;
    switch (e.cellType) {
      case "string":
        if (!isNaN(t))
          return `	${t}`;
        break;
      case "number":
        break;
      default:
        if (t.length >= 12 && !isNaN(t))
          return `	${t}`;
        break;
    }
  }
  return t;
}
function Xs(e) {
  return /[",\s\n]/.test(e) ? `"${e.replace(/"/g, '""')}"` : e;
}
function Do(e, t) {
  return e.getElementsByTagName(t);
}
function Qp(e) {
  return `#${e}@${i.uniqueId()}`;
}
function Oh(e, t) {
  return e.replace(/#\d+@\d+/g, (n) => i.hasOwnProp(t, n) ? t[n] : n);
}
function em(e, t) {
  return Oh(e, t).replace(/^"+$/g, (o) => '"'.repeat(Math.ceil(o.length / 2)));
}
function Th(e, t, n) {
  const o = t.split(ms), l = [];
  let a = [];
  if (o.length) {
    const c = {}, p = Date.now();
    o.forEach((d) => {
      if (d) {
        const s = {};
        d = d.replace(/("")|(\n)/g, (g, D) => {
          const b = Qp(p);
          return c[b] = D ? '"' : `
`, b;
        }).replace(/"(.*?)"/g, (g, D) => {
          const b = Qp(p);
          return c[b] = Oh(D, c), b;
        });
        const f = d.split(n);
        a.length ? (f.forEach((g, D) => {
          D < a.length && (s[a[D]] = em(g.trim(), c));
        }), l.push(s)) : a = f.map((g) => em(g.trim(), c));
      }
    });
  }
  return { fields: a, rows: l };
}
function h0(e, t) {
  return Th(e, t, ",");
}
function b0(e, t) {
  return Th(e, t, "	");
}
function x0(e, t) {
  const o = new DOMParser().parseFromString(t, "text/html"), l = Do(o, "body"), a = [], c = [];
  if (l.length) {
    const p = Do(l[0], "table");
    if (p.length) {
      const d = Do(p[0], "thead");
      if (d.length) {
        i.arrayEach(Do(d[0], "tr"), (f) => {
          i.arrayEach(Do(f, "th"), (g) => {
            c.push(g.textContent);
          });
        });
        const s = Do(p[0], "tbody");
        s.length && i.arrayEach(Do(s[0], "tr"), (f) => {
          const g = {};
          i.arrayEach(Do(f, "td"), (D, b) => {
            c[b] && (g[c[b]] = D.textContent || "");
          }), a.push(g);
        });
      }
    }
  }
  return { fields: c, rows: a };
}
function y0(e, t) {
  const o = new DOMParser().parseFromString(t, "application/xml"), l = Do(o, "Worksheet"), a = [], c = [];
  if (l.length) {
    const p = Do(l[0], "Table");
    if (p.length) {
      const d = Do(p[0], "Row");
      d.length && (i.arrayEach(Do(d[0], "Cell"), (s) => {
        c.push(s.textContent);
      }), i.arrayEach(d, (s, f) => {
        if (f) {
          const g = {}, D = Do(s, "Cell");
          i.arrayEach(D, (b, x) => {
            c[x] && (g[c[x]] = b.textContent);
          }), a.push(g);
        }
      }));
    }
  }
  return { fields: c, rows: a };
}
function tm(e) {
  i.eachTree(e, (t) => {
    delete t._level, delete t._colSpan, delete t._rowSpan, delete t._children, delete t.childNodes;
  }, { children: "children" });
}
function C0(e, t) {
  const n = [];
  return e.forEach((o) => {
    const l = o.property;
    l && n.push(l);
  }), t.some((o) => n.indexOf(o) > -1);
}
const w0 = ["exportData", "importByFile", "importData", "saveFile", "readFile", "print", "getPrintHtml", "openImport", "openExport", "openPrint"];
f0.add("tableExportModule", {
  setupTable(e) {
    const { props: t, reactData: n, internalData: o } = e, { computeTreeOpts: l, computePrintOpts: a, computeExportOpts: c, computeImportOpts: p, computeCustomOpts: d, computeSeqOpts: s, computeRadioOpts: f, computeCheckboxOpts: g, computeColumnOpts: D } = e.getComputeMaps(), b = ut("$xeGrid", null), x = (G) => {
      const J = l.value, A = J.children || J.childrenField;
      return G[A] && G[A].length;
    }, S = (G, J, A, M) => {
      const ne = s.value.seqMethod || A.seqMethod;
      return ne ? ne({
        row: G,
        rowIndex: e.getRowIndex(G),
        $rowIndex: J,
        column: A,
        columnIndex: e.getColumnIndex(A),
        $columnIndex: M
      }) : e.getRowSeq(G);
    };
    function y(G, J) {
      const A = D.value, M = J.headerExportMethod || A.headerExportMethod;
      return M ? M({ column: J, options: G, $table: e }) : (G.original ? J.property : J.getTitle()) || "";
    }
    const h = (G) => i.isBoolean(G) ? G ? "TRUE" : "FALSE" : G, O = (G, J, A) => {
      const { isAllExpand: M, mode: H } = G, { treeConfig: ne } = t, de = f.value, ve = g.value, Oe = l.value, Fe = D.value;
      if (Ks || (Ks = document.createElement("div")), ne) {
        const R = Oe.children || Oe.childrenField, k = [], U = /* @__PURE__ */ new Map();
        return i.eachTree(A, (_, K, Z, ke, ye, Ee) => {
          const xe = _._row || _, Le = ye && ye._row ? ye._row : ye;
          if (M || !Le || U.has(Le) && e.isTreeExpandByRow(Le)) {
            const je = x(xe), Ye = {
              _row: xe,
              _level: Ee.length - 1,
              _hasChild: je,
              _expand: je && e.isTreeExpandByRow(xe)
            };
            J.forEach((fe, ge) => {
              let $e = "";
              const Ve = fe.editRender || fe.cellRender;
              let ce = fe.exportMethod;
              if (!ce && Ve && Ve.name) {
                const We = yc.get(Ve.name);
                We && (ce = We.tableExportMethod || We.exportMethod);
              }
              if (ce || (ce = Fe.exportMethod), ce)
                $e = ce({ $table: e, row: xe, column: fe, options: G });
              else
                switch (fe.type) {
                  case "seq":
                    $e = H === "all" ? ke.map((We, Ge) => Ge % 2 === 0 ? Number(We) + 1 : ".").join("") : S(xe, K, fe, ge);
                    break;
                  case "checkbox":
                    $e = h(e.isCheckedByCheckboxRow(xe)), Ye._checkboxLabel = ve.labelField ? i.get(xe, ve.labelField) : "", Ye._checkboxDisabled = ve.checkMethod && !ve.checkMethod({ row: xe });
                    break;
                  case "radio":
                    $e = h(e.isCheckedByRadioRow(xe)), Ye._radioLabel = de.labelField ? i.get(xe, de.labelField) : "", Ye._radioDisabled = de.checkMethod && !de.checkMethod({ row: xe });
                    break;
                  default:
                    if (G.original)
                      $e = Io(xe, fe);
                    else if ($e = `${e.getCellLabel(xe, fe)}`, fe.type === "html")
                      Ks.innerHTML = $e, $e = Ks.innerText.trim();
                    else {
                      const We = e.getCellElement(xe, fe);
                      We && ($e = We.innerText.trim());
                    }
                }
              Ye[fe.id] = i.toValueString($e);
            }), U.set(xe, 1), k.push(Object.assign(Ye, xe));
          }
        }, { children: R }), k;
      }
      return A.map((R, k) => {
        const U = {
          _row: R
        };
        return J.forEach((_, K) => {
          let Z = "";
          const ke = _.editRender || _.cellRender;
          let ye = _.exportMethod;
          if (!ye && ke && ke.name) {
            const Ee = yc.get(ke.name);
            Ee && (ye = Ee.exportMethod);
          }
          if (ye)
            Z = ye({ $table: e, row: R, column: _, options: G });
          else
            switch (_.type) {
              case "seq":
                Z = H === "all" ? k + 1 : S(R, k, _, K);
                break;
              case "checkbox":
                Z = h(e.isCheckedByCheckboxRow(R)), U._checkboxLabel = ve.labelField ? i.get(R, ve.labelField) : "", U._checkboxDisabled = ve.checkMethod && !ve.checkMethod({ row: R });
                break;
              case "radio":
                Z = h(e.isCheckedByRadioRow(R)), U._radioLabel = de.labelField ? i.get(R, de.labelField) : "", U._radioDisabled = de.checkMethod && !de.checkMethod({ row: R });
                break;
              default:
                if (G.original)
                  Z = Io(R, _);
                else if (Z = `${e.getCellLabel(R, _)}`, _.type === "html")
                  Ks.innerHTML = Z, Z = Ks.innerText.trim();
                else {
                  const Ee = e.getCellElement(R, _);
                  Ee && (Z = Ee.innerText.trim());
                }
            }
          U[_.id] = i.toValueString(Z);
        }), U;
      });
    }, E = (G) => {
      const { columns: J, dataFilterMethod: A } = G;
      let M = G.data;
      return A && (M = M.filter((H, ne) => A({ row: H, $rowIndex: ne }))), O(G, J, M);
    }, T = (G, J, A) => {
      const M = D.value, H = A.editRender || A.cellRender;
      let ne = A.footerExportMethod;
      if (!ne && H && H.name) {
        const ve = yc.get(H.name);
        ve && (ne = ve.tableFooterExportMethod || ve.footerExportMethod);
      }
      ne || (ne = M.footerExportMethod);
      const de = e.getVTColumnIndex(A);
      return ne ? ne({ $table: e, items: J, itemIndex: de, row: J, _columnIndex: de, column: A, options: G }) : i.isArray(J) ? i.toValueString(J[de]) : i.get(J, A.field);
    }, W = (G, J, A) => {
      let M = p0;
      if (G.isHeader && (M += J.map((H) => Xs(y(G, H))).join(",") + ms), A.forEach((H) => {
        M += J.map((ne) => Xs(v0(ne, H[ne.id]))).join(",") + ms;
      }), G.isFooter) {
        const { footerTableData: H } = n;
        la(G, H).forEach((de) => {
          M += J.map((ve) => Xs(T(G, de, ve))).join(",") + ms;
        });
      }
      return M;
    }, $ = (G, J, A) => {
      let M = "";
      if (G.isHeader && (M += J.map((H) => Xs(y(G, H))).join("	") + ms), A.forEach((H) => {
        M += J.map((ne) => Xs(H[ne.id])).join("	") + ms;
      }), G.isFooter) {
        const { footerTableData: H } = n;
        la(G, H).forEach((de) => {
          M += J.map((ve) => Xs(T(G, de, ve))).join(",") + ms;
        });
      }
      return M;
    }, I = (G, J, A) => {
      const M = G[J], H = i.isUndefined(M) || i.isNull(M) ? A : M;
      let Oe = H === "title" || (H === !0 || H === "tooltip") || H === "ellipsis";
      const { scrollXLoad: Fe, scrollYLoad: R } = n;
      return (Fe || R) && !Oe && (Oe = !0), Oe;
    }, z = (G, J, A) => {
      const { id: M, border: H, treeConfig: ne, headerAlign: de, align: ve, footerAlign: Oe, showOverflow: Fe, showHeaderOverflow: R } = t, { isAllSelected: k, isIndeterminate: U, mergeList: _ } = n, K = l.value, { print: Z, isHeader: ke, isFooter: ye, isColgroup: Ee, isMerge: xe, colgroups: Le, original: je } = G, Ye = "check-all", ge = [
        `<table class="${[
          "vxe-table",
          `border--${g0(H)}`,
          Z ? "is--print" : "",
          ke ? "is--header" : ""
        ].filter((Ve) => Ve).join(" ")}" border="0" cellspacing="0" cellpadding="0">`,
        `<colgroup>${J.map((Ve) => `<col style="width:${Ve.renderWidth}px">`).join("")}</colgroup>`
      ];
      if (ke && (ge.push("<thead>"), Ee && !je ? Le.forEach((Ve) => {
        ge.push(`<tr>${Ve.map((ce) => {
          const We = ce.headerAlign || ce.align || de || ve, Ge = I(ce, "showHeaderOverflow", R) ? ["col--ellipsis"] : [], Ze = y(G, ce);
          let pe = 0, Y = 0;
          i.eachTree([ce], (he) => {
            (!he.childNodes || !ce.childNodes.length) && Y++, pe += he.renderWidth;
          }, { children: "childNodes" });
          const le = pe - Y;
          return We && Ge.push(`col--${We}`), ce.type === "checkbox" ? `<th class="${Ge.join(" ")}" colspan="${ce._colSpan}" rowspan="${ce._rowSpan}"><div ${Z ? "" : `style="width: ${le}px"`}><input type="checkbox" class="${Ye}" ${k ? "checked" : ""}><span>${Ze}</span></div></th>` : `<th class="${Ge.join(" ")}" colspan="${ce._colSpan}" rowspan="${ce._rowSpan}" title="${Ze}"><div ${Z ? "" : `style="width: ${le}px"`}><span>${An(Ze, !0)}</span></div></th>`;
        }).join("")}</tr>`);
      }) : ge.push(`<tr>${J.map((Ve) => {
        const ce = Ve.headerAlign || Ve.align || de || ve, We = I(Ve, "showHeaderOverflow", R) ? ["col--ellipsis"] : [], Ge = y(G, Ve);
        return ce && We.push(`col--${ce}`), Ve.type === "checkbox" ? `<th class="${We.join(" ")}"><div ${Z ? "" : `style="width: ${Ve.renderWidth}px"`}><input type="checkbox" class="${Ye}" ${k ? "checked" : ""}><span>${Ge}</span></div></th>` : `<th class="${We.join(" ")}" title="${Ge}"><div ${Z ? "" : `style="width: ${Ve.renderWidth}px"`}><span>${An(Ge, !0)}</span></div></th>`;
      }).join("")}</tr>`), ge.push("</thead>")), A.length && (ge.push("<tbody>"), ne ? A.forEach((Ve) => {
        ge.push("<tr>" + J.map((ce) => {
          const We = ce.align || ve, Ge = I(ce, "showOverflow", Fe) ? ["col--ellipsis"] : [], Ze = Ve[ce.id];
          if (We && Ge.push(`col--${We}`), ce.treeNode) {
            let pe = "";
            return Ve._hasChild && (pe = `<i class="${Ve._expand ? "vxe-table--tree-fold-icon" : "vxe-table--tree-unfold-icon"}"></i>`), Ge.push("vxe-table--tree-node"), ce.type === "radio" ? `<td class="${Ge.join(" ")}" title="${Ze}"><div ${Z ? "" : `style="width: ${ce.renderWidth}px"`}><div class="vxe-table--tree-node-wrapper" style="padding-left: ${Ve._level * K.indent}px"><div class="vxe-table--tree-icon-wrapper">${pe}</div><div class="vxe-table--tree-cell"><input type="radio" name="radio_${M}" ${Ve._radioDisabled ? "disabled " : ""}${Ys(Ze) ? "checked" : ""}><span>${Ve._radioLabel}</span></div></div></div></td>` : ce.type === "checkbox" ? `<td class="${Ge.join(" ")}" title="${Ze}"><div ${Z ? "" : `style="width: ${ce.renderWidth}px"`}><div class="vxe-table--tree-node-wrapper" style="padding-left: ${Ve._level * K.indent}px"><div class="vxe-table--tree-icon-wrapper">${pe}</div><div class="vxe-table--tree-cell"><input type="checkbox" ${Ve._checkboxDisabled ? "disabled " : ""}${Ys(Ze) ? "checked" : ""}><span>${Ve._checkboxLabel}</span></div></div></div></td>` : `<td class="${Ge.join(" ")}" title="${Ze}"><div ${Z ? "" : `style="width: ${ce.renderWidth}px"`}><div class="vxe-table--tree-node-wrapper" style="padding-left: ${Ve._level * K.indent}px"><div class="vxe-table--tree-icon-wrapper">${pe}</div><div class="vxe-table--tree-cell">${Ze}</div></div></div></td>`;
          }
          return ce.type === "radio" ? `<td class="${Ge.join(" ")}"><div ${Z ? "" : `style="width: ${ce.renderWidth}px"`}><input type="radio" name="radio_${M}" ${Ve._radioDisabled ? "disabled " : ""}${Ys(Ze) ? "checked" : ""}><span>${Ve._radioLabel}</span></div></td>` : ce.type === "checkbox" ? `<td class="${Ge.join(" ")}"><div ${Z ? "" : `style="width: ${ce.renderWidth}px"`}><input type="checkbox" ${Ve._checkboxDisabled ? "disabled " : ""}${Ys(Ze) ? "checked" : ""}><span>${Ve._checkboxLabel}</span></div></td>` : `<td class="${Ge.join(" ")}" title="${Ze}"><div ${Z ? "" : `style="width: ${ce.renderWidth}px"`}>${An(Ze, !0)}</div></td>`;
        }).join("") + "</tr>");
      }) : A.forEach((Ve) => {
        ge.push("<tr>" + J.map((ce) => {
          const We = ce.align || ve, Ge = I(ce, "showOverflow", Fe) ? ["col--ellipsis"] : [], Ze = Ve[ce.id];
          let pe = 1, Y = 1;
          if (xe && _.length) {
            const le = e.getVTRowIndex(Ve._row), he = e.getVTColumnIndex(ce), He = Eh(_, le, he);
            if (He) {
              const { rowspan: se, colspan: Se } = He;
              if (!se || !Se)
                return "";
              se > 1 && (pe = se), Se > 1 && (Y = Se);
            }
          }
          return We && Ge.push(`col--${We}`), ce.type === "radio" ? `<td class="${Ge.join(" ")}" rowspan="${pe}" colspan="${Y}"><div ${Z ? "" : `style="width: ${ce.renderWidth}px"`}><input type="radio" name="radio_${M}" ${Ve._radioDisabled ? "disabled " : ""}${Ys(Ze) ? "checked" : ""}><span>${Ve._radioLabel}</span></div></td>` : ce.type === "checkbox" ? `<td class="${Ge.join(" ")}" rowspan="${pe}" colspan="${Y}"><div ${Z ? "" : `style="width: ${ce.renderWidth}px"`}><input type="checkbox" ${Ve._checkboxDisabled ? "disabled " : ""}${Ys(Ze) ? "checked" : ""}><span>${Ve._checkboxLabel}</span></div></td>` : `<td class="${Ge.join(" ")}" rowspan="${pe}" colspan="${Y}" title="${Ze}"><div ${Z ? "" : `style="width: ${ce.renderWidth}px"`}>${An(Ze, !0)}</div></td>`;
        }).join("") + "</tr>");
      }), ge.push("</tbody>")), ye) {
        const { footerTableData: Ve } = n, ce = la(G, Ve);
        ce.length && (ge.push("<tfoot>"), ce.forEach((We) => {
          ge.push(`<tr>${J.map((Ge) => {
            const Ze = Ge.footerAlign || Ge.align || Oe || ve, pe = I(Ge, "showOverflow", Fe) ? ["col--ellipsis"] : [], Y = T(G, We, Ge);
            return Ze && pe.push(`col--${Ze}`), `<td class="${pe.join(" ")}" title="${Y}"><div ${Z ? "" : `style="width: ${Ge.renderWidth}px"`}>${An(Y, !0)}</div></td>`;
          }).join("")}</tr>`);
        }), ge.push("</tfoot>"));
      }
      const $e = !k && U ? `<script>(function(){var a=document.querySelector(".${Ye}");if(a){a.indeterminate=true}})()<\/script>` : "";
      return ge.push("</table>", $e), Z ? ge.join("") : d0(G, ge.join(""));
    }, te = (G, J, A) => {
      let M = [
        '<?xml version="1.0"?>',
        '<?mso-application progid="Excel.Sheet"?>',
        '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40">',
        '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">',
        "<Version>16.00</Version>",
        "</DocumentProperties>",
        '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">',
        "<WindowHeight>7920</WindowHeight>",
        "<WindowWidth>21570</WindowWidth>",
        "<WindowTopX>32767</WindowTopX>",
        "<WindowTopY>32767</WindowTopY>",
        "<ProtectStructure>False</ProtectStructure>",
        "<ProtectWindows>False</ProtectWindows>",
        "</ExcelWorkbook>",
        `<Worksheet ss:Name="${G.sheetName}">`,
        "<Table>",
        J.map((H) => `<Column ss:Width="${H.renderWidth}"/>`).join("")
      ].join("");
      if (G.isHeader && (M += `<Row>${J.map((H) => `<Cell><Data ss:Type="String">${y(G, H)}</Data></Cell>`).join("")}</Row>`), A.forEach((H) => {
        M += "<Row>" + J.map((ne) => `<Cell><Data ss:Type="String">${H[ne.id]}</Data></Cell>`).join("") + "</Row>";
      }), G.isFooter) {
        const { footerTableData: H } = n;
        la(G, H).forEach((de) => {
          M += `<Row>${J.map((ve) => `<Cell><Data ss:Type="String">${T(G, de, ve)}</Data></Cell>`).join("")}</Row>`;
        });
      }
      return `${M}</Table></Worksheet></Workbook>`;
    }, Ce = (G, J, A) => {
      if (J.length)
        switch (G.type) {
          case "csv":
            return W(G, J, A);
          case "txt":
            return $(G, J, A);
          case "html":
            return z(G, J, A);
          case "xml":
            return te(G, J, A);
        }
      return "";
    }, N = (G, J) => {
      const { filename: A, type: M, download: H } = G;
      if (!H) {
        const ne = u0(J, G);
        return Promise.resolve({ type: M, content: J, blob: ne });
      }
      ue.saveFile && ue.saveFile({ filename: A, type: M, content: J }).then(() => {
        G.message !== !1 && ue.modal && ue.modal.message({ content: Qo("vxe.table.expSuccess"), status: "success" });
      });
    }, F = (G) => {
      const { remote: J, columns: A, colgroups: M, exportMethod: H, afterExportMethod: ne } = G;
      return new Promise((de) => {
        if (J) {
          const ve = { options: G, $table: e, $grid: b };
          de(H ? H(ve) : ve);
        } else {
          const ve = E(G);
          de(e.preventEvent(null, "event.export", { options: G, columns: A, colgroups: M, datas: ve }, () => N(G, Ce(G, A, ve))));
        }
      }).then((de) => (tm(A), G.print || ne && ne({ status: !0, options: G, $table: e, $grid: b }), Object.assign({ status: !0 }, de))).catch(() => {
        tm(A), G.print || ne && ne({ status: !1, options: G, $table: e, $grid: b });
        const de = { status: !1 };
        return Promise.reject(de);
      });
    }, j = (G, J) => {
      const { tableFullColumn: A, _importResolve: M, _importReject: H } = o;
      let ne = { fields: [], rows: [] };
      switch (J.type) {
        case "csv":
          ne = h0(A, G);
          break;
        case "txt":
          ne = b0(A, G);
          break;
        case "html":
          ne = x0(A, G);
          break;
        case "xml":
          ne = y0(A, G);
          break;
      }
      const { fields: de, rows: ve } = ne;
      C0(A, de) ? e.createData(ve).then((Fe) => {
        let R;
        return J.mode === "insert" || J.mode === "insertBottom" ? R = e.insert(Fe) : R = e.reloadData(Fe), J.message !== !1 && ue.modal && ue.modal.message({ content: Qo("vxe.table.impSuccess", [ve.length]), status: "success" }), R.then(() => {
          M && M({ status: !0 });
        });
      }) : J.message !== !1 && (ue.modal && ue.modal.message({ content: Qo("vxe.error.impFields"), status: "error" }), H && H({ status: !1 }));
    }, ee = (G, J) => {
      const { importMethod: A, afterImportMethod: M } = J, { type: H, filename: ne } = uh(G), de = p.value;
      if (!A && !i.includes(i.keys(de._typeMaps), H)) {
        J.message !== !1 && ue.modal && ue.modal.message({ content: Qo("vxe.error.notType", [H]), status: "error" });
        const Oe = { status: !1 };
        return Promise.reject(Oe);
      }
      return new Promise((Oe, Fe) => {
        const R = (U) => {
          Oe(U), o._importResolve = null, o._importReject = null;
        }, k = (U) => {
          Fe(U), o._importResolve = null, o._importReject = null;
        };
        if (o._importResolve = R, o._importReject = k, window.FileReader) {
          const U = Object.assign({ mode: "insertBottom" }, J, { type: H, filename: ne });
          if (U.remote)
            A ? Promise.resolve(A({ file: G, options: U, $table: e })).then(() => {
              R({ status: !0 });
            }).catch(() => {
              R({ status: !0 });
            }) : R({ status: !0 });
          else {
            const { tableFullColumn: _ } = o;
            e.preventEvent(null, "event.import", { file: G, options: U, columns: _ }, () => {
              const K = new FileReader();
              K.onerror = () => {
                Et("vxe.error.notType", [H]), k({ status: !1 });
              }, K.onload = (Z) => {
                j(Z.target.result, U);
              }, K.readAsText(G, U.encoding || "UTF-8");
            });
          }
        } else
          process.env.NODE_ENV === "development" && Et("vxe.error.notExp"), R({ status: !0 });
      }).then(() => {
        M && M({ status: !0, options: J, $table: e });
      }).catch((Oe) => (M && M({ status: !1, options: J, $table: e }), Promise.reject(Oe)));
    }, oe = (G, J) => {
      const { treeConfig: A, showHeader: M, showFooter: H } = t, { initStore: ne, mergeList: de, isGroup: ve, footerTableData: Oe, exportStore: Fe, exportParams: R } = n, { collectColumn: k } = o, U = c.value, _ = A, K = d.value, Z = e.getCheckboxRecords(), ke = b ? b.getComputeMaps().computeProxyOpts.value : {}, ye = !!Oe.length, Ee = !_ && de.length, xe = Object.assign({
        message: !0,
        isHeader: M,
        isFooter: H,
        current: "current",
        modes: ["current", "selected"].concat(ke.ajax && ke.ajax.queryAll ? ["all"] : [])
      }, G), Le = xe.types || i.keys(U._typeMaps), je = xe.modes || [], Ye = K.checkMethod, fe = k.slice(0), { columns: ge } = xe, $e = Le.map((ce) => ({
        value: ce,
        label: Qo(`vxe.export.types.${ce}`)
      })), Ve = je.map((ce) => ce && ce.value ? {
        value: ce.value,
        label: ce.label || ce.value
      } : {
        value: ce,
        label: Qo(`vxe.export.modes.${ce}`)
      });
      return i.eachTree(fe, (ce, We, Ge, Ze, pe) => {
        (ce.children && ce.children.length || Jp(ce)) && (ce.checked = ge ? ge.some((le) => {
          if (ua(le))
            return ce === le;
          if (i.isString(le))
            return ce.field === le;
          {
            const he = le.id || le.colId, He = le.type, se = le.property || le.field;
            if (he)
              return ce.id === he;
            if (se && He)
              return ce.property === se && ce.type === He;
            if (se)
              return ce.property === se;
            if (He)
              return ce.type === He;
          }
          return !1;
        }) : ce.visible, ce.halfChecked = !1, ce.disabled = pe && pe.disabled || (Ye ? !Ye({ column: ce }) : !1));
      }), Object.assign(Fe, {
        columns: fe,
        typeList: $e,
        modeList: Ve,
        hasFooter: ye,
        hasMerge: Ee,
        hasTree: _,
        isPrint: J,
        hasColgroup: ve,
        visible: !0
      }), Object.assign(R, {
        mode: Z.length ? "selected" : "current"
      }, xe), Ve.some((ce) => ce.value === R.mode) || (R.mode = Ve[0].value), $e.some((ce) => ce.value === R.type) || (R.type = $e[0].value), ne.export = !0, ae();
    }, re = {
      /**
       * 导出文件，支持 csv/html/xml/txt
       * 如果是树表格，则默认是导出所有节点
       * 如果是启用了虚拟滚动，则只能导出数据源，可以配合 dataFilterMethod 函数自行转换数据
       * @param {Object} options 参数
       */
      exportData(G) {
        const { treeConfig: J } = t, { isGroup: A, tableGroupColumn: M } = n, { tableFullColumn: H, afterFullData: ne } = o, de = c.value, ve = l.value, Oe = Object.assign({
          // filename: '',
          // sheetName: '',
          // original: false,
          // message: false,
          isHeader: !0,
          isFooter: !0,
          isColgroup: !0,
          // isMerge: false,
          // isAllExpand: false,
          download: !0,
          type: "csv",
          mode: "current"
          // data: null,
          // remote: false,
          // dataFilterMethod: null,
          // footerFilterMethod: null,
          // exportMethod: null,
          // columnFilterMethod: null,
          // beforeExportMethod: null,
          // afterExportMethod: null
        }, de, {
          print: !1
        }, G), { type: Fe, mode: R, columns: k, original: U, beforeExportMethod: _ } = Oe;
        let K = [];
        const Z = k && k.length ? k : null;
        let ke = Oe.columnFilterMethod;
        !Z && !ke && (ke = U ? ({ column: Ee }) => Ee.property : ({ column: Ee }) => Jp(Ee)), Z ? (Oe._isCustomColumn = !0, K = i.searchTree(i.mapTree(Z, (Ee) => {
          let xe;
          if (Ee) {
            if (ua(Ee))
              xe = Ee;
            else if (i.isString(Ee))
              xe = e.getColumnByField(Ee);
            else {
              const Le = Ee.id || Ee.colId, je = Ee.type, Ye = Ee.property || Ee.field;
              Le ? xe = e.getColumnById(Le) : Ye && je ? xe = H.find((fe) => fe.property === Ye && fe.type === je) : Ye ? xe = e.getColumnByField(Ye) : je && (xe = H.find((fe) => fe.type === je));
            }
            return xe || {};
          }
        }, {
          children: "childNodes",
          mapChildren: "_children"
        }), (Ee, xe) => ua(Ee) && (!ke || ke({ column: Ee, $columnIndex: xe })), {
          children: "_children",
          mapChildren: "childNodes",
          original: !0
        })) : K = i.searchTree(A ? M : H, (Ee, xe) => Ee.visible && (!ke || ke({ column: Ee, $columnIndex: xe })), { children: "children", mapChildren: "childNodes", original: !0 });
        const ye = [];
        if (i.eachTree(K, (Ee) => {
          Ee.children && Ee.children.length || ye.push(Ee);
        }, { children: "childNodes" }), Oe.columns = ye, Oe.colgroups = m0(K), Oe.filename || (Oe.filename = Qo(Oe.original ? "vxe.table.expOriginFilename" : "vxe.table.expFilename", [i.toDateString(Date.now(), "yyyyMMddHHmmss")])), Oe.sheetName || (Oe.sheetName = document.title), !Oe.exportMethod && !i.includes(i.keys(de._typeMaps), Fe)) {
          process.env.NODE_ENV === "development" && Et("vxe.error.notType", [Fe]);
          const Ee = { status: !1 };
          return Promise.reject(Ee);
        }
        if (Oe.print || _ && _({ options: Oe, $table: e, $grid: b }), !Oe.data)
          if (Oe.data = [], R === "selected") {
            const Ee = e.getCheckboxRecords();
            ["html", "pdf"].indexOf(Fe) > -1 && J ? Oe.data = i.searchTree(e.getTableData().fullData, (xe) => e.findRowIndexOf(Ee, xe) > -1, Object.assign({}, ve, { data: "_row" })) : Oe.data = Ee;
          } else if (R === "all") {
            if (process.env.NODE_ENV === "development" && (b || Nt("vxe.error.errProp", ["all", "mode=current,selected"])), b && !Oe.remote) {
              const { reactData: Ee } = b, { computeProxyOpts: xe } = b.getComputeMaps(), Le = xe.value, { beforeQueryAll: je, afterQueryAll: Ye, ajax: fe = {}, props: ge = {} } = Le, $e = fe.queryAll;
              if (process.env.NODE_ENV === "development" && ($e || Nt("vxe.error.notFunc", ["proxy-config.ajax.queryAll"])), $e) {
                const Ve = {
                  $table: e,
                  $grid: b,
                  sort: Ee.sortData,
                  filters: Ee.filterData,
                  form: Ee.formData,
                  target: $e,
                  options: Oe
                };
                return Promise.resolve((je || $e)(Ve)).catch((ce) => ce).then((ce) => (Oe.data = (ge.list ? i.get(ce, ge.list) : ce) || [], Ye && Ye(Ve), F(Oe)));
              }
            }
          } else R === "current" && (Oe.data = ne);
        return F(Oe);
      },
      importByFile(G, J) {
        const A = Object.assign({}, J), { beforeImportMethod: M } = A;
        return M && M({ options: A, $table: e }), ee(G, A);
      },
      importData(G) {
        const J = p.value, A = Object.assign({
          types: i.keys(J._typeMaps)
          // beforeImportMethod: null,
          // afterImportMethod: null
        }, J, G), { beforeImportMethod: M, afterImportMethod: H } = A;
        return M && M({ options: A, $table: e }), ue.readFile(A).catch((ne) => (H && H({ status: !1, options: A, $table: e }), Promise.reject(ne))).then((ne) => {
          const { file: de } = ne;
          return ee(de, A);
        });
      },
      saveFile(G) {
        return ue.saveFile(G);
      },
      readFile(G) {
        return ue.readFile(G);
      },
      print(G) {
        const J = a.value, A = Object.assign({
          original: !1
          // beforePrintMethod
        }, J, G, {
          type: "html",
          download: !1,
          remote: !1,
          print: !0
        });
        A.sheetName || (A.sheetName = document.title);
        const M = A.beforePrintMethod, H = A.html || A.content;
        return new Promise((ne, de) => {
          ue.print ? ne(H ? ue.print({
            title: A.sheetName,
            html: H,
            customStyle: A.style,
            beforeMethod: M ? ({ html: ve }) => M({
              html: ve,
              content: ve,
              options: A,
              $table: e
            }) : void 0
          }) : re.exportData(A).then(({ content: ve }) => ue.print({
            title: A.sheetName,
            html: ve,
            customStyle: A.style,
            beforeMethod: M ? ({ html: Oe }) => M({
              html: Oe,
              content: Oe,
              options: A,
              $table: e
            }) : void 0
          }))) : de({ status: !1 });
        });
      },
      getPrintHtml(G) {
        const J = a.value, A = Object.assign({
          original: !1
          // beforePrintMethod
        }, J, G, {
          type: "html",
          download: !1,
          remote: !1,
          print: !0
        });
        return re.exportData(A).then(({ content: M }) => ({
          html: M
        }));
      },
      openImport(G) {
        const { treeConfig: J, importConfig: A } = t, { initStore: M, importStore: H, importParams: ne } = n, de = p.value, ve = Object.assign({
          mode: "insertBottom",
          message: !0,
          types: i.keys(de._typeMaps),
          modes: ["insertBottom", "covering"]
        }, de, G), Oe = ve.types || [], Fe = ve.modes || [];
        if (!!J) {
          ve.message && ue.modal && ue.modal.message({ content: Qo("vxe.error.treeNotImp"), status: "error" });
          return;
        }
        A || Et("vxe.error.reqProp", ["import-config"]);
        const k = Oe.map((_) => ({
          value: _,
          label: Qo(`vxe.export.types.${_}`)
        })), U = Fe.map((_) => _ && _.value ? {
          value: _.value,
          label: _.label || _.value
        } : {
          value: _,
          label: Qo(`vxe.import.modes.${_}`)
        });
        Object.assign(H, {
          file: null,
          type: "",
          filename: "",
          modeList: U,
          typeList: k,
          visible: !0
        }), Object.assign(ne, ve), U.some((_) => _.value === ne.mode) || (ne.mode = U[0].value), M.import = !0;
      },
      openExport(G) {
        const J = c.value, A = Object.assign({
          message: !0,
          types: i.keys(J._typeMaps)
        }, J, G);
        process.env.NODE_ENV === "development" && (t.exportConfig || Et("vxe.error.reqProp", ["export-config"])), oe(A);
      },
      openPrint(G) {
        const J = a.value, A = Object.assign({
          message: !0
        }, J, G);
        process.env.NODE_ENV === "development" && (t.printConfig || Et("vxe.error.reqProp", ["print-config"])), oe(A, !0);
      }
    };
    return re;
  },
  setupGrid(e) {
    return e.extendTableMethods(w0);
  }
});
const { hooks: E0 } = ue;
function S0(e, t) {
  let n = 0, o = 0;
  const l = !zr.firefox && Is(e, "vxe-checkbox--label");
  if (l) {
    const a = getComputedStyle(e);
    n -= i.toNumber(a.paddingTop), o -= i.toNumber(a.paddingLeft);
  }
  for (; e && e !== t; )
    if (n += e.offsetTop, o += e.offsetLeft, e = e.offsetParent, l) {
      const a = getComputedStyle(e);
      n -= i.toNumber(a.paddingTop), o -= i.toNumber(a.paddingLeft);
    }
  return { offsetTop: n, offsetLeft: o };
}
E0.add("tableKeyboardModule", {
  setupTable(e) {
    const { props: t, reactData: n, internalData: o } = e, { refElem: l } = e.getRefMaps(), { computeEditOpts: a, computeCheckboxOpts: c, computeMouseOpts: p, computeTreeOpts: d } = e.getComputeMaps();
    function s(b, x, S) {
      let y = 0, h = [];
      const O = S > 0, E = S > 0 ? S : Math.abs(S) + x.offsetHeight, { scrollYLoad: T } = n, { afterFullData: W, scrollYStore: $ } = o;
      if (T) {
        const I = e.getVTRowIndex(b.row);
        O ? h = W.slice(I, I + Math.ceil(E / $.rowHeight)) : h = W.slice(I - Math.floor(E / $.rowHeight) + 1, I + 1);
      } else {
        const I = O ? "next" : "previous";
        for (; x && y < E; ) {
          const z = e.getRowNode(x);
          z && (h.push(z.item), y += x.offsetHeight, x = x[`${I}ElementSibling`]);
        }
      }
      return h;
    }
    const f = (b, x) => {
      const { column: S, cell: y } = x;
      if (S.type === "checkbox") {
        const h = l.value, { elemStore: O } = o, E = b.clientX, T = b.clientY, W = O[`${S.fixed || "main"}-body-wrapper`] || O["main-body-wrapper"], $ = W ? W.value : null;
        if (!$)
          return;
        const I = $.querySelector(".vxe-table--checkbox-range"), z = document.onmousemove, te = document.onmouseup, Ce = y.parentNode, N = e.getCheckboxRecords();
        let F = [];
        const j = 1, ee = S0(b.target, $), oe = ee.offsetTop + b.offsetY, re = ee.offsetLeft + b.offsetX, G = $.scrollTop, J = Ce.offsetHeight;
        let A = null, M = !1, H = 1;
        const ne = (Fe, R) => {
          e.dispatchEvent(`checkbox-range-${Fe}`, { records: e.getCheckboxRecords(), reserves: e.getCheckboxReserveRecords() }, R);
        }, de = (Fe) => {
          const { clientX: R, clientY: k } = Fe, U = R - E, _ = k - T + ($.scrollTop - G);
          let K = Math.abs(_), Z = Math.abs(U), ke = oe, ye = re;
          _ < j ? (ke += _, ke < j && (ke = j, K = oe)) : K = Math.min(K, $.scrollHeight - oe - j), U < j ? (ye += U, Z > re && (ye = j, Z = re)) : Z = Math.min(Z, $.clientWidth - re - j), I.style.height = `${K}px`, I.style.width = `${Z}px`, I.style.left = `${ye}px`, I.style.top = `${ke}px`, I.style.display = "block";
          const Ee = s(x, Ce, _ < j ? -K : K);
          K > 10 && Ee.length !== F.length && (F = Ee, Fe.ctrlKey ? Ee.forEach((xe) => {
            e.handleSelectRow({ row: xe }, N.indexOf(xe) === -1);
          }) : (e.setAllCheckboxRow(!1), e.handleCheckedCheckboxRow(Ee, !0, !1)), ne("change", Fe));
        }, ve = () => {
          clearTimeout(A), A = null;
        }, Oe = (Fe) => {
          ve(), A = setTimeout(() => {
            if (A) {
              const { scrollLeft: R, scrollTop: k, clientHeight: U, scrollHeight: _ } = $, K = Math.ceil(H * 50 / J);
              M ? k + U < _ ? (e.scrollTo(R, k + K), Oe(Fe), de(Fe)) : ve() : k ? (e.scrollTo(R, k - K), Oe(Fe), de(Fe)) : ve();
            }
          }, 50);
        };
        vr(h, "drag--range"), document.onmousemove = (Fe) => {
          Fe.preventDefault(), Fe.stopPropagation();
          const { clientY: R } = Fe, { boundingTop: k } = ca($);
          R < k ? (M = !1, H = k - R, A || Oe(Fe)) : R > k + $.clientHeight ? (M = !0, H = R - k - $.clientHeight, A || Oe(Fe)) : A && ve(), de(Fe);
        }, document.onmouseup = (Fe) => {
          ve(), Oo(h, "drag--range"), I.removeAttribute("style"), document.onmousemove = z, document.onmouseup = te, ne("end", Fe);
        }, ne("start", b);
      }
    }, g = (b, x) => {
      const { editConfig: S, checkboxConfig: y, mouseConfig: h } = t, O = c.value, E = p.value, T = a.value;
      if (h && E.area && e.handleCellAreaEvent)
        return e.handleCellAreaEvent(b, x);
      y && O.range && f(b, x), h && E.selected && (!S || T.mode === "cell") && e.handleSelected(x, b);
    };
    return {
      // 处理 Tab 键移动
      moveTabSelected(b, x, S) {
        const { editConfig: y } = t, { afterFullData: h, visibleColumn: O } = o, E = a.value;
        let T, W, $;
        const I = Object.assign({}, b), z = e.getVTRowIndex(I.row), te = e.getVTColumnIndex(I.column);
        S.preventDefault(), x ? te <= 0 ? z > 0 && (W = z - 1, T = h[W], $ = O.length - 1) : $ = te - 1 : te >= O.length - 1 ? z < h.length - 1 && (W = z + 1, T = h[W], $ = 0) : $ = te + 1;
        const Ce = O[$];
        Ce && (T ? (I.rowIndex = W, I.row = T) : I.rowIndex = z, I.columnIndex = $, I.column = Ce, I.cell = e.getCellElement(I.row, I.column), y ? (E.trigger === "click" || E.trigger === "dblclick") && (E.mode === "row" ? e.handleActived(I, S) : e.scrollToRow(I.row, I.column).then(() => e.handleSelected(I, S))) : e.scrollToRow(I.row, I.column).then(() => e.handleSelected(I, S)));
      },
      // 处理当前行方向键移动
      moveCurrentRow(b, x, S) {
        const { treeConfig: y } = t, { currentRow: h } = n, { afterFullData: O } = o, E = d.value, T = E.children || E.childrenField;
        let W;
        if (S.preventDefault(), h)
          if (y) {
            const { index: $, items: I } = i.findTree(O, (z) => z === h, { children: T });
            b && $ > 0 ? W = I[$ - 1] : x && $ < I.length - 1 && (W = I[$ + 1]);
          } else {
            const $ = e.getVTRowIndex(h);
            b && $ > 0 ? W = O[$ - 1] : x && $ < O.length - 1 && (W = O[$ + 1]);
          }
        else
          W = O[0];
        if (W) {
          const $ = {
            $table: e,
            row: W,
            rowIndex: e.getRowIndex(W),
            $rowIndex: e.getVMRowIndex(W)
          };
          e.scrollToRow(W).then(() => e.triggerCurrentRowEvent(S, $));
        }
      },
      // 处理可编辑方向键移动
      moveSelected(b, x, S, y, h, O) {
        const { afterFullData: E, visibleColumn: T } = o, W = Object.assign({}, b), $ = e.getVTRowIndex(W.row), I = e.getVTColumnIndex(W.column);
        O.preventDefault(), S && $ > 0 ? (W.rowIndex = $ - 1, W.row = E[W.rowIndex]) : h && $ < E.length - 1 ? (W.rowIndex = $ + 1, W.row = E[W.rowIndex]) : x && I ? (W.columnIndex = I - 1, W.column = T[W.columnIndex]) : y && I < T.length - 1 && (W.columnIndex = I + 1, W.column = T[W.columnIndex]), e.scrollToRow(W.row, W.column).then(() => {
          W.cell = e.getCellElement(W.row, W.column), e.handleSelected(W, O);
        });
      },
      /**
       * 表头单元格按下事件
       */
      triggerHeaderCellMousedownEvent(b, x) {
        const { mouseConfig: S } = t, y = p.value;
        if (S && y.area && e.handleHeaderCellAreaEvent) {
          const h = b.currentTarget, O = nn(b, h, "vxe-cell--sort").flag, E = nn(b, h, "vxe-cell--filter").flag;
          e.handleHeaderCellAreaEvent(b, Object.assign({ cell: h, triggerSort: O, triggerFilter: E }, x));
        }
        e.focus(), e.closeMenu && e.closeMenu();
      },
      /**
       * 单元格按下事件
       */
      triggerCellMousedownEvent(b, x) {
        const S = b.currentTarget;
        x.cell = S, g(b, x), e.focus(), e.closeFilter(), e.closeMenu && e.closeMenu();
      }
    };
  }
});
const { getConfig: D0, validators: O0, hooks: T0 } = ue;
class pi {
  constructor(t) {
    Object.assign(this, {
      $options: t,
      required: t.required,
      min: t.min,
      max: t.max,
      type: t.type,
      pattern: t.pattern,
      validator: t.validator,
      trigger: t.trigger,
      maxWidth: t.maxWidth
    });
  }
  /**
   * 获取校验不通过的消息
   * 支持国际化翻译
   */
  get content() {
    return wr(this.$options.content || this.$options.message);
  }
  get message() {
    return this.content;
  }
}
const M0 = ["fullValidate", "validate", "clearValidate"];
T0.add("tableValidatorModule", {
  setupTable(e) {
    const { props: t, reactData: n, internalData: o } = e, { refValidTooltip: l } = e.getRefMaps(), { computeValidOpts: a, computeTreeOpts: c, computeEditOpts: p } = e.getComputeMaps();
    let d = {}, s = {}, f;
    const g = (S) => new Promise((y) => {
      a.value.autoPos === !1 ? (e.dispatchEvent("valid-error", S, null), y()) : e.handleActived(S, { type: "valid-error", trigger: "call" }).then(() => {
        y(s.showValidTooltip(S));
      });
    }), D = (S) => {
      if (a.value.msgMode === "single") {
        const h = Object.keys(S), O = S;
        if (h.length) {
          const E = h[0];
          O[E] = S[E];
        }
        return O;
      }
      return S;
    }, b = (S, y, h) => {
      const O = {}, { editRules: E, treeConfig: T } = t, { afterFullData: W, visibleColumn: $ } = o, I = c.value, z = I.children || I.childrenField, te = a.value;
      let Ce;
      S === !0 ? Ce = W : S && (i.isFunction(S) ? y = S : Ce = i.isArray(S) ? S : [S]), Ce || (e.getInsertRecords ? Ce = e.getInsertRecords().concat(e.getUpdateRecords()) : Ce = []);
      const N = [];
      o._lastCallTime = Date.now(), f = !1, d.clearValidate();
      const F = {};
      if (E) {
        const j = e.getColumns(), ee = (oe) => {
          if (h || !f) {
            const re = [];
            j.forEach((G) => {
              (h || !f) && i.has(E, G.property) && re.push(s.validCellRules("all", oe, G).catch(({ rule: J, rules: A }) => {
                const M = {
                  rule: J,
                  rules: A,
                  rowIndex: e.getRowIndex(oe),
                  row: oe,
                  columnIndex: e.getColumnIndex(G),
                  column: G,
                  field: G.property,
                  $table: e
                };
                if (O[G.property] || (O[G.property] = []), F[`${st(e, oe)}:${G.id}`] = {
                  column: G,
                  row: oe,
                  rule: J,
                  content: J.content
                }, O[G.property].push(M), !h)
                  return f = !0, Promise.reject(M);
              }));
            }), N.push(Promise.all(re));
          }
        };
        return T ? i.eachTree(Ce, ee, { children: z }) : Ce.forEach(ee), Promise.all(N).then(() => {
          const oe = Object.keys(O);
          return n.validErrorMaps = D(F), ae().then(() => {
            if (oe.length)
              return Promise.reject(O[oe[0]][0]);
            y && y();
          });
        }).catch((oe) => new Promise((re, G) => {
          const J = () => {
            ae(() => {
              y ? (y(O), re()) : D0().validToReject === "obsolete" ? G(O) : re(O);
            });
          }, A = () => {
            oe.cell = e.getCellElement(oe.row, oe.column), O1(oe.cell), g(oe).then(J);
          };
          if (te.autoPos === !1)
            J();
          else {
            const M = oe.row, H = oe.column, ne = W.indexOf(M), de = $.indexOf(H), ve = ne > 0 ? W[ne - 1] : M, Oe = de > 0 ? $[de - 1] : H;
            e.scrollToRow(ve, Oe).then(A);
          }
        }));
      } else
        n.validErrorMaps = {};
      return ae().then(() => {
        y && y();
      });
    };
    d = {
      /**
       * 完整校验，和 validate 的区别就是会给有效数据中的每一行进行校验
       */
      fullValidate(S, y) {
        return process.env.NODE_ENV === "development" && i.isFunction(y) && Nt("vxe.error.notValidators", ["fullValidate(rows, callback)", "fullValidate(rows)"]), b(S, y, !0);
      },
      /**
       * 快速校验，如果存在记录不通过的记录，则返回不再继续校验（异步校验除外）
       */
      validate(S, y) {
        return process.env.NODE_ENV === "development" && i.isFunction(y) && Nt("vxe.error.notValidators", ["validate(rows, callback)", "validate(rows)"]), b(S, y);
      },
      clearValidate(S, y) {
        const { validErrorMaps: h } = n, O = l.value, E = a.value, T = i.isArray(S) ? S : S ? [S] : [], W = i.isArray(y) ? y : (y ? [y] : []).map((I) => Xn(e, I));
        let $ = {};
        if (O && O.reactData.visible && O.close(), E.msgMode === "single")
          return n.validErrorMaps = {}, ae();
        if (T.length && W.length)
          $ = Object.assign({}, h), T.forEach((I) => {
            W.forEach((z) => {
              const te = `${st(e, I)}:${z.id}`;
              $[te] && delete $[te];
            });
          });
        else if (T.length) {
          const I = T.map((z) => `${st(e, z)}`);
          i.each(h, (z, te) => {
            I.indexOf(te.split(":")[0]) > -1 && ($[te] = z);
          });
        } else if (W.length) {
          const I = W.map((z) => `${z.id}`);
          i.each(h, (z, te) => {
            I.indexOf(te.split(":")[1]) > -1 && ($[te] = z);
          });
        }
        return n.validErrorMaps = $, ae();
      }
    };
    const x = (S, y) => {
      const { type: h, min: O, max: E, pattern: T } = S, W = h === "number", $ = W ? i.toNumber(y) : i.getSize(y);
      return !!(W && isNaN(y) || !i.eqNull(O) && $ < i.toNumber(O) || !i.eqNull(E) && $ > i.toNumber(E) || T && !(i.isRegExp(T) ? T : new RegExp(T)).test(y));
    };
    return s = {
      /**
       * 校验数据
       * 按表格行、列顺序依次校验（同步或异步）
       * 校验规则根据索引顺序依次校验，如果是异步则会等待校验完成才会继续校验下一列
       * 如果校验失败则，触发回调或者Promise<不通过列的错误消息>
       * 如果是传回调方式这返回一个校验不通过列的错误消息
       *
       * rule 配置：
       *  required=Boolean 是否必填
       *  min=Number 最小长度
       *  max=Number 最大长度
       *  validator=Function({ cellValue, rule, rules, row, column, rowIndex, columnIndex }) 自定义校验，接收一个 Promise
       *  trigger=blur|change 触发方式（除非特殊场景，否则默认为空就行）
       */
      validCellRules(S, y, h, O) {
        const { editRules: E } = t, { field: T } = h, W = [], $ = [];
        if (T && E) {
          const I = i.get(E, T);
          if (I) {
            const z = i.isUndefined(O) ? i.get(y, T) : O;
            I.forEach((te) => {
              const { type: Ce, trigger: N, required: F, validator: j } = te;
              if (S === "all" || !N || S === N)
                if (j) {
                  const ee = {
                    cellValue: z,
                    rule: te,
                    rules: I,
                    row: y,
                    rowIndex: e.getRowIndex(y),
                    column: h,
                    columnIndex: e.getColumnIndex(h),
                    field: h.field,
                    $table: e,
                    $grid: e.xegrid
                  };
                  let oe;
                  if (i.isString(j)) {
                    const re = O0.get(j);
                    if (re) {
                      const G = re.tableCellValidatorMethod || re.cellValidatorMethod;
                      G ? oe = G(ee) : process.env.NODE_ENV === "development" && Nt("vxe.error.notValidators", [j]);
                    } else
                      process.env.NODE_ENV === "development" && Et("vxe.error.notValidators", [j]);
                  } else
                    oe = j(ee);
                  oe && (i.isError(oe) ? (f = !0, W.push(new pi({ type: "custom", trigger: N, content: oe.message, rule: new pi(te) }))) : oe.catch && $.push(oe.catch((re) => {
                    f = !0, W.push(new pi({ type: "custom", trigger: N, content: re && re.message ? re.message : te.content || te.message, rule: new pi(te) }));
                  })));
                } else {
                  const ee = Ce === "array", oe = i.isArray(z);
                  let re = !0;
                  ee || oe ? re = !oe || !z.length : i.isString(z) ? re = gr(z.trim()) : re = gr(z), (F ? re || x(te, z) : !re && x(te, z)) && (f = !0, W.push(new pi(te)));
                }
            });
          }
        }
        return Promise.all($).then(() => {
          if (W.length) {
            const I = { rules: W, rule: W[0] };
            return Promise.reject(I);
          }
        });
      },
      hasCellRules(S, y, h) {
        const { editRules: O } = t, { field: E } = h;
        if (E && O) {
          const T = i.get(O, E);
          return T && !!i.find(T, (W) => S === "all" || !W.trigger || S === W.trigger);
        }
        return !1;
      },
      /**
       * 触发校验
       */
      triggerValidate(S) {
        const { editConfig: y, editRules: h } = t, { editStore: O } = n, { actived: E } = O, T = p.value, W = a.value;
        if (h && W.msgMode === "single" && (n.validErrorMaps = {}), y && h && E.row) {
          const { row: $, column: I, cell: z } = E.args;
          if (s.hasCellRules(S, $, I))
            return s.validCellRules(S, $, I).then(() => {
              T.mode === "row" && d.clearValidate($, I);
            }).catch(({ rule: te }) => {
              if (!te.trigger || S === te.trigger) {
                const Ce = { rule: te, row: $, column: I, cell: z };
                return s.showValidTooltip(Ce), Promise.reject(Ce);
              }
              return Promise.resolve();
            });
        }
        return Promise.resolve();
      },
      /**
       * 弹出校验错误提示
       */
      showValidTooltip(S) {
        const { height: y } = t, { tableData: h, validStore: O, validErrorMaps: E } = n, { rule: T, row: W, column: $, cell: I } = S, z = a.value, te = l.value, Ce = T.content;
        return O.visible = !0, z.msgMode === "single" ? n.validErrorMaps = {
          [`${st(e, W)}:${$.id}`]: {
            column: $,
            row: W,
            rule: T,
            content: Ce
          }
        } : n.validErrorMaps = Object.assign({}, E, {
          [`${st(e, W)}:${$.id}`]: {
            column: $,
            row: W,
            rule: T,
            content: Ce
          }
        }), e.dispatchEvent("valid-error", S, null), te && te && (z.message === "tooltip" || z.message === "default" && !y && h.length < 2) ? te.open(I, Ce) : ae();
      }
    }, Object.assign(Object.assign({}, d), s);
  },
  setupGrid(e) {
    return e.extendTableMethods(M0);
  }
});
const I0 = ["openCustom", "closeCustom"];
ue.hooks.add("tableCustomModule", {
  setupTable(e) {
    const { reactData: t, internalData: n } = e, { computeCustomOpts: o } = e.getComputeMaps(), { refElem: l } = e.getRefMaps(), a = e.xegrid, c = () => {
      const { customStore: b } = t, x = l.value;
      let S = 0;
      x && (S = x.clientHeight - 30), b.maxHeight = Math.max(4, S);
    }, p = () => {
      const { initStore: b, customStore: x } = t, { collectColumn: S } = n, y = {}, h = {}, O = {};
      return i.eachTree(S, (E) => {
        const T = E.getKey();
        E.renderFixed = E.fixed, E.renderVisible = E.visible, E.renderResizeWidth = E.renderWidth, y[T] = E.renderSortNumber, h[T] = E.fixed, O[T] = E.visible;
      }, { children: "children" }), x.oldSortMaps = y, x.oldFixedMaps = h, x.oldVisibleMaps = O, t.customColumnList = S.slice(0), x.visible = !0, b.custom = !0, f(), c(), ae().then(() => c());
    }, d = () => {
      const { customStore: b } = t, x = o.value;
      return b.visible && (b.visible = !1, x.immediate || e.handleCustom()), ae();
    }, s = {
      openCustom: p,
      closeCustom: d
    }, f = () => {
      const { customStore: b } = t, { collectColumn: x } = n, S = o.value, { checkMethod: y } = S;
      b.isAll = x.every((h) => (y ? !y({ column: h }) : !1) || h.renderVisible), b.isIndeterminate = !b.isAll && x.some((h) => (!y || y({ column: h })) && (h.renderVisible || h.halfVisible));
    }, g = (b, x) => {
      (a || e).dispatchEvent("custom", { type: b }, x);
    }, D = {
      checkCustomStatus: f,
      emitCustomEvent: g,
      triggerCustomEvent(b) {
        const { customStore: x } = e.reactData;
        x.visible ? (d(), g("close", b)) : (x.btnEl = b.target, p(), g("open", b));
      },
      customOpenEvent(b) {
        const { customStore: x } = t;
        x.visible || (x.activeBtn = !0, x.btnEl = b.target, e.openCustom(), e.emitCustomEvent("open", b));
      },
      customCloseEvent(b) {
        const { customStore: x } = t;
        x.visible && (x.activeBtn = !1, e.closeCustom(), e.emitCustomEvent("close", b));
      }
    };
    return Object.assign(Object.assign({}, s), D);
  },
  setupGrid(e) {
    return e.extendTableMethods(I0);
  }
});
const { getConfig: Cc, renderer: k0, getI18n: V0 } = ue, Mh = "modelValue", Ih = { transfer: !0 };
function kh(e) {
  switch (e.name) {
    case "input":
    case "textarea":
      return "input";
  }
  return "update:modelValue";
}
function Vh(e) {
  switch (e.name) {
    case "input":
    case "textarea":
    case "VxeInput":
    case "VxeTextarea":
    case "$input":
    case "$textarea":
      return "input";
  }
  return "change";
}
function $0(e, t) {
  return e && t.valueFormat ? i.toStringDate(e, t.valueFormat) : e;
}
function R0(e, t, n) {
  const { dateConfig: o = {} } = t;
  return i.toDateString($0(e, t), o.labelFormat || n);
}
function wc(e, t) {
  return R0(e, t, V0(`vxe.input.date.labelFormat.${t.type}`));
}
function P0(e) {
  return `vxe-${e.replace("$", "")}`;
}
function ks({ name: e }) {
  return ro(e);
}
function La({ name: e }) {
  return ro(P0(e));
}
function $h(e, t, n) {
  const { $panel: o } = e;
  o.changeOption({}, t, n);
}
function Aa(e) {
  let { name: t, attrs: n } = e;
  return t === "input" && (n = Object.assign({ type: "text" }, n)), n;
}
function Rh(e) {
  const { name: t, immediate: n, props: o } = e;
  if (!n) {
    if (t === "VxeInput" || t === "$input") {
      const { type: l } = o || {};
      return !(!l || l === "text" || l === "number" || l === "integer" || l === "float");
    }
    return !(t === "input" || t === "textarea" || t === "$textarea");
  }
  return n;
}
function ls(e, t, n, o) {
  return i.assign({ immediate: Rh(e) }, Ih, o, e.props, { [Mh]: n });
}
function ba(e, t, n, o) {
  return i.assign({}, Ih, o, e.props, { [Mh]: n });
}
function _a(e, t) {
  return t.$type === "cell" || Rh(e);
}
function fs(e, t, n) {
  const { placeholder: o } = e;
  return [
    r("span", {
      class: "vxe-cell--label"
    }, o && yd(n) ? [
      r("span", {
        class: "vxe-cell--placeholder"
      }, An(wr(o), 1))
    ] : An(n, 1))
  ];
}
function Ph(e, t, n, o) {
  const { events: l } = e, a = kh(e), c = Vh(e), p = c === a, d = {};
  return l && i.objectEach(l, (s, f) => {
    d[Nl(f)] = function(...g) {
      s(t, ...g);
    };
  }), n && (d[Nl(a)] = function(s) {
    n(s), p && o && o(s), l && l[a] && l[a](t, s);
  }), !p && o && (d[Nl(c)] = function(...s) {
    o(...s), l && l[c] && l[c](t, ...s);
  }), d;
}
function Wi(e, t, n, o) {
  const { events: l } = e, a = kh(e), c = Vh(e), p = {};
  return i.objectEach(l, (d, s) => {
    p[Nl(s)] = function(...f) {
      process.env.NODE_ENV === "development" && (i.isFunction(d) || Et("vxe.error.errFunc", [d])), d(t, ...f);
    };
  }), n && (p[Nl(a)] = function(d) {
    n(d), l && l[a] && l[a](t, d);
  }), o && (p[Nl(c)] = function(...d) {
    o(...d), l && l[c] && l[c](t, ...d);
  }), p;
}
function Bi(e, t) {
  const { $table: n, row: o, column: l } = t, { name: a } = e, { model: c } = l, p = _a(e, t);
  return Wi(e, t, (d) => {
    p ? tr(o, l, d) : (c.update = !0, c.value = d);
  }, (d) => {
    if (!p && ["VxeInput", "VxeTextarea", "$input", "$textarea"].includes(a)) {
      const s = d.value;
      c.update = !0, c.value = s, n.updateStatus(t, s);
    } else
      n.updateStatus(t);
  });
}
function xa(e, t, n) {
  return Wi(e, t, (o) => {
    n.data = o;
  }, () => {
    $h(t, !i.eqNull(n.data), n);
  });
}
function Nh(e, t) {
  const { $table: n, row: o, column: l } = t, { model: a } = l;
  return Ph(e, t, (c) => {
    const p = c.target.value;
    _a(e, t) ? tr(o, l, p) : (a.update = !0, a.value = p);
  }, (c) => {
    const p = c.target.value;
    n.updateStatus(t, p);
  });
}
function Fh(e, t, n) {
  return Ph(e, t, (o) => {
    n.data = o.target.value;
  }, () => {
    $h(t, !i.eqNull(n.data), n);
  });
}
function Ec(e, t) {
  const { row: n, column: o } = t, { name: l } = e, a = _a(e, t) ? Io(n, o) : o.model.value;
  return [
    r(l, Object.assign(Object.assign(Object.assign({ class: `vxe-default-${l}` }, Aa(e)), { value: a }), Nh(e, t)))
  ];
}
function N0(e, t) {
  return [
    r(ks(e), Object.assign(Object.assign({}, ls(e, t, null)), Wi(e, t)))
  ];
}
function pr(e, t) {
  const { row: n, column: o } = t, l = Io(n, o);
  return [
    r(ks(e), Object.assign(Object.assign({}, ls(e, t, l)), Bi(e, t)))
  ];
}
function nm(e, t) {
  const { options: n } = e, { row: o, column: l } = t, a = Io(o, l);
  return [
    r(ks(e), Object.assign(Object.assign({ options: n }, ls(e, t, a)), Bi(e, t)))
  ];
}
function ia(e, t) {
  const { row: n, column: o } = t, l = Io(n, o);
  return [
    r(La(e), Object.assign(Object.assign({}, ls(e, t, l)), Bi(e, t)))
  ];
}
function Lh(e, t) {
  return [
    r(ro("vxe-button"), Object.assign(Object.assign({}, ls(e, t, null)), Wi(e, t)))
  ];
}
function F0(e, t) {
  return e.children.map((n) => Lh(n, t)[0]);
}
function Ah(e, t, n) {
  const { optionGroups: o, optionGroupProps: l = {} } = e, a = l.options || "options", c = l.label || "label";
  return o.map((p, d) => r("optgroup", {
    key: d,
    label: p[c]
  }, n(p[a], e, t)));
}
function ya(e, t, n) {
  const { optionProps: o = {} } = t, { row: l, column: a } = n, c = o.label || "label", p = o.value || "value", d = o.disabled || "disabled", s = _a(t, n) ? Io(l, a) : a.model.value;
  return e.map((f, g) => r("option", {
    key: g,
    value: f[p],
    disabled: f[d],
    /* eslint-disable eqeqeq */
    selected: f[p] == s
  }, f[c]));
}
function L0(e, t) {
  const { column: n } = t, { name: o } = e, l = Aa(e);
  return n.filters.map((a, c) => r(o, Object.assign(Object.assign(Object.assign({ key: c, class: `vxe-default-${o}` }, l), { value: a.data }), Fh(e, t, a))));
}
function Sc(e, t) {
  const { column: n } = t;
  return n.filters.map((o, l) => {
    const a = o.data;
    return r(ks(e), Object.assign(Object.assign({ key: l }, ba(e, e, a)), xa(e, t, o)));
  });
}
function A0(e, t) {
  const { column: n } = t;
  return n.filters.map((o, l) => {
    const a = o.data;
    return r(La(e), Object.assign(Object.assign({ key: l }, ba(e, e, a)), xa(e, t, o)));
  });
}
function Lr({ option: e, row: t, column: n }) {
  const { data: o } = e;
  return i.get(t, n.property) == o;
}
function om(e, t) {
  return [
    r("select", Object.assign(Object.assign({ class: "vxe-default-select" }, Aa(e)), Nh(e, t)), e.optionGroups ? Ah(e, t, ya) : ya(e.options, e, t))
  ];
}
function rm(e, t) {
  const { row: n, column: o } = t, { options: l, optionProps: a, optionGroups: c, optionGroupProps: p } = e, d = Io(n, o);
  return [
    r(ks(e), Object.assign(Object.assign({}, ls(e, t, d, { options: l, optionProps: a, optionGroups: c, optionGroupProps: p })), Bi(e, t)))
  ];
}
function sm(e, t) {
  const { row: n, column: o } = t, { options: l, optionProps: a, optionGroups: c, optionGroupProps: p } = e, d = Io(n, o);
  return [
    r(La(e), Object.assign(Object.assign({}, ls(e, t, d, { options: l, optionProps: a, optionGroups: c, optionGroupProps: p })), Bi(e, t)))
  ];
}
function da(e, { row: t, column: n }) {
  const { props: o = {}, options: l, optionGroups: a, optionProps: c = {}, optionGroupProps: p = {} } = e, d = i.get(t, n.property);
  let s;
  const f = c.label || "label", g = c.value || "value";
  return yd(d) ? "" : i.map(o.multiple ? d : [d], a ? (D) => {
    const b = p.options || "options";
    for (let x = 0; x < a.length && (s = i.find(a[x][b], (S) => S[g] == D), !s); x++)
      ;
    return s ? s[f] : D;
  } : (D) => (s = i.find(l, (b) => b[g] == D), s ? s[f] : D)).join(", ");
}
function Dc(e) {
  const { row: t, column: n, options: o } = e;
  return o.original ? Io(t, n) : da(n.editRender || n.cellRender, e);
}
k0.mixin({
  input: {
    autofocus: "input",
    renderEdit: Ec,
    renderDefault: Ec,
    renderFilter: L0,
    defaultFilterMethod: Lr
  },
  textarea: {
    autofocus: "textarea",
    renderEdit: Ec
  },
  select: {
    renderEdit: om,
    renderDefault: om,
    renderCell(e, t) {
      return fs(e, t, da(e, t));
    },
    renderFilter(e, t) {
      const { column: n } = t;
      return n.filters.map((o, l) => r("select", Object.assign(Object.assign({ key: l, class: "vxe-default-select" }, Aa(e)), Fh(e, t, o)), e.optionGroups ? Ah(e, t, ya) : ya(e.options, e, t)));
    },
    defaultFilterMethod: Lr,
    exportMethod: Dc
  },
  VxeInput: {
    autofocus: ".vxe-input--inner",
    renderEdit: pr,
    renderCell(e, t) {
      var n;
      const { props: o = {} } = e, { row: l, column: a } = t, c = o.digits || ((n = Cc().input) === null || n === void 0 ? void 0 : n.digits) || 2;
      let p = i.get(l, a.property);
      if (p)
        switch (o.type) {
          case "date":
          case "week":
          case "month":
          case "quarter":
          case "year":
            p = wc(p, o);
            break;
          case "float":
            p = i.toFixed(i.floor(p, c), c);
            break;
        }
      return fs(e, t, p);
    },
    renderDefault: pr,
    renderFilter: Sc,
    defaultFilterMethod: Lr
  },
  VxeNumberInput: {
    autofocus: ".vxe-number-input--inner",
    renderEdit: pr,
    renderCell(e, t) {
      var n;
      const { props: o = {} } = e, { row: l, column: a } = t, c = o.digits || ((n = Cc().numberInput) === null || n === void 0 ? void 0 : n.digits) || 2;
      let p = i.get(l, a.property);
      if (p)
        switch (o.type) {
          case "float":
            p = i.toFixed(i.floor(p, c), c);
            break;
        }
      return fs(e, t, p);
    },
    renderDefault: pr,
    renderFilter: Sc,
    defaultFilterMethod: Lr
  },
  VxeDatePicker: {
    autofocus: ".vxe-date-picker--inner",
    renderEdit: pr,
    renderCell(e, t) {
      const { props: n = {} } = e, { row: o, column: l } = t;
      let a = i.get(o, l.property);
      if (a)
        switch (n.type) {
          case "date":
          case "week":
          case "month":
          case "quarter":
          case "year":
            a = wc(a, n);
            break;
        }
      return fs(e, t, a);
    },
    renderDefault: pr,
    renderFilter: Sc,
    defaultFilterMethod: Lr
  },
  VxeTextarea: {
    autofocus: ".vxe-textarea--inner"
  },
  VxeButton: {
    renderDefault: N0
  },
  VxeButtonGroup: {
    renderDefault(e, t) {
      const { options: n } = e;
      return [
        r(ks(e), Object.assign(Object.assign({ options: n }, ls(e, t, null)), Wi(e, t)))
      ];
    }
  },
  VxeSelect: {
    autofocus: ".vxe-input--inner",
    renderEdit: rm,
    renderDefault: rm,
    renderCell(e, t) {
      return fs(e, t, da(e, t));
    },
    renderFilter(e, t) {
      const { column: n } = t, { options: o, optionProps: l, optionGroups: a, optionGroupProps: c } = e;
      return n.filters.map((p, d) => {
        const s = p.data;
        return r(ks(e), Object.assign(Object.assign({ key: d }, ba(e, t, s, { options: o, optionProps: l, optionGroups: a, optionGroupProps: c })), xa(e, t, p)));
      });
    },
    defaultFilterMethod: Lr,
    exportMethod: Dc
  },
  VxeRadioGroup: {
    renderDefault: nm
  },
  VxeCheckboxGroup: {
    renderDefault: nm
  },
  VxeSwitch: {
    autofocus: ".vxe-switch--button",
    renderEdit: pr,
    renderDefault: pr
  },
  VxeUpload: {
    renderDefault: pr
  },
  // 以下已废弃
  $input: {
    autofocus: ".vxe-input--inner",
    renderEdit: ia,
    renderCell(e, t) {
      var n;
      const { props: o = {} } = e, { row: l, column: a } = t, c = o.digits || ((n = Cc().input) === null || n === void 0 ? void 0 : n.digits) || 2;
      let p = i.get(l, a.property);
      if (p)
        switch (o.type) {
          case "date":
          case "week":
          case "month":
          case "year":
            p = wc(p, o);
            break;
          case "float":
            p = i.toFixed(i.floor(p, c), c);
            break;
        }
      return fs(e, t, p);
    },
    renderDefault: ia,
    renderFilter: A0,
    defaultFilterMethod: Lr
  },
  $textarea: {
    autofocus: ".vxe-textarea--inner"
  },
  $button: {
    renderDefault: Lh
  },
  $buttons: {
    renderDefault: F0
  },
  $select: {
    autofocus: ".vxe-input--inner",
    renderEdit: sm,
    renderDefault: sm,
    renderCell(e, t) {
      return fs(e, t, da(e, t));
    },
    renderFilter(e, t) {
      const { column: n } = t, { options: o, optionProps: l, optionGroups: a, optionGroupProps: c } = e;
      return n.filters.map((p, d) => {
        const s = p.data;
        return r(La(e), Object.assign(Object.assign({ key: d }, ba(e, t, s, { options: o, optionProps: l, optionGroups: a, optionGroupProps: c })), xa(e, t, p)));
      });
    },
    defaultFilterMethod: Lr,
    exportMethod: Dc
  },
  $radio: {
    autofocus: ".vxe-radio--input"
  },
  $checkbox: {
    autofocus: ".vxe-checkbox--input"
  },
  $switch: {
    autofocus: ".vxe-switch--button",
    renderEdit: ia,
    renderDefault: ia
  }
  // 以上已废弃
});
const Wa = Object.assign({}, Fl, {
  install(e) {
    e.component(Fl.name, Fl);
  }
});
ue.dynamicApp && ue.dynamicApp.component(Fl.name, Fl);
ue.component(Fl);
const _0 = Wa, { getConfig: zo, getIcon: Ar, getI18n: Zs, renderer: lm, commands: im, createEvent: W0, useFns: B0 } = ue, Ll = tt({
  name: "VxeToolbar",
  props: {
    loading: Boolean,
    refresh: [Boolean, Object],
    import: [Boolean, Object],
    export: [Boolean, Object],
    print: [Boolean, Object],
    zoom: [Boolean, Object],
    custom: [Boolean, Object],
    buttons: { type: Array, default: () => zo().toolbar.buttons },
    tools: { type: Array, default: () => zo().toolbar.tools },
    perfect: { type: Boolean, default: () => zo().toolbar.perfect },
    size: { type: String, default: () => zo().toolbar.size || zo().size },
    className: [String, Function]
  },
  emits: [
    "button-click",
    "tool-click"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, l = i.uniqueId(), a = ue.getComponent("VxeButton"), { computeSize: c } = B0.useSize(e), p = Ot({
      isRefresh: !1,
      columns: []
    }), d = Ie(), s = {
      refElem: d
    }, f = {
      xID: l,
      props: e,
      context: t,
      reactData: p,
      getRefMaps: () => s
    };
    let g = {};
    const D = ut("$xeGrid", null), b = Ie(), x = Ie(0), S = Q(() => Object.assign({}, zo().toolbar.refresh, e.refresh)), y = Q(() => Object.assign({}, zo().toolbar.import, e.import)), h = Q(() => Object.assign({}, zo().toolbar.export, e.export)), O = Q(() => Object.assign({}, zo().toolbar.print, e.print)), E = Q(() => Object.assign({}, zo().toolbar.zoom, e.zoom)), T = Q(() => Object.assign({}, zo().toolbar.custom, e.custom)), W = Q(() => {
      const k = b.value;
      if ((x.value || k) && k) {
        const { computeCustomOpts: U } = k.getComputeMaps();
        return U.value;
      }
      return { trigger: "" };
    }), $ = Q(() => W.value.trigger), I = () => {
      if (b.value)
        return !0;
      Et("vxe.error.barUnableLink");
    }, z = ({ $event: k }) => {
      const U = b.value;
      U && (U.triggerCustomEvent ? U.triggerCustomEvent(k) : Et("vxe.error.reqModule", ["VxeTableCustomModule"]));
    }, te = ({ $event: k }) => {
      const U = b.value;
      U ? U.customOpenEvent(k) : Et("vxe.error.reqModule", ["VxeTableCustomModule"]);
    }, Ce = ({ $event: k }) => {
      const U = b.value;
      if (U) {
        const { customStore: _ } = U.reactData;
        _.activeBtn = !1, setTimeout(() => {
          !_.activeBtn && !_.activeWrapper && U.customCloseEvent(k);
        }, 350);
      }
    }, N = (k) => {
      const { isRefresh: U } = p, _ = S.value;
      if (!U) {
        const K = _.queryMethod || _.query;
        if (K) {
          p.isRefresh = !0;
          try {
            Promise.resolve(K({})).catch((Z) => Z).then(() => {
              p.isRefresh = !1;
            });
          } catch {
            p.isRefresh = !1;
          }
        } else D && (p.isRefresh = !0, D.triggerToolbarCommitEvent({ code: _.code || "reload" }, k).catch((Z) => Z).then(() => {
          p.isRefresh = !1;
        }));
      }
    }, F = (k) => {
      D && D.triggerZoomEvent(k);
    }, j = (k, U) => {
      const _ = b.value, { code: K } = U;
      if (K)
        if (D)
          D.triggerToolbarBtnEvent(U, k);
        else {
          const Z = im.get(K), ke = { code: K, button: U, $table: _, $grid: D, $event: k };
          if (Z) {
            const ye = Z.tableCommandMethod || Z.commandMethod;
            ye ? ye(ke) : process.env.NODE_ENV === "development" && Et("vxe.error.notCommands", [K]);
          }
          f.dispatchEvent("button-click", ke, k);
        }
    }, ee = (k, U) => {
      const _ = b.value, { code: K } = U;
      if (K)
        if (D)
          D.triggerToolbarTolEvent(U, k);
        else {
          const Z = im.get(K), ke = { code: K, tool: U, $table: _, $grid: D, $event: k };
          if (Z) {
            const ye = Z.tableCommandMethod || Z.commandMethod;
            ye ? ye(ke) : process.env.NODE_ENV === "development" && Et("vxe.error.notCommands", [K]);
          }
          f.dispatchEvent("tool-click", ke, k);
        }
    }, oe = () => {
      if (I()) {
        const k = b.value;
        k && k.openImport();
      }
    }, re = () => {
      if (I()) {
        const k = b.value;
        k && k.openExport();
      }
    }, G = () => {
      if (I()) {
        const k = b.value;
        k && k.openPrint();
      }
    }, J = (k, U) => {
      const { dropdowns: _ } = k, K = [];
      return _ ? _.map((Z, ke) => Z.visible === !1 ? Me() : a ? r(a, {
        key: ke,
        disabled: Z.disabled,
        loading: Z.loading,
        type: Z.type,
        icon: Z.icon,
        circle: Z.circle,
        round: Z.round,
        status: Z.status,
        content: Z.name,
        onClick: (ye) => U ? j(ye, Z) : ee(ye, Z)
      }) : Me()) : K;
    }, A = () => {
      const { buttons: k } = e, U = b.value, _ = n.buttons;
      if (_)
        return uo(_({ $grid: D, $table: U }));
      const K = [];
      return k && k.forEach((Z) => {
        const { dropdowns: ke, buttonRender: ye } = Z;
        if (Z.visible !== !1) {
          const Ee = ye ? lm.get(ye.name) : null;
          if (ye && Ee && Ee.renderToolbarButton) {
            const xe = Ee.toolbarButtonClassName, Le = { $grid: D, $table: U, button: Z };
            K.push(r("span", {
              class: ["vxe-button--item", xe ? i.isFunction(xe) ? xe(Le) : xe : ""]
            }, uo(Ee.renderToolbarButton(ye, Le))));
          } else
            a && K.push(r(a, {
              disabled: Z.disabled,
              loading: Z.loading,
              type: Z.type,
              icon: Z.icon,
              circle: Z.circle,
              round: Z.round,
              status: Z.status,
              content: Z.name,
              destroyOnClose: Z.destroyOnClose,
              placement: Z.placement,
              transfer: Z.transfer,
              onClick: (xe) => j(xe, Z)
            }, ke && ke.length ? {
              dropdowns: () => J(Z, !0)
            } : {}));
        }
      }), K;
    }, M = () => {
      const { tools: k } = e, U = b.value, _ = n.tools;
      if (_)
        return uo(_({ $grid: D, $table: U }));
      const K = [];
      return k && k.forEach((Z, ke) => {
        const { dropdowns: ye, toolRender: Ee } = Z;
        if (Z.visible !== !1) {
          const xe = Ee ? Ee.name : null, Le = Ee ? lm.get(xe) : null;
          if (Ee && Le && Le.renderToolbarTool) {
            const je = Le.toolbarToolClassName, Ye = { $grid: D, $table: U, tool: Z };
            K.push(r("span", {
              key: xe,
              class: ["vxe-tool--item", je ? i.isFunction(je) ? je(Ye) : je : ""]
            }, uo(Le.renderToolbarTool(Ee, Ye))));
          } else
            a && K.push(r(a, {
              key: ke,
              disabled: Z.disabled,
              loading: Z.loading,
              type: Z.type,
              icon: Z.icon,
              circle: Z.circle,
              round: Z.round,
              status: Z.status,
              content: Z.name,
              destroyOnClose: Z.destroyOnClose,
              placement: Z.placement,
              transfer: Z.transfer,
              onClick: (je) => ee(je, Z)
            }, ye && ye.length ? {
              dropdowns: () => J(Z, !1)
            } : {}));
        }
      }), K;
    }, H = () => {
      const k = y.value;
      return a ? r(a, {
        key: "import",
        circle: !0,
        icon: k.icon || Ar().TOOLBAR_TOOLS_IMPORT,
        title: Zs("vxe.toolbar.import"),
        onClick: oe
      }) : Me();
    }, ne = () => {
      const k = h.value;
      return a ? r(a, {
        key: "export",
        circle: !0,
        icon: k.icon || Ar().TOOLBAR_TOOLS_EXPORT,
        title: Zs("vxe.toolbar.export"),
        onClick: re
      }) : Me();
    }, de = () => {
      const k = O.value;
      return a ? r(a, {
        key: "print",
        circle: !0,
        icon: k.icon || Ar().TOOLBAR_TOOLS_PRINT,
        title: Zs("vxe.toolbar.print"),
        onClick: G
      }) : Me();
    }, ve = () => {
      const k = S.value;
      return a ? r(a, {
        key: "refresh",
        circle: !0,
        icon: p.isRefresh ? k.iconLoading || Ar().TOOLBAR_TOOLS_REFRESH_LOADING : k.icon || Ar().TOOLBAR_TOOLS_REFRESH,
        title: Zs("vxe.toolbar.refresh"),
        onClick: N
      }) : Me();
    }, Oe = () => {
      const k = E.value;
      return D && a ? r(a, {
        key: "zoom",
        circle: !0,
        icon: D.isMaximized() ? k.iconOut || Ar().TOOLBAR_TOOLS_MINIMIZE : k.iconIn || Ar().TOOLBAR_TOOLS_FULLSCREEN,
        title: Zs(`vxe.toolbar.zoom${D.isMaximized() ? "Out" : "In"}`),
        onClick: F
      }) : Me();
    }, Fe = () => {
      const k = T.value, U = $.value, _ = {};
      return U === "manual" || (U === "hover" ? (_.onMouseenter = te, _.onMouseleave = Ce) : _.onClick = z), a ? r(a, Object.assign({ key: "custom", circle: !0, icon: k.icon || Ar().TOOLBAR_TOOLS_CUSTOM, title: Zs("vxe.toolbar.custom"), className: "vxe-toolbar-custom-target" }, _)) : Me();
    };
    g = {
      dispatchEvent(k, U, _) {
        o(k, W0(_, { $toolbar: f }, U));
      },
      syncUpdate(k) {
        const { collectColumn: U } = k;
        b.value = k.$table, p.columns = U, x.value++;
      }
    }, Object.assign(f, g), ae(() => {
      const { refresh: k } = e, U = S.value, _ = U.queryMethod || U.query;
      k && !D && !_ && Nt("vxe.error.notFunc", ["queryMethod"]);
      const K = T.value;
      process.env.NODE_ENV === "development" && (K.isFooter && Nt("vxe.error.delProp", ["toolbar.custom.isFooter", "table.custom-config.showFooter"]), K.showFooter && Nt("vxe.error.delProp", ["toolbar.custom.showFooter", "table.custom-config.showFooter"]), K.immediate && Nt("vxe.error.delProp", ["toolbar.custom.immediate", "table.custom-config.immediate"]), K.trigger && Nt("vxe.error.delProp", ["toolbar.custom.trigger", "table.custom-config.trigger"]));
    });
    const R = () => {
      const { perfect: k, loading: U, refresh: _, zoom: K, custom: Z, className: ke } = e, ye = c.value;
      return r("div", {
        ref: d,
        class: ["vxe-toolbar", ke ? i.isFunction(ke) ? ke({ $toolbar: f }) : ke : "", {
          [`size--${ye}`]: ye,
          "is--perfect": k,
          "is--loading": U
        }]
      }, [
        r("div", {
          class: "vxe-buttons--wrapper"
        }, A()),
        r("div", {
          class: "vxe-tools--wrapper"
        }, M()),
        r("div", {
          class: "vxe-tools--operate"
        }, [
          e.import ? H() : Me(),
          e.export ? ne() : Me(),
          e.print ? de() : Me(),
          _ ? ve() : Me(),
          K && D ? Oe() : Me(),
          Z ? Fe() : Me()
        ])
      ]);
    };
    return f.renderVN = R, process.env.NODE_ENV === "development" && ae(() => {
      (e.refresh || e.import || e.export || e.print || e.zoom) && (a || Et("vxe.error.reqComp", ["vxe-button"]));
    }), f;
  },
  render() {
    return this.renderVN();
  }
}), Ba = Object.assign({}, Ll, {
  install(e) {
    e.component(Ll.name, Ll);
  }
});
ue.dynamicApp && ue.dynamicApp.component(Ll.name, Ll);
ue.component(Ll);
const H0 = Ba, { getConfig: mr, getI18n: Js, commands: z0, hooks: j0, useFns: q0, createEvent: G0, globalEvents: Oc, GLOBAL_EVENT_KEYS: U0 } = ue, K0 = Object.keys(Od), am = ["clearAll", "syncData", "updateData", "loadData", "reloadData", "reloadRow", "loadColumn", "reloadColumn", "getRowNode", "getColumnNode", "getRowIndex", "getVTRowIndex", "getVMRowIndex", "getColumnIndex", "getVTColumnIndex", "getVMColumnIndex", "createData", "createRow", "revertData", "clearData", "isInsertByRow", "isUpdateByRow", "getColumns", "getColumnById", "getColumnByField", "getTableColumn", "getData", "getCheckboxRecords", "getParentRow", "getRowSeq", "getRowById", "getRowid", "getTableData", "setColumnFixed", "clearColumnFixed", "setColumnWidth", "getColumnWidth", "hideColumn", "showColumn", "resetColumn", "refreshColumn", "refreshScroll", "recalculate", "closeTooltip", "isAllCheckboxChecked", "isAllCheckboxIndeterminate", "getCheckboxIndeterminateRecords", "setCheckboxRow", "isCheckedByCheckboxRow", "isIndeterminateByCheckboxRow", "toggleCheckboxRow", "setAllCheckboxRow", "getRadioReserveRecord", "clearRadioReserve", "getCheckboxReserveRecords", "clearCheckboxReserve", "toggleAllCheckboxRow", "clearCheckboxRow", "setCurrentRow", "isCheckedByRadioRow", "setRadioRow", "clearCurrentRow", "clearRadioRow", "getCurrentRecord", "getRadioRecord", "getCurrentColumn", "setCurrentColumn", "clearCurrentColumn", "setPendingRow", "togglePendingRow", "getPendingRecords", "clearPendingRow", "sort", "clearSort", "isSort", "getSortColumns", "closeFilter", "isFilter", "isActiveFilterByColumn", "isRowExpandLoaded", "clearRowExpandLoaded", "reloadRowExpand", "reloadRowExpand", "toggleRowExpand", "setAllRowExpand", "setRowExpand", "isExpandByRow", "isRowExpandByRow", "clearRowExpand", "clearRowExpandReserve", "getRowExpandRecords", "getTreeExpandRecords", "isTreeExpandLoaded", "clearTreeExpandLoaded", "reloadTreeExpand", "reloadTreeChilds", "toggleTreeExpand", "setAllTreeExpand", "setTreeExpand", "isTreeExpandByRow", "clearTreeExpand", "clearTreeExpandReserve", "getScroll", "scrollTo", "scrollToRow", "scrollToColumn", "clearScroll", "updateFooter", "updateStatus", "setMergeCells", "removeInsertRow", "removeMergeCells", "getMergeCells", "clearMergeCells", "setMergeFooterItems", "removeMergeFooterItems", "getMergeFooterItems", "clearMergeFooterItems", "openTooltip", "getCellLabel", "getCellElement", "focus", "blur", "connect"], Y0 = [
  ...Td,
  "page-change",
  "form-submit",
  "form-submit-invalid",
  "form-reset",
  "form-collapse",
  "form-toggle-collapse",
  "proxy-query",
  "proxy-delete",
  "proxy-save",
  "toolbar-button-click",
  "toolbar-tool-click",
  "zoom"
], Al = tt({
  name: "VxeGrid",
  props: Object.assign(Object.assign({}, Od), { layouts: Array, columns: Array, pagerConfig: Object, proxyConfig: Object, toolbarConfig: Object, formConfig: Object, zoomConfig: Object, size: { type: String, default: () => mr().grid.size || mr().size } }),
  emits: Y0,
  setup(e, t) {
    var n;
    const { slots: o, emit: l } = t, a = i.uniqueId(), c = ue.getComponent("VxeForm"), p = ue.getComponent("VxePager"), { computeSize: d } = q0.useSize(e), s = Ot({
      tableLoading: !1,
      proxyInited: !1,
      isZMax: !1,
      tableData: [],
      filterData: [],
      formData: {},
      sortData: [],
      tZindex: 0,
      tablePage: {
        total: 0,
        pageSize: ((n = mr().pager) === null || n === void 0 ? void 0 : n.pageSize) || 10,
        currentPage: 1
      }
    }), f = Ie(), g = Ie(), D = Ie(), b = Ie(), x = Ie(), S = Ie(), y = Ie(), h = Ie(), O = Ie(), E = Ie(), T = (Y) => {
      const le = {};
      return Y.forEach((he) => {
        le[he] = (...He) => {
          const se = g.value;
          if (se && se[he])
            return se[he](...He);
        };
      }), le;
    }, W = T(am);
    am.forEach((Y) => {
      W[Y] = (...le) => {
        const he = g.value;
        if (he && he[Y])
          return he && he[Y](...le);
      };
    });
    const $ = Q(() => Object.assign({}, mr().grid.proxyConfig, e.proxyConfig)), I = Q(() => $.value.message !== !1), z = Q(() => Object.assign({}, mr().grid.pagerConfig, e.pagerConfig)), te = Q(() => Object.assign({}, mr().grid.formConfig, e.formConfig)), Ce = Q(() => Object.assign({}, mr().grid.toolbarConfig, e.toolbarConfig)), N = Q(() => Object.assign({}, mr().grid.zoomConfig, e.zoomConfig)), F = Q(() => s.isZMax ? { zIndex: s.tZindex } : null), j = Q(() => {
      const Y = {}, le = e;
      return K0.forEach((he) => {
        Y[he] = le[he];
      }), Y;
    }), ee = {
      refElem: f,
      refTable: g,
      refForm: D,
      refToolbar: b,
      refPager: x
    }, oe = {
      computeProxyOpts: $,
      computePagerOpts: z,
      computeFormOpts: te,
      computeToolbarOpts: Ce,
      computeZoomOpts: N
    }, re = {
      xID: a,
      props: e,
      context: t,
      reactData: s,
      getRefMaps: () => ee,
      getComputeMaps: () => oe
    }, G = Q(() => {
      const { seqConfig: Y, pagerConfig: le, loading: he, editConfig: He, proxyConfig: se } = e, { isZMax: Se, tableLoading: ze, tablePage: Xe, tableData: et } = s, at = j.value, ft = $.value, mt = z.value, B = Object.assign({}, at);
      return Se && (at.maxHeight ? B.maxHeight = "auto" : B.height = "auto"), se && Lt(ft) && (B.loading = he || ze, B.data = et, le && ft.seq && Lt(mt) && (B.seqConfig = Object.assign({}, Y, { startIndex: (Xe.currentPage - 1) * Xe.pageSize }))), He && (B.editConfig = Object.assign({}, He)), B;
    }), J = () => {
      const Y = Ce.value;
      e.toolbarConfig && Lt(Y) && ae(() => {
        const le = g.value, he = b.value;
        le && he && le.connect(he);
      });
    }, A = () => {
      const { tablePage: Y } = s, { pagerConfig: le } = e, he = z.value, { currentPage: He, pageSize: se } = he;
      le && Lt(he) && (He && (Y.currentPage = He), se && (Y.pageSize = se));
    }, M = (Y) => {
      const le = I.value, he = g.value, He = he.getCheckboxRecords();
      He.length ? (he.togglePendingRow(He), W.clearCheckboxRow()) : le && ue.modal && ue.modal.message({ id: Y, content: Js("vxe.grid.selectOneRecord"), status: "warning" });
    }, H = (Y, le) => {
      const he = $.value, se = (he.response || he.props || {}).message;
      let Se;
      return Y && se && (Se = i.isFunction(se) ? se({ data: Y, $grid: re }) : i.get(Y, se)), Se || Js(le);
    }, ne = (Y, le, he) => {
      const He = I.value, se = W.getCheckboxRecords();
      if (He)
        if (se.length) {
          if (ue.modal)
            return ue.modal.confirm({ id: `cfm_${Y}`, content: Js(le), escClosable: !0 }).then((Se) => {
              if (Se === "confirm")
                return he();
            });
        } else
          ue.modal && ue.modal.message({ id: `msg_${Y}`, content: Js("vxe.grid.selectOneRecord"), status: "warning" });
      else
        se.length && he();
      return Promise.resolve();
    }, de = (Y) => {
      const { proxyConfig: le } = e, { tablePage: he } = s, { $event: He, currentPage: se, pageSize: Se } = Y, ze = $.value;
      he.currentPage = se, he.pageSize = Se, ce.dispatchEvent("page-change", Y, He), le && Lt(ze) && ce.commitProxy("query").then((Xe) => {
        ce.dispatchEvent("proxy-query", Xe, He);
      });
    }, ve = (Y) => {
      const le = g.value, { proxyConfig: he } = e, { computeSortOpts: He } = le.getComputeMaps(), se = $.value;
      He.value.remote && (s.sortData = Y.sortList, he && Lt(se) && (s.tablePage.currentPage = 1, ce.commitProxy("query").then((ze) => {
        ce.dispatchEvent("proxy-query", ze, Y.$event);
      }))), ce.dispatchEvent("sort-change", Y, Y.$event);
    }, Oe = (Y) => {
      const le = g.value, { proxyConfig: he } = e, { computeFilterOpts: He } = le.getComputeMaps(), se = $.value;
      He.value.remote && (s.filterData = Y.filterList, he && Lt(se) && (s.tablePage.currentPage = 1, ce.commitProxy("query").then((ze) => {
        ce.dispatchEvent("proxy-query", ze, Y.$event);
      }))), ce.dispatchEvent("filter-change", Y, Y.$event);
    }, Fe = (Y) => {
      const { proxyConfig: le } = e, he = $.value;
      le && Lt(he) && ce.commitProxy("reload").then((He) => {
        ce.dispatchEvent("proxy-query", Object.assign(Object.assign({}, He), { isReload: !0 }), Y.$event);
      }), ce.dispatchEvent("form-submit", Y, Y.$event);
    }, R = (Y) => {
      const { proxyConfig: le } = e, { $event: he } = Y, He = $.value;
      le && Lt(He) && ce.commitProxy("reload").then((se) => {
        ce.dispatchEvent("proxy-query", Object.assign(Object.assign({}, se), { isReload: !0 }), he);
      }), ce.dispatchEvent("form-reset", Y, he);
    }, k = (Y) => {
      ce.dispatchEvent("form-submit-invalid", Y, Y.$event);
    }, U = (Y) => {
      const { $event: le } = Y;
      ae(() => W.recalculate(!0)), ce.dispatchEvent("form-toggle-collapse", Y, le), ce.dispatchEvent("form-collapse", Y, le);
    }, _ = (Y) => {
      const { isZMax: le } = s;
      return (Y ? !le : le) && (s.isZMax = !le, s.tZindex < fh() && (s.tZindex = dh())), ae().then(() => W.recalculate(!0)).then(() => s.isZMax);
    }, K = (Y, le) => {
      const he = Y[le];
      if (he)
        if (i.isString(he)) {
          if (o[he])
            return o[he];
          process.env.NODE_ENV === "development" && Et("vxe.error.notSlot", [he]);
        } else
          return he;
      return null;
    }, Z = () => {
      const { formConfig: Y, proxyConfig: le } = e, { formData: he } = s, He = $.value, se = te.value;
      if (Y && Lt(se) || o.form) {
        let Se = [];
        if (o.form)
          Se = o.form({ $grid: re });
        else if (se.items) {
          const ze = {};
          if (!se.inited) {
            se.inited = !0;
            const Xe = He.beforeItem;
            He && Xe && se.items.forEach((et) => {
              Xe({ $grid: re, item: et });
            });
          }
          se.items.forEach((Xe) => {
            i.each(Xe.slots, (et) => {
              i.isFunction(et) || o[et] && (ze[et] = o[et]);
            });
          }), c && Se.push(r(c, Object.assign(Object.assign({ ref: D }, Object.assign({}, se, {
            data: le && Lt(He) && He.form ? he : se.data
          })), { onSubmit: Fe, onReset: R, onSubmitInvalid: k, onCollapse: U }), ze));
        }
        return r("div", {
          ref: S,
          key: "form",
          class: "vxe-grid--form-wrapper"
        }, Se);
      }
      return Me();
    }, ke = () => {
      const { toolbarConfig: Y } = e, le = Ce.value;
      if (Y && Lt(le) || o.toolbar) {
        let he = [];
        if (o.toolbar)
          he = o.toolbar({ $grid: re });
        else {
          const He = le.slots;
          let se, Se;
          const ze = {};
          He && (se = K(He, "buttons"), Se = K(He, "tools"), se && (ze.buttons = se), Se && (ze.tools = Se)), he.push(r(Ba, Object.assign({ ref: b }, le), ze));
        }
        return r("div", {
          ref: y,
          key: "toolbar",
          class: "vxe-grid--toolbar-wrapper"
        }, he);
      }
      return Me();
    }, ye = () => o.top ? r("div", {
      ref: h,
      key: "top",
      class: "vxe-grid--top-wrapper"
    }, o.top({ $grid: re })) : Me(), Ee = () => {
      const Y = o.left;
      return Y ? r("div", {
        class: "vxe-grid--left-wrapper"
      }, Y({ $grid: re })) : Me();
    }, xe = () => {
      const Y = o.right;
      return Y ? r("div", {
        class: "vxe-grid--right-wrapper"
      }, Y({ $grid: re })) : Me();
    }, Le = () => {
      const { proxyConfig: Y } = e, le = G.value, he = $.value, He = Object.assign({}, $e), se = o.empty, Se = o.loading;
      Y && Lt(he) && (he.sort && (He.onSortChange = ve), he.filter && (He.onFilterChange = Oe));
      const ze = {};
      return se && (ze.empty = () => se({ $grid: re })), Se && (ze.loading = () => Se({ $grid: re })), r("div", {
        class: "vxe-grid--table-wrapper"
      }, [
        r(Wa, Object.assign(Object.assign({ ref: g }, le), He), ze)
      ]);
    }, je = () => o.bottom ? r("div", {
      ref: O,
      key: "bottom",
      class: "vxe-grid--bottom-wrapper"
    }, o.bottom({ $grid: re })) : Me(), Ye = () => {
      const { proxyConfig: Y, pagerConfig: le } = e, he = $.value, He = z.value;
      if (le && Lt(He) || o.pager) {
        let se = [];
        if (o.pager)
          se = o.pager({ $grid: re });
        else {
          const Se = He.slots, ze = {};
          let Xe, et;
          Se && (Xe = K(Se, "left"), et = K(Se, "right"), Xe && (ze.left = Xe), et && (ze.right = et)), p && se.push(r(p, Object.assign(Object.assign(Object.assign({ ref: x }, He), Y && Lt(he) ? s.tablePage : {}), { onPageChange: de }), ze));
        }
        return r("div", {
          ref: E,
          key: "pager",
          class: "vxe-grid--pager-wrapper"
        }, se);
      }
      return Me();
    }, fe = ["Form", "Toolbar", "Top", "Table", "Bottom", "Pager"], ge = () => {
      const { layouts: Y } = e, le = [];
      return (Y && Y.length ? Y : mr().grid.layouts || fe).forEach((He) => {
        switch (He) {
          case "Form":
            le.push(Z());
            break;
          case "Toolbar":
            le.push(ke());
            break;
          case "Top":
            le.push(ye());
            break;
          case "Table":
            le.push(r("div", {
              key: "table",
              class: "vxe-grid--table-container"
            }, [
              Ee(),
              Le(),
              xe()
            ]));
            break;
          case "Bottom":
            le.push(je());
            break;
          case "Pager":
            le.push(Ye());
            break;
          default:
            process.env.NODE_ENV === "development" && Et("vxe.error.notProp", [`layouts -> ${He}`]);
            break;
        }
      }), le;
    }, $e = {};
    Td.forEach((Y) => {
      const le = i.camelCase(`on-${Y}`);
      $e[le] = (...he) => l(Y, ...he);
    });
    const Ve = () => {
      const { proxyConfig: Y, formConfig: le } = e, { proxyInited: he } = s, He = $.value, se = te.value;
      if (Y && Lt(He)) {
        if (le && Lt(se) && He.form && se.items) {
          const Se = {};
          se.items.forEach((ze) => {
            const { field: Xe, itemRender: et } = ze;
            if (Xe) {
              let at = null;
              if (et) {
                const { defaultValue: ft } = et;
                i.isFunction(ft) ? at = ft({ item: ze }) : i.isUndefined(ft) || (at = ft);
              }
              Se[Xe] = at;
            }
          }), s.formData = Se;
        }
        he || (s.proxyInited = !0, He.autoLoad !== !1 && ae().then(() => ce.commitProxy("_init")).then((Se) => {
          ce.dispatchEvent("proxy-query", Object.assign(Object.assign({}, Se), { isInited: !0 }), new Event("init"));
        }));
      }
    }, ce = {
      dispatchEvent(Y, le, he) {
        l(Y, G0(he, { $grid: re }, le));
      },
      /**
       * 提交指令，支持 code 或 button
       * @param {String/Object} code 字符串或对象
       */
      commitProxy(Y, ...le) {
        const { toolbarConfig: he, pagerConfig: He, editRules: se, validConfig: Se } = e, { tablePage: ze, formData: Xe } = s, et = I.value, at = $.value, ft = z.value, mt = Ce.value, { beforeQuery: B, afterQuery: Mt, beforeDelete: St, afterDelete: gt, beforeSave: bt, afterSave: Dt, ajax: Bt = {} } = at, Wt = at.response || at.props || {}, Pt = g.value;
        let jt = null, At = null;
        if (i.isString(Y)) {
          const { buttons: _t } = mt, Ht = he && Lt(mt) && _t ? i.findTree(_t, (Kt) => Kt.code === Y, { children: "dropdowns" }) : null;
          jt = Ht ? Ht.item : null, At = Y;
        } else
          jt = Y, At = jt.code;
        const Rn = jt ? jt.params : null;
        switch (At) {
          case "insert":
            return Pt.insert({});
          case "insert_edit":
            return Pt.insert({}).then(({ row: _t }) => Pt.setEditRow(_t));
          case "insert_actived":
            return Pt.insert({}).then(({ row: _t }) => Pt.setEditRow(_t));
          case "mark_cancel":
            M(At);
            break;
          case "remove":
            return ne(At, "vxe.grid.removeSelectRecord", () => Pt.removeCheckboxRow());
          case "import":
            Pt.importData(Rn);
            break;
          case "open_import":
            Pt.openImport(Rn);
            break;
          case "export":
            Pt.exportData(Rn);
            break;
          case "open_export":
            Pt.openExport(Rn);
            break;
          case "reset_custom":
            return Pt.resetColumn(!0);
          case "_init":
          case "reload":
          case "query": {
            const _t = Bt.query;
            if (_t) {
              const Ht = At === "_init", Kt = At === "reload";
              let pn = [], Tn = [], mn = {};
              if (He && ((Ht || Kt) && (ze.currentPage = 1), Lt(ft) && (mn = Object.assign({}, ze))), Ht) {
                const { computeSortOpts: cn } = Pt.getComputeMaps();
                let wn = cn.value.defaultSort;
                wn && (i.isArray(wn) || (wn = [wn]), pn = wn.map((Zt) => ({
                  field: Zt.field,
                  property: Zt.field,
                  order: Zt.order
                }))), Tn = Pt.getCheckedFilters();
              } else
                Kt ? Pt.clearAll() : (pn = Pt.getSortColumns(), Tn = Pt.getCheckedFilters());
              const hn = {
                code: At,
                button: jt,
                isInited: Ht,
                isReload: Kt,
                $grid: re,
                page: mn,
                sort: pn.length ? pn[0] : {},
                sorts: pn,
                filters: Tn,
                form: Xe,
                options: _t
              };
              s.sortData = pn, s.filterData = Tn, s.tableLoading = !0;
              const Pn = [hn].concat(le);
              return Promise.resolve((B || _t)(...Pn)).then((cn) => {
                if (s.tableLoading = !1, cn)
                  if (He && Lt(ft)) {
                    const Qt = Wt.total, wn = (i.isFunction(Qt) ? Qt({ data: cn, $grid: re }) : i.get(cn, Qt || "page.total")) || 0;
                    ze.total = i.toNumber(wn);
                    const Zt = Wt.result;
                    s.tableData = (i.isFunction(Zt) ? Zt({ data: cn, $grid: re }) : i.get(cn, Zt || "result")) || [];
                    const _n = Math.max(Math.ceil(wn / ze.pageSize), 1);
                    ze.currentPage > _n && (ze.currentPage = _n);
                  } else {
                    const Qt = Wt.list;
                    s.tableData = (Qt ? i.isFunction(Qt) ? Qt({ data: cn, $grid: re }) : i.get(cn, Qt) : cn) || [];
                  }
                else
                  s.tableData = [];
                return Mt && Mt(...Pn), { status: !0 };
              }).catch(() => (s.tableLoading = !1, { status: !1 }));
            } else
              process.env.NODE_ENV === "development" && Et("vxe.error.notFunc", ["proxy-config.ajax.query"]);
            break;
          }
          case "delete": {
            const _t = Bt.delete;
            if (_t) {
              const Ht = W.getCheckboxRecords(), Kt = Ht.filter((hn) => !Pt.isInsertByRow(hn)), mn = [{ $grid: re, code: At, button: jt, body: { removeRecords: Kt }, form: Xe, options: _t }].concat(le);
              if (Ht.length)
                return ne(At, "vxe.grid.deleteSelectRecord", () => Kt.length ? (s.tableLoading = !0, Promise.resolve((St || _t)(...mn)).then((hn) => (s.tableLoading = !1, Pt.setPendingRow(Kt, !1), et && ue.modal && ue.modal.message({ content: H(hn, "vxe.grid.delSuccess"), status: "success" }), gt ? gt(...mn) : ce.commitProxy("query"), { status: !0 })).catch((hn) => (s.tableLoading = !1, et && ue.modal && ue.modal.message({ id: At, content: H(hn, "vxe.grid.operError"), status: "error" }), { status: !1 }))) : Pt.remove(Ht));
              et && ue.modal && ue.modal.message({ id: At, content: Js("vxe.grid.selectOneRecord"), status: "warning" });
            } else
              process.env.NODE_ENV === "development" && Et("vxe.error.notFunc", ["proxy-config.ajax.delete"]);
            break;
          }
          case "save": {
            const _t = Bt.save;
            if (_t) {
              const Ht = Pt.getRecordset(), { insertRecords: Kt, removeRecords: pn, updateRecords: Tn, pendingRecords: mn } = Ht, Pn = [{ $grid: re, code: At, button: jt, body: Ht, form: Xe, options: _t }].concat(le);
              Kt.length && (Ht.pendingRecords = mn.filter((Qt) => Pt.findRowIndexOf(Kt, Qt) === -1)), mn.length && (Ht.insertRecords = Kt.filter((Qt) => Pt.findRowIndexOf(mn, Qt) === -1));
              let cn = Promise.resolve();
              return se && (cn = Pt[Se && Se.msgMode === "full" ? "fullValidate" : "validate"](Ht.insertRecords.concat(Tn))), cn.then((Qt) => {
                if (!Qt) {
                  if (Ht.insertRecords.length || pn.length || Tn.length || Ht.pendingRecords.length)
                    return s.tableLoading = !0, Promise.resolve((bt || _t)(...Pn)).then((wn) => (s.tableLoading = !1, Pt.clearPendingRow(), et && ue.modal && ue.modal.message({ content: H(wn, "vxe.grid.saveSuccess"), status: "success" }), Dt ? Dt(...Pn) : ce.commitProxy("query"), { status: !0 })).catch((wn) => (s.tableLoading = !1, et && ue.modal && ue.modal.message({ id: At, content: H(wn, "vxe.grid.operError"), status: "error" }), { status: !1 }));
                  et && ue.modal && ue.modal.message({ id: At, content: Js("vxe.grid.dataUnchanged"), status: "info" });
                }
              });
            } else
              process.env.NODE_ENV === "development" && Et("vxe.error.notFunc", ["proxy-config.ajax.save"]);
            break;
          }
          default: {
            const _t = z0.get(At);
            if (_t) {
              const Ht = _t.tableCommandMethod || _t.commandMethod;
              Ht ? Ht({ code: At, button: jt, $grid: re, $table: Pt }, ...le) : process.env.NODE_ENV === "development" && Et("vxe.error.notCommands", [At]);
            }
          }
        }
        return ae();
      },
      zoom() {
        return s.isZMax ? ce.revert() : ce.maximize();
      },
      isMaximized() {
        return s.isZMax;
      },
      maximize() {
        return _(!0);
      },
      revert() {
        return _();
      },
      getFormItems(Y) {
        const le = te.value, { formConfig: he } = e, { items: He } = le, se = [];
        return i.eachTree(he && Lt(le) && He ? He : [], (Se) => {
          se.push(Se);
        }, { children: "children" }), i.isUndefined(Y) ? se : se[Y];
      },
      getProxyInfo() {
        const Y = g.value;
        if (e.proxyConfig) {
          const { sortData: le } = s;
          return {
            data: s.tableData,
            filter: s.filterData,
            form: s.formData,
            sort: le.length ? le[0] : {},
            sorts: le,
            pager: s.tablePage,
            pendingRecords: Y ? Y.getPendingRecords() : []
          };
        }
        return null;
      }
      // setProxyInfo (options) {
      //   if (props.proxyConfig && options) {
      //     const { pager, form } = options
      //     const proxyOpts = computeProxyOpts.value
      //     if (pager) {
      //       if (pager.currentPage) {
      //         reactData.tablePage.currentPage = Number(pager.currentPage)
      //       }
      //       if (pager.pageSize) {
      //         reactData.tablePage.pageSize = Number(pager.pageSize)
      //       }
      //     }
      //     if (proxyOpts.form && form) {
      //       Object.assign(reactData.formData, form)
      //     }
      //   }
      //   return nextTick()
      // }
    };
    process.env.NODE_ENV === "development" && (ce.loadColumn = (Y) => {
      const le = g.value;
      return i.eachTree(Y, (he) => {
        he.slots && i.each(he.slots, (He) => {
          i.isFunction(He) || o[He] || Et("vxe.error.notSlot", [He]);
        });
      }), le ? le.loadColumn(Y) : ae();
    }, ce.reloadColumn = (Y) => (W.clearAll(), ce.loadColumn(Y)));
    const We = {
      extendTableMethods: T,
      callSlot(Y, le) {
        return Y && (i.isString(Y) && (Y = o[Y] || null), i.isFunction(Y)) ? uo(Y(le)) : [];
      },
      /**
       * 获取需要排除的高度
       */
      getExcludeHeight() {
        const { height: Y } = e, { isZMax: le } = s, he = f.value, He = S.value, se = y.value, Se = h.value, ze = O.value, Xe = E.value;
        return (le || Y !== "auto" ? 0 : Lc(he.parentNode)) + Lc(he) + di(He) + di(se) + di(Se) + di(ze) + di(Xe);
      },
      getParentHeight() {
        const Y = f.value;
        return Y ? (s.isZMax ? Fa().visibleHeight : i.toNumber(getComputedStyle(Y.parentNode).height)) - We.getExcludeHeight() : 0;
      },
      triggerToolbarCommitEvent(Y, le) {
        const { code: he } = Y;
        return ce.commitProxy(Y, le).then((He) => {
          he && He && He.status && ["query", "reload", "delete", "save"].includes(he) && ce.dispatchEvent(he === "delete" || he === "save" ? `proxy-${he}` : "proxy-query", Object.assign(Object.assign({}, He), { isReload: he === "reload" }), le);
        });
      },
      triggerToolbarBtnEvent(Y, le) {
        We.triggerToolbarCommitEvent(Y, le), ce.dispatchEvent("toolbar-button-click", { code: Y.code, button: Y }, le);
      },
      triggerToolbarTolEvent(Y, le) {
        We.triggerToolbarCommitEvent(Y, le), ce.dispatchEvent("toolbar-tool-click", { code: Y.code, tool: Y }, le);
      },
      triggerZoomEvent(Y) {
        ce.zoom(), ce.dispatchEvent("zoom", { type: s.isZMax ? "max" : "revert" }, Y);
      }
    };
    Object.assign(re, W, ce, We);
    const Ge = Ie(0);
    lt(() => e.columns ? e.columns.length : -1, () => {
      Ge.value++;
    }), lt(() => e.columns, () => {
      Ge.value++;
    }), lt(Ge, () => {
      ae(() => re.loadColumn(e.columns || []));
    }), lt(() => e.toolbarConfig, () => {
      J();
    }), lt(() => e.pagerConfig, () => {
      A();
    }), lt(() => e.proxyConfig, () => {
      Ve();
    });
    const Ze = (Y) => {
      const le = N.value;
      Oc.hasKey(Y, U0.ESCAPE) && s.isZMax && le.escRestore !== !1 && We.triggerZoomEvent(Y);
    };
    j0.forEach((Y) => {
      const { setupGrid: le } = Y;
      if (le) {
        const he = le(re);
        he && i.isObject(he) && Object.assign(re, he);
      }
    }), A(), yn(() => {
      ae(() => {
        const { data: Y, columns: le, proxyConfig: he } = e, He = $.value, se = te.value;
        Lt(he) && (Y || He.form && se.data) && Et("vxe.error.errConflicts", ["grid.data", "grid.proxy-config"]), le && le.length && re.loadColumn(le), J();
      }), Oc.on(re, "keydown", Ze);
    }), On(() => {
      Oc.off(re, "keydown");
    }), ae(() => {
      process.env.NODE_ENV === "development" && (e.formConfig && (c || Et("vxe.error.reqComp", ["vxe-form"])), e.pagerConfig && (p || Et("vxe.error.reqComp", ["vxe-pager"]))), Ve();
    });
    const pe = () => {
      const Y = d.value, le = F.value;
      return r("div", {
        ref: f,
        class: ["vxe-grid", {
          [`size--${Y}`]: Y,
          "is--animat": !!e.animat,
          "is--round": e.round,
          "is--maximize": s.isZMax,
          "is--loading": e.loading || s.tableLoading
        }],
        style: le
      }, ge());
    };
    return re.renderVN = pe, Xt("$xeGrid", re), re;
  },
  render() {
    return this.renderVN();
  }
}), Md = Object.assign({}, Al, {
  install(e) {
    e.component(Al.name, Al);
  }
});
ue.dynamicApp && ue.dynamicApp.component(Al.name, Al);
ue.component(Al);
const X0 = Md, Z0 = {
  vxe: {
    base: {
      pleaseInput: "请输入",
      pleaseSelect: "请选择",
      comma: "，",
      fullStop: "。"
    },
    loading: {
      text: "加载中..."
    },
    error: {
      groupFixed: "如果使用分组表头，冻结列必须按组设置",
      groupMouseRange: '分组表头与 "{0}" 不能同时使用，这可能会出现错误',
      groupTag: '分组列头应该使用 "{0}" 而不是 "{1}"，这可能会出现错误',
      scrollErrProp: '启用虚拟滚动后不支持该参数 "{0}"',
      errConflicts: '参数 "{0}" 与 "{1}" 有冲突',
      unableInsert: "无法插入到指定位置，请检查参数是否正确",
      useErr: '安装 "{0}" 模块时发生错误，可能顺序不正确，依赖的模块需要在 Table 之前安装',
      barUnableLink: "工具栏无法关联表格",
      expandContent: '展开行的插槽应该是 "content"，请检查是否正确',
      reqComp: '缺少 "{0}" 组件，请检查是否正确安装 https://vxetable.cn/#/start/useGlobal',
      reqModule: '缺少 "{0}" 模块',
      reqProp: '缺少必要的 "{0}" 参数，这可能会导致出现错误',
      emptyProp: '参数 "{0}" 不允许为空',
      errProp: '不支持的参数 "{0}"，可能为 "{1}"',
      colRepet: 'column.{0}="{1}" 重复了，这可能会导致某些功能无法使用',
      notFunc: '方法 "{0}" 不存在',
      errFunc: '参数 "{0}" 不是一个方法',
      notValidators: '全局校验 "{0}" 不存在',
      notFormats: '全局格式化 "{0}" 不存在',
      notCommands: '全局指令 "{0}" 不存在',
      notSlot: '插槽 "{0}" 不存在',
      noTree: '树结构不支持 "{0}"',
      notProp: '不支持的参数 "{0}"',
      checkProp: '当数据量过大时可能会导致复选框卡顿，建议设置参数 "{0}" 提升渲染速度',
      coverProp: '"{0}" 的参数 "{1}" 重复定义，这可能会出现错误',
      delFunc: '方法 "{0}" 已废弃，请使用 "{1}"',
      delProp: '参数 "{0}" 已废弃，请使用 "{1}"',
      delEvent: '事件 "{0}" 已废弃，请使用 "{1}"',
      removeProp: '参数 "{0}" 已废弃，不建议使用，这可能会导致出现错误',
      errFormat: '全局的格式化内容应该使用 "VXETable.formats" 定义，挂载 "formatter={0}" 的方式已不建议使用',
      notType: '不支持的文件类型 "{0}"',
      notExp: "该浏览器不支持导入/导出功能",
      impFields: "导入失败，请检查字段名和数据格式是否正确",
      treeNotImp: "树表格不支持导入"
    },
    table: {
      emptyText: "暂无数据",
      allTitle: "全选/取消",
      seqTitle: "序号",
      confirmFilter: "筛选",
      resetFilter: "重置",
      allFilter: "全部",
      sortAsc: "升序：最低到最高",
      sortDesc: "降序：最高到最低",
      filter: "对所选的列启用筛选",
      impSuccess: "成功导入 {0} 条记录",
      expLoading: "正在导出中",
      expSuccess: "导出成功",
      expFilename: "导出_{0}",
      expOriginFilename: "导出_源_{0}",
      customTitle: "列设置",
      customAll: "全部",
      customConfirm: "确认",
      customCancel: "取消",
      customRestore: "恢复默认",
      maxFixedCol: "最大冻结列的数量不能超过 {0} 个"
    },
    grid: {
      selectOneRecord: "请至少选择一条记录！",
      deleteSelectRecord: "您确定要删除所选记录吗？",
      removeSelectRecord: "您确定要移除所选记录吗？",
      dataUnchanged: "数据未改动！",
      delSuccess: "成功删除所选记录！",
      saveSuccess: "保存成功！",
      operError: "发生错误，操作失败！"
    },
    select: {
      search: "搜索",
      loadingText: "加载中",
      emptyText: "暂无数据"
    },
    pager: {
      goto: "前往",
      pagesize: "{0}条/页",
      total: "共 {0} 条记录",
      pageClassifier: "页",
      homePage: "首页",
      homePageTitle: "首页",
      prevPage: "上一页",
      prevPageTitle: "上一页",
      nextPage: "下一页",
      nextPageTitle: "下一页",
      prevJump: "向上跳页",
      prevJumpTitle: "向上跳页",
      nextJump: "向下跳页",
      nextJumpTitle: "向下跳页",
      endPage: "末页",
      endPageTitle: "末页"
    },
    alert: {
      title: "系统提示"
    },
    button: {
      confirm: "确认",
      cancel: "取消"
    },
    filter: {
      search: "搜索"
    },
    custom: {
      cstmTitle: "列设置",
      cstmRestore: "恢复默认",
      cstmCancel: "取消",
      cstmConfirm: "确定",
      cstmConfirmRestore: "请确认是否恢复成默认列配置？",
      cstmDragTarget: "移动目标：{0}",
      setting: {
        colSort: "排序",
        sortHelpTip: "点击并拖动图标可以调整列的排序",
        colTitle: "标题",
        colResizable: "列宽（像素）",
        colVisible: "是否显示",
        colFixed: "冻结列",
        colFixedMax: "冻结列（最多 {0} 列）",
        fixedLeft: "左侧",
        fixedUnset: "不设置",
        fixedRight: "右侧"
      }
    },
    import: {
      modes: {
        covering: "覆盖方式（直接覆盖表格数据）",
        insert: "底部追加（在表格的底部追加新数据）",
        insertTop: "顶部追加（在表格的顶部追加新数据）",
        insertBottom: "底部追加（在表格的底部追加新数据）"
      },
      impTitle: "导入数据",
      impFile: "文件名",
      impSelect: "选择文件",
      impType: "文件类型",
      impOpts: "参数设置",
      impMode: "导入模式",
      impConfirm: "导入",
      impCancel: "取消"
    },
    export: {
      types: {
        csv: "CSV (逗号分隔)(*.csv)",
        html: "网页(*.html)",
        xml: "XML 数据(*.xml)",
        txt: "文本文件(制表符分隔)(*.txt)",
        xls: "Excel 97-2003 工作簿(*.xls)",
        xlsx: "Excel 工作簿(*.xlsx)",
        pdf: "PDF (*.pdf)"
      },
      modes: {
        current: "当前数据（当前页的数据）",
        selected: "选中数据（当前页选中的数据）",
        all: "全量数据（包括所有分页的数据）"
      },
      printTitle: "打印数据",
      expTitle: "导出数据",
      expName: "文件名",
      expNamePlaceholder: "请输入文件名",
      expSheetName: "标题",
      expSheetNamePlaceholder: "请输入标题",
      expType: "保存类型",
      expMode: "选择数据",
      expCurrentColumn: "全部字段",
      expColumn: "选择字段",
      expOpts: "参数设置",
      expOptHeader: "表头",
      expHeaderTitle: "是否需要表头",
      expOptFooter: "表尾",
      expFooterTitle: "是否需要表尾",
      expOptColgroup: "分组表头",
      expColgroupTitle: "如果存在，则支持带有分组结构的表头",
      expOptMerge: "合并",
      expMergeTitle: "如果存在，则支持带有合并结构的单元格",
      expOptAllExpand: "展开层级",
      expAllExpandTitle: "如果存在，则支持将带有层级结构的数据全部展开",
      expOptUseStyle: "样式",
      expUseStyleTitle: "如果存在，则支持带样式的单元格",
      expOptOriginal: "源数据",
      expOriginalTitle: "如果为源数据，则支持导入到表格中",
      expPrint: "打印",
      expConfirm: "导出",
      expCancel: "取消"
    },
    modal: {
      errTitle: "错误提示",
      zoomMin: "最小化",
      zoomIn: "最大化",
      zoomOut: "还原",
      close: "关闭"
    },
    drawer: {
      close: "关闭"
    },
    form: {
      folding: "收起",
      unfolding: "展开"
    },
    toolbar: {
      import: "导入",
      export: "导出",
      print: "打印",
      refresh: "刷新",
      zoomIn: "全屏",
      zoomOut: "还原",
      custom: "列设置",
      customAll: "全部",
      customConfirm: "确认",
      customRestore: "重置",
      fixedLeft: "冻结在左侧",
      fixedRight: "冻结在右侧",
      cancelFixed: "取消冻结列"
    },
    input: {
      date: {
        m1: "01 月",
        m2: "02 月",
        m3: "03 月",
        m4: "04 月",
        m5: "05 月",
        m6: "06 月",
        m7: "07 月",
        m8: "08 月",
        m9: "09 月",
        m10: "10 月",
        m11: "11 月",
        m12: "12 月",
        quarterLabel: "{0} 年",
        monthLabel: "{0} 年",
        dayLabel: "{0} 年 {1}",
        labelFormat: {
          date: "yyyy-MM-dd",
          time: "HH:mm:ss",
          datetime: "yyyy-MM-dd HH:mm:ss",
          week: "yyyy 年第 WW 周",
          month: "yyyy-MM",
          quarter: "yyyy 年第 q 季度",
          year: "yyyy"
        },
        weeks: {
          w: "周",
          w0: "周日",
          w1: "周一",
          w2: "周二",
          w3: "周三",
          w4: "周四",
          w5: "周五",
          w6: "周六"
        },
        months: {
          m0: "一月",
          m1: "二月",
          m2: "三月",
          m3: "四月",
          m4: "五月",
          m5: "六月",
          m6: "七月",
          m7: "八月",
          m8: "九月",
          m9: "十月",
          m10: "十一月",
          m11: "十二月"
        },
        quarters: {
          q1: "第一季度",
          q2: "第二季度",
          q3: "第三季度",
          q4: "第四季度"
        }
      }
    },
    imagePreview: {
      popupTitle: "预览",
      operBtn: {
        zoomOut: "缩小",
        zoomIn: "放大",
        pctFull: "等比例缩放",
        pct11: "显示原始尺寸",
        rotateLeft: "向左旋转",
        rotateRight: "向右旋转",
        print: "点击打印图片",
        download: "点击下载图片"
      }
    },
    upload: {
      fileBtnText: "点击或拖拽上传",
      imgBtnText: "点击或拖拽上传",
      dragPlaceholder: "请把文件拖放到这个区域即可上传",
      imgSizeHint: "单张{0}",
      imgCountHint: "最多{0}张",
      fileTypeHint: "支持 {0} 文件类型",
      fileSizeHint: "单个文件大小不超过{0}",
      fileCountHint: "最多可上传{0}个文件",
      overCountErr: "最多只能选择{0}个文件！",
      overCountExtraErr: "已超出最大数量{0}个，超出的{1}个文件将被忽略！",
      overSizeErr: "文件大小最大不能超过{0}！",
      reUpload: "重新上传",
      uploadProgress: "上传中 {0}%",
      uploadErr: "上传失败",
      uploadSuccess: "上传成功"
    },
    formDesign: {
      formName: "表单名称",
      defFormTitle: "未命名的表单",
      widgetPropTab: "控件属性",
      widgetFormTab: "表单属性",
      styleSetting: {
        btn: "样式设置",
        title: "表单的样式设置",
        layoutTitle: "控件布局",
        verticalLayout: "上下布局",
        horizontalLayout: "横向布局",
        styleTitle: "标题样式",
        boldTitle: "标题加粗",
        fontBold: "加粗",
        fontNormal: "常规",
        colonTitle: "显示冒号",
        colonVisible: "显示",
        colonHidden: "隐藏",
        alignTitle: "对齐方式",
        widthTitle: "标题宽度",
        alignLeft: "居左",
        alignRight: "居右",
        unitPx: "像素",
        unitPct: "百分比"
      },
      widget: {
        group: {
          base: "基础控件",
          layout: "布局控件",
          advanced: "高级控件"
        },
        copyTitle: "副本_{0}",
        component: {
          input: "输入框",
          textarea: "文本域",
          select: "下拉框",
          row: "一行多列",
          title: "文本",
          subtable: "子表",
          VxeSwitch: "是/否",
          VxeInput: "输入框",
          VxeNumberInput: "数字",
          VxeDatePicker: "日期",
          VxeTextarea: "文本域",
          VxeSelect: "下拉框",
          VxeRadioGroup: "单选框",
          VxeCheckboxGroup: "复选框",
          VxeUploadFile: "文件",
          VxeUploadImage: "图片"
        }
      },
      widgetProp: {
        name: "控件名称",
        placeholder: "提示语",
        required: "必填校验",
        displaySetting: {
          name: "显示设置",
          pc: "电脑端",
          mobile: "手机端",
          visible: "显示",
          hidden: "隐藏"
        },
        dataSource: {
          name: "数据源",
          defValue: "选项{0}",
          addOption: "添加选项",
          batchEditOption: "批量编辑",
          batchEditTip: "每行对应一个选项，支持从表格、Excel、WPS 中直接复制粘贴。",
          batchEditSubTip: "每行对应一个选项，如果是分组，子项可以是空格或制表键开头，支持从表格、Excel、WPS 中直接复制粘贴。",
          buildOption: "生成选项"
        },
        rowProp: {
          colSize: "列数",
          col2: "两列",
          col3: "三列",
          col4: "四列",
          col6: "六列",
          layout: "布局"
        },
        textProp: {
          name: "内容",
          alignTitle: "对齐方式",
          alignLeft: "居左",
          alignCenter: "居中",
          alignRight: "居右",
          colorTitle: "字体颜色",
          sizeTitle: "字体大小",
          boldTitle: "字体加粗",
          fontNormal: "常规",
          fontBold: "加粗"
        },
        subtableProp: {
          seqTitle: "序号",
          showSeq: "显示序号",
          showCheckbox: "允许多选",
          errSubDrag: "子表不支持该控件，请使用其他控件"
        },
        uploadProp: {
          limitFileCount: "文件数量限制",
          limitFileSize: "文件大小限制",
          multiFile: "允许上传多个文件",
          limitImgCount: "图片数量限制",
          limitImgSize: "图片大小限制",
          multiImg: "允许上传多张图片"
        }
      }
    },
    listDesign: {
      fieldSettingTab: "字段设置",
      listSettingTab: "列表设置"
    },
    /**
     * 扩展插件
     */
    plugins: {
      extendCellArea: {
        area: {
          mergeErr: "无法对合并单元格进行该操作",
          multiErr: "无法对多重选择区域进行该操作",
          extendErr: "如果延伸的区域包含被合并的单元格，所有合并的单元格需大小相同",
          pasteMultiErr: "无法粘贴，需要相同大小的复制的区域和粘贴的区域才能执行此操作",
          cpInvalidErr: "该操作无法进行，您选择的区域中存在被禁止的列（{0}）"
        },
        fnr: {
          title: "查找和替换",
          findLabel: "查找",
          replaceLabel: "替换",
          findTitle: "查找内容：",
          replaceTitle: "替换为：",
          tabs: {
            find: "查找",
            replace: "替换"
          },
          filter: {
            re: "正则表达式",
            whole: "全词匹配",
            sensitive: "区分大小写"
          },
          btns: {
            findNext: "查找下一个",
            findAll: "查找全部",
            replace: "替换",
            replaceAll: "替换全部",
            cancel: "取消"
          },
          header: {
            seq: "#",
            cell: "单元格",
            value: "值"
          },
          empty: "(空值)",
          reError: "无效的正则表达式",
          recordCount: "已找到 {0} 个单元格",
          notCell: "找不到匹配的单元格",
          replaceSuccess: "成功替换 {0} 个单元格"
        }
      },
      filterComplexInput: {
        menus: {
          fixedColumn: "冻结列",
          fixedGroup: "冻结分组",
          cancelFixed: "取消冻结",
          fixedLeft: "冻结左侧",
          fixedRight: "冻结右侧"
        },
        cases: {
          equal: "等于",
          gt: "大于",
          lt: "小于",
          begin: "开头是",
          endin: "结尾是",
          include: "包含",
          isSensitive: "区分大小写"
        }
      },
      filterCombination: {
        menus: {
          clearSort: "清除排序",
          sortAsc: "升序",
          sortDesc: "降序",
          fixedColumn: "冻结列",
          fixedGroup: "冻结分组",
          cancelFixed: "取消冻结",
          fixedLeft: "冻结左侧",
          fixedRight: "冻结右侧",
          clearFilter: "清除筛选",
          textOption: "文本筛选",
          numberOption: "数值筛选"
        },
        popup: {
          title: "自定义筛选的方式",
          currColumnTitle: "当前列：",
          and: "与",
          or: "或",
          describeHtml: "可用 ? 代表单个字符<br/>用 * 代表任意多个字符"
        },
        cases: {
          equal: "等于",
          unequal: "不等于",
          gt: "大于",
          ge: "大于或等于",
          lt: "小于",
          le: "小于或等于",
          begin: "开头是",
          notbegin: "开头不是",
          endin: "结尾是",
          notendin: "结尾不是",
          include: "包含",
          exclude: "不包含",
          between: "介于",
          custom: "自定义筛选",
          insensitive: "不区分大小写",
          isSensitive: "区分大小写"
        },
        empty: "(空白)",
        notData: "无匹配项"
      }
    },
    /**
     * 以下废弃
     * @deprecated
     */
    pro: {
      area: {
        mergeErr: "无法对合并单元格进行该操作",
        multiErr: "无法对多重选择区域进行该操作",
        extendErr: "如果延伸的区域包含被合并的单元格，所有合并的单元格需大小相同",
        pasteMultiErr: "无法粘贴，需要相同大小的复制的区域和粘贴的区域才能执行此操作"
      },
      fnr: {
        title: "查找和替换",
        findLabel: "查找",
        replaceLabel: "替换",
        findTitle: "查找内容：",
        replaceTitle: "替换为：",
        tabs: {
          find: "查找",
          replace: "替换"
        },
        filter: {
          re: "正则表达式",
          whole: "全词匹配",
          sensitive: "区分大小写"
        },
        btns: {
          findNext: "查找下一个",
          findAll: "查找全部",
          replace: "替换",
          replaceAll: "替换全部",
          cancel: "取消"
        },
        header: {
          seq: "#",
          cell: "单元格",
          value: "值"
        },
        empty: "(空值)",
        reError: "无效的正则表达式",
        recordCount: "已找到 {0} 个单元格",
        notCell: "找不到匹配的单元格",
        replaceSuccess: "成功替换 {0} 个单元格"
      }
    },
    renderer: {
      search: "搜索",
      cases: {
        equal: "等于",
        unequal: "不等于",
        gt: "大于",
        ge: "大于或等于",
        lt: "小于",
        le: "小于或等于",
        begin: "开头是",
        notbegin: "开头不是",
        endin: "结尾是",
        notendin: "结尾不是",
        include: "包含",
        exclude: "不包含",
        between: "介于",
        custom: "自定义筛选",
        insensitive: "不区分大小写",
        isSensitive: "区分大小写"
      },
      combination: {
        menus: {
          clearSort: "清除排序",
          sortAsc: "升序",
          sortDesc: "降序",
          fixedColumn: "锁定列",
          fixedGroup: "锁定组",
          cancelFixed: "取消锁定",
          fixedLeft: "锁定左侧",
          fixedRight: "锁定右侧",
          clearFilter: "清除筛选",
          textOption: "文本筛选",
          numberOption: "数值筛选"
        },
        popup: {
          title: "自定义筛选的方式",
          currColumnTitle: "当前列：",
          and: "与",
          or: "或",
          describeHtml: "可用 ? 代表单个字符<br/>用 * 代表任意多个字符"
        },
        empty: "(空白)",
        notData: "无匹配项"
      }
    }
  }
}, J0 = [
  Sd,
  Dd,
  Md,
  Wa,
  Ba
];
function Q0(e, t) {
  ue.setConfig(t), J0.forEach((n) => n.install(e));
}
const _h = "zh-CN";
ue.setI18n(_h, Z0);
ue.setLanguage(_h);
ue.setTheme("light");
const eA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Colgroup: _1,
  Column: A1,
  Grid: X0,
  Table: _0,
  Toolbar: H0,
  VXETable: wd,
  VxeColgroup: Dd,
  VxeColumn: Sd,
  VxeGrid: Md,
  VxeTable: Wa,
  VxeToolbar: Ba,
  VxeUI: ue,
  _t: x1,
  clipboard: p1,
  commands: d1,
  config: Cd,
  formats: u1,
  getConfig: QL,
  getI18n: r1,
  getIcon: t1,
  getTheme: ZL,
  globalEvents: s1,
  globalResize: l1,
  hooks: g1,
  install: Q0,
  interceptor: f1,
  log: m1,
  menus: c1,
  modal: E1,
  print: w1,
  readFile: C1,
  renderer: i1,
  saveFile: y1,
  setConfig: JL,
  setI18n: o1,
  setIcon: e1,
  setLanguage: n1,
  setTheme: XL,
  setup: h1,
  t: b1,
  use: v1,
  validators: a1,
  version: ph
}, Symbol.toStringTag, { value: "Module" })), rA = (e) => {
  e.use(YL).use(eA);
};
export {
  nA as SpButton,
  rA as initVxeUI
};
