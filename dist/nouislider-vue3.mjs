import { openBlock as xt, createElementBlock as Et, normalizeClass as wt, createElementVNode as Ct } from "vue";
var K;
(function(t) {
  t.Range = "range", t.Steps = "steps", t.Positions = "positions", t.Count = "count", t.Values = "values";
})(K || (K = {}));
var R;
(function(t) {
  t[t.None = -1] = "None", t[t.NoValue = 0] = "NoValue", t[t.LargeValue = 1] = "LargeValue", t[t.SmallValue = 2] = "SmallValue";
})(R || (R = {}));
function Pt(t) {
  return se(t) && typeof t.from == "function";
}
function se(t) {
  return typeof t == "object" && typeof t.to == "function";
}
function ze(t) {
  t.parentElement.removeChild(t);
}
function xe(t) {
  return t != null;
}
function Fe(t) {
  t.preventDefault();
}
function At(t) {
  return t.filter(function(e) {
    return this[e] ? !1 : this[e] = !0;
  }, {});
}
function kt(t, e) {
  return Math.round(t / e) * e;
}
function Ut(t, e) {
  var a = t.getBoundingClientRect(), o = t.ownerDocument, l = o.documentElement, d = qe(o);
  return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (d.x = 0), e ? a.top + d.y - l.clientTop : a.left + d.x - l.clientLeft;
}
function B(t) {
  return typeof t == "number" && !isNaN(t) && isFinite(t);
}
function Be(t, e, a) {
  a > 0 && (_(t, e), setTimeout(function() {
    ie(t, e);
  }, a));
}
function Ne(t) {
  return Math.max(Math.min(t, 100), 0);
}
function ae(t) {
  return Array.isArray(t) ? t : [t];
}
function Vt(t) {
  t = String(t);
  var e = t.split(".");
  return e.length > 1 ? e[1].length : 0;
}
function _(t, e) {
  t.classList && !/\s/.test(e) ? t.classList.add(e) : t.className += " " + e;
}
function ie(t, e) {
  t.classList && !/\s/.test(e) ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
}
function Ot(t, e) {
  return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className);
}
function qe(t) {
  var e = window.pageXOffset !== void 0, a = (t.compatMode || "") === "CSS1Compat", o = e ? window.pageXOffset : a ? t.documentElement.scrollLeft : t.body.scrollLeft, l = e ? window.pageYOffset : a ? t.documentElement.scrollTop : t.body.scrollTop;
  return {
    x: o,
    y: l
  };
}
function Dt() {
  return window.navigator.pointerEnabled ? {
    start: "pointerdown",
    move: "pointermove",
    end: "pointerup"
  } : window.navigator.msPointerEnabled ? {
    start: "MSPointerDown",
    move: "MSPointerMove",
    end: "MSPointerUp"
  } : {
    start: "mousedown touchstart",
    move: "mousemove touchmove",
    end: "mouseup touchend"
  };
}
function Mt() {
  var t = !1;
  try {
    var e = Object.defineProperty({}, "passive", {
      get: function() {
        t = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
  return t;
}
function _t() {
  return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
function we(t, e) {
  return 100 / (e - t);
}
function Ee(t, e, a) {
  return e * 100 / (t[a + 1] - t[a]);
}
function Lt(t, e) {
  return Ee(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0], 0);
}
function Rt(t, e) {
  return e * (t[1] - t[0]) / 100 + t[0];
}
function Q(t, e) {
  for (var a = 1; t >= e[a]; )
    a += 1;
  return a;
}
function Ht(t, e, a) {
  if (a >= t.slice(-1)[0])
    return 100;
  var o = Q(a, t), l = t[o - 1], d = t[o], h = e[o - 1], b = e[o];
  return h + Lt([l, d], a) / we(h, b);
}
function Tt(t, e, a) {
  if (a >= 100)
    return t.slice(-1)[0];
  var o = Q(a, e), l = t[o - 1], d = t[o], h = e[o - 1], b = e[o];
  return Rt([l, d], (a - h) * we(h, b));
}
function jt(t, e, a, o) {
  if (o === 100)
    return o;
  var l = Q(o, t), d = t[l - 1], h = t[l];
  return a ? o - d > (h - d) / 2 ? h : d : e[l - 1] ? t[l - 1] + kt(o - t[l - 1], e[l - 1]) : o;
}
var Ke = (
  /** @class */
  function() {
    function t(e, a, o) {
      this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [o || !1], this.xNumSteps = [!1], this.snap = a;
      var l, d = [];
      for (Object.keys(e).forEach(function(h) {
        d.push([ae(e[h]), h]);
      }), d.sort(function(h, b) {
        return h[0][0] - b[0][0];
      }), l = 0; l < d.length; l++)
        this.handleEntryPoint(d[l][1], d[l][0]);
      for (this.xNumSteps = this.xSteps.slice(0), l = 0; l < this.xNumSteps.length; l++)
        this.handleStepPoint(l, this.xNumSteps[l]);
    }
    return t.prototype.getDistance = function(e) {
      for (var a = [], o = 0; o < this.xNumSteps.length - 1; o++)
        a[o] = Ee(this.xVal, e, o);
      return a;
    }, t.prototype.getAbsoluteDistance = function(e, a, o) {
      var l = 0;
      if (e < this.xPct[this.xPct.length - 1])
        for (; e > this.xPct[l + 1]; )
          l++;
      else
        e === this.xPct[this.xPct.length - 1] && (l = this.xPct.length - 2);
      !o && e === this.xPct[l + 1] && l++, a === null && (a = []);
      var d, h = 1, b = a[l], S = 0, v = 0, U = 0, O = 0;
      for (o ? d = (e - this.xPct[l]) / (this.xPct[l + 1] - this.xPct[l]) : d = (this.xPct[l + 1] - e) / (this.xPct[l + 1] - this.xPct[l]); b > 0; )
        S = this.xPct[l + 1 + O] - this.xPct[l + O], a[l + O] * h + 100 - d * 100 > 100 ? (v = S * d, h = (b - 100 * d) / a[l + O], d = 1) : (v = a[l + O] * S / 100 * h, h = 0), o ? (U = U - v, this.xPct.length + O >= 1 && O--) : (U = U + v, this.xPct.length - O >= 1 && O++), b = a[l + O] * h;
      return e + U;
    }, t.prototype.toStepping = function(e) {
      return e = Ht(this.xVal, this.xPct, e), e;
    }, t.prototype.fromStepping = function(e) {
      return Tt(this.xVal, this.xPct, e);
    }, t.prototype.getStep = function(e) {
      return e = jt(this.xPct, this.xSteps, this.snap, e), e;
    }, t.prototype.getDefaultStep = function(e, a, o) {
      var l = Q(e, this.xPct);
      return (e === 100 || a && e === this.xPct[l - 1]) && (l = Math.max(l - 1, 1)), (this.xVal[l] - this.xVal[l - 1]) / o;
    }, t.prototype.getNearbySteps = function(e) {
      var a = Q(e, this.xPct);
      return {
        stepBefore: {
          startValue: this.xVal[a - 2],
          step: this.xNumSteps[a - 2],
          highestStep: this.xHighestCompleteStep[a - 2]
        },
        thisStep: {
          startValue: this.xVal[a - 1],
          step: this.xNumSteps[a - 1],
          highestStep: this.xHighestCompleteStep[a - 1]
        },
        stepAfter: {
          startValue: this.xVal[a],
          step: this.xNumSteps[a],
          highestStep: this.xHighestCompleteStep[a]
        }
      };
    }, t.prototype.countStepDecimals = function() {
      var e = this.xNumSteps.map(Vt);
      return Math.max.apply(null, e);
    }, t.prototype.hasNoSize = function() {
      return this.xVal[0] === this.xVal[this.xVal.length - 1];
    }, t.prototype.convert = function(e) {
      return this.getStep(this.toStepping(e));
    }, t.prototype.handleEntryPoint = function(e, a) {
      var o;
      if (e === "min" ? o = 0 : e === "max" ? o = 100 : o = parseFloat(e), !B(o) || !B(a[0]))
        throw new Error("noUiSlider: 'range' value isn't numeric.");
      this.xPct.push(o), this.xVal.push(a[0]);
      var l = Number(a[1]);
      o ? this.xSteps.push(isNaN(l) ? !1 : l) : isNaN(l) || (this.xSteps[0] = l), this.xHighestCompleteStep.push(0);
    }, t.prototype.handleStepPoint = function(e, a) {
      if (a) {
        if (this.xVal[e] === this.xVal[e + 1]) {
          this.xSteps[e] = this.xHighestCompleteStep[e] = this.xVal[e];
          return;
        }
        this.xSteps[e] = Ee([this.xVal[e], this.xVal[e + 1]], a, 0) / we(this.xPct[e], this.xPct[e + 1]);
        var o = (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e], l = Math.ceil(Number(o.toFixed(3)) - 1), d = this.xVal[e] + this.xNumSteps[e] * l;
        this.xHighestCompleteStep[e] = d;
      }
    }, t;
  }()
), $e = {
  to: function(t) {
    return t === void 0 ? "" : t.toFixed(2);
  },
  from: Number
}, Ie = {
  target: "target",
  base: "base",
  origin: "origin",
  handle: "handle",
  handleLower: "handle-lower",
  handleUpper: "handle-upper",
  touchArea: "touch-area",
  horizontal: "horizontal",
  vertical: "vertical",
  background: "background",
  connect: "connect",
  connects: "connects",
  ltr: "ltr",
  rtl: "rtl",
  textDirectionLtr: "txt-dir-ltr",
  textDirectionRtl: "txt-dir-rtl",
  draggable: "draggable",
  drag: "state-drag",
  tap: "state-tap",
  active: "active",
  tooltip: "tooltip",
  pips: "pips",
  pipsHorizontal: "pips-horizontal",
  pipsVertical: "pips-vertical",
  marker: "marker",
  markerHorizontal: "marker-horizontal",
  markerVertical: "marker-vertical",
  markerNormal: "marker-normal",
  markerLarge: "marker-large",
  markerSub: "marker-sub",
  value: "value",
  valueHorizontal: "value-horizontal",
  valueVertical: "value-vertical",
  valueNormal: "value-normal",
  valueLarge: "value-large",
  valueSub: "value-sub"
}, q = {
  tooltips: ".__tooltips",
  aria: ".__aria"
};
function zt(t, e) {
  if (!B(e))
    throw new Error("noUiSlider: 'step' is not numeric.");
  t.singleStep = e;
}
function Ft(t, e) {
  if (!B(e))
    throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
  t.keyboardPageMultiplier = e;
}
function Bt(t, e) {
  if (!B(e))
    throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
  t.keyboardMultiplier = e;
}
function Nt(t, e) {
  if (!B(e))
    throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
  t.keyboardDefaultStep = e;
}
function $t(t, e) {
  if (typeof e != "object" || Array.isArray(e))
    throw new Error("noUiSlider: 'range' is not an object.");
  if (e.min === void 0 || e.max === void 0)
    throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
  t.spectrum = new Ke(e, t.snap || !1, t.singleStep);
}
function Wt(t, e) {
  if (e = ae(e), !Array.isArray(e) || !e.length)
    throw new Error("noUiSlider: 'start' option is incorrect.");
  t.handles = e.length, t.start = e;
}
function qt(t, e) {
  if (typeof e != "boolean")
    throw new Error("noUiSlider: 'snap' option must be a boolean.");
  t.snap = e;
}
function Kt(t, e) {
  if (typeof e != "boolean")
    throw new Error("noUiSlider: 'animate' option must be a boolean.");
  t.animate = e;
}
function It(t, e) {
  if (typeof e != "number")
    throw new Error("noUiSlider: 'animationDuration' option must be a number.");
  t.animationDuration = e;
}
function Xe(t, e) {
  var a = [!1], o;
  if (e === "lower" ? e = [!0, !1] : e === "upper" && (e = [!1, !0]), e === !0 || e === !1) {
    for (o = 1; o < t.handles; o++)
      a.push(e);
    a.push(!1);
  } else {
    if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1)
      throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
    a = e;
  }
  t.connect = a;
}
function Xt(t, e) {
  switch (e) {
    case "horizontal":
      t.ort = 0;
      break;
    case "vertical":
      t.ort = 1;
      break;
    default:
      throw new Error("noUiSlider: 'orientation' option is invalid.");
  }
}
function Ye(t, e) {
  if (!B(e))
    throw new Error("noUiSlider: 'margin' option must be numeric.");
  e !== 0 && (t.margin = t.spectrum.getDistance(e));
}
function Yt(t, e) {
  if (!B(e))
    throw new Error("noUiSlider: 'limit' option must be numeric.");
  if (t.limit = t.spectrum.getDistance(e), !t.limit || t.handles < 2)
    throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
}
function Jt(t, e) {
  var a;
  if (!B(e) && !Array.isArray(e))
    throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
  if (Array.isArray(e) && !(e.length === 2 || B(e[0]) || B(e[1])))
    throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
  if (e !== 0) {
    for (Array.isArray(e) || (e = [e, e]), t.padding = [t.spectrum.getDistance(e[0]), t.spectrum.getDistance(e[1])], a = 0; a < t.spectrum.xNumSteps.length - 1; a++)
      if (t.padding[0][a] < 0 || t.padding[1][a] < 0)
        throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
    var o = e[0] + e[1], l = t.spectrum.xVal[0], d = t.spectrum.xVal[t.spectrum.xVal.length - 1];
    if (o / (d - l) > 1)
      throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
  }
}
function Gt(t, e) {
  switch (e) {
    case "ltr":
      t.dir = 0;
      break;
    case "rtl":
      t.dir = 1;
      break;
    default:
      throw new Error("noUiSlider: 'direction' option was not recognized.");
  }
}
function Zt(t, e) {
  if (typeof e != "string")
    throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
  var a = e.indexOf("tap") >= 0, o = e.indexOf("drag") >= 0, l = e.indexOf("fixed") >= 0, d = e.indexOf("snap") >= 0, h = e.indexOf("hover") >= 0, b = e.indexOf("unconstrained") >= 0, S = e.indexOf("invert-connects") >= 0, v = e.indexOf("drag-all") >= 0, U = e.indexOf("smooth-steps") >= 0;
  if (l) {
    if (t.handles !== 2)
      throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
    Ye(t, t.start[1] - t.start[0]);
  }
  if (S && t.handles !== 2)
    throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");
  if (b && (t.margin || t.limit))
    throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
  t.events = {
    tap: a || d,
    drag: o,
    dragAll: v,
    smoothSteps: U,
    fixed: l,
    snap: d,
    hover: h,
    unconstrained: b,
    invertConnects: S
  };
}
function Qt(t, e) {
  if (e !== !1)
    if (e === !0 || se(e)) {
      t.tooltips = [];
      for (var a = 0; a < t.handles; a++)
        t.tooltips.push(e);
    } else {
      if (e = ae(e), e.length !== t.handles)
        throw new Error("noUiSlider: must pass a formatter for all handles.");
      e.forEach(function(o) {
        if (typeof o != "boolean" && !se(o))
          throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
      }), t.tooltips = e;
    }
}
function er(t, e) {
  if (e.length !== t.handles)
    throw new Error("noUiSlider: must pass a attributes for all handles.");
  t.handleAttributes = e;
}
function tr(t, e) {
  if (!se(e))
    throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
  t.ariaFormat = e;
}
function rr(t, e) {
  if (!Pt(e))
    throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
  t.format = e;
}
function ir(t, e) {
  if (typeof e != "boolean")
    throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
  t.keyboardSupport = e;
}
function sr(t, e) {
  t.documentElement = e;
}
function ar(t, e) {
  if (typeof e != "string" && e !== !1)
    throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
  t.cssPrefix = e;
}
function nr(t, e) {
  if (typeof e != "object")
    throw new Error("noUiSlider: 'cssClasses' must be an object.");
  typeof t.cssPrefix == "string" ? (t.cssClasses = {}, Object.keys(e).forEach(function(a) {
    t.cssClasses[a] = t.cssPrefix + e[a];
  })) : t.cssClasses = e;
}
function Je(t) {
  var e = {
    margin: null,
    limit: null,
    padding: null,
    animate: !0,
    animationDuration: 300,
    ariaFormat: $e,
    format: $e
  }, a = {
    step: { r: !1, t: zt },
    keyboardPageMultiplier: { r: !1, t: Ft },
    keyboardMultiplier: { r: !1, t: Bt },
    keyboardDefaultStep: { r: !1, t: Nt },
    start: { r: !0, t: Wt },
    connect: { r: !0, t: Xe },
    direction: { r: !0, t: Gt },
    snap: { r: !1, t: qt },
    animate: { r: !1, t: Kt },
    animationDuration: { r: !1, t: It },
    range: { r: !0, t: $t },
    orientation: { r: !1, t: Xt },
    margin: { r: !1, t: Ye },
    limit: { r: !1, t: Yt },
    padding: { r: !1, t: Jt },
    behaviour: { r: !0, t: Zt },
    ariaFormat: { r: !1, t: tr },
    format: { r: !1, t: rr },
    tooltips: { r: !1, t: Qt },
    keyboardSupport: { r: !0, t: ir },
    documentElement: { r: !1, t: sr },
    cssPrefix: { r: !0, t: ar },
    cssClasses: { r: !0, t: nr },
    handleAttributes: { r: !1, t: er }
  }, o = {
    connect: !1,
    direction: "ltr",
    behaviour: "tap",
    orientation: "horizontal",
    keyboardSupport: !0,
    cssPrefix: "noUi-",
    cssClasses: Ie,
    keyboardPageMultiplier: 5,
    keyboardMultiplier: 1,
    keyboardDefaultStep: 10
  };
  t.format && !t.ariaFormat && (t.ariaFormat = t.format), Object.keys(a).forEach(function(S) {
    if (!xe(t[S]) && o[S] === void 0) {
      if (a[S].r)
        throw new Error("noUiSlider: '" + S + "' is required.");
      return;
    }
    a[S].t(e, xe(t[S]) ? t[S] : o[S]);
  }), e.pips = t.pips;
  var l = document.createElement("div"), d = l.style.msTransform !== void 0, h = l.style.transform !== void 0;
  e.transformRule = h ? "transform" : d ? "msTransform" : "webkitTransform";
  var b = [
    ["left", "top"],
    ["right", "bottom"]
  ];
  return e.style = b[e.dir][e.ort], e;
}
function or(t, e, a) {
  var o = Dt(), l = _t(), d = l && Mt(), h = t, b, S, v, U, O, H, g = e.spectrum, L = [], y = [], P = [], T = 0, j = {}, N = !1, z = t.ownerDocument, $ = e.documentElement || z.documentElement, W = z.body, Y = z.dir === "rtl" || e.ort === 1 ? 0 : 100;
  function F(r, i) {
    var s = z.createElement("div");
    return i && _(s, i), r.appendChild(s), s;
  }
  function ne(r, i) {
    var s = F(r, e.cssClasses.origin), n = F(s, e.cssClasses.handle);
    if (F(n, e.cssClasses.touchArea), n.setAttribute("data-handle", String(i)), e.keyboardSupport && (n.setAttribute("tabindex", "0"), n.addEventListener("keydown", function(f) {
      return ct(f, i);
    })), e.handleAttributes !== void 0) {
      var u = e.handleAttributes[i];
      Object.keys(u).forEach(function(f) {
        n.setAttribute(f, u[f]);
      });
    }
    return n.setAttribute("role", "slider"), n.setAttribute("aria-orientation", e.ort ? "vertical" : "horizontal"), i === 0 ? _(n, e.cssClasses.handleLower) : i === e.handles - 1 && _(n, e.cssClasses.handleUpper), s.handle = n, s;
  }
  function J(r, i) {
    return i ? F(r, e.cssClasses.connect) : !1;
  }
  function oe(r, i) {
    S = F(i, e.cssClasses.connects), v = [], U = [], U.push(J(S, r[0]));
    for (var s = 0; s < e.handles; s++)
      v.push(ne(i, s)), P[s] = s, U.push(J(S, r[s + 1]));
  }
  function Ge(r) {
    _(r, e.cssClasses.target), e.dir === 0 ? _(r, e.cssClasses.ltr) : _(r, e.cssClasses.rtl), e.ort === 0 ? _(r, e.cssClasses.horizontal) : _(r, e.cssClasses.vertical);
    var i = getComputedStyle(r).direction;
    return i === "rtl" ? _(r, e.cssClasses.textDirectionRtl) : _(r, e.cssClasses.textDirectionLtr), F(r, e.cssClasses.base);
  }
  function Ze(r, i) {
    return !e.tooltips || !e.tooltips[i] ? !1 : F(r.firstChild, e.cssClasses.tooltip);
  }
  function Ce() {
    return h.hasAttribute("disabled");
  }
  function le(r) {
    var i = v[r];
    return i.hasAttribute("disabled");
  }
  function Qe(r) {
    r != null ? (v[r].setAttribute("disabled", ""), v[r].handle.removeAttribute("tabindex")) : (h.setAttribute("disabled", ""), v.forEach(function(i) {
      i.handle.removeAttribute("tabindex");
    }));
  }
  function et(r) {
    r != null ? (v[r].removeAttribute("disabled"), v[r].handle.setAttribute("tabindex", "0")) : (h.removeAttribute("disabled"), v.forEach(function(i) {
      i.removeAttribute("disabled"), i.handle.setAttribute("tabindex", "0");
    }));
  }
  function ue() {
    H && (G("update" + q.tooltips), H.forEach(function(r) {
      r && ze(r);
    }), H = null);
  }
  function Pe() {
    ue(), H = v.map(Ze), de("update" + q.tooltips, function(r, i, s) {
      if (!(!H || !e.tooltips) && H[i] !== !1) {
        var n = r[i];
        e.tooltips[i] !== !0 && (n = e.tooltips[i].to(s[i])), H[i].innerHTML = n;
      }
    });
  }
  function tt() {
    G("update" + q.aria), de("update" + q.aria, function(r, i, s, n, u) {
      P.forEach(function(f) {
        var p = v[f], c = ee(y, f, 0, !0, !0, !0), x = ee(y, f, 100, !0, !0, !0), E = u[f], w = String(e.ariaFormat.to(s[f]));
        c = g.fromStepping(c).toFixed(1), x = g.fromStepping(x).toFixed(1), E = g.fromStepping(E).toFixed(1), p.children[0].setAttribute("aria-valuemin", c), p.children[0].setAttribute("aria-valuemax", x), p.children[0].setAttribute("aria-valuenow", E), p.children[0].setAttribute("aria-valuetext", w);
      });
    });
  }
  function rt(r) {
    if (r.mode === K.Range || r.mode === K.Steps)
      return g.xVal;
    if (r.mode === K.Count) {
      if (r.values < 2)
        throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
      for (var i = r.values - 1, s = 100 / i, n = []; i--; )
        n[i] = i * s;
      return n.push(100), Ae(n, r.stepped);
    }
    return r.mode === K.Positions ? Ae(r.values, r.stepped) : r.mode === K.Values ? r.stepped ? r.values.map(function(u) {
      return g.fromStepping(g.getStep(g.toStepping(u)));
    }) : r.values : [];
  }
  function Ae(r, i) {
    return r.map(function(s) {
      return g.fromStepping(i ? g.getStep(s) : s);
    });
  }
  function it(r) {
    function i(E, w) {
      return Number((E + w).toFixed(7));
    }
    var s = rt(r), n = {}, u = g.xVal[0], f = g.xVal[g.xVal.length - 1], p = !1, c = !1, x = 0;
    return s = At(s.slice().sort(function(E, w) {
      return E - w;
    })), s[0] !== u && (s.unshift(u), p = !0), s[s.length - 1] !== f && (s.push(f), c = !0), s.forEach(function(E, w) {
      var C, m, k, M = E, V = s[w + 1], D, me, Se, be, He, ye, Te, je = r.mode === K.Steps;
      for (je && (C = g.xNumSteps[w]), C || (C = V - M), V === void 0 && (V = M), C = Math.max(C, 1e-7), m = M; m <= V; m = i(m, C)) {
        for (D = g.toStepping(m), me = D - x, He = me / (r.density || 1), ye = Math.round(He), Te = me / ye, k = 1; k <= ye; k += 1)
          Se = x + k * Te, n[Se.toFixed(5)] = [g.fromStepping(Se), 0];
        be = s.indexOf(m) > -1 ? R.LargeValue : je ? R.SmallValue : R.NoValue, !w && p && m !== V && (be = 0), m === V && c || (n[D.toFixed(5)] = [m, be]), x = D;
      }
    }), n;
  }
  function st(r, i, s) {
    var n, u, f = z.createElement("div"), p = (n = {}, n[R.None] = "", n[R.NoValue] = e.cssClasses.valueNormal, n[R.LargeValue] = e.cssClasses.valueLarge, n[R.SmallValue] = e.cssClasses.valueSub, n), c = (u = {}, u[R.None] = "", u[R.NoValue] = e.cssClasses.markerNormal, u[R.LargeValue] = e.cssClasses.markerLarge, u[R.SmallValue] = e.cssClasses.markerSub, u), x = [e.cssClasses.valueHorizontal, e.cssClasses.valueVertical], E = [e.cssClasses.markerHorizontal, e.cssClasses.markerVertical];
    _(f, e.cssClasses.pips), _(f, e.ort === 0 ? e.cssClasses.pipsHorizontal : e.cssClasses.pipsVertical);
    function w(m, k) {
      var M = k === e.cssClasses.value, V = M ? x : E, D = M ? p : c;
      return k + " " + V[e.ort] + " " + D[m];
    }
    function C(m, k, M) {
      if (M = i ? i(k, M) : M, M !== R.None) {
        var V = F(f, !1);
        V.className = w(M, e.cssClasses.marker), V.style[e.style] = m + "%", M > R.NoValue && (V = F(f, !1), V.className = w(M, e.cssClasses.value), V.setAttribute("data-value", String(k)), V.style[e.style] = m + "%", V.innerHTML = String(s.to(k)));
      }
    }
    return Object.keys(r).forEach(function(m) {
      C(m, r[m][0], r[m][1]);
    }), f;
  }
  function fe() {
    O && (ze(O), O = null);
  }
  function ce(r) {
    fe();
    var i = it(r), s = r.filter, n = r.format || {
      to: function(u) {
        return String(Math.round(u));
      }
    };
    return O = h.appendChild(st(i, s, n)), O;
  }
  function ke() {
    var r = b.getBoundingClientRect(), i = "offset" + ["Width", "Height"][e.ort];
    return e.ort === 0 ? r.width || b[i] : r.height || b[i];
  }
  function I(r, i, s, n) {
    var u = function(p) {
      var c = at(p, n.pageOffset, n.target || i);
      if (!c || Ce() && !n.doNotReject || Ot(h, e.cssClasses.tap) && !n.doNotReject || r === o.start && c.buttons !== void 0 && c.buttons > 1 || n.hover && c.buttons)
        return !1;
      d || c.preventDefault(), c.calcPoint = c.points[e.ort], s(c, n);
    }, f = [];
    return r.split(" ").forEach(function(p) {
      i.addEventListener(p, u, d ? { passive: !0 } : !1), f.push([p, u]);
    }), f;
  }
  function at(r, i, s) {
    var n = r.type.indexOf("touch") === 0, u = r.type.indexOf("mouse") === 0, f = r.type.indexOf("pointer") === 0, p = 0, c = 0;
    if (r.type.indexOf("MSPointer") === 0 && (f = !0), r.type === "mousedown" && !r.buttons && !r.touches)
      return !1;
    if (n) {
      var x = function(C) {
        var m = C.target;
        return m === s || s.contains(m) || r.composed && r.composedPath().shift() === s;
      };
      if (r.type === "touchstart") {
        var E = Array.prototype.filter.call(r.touches, x);
        if (E.length > 1)
          return !1;
        p = E[0].pageX, c = E[0].pageY;
      } else {
        var w = Array.prototype.find.call(r.changedTouches, x);
        if (!w)
          return !1;
        p = w.pageX, c = w.pageY;
      }
    }
    return i = i || qe(z), (u || f) && (p = r.clientX + i.x, c = r.clientY + i.y), r.pageOffset = i, r.points = [p, c], r.cursor = u || f, r;
  }
  function Ue(r) {
    var i = r - Ut(b, e.ort), s = i * 100 / ke();
    return s = Ne(s), e.dir ? 100 - s : s;
  }
  function nt(r) {
    var i = 100, s = !1;
    return v.forEach(function(n, u) {
      if (!le(u)) {
        var f = y[u], p = Math.abs(f - r), c = p === 100 && i === 100, x = p < i, E = p <= i && r > f;
        (x || E || c) && (s = u, i = p);
      }
    }), s;
  }
  function ot(r, i) {
    r.type === "mouseout" && r.target.nodeName === "HTML" && r.relatedTarget === null && he(r, i);
  }
  function lt(r, i) {
    if (navigator.appVersion.indexOf("MSIE 9") === -1 && r.buttons === 0 && i.buttonsProperty !== 0)
      return he(r, i);
    var s = (e.dir ? -1 : 1) * (r.calcPoint - i.startCalcPoint), n = s * 100 / i.baseSize;
    Oe(s > 0, n, i.locations, i.handleNumbers, i.connect);
  }
  function he(r, i) {
    i.handle && (ie(i.handle, e.cssClasses.active), T -= 1), i.listeners.forEach(function(s) {
      $.removeEventListener(s[0], s[1]);
    }), T === 0 && (ie(h, e.cssClasses.drag), ge(), r.cursor && (W.style.cursor = "", W.removeEventListener("selectstart", Fe))), e.events.smoothSteps && (i.handleNumbers.forEach(function(s) {
      X(s, y[s], !0, !0, !1, !1);
    }), i.handleNumbers.forEach(function(s) {
      A("update", s);
    })), i.handleNumbers.forEach(function(s) {
      A("change", s), A("set", s), A("end", s);
    });
  }
  function pe(r, i) {
    if (!i.handleNumbers.some(le)) {
      var s;
      if (i.handleNumbers.length === 1) {
        var n = v[i.handleNumbers[0]];
        s = n.children[0], T += 1, _(s, e.cssClasses.active);
      }
      r.stopPropagation();
      var u = [], f = I(o.move, $, lt, {
        // The event target has changed so we need to propagate the original one so that we keep
        // relying on it to extract target touches.
        target: r.target,
        handle: s,
        connect: i.connect,
        listeners: u,
        startCalcPoint: r.calcPoint,
        baseSize: ke(),
        pageOffset: r.pageOffset,
        handleNumbers: i.handleNumbers,
        buttonsProperty: r.buttons,
        locations: y.slice()
      }), p = I(o.end, $, he, {
        target: r.target,
        handle: s,
        listeners: u,
        doNotReject: !0,
        handleNumbers: i.handleNumbers
      }), c = I("mouseout", $, ot, {
        target: r.target,
        handle: s,
        listeners: u,
        doNotReject: !0,
        handleNumbers: i.handleNumbers
      });
      u.push.apply(u, f.concat(p, c)), r.cursor && (W.style.cursor = getComputedStyle(r.target).cursor, v.length > 1 && _(h, e.cssClasses.drag), W.addEventListener("selectstart", Fe, !1)), i.handleNumbers.forEach(function(x) {
        A("start", x);
      });
    }
  }
  function ut(r) {
    r.stopPropagation();
    var i = Ue(r.calcPoint), s = nt(i);
    s !== !1 && (e.events.snap || Be(h, e.cssClasses.tap, e.animationDuration), X(s, i, !0, !0), ge(), A("slide", s, !0), A("update", s, !0), e.events.snap ? pe(r, { handleNumbers: [s] }) : (A("change", s, !0), A("set", s, !0)));
  }
  function ft(r) {
    var i = Ue(r.calcPoint), s = g.getStep(i), n = g.fromStepping(s);
    Object.keys(j).forEach(function(u) {
      u.split(".")[0] === "hover" && j[u].forEach(function(f) {
        f.call(re, n);
      });
    });
  }
  function ct(r, i) {
    if (Ce() || le(i))
      return !1;
    var s = ["Left", "Right"], n = ["Down", "Up"], u = ["PageDown", "PageUp"], f = ["Home", "End"];
    e.dir && !e.ort ? s.reverse() : e.ort && !e.dir && (n.reverse(), u.reverse());
    var p = r.key.replace("Arrow", ""), c = p === u[0], x = p === u[1], E = p === n[0] || p === s[0] || c, w = p === n[1] || p === s[1] || x, C = p === f[0], m = p === f[1];
    if (!E && !w && !C && !m)
      return !0;
    r.preventDefault();
    var k;
    if (w || E) {
      var M = E ? 0 : 1, V = Le(i), D = V[M];
      if (D === null)
        return !1;
      D === !1 && (D = g.getDefaultStep(y[i], E, e.keyboardDefaultStep)), x || c ? D *= e.keyboardPageMultiplier : D *= e.keyboardMultiplier, D = Math.max(D, 1e-7), D = (E ? -1 : 1) * D, k = L[i] + D;
    } else
      m ? k = e.spectrum.xVal[e.spectrum.xVal.length - 1] : k = e.spectrum.xVal[0];
    return X(i, g.toStepping(k), !0, !0), A("slide", i), A("update", i), A("change", i), A("set", i), !1;
  }
  function Ve(r) {
    r.fixed || v.forEach(function(i, s) {
      I(o.start, i.children[0], pe, {
        handleNumbers: [s]
      });
    }), r.tap && I(o.start, b, ut, {}), r.hover && I(o.move, b, ft, {
      hover: !0
    }), r.drag && U.forEach(function(i, s) {
      if (!(i === !1 || s === 0 || s === U.length - 1)) {
        var n = v[s - 1], u = v[s], f = [i], p = [n, u], c = [s - 1, s];
        _(i, e.cssClasses.draggable), r.fixed && (f.push(n.children[0]), f.push(u.children[0])), r.dragAll && (p = v, c = P), f.forEach(function(x) {
          I(o.start, x, pe, {
            handles: p,
            handleNumbers: c,
            connect: i
          });
        });
      }
    });
  }
  function de(r, i) {
    j[r] = j[r] || [], j[r].push(i), r.split(".")[0] === "update" && v.forEach(function(s, n) {
      A("update", n);
    });
  }
  function ht(r) {
    return r === q.aria || r === q.tooltips;
  }
  function G(r) {
    var i = r && r.split(".")[0], s = i ? r.substring(i.length) : r;
    Object.keys(j).forEach(function(n) {
      var u = n.split(".")[0], f = n.substring(u.length);
      (!i || i === u) && (!s || s === f) && (!ht(f) || s === f) && delete j[n];
    });
  }
  function A(r, i, s) {
    Object.keys(j).forEach(function(n) {
      var u = n.split(".")[0];
      r === u && j[n].forEach(function(f) {
        f.call(
          // Use the slider public API as the scope ('this')
          re,
          // Return values as array, so arg_1[arg_2] is always valid.
          L.map(e.format.to),
          // Handle index, 0 or 1
          i,
          // Un-formatted slider values
          L.slice(),
          // Event is fired by tap, true or false
          s || !1,
          // Left offset of the handle, in relation to the slider
          y.slice(),
          // add the slider public API to an accessible parameter when this is unavailable
          re
        );
      });
    });
  }
  function ee(r, i, s, n, u, f, p) {
    var c;
    return v.length > 1 && !e.events.unconstrained && (n && i > 0 && (c = g.getAbsoluteDistance(r[i - 1], e.margin, !1), s = Math.max(s, c)), u && i < v.length - 1 && (c = g.getAbsoluteDistance(r[i + 1], e.margin, !0), s = Math.min(s, c))), v.length > 1 && e.limit && (n && i > 0 && (c = g.getAbsoluteDistance(r[i - 1], e.limit, !1), s = Math.min(s, c)), u && i < v.length - 1 && (c = g.getAbsoluteDistance(r[i + 1], e.limit, !0), s = Math.max(s, c))), e.padding && (i === 0 && (c = g.getAbsoluteDistance(0, e.padding[0], !1), s = Math.max(s, c)), i === v.length - 1 && (c = g.getAbsoluteDistance(100, e.padding[1], !0), s = Math.min(s, c))), p || (s = g.getStep(s)), s = Ne(s), s === r[i] && !f ? !1 : s;
  }
  function ve(r, i) {
    var s = e.ort;
    return (s ? i : r) + ", " + (s ? r : i);
  }
  function Oe(r, i, s, n, u) {
    var f = s.slice(), p = n[0], c = e.events.smoothSteps, x = [!r, r], E = [r, !r];
    n = n.slice(), r && n.reverse(), n.length > 1 ? n.forEach(function(C, m) {
      var k = ee(f, C, f[C] + i, x[m], E[m], !1, c);
      k === !1 ? i = 0 : (i = k - f[C], f[C] = k);
    }) : x = E = [!0];
    var w = !1;
    n.forEach(function(C, m) {
      w = X(C, s[C] + i, x[m], E[m], !1, c) || w;
    }), w && (n.forEach(function(C) {
      A("update", C), A("slide", C);
    }), u != null && A("drag", p));
  }
  function De(r, i) {
    return e.dir ? 100 - r - i : r;
  }
  function pt(r, i) {
    y[r] = i, L[r] = g.fromStepping(i);
    var s = De(i, 0) - Y, n = "translate(" + ve(s + "%", "0") + ")";
    if (v[r].style[e.transformRule] = n, e.events.invertConnects && y.length > 1) {
      var u = y.every(function(f, p, c) {
        return p === 0 || f >= c[p - 1];
      });
      if (N !== !u) {
        bt();
        return;
      }
    }
    Z(r), Z(r + 1), N && (Z(r - 1), Z(r + 2));
  }
  function ge() {
    P.forEach(function(r) {
      var i = y[r] > 50 ? -1 : 1, s = 3 + (v.length + i * r);
      v[r].style.zIndex = String(s);
    });
  }
  function X(r, i, s, n, u, f) {
    return u || (i = ee(y, r, i, s, n, !1, f)), i === !1 ? !1 : (pt(r, i), !0);
  }
  function Z(r) {
    if (U[r]) {
      var i = y.slice();
      N && i.sort(function(c, x) {
        return c - x;
      });
      var s = 0, n = 100;
      r !== 0 && (s = i[r - 1]), r !== U.length - 1 && (n = i[r]);
      var u = n - s, f = "translate(" + ve(De(s, u) + "%", "0") + ")", p = "scale(" + ve(u / 100, "1") + ")";
      U[r].style[e.transformRule] = f + " " + p;
    }
  }
  function Me(r, i) {
    return r === null || r === !1 || r === void 0 || (typeof r == "number" && (r = String(r)), r = e.format.from(r), r !== !1 && (r = g.toStepping(r)), r === !1 || isNaN(r)) ? y[i] : r;
  }
  function te(r, i, s) {
    var n = ae(r), u = y[0] === void 0;
    i = i === void 0 ? !0 : i, e.animate && !u && Be(h, e.cssClasses.tap, e.animationDuration), P.forEach(function(c) {
      X(c, Me(n[c], c), !0, !1, s);
    });
    var f = P.length === 1 ? 0 : 1;
    if (u && g.hasNoSize() && (s = !0, y[0] = 0, P.length > 1)) {
      var p = 100 / (P.length - 1);
      P.forEach(function(c) {
        y[c] = c * p;
      });
    }
    for (; f < P.length; ++f)
      P.forEach(function(c) {
        X(c, y[c], !0, !0, s);
      });
    ge(), P.forEach(function(c) {
      A("update", c), n[c] !== null && i && A("set", c);
    });
  }
  function dt(r) {
    te(e.start, r);
  }
  function vt(r, i, s, n) {
    if (r = Number(r), !(r >= 0 && r < P.length))
      throw new Error("noUiSlider: invalid handle number, got: " + r);
    X(r, Me(i, r), !0, !0, n), A("update", r), s && A("set", r);
  }
  function _e(r) {
    if (r === void 0 && (r = !1), r)
      return L.length === 1 ? L[0] : L.slice(0);
    var i = L.map(e.format.to);
    return i.length === 1 ? i[0] : i;
  }
  function gt() {
    for (G(q.aria), G(q.tooltips), Object.keys(e.cssClasses).forEach(function(r) {
      ie(h, e.cssClasses[r]);
    }); h.firstChild; )
      h.removeChild(h.firstChild);
    delete h.noUiSlider;
  }
  function Le(r) {
    var i = y[r], s = g.getNearbySteps(i), n = L[r], u = s.thisStep.step, f = null;
    if (e.snap)
      return [
        n - s.stepBefore.startValue || null,
        s.stepAfter.startValue - n || null
      ];
    u !== !1 && n + u > s.stepAfter.startValue && (u = s.stepAfter.startValue - n), n > s.thisStep.startValue ? f = s.thisStep.step : s.stepBefore.step === !1 ? f = !1 : f = n - s.stepBefore.highestStep, i === 100 ? u = null : i === 0 && (f = null);
    var p = g.countStepDecimals();
    return u !== null && u !== !1 && (u = Number(u.toFixed(p))), f !== null && f !== !1 && (f = Number(f.toFixed(p))), [f, u];
  }
  function mt() {
    return P.map(Le);
  }
  function St(r, i) {
    var s = _e(), n = [
      "margin",
      "limit",
      "padding",
      "range",
      "animate",
      "snap",
      "step",
      "format",
      "pips",
      "tooltips",
      "connect"
    ];
    n.forEach(function(f) {
      r[f] !== void 0 && (a[f] = r[f]);
    });
    var u = Je(a);
    n.forEach(function(f) {
      r[f] !== void 0 && (e[f] = u[f]);
    }), g = u.spectrum, e.margin = u.margin, e.limit = u.limit, e.padding = u.padding, e.pips ? ce(e.pips) : fe(), e.tooltips ? Pe() : ue(), y = [], te(xe(r.start) ? r.start : s, i), r.connect && Re();
  }
  function Re() {
    for (; S.firstChild; )
      S.removeChild(S.firstChild);
    for (var r = 0; r <= e.handles; r++)
      U[r] = J(S, e.connect[r]), Z(r);
    Ve({ drag: e.events.drag, fixed: !0 });
  }
  function bt() {
    N = !N, Xe(
      e,
      // inverse the connect boolean array
      e.connect.map(function(r) {
        return !r;
      })
    ), Re();
  }
  function yt() {
    b = Ge(h), oe(e.connect, b), Ve(e.events), te(e.start), e.pips && ce(e.pips), e.tooltips && Pe(), tt();
  }
  yt();
  var re = {
    destroy: gt,
    steps: mt,
    on: de,
    off: G,
    get: _e,
    set: te,
    setHandle: vt,
    reset: dt,
    disable: Qe,
    enable: et,
    // Exposed for unit testing, don't use this in your application.
    __moveHandles: function(r, i, s) {
      Oe(r, i, y, s);
    },
    options: a,
    updateOptions: St,
    target: h,
    removePips: fe,
    removeTooltips: ue,
    getPositions: function() {
      return y.slice();
    },
    getTooltips: function() {
      return H;
    },
    getOrigins: function() {
      return v;
    },
    pips: ce
    // Issue #594
  };
  return re;
}
function lr(t, e) {
  if (!t || !t.nodeName)
    throw new Error("noUiSlider: create requires a single element, got: " + t);
  if (t.noUiSlider)
    throw new Error("noUiSlider: Slider was already initialized.");
  var a = Je(e), o = or(t, a, e);
  return t.noUiSlider = o, o;
}
const ur = {
  // Exposed for unit testing, don't use this in your application.
  __spectrum: Ke,
  // A reference to the default classes, allows global changes.
  // Use the cssClasses option for changes to one slider.
  cssClasses: Ie,
  create: lr
}, fr = function(t, e, a) {
  var o = getComputedStyle(t).direction === "rtl", l = t.noUiSlider.options.direction === "rtl", d = t.noUiSlider.options.orientation === "vertical", h = t.noUiSlider.getTooltips(), b = t.noUiSlider.getOrigins();
  h.forEach(function(S, v) {
    S && b[v].appendChild(S);
  }), t.noUiSlider.on("update.mergeTooltips", function(S, v, U, O, H) {
    var g = [[]], L = [[]], y = [[]], P = 0;
    h[0] && (g[0][0] = 0, L[0][0] = H[0], y[0][0] = S[0]);
    for (var T = 1; T < H.length; T++)
      (!h[T] || H[T] - H[T - 1] > e) && (P++, g[P] = [], y[P] = [], L[P] = []), h[T] && (g[P].push(T), y[P].push(S[T]), L[P].push(H[T]));
    g.forEach(function(j, N) {
      for (var z = j.length, $ = 0; $ < z; $++) {
        var W = j[$];
        if ($ === z - 1) {
          var Y = 0;
          L[N].forEach(function(oe) {
            Y += 1e3 - oe;
          });
          var F = d ? "bottom" : "right", ne = l ? 0 : z - 1, J = 1e3 - L[N][ne];
          Y = (o && !d ? 100 : 0) + Y / z - J, h[W].innerHTML = y[N].join(a), h[W].style.display = "block", h[W].style[F] = Y + "%";
        } else
          h[W].style.display = "none";
      }
    });
  });
};
const cr = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [o, l] of e)
    a[o] = l;
  return a;
}, We = [
  "start",
  "slide",
  "drag",
  "change",
  "set",
  "end"
], hr = {
  props: {
    id: {
      type: String,
      default: () => "noUi-slider-x-" + (Math.random() + 1).toString(36).substring(7)
    },
    start: {
      type: [Array, Number, String],
      validator(t) {
        return Array.isArray(t) ? t.length && t.every((e) => typeof e == "number") : !0;
      }
    },
    connect: {
      type: [Array, Boolean, String],
      default: !1,
      validator(t) {
        return Array.isArray(t) ? t.length && t.every((e) => typeof e == "boolean") : !0;
      }
    },
    range: {
      type: Object,
      required: !0
    },
    step: {
      type: Number
    },
    margin: {
      type: Number
    },
    padding: {
      type: [Array, Number],
      validator(t) {
        return Array.isArray(t) ? t.length && t.every((e) => typeof e == "number") : !0;
      },
      default: 0
    },
    limit: {
      type: Number
    },
    direction: {
      type: String,
      default: "ltr"
    },
    orientation: {
      type: String,
      default: "horizontal"
    },
    animate: {
      type: Boolean,
      default: !1
    },
    handleAttributes: {
      type: Array
    },
    keyboardSupport: {
      type: Boolean,
      default: !0
    },
    keyboardDefaultStep: {
      type: Number,
      default: 10
    },
    keyboardPageMultiplier: {
      type: Number,
      default: 5
    },
    keyboardMultiplier: {
      type: Number,
      default: 1
    },
    behaviour: {
      type: String,
      default: "tap"
    },
    tooltips: {
      type: [Array, Object, Boolean, Function],
      default: !1,
      validator(t) {
        const e = (a) => !!(typeof a == "boolean" || typeof a == "function" || typeof a == "object" && Object.prototype.hasOwnProperty.call(a, "to"));
        return Array.isArray(t) ? t.every(e) : e(t);
      }
    },
    format: {
      type: Object,
      validator(t) {
        return Object.prototype.hasOwnProperty.call(t, "to") && Object.prototype.hasOwnProperty.call(t, "from");
      }
    },
    pips: {
      type: Object,
      default: null
    },
    pipsys: {
      type: Boolean,
      default: !1
    },
    clickablePips: {
      type: Boolean,
      default: !1
    },
    tooltipOnClick: {
      type: Boolean,
      default: !1
    },
    mergeTooltips: {
      default: null,
      type: Object,
      validator(t) {
        return typeof t != "object" ? !1 : Object.prototype.hasOwnProperty.call(t, "threshold") || Object.prototype.hasOwnProperty.call(t, "separator");
      }
    },
    snap: {
      type: Boolean
    },
    ariaFormat: {
      type: Object
    },
    modelValue: {
      required: !0,
      type: [Number, Array, String, null]
    },
    cssPrefix: {
      type: String
    },
    cssClasses: {
      type: Object
    },
    animationDuration: {
      type: Number
    },
    disable: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      preHoverValue: null,
      events: [],
      el: null,
      clickablePipsListeners: [],
      mergeTooltipsActive: !1,
      pendingUpdates: null,
      updateScheduled: !1,
      settingFromWatcher: !1
    };
  },
  mounted() {
    this.create(), this.registerEvents(), this.disable && this.setDisable();
  },
  beforeUnmount() {
    this.destroy();
  },
  methods: {
    isSliderReady() {
      var t;
      return !!((t = this.el) != null && t.noUiSlider);
    },
    create(t) {
      this.el = this.$refs.el;
      let e = t !== void 0 ? t : this.modelValue;
      e == null && this.start !== void 0 && this.start !== null && (e = this.start), e == null && (e = Object.values(this.range)[0]);
      let a = {
        start: e,
        connect: this.connect,
        range: this.range,
        direction: this.direction,
        orientation: this.orientation,
        animate: this.animate,
        keyboardSupport: this.keyboardSupport,
        keyboardDefaultStep: this.keyboardDefaultStep,
        keyboardPageMultiplier: this.keyboardPageMultiplier,
        keyboardMultiplier: this.keyboardMultiplier,
        behaviour: this.behaviour,
        padding: this.padding
      };
      const o = {
        step: this.step,
        margin: this.margin,
        limit: this.limit,
        snap: this.snap,
        handleAttributes: this.handleAttributes,
        cssPrefix: this.cssPrefix,
        cssClasses: this.cssClasses,
        animationDuration: this.animate ? this.animationDuration || 300 : 0,
        ariaFormat: this.ariaFormat,
        format: this.format
      };
      Object.entries(o).forEach(([l, d]) => {
        d != null && (a[l] = d);
      }), (this.tooltips || this.tooltipOnClick) && (a.tooltips = this.tooltips ? this.normalizeTooltip(this.tooltips) : !0), this.pipsys && !a.pips && (a.pips = {
        mode: "steps"
      }), ur.create(this.el, a), this.$nextTick(() => {
        this.pips ? this.setPips(this.pips) : this.pipsys || this.setCssWithoutPips(), this.setMergeTooltips();
      });
    },
    normalizeTooltip(t) {
      return typeof t == "function" ? {
        to: t
      } : Array.isArray(t) ? t.map(this.normalizeTooltip) : t;
    },
    compareValues(t, e) {
      const a = (o) => Array.isArray(o) ? o.map(String) : String(o);
      return JSON.stringify(a(t)) === JSON.stringify(a(e));
    },
    // Events
    registerEvents() {
      We.map((t) => {
        this.registerBasicEvent(t);
      }), this.behaviour.includes("hover") && this.registerHoverEvent(), this.registerUpdateEvent();
    },
    offAllEvents() {
      let t = this.events.length;
      for (let e = 0; e < t; e++)
        this.off(this.events.pop());
    },
    registerBasicEvent(t) {
      this.on(t, (e, a, o, l, d) => {
        this.$emit(t, { values: e, handle: a, unencoded: o, tap: l, positions: d });
      });
    },
    registerUpdateEvent() {
      this.on("update", (t, e, a, o, l) => {
        this.$emit("update", { values: t, handle: e, unencoded: a, tap: o, positions: l });
        let d = a.length > 1 ? [...a] : a[0];
        this.settingFromWatcher || this.$emit("update:modelValue", d);
      });
    },
    registerHoverEvent() {
      this.on("hover", (t) => {
        t != this.preHoverValue && (this.preHoverValue = t, this.$emit("hover", t));
      });
    },
    recreate() {
      const t = this.modelValue;
      this.destroy(), this.create(t), this.registerEvents(), this.disable && this.setDisable();
    },
    // Public methods
    destroy() {
      var t;
      this.offAllEvents(), this.removeMergeTooltips(), this.removeClickablePipsListeners(), (t = this.el) != null && t.noUiSlider && this.el.noUiSlider.destroy();
    },
    getSteps() {
      if (this.isSliderReady())
        return this.el.noUiSlider.steps();
    },
    on(t, e) {
      this.isSliderReady() && (this.events.push(t), this.el.noUiSlider.on(t, e));
    },
    off(t) {
      this.isSliderReady() && this.el.noUiSlider.off(t);
    },
    get(t) {
      if (this.isSliderReady())
        return this.el.noUiSlider.get(t);
    },
    set(t, e, a) {
      this.isSliderReady() && this.el.noUiSlider.set(t, e, a);
    },
    setHandle(t, e, a, o) {
      this.isSliderReady() && this.el.noUiSlider.setHandle(t, e, a, o);
    },
    reset(t) {
      this.isSliderReady() && this.el.noUiSlider.reset(t);
    },
    setDisable(t) {
      this.isSliderReady() && this.el.noUiSlider.disable(t);
    },
    setEnable(t) {
      this.isSliderReady() && this.el.noUiSlider.enable(t);
    },
    updateOptions(t, e) {
      this.isSliderReady() && this.el.noUiSlider.updateOptions(t, e);
    },
    scheduleUpdate(t) {
      this.pendingUpdates = Object.assign(this.pendingUpdates || {}, t), this.updateScheduled || (this.updateScheduled = !0, this.$nextTick(() => {
        this.updateOptions(this.pendingUpdates), this.pendingUpdates = null, this.updateScheduled = !1;
      }));
    },
    removePips() {
      this.isSliderReady() && (this.removeClickablePipsListeners(), this.setCssWithoutPips(), this.el.noUiSlider.removePips());
    },
    removeTooltips() {
      this.isSliderReady() && this.el.noUiSlider.removeTooltips();
    },
    getPositions() {
      if (this.isSliderReady())
        return this.el.noUiSlider.getPositions();
    },
    getTooltips() {
      if (this.isSliderReady())
        return this.el.noUiSlider.getTooltips();
    },
    getOrigins() {
      if (this.isSliderReady())
        return this.el.noUiSlider.getOrigins();
    },
    getOptions() {
      if (this.isSliderReady())
        return this.el.noUiSlider.options;
    },
    setPips(t) {
      if (t)
        return this.removeCssWithoutPips(), this.clickablePips && this.setClickablePips(), this.el.noUiSlider.pips(t);
    },
    setCssWithoutPips() {
      this.el && this.el.noUiSlider.target.classList.add("noUi-slider-x-without-pips");
    },
    removeCssWithoutPips() {
      this.el && this.el.noUiSlider.target.classList.remove("noUi-slider-x-without-pips");
    },
    setClickablePips() {
      const t = (e) => {
        if (e.target.dataset.value !== void 0) {
          const a = Number(e.target.dataset.value), o = this.get(!0);
          if (Array.isArray(o)) {
            let l = 0, d = Math.abs(o[0] - a);
            for (let h = 1; h < o.length; h++) {
              const b = Math.abs(o[h] - a);
              b < d && (d = b, l = h);
            }
            this.setHandle(l, a);
          } else
            this.set(a);
        }
      };
      this.$nextTick(() => {
        this.el.querySelectorAll(".noUi-pips .noUi-value").forEach((e) => {
          e.addEventListener("click", t), e.style.cursor = "pointer", this.clickablePipsListeners.push({ el: e, func: t });
        });
      });
    },
    removeClickablePipsListeners() {
      this.clickablePipsListeners.forEach(({ el: t, func: e }) => {
        t.removeEventListener("click", e);
      }), this.clickablePipsListeners = [];
    },
    removeMergeTooltips() {
      this.mergeTooltipsActive && this.isSliderReady() && (this.el.noUiSlider.off("update.mergeTooltips"), this.mergeTooltipsActive = !1);
    },
    setMergeTooltips() {
      if (this.mergeTooltips === null)
        return;
      const t = this.el.noUiSlider.getTooltips();
      if (!t || t.every((o) => o === !1))
        return;
      this.removeMergeTooltips();
      const e = this.mergeTooltips.threshold || 15, a = this.mergeTooltips.separator || " - ";
      fr(this.el, e, a), this.mergeTooltipsActive = !0;
    }
  },
  watch: {
    modelValue: {
      handler(t) {
        this.isSliderReady() && (this.compareValues(t, this.get(!0)) || (this.settingFromWatcher = !0, this.set(t, !1), this.settingFromWatcher = !1));
      },
      deep: !0
    },
    pips: {
      handler(t) {
        this.removePips(), this.$nextTick(() => this.setPips(t));
      },
      deep: !0
    },
    disable(t) {
      t ? this.setDisable() : this.setEnable();
    },
    step(t) {
      this.scheduleUpdate({ step: t });
    },
    margin(t) {
      this.scheduleUpdate({ margin: t });
    },
    padding: {
      handler(t) {
        this.scheduleUpdate({ padding: t });
      },
      deep: !0
    },
    limit(t) {
      this.scheduleUpdate({ limit: t });
    },
    tooltips(t) {
      this.scheduleUpdate({
        tooltips: this.normalizeTooltip(t),
        pips: this.pips
      }), this.$nextTick(() => this.setMergeTooltips());
    },
    format: {
      handler() {
        this.recreate();
      },
      deep: !0
    },
    connect: {
      handler() {
        this.recreate();
      },
      deep: !0
    },
    animate() {
      this.recreate();
    },
    animationDuration() {
      this.recreate();
    },
    snap(t) {
      this.scheduleUpdate({ snap: t });
    },
    range: {
      handler(t) {
        this.scheduleUpdate({ range: t }), this.$nextTick(() => this.reset(!1));
      },
      deep: !0
    },
    orientation() {
      this.recreate();
    },
    direction() {
      this.recreate();
    },
    behaviour() {
      this.recreate();
    },
    tooltipOnClick() {
      this.tooltips || this.recreate();
    },
    mergeTooltips: {
      handler() {
        this.recreate();
      },
      deep: !0
    },
    clickablePips(t) {
      t ? this.setClickablePips() : this.removeClickablePipsListeners();
    }
  },
  emits: [
    ...We,
    "hover",
    "update",
    "update:modelValue"
  ],
  expose: [
    "destroy",
    "getSteps",
    "on",
    "off",
    "get",
    "set",
    "setHandle",
    "reset",
    "setDisable",
    "setEnable",
    "updateOptions",
    "removePips",
    "removeTooltips",
    "getPositions",
    "getTooltips",
    "getOrigins",
    "setPips",
    "getOptions"
  ]
}, pr = ["id"];
function dr(t, e, a, o, l, d) {
  return xt(), Et("div", {
    class: wt(["noUi-slider-x-wrapper", { "noUi-slider-x-toggle-tooltip": a.tooltipOnClick }])
  }, [
    Ct("div", {
      ref: "el",
      id: a.id,
      class: "noUi-slider-x"
    }, null, 8, pr)
  ], 2);
}
const gr = /* @__PURE__ */ cr(hr, [["render", dr]]);
export {
  gr as default
};
