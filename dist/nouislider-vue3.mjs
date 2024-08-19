import { openBlock as xt, createElementBlock as wt } from "vue";
var B;
(function(t) {
  t.Range = "range", t.Steps = "steps", t.Positions = "positions", t.Count = "count", t.Values = "values";
})(B || (B = {}));
var M;
(function(t) {
  t[t.None = -1] = "None", t[t.NoValue = 0] = "NoValue", t[t.LargeValue = 1] = "LargeValue", t[t.SmallValue = 2] = "SmallValue";
})(M || (M = {}));
function Et(t) {
  return te(t) && typeof t.from == "function";
}
function te(t) {
  return typeof t == "object" && typeof t.to == "function";
}
function Le(t) {
  t.parentElement.removeChild(t);
}
function Se(t) {
  return t != null;
}
function je(t) {
  t.preventDefault();
}
function yt(t) {
  return t.filter(function(e) {
    return this[e] ? !1 : this[e] = !0;
  }, {});
}
function Ct(t, e) {
  return Math.round(t / e) * e;
}
function Pt(t, e) {
  var a = t.getBoundingClientRect(), o = t.ownerDocument, l = o.documentElement, d = Be(o);
  return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (d.x = 0), e ? a.top + d.y - l.clientTop : a.left + d.x - l.clientLeft;
}
function H(t) {
  return typeof t == "number" && !isNaN(t) && isFinite(t);
}
function ze(t, e, a) {
  a > 0 && (_(t, e), setTimeout(function() {
    ee(t, e);
  }, a));
}
function Fe(t) {
  return Math.max(Math.min(t, 100), 0);
}
function re(t) {
  return Array.isArray(t) ? t : [t];
}
function At(t) {
  t = String(t);
  var e = t.split(".");
  return e.length > 1 ? e[1].length : 0;
}
function _(t, e) {
  t.classList && !/\s/.test(e) ? t.classList.add(e) : t.className += " " + e;
}
function ee(t, e) {
  t.classList && !/\s/.test(e) ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
}
function Vt(t, e) {
  return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className);
}
function Be(t) {
  var e = window.pageXOffset !== void 0, a = (t.compatMode || "") === "CSS1Compat", o = e ? window.pageXOffset : a ? t.documentElement.scrollLeft : t.body.scrollLeft, l = e ? window.pageYOffset : a ? t.documentElement.scrollTop : t.body.scrollTop;
  return {
    x: o,
    y: l
  };
}
function kt() {
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
function Dt() {
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
function Ut() {
  return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
function xe(t, e) {
  return 100 / (e - t);
}
function be(t, e, a) {
  return e * 100 / (t[a + 1] - t[a]);
}
function Ot(t, e) {
  return be(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0], 0);
}
function _t(t, e) {
  return e * (t[1] - t[0]) / 100 + t[0];
}
function Y(t, e) {
  for (var a = 1; t >= e[a]; )
    a += 1;
  return a;
}
function Mt(t, e, a) {
  if (a >= t.slice(-1)[0])
    return 100;
  var o = Y(a, t), l = t[o - 1], d = t[o], p = e[o - 1], x = e[o];
  return p + Ot([l, d], a) / xe(p, x);
}
function Rt(t, e, a) {
  if (a >= 100)
    return t.slice(-1)[0];
  var o = Y(a, e), l = t[o - 1], d = t[o], p = e[o - 1], x = e[o];
  return _t([l, d], (a - p) * xe(p, x));
}
function Ht(t, e, a, o) {
  if (o === 100)
    return o;
  var l = Y(o, t), d = t[l - 1], p = t[l];
  return a ? o - d > (p - d) / 2 ? p : d : e[l - 1] ? t[l - 1] + Ct(o - t[l - 1], e[l - 1]) : o;
}
var $e = (
  /** @class */
  function() {
    function t(e, a, o) {
      this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [o || !1], this.xNumSteps = [!1], this.snap = a;
      var l, d = [];
      for (Object.keys(e).forEach(function(p) {
        d.push([re(e[p]), p]);
      }), d.sort(function(p, x) {
        return p[0][0] - x[0][0];
      }), l = 0; l < d.length; l++)
        this.handleEntryPoint(d[l][1], d[l][0]);
      for (this.xNumSteps = this.xSteps.slice(0), l = 0; l < this.xNumSteps.length; l++)
        this.handleStepPoint(l, this.xNumSteps[l]);
    }
    return t.prototype.getDistance = function(e) {
      for (var a = [], o = 0; o < this.xNumSteps.length - 1; o++)
        a[o] = be(this.xVal, e, o);
      return a;
    }, t.prototype.getAbsoluteDistance = function(e, a, o) {
      var l = 0;
      if (e < this.xPct[this.xPct.length - 1])
        for (; e > this.xPct[l + 1]; )
          l++;
      else
        e === this.xPct[this.xPct.length - 1] && (l = this.xPct.length - 2);
      !o && e === this.xPct[l + 1] && l++, a === null && (a = []);
      var d, p = 1, x = a[l], w = 0, v = 0, k = 0, U = 0;
      for (o ? d = (e - this.xPct[l]) / (this.xPct[l + 1] - this.xPct[l]) : d = (this.xPct[l + 1] - e) / (this.xPct[l + 1] - this.xPct[l]); x > 0; )
        w = this.xPct[l + 1 + U] - this.xPct[l + U], a[l + U] * p + 100 - d * 100 > 100 ? (v = w * d, p = (x - 100 * d) / a[l + U], d = 1) : (v = a[l + U] * w / 100 * p, p = 0), o ? (k = k - v, this.xPct.length + U >= 1 && U--) : (k = k + v, this.xPct.length - U >= 1 && U++), x = a[l + U] * p;
      return e + k;
    }, t.prototype.toStepping = function(e) {
      return e = Mt(this.xVal, this.xPct, e), e;
    }, t.prototype.fromStepping = function(e) {
      return Rt(this.xVal, this.xPct, e);
    }, t.prototype.getStep = function(e) {
      return e = Ht(this.xPct, this.xSteps, this.snap, e), e;
    }, t.prototype.getDefaultStep = function(e, a, o) {
      var l = Y(e, this.xPct);
      return (e === 100 || a && e === this.xPct[l - 1]) && (l = Math.max(l - 1, 1)), (this.xVal[l] - this.xVal[l - 1]) / o;
    }, t.prototype.getNearbySteps = function(e) {
      var a = Y(e, this.xPct);
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
      var e = this.xNumSteps.map(At);
      return Math.max.apply(null, e);
    }, t.prototype.hasNoSize = function() {
      return this.xVal[0] === this.xVal[this.xVal.length - 1];
    }, t.prototype.convert = function(e) {
      return this.getStep(this.toStepping(e));
    }, t.prototype.handleEntryPoint = function(e, a) {
      var o;
      if (e === "min" ? o = 0 : e === "max" ? o = 100 : o = parseFloat(e), !H(o) || !H(a[0]))
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
        this.xSteps[e] = be([this.xVal[e], this.xVal[e + 1]], a, 0) / xe(this.xPct[e], this.xPct[e + 1]);
        var o = (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e], l = Math.ceil(Number(o.toFixed(3)) - 1), d = this.xVal[e] + this.xNumSteps[e] * l;
        this.xHighestCompleteStep[e] = d;
      }
    }, t;
  }()
), Ne = {
  to: function(t) {
    return t === void 0 ? "" : t.toFixed(2);
  },
  from: Number
}, Te = {
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
}, N = {
  tooltips: ".__tooltips",
  aria: ".__aria"
};
function Lt(t, e) {
  if (!H(e))
    throw new Error("noUiSlider: 'step' is not numeric.");
  t.singleStep = e;
}
function jt(t, e) {
  if (!H(e))
    throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
  t.keyboardPageMultiplier = e;
}
function zt(t, e) {
  if (!H(e))
    throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
  t.keyboardMultiplier = e;
}
function Ft(t, e) {
  if (!H(e))
    throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
  t.keyboardDefaultStep = e;
}
function Nt(t, e) {
  if (typeof e != "object" || Array.isArray(e))
    throw new Error("noUiSlider: 'range' is not an object.");
  if (e.min === void 0 || e.max === void 0)
    throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
  t.spectrum = new $e(e, t.snap || !1, t.singleStep);
}
function Bt(t, e) {
  if (e = re(e), !Array.isArray(e) || !e.length)
    throw new Error("noUiSlider: 'start' option is incorrect.");
  t.handles = e.length, t.start = e;
}
function $t(t, e) {
  if (typeof e != "boolean")
    throw new Error("noUiSlider: 'snap' option must be a boolean.");
  t.snap = e;
}
function Tt(t, e) {
  if (typeof e != "boolean")
    throw new Error("noUiSlider: 'animate' option must be a boolean.");
  t.animate = e;
}
function qt(t, e) {
  if (typeof e != "number")
    throw new Error("noUiSlider: 'animationDuration' option must be a number.");
  t.animationDuration = e;
}
function qe(t, e) {
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
function Kt(t, e) {
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
function Ke(t, e) {
  if (!H(e))
    throw new Error("noUiSlider: 'margin' option must be numeric.");
  e !== 0 && (t.margin = t.spectrum.getDistance(e));
}
function It(t, e) {
  if (!H(e))
    throw new Error("noUiSlider: 'limit' option must be numeric.");
  if (t.limit = t.spectrum.getDistance(e), !t.limit || t.handles < 2)
    throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
}
function Xt(t, e) {
  var a;
  if (!H(e) && !Array.isArray(e))
    throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
  if (Array.isArray(e) && !(e.length === 2 || H(e[0]) || H(e[1])))
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
function Yt(t, e) {
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
function Jt(t, e) {
  if (typeof e != "string")
    throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
  var a = e.indexOf("tap") >= 0, o = e.indexOf("drag") >= 0, l = e.indexOf("fixed") >= 0, d = e.indexOf("snap") >= 0, p = e.indexOf("hover") >= 0, x = e.indexOf("unconstrained") >= 0, w = e.indexOf("invert-connects") >= 0, v = e.indexOf("drag-all") >= 0, k = e.indexOf("smooth-steps") >= 0;
  if (l) {
    if (t.handles !== 2)
      throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
    Ke(t, t.start[1] - t.start[0]);
  }
  if (w && t.handles !== 2)
    throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");
  if (x && (t.margin || t.limit))
    throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
  t.events = {
    tap: a || d,
    drag: o,
    dragAll: v,
    smoothSteps: k,
    fixed: l,
    snap: d,
    hover: p,
    unconstrained: x,
    invertConnects: w
  };
}
function Wt(t, e) {
  if (e !== !1)
    if (e === !0 || te(e)) {
      t.tooltips = [];
      for (var a = 0; a < t.handles; a++)
        t.tooltips.push(e);
    } else {
      if (e = re(e), e.length !== t.handles)
        throw new Error("noUiSlider: must pass a formatter for all handles.");
      e.forEach(function(o) {
        if (typeof o != "boolean" && !te(o))
          throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
      }), t.tooltips = e;
    }
}
function Gt(t, e) {
  if (e.length !== t.handles)
    throw new Error("noUiSlider: must pass a attributes for all handles.");
  t.handleAttributes = e;
}
function Zt(t, e) {
  if (!te(e))
    throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
  t.ariaFormat = e;
}
function Qt(t, e) {
  if (!Et(e))
    throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
  t.format = e;
}
function er(t, e) {
  if (typeof e != "boolean")
    throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
  t.keyboardSupport = e;
}
function tr(t, e) {
  t.documentElement = e;
}
function rr(t, e) {
  if (typeof e != "string" && e !== !1)
    throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
  t.cssPrefix = e;
}
function ir(t, e) {
  if (typeof e != "object")
    throw new Error("noUiSlider: 'cssClasses' must be an object.");
  typeof t.cssPrefix == "string" ? (t.cssClasses = {}, Object.keys(e).forEach(function(a) {
    t.cssClasses[a] = t.cssPrefix + e[a];
  })) : t.cssClasses = e;
}
function Ie(t) {
  var e = {
    margin: null,
    limit: null,
    padding: null,
    animate: !0,
    animationDuration: 300,
    ariaFormat: Ne,
    format: Ne
  }, a = {
    step: { r: !1, t: Lt },
    keyboardPageMultiplier: { r: !1, t: jt },
    keyboardMultiplier: { r: !1, t: zt },
    keyboardDefaultStep: { r: !1, t: Ft },
    start: { r: !0, t: Bt },
    connect: { r: !0, t: qe },
    direction: { r: !0, t: Yt },
    snap: { r: !1, t: $t },
    animate: { r: !1, t: Tt },
    animationDuration: { r: !1, t: qt },
    range: { r: !0, t: Nt },
    orientation: { r: !1, t: Kt },
    margin: { r: !1, t: Ke },
    limit: { r: !1, t: It },
    padding: { r: !1, t: Xt },
    behaviour: { r: !0, t: Jt },
    ariaFormat: { r: !1, t: Zt },
    format: { r: !1, t: Qt },
    tooltips: { r: !1, t: Wt },
    keyboardSupport: { r: !0, t: er },
    documentElement: { r: !1, t: tr },
    cssPrefix: { r: !0, t: rr },
    cssClasses: { r: !0, t: ir },
    handleAttributes: { r: !1, t: Gt }
  }, o = {
    connect: !1,
    direction: "ltr",
    behaviour: "tap",
    orientation: "horizontal",
    keyboardSupport: !0,
    cssPrefix: "noUi-",
    cssClasses: Te,
    keyboardPageMultiplier: 5,
    keyboardMultiplier: 1,
    keyboardDefaultStep: 10
  };
  t.format && !t.ariaFormat && (t.ariaFormat = t.format), Object.keys(a).forEach(function(w) {
    if (!Se(t[w]) && o[w] === void 0) {
      if (a[w].r)
        throw new Error("noUiSlider: '" + w + "' is required.");
      return;
    }
    a[w].t(e, Se(t[w]) ? t[w] : o[w]);
  }), e.pips = t.pips;
  var l = document.createElement("div"), d = l.style.msTransform !== void 0, p = l.style.transform !== void 0;
  e.transformRule = p ? "transform" : d ? "msTransform" : "webkitTransform";
  var x = [
    ["left", "top"],
    ["right", "bottom"]
  ];
  return e.style = x[e.dir][e.ort], e;
}
function sr(t, e, a) {
  var o = kt(), l = Ut(), d = l && Dt(), p = t, x, w, v, k, U, F, g = e.spectrum, L = [], E = [], R = [], ie = 0, j = {}, K = !1, q = t.ownerDocument, J = e.documentElement || q.documentElement, W = q.body, Xe = q.dir === "rtl" || e.ort === 1 ? 0 : 100;
  function z(r, i) {
    var s = q.createElement("div");
    return i && _(s, i), r.appendChild(s), s;
  }
  function Ye(r, i) {
    var s = z(r, e.cssClasses.origin), n = z(s, e.cssClasses.handle);
    if (z(n, e.cssClasses.touchArea), n.setAttribute("data-handle", String(i)), e.keyboardSupport && (n.setAttribute("tabindex", "0"), n.addEventListener("keydown", function(f) {
      return ft(f, i);
    })), e.handleAttributes !== void 0) {
      var u = e.handleAttributes[i];
      Object.keys(u).forEach(function(f) {
        n.setAttribute(f, u[f]);
      });
    }
    return n.setAttribute("role", "slider"), n.setAttribute("aria-orientation", e.ort ? "vertical" : "horizontal"), i === 0 ? _(n, e.cssClasses.handleLower) : i === e.handles - 1 && _(n, e.cssClasses.handleUpper), s.handle = n, s;
  }
  function se(r, i) {
    return i ? z(r, e.cssClasses.connect) : !1;
  }
  function Je(r, i) {
    w = z(i, e.cssClasses.connects), v = [], k = [], k.push(se(w, r[0]));
    for (var s = 0; s < e.handles; s++)
      v.push(Ye(i, s)), R[s] = s, k.push(se(w, r[s + 1]));
  }
  function We(r) {
    _(r, e.cssClasses.target), e.dir === 0 ? _(r, e.cssClasses.ltr) : _(r, e.cssClasses.rtl), e.ort === 0 ? _(r, e.cssClasses.horizontal) : _(r, e.cssClasses.vertical);
    var i = getComputedStyle(r).direction;
    return i === "rtl" ? _(r, e.cssClasses.textDirectionRtl) : _(r, e.cssClasses.textDirectionLtr), z(r, e.cssClasses.base);
  }
  function Ge(r, i) {
    return !e.tooltips || !e.tooltips[i] ? !1 : z(r.firstChild, e.cssClasses.tooltip);
  }
  function we() {
    return p.hasAttribute("disabled");
  }
  function ae(r) {
    var i = v[r];
    return i.hasAttribute("disabled");
  }
  function Ze(r) {
    r != null ? (v[r].setAttribute("disabled", ""), v[r].handle.removeAttribute("tabindex")) : (p.setAttribute("disabled", ""), v.forEach(function(i) {
      i.handle.removeAttribute("tabindex");
    }));
  }
  function Qe(r) {
    r != null ? (v[r].removeAttribute("disabled"), v[r].handle.setAttribute("tabindex", "0")) : (p.removeAttribute("disabled"), v.forEach(function(i) {
      i.removeAttribute("disabled"), i.handle.setAttribute("tabindex", "0");
    }));
  }
  function ne() {
    F && (I("update" + N.tooltips), F.forEach(function(r) {
      r && Le(r);
    }), F = null);
  }
  function Ee() {
    ne(), F = v.map(Ge), ce("update" + N.tooltips, function(r, i, s) {
      if (!(!F || !e.tooltips) && F[i] !== !1) {
        var n = r[i];
        e.tooltips[i] !== !0 && (n = e.tooltips[i].to(s[i])), F[i].innerHTML = n;
      }
    });
  }
  function et() {
    I("update" + N.aria), ce("update" + N.aria, function(r, i, s, n, u) {
      R.forEach(function(f) {
        var h = v[f], c = G(E, f, 0, !0, !0, !0), S = G(E, f, 100, !0, !0, !0), b = u[f], y = String(e.ariaFormat.to(s[f]));
        c = g.fromStepping(c).toFixed(1), S = g.fromStepping(S).toFixed(1), b = g.fromStepping(b).toFixed(1), h.children[0].setAttribute("aria-valuemin", c), h.children[0].setAttribute("aria-valuemax", S), h.children[0].setAttribute("aria-valuenow", b), h.children[0].setAttribute("aria-valuetext", y);
      });
    });
  }
  function tt(r) {
    if (r.mode === B.Range || r.mode === B.Steps)
      return g.xVal;
    if (r.mode === B.Count) {
      if (r.values < 2)
        throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
      for (var i = r.values - 1, s = 100 / i, n = []; i--; )
        n[i] = i * s;
      return n.push(100), ye(n, r.stepped);
    }
    return r.mode === B.Positions ? ye(r.values, r.stepped) : r.mode === B.Values ? r.stepped ? r.values.map(function(u) {
      return g.fromStepping(g.getStep(g.toStepping(u)));
    }) : r.values : [];
  }
  function ye(r, i) {
    return r.map(function(s) {
      return g.fromStepping(i ? g.getStep(s) : s);
    });
  }
  function rt(r) {
    function i(b, y) {
      return Number((b + y).toFixed(7));
    }
    var s = tt(r), n = {}, u = g.xVal[0], f = g.xVal[g.xVal.length - 1], h = !1, c = !1, S = 0;
    return s = yt(s.slice().sort(function(b, y) {
      return b - y;
    })), s[0] !== u && (s.unshift(u), h = !0), s[s.length - 1] !== f && (s.push(f), c = !0), s.forEach(function(b, y) {
      var C, m, A, O = b, V = s[y + 1], D, pe, ve, ge, Me, me, Re, He = r.mode === B.Steps;
      for (He && (C = g.xNumSteps[y]), C || (C = V - O), V === void 0 && (V = O), C = Math.max(C, 1e-7), m = O; m <= V; m = i(m, C)) {
        for (D = g.toStepping(m), pe = D - S, Me = pe / (r.density || 1), me = Math.round(Me), Re = pe / me, A = 1; A <= me; A += 1)
          ve = S + A * Re, n[ve.toFixed(5)] = [g.fromStepping(ve), 0];
        ge = s.indexOf(m) > -1 ? M.LargeValue : He ? M.SmallValue : M.NoValue, !y && h && m !== V && (ge = 0), m === V && c || (n[D.toFixed(5)] = [m, ge]), S = D;
      }
    }), n;
  }
  function it(r, i, s) {
    var n, u, f = q.createElement("div"), h = (n = {}, n[M.None] = "", n[M.NoValue] = e.cssClasses.valueNormal, n[M.LargeValue] = e.cssClasses.valueLarge, n[M.SmallValue] = e.cssClasses.valueSub, n), c = (u = {}, u[M.None] = "", u[M.NoValue] = e.cssClasses.markerNormal, u[M.LargeValue] = e.cssClasses.markerLarge, u[M.SmallValue] = e.cssClasses.markerSub, u), S = [e.cssClasses.valueHorizontal, e.cssClasses.valueVertical], b = [e.cssClasses.markerHorizontal, e.cssClasses.markerVertical];
    _(f, e.cssClasses.pips), _(f, e.ort === 0 ? e.cssClasses.pipsHorizontal : e.cssClasses.pipsVertical);
    function y(m, A) {
      var O = A === e.cssClasses.value, V = O ? S : b, D = O ? h : c;
      return A + " " + V[e.ort] + " " + D[m];
    }
    function C(m, A, O) {
      if (O = i ? i(A, O) : O, O !== M.None) {
        var V = z(f, !1);
        V.className = y(O, e.cssClasses.marker), V.style[e.style] = m + "%", O > M.NoValue && (V = z(f, !1), V.className = y(O, e.cssClasses.value), V.setAttribute("data-value", String(A)), V.style[e.style] = m + "%", V.innerHTML = String(s.to(A)));
      }
    }
    return Object.keys(r).forEach(function(m) {
      C(m, r[m][0], r[m][1]);
    }), f;
  }
  function oe() {
    U && (Le(U), U = null);
  }
  function le(r) {
    oe();
    var i = rt(r), s = r.filter, n = r.format || {
      to: function(u) {
        return String(Math.round(u));
      }
    };
    return U = p.appendChild(it(i, s, n)), U;
  }
  function Ce() {
    var r = x.getBoundingClientRect(), i = "offset" + ["Width", "Height"][e.ort];
    return e.ort === 0 ? r.width || x[i] : r.height || x[i];
  }
  function $(r, i, s, n) {
    var u = function(h) {
      var c = st(h, n.pageOffset, n.target || i);
      if (!c || we() && !n.doNotReject || Vt(p, e.cssClasses.tap) && !n.doNotReject || r === o.start && c.buttons !== void 0 && c.buttons > 1 || n.hover && c.buttons)
        return !1;
      d || c.preventDefault(), c.calcPoint = c.points[e.ort], s(c, n);
    }, f = [];
    return r.split(" ").forEach(function(h) {
      i.addEventListener(h, u, d ? { passive: !0 } : !1), f.push([h, u]);
    }), f;
  }
  function st(r, i, s) {
    var n = r.type.indexOf("touch") === 0, u = r.type.indexOf("mouse") === 0, f = r.type.indexOf("pointer") === 0, h = 0, c = 0;
    if (r.type.indexOf("MSPointer") === 0 && (f = !0), r.type === "mousedown" && !r.buttons && !r.touches)
      return !1;
    if (n) {
      var S = function(C) {
        var m = C.target;
        return m === s || s.contains(m) || r.composed && r.composedPath().shift() === s;
      };
      if (r.type === "touchstart") {
        var b = Array.prototype.filter.call(r.touches, S);
        if (b.length > 1)
          return !1;
        h = b[0].pageX, c = b[0].pageY;
      } else {
        var y = Array.prototype.find.call(r.changedTouches, S);
        if (!y)
          return !1;
        h = y.pageX, c = y.pageY;
      }
    }
    return i = i || Be(q), (u || f) && (h = r.clientX + i.x, c = r.clientY + i.y), r.pageOffset = i, r.points = [h, c], r.cursor = u || f, r;
  }
  function Pe(r) {
    var i = r - Pt(x, e.ort), s = i * 100 / Ce();
    return s = Fe(s), e.dir ? 100 - s : s;
  }
  function at(r) {
    var i = 100, s = !1;
    return v.forEach(function(n, u) {
      if (!ae(u)) {
        var f = E[u], h = Math.abs(f - r), c = h === 100 && i === 100, S = h < i, b = h <= i && r > f;
        (S || b || c) && (s = u, i = h);
      }
    }), s;
  }
  function nt(r, i) {
    r.type === "mouseout" && r.target.nodeName === "HTML" && r.relatedTarget === null && ue(r, i);
  }
  function ot(r, i) {
    if (navigator.appVersion.indexOf("MSIE 9") === -1 && r.buttons === 0 && i.buttonsProperty !== 0)
      return ue(r, i);
    var s = (e.dir ? -1 : 1) * (r.calcPoint - i.startCalcPoint), n = s * 100 / i.baseSize;
    Ve(s > 0, n, i.locations, i.handleNumbers, i.connect);
  }
  function ue(r, i) {
    i.handle && (ee(i.handle, e.cssClasses.active), ie -= 1), i.listeners.forEach(function(s) {
      J.removeEventListener(s[0], s[1]);
    }), ie === 0 && (ee(p, e.cssClasses.drag), de(), r.cursor && (W.style.cursor = "", W.removeEventListener("selectstart", je))), e.events.smoothSteps && (i.handleNumbers.forEach(function(s) {
      T(s, E[s], !0, !0, !1, !1);
    }), i.handleNumbers.forEach(function(s) {
      P("update", s);
    })), i.handleNumbers.forEach(function(s) {
      P("change", s), P("set", s), P("end", s);
    });
  }
  function fe(r, i) {
    if (!i.handleNumbers.some(ae)) {
      var s;
      if (i.handleNumbers.length === 1) {
        var n = v[i.handleNumbers[0]];
        s = n.children[0], ie += 1, _(s, e.cssClasses.active);
      }
      r.stopPropagation();
      var u = [], f = $(o.move, J, ot, {
        // The event target has changed so we need to propagate the original one so that we keep
        // relying on it to extract target touches.
        target: r.target,
        handle: s,
        connect: i.connect,
        listeners: u,
        startCalcPoint: r.calcPoint,
        baseSize: Ce(),
        pageOffset: r.pageOffset,
        handleNumbers: i.handleNumbers,
        buttonsProperty: r.buttons,
        locations: E.slice()
      }), h = $(o.end, J, ue, {
        target: r.target,
        handle: s,
        listeners: u,
        doNotReject: !0,
        handleNumbers: i.handleNumbers
      }), c = $("mouseout", J, nt, {
        target: r.target,
        handle: s,
        listeners: u,
        doNotReject: !0,
        handleNumbers: i.handleNumbers
      });
      u.push.apply(u, f.concat(h, c)), r.cursor && (W.style.cursor = getComputedStyle(r.target).cursor, v.length > 1 && _(p, e.cssClasses.drag), W.addEventListener("selectstart", je, !1)), i.handleNumbers.forEach(function(S) {
        P("start", S);
      });
    }
  }
  function lt(r) {
    r.stopPropagation();
    var i = Pe(r.calcPoint), s = at(i);
    s !== !1 && (e.events.snap || ze(p, e.cssClasses.tap, e.animationDuration), T(s, i, !0, !0), de(), P("slide", s, !0), P("update", s, !0), e.events.snap ? fe(r, { handleNumbers: [s] }) : (P("change", s, !0), P("set", s, !0)));
  }
  function ut(r) {
    var i = Pe(r.calcPoint), s = g.getStep(i), n = g.fromStepping(s);
    Object.keys(j).forEach(function(u) {
      u.split(".")[0] === "hover" && j[u].forEach(function(f) {
        f.call(Q, n);
      });
    });
  }
  function ft(r, i) {
    if (we() || ae(i))
      return !1;
    var s = ["Left", "Right"], n = ["Down", "Up"], u = ["PageDown", "PageUp"], f = ["Home", "End"];
    e.dir && !e.ort ? s.reverse() : e.ort && !e.dir && (n.reverse(), u.reverse());
    var h = r.key.replace("Arrow", ""), c = h === u[0], S = h === u[1], b = h === n[0] || h === s[0] || c, y = h === n[1] || h === s[1] || S, C = h === f[0], m = h === f[1];
    if (!b && !y && !C && !m)
      return !0;
    r.preventDefault();
    var A;
    if (y || b) {
      var O = b ? 0 : 1, V = Oe(i), D = V[O];
      if (D === null)
        return !1;
      D === !1 && (D = g.getDefaultStep(E[i], b, e.keyboardDefaultStep)), S || c ? D *= e.keyboardPageMultiplier : D *= e.keyboardMultiplier, D = Math.max(D, 1e-7), D = (b ? -1 : 1) * D, A = L[i] + D;
    } else
      m ? A = e.spectrum.xVal[e.spectrum.xVal.length - 1] : A = e.spectrum.xVal[0];
    return T(i, g.toStepping(A), !0, !0), P("slide", i), P("update", i), P("change", i), P("set", i), !1;
  }
  function Ae(r) {
    r.fixed || v.forEach(function(i, s) {
      $(o.start, i.children[0], fe, {
        handleNumbers: [s]
      });
    }), r.tap && $(o.start, x, lt, {}), r.hover && $(o.move, x, ut, {
      hover: !0
    }), r.drag && k.forEach(function(i, s) {
      if (!(i === !1 || s === 0 || s === k.length - 1)) {
        var n = v[s - 1], u = v[s], f = [i], h = [n, u], c = [s - 1, s];
        _(i, e.cssClasses.draggable), r.fixed && (f.push(n.children[0]), f.push(u.children[0])), r.dragAll && (h = v, c = R), f.forEach(function(S) {
          $(o.start, S, fe, {
            handles: h,
            handleNumbers: c,
            connect: i
          });
        });
      }
    });
  }
  function ce(r, i) {
    j[r] = j[r] || [], j[r].push(i), r.split(".")[0] === "update" && v.forEach(function(s, n) {
      P("update", n);
    });
  }
  function ct(r) {
    return r === N.aria || r === N.tooltips;
  }
  function I(r) {
    var i = r && r.split(".")[0], s = i ? r.substring(i.length) : r;
    Object.keys(j).forEach(function(n) {
      var u = n.split(".")[0], f = n.substring(u.length);
      (!i || i === u) && (!s || s === f) && (!ct(f) || s === f) && delete j[n];
    });
  }
  function P(r, i, s) {
    Object.keys(j).forEach(function(n) {
      var u = n.split(".")[0];
      r === u && j[n].forEach(function(f) {
        f.call(
          // Use the slider public API as the scope ('this')
          Q,
          // Return values as array, so arg_1[arg_2] is always valid.
          L.map(e.format.to),
          // Handle index, 0 or 1
          i,
          // Un-formatted slider values
          L.slice(),
          // Event is fired by tap, true or false
          s || !1,
          // Left offset of the handle, in relation to the slider
          E.slice(),
          // add the slider public API to an accessible parameter when this is unavailable
          Q
        );
      });
    });
  }
  function G(r, i, s, n, u, f, h) {
    var c;
    return v.length > 1 && !e.events.unconstrained && (n && i > 0 && (c = g.getAbsoluteDistance(r[i - 1], e.margin, !1), s = Math.max(s, c)), u && i < v.length - 1 && (c = g.getAbsoluteDistance(r[i + 1], e.margin, !0), s = Math.min(s, c))), v.length > 1 && e.limit && (n && i > 0 && (c = g.getAbsoluteDistance(r[i - 1], e.limit, !1), s = Math.min(s, c)), u && i < v.length - 1 && (c = g.getAbsoluteDistance(r[i + 1], e.limit, !0), s = Math.max(s, c))), e.padding && (i === 0 && (c = g.getAbsoluteDistance(0, e.padding[0], !1), s = Math.max(s, c)), i === v.length - 1 && (c = g.getAbsoluteDistance(100, e.padding[1], !0), s = Math.min(s, c))), h || (s = g.getStep(s)), s = Fe(s), s === r[i] && !f ? !1 : s;
  }
  function he(r, i) {
    var s = e.ort;
    return (s ? i : r) + ", " + (s ? r : i);
  }
  function Ve(r, i, s, n, u) {
    var f = s.slice(), h = n[0], c = e.events.smoothSteps, S = [!r, r], b = [r, !r];
    n = n.slice(), r && n.reverse(), n.length > 1 ? n.forEach(function(C, m) {
      var A = G(f, C, f[C] + i, S[m], b[m], !1, c);
      A === !1 ? i = 0 : (i = A - f[C], f[C] = A);
    }) : S = b = [!0];
    var y = !1;
    n.forEach(function(C, m) {
      y = T(C, s[C] + i, S[m], b[m], !1, c) || y;
    }), y && (n.forEach(function(C) {
      P("update", C), P("slide", C);
    }), u != null && P("drag", h));
  }
  function ke(r, i) {
    return e.dir ? 100 - r - i : r;
  }
  function ht(r, i) {
    E[r] = i, L[r] = g.fromStepping(i);
    var s = ke(i, 0) - Xe, n = "translate(" + he(s + "%", "0") + ")";
    if (v[r].style[e.transformRule] = n, e.events.invertConnects && E.length > 1) {
      var u = E.every(function(f, h, c) {
        return h === 0 || f >= c[h - 1];
      });
      if (K !== !u) {
        St();
        return;
      }
    }
    X(r), X(r + 1), K && (X(r - 1), X(r + 2));
  }
  function de() {
    R.forEach(function(r) {
      var i = E[r] > 50 ? -1 : 1, s = 3 + (v.length + i * r);
      v[r].style.zIndex = String(s);
    });
  }
  function T(r, i, s, n, u, f) {
    return u || (i = G(E, r, i, s, n, !1, f)), i === !1 ? !1 : (ht(r, i), !0);
  }
  function X(r) {
    if (k[r]) {
      var i = E.slice();
      K && i.sort(function(c, S) {
        return c - S;
      });
      var s = 0, n = 100;
      r !== 0 && (s = i[r - 1]), r !== k.length - 1 && (n = i[r]);
      var u = n - s, f = "translate(" + he(ke(s, u) + "%", "0") + ")", h = "scale(" + he(u / 100, "1") + ")";
      k[r].style[e.transformRule] = f + " " + h;
    }
  }
  function De(r, i) {
    return r === null || r === !1 || r === void 0 || (typeof r == "number" && (r = String(r)), r = e.format.from(r), r !== !1 && (r = g.toStepping(r)), r === !1 || isNaN(r)) ? E[i] : r;
  }
  function Z(r, i, s) {
    var n = re(r), u = E[0] === void 0;
    i = i === void 0 ? !0 : i, e.animate && !u && ze(p, e.cssClasses.tap, e.animationDuration), R.forEach(function(c) {
      T(c, De(n[c], c), !0, !1, s);
    });
    var f = R.length === 1 ? 0 : 1;
    if (u && g.hasNoSize() && (s = !0, E[0] = 0, R.length > 1)) {
      var h = 100 / (R.length - 1);
      R.forEach(function(c) {
        E[c] = c * h;
      });
    }
    for (; f < R.length; ++f)
      R.forEach(function(c) {
        T(c, E[c], !0, !0, s);
      });
    de(), R.forEach(function(c) {
      P("update", c), n[c] !== null && i && P("set", c);
    });
  }
  function dt(r) {
    Z(e.start, r);
  }
  function pt(r, i, s, n) {
    if (r = Number(r), !(r >= 0 && r < R.length))
      throw new Error("noUiSlider: invalid handle number, got: " + r);
    T(r, De(i, r), !0, !0, n), P("update", r), s && P("set", r);
  }
  function Ue(r) {
    if (r === void 0 && (r = !1), r)
      return L.length === 1 ? L[0] : L.slice(0);
    var i = L.map(e.format.to);
    return i.length === 1 ? i[0] : i;
  }
  function vt() {
    for (I(N.aria), I(N.tooltips), Object.keys(e.cssClasses).forEach(function(r) {
      ee(p, e.cssClasses[r]);
    }); p.firstChild; )
      p.removeChild(p.firstChild);
    delete p.noUiSlider;
  }
  function Oe(r) {
    var i = E[r], s = g.getNearbySteps(i), n = L[r], u = s.thisStep.step, f = null;
    if (e.snap)
      return [
        n - s.stepBefore.startValue || null,
        s.stepAfter.startValue - n || null
      ];
    u !== !1 && n + u > s.stepAfter.startValue && (u = s.stepAfter.startValue - n), n > s.thisStep.startValue ? f = s.thisStep.step : s.stepBefore.step === !1 ? f = !1 : f = n - s.stepBefore.highestStep, i === 100 ? u = null : i === 0 && (f = null);
    var h = g.countStepDecimals();
    return u !== null && u !== !1 && (u = Number(u.toFixed(h))), f !== null && f !== !1 && (f = Number(f.toFixed(h))), [f, u];
  }
  function gt() {
    return R.map(Oe);
  }
  function mt(r, i) {
    var s = Ue(), n = [
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
    var u = Ie(a);
    n.forEach(function(f) {
      r[f] !== void 0 && (e[f] = u[f]);
    }), g = u.spectrum, e.margin = u.margin, e.limit = u.limit, e.padding = u.padding, e.pips ? le(e.pips) : oe(), e.tooltips ? Ee() : ne(), E = [], Z(Se(r.start) ? r.start : s, i), r.connect && _e();
  }
  function _e() {
    for (; w.firstChild; )
      w.removeChild(w.firstChild);
    for (var r = 0; r <= e.handles; r++)
      k[r] = se(w, e.connect[r]), X(r);
    Ae({ drag: e.events.drag, fixed: !0 });
  }
  function St() {
    K = !K, qe(
      e,
      // inverse the connect boolean array
      e.connect.map(function(r) {
        return !r;
      })
    ), _e();
  }
  function bt() {
    x = We(p), Je(e.connect, x), Ae(e.events), Z(e.start), e.pips && le(e.pips), e.tooltips && Ee(), et();
  }
  bt();
  var Q = {
    destroy: vt,
    steps: gt,
    on: ce,
    off: I,
    get: Ue,
    set: Z,
    setHandle: pt,
    reset: dt,
    disable: Ze,
    enable: Qe,
    // Exposed for unit testing, don't use this in your application.
    __moveHandles: function(r, i, s) {
      Ve(r, i, E, s);
    },
    options: a,
    updateOptions: mt,
    target: p,
    removePips: oe,
    removeTooltips: ne,
    getPositions: function() {
      return E.slice();
    },
    getTooltips: function() {
      return F;
    },
    getOrigins: function() {
      return v;
    },
    pips: le
    // Issue #594
  };
  return Q;
}
function ar(t, e) {
  if (!t || !t.nodeName)
    throw new Error("noUiSlider: create requires a single element, got: " + t);
  if (t.noUiSlider)
    throw new Error("noUiSlider: Slider was already initialized.");
  var a = Ie(e), o = sr(t, a, e);
  return t.noUiSlider = o, o;
}
const nr = {
  // Exposed for unit testing, don't use this in your application.
  __spectrum: $e,
  // A reference to the default classes, allows global changes.
  // Use the cssClasses option for changes to one slider.
  cssClasses: Te,
  create: ar
}, or = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [o, l] of e)
    a[o] = l;
  return a;
}, lr = {
  props: {
    id: {
      type: String,
      default: () => "slider-" + (Math.random() + 1).toString(36).substring(7)
    },
    start: {
      type: [Array, Number],
      validator(t) {
        return typeof t == "object" ? t.length && t.every((e) => typeof e == "number") : !0;
      }
    },
    connect: {
      type: [Array, Boolean, String],
      default: !1,
      validator(t) {
        return typeof t == "object" ? t.length && t.every((e) => typeof e == "boolean") : !0;
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
        return typeof t == "object" ? t.length && t.every((e) => typeof e == "number") : !0;
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
      type: [Array, Object, Boolean],
      default: !1
    },
    format: {
      type: Object
    },
    pips: {
      type: Object,
      default: null
    },
    pipsys: {},
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
      currentValues: null,
      events: []
    };
  },
  mounted() {
    this.create(), this.startBasicEvents();
  },
  beforeUnmount() {
    this.destroy();
  },
  methods: {
    getReference() {
      return this.$refs[this.id];
    },
    create() {
      let t = this.modelValue;
      this.start !== void 0 && this.start !== null && (t = this.start), t == null && (t = Object.values(this.range)[0]);
      let e = {
        start: t,
        connect: this.connect,
        range: this.range,
        step: this.step,
        margin: this.margin,
        padding: this.padding,
        limit: this.limit,
        direction: this.direction,
        orientation: this.orientation,
        animate: this.animate,
        handleAttributes: this.handleAttributes,
        keyboardSupport: this.keyboardSupport,
        keyboardDefaultStep: this.keyboardDefaultStep,
        keyboardPageMultiplier: this.keyboardPageMultiplier,
        keyboardMultiplier: this.keyboardMultiplier,
        behaviour: this.behaviour,
        tooltips: this.tooltips,
        pips: this.pips,
        snap: this.snap,
        cssPrefix: this.cssPrefix,
        cssClasses: this.cssClasses,
        animationDuration: this.animationDuration
      };
      this.ariaFormat && (e.ariaFormat = this.ariaFormat), this.format && (e.format = this.format), this.pipsys != null && !e.pips && (e.pips = {
        mode: "steps"
      }), nr.create(this.getReference(), e);
    },
    startBasicEvents() {
      this.startUpdate(), this.startStart(), this.startSlide(), this.startDrag(), this.startChange(), this.startSet(), this.startEnd();
    },
    offAllEvents() {
      let t = this.events.length;
      for (let e = 0; e < t; e++)
        this.off(this.events.pop());
    },
    // Events
    startUpdate() {
      this.on("update", (t, e, a, o, l) => {
        this.$emit("update", { values: t, handle: e, unencoded: a, tap: o, positions: l });
        let d = t.length > 1 ? t : t[0];
        this.currentValues = d, this.$emit("update:modelValue", d);
      });
    },
    startStart() {
      this.on("start", (t, e, a, o, l) => {
        this.$emit("start", { values: t, handle: e, unencoded: a, tap: o, positions: l });
      });
    },
    startSlide() {
      this.on("slide", (t, e, a, o, l) => {
        this.$emit("slide", { values: t, handle: e, unencoded: a, tap: o, positions: l });
      });
    },
    startDrag() {
      this.on("drag", (t, e, a, o, l) => {
        this.$emit("drag", { values: t, handle: e, unencoded: a, tap: o, positions: l });
      });
    },
    startChange() {
      this.on("change", (t, e, a, o, l) => {
        this.$emit("change", { values: t, handle: e, unencoded: a, tap: o, positions: l });
      });
    },
    startSet() {
      this.on("set", (t, e, a, o, l) => {
        this.$emit("set", { values: t, handle: e, unencoded: a, tap: o, positions: l });
      });
    },
    startEnd() {
      this.on("end", (t, e, a, o, l) => {
        this.$emit("end", { values: t, handle: e, unencoded: a, tap: o, positions: l });
      });
    },
    compareValues(t, e) {
      return t = JSON.stringify(t), e = JSON.stringify(e), t == e;
    },
    // Public methods
    destroy() {
      this.offAllEvents(), this.getReference().noUiSlider.destroy();
    },
    getSteps() {
      return this.getReference().noUiSlider.steps();
    },
    on(t, e) {
      this.events.push(t), this.getReference().noUiSlider.on(t, e);
    },
    off(t) {
      this.getReference().noUiSlider.off(t);
    },
    get(t) {
      return this.getReference().noUiSlider.get(t);
    },
    set(t, e, a) {
      this.getReference().noUiSlider.set(t, e, a);
    },
    setHandle(t, e, a, o) {
      this.getReference().noUiSlider.setHandle(t, e, a, o);
    },
    reset(t) {
      this.getReference().noUiSlider.reset(t);
    },
    setDisable(t) {
      this.getReference().noUiSlider.disable(t);
    },
    setEnable(t) {
      this.getReference().noUiSlider.enable(t);
    },
    updateOptions(t, e) {
      this.getReference().noUiSlider.updateOptions(t, e);
    },
    removePips() {
      this.getReference().noUiSlider.removePips();
    },
    removeTooltips() {
      this.getReference().noUiSlider.removeTooltips();
    },
    getPositions() {
      return this.getReference().noUiSlider.getPositions();
    },
    getTooltips() {
      return this.getReference().noUiSlider.getTooltips();
    },
    getOrigins() {
      return this.getReference().noUiSlider.getOrigins();
    },
    setPips(t) {
      return this.getReference().noUiSlider.pips(t);
    }
  },
  watch: {
    currentValues(t) {
      this.compareValues(t, this.get()) || this.set(t, !1);
    },
    modelValue: {
      handler(t) {
        this.compareValues(t, this.get()) || this.set(t, !1);
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
      this.updateOptions({
        step: t
      });
    },
    margin(t) {
      this.updateOptions({
        margin: t
      });
    },
    padding: {
      handler(t) {
        this.updateOptions({
          padding: t
        });
      },
      deep: !0
    },
    limit(t) {
      this.updateOptions({
        limit: t
      });
    },
    tooltips(t) {
      this.updateOptions({
        tooltips: t
      });
    },
    format: {
      handler(t) {
        this.updateOptions({
          format: t
        });
      },
      deep: !0
    },
    range: {
      handler(t) {
        this.updateOptions({
          range: t
        }), this.$nextTick(() => this.reset());
      },
      deep: !0
    }
  },
  emits: [
    "update",
    "start",
    "slide",
    "drag",
    "change",
    "set",
    "end",
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
    "setPips"
  ]
}, ur = ["id"];
function fr(t, e, a, o, l, d) {
  return xt(), wt("div", {
    id: a.id,
    ref: a.id,
    class: "slider-ui"
  }, null, 8, ur);
}
const hr = /* @__PURE__ */ or(lr, [["render", fr]]);
export {
  hr as default
};
