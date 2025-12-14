var Su = {};
/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Te = Su.NODE_ENV !== "production" ? Object.freeze({}) : {}, Si = Su.NODE_ENV !== "production" ? Object.freeze([]) : [], qe = () => {
}, zf = () => !1, vo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Go = (e) => e.startsWith("onUpdate:"), Fe = Object.assign, Hr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Uf = Object.prototype.hasOwnProperty, Se = (e, t) => Uf.call(e, t), te = Array.isArray, Zn = (e) => ys(e) === "[object Map]", Eu = (e) => ys(e) === "[object Set]", re = (e) => typeof e == "function", Me = (e) => typeof e == "string", An = (e) => typeof e == "symbol", xe = (e) => e !== null && typeof e == "object", jr = (e) => (xe(e) || re(e)) && re(e.then) && re(e.catch), Cu = Object.prototype.toString, ys = (e) => Cu.call(e), zr = (e) => ys(e).slice(8, -1), ku = (e) => ys(e) === "[object Object]", Ur = (e) => Me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gi = /* @__PURE__ */ vn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Wf = /* @__PURE__ */ vn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), bs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Kf = /-(\w)/g, tt = bs(
  (e) => e.replace(Kf, (t, n) => n ? n.toUpperCase() : "")
), Gf = /\B([A-Z])/g, Dn = bs(
  (e) => e.replace(Gf, "-$1").toLowerCase()
), Dt = bs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Wn = bs(
  (e) => e ? `on${Dt(e)}` : ""
), Tn = (e, t) => !Object.is(e, t), Fi = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Yo = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Yf = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, qf = (e) => {
  const t = Me(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Hl;
const go = () => Hl || (Hl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Qi(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], o = Me(i) ? Qf(i) : Qi(i);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (Me(e) || xe(e))
    return e;
}
const Zf = /;(?![^(]*\))/g, Xf = /:([^]+)/, Jf = /\/\*[^]*?\*\//g;
function Qf(e) {
  const t = {};
  return e.replace(Jf, "").split(Zf).forEach((n) => {
    if (n) {
      const i = n.split(Xf);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function eo(e) {
  let t = "";
  if (Me(e))
    t = e;
  else if (te(e))
    for (let n = 0; n < e.length; n++) {
      const i = eo(e[n]);
      i && (t += i + " ");
    }
  else if (xe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const em = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", tm = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", nm = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", im = /* @__PURE__ */ vn(em), om = /* @__PURE__ */ vn(tm), sm = /* @__PURE__ */ vn(nm), rm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", lm = /* @__PURE__ */ vn(rm);
function Nu(e) {
  return !!e || e === "";
}
const xu = (e) => !!(e && e.__v_isRef === !0), ft = (e) => Me(e) ? e : e == null ? "" : te(e) || xe(e) && (e.toString === Cu || !re(e.toString)) ? xu(e) ? ft(e.value) : JSON.stringify(e, Vu, 2) : String(e), Vu = (e, t) => xu(t) ? Vu(e, t.value) : Zn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, o], s) => (n[Ls(i, s) + " =>"] = o, n),
    {}
  )
} : Eu(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ls(n))
} : An(t) ? Ls(t) : xe(t) && !te(t) && !ku(t) ? String(t) : t, Ls = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    An(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var De = {};
function Pt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let dt;
class Ou {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = dt, !t && dt && (this.index = (dt.scopes || (dt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = dt;
      try {
        return dt = this, t();
      } finally {
        dt = n;
      }
    } else De.NODE_ENV !== "production" && Pt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    dt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    dt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Wr(e) {
  return new Ou(e);
}
function am() {
  return dt;
}
function zt(e, t = !1) {
  dt ? dt.cleanups.push(e) : De.NODE_ENV !== "production" && !t && Pt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Oe;
const Bs = /* @__PURE__ */ new WeakSet();
class Tu {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, dt && dt.active && dt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Bs.has(this) && (Bs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Pu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, jl(this), Au(this);
    const t = Oe, n = Bt;
    Oe = this, Bt = !0;
    try {
      return this.fn();
    } finally {
      De.NODE_ENV !== "production" && Oe !== this && Pt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Iu(this), Oe = t, Bt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Yr(t);
      this.deps = this.depsTail = void 0, jl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Bs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ar(this) && this.run();
  }
  get dirty() {
    return ar(this);
  }
}
let Du = 0, Yi, qi;
function Pu(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qi, qi = e;
    return;
  }
  e.next = Yi, Yi = e;
}
function Kr() {
  Du++;
}
function Gr() {
  if (--Du > 0)
    return;
  if (qi) {
    let t = qi;
    for (qi = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Yi; ) {
    let t = Yi;
    for (Yi = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Au(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Iu(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const o = i.prevDep;
    i.version === -1 ? (i === n && (n = o), Yr(i), um(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = o;
  }
  e.deps = t, e.depsTail = n;
}
function ar(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($u(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $u(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === to))
    return;
  e.globalVersion = to;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !ar(e)) {
    e.flags &= -3;
    return;
  }
  const n = Oe, i = Bt;
  Oe = e, Bt = !0;
  try {
    Au(e);
    const o = e.fn(e._value);
    (t.version === 0 || Tn(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Oe = n, Bt = i, Iu(e), e.flags &= -3;
  }
}
function Yr(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: o } = e;
  if (i && (i.nextSub = o, e.prevSub = void 0), o && (o.prevSub = i, e.nextSub = void 0), De.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Yr(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function um(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Bt = !0;
const Mu = [];
function gn() {
  Mu.push(Bt), Bt = !1;
}
function hn() {
  const e = Mu.pop();
  Bt = e === void 0 ? !0 : e;
}
function jl(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Oe;
    Oe = void 0;
    try {
      t();
    } finally {
      Oe = n;
    }
  }
}
let to = 0;
class cm {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qr {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, De.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Oe || !Bt || Oe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Oe)
      n = this.activeLink = new cm(Oe, this), Oe.deps ? (n.prevDep = Oe.depsTail, Oe.depsTail.nextDep = n, Oe.depsTail = n) : Oe.deps = Oe.depsTail = n, Fu(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Oe.depsTail, n.nextDep = void 0, Oe.depsTail.nextDep = n, Oe.depsTail = n, Oe.deps === n && (Oe.deps = i);
    }
    return De.NODE_ENV !== "production" && Oe.onTrack && Oe.onTrack(
      Fe(
        {
          effect: Oe
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, to++, this.notify(t);
  }
  notify(t) {
    Kr();
    try {
      if (De.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Fe(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Gr();
    }
  }
}
function Fu(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Fu(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), De.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const qo = /* @__PURE__ */ new WeakMap(), Xn = Symbol(
  De.NODE_ENV !== "production" ? "Object iterate" : ""
), ur = Symbol(
  De.NODE_ENV !== "production" ? "Map keys iterate" : ""
), no = Symbol(
  De.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Ye(e, t, n) {
  if (Bt && Oe) {
    let i = qo.get(e);
    i || qo.set(e, i = /* @__PURE__ */ new Map());
    let o = i.get(n);
    o || (i.set(n, o = new qr()), o.map = i, o.key = n), De.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function Gt(e, t, n, i, o, s) {
  const r = qo.get(e);
  if (!r) {
    to++;
    return;
  }
  const l = (a) => {
    a && (De.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: i,
      oldValue: o,
      oldTarget: s
    }) : a.trigger());
  };
  if (Kr(), t === "clear")
    r.forEach(l);
  else {
    const a = te(e), d = a && Ur(n);
    if (a && n === "length") {
      const u = Number(i);
      r.forEach((c, m) => {
        (m === "length" || m === no || !An(m) && m >= u) && l(c);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), d && l(r.get(no)), t) {
        case "add":
          a ? d && l(r.get("length")) : (l(r.get(Xn)), Zn(e) && l(r.get(ur)));
          break;
        case "delete":
          a || (l(r.get(Xn)), Zn(e) && l(r.get(ur)));
          break;
        case "set":
          Zn(e) && l(r.get(Xn));
          break;
      }
  }
  Gr();
}
function dm(e, t) {
  const n = qo.get(e);
  return n && n.get(t);
}
function mi(e) {
  const t = J(e);
  return t === e ? t : (Ye(t, "iterate", no), vt(e) ? t : t.map(st));
}
function _s(e) {
  return Ye(e = J(e), "iterate", no), e;
}
const fm = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rs(this, Symbol.iterator, st);
  },
  concat(...e) {
    return mi(this).concat(
      ...e.map((t) => te(t) ? mi(t) : t)
    );
  },
  entries() {
    return Rs(this, "entries", (e) => (e[1] = st(e[1]), e));
  },
  every(e, t) {
    return nn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return nn(this, "filter", e, t, (n) => n.map(st), arguments);
  },
  find(e, t) {
    return nn(this, "find", e, t, st, arguments);
  },
  findIndex(e, t) {
    return nn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return nn(this, "findLast", e, t, st, arguments);
  },
  findLastIndex(e, t) {
    return nn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return nn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Hs(this, "includes", e);
  },
  indexOf(...e) {
    return Hs(this, "indexOf", e);
  },
  join(e) {
    return mi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Hs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return nn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Li(this, "pop");
  },
  push(...e) {
    return Li(this, "push", e);
  },
  reduce(e, ...t) {
    return zl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return zl(this, "reduceRight", e, t);
  },
  shift() {
    return Li(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return nn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Li(this, "splice", e);
  },
  toReversed() {
    return mi(this).toReversed();
  },
  toSorted(e) {
    return mi(this).toSorted(e);
  },
  toSpliced(...e) {
    return mi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Li(this, "unshift", e);
  },
  values() {
    return Rs(this, "values", st);
  }
};
function Rs(e, t, n) {
  const i = _s(e), o = i[t]();
  return i !== e && !vt(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.value && (s.value = n(s.value)), s;
  }), o;
}
const mm = Array.prototype;
function nn(e, t, n, i, o, s) {
  const r = _s(e), l = r !== e && !vt(e), a = r[t];
  if (a !== mm[t]) {
    const c = a.apply(e, s);
    return l ? st(c) : c;
  }
  let d = n;
  r !== e && (l ? d = function(c, m) {
    return n.call(this, st(c), m, e);
  } : n.length > 2 && (d = function(c, m) {
    return n.call(this, c, m, e);
  }));
  const u = a.call(r, d, i);
  return l && o ? o(u) : u;
}
function zl(e, t, n, i) {
  const o = _s(e);
  let s = n;
  return o !== e && (vt(e) ? n.length > 3 && (s = function(r, l, a) {
    return n.call(this, r, l, a, e);
  }) : s = function(r, l, a) {
    return n.call(this, r, st(l), a, e);
  }), o[t](s, ...i);
}
function Hs(e, t, n) {
  const i = J(e);
  Ye(i, "iterate", no);
  const o = i[t](...n);
  return (o === -1 || o === !1) && io(n[0]) ? (n[0] = J(n[0]), i[t](...n)) : o;
}
function Li(e, t, n = []) {
  gn(), Kr();
  const i = J(e)[t].apply(e, n);
  return Gr(), hn(), i;
}
const vm = /* @__PURE__ */ vn("__proto__,__v_isRef,__isVue"), Lu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(An)
);
function gm(e) {
  An(e) || (e = String(e));
  const t = J(this);
  return Ye(t, "has", e), t.hasOwnProperty(e);
}
class Bu {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    const o = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return i === (o ? s ? Wu : Uu : s ? zu : ju).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const r = te(t);
    if (!o) {
      let a;
      if (r && (a = fm[n]))
        return a;
      if (n === "hasOwnProperty")
        return gm;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ae(t) ? t : i
    );
    return (An(n) ? Lu.has(n) : vm(n)) || (o || Ye(t, "get", n), s) ? l : Ae(l) ? r && Ur(n) ? l : l.value : xe(l) ? o ? ho(l) : et(l) : l;
  }
}
class Ru extends Bu {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, o) {
    let s = t[n];
    if (!this._isShallow) {
      const a = mn(s);
      if (!vt(i) && !mn(i) && (s = J(s), i = J(i)), !te(t) && Ae(s) && !Ae(i))
        return a ? !1 : (s.value = i, !0);
    }
    const r = te(t) && Ur(n) ? Number(n) < t.length : Se(t, n), l = Reflect.set(
      t,
      n,
      i,
      Ae(t) ? t : o
    );
    return t === J(o) && (r ? Tn(i, s) && Gt(t, "set", n, i, s) : Gt(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Se(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && i && Gt(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!An(n) || !Lu.has(n)) && Ye(t, "has", n), i;
  }
  ownKeys(t) {
    return Ye(
      t,
      "iterate",
      te(t) ? "length" : Xn
    ), Reflect.ownKeys(t);
  }
}
class Hu extends Bu {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return De.NODE_ENV !== "production" && Pt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return De.NODE_ENV !== "production" && Pt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const hm = /* @__PURE__ */ new Ru(), pm = /* @__PURE__ */ new Hu(), ym = /* @__PURE__ */ new Ru(!0), bm = /* @__PURE__ */ new Hu(!0), cr = (e) => e, Vo = (e) => Reflect.getPrototypeOf(e);
function _m(e, t, n) {
  return function(...i) {
    const o = this.__v_raw, s = J(o), r = Zn(s), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, d = o[e](...i), u = n ? cr : t ? dr : st;
    return !t && Ye(
      s,
      "iterate",
      a ? ur : Xn
    ), {
      // iterator protocol
      next() {
        const { value: c, done: m } = d.next();
        return m ? { value: c, done: m } : {
          value: l ? [u(c[0]), u(c[1])] : u(c),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Oo(e) {
  return function(...t) {
    if (De.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Pt(
        `${Dt(e)} operation ${n}failed: target is readonly.`,
        J(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function wm(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, r = J(s), l = J(o);
      e || (Tn(o, l) && Ye(r, "get", o), Ye(r, "get", l));
      const { has: a } = Vo(r), d = t ? cr : e ? dr : st;
      if (a.call(r, o))
        return d(s.get(o));
      if (a.call(r, l))
        return d(s.get(l));
      s !== r && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Ye(J(o), "iterate", Xn), Reflect.get(o, "size", o);
    },
    has(o) {
      const s = this.__v_raw, r = J(s), l = J(o);
      return e || (Tn(o, l) && Ye(r, "has", o), Ye(r, "has", l)), o === l ? s.has(o) : s.has(o) || s.has(l);
    },
    forEach(o, s) {
      const r = this, l = r.__v_raw, a = J(l), d = t ? cr : e ? dr : st;
      return !e && Ye(a, "iterate", Xn), l.forEach((u, c) => o.call(s, d(u), d(c), r));
    }
  };
  return Fe(
    n,
    e ? {
      add: Oo("add"),
      set: Oo("set"),
      delete: Oo("delete"),
      clear: Oo("clear")
    } : {
      add(o) {
        !t && !vt(o) && !mn(o) && (o = J(o));
        const s = J(this);
        return Vo(s).has.call(s, o) || (s.add(o), Gt(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !vt(s) && !mn(s) && (s = J(s));
        const r = J(this), { has: l, get: a } = Vo(r);
        let d = l.call(r, o);
        d ? De.NODE_ENV !== "production" && Ul(r, l, o) : (o = J(o), d = l.call(r, o));
        const u = a.call(r, o);
        return r.set(o, s), d ? Tn(s, u) && Gt(r, "set", o, s, u) : Gt(r, "add", o, s), this;
      },
      delete(o) {
        const s = J(this), { has: r, get: l } = Vo(s);
        let a = r.call(s, o);
        a ? De.NODE_ENV !== "production" && Ul(s, r, o) : (o = J(o), a = r.call(s, o));
        const d = l ? l.call(s, o) : void 0, u = s.delete(o);
        return a && Gt(s, "delete", o, void 0, d), u;
      },
      clear() {
        const o = J(this), s = o.size !== 0, r = De.NODE_ENV !== "production" ? Zn(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return s && Gt(
          o,
          "clear",
          void 0,
          void 0,
          r
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = _m(o, e, t);
  }), n;
}
function ws(e, t) {
  const n = wm(e, t);
  return (i, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? i : Reflect.get(
    Se(n, o) && o in i ? n : i,
    o,
    s
  );
}
const Sm = {
  get: /* @__PURE__ */ ws(!1, !1)
}, Em = {
  get: /* @__PURE__ */ ws(!1, !0)
}, Cm = {
  get: /* @__PURE__ */ ws(!0, !1)
}, km = {
  get: /* @__PURE__ */ ws(!0, !0)
};
function Ul(e, t, n) {
  const i = J(n);
  if (i !== n && t.call(e, i)) {
    const o = zr(e);
    Pt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ju = /* @__PURE__ */ new WeakMap(), zu = /* @__PURE__ */ new WeakMap(), Uu = /* @__PURE__ */ new WeakMap(), Wu = /* @__PURE__ */ new WeakMap();
function Nm(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function xm(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Nm(zr(e));
}
function et(e) {
  return mn(e) ? e : Ss(
    e,
    !1,
    hm,
    Sm,
    ju
  );
}
function Vm(e) {
  return Ss(
    e,
    !1,
    ym,
    Em,
    zu
  );
}
function ho(e) {
  return Ss(
    e,
    !0,
    pm,
    Cm,
    Uu
  );
}
function Zt(e) {
  return Ss(
    e,
    !0,
    bm,
    km,
    Wu
  );
}
function Ss(e, t, n, i, o) {
  if (!xe(e))
    return De.NODE_ENV !== "production" && Pt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const r = xm(e);
  if (r === 0)
    return e;
  const l = new Proxy(
    e,
    r === 2 ? i : n
  );
  return o.set(e, l), l;
}
function Jn(e) {
  return mn(e) ? Jn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function mn(e) {
  return !!(e && e.__v_isReadonly);
}
function vt(e) {
  return !!(e && e.__v_isShallow);
}
function io(e) {
  return e ? !!e.__v_raw : !1;
}
function J(e) {
  const t = e && e.__v_raw;
  return t ? J(t) : e;
}
function Ku(e) {
  return !Se(e, "__v_skip") && Object.isExtensible(e) && Yo(e, "__v_skip", !0), e;
}
const st = (e) => xe(e) ? et(e) : e, dr = (e) => xe(e) ? ho(e) : e;
function Ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ue(e) {
  return Gu(e, !1);
}
function he(e) {
  return Gu(e, !0);
}
function Gu(e, t) {
  return Ae(e) ? e : new Om(e, t);
}
class Om {
  constructor(t, n) {
    this.dep = new qr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : J(t), this._value = n ? t : st(t), this.__v_isShallow = n;
  }
  get value() {
    return De.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || vt(t) || mn(t);
    t = i ? t : J(t), Tn(t, n) && (this._rawValue = t, this._value = i ? t : st(t), De.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Xt(e) {
  return Ae(e) ? e.value : e;
}
const Tm = {
  get: (e, t, n) => t === "__v_raw" ? e : Xt(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const o = e[t];
    return Ae(o) && !Ae(n) ? (o.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Yu(e) {
  return Jn(e) ? e : new Proxy(e, Tm);
}
function Zr(e) {
  De.NODE_ENV !== "production" && !io(e) && Pt("toRefs() expects a reactive object but received a plain one.");
  const t = te(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = qu(e, n);
  return t;
}
class Dm {
  constructor(t, n, i) {
    this._object = t, this._key = n, this._defaultValue = i, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return dm(J(this._object), this._key);
  }
}
class Pm {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function oe(e, t, n) {
  return Ae(e) ? e : re(e) ? new Pm(e) : xe(e) && arguments.length > 1 ? qu(e, t, n) : ue(e);
}
function qu(e, t, n) {
  const i = e[t];
  return Ae(i) ? i : new Dm(e, t, n);
}
class Am {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = to - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Oe !== this)
      return Pu(this, !0), !0;
  }
  get value() {
    const t = De.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return $u(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : De.NODE_ENV !== "production" && Pt("Write operation failed: computed value is readonly");
  }
}
function Im(e, t, n = !1) {
  let i, o;
  re(e) ? i = e : (i = e.get, o = e.set);
  const s = new Am(i, o, n);
  return De.NODE_ENV !== "production" && t && !n && (s.onTrack = t.onTrack, s.onTrigger = t.onTrigger), s;
}
const To = {}, Zo = /* @__PURE__ */ new WeakMap();
let Kn;
function $m(e, t = !1, n = Kn) {
  if (n) {
    let i = Zo.get(n);
    i || Zo.set(n, i = []), i.push(e);
  } else De.NODE_ENV !== "production" && !t && Pt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Mm(e, t, n = Te) {
  const { immediate: i, deep: o, once: s, scheduler: r, augmentJob: l, call: a } = n, d = (x) => {
    (n.onWarn || Pt)(
      "Invalid watch source: ",
      x,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (x) => o ? x : vt(x) || o === !1 || o === 0 ? un(x, 1) : un(x);
  let c, m, v, g, h = !1, w = !1;
  if (Ae(e) ? (m = () => e.value, h = vt(e)) : Jn(e) ? (m = () => u(e), h = !0) : te(e) ? (w = !0, h = e.some((x) => Jn(x) || vt(x)), m = () => e.map((x) => {
    if (Ae(x))
      return x.value;
    if (Jn(x))
      return u(x);
    if (re(x))
      return a ? a(x, 2) : x();
    De.NODE_ENV !== "production" && d(x);
  })) : re(e) ? t ? m = a ? () => a(e, 2) : e : m = () => {
    if (v) {
      gn();
      try {
        v();
      } finally {
        hn();
      }
    }
    const x = Kn;
    Kn = c;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      Kn = x;
    }
  } : (m = qe, De.NODE_ENV !== "production" && d(e)), t && o) {
    const x = m, N = o === !0 ? 1 / 0 : o;
    m = () => un(x(), N);
  }
  const k = am(), O = () => {
    c.stop(), k && Hr(k.effects, c);
  };
  if (s && t) {
    const x = t;
    t = (...N) => {
      x(...N), O();
    };
  }
  let P = w ? new Array(e.length).fill(To) : To;
  const M = (x) => {
    if (!(!(c.flags & 1) || !c.dirty && !x))
      if (t) {
        const N = c.run();
        if (o || h || (w ? N.some(($, C) => Tn($, P[C])) : Tn(N, P))) {
          v && v();
          const $ = Kn;
          Kn = c;
          try {
            const C = [
              N,
              // pass undefined as the old value when it's changed for the first time
              P === To ? void 0 : w && P[0] === To ? [] : P,
              g
            ];
            a ? a(t, 3, C) : (
              // @ts-expect-error
              t(...C)
            ), P = N;
          } finally {
            Kn = $;
          }
        }
      } else
        c.run();
  };
  return l && l(M), c = new Tu(m), c.scheduler = r ? () => r(M, !1) : M, g = (x) => $m(x, !1, c), v = c.onStop = () => {
    const x = Zo.get(c);
    if (x) {
      if (a)
        a(x, 4);
      else
        for (const N of x) N();
      Zo.delete(c);
    }
  }, De.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? i ? M(!0) : P = c.run() : r ? r(M.bind(null, !0), !0) : c.run(), O.pause = c.pause.bind(c), O.resume = c.resume.bind(c), O.stop = O, O;
}
function un(e, t = 1 / 0, n) {
  if (t <= 0 || !xe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ae(e))
    un(e.value, t, n);
  else if (te(e))
    for (let i = 0; i < e.length; i++)
      un(e[i], t, n);
  else if (Eu(e) || Zn(e))
    e.forEach((i) => {
      un(i, t, n);
    });
  else if (ku(e)) {
    for (const i in e)
      un(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && un(e[i], t, n);
  }
  return e;
}
var _ = {};
const Qn = [];
function Fo(e) {
  Qn.push(e);
}
function Lo() {
  Qn.pop();
}
let js = !1;
function j(e, ...t) {
  if (js) return;
  js = !0, gn();
  const n = Qn.length ? Qn[Qn.length - 1].component : null, i = n && n.appContext.config.warnHandler, o = Fm();
  if (i)
    Pi(
      i,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var r, l;
          return (l = (r = s.toString) == null ? void 0 : r.call(s)) != null ? l : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: s }) => `at <${Vs(n, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...Lm(o)), console.warn(...s);
  }
  hn(), js = !1;
}
function Fm() {
  let e = Qn[Qn.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const i = e.component && e.component.parent;
    e = i && i.vnode;
  }
  return t;
}
function Lm(e) {
  const t = [];
  return e.forEach((n, i) => {
    t.push(...i === 0 ? [] : [`
`], ...Bm(n));
  }), t;
}
function Bm({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", i = e.component ? e.component.parent == null : !1, o = ` at <${Vs(
    e.component,
    e.type,
    i
  )}`, s = ">" + n;
  return e.props ? [o, ...Rm(e.props), s] : [o + s];
}
function Rm(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((i) => {
    t.push(...Zu(i, e[i]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Zu(e, t, n) {
  return Me(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ae(t) ? (t = Zu(e, J(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : re(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = J(t), n ? t : [`${e}=`, t]);
}
function Hm(e, t) {
  _.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? j(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && j(`${t} is NaN - the duration expression might be incorrect.`));
}
const Xr = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Pi(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (o) {
    po(o, t, n);
  }
}
function Rt(e, t, n, i) {
  if (re(e)) {
    const o = Pi(e, t, n, i);
    return o && jr(o) && o.catch((s) => {
      po(s, t, n);
    }), o;
  }
  if (te(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(Rt(e[s], t, n, i));
    return o;
  } else _.NODE_ENV !== "production" && j(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function po(e, t, n, i = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: r } = t && t.appContext.config || Te;
  if (t) {
    let l = t.parent;
    const a = t.proxy, d = _.NODE_ENV !== "production" ? Xr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let c = 0; c < u.length; c++)
          if (u[c](e, a, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      gn(), Pi(s, null, 10, [
        e,
        a,
        d
      ]), hn();
      return;
    }
  }
  jm(e, n, o, i, r);
}
function jm(e, t, n, i = !0, o = !1) {
  if (_.NODE_ENV !== "production") {
    const s = Xr[t];
    if (n && Fo(n), j(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Lo(), i)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const mt = [];
let Kt = -1;
const Ei = [];
let Nn = null, hi = 0;
const Xu = /* @__PURE__ */ Promise.resolve();
let Xo = null;
const zm = 100;
function At(e) {
  const t = Xo || Xu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Um(e) {
  let t = Kt + 1, n = mt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, o = mt[i], s = oo(o);
    s < e || s === e && o.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Es(e) {
  if (!(e.flags & 1)) {
    const t = oo(e), n = mt[mt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= oo(n) ? mt.push(e) : mt.splice(Um(t), 0, e), e.flags |= 1, Ju();
  }
}
function Ju() {
  Xo || (Xo = Xu.then(tc));
}
function Qu(e) {
  te(e) ? Ei.push(...e) : Nn && e.id === -1 ? Nn.splice(hi + 1, 0, e) : e.flags & 1 || (Ei.push(e), e.flags |= 1), Ju();
}
function Wl(e, t, n = Kt + 1) {
  for (_.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < mt.length; n++) {
    const i = mt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid || _.NODE_ENV !== "production" && Jr(t, i))
        continue;
      mt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function ec(e) {
  if (Ei.length) {
    const t = [...new Set(Ei)].sort(
      (n, i) => oo(n) - oo(i)
    );
    if (Ei.length = 0, Nn) {
      Nn.push(...t);
      return;
    }
    for (Nn = t, _.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), hi = 0; hi < Nn.length; hi++) {
      const n = Nn[hi];
      _.NODE_ENV !== "production" && Jr(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Nn = null, hi = 0;
  }
}
const oo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function tc(e) {
  _.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = _.NODE_ENV !== "production" ? (n) => Jr(e, n) : qe;
  try {
    for (Kt = 0; Kt < mt.length; Kt++) {
      const n = mt[Kt];
      if (n && !(n.flags & 8)) {
        if (_.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Pi(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Kt < mt.length; Kt++) {
      const n = mt[Kt];
      n && (n.flags &= -2);
    }
    Kt = -1, mt.length = 0, ec(e), Xo = null, (mt.length || Ei.length) && tc(e);
  }
}
function Jr(e, t) {
  const n = e.get(t) || 0;
  if (n > zm) {
    const i = t.i, o = i && ul(i.type);
    return po(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Lt = !1;
const Bo = /* @__PURE__ */ new Map();
_.NODE_ENV !== "production" && (go().__VUE_HMR_RUNTIME__ = {
  createRecord: zs(nc),
  rerender: zs(Gm),
  reload: zs(Ym)
});
const ri = /* @__PURE__ */ new Map();
function Wm(e) {
  const t = e.type.__hmrId;
  let n = ri.get(t);
  n || (nc(t, e.type), n = ri.get(t)), n.instances.add(e);
}
function Km(e) {
  ri.get(e.type.__hmrId).instances.delete(e);
}
function nc(e, t) {
  return ri.has(e) ? !1 : (ri.set(e, {
    initialDef: Jo(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Jo(e) {
  return Wc(e) ? e.__vccOpts : e;
}
function Gm(e, t) {
  const n = ri.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((i) => {
    t && (i.render = t, Jo(i.type).render = t), i.renderCache = [], Lt = !0, i.update(), Lt = !1;
  }));
}
function Ym(e, t) {
  const n = ri.get(e);
  if (!n) return;
  t = Jo(t), Kl(n.initialDef, t);
  const i = [...n.instances];
  for (let o = 0; o < i.length; o++) {
    const s = i[o], r = Jo(s.type);
    let l = Bo.get(r);
    l || (r !== n.initialDef && Kl(r, t), Bo.set(r, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? Es(() => {
      Lt = !0, s.parent.update(), Lt = !1, l.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(r);
  }
  Qu(() => {
    Bo.clear();
  });
}
function Kl(e, t) {
  Fe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function zs(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (i) {
      console.error(i), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Yt, Wi = [], fr = !1;
function yo(e, ...t) {
  Yt ? Yt.emit(e, ...t) : fr || Wi.push({ event: e, args: t });
}
function ic(e, t) {
  var n, i;
  Yt = e, Yt ? (Yt.enabled = !0, Wi.forEach(({ event: o, args: s }) => Yt.emit(o, ...s)), Wi = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((i = (n = window.navigator) == null ? void 0 : n.userAgent) != null && i.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    ic(s, t);
  }), setTimeout(() => {
    Yt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, fr = !0, Wi = []);
  }, 3e3)) : (fr = !0, Wi = []);
}
function qm(e, t) {
  yo("app:init", e, t, {
    Fragment: ke,
    Text: ci,
    Comment: Ke,
    Static: Ho
  });
}
function Zm(e) {
  yo("app:unmount", e);
}
const Xm = /* @__PURE__ */ Qr(
  "component:added"
  /* COMPONENT_ADDED */
), oc = /* @__PURE__ */ Qr(
  "component:updated"
  /* COMPONENT_UPDATED */
), Jm = /* @__PURE__ */ Qr(
  "component:removed"
  /* COMPONENT_REMOVED */
), Qm = (e) => {
  Yt && typeof Yt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Yt.cleanupBuffer(e) && Jm(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qr(e) {
  return (t) => {
    yo(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ev = /* @__PURE__ */ sc(
  "perf:start"
  /* PERFORMANCE_START */
), tv = /* @__PURE__ */ sc(
  "perf:end"
  /* PERFORMANCE_END */
);
function sc(e) {
  return (t, n, i) => {
    yo(e, t.appContext.app, t.uid, t, n, i);
  };
}
function nv(e, t, n) {
  yo(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let rt = null, rc = null;
function Qo(e) {
  const t = rt;
  return rt = e, rc = e && e.type.__scopeId || null, t;
}
function E(e, t = rt, n) {
  if (!t || e._n)
    return e;
  const i = (...o) => {
    i._d && la(-1);
    const s = Qo(t);
    let r;
    try {
      r = e(...o);
    } finally {
      Qo(s), i._d && la(1);
    }
    return _.NODE_ENV !== "production" && oc(t), r;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function lc(e) {
  Wf(e) && j("Do not use built-in directive ids as custom directive id: " + e);
}
function Nt(e, t) {
  if (rt === null)
    return _.NODE_ENV !== "production" && j("withDirectives can only be used inside render functions."), e;
  const n = xs(rt), i = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, r, l, a = Te] = t[o];
    s && (re(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && un(r), i.push({
      dir: s,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Hn(e, t, n, i) {
  const o = e.dirs, s = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    s && (l.oldValue = s[r].value);
    let a = l.dir[i];
    a && (gn(), Rt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), hn());
  }
}
const ac = Symbol("_vte"), uc = (e) => e.__isTeleport, ei = (e) => e && (e.disabled || e.disabled === ""), iv = (e) => e && (e.defer || e.defer === ""), Gl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Yl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, mr = (e, t) => {
  const n = e && e.to;
  if (Me(n))
    if (t) {
      const i = t(n);
      return _.NODE_ENV !== "production" && !i && !ei(e) && j(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), i;
    } else
      return _.NODE_ENV !== "production" && j(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return _.NODE_ENV !== "production" && !n && !ei(e) && j(`Invalid Teleport target: ${n}`), n;
}, ov = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, o, s, r, l, a, d) {
    const {
      mc: u,
      pc: c,
      pbc: m,
      o: { insert: v, querySelector: g, createText: h, createComment: w }
    } = d, k = ei(t.props);
    let { shapeFlag: O, children: P, dynamicChildren: M } = t;
    if (_.NODE_ENV !== "production" && Lt && (a = !1, M = null), e == null) {
      const x = t.el = _.NODE_ENV !== "production" ? w("teleport start") : h(""), N = t.anchor = _.NODE_ENV !== "production" ? w("teleport end") : h("");
      v(x, n, i), v(N, n, i);
      const $ = (V, L) => {
        O & 16 && (o && o.isCE && (o.ce._teleportTarget = V), u(
          P,
          V,
          L,
          o,
          s,
          r,
          l,
          a
        ));
      }, C = () => {
        const V = t.target = mr(t.props, g), L = cc(V, t, h, v);
        V ? (r !== "svg" && Gl(V) ? r = "svg" : r !== "mathml" && Yl(V) && (r = "mathml"), k || ($(V, L), Ro(t, !1))) : _.NODE_ENV !== "production" && !k && j(
          "Invalid Teleport target on mount:",
          V,
          `(${typeof V})`
        );
      };
      k && ($(n, N), Ro(t, !0)), iv(t.props) ? ht(C, s) : C();
    } else {
      t.el = e.el, t.targetStart = e.targetStart;
      const x = t.anchor = e.anchor, N = t.target = e.target, $ = t.targetAnchor = e.targetAnchor, C = ei(e.props), V = C ? n : N, L = C ? x : $;
      if (r === "svg" || Gl(N) ? r = "svg" : (r === "mathml" || Yl(N)) && (r = "mathml"), M ? (m(
        e.dynamicChildren,
        M,
        V,
        o,
        s,
        r,
        l
      ), Xi(e, t, !0)) : a || c(
        e,
        t,
        V,
        L,
        o,
        s,
        r,
        l,
        !1
      ), k)
        C ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Do(
          t,
          n,
          x,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const A = t.target = mr(
          t.props,
          g
        );
        A ? Do(
          t,
          A,
          null,
          d,
          0
        ) : _.NODE_ENV !== "production" && j(
          "Invalid Teleport target on update:",
          N,
          `(${typeof N})`
        );
      } else C && Do(
        t,
        N,
        $,
        d,
        1
      );
      Ro(t, k);
    }
  },
  remove(e, t, n, { um: i, o: { remove: o } }, s) {
    const {
      shapeFlag: r,
      children: l,
      anchor: a,
      targetStart: d,
      targetAnchor: u,
      target: c,
      props: m
    } = e;
    if (c && (o(d), o(u)), s && o(a), r & 16) {
      const v = s || !ei(m);
      for (let g = 0; g < l.length; g++) {
        const h = l[g];
        i(
          h,
          t,
          n,
          v,
          !!h.dynamicChildren
        );
      }
    }
  },
  move: Do,
  hydrate: sv
};
function Do(e, t, n, { o: { insert: i }, m: o }, s = 2) {
  s === 0 && i(e.targetAnchor, t, n);
  const { el: r, anchor: l, shapeFlag: a, children: d, props: u } = e, c = s === 2;
  if (c && i(r, t, n), (!c || ei(u)) && a & 16)
    for (let m = 0; m < d.length; m++)
      o(
        d[m],
        t,
        n,
        2
      );
  c && i(l, t, n);
}
function sv(e, t, n, i, o, s, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: d, createText: u }
}, c) {
  const m = t.target = mr(
    t.props,
    a
  );
  if (m) {
    const v = ei(t.props), g = m._lpa || m.firstChild;
    if (t.shapeFlag & 16)
      if (v)
        t.anchor = c(
          r(e),
          t,
          l(e),
          n,
          i,
          o,
          s
        ), t.targetStart = g, t.targetAnchor = g && r(g);
      else {
        t.anchor = r(e);
        let h = g;
        for (; h; ) {
          if (h && h.nodeType === 8) {
            if (h.data === "teleport start anchor")
              t.targetStart = h;
            else if (h.data === "teleport anchor") {
              t.targetAnchor = h, m._lpa = t.targetAnchor && r(t.targetAnchor);
              break;
            }
          }
          h = r(h);
        }
        t.targetAnchor || cc(m, t, u, d), c(
          g && r(g),
          t,
          m,
          n,
          i,
          o,
          s
        );
      }
    Ro(t, v);
  }
  return t.anchor && r(t.anchor);
}
const rv = ov;
function Ro(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, o;
    for (t ? (i = e.el, o = e.anchor) : (i = e.targetStart, o = e.targetAnchor); i && i !== o; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function cc(e, t, n, i) {
  const o = t.targetStart = n(""), s = t.targetAnchor = n("");
  return o[ac] = s, e && (i(o, e), i(s, e)), s;
}
const xn = Symbol("_leaveCb"), Po = Symbol("_enterCb");
function dc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return In(() => {
    e.isMounted = !0;
  }), yt(() => {
    e.isUnmounting = !0;
  }), e;
}
const Vt = [Function, Array], fc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Vt,
  onEnter: Vt,
  onAfterEnter: Vt,
  onEnterCancelled: Vt,
  // leave
  onBeforeLeave: Vt,
  onLeave: Vt,
  onAfterLeave: Vt,
  onLeaveCancelled: Vt,
  // appear
  onBeforeAppear: Vt,
  onAppear: Vt,
  onAfterAppear: Vt,
  onAppearCancelled: Vt
}, mc = (e) => {
  const t = e.subTree;
  return t.component ? mc(t.component) : t;
}, lv = {
  name: "BaseTransition",
  props: fc,
  setup(e, { slots: t }) {
    const n = Ns(), i = dc();
    return () => {
      const o = t.default && el(t.default(), !0);
      if (!o || !o.length)
        return;
      const s = vc(o), r = J(e), { mode: l } = r;
      if (_.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && j(`invalid <transition> mode: ${l}`), i.isLeaving)
        return Us(s);
      const a = ql(s);
      if (!a)
        return Us(s);
      let d = so(
        a,
        r,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (m) => d = m
      );
      a.type !== Ke && li(a, d);
      const u = n.subTree, c = u && ql(u);
      if (c && c.type !== Ke && !Gn(a, c) && mc(n).type !== Ke) {
        const m = so(
          c,
          r,
          i,
          n
        );
        if (li(c, m), l === "out-in" && a.type !== Ke)
          return i.isLeaving = !0, m.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete m.afterLeave;
          }, Us(s);
        l === "in-out" && a.type !== Ke && (m.delayLeave = (v, g, h) => {
          const w = gc(
            i,
            c
          );
          w[String(c.key)] = c, v[xn] = () => {
            g(), v[xn] = void 0, delete d.delayedLeave;
          }, d.delayedLeave = h;
        });
      }
      return s;
    };
  }
};
function vc(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const i of e)
      if (i.type !== Ke) {
        if (_.NODE_ENV !== "production" && n) {
          j(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = i, n = !0, _.NODE_ENV === "production") break;
      }
  }
  return t;
}
const av = lv;
function gc(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function so(e, t, n, i, o) {
  const {
    appear: s,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: c,
    onBeforeLeave: m,
    onLeave: v,
    onAfterLeave: g,
    onLeaveCancelled: h,
    onBeforeAppear: w,
    onAppear: k,
    onAfterAppear: O,
    onAppearCancelled: P
  } = t, M = String(e.key), x = gc(n, e), N = (V, L) => {
    V && Rt(
      V,
      i,
      9,
      L
    );
  }, $ = (V, L) => {
    const A = L[1];
    N(V, L), te(V) ? V.every((S) => S.length <= 1) && A() : V.length <= 1 && A();
  }, C = {
    mode: r,
    persisted: l,
    beforeEnter(V) {
      let L = a;
      if (!n.isMounted)
        if (s)
          L = w || a;
        else
          return;
      V[xn] && V[xn](
        !0
        /* cancelled */
      );
      const A = x[M];
      A && Gn(e, A) && A.el[xn] && A.el[xn](), N(L, [V]);
    },
    enter(V) {
      let L = d, A = u, S = c;
      if (!n.isMounted)
        if (s)
          L = k || d, A = O || u, S = P || c;
        else
          return;
      let D = !1;
      const B = V[Po] = (Z) => {
        D || (D = !0, Z ? N(S, [V]) : N(A, [V]), C.delayedLeave && C.delayedLeave(), V[Po] = void 0);
      };
      L ? $(L, [V, B]) : B();
    },
    leave(V, L) {
      const A = String(e.key);
      if (V[Po] && V[Po](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return L();
      N(m, [V]);
      let S = !1;
      const D = V[xn] = (B) => {
        S || (S = !0, L(), B ? N(h, [V]) : N(g, [V]), V[xn] = void 0, x[A] === e && delete x[A]);
      };
      x[A] = e, v ? $(v, [V, D]) : D();
    },
    clone(V) {
      const L = so(
        V,
        t,
        n,
        i,
        o
      );
      return o && o(L), L;
    }
  };
  return C;
}
function Us(e) {
  if (bo(e))
    return e = Ht(e), e.children = null, e;
}
function ql(e) {
  if (!bo(e))
    return uc(e.type) && e.children ? vc(e.children) : e;
  if (_.NODE_ENV !== "production" && e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && re(n.default))
      return n.default();
  }
}
function li(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, li(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function el(e, t = !1, n) {
  let i = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let r = e[s];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : s);
    r.type === ke ? (r.patchFlag & 128 && o++, i = i.concat(
      el(r.children, t, l)
    )) : (t || r.type !== Ke) && i.push(l != null ? Ht(r, { key: l }) : r);
  }
  if (o > 1)
    for (let s = 0; s < i.length; s++)
      i[s].patchFlag = -2;
  return i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function uv(e, t) {
  return re(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function hc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const cv = /* @__PURE__ */ new WeakSet();
function vr(e, t, n, i, o = !1) {
  if (te(e)) {
    e.forEach(
      (g, h) => vr(
        g,
        t && (te(t) ? t[h] : t),
        n,
        i,
        o
      )
    );
    return;
  }
  if (Zi(i) && !o)
    return;
  const s = i.shapeFlag & 4 ? xs(i.component) : i.el, r = o ? null : s, { i: l, r: a } = e;
  if (_.NODE_ENV !== "production" && !l) {
    j(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, u = l.refs === Te ? l.refs = {} : l.refs, c = l.setupState, m = J(c), v = c === Te ? () => !1 : (g) => _.NODE_ENV !== "production" && (Se(m, g) && !Ae(m[g]) && j(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), cv.has(m[g])) ? !1 : Se(m, g);
  if (d != null && d !== a && (Me(d) ? (u[d] = null, v(d) && (c[d] = null)) : Ae(d) && (d.value = null)), re(a))
    Pi(a, l, 12, [r, u]);
  else {
    const g = Me(a), h = Ae(a);
    if (g || h) {
      const w = () => {
        if (e.f) {
          const k = g ? v(a) ? c[a] : u[a] : a.value;
          o ? te(k) && Hr(k, s) : te(k) ? k.includes(s) || k.push(s) : g ? (u[a] = [s], v(a) && (c[a] = u[a])) : (a.value = [s], e.k && (u[e.k] = a.value));
        } else g ? (u[a] = r, v(a) && (c[a] = r)) : h ? (a.value = r, e.k && (u[e.k] = r)) : _.NODE_ENV !== "production" && j("Invalid template ref type:", a, `(${typeof a})`);
      };
      r ? (w.id = -1, ht(w, n)) : w();
    } else _.NODE_ENV !== "production" && j("Invalid template ref type:", a, `(${typeof a})`);
  }
}
go().requestIdleCallback;
go().cancelIdleCallback;
const Zi = (e) => !!e.type.__asyncLoader, bo = (e) => e.type.__isKeepAlive;
function pc(e, t) {
  bc(e, "a", t);
}
function yc(e, t) {
  bc(e, "da", t);
}
function bc(e, t, n = Ze) {
  const i = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Cs(t, i, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      bo(o.parent.vnode) && dv(i, t, n, o), o = o.parent;
  }
}
function dv(e, t, n, i) {
  const o = Cs(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  _c(() => {
    Hr(i[t], o);
  }, n);
}
function Cs(e, t, n = Ze, i = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...r) => {
      gn();
      const l = _o(n), a = Rt(t, n, e, r);
      return l(), hn(), a;
    });
    return i ? o.unshift(s) : o.push(s), s;
  } else if (_.NODE_ENV !== "production") {
    const o = Wn(Xr[e].replace(/ hook$/, ""));
    j(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const pn = (e) => (t, n = Ze) => {
  (!lo || e === "sp") && Cs(e, (...i) => t(...i), n);
}, tl = pn("bm"), In = pn("m"), fv = pn(
  "bu"
), nl = pn("u"), yt = pn(
  "bum"
), _c = pn("um"), mv = pn(
  "sp"
), vv = pn("rtg"), gv = pn("rtc");
function hv(e, t = Ze) {
  Cs("ec", e, t);
}
const gr = "components", pv = "directives", yv = Symbol.for("v-ndc");
function bv(e) {
  return Me(e) && wc(gr, e, !1) || e;
}
function Ai(e) {
  return wc(pv, e);
}
function wc(e, t, n = !0, i = !1) {
  const o = rt || Ze;
  if (o) {
    const s = o.type;
    if (e === gr) {
      const l = ul(
        s,
        !1
      );
      if (l && (l === t || l === tt(t) || l === Dt(tt(t))))
        return s;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      Zl(o[e] || s[e], t) || // global registration
      Zl(o.appContext[e], t)
    );
    if (!r && i)
      return s;
    if (_.NODE_ENV !== "production" && n && !r) {
      const l = e === gr ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      j(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return r;
  } else _.NODE_ENV !== "production" && j(
    `resolve${Dt(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Zl(e, t) {
  return e && (e[t] || e[tt(t)] || e[Dt(tt(t))]);
}
function Ci(e, t, n, i) {
  let o;
  const s = n, r = te(e);
  if (r || Me(e)) {
    const l = r && Jn(e);
    let a = !1;
    l && (a = !vt(e), e = _s(e)), o = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      o[d] = t(
        a ? st(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    _.NODE_ENV !== "production" && !Number.isInteger(e) && j(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, s);
  } else if (xe(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, s)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const u = l[a];
        o[a] = t(e[u], u, a, s);
      }
    }
  else
    o = [];
  return o;
}
const hr = (e) => e ? zc(e) ? xs(e) : hr(e.parent) : null, ti = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => _.NODE_ENV !== "production" ? Zt(e.props) : e.props,
    $attrs: (e) => _.NODE_ENV !== "production" ? Zt(e.attrs) : e.attrs,
    $slots: (e) => _.NODE_ENV !== "production" ? Zt(e.slots) : e.slots,
    $refs: (e) => _.NODE_ENV !== "production" ? Zt(e.refs) : e.refs,
    $parent: (e) => hr(e.parent),
    $root: (e) => hr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ol(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Es(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = At.bind(e.proxy)),
    $watch: (e) => Xv.bind(e)
  })
), il = (e) => e === "_" || e === "$", Ws = (e, t) => e !== Te && !e.__isScriptSetup && Se(e, t), Sc = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: o, props: s, accessCache: r, type: l, appContext: a } = e;
    if (_.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const v = r[t];
      if (v !== void 0)
        switch (v) {
          case 1:
            return i[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Ws(i, t))
          return r[t] = 1, i[t];
        if (o !== Te && Se(o, t))
          return r[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && Se(d, t)
        )
          return r[t] = 3, s[t];
        if (n !== Te && Se(n, t))
          return r[t] = 4, n[t];
        pr && (r[t] = 0);
      }
    }
    const u = ti[t];
    let c, m;
    if (u)
      return t === "$attrs" ? (Ye(e.attrs, "get", ""), _.NODE_ENV !== "production" && ns()) : _.NODE_ENV !== "production" && t === "$slots" && Ye(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Te && Se(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      m = a.config.globalProperties, Se(m, t)
    )
      return m[t];
    _.NODE_ENV !== "production" && rt && (!Me(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Te && il(t[0]) && Se(o, t) ? j(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === rt && j(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: o, ctx: s } = e;
    return Ws(o, t) ? (o[t] = n, !0) : _.NODE_ENV !== "production" && o.__isScriptSetup && Se(o, t) ? (j(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : i !== Te && Se(i, t) ? (i[t] = n, !0) : Se(e.props, t) ? (_.NODE_ENV !== "production" && j(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (_.NODE_ENV !== "production" && j(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (_.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: o, propsOptions: s }
  }, r) {
    let l;
    return !!n[r] || e !== Te && Se(e, r) || Ws(t, r) || (l = s[0]) && Se(l, r) || Se(i, r) || Se(ti, r) || Se(o.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
_.NODE_ENV !== "production" && (Sc.ownKeys = (e) => (j(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function _v(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ti).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ti[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: qe
    });
  }), t;
}
function wv(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((i) => {
    Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i],
      set: qe
    });
  });
}
function Sv(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(J(n)).forEach((i) => {
    if (!n.__isScriptSetup) {
      if (il(i[0])) {
        j(
          `setup() return property ${JSON.stringify(
            i
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, i, {
        enumerable: !0,
        configurable: !0,
        get: () => n[i],
        set: qe
      });
    }
  });
}
function Xl(e) {
  return te(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ev() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? j(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let pr = !0;
function Cv(e) {
  const t = ol(e), n = e.proxy, i = e.ctx;
  pr = !1, t.beforeCreate && Jl(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: r,
    watch: l,
    provide: a,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: c,
    mounted: m,
    beforeUpdate: v,
    updated: g,
    activated: h,
    deactivated: w,
    beforeDestroy: k,
    beforeUnmount: O,
    destroyed: P,
    unmounted: M,
    render: x,
    renderTracked: N,
    renderTriggered: $,
    errorCaptured: C,
    serverPrefetch: V,
    // public API
    expose: L,
    inheritAttrs: A,
    // assets
    components: S,
    directives: D,
    filters: B
  } = t, Z = _.NODE_ENV !== "production" ? Ev() : null;
  if (_.NODE_ENV !== "production") {
    const [X] = e.propsOptions;
    if (X)
      for (const q in X)
        Z("Props", q);
  }
  if (d && kv(d, i, Z), r)
    for (const X in r) {
      const q = r[X];
      re(q) ? (_.NODE_ENV !== "production" ? Object.defineProperty(i, X, {
        value: q.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : i[X] = q.bind(n), _.NODE_ENV !== "production" && Z("Methods", X)) : _.NODE_ENV !== "production" && j(
        `Method "${X}" has type "${typeof q}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    _.NODE_ENV !== "production" && !re(o) && j(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const X = o.call(n, n);
    if (_.NODE_ENV !== "production" && jr(X) && j(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !xe(X))
      _.NODE_ENV !== "production" && j("data() should return an object.");
    else if (e.data = et(X), _.NODE_ENV !== "production")
      for (const q in X)
        Z("Data", q), il(q[0]) || Object.defineProperty(i, q, {
          configurable: !0,
          enumerable: !0,
          get: () => X[q],
          set: qe
        });
  }
  if (pr = !0, s)
    for (const X in s) {
      const q = s[X], ye = re(q) ? q.bind(n, n) : re(q.get) ? q.get.bind(n, n) : qe;
      _.NODE_ENV !== "production" && ye === qe && j(`Computed property "${X}" has no getter.`);
      const be = !re(q) && re(q.set) ? q.set.bind(n) : _.NODE_ENV !== "production" ? () => {
        j(
          `Write operation failed: computed property "${X}" is readonly.`
        );
      } : qe, me = y({
        get: ye,
        set: be
      });
      Object.defineProperty(i, X, {
        enumerable: !0,
        configurable: !0,
        get: () => me.value,
        set: (ne) => me.value = ne
      }), _.NODE_ENV !== "production" && Z("Computed", X);
    }
  if (l)
    for (const X in l)
      Ec(l[X], i, n, X);
  if (a) {
    const X = re(a) ? a.call(n) : a;
    Reflect.ownKeys(X).forEach((q) => {
      gt(q, X[q]);
    });
  }
  u && Jl(u, e, "c");
  function Q(X, q) {
    te(q) ? q.forEach((ye) => X(ye.bind(n))) : q && X(q.bind(n));
  }
  if (Q(tl, c), Q(In, m), Q(fv, v), Q(nl, g), Q(pc, h), Q(yc, w), Q(hv, C), Q(gv, N), Q(vv, $), Q(yt, O), Q(_c, M), Q(mv, V), te(L))
    if (L.length) {
      const X = e.exposed || (e.exposed = {});
      L.forEach((q) => {
        Object.defineProperty(X, q, {
          get: () => n[q],
          set: (ye) => n[q] = ye
        });
      });
    } else e.exposed || (e.exposed = {});
  x && e.render === qe && (e.render = x), A != null && (e.inheritAttrs = A), S && (e.components = S), D && (e.directives = D), V && hc(e);
}
function kv(e, t, n = qe) {
  te(e) && (e = yr(e));
  for (const i in e) {
    const o = e[i];
    let s;
    xe(o) ? "default" in o ? s = Re(
      o.from || i,
      o.default,
      !0
    ) : s = Re(o.from || i) : s = Re(o), Ae(s) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (r) => s.value = r
    }) : t[i] = s, _.NODE_ENV !== "production" && n("Inject", i);
  }
}
function Jl(e, t, n) {
  Rt(
    te(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ec(e, t, n, i) {
  let o = i.includes(".") ? $c(n, i) : () => n[i];
  if (Me(e)) {
    const s = t[e];
    re(s) ? ve(o, s) : _.NODE_ENV !== "production" && j(`Invalid watch handler specified by key "${e}"`, s);
  } else if (re(e))
    ve(o, e.bind(n));
  else if (xe(e))
    if (te(e))
      e.forEach((s) => Ec(s, t, n, i));
    else {
      const s = re(e.handler) ? e.handler.bind(n) : t[e.handler];
      re(s) ? ve(o, s, e) : _.NODE_ENV !== "production" && j(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else _.NODE_ENV !== "production" && j(`Invalid watch option: "${i}"`, e);
}
function ol(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !o.length && !n && !i ? a = t : (a = {}, o.length && o.forEach(
    (d) => es(a, d, r, !0)
  ), es(a, t, r)), xe(t) && s.set(t, a), a;
}
function es(e, t, n, i = !1) {
  const { mixins: o, extends: s } = t;
  s && es(e, s, n, !0), o && o.forEach(
    (r) => es(e, r, n, !0)
  );
  for (const r in t)
    if (i && r === "expose")
      _.NODE_ENV !== "production" && j(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Nv[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const Nv = {
  data: Ql,
  props: ea,
  emits: ea,
  // objects
  methods: Ki,
  computed: Ki,
  // lifecycle
  beforeCreate: ct,
  created: ct,
  beforeMount: ct,
  mounted: ct,
  beforeUpdate: ct,
  updated: ct,
  beforeDestroy: ct,
  beforeUnmount: ct,
  destroyed: ct,
  unmounted: ct,
  activated: ct,
  deactivated: ct,
  errorCaptured: ct,
  serverPrefetch: ct,
  // assets
  components: Ki,
  directives: Ki,
  // watch
  watch: Vv,
  // provide / inject
  provide: Ql,
  inject: xv
};
function Ql(e, t) {
  return t ? e ? function() {
    return Fe(
      re(e) ? e.call(this, this) : e,
      re(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function xv(e, t) {
  return Ki(yr(e), yr(t));
}
function yr(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ct(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ki(e, t) {
  return e ? Fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ea(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Fe(
    /* @__PURE__ */ Object.create(null),
    Xl(e),
    Xl(t ?? {})
  ) : t;
}
function Vv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Fe(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = ct(e[i], t[i]);
  return n;
}
function Cc() {
  return {
    app: null,
    config: {
      isNativeTag: zf,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ov = 0;
function Tv(e, t) {
  return function(i, o = null) {
    re(i) || (i = Fe({}, i)), o != null && !xe(o) && (_.NODE_ENV !== "production" && j("root props passed to app.mount() must be an object."), o = null);
    const s = Cc(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const d = s.app = {
      _uid: Ov++,
      _component: i,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: da,
      get config() {
        return s.config;
      },
      set config(u) {
        _.NODE_ENV !== "production" && j(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...c) {
        return r.has(u) ? _.NODE_ENV !== "production" && j("Plugin has already been applied to target app.") : u && re(u.install) ? (r.add(u), u.install(d, ...c)) : re(u) ? (r.add(u), u(d, ...c)) : _.NODE_ENV !== "production" && j(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(u) {
        return s.mixins.includes(u) ? _.NODE_ENV !== "production" && j(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : s.mixins.push(u), d;
      },
      component(u, c) {
        return _.NODE_ENV !== "production" && Er(u, s.config), c ? (_.NODE_ENV !== "production" && s.components[u] && j(`Component "${u}" has already been registered in target app.`), s.components[u] = c, d) : s.components[u];
      },
      directive(u, c) {
        return _.NODE_ENV !== "production" && lc(u), c ? (_.NODE_ENV !== "production" && s.directives[u] && j(`Directive "${u}" has already been registered in target app.`), s.directives[u] = c, d) : s.directives[u];
      },
      mount(u, c, m) {
        if (a)
          _.NODE_ENV !== "production" && j(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          _.NODE_ENV !== "production" && u.__vue_app__ && j(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const v = d._ceVNode || f(i, o);
          return v.appContext = s, m === !0 ? m = "svg" : m === !1 && (m = void 0), _.NODE_ENV !== "production" && (s.reload = () => {
            e(
              Ht(v),
              u,
              m
            );
          }), c && t ? t(v, u) : e(v, u, m), a = !0, d._container = u, u.__vue_app__ = d, _.NODE_ENV !== "production" && (d._instance = v.component, qm(d, da)), xs(v.component);
        }
      },
      onUnmount(u) {
        _.NODE_ENV !== "production" && typeof u != "function" && j(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), l.push(u);
      },
      unmount() {
        a ? (Rt(
          l,
          d._instance,
          16
        ), e(null, d._container), _.NODE_ENV !== "production" && (d._instance = null, Zm(d)), delete d._container.__vue_app__) : _.NODE_ENV !== "production" && j("Cannot unmount an app that is not mounted.");
      },
      provide(u, c) {
        return _.NODE_ENV !== "production" && u in s.provides && j(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), s.provides[u] = c, d;
      },
      runWithContext(u) {
        const c = ki;
        ki = d;
        try {
          return u();
        } finally {
          ki = c;
        }
      }
    };
    return d;
  };
}
let ki = null;
function gt(e, t) {
  if (!Ze)
    _.NODE_ENV !== "production" && j("provide() can only be used inside setup().");
  else {
    let n = Ze.provides;
    const i = Ze.parent && Ze.parent.provides;
    i === n && (n = Ze.provides = Object.create(i)), n[e] = t;
  }
}
function Re(e, t, n = !1) {
  const i = Ze || rt;
  if (i || ki) {
    const o = ki ? ki._context.provides : i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && re(t) ? t.call(i && i.proxy) : t;
    _.NODE_ENV !== "production" && j(`injection "${String(e)}" not found.`);
  } else _.NODE_ENV !== "production" && j("inject() can only be used inside setup() or functional components.");
}
const kc = {}, Nc = () => Object.create(kc), xc = (e) => Object.getPrototypeOf(e) === kc;
function Dv(e, t, n, i = !1) {
  const o = {}, s = Nc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Vc(e, t, o, s);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  _.NODE_ENV !== "production" && Tc(t || {}, o, e), n ? e.props = i ? o : Vm(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Pv(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Av(e, t, n, i) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: r }
  } = e, l = J(o), [a] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(_.NODE_ENV !== "production" && Pv(e)) && (i || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const u = e.vnode.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        let m = u[c];
        if (ks(e.emitsOptions, m))
          continue;
        const v = t[m];
        if (a)
          if (Se(s, m))
            v !== s[m] && (s[m] = v, d = !0);
          else {
            const g = tt(m);
            o[g] = br(
              a,
              l,
              g,
              v,
              e,
              !1
            );
          }
        else
          v !== s[m] && (s[m] = v, d = !0);
      }
    }
  } else {
    Vc(e, t, o, s) && (d = !0);
    let u;
    for (const c in l)
      (!t || // for camelCase
      !Se(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Dn(c)) === c || !Se(t, u))) && (a ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[c] = br(
        a,
        l,
        c,
        void 0,
        e,
        !0
      )) : delete o[c]);
    if (s !== l)
      for (const c in s)
        (!t || !Se(t, c)) && (delete s[c], d = !0);
  }
  d && Gt(e.attrs, "set", ""), _.NODE_ENV !== "production" && Tc(t || {}, o, e);
}
function Vc(e, t, n, i) {
  const [o, s] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (Gi(a))
        continue;
      const d = t[a];
      let u;
      o && Se(o, u = tt(a)) ? !s || !s.includes(u) ? n[u] = d : (l || (l = {}))[u] = d : ks(e.emitsOptions, a) || (!(a in i) || d !== i[a]) && (i[a] = d, r = !0);
    }
  if (s) {
    const a = J(n), d = l || Te;
    for (let u = 0; u < s.length; u++) {
      const c = s[u];
      n[c] = br(
        o,
        a,
        c,
        d[c],
        e,
        !Se(d, c)
      );
    }
  }
  return r;
}
function br(e, t, n, i, o, s) {
  const r = e[n];
  if (r != null) {
    const l = Se(r, "default");
    if (l && i === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && re(a)) {
        const { propsDefaults: d } = o;
        if (n in d)
          i = d[n];
        else {
          const u = _o(o);
          i = d[n] = a.call(
            null,
            t
          ), u();
        }
      } else
        i = a;
      o.ce && o.ce._setProp(n, i);
    }
    r[
      0
      /* shouldCast */
    ] && (s && !l ? i = !1 : r[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Dn(n)) && (i = !0));
  }
  return i;
}
const Iv = /* @__PURE__ */ new WeakMap();
function Oc(e, t, n = !1) {
  const i = n ? Iv : t.propsCache, o = i.get(e);
  if (o)
    return o;
  const s = e.props, r = {}, l = [];
  let a = !1;
  if (!re(e)) {
    const u = (c) => {
      a = !0;
      const [m, v] = Oc(c, t, !0);
      Fe(r, m), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !a)
    return xe(e) && i.set(e, Si), Si;
  if (te(s))
    for (let u = 0; u < s.length; u++) {
      _.NODE_ENV !== "production" && !Me(s[u]) && j("props must be strings when using array syntax.", s[u]);
      const c = tt(s[u]);
      ta(c) && (r[c] = Te);
    }
  else if (s) {
    _.NODE_ENV !== "production" && !xe(s) && j("invalid props options", s);
    for (const u in s) {
      const c = tt(u);
      if (ta(c)) {
        const m = s[u], v = r[c] = te(m) || re(m) ? { type: m } : Fe({}, m), g = v.type;
        let h = !1, w = !0;
        if (te(g))
          for (let k = 0; k < g.length; ++k) {
            const O = g[k], P = re(O) && O.name;
            if (P === "Boolean") {
              h = !0;
              break;
            } else P === "String" && (w = !1);
          }
        else
          h = re(g) && g.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = h, v[
          1
          /* shouldCastTrue */
        ] = w, (h || Se(v, "default")) && l.push(c);
      }
    }
  }
  const d = [r, l];
  return xe(e) && i.set(e, d), d;
}
function ta(e) {
  return e[0] !== "$" && !Gi(e) ? !0 : (_.NODE_ENV !== "production" && j(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function $v(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Tc(e, t, n) {
  const i = J(t), o = n.propsOptions[0], s = Object.keys(e).map((r) => tt(r));
  for (const r in o) {
    let l = o[r];
    l != null && Mv(
      r,
      i[r],
      l,
      _.NODE_ENV !== "production" ? Zt(i) : i,
      !s.includes(r)
    );
  }
}
function Mv(e, t, n, i, o) {
  const { type: s, required: r, validator: l, skipCheck: a } = n;
  if (r && o) {
    j('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (s != null && s !== !0 && !a) {
      let d = !1;
      const u = te(s) ? s : [s], c = [];
      for (let m = 0; m < u.length && !d; m++) {
        const { valid: v, expectedType: g } = Lv(t, u[m]);
        c.push(g || ""), d = v;
      }
      if (!d) {
        j(Bv(e, t, c));
        return;
      }
    }
    l && !l(t, i) && j('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Fv = /* @__PURE__ */ vn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Lv(e, t) {
  let n;
  const i = $v(t);
  if (i === "null")
    n = e === null;
  else if (Fv(i)) {
    const o = typeof e;
    n = o === i.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else i === "Object" ? n = xe(e) : i === "Array" ? n = te(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: i
  };
}
function Bv(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let i = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Dt).join(" | ")}`;
  const o = n[0], s = zr(t), r = na(t, o), l = na(t, s);
  return n.length === 1 && ia(o) && !Rv(o, s) && (i += ` with value ${r}`), i += `, got ${s} `, ia(s) && (i += `with value ${l}.`), i;
}
function na(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ia(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Rv(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Dc = (e) => e[0] === "_" || e === "$stable", sl = (e) => te(e) ? e.map(Ft) : [Ft(e)], Hv = (e, t, n) => {
  if (t._n)
    return t;
  const i = E((...o) => (_.NODE_ENV !== "production" && Ze && (!n || n.root === Ze.root) && j(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), sl(t(...o))), n);
  return i._c = !1, i;
}, Pc = (e, t, n) => {
  const i = e._ctx;
  for (const o in e) {
    if (Dc(o)) continue;
    const s = e[o];
    if (re(s))
      t[o] = Hv(o, s, i);
    else if (s != null) {
      _.NODE_ENV !== "production" && j(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const r = sl(s);
      t[o] = () => r;
    }
  }
}, Ac = (e, t) => {
  _.NODE_ENV !== "production" && !bo(e.vnode) && j(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = sl(t);
  e.slots.default = () => n;
}, _r = (e, t, n) => {
  for (const i in t)
    (n || i !== "_") && (e[i] = t[i]);
}, jv = (e, t, n) => {
  const i = e.slots = Nc();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (_r(i, t, n), n && Yo(i, "_", o, !0)) : Pc(t, i);
  } else t && Ac(e, t);
}, zv = (e, t, n) => {
  const { vnode: i, slots: o } = e;
  let s = !0, r = Te;
  if (i.shapeFlag & 32) {
    const l = t._;
    l ? _.NODE_ENV !== "production" && Lt ? (_r(o, t, n), Gt(e, "set", "$slots")) : n && l === 1 ? s = !1 : _r(o, t, n) : (s = !t.$stable, Pc(t, o)), r = t;
  } else t && (Ac(e, t), r = { default: 1 });
  if (s)
    for (const l in o)
      !Dc(l) && r[l] == null && delete o[l];
};
let Bi, On;
function on(e, t) {
  e.appContext.config.performance && ts() && On.mark(`vue-${t}-${e.uid}`), _.NODE_ENV !== "production" && ev(e, t, ts() ? On.now() : Date.now());
}
function sn(e, t) {
  if (e.appContext.config.performance && ts()) {
    const n = `vue-${t}-${e.uid}`, i = n + ":end";
    On.mark(i), On.measure(
      `<${Vs(e, e.type)}> ${t}`,
      n,
      i
    ), On.clearMarks(n), On.clearMarks(i);
  }
  _.NODE_ENV !== "production" && tv(e, t, ts() ? On.now() : Date.now());
}
function ts() {
  return Bi !== void 0 || (typeof window < "u" && window.performance ? (Bi = !0, On = window.performance) : Bi = !1), Bi;
}
function Uv() {
  const e = [];
  if (_.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ht = og;
function Wv(e) {
  return Kv(e);
}
function Kv(e, t) {
  Uv();
  const n = go();
  n.__VUE__ = !0, _.NODE_ENV !== "production" && ic(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: i,
    remove: o,
    patchProp: s,
    createElement: r,
    createText: l,
    createComment: a,
    setText: d,
    setElementText: u,
    parentNode: c,
    nextSibling: m,
    setScopeId: v = qe,
    insertStaticContent: g
  } = e, h = (p, b, T, R = null, I = null, F = null, K = void 0, U = null, z = _.NODE_ENV !== "production" && Lt ? !1 : !!b.dynamicChildren) => {
    if (p === b)
      return;
    p && !Gn(p, b) && (R = Ie(p), Ve(p, I, F, !0), p = null), b.patchFlag === -2 && (z = !1, b.dynamicChildren = null);
    const { type: H, ref: ae, shapeFlag: G } = b;
    switch (H) {
      case ci:
        w(p, b, T, R);
        break;
      case Ke:
        k(p, b, T, R);
        break;
      case Ho:
        p == null ? O(b, T, R, K) : _.NODE_ENV !== "production" && P(p, b, T, K);
        break;
      case ke:
        D(
          p,
          b,
          T,
          R,
          I,
          F,
          K,
          U,
          z
        );
        break;
      default:
        G & 1 ? N(
          p,
          b,
          T,
          R,
          I,
          F,
          K,
          U,
          z
        ) : G & 6 ? B(
          p,
          b,
          T,
          R,
          I,
          F,
          K,
          U,
          z
        ) : G & 64 || G & 128 ? H.process(
          p,
          b,
          T,
          R,
          I,
          F,
          K,
          U,
          z,
          Rn
        ) : _.NODE_ENV !== "production" && j("Invalid VNode type:", H, `(${typeof H})`);
    }
    ae != null && I && vr(ae, p && p.ref, F, b || p, !b);
  }, w = (p, b, T, R) => {
    if (p == null)
      i(
        b.el = l(b.children),
        T,
        R
      );
    else {
      const I = b.el = p.el;
      b.children !== p.children && d(I, b.children);
    }
  }, k = (p, b, T, R) => {
    p == null ? i(
      b.el = a(b.children || ""),
      T,
      R
    ) : b.el = p.el;
  }, O = (p, b, T, R) => {
    [p.el, p.anchor] = g(
      p.children,
      b,
      T,
      R,
      p.el,
      p.anchor
    );
  }, P = (p, b, T, R) => {
    if (b.children !== p.children) {
      const I = m(p.anchor);
      x(p), [b.el, b.anchor] = g(
        b.children,
        T,
        I,
        R
      );
    } else
      b.el = p.el, b.anchor = p.anchor;
  }, M = ({ el: p, anchor: b }, T, R) => {
    let I;
    for (; p && p !== b; )
      I = m(p), i(p, T, R), p = I;
    i(b, T, R);
  }, x = ({ el: p, anchor: b }) => {
    let T;
    for (; p && p !== b; )
      T = m(p), o(p), p = T;
    o(b);
  }, N = (p, b, T, R, I, F, K, U, z) => {
    b.type === "svg" ? K = "svg" : b.type === "math" && (K = "mathml"), p == null ? $(
      b,
      T,
      R,
      I,
      F,
      K,
      U,
      z
    ) : L(
      p,
      b,
      I,
      F,
      K,
      U,
      z
    );
  }, $ = (p, b, T, R, I, F, K, U) => {
    let z, H;
    const { props: ae, shapeFlag: G, transition: ee, dirs: de } = p;
    if (z = p.el = r(
      p.type,
      F,
      ae && ae.is,
      ae
    ), G & 8 ? u(z, p.children) : G & 16 && V(
      p.children,
      z,
      null,
      R,
      I,
      Ks(p, F),
      K,
      U
    ), de && Hn(p, null, R, "created"), C(z, p, p.scopeId, K, R), ae) {
      for (const $e in ae)
        $e !== "value" && !Gi($e) && s(z, $e, null, ae[$e], F, R);
      "value" in ae && s(z, "value", null, ae.value, F), (H = ae.onVnodeBeforeMount) && Wt(H, R, p);
    }
    _.NODE_ENV !== "production" && (Yo(z, "__vnode", p, !0), Yo(z, "__vueParentComponent", R, !0)), de && Hn(p, null, R, "beforeMount");
    const we = Gv(I, ee);
    we && ee.beforeEnter(z), i(z, b, T), ((H = ae && ae.onVnodeMounted) || we || de) && ht(() => {
      H && Wt(H, R, p), we && ee.enter(z), de && Hn(p, null, R, "mounted");
    }, I);
  }, C = (p, b, T, R, I) => {
    if (T && v(p, T), R)
      for (let F = 0; F < R.length; F++)
        v(p, R[F]);
    if (I) {
      let F = I.subTree;
      if (_.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && (F = ll(F.children) || F), b === F || Lc(F.type) && (F.ssContent === b || F.ssFallback === b)) {
        const K = I.vnode;
        C(
          p,
          K,
          K.scopeId,
          K.slotScopeIds,
          I.parent
        );
      }
    }
  }, V = (p, b, T, R, I, F, K, U, z = 0) => {
    for (let H = z; H < p.length; H++) {
      const ae = p[H] = U ? Vn(p[H]) : Ft(p[H]);
      h(
        null,
        ae,
        b,
        T,
        R,
        I,
        F,
        K,
        U
      );
    }
  }, L = (p, b, T, R, I, F, K) => {
    const U = b.el = p.el;
    _.NODE_ENV !== "production" && (U.__vnode = b);
    let { patchFlag: z, dynamicChildren: H, dirs: ae } = b;
    z |= p.patchFlag & 16;
    const G = p.props || Te, ee = b.props || Te;
    let de;
    if (T && jn(T, !1), (de = ee.onVnodeBeforeUpdate) && Wt(de, T, b, p), ae && Hn(b, p, T, "beforeUpdate"), T && jn(T, !0), _.NODE_ENV !== "production" && Lt && (z = 0, K = !1, H = null), (G.innerHTML && ee.innerHTML == null || G.textContent && ee.textContent == null) && u(U, ""), H ? (A(
      p.dynamicChildren,
      H,
      U,
      T,
      R,
      Ks(b, I),
      F
    ), _.NODE_ENV !== "production" && Xi(p, b)) : K || ye(
      p,
      b,
      U,
      null,
      T,
      R,
      Ks(b, I),
      F,
      !1
    ), z > 0) {
      if (z & 16)
        S(U, G, ee, T, I);
      else if (z & 2 && G.class !== ee.class && s(U, "class", null, ee.class, I), z & 4 && s(U, "style", G.style, ee.style, I), z & 8) {
        const we = b.dynamicProps;
        for (let $e = 0; $e < we.length; $e++) {
          const Pe = we[$e], wt = G[Pe], ot = ee[Pe];
          (ot !== wt || Pe === "value") && s(U, Pe, wt, ot, I, T);
        }
      }
      z & 1 && p.children !== b.children && u(U, b.children);
    } else !K && H == null && S(U, G, ee, T, I);
    ((de = ee.onVnodeUpdated) || ae) && ht(() => {
      de && Wt(de, T, b, p), ae && Hn(b, p, T, "updated");
    }, R);
  }, A = (p, b, T, R, I, F, K) => {
    for (let U = 0; U < b.length; U++) {
      const z = p[U], H = b[U], ae = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (z.type === ke || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Gn(z, H) || // - In the case of a component, it could contain anything.
        z.shapeFlag & 70) ? c(z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          T
        )
      );
      h(
        z,
        H,
        ae,
        null,
        R,
        I,
        F,
        K,
        !0
      );
    }
  }, S = (p, b, T, R, I) => {
    if (b !== T) {
      if (b !== Te)
        for (const F in b)
          !Gi(F) && !(F in T) && s(
            p,
            F,
            b[F],
            null,
            I,
            R
          );
      for (const F in T) {
        if (Gi(F)) continue;
        const K = T[F], U = b[F];
        K !== U && F !== "value" && s(p, F, U, K, I, R);
      }
      "value" in T && s(p, "value", b.value, T.value, I);
    }
  }, D = (p, b, T, R, I, F, K, U, z) => {
    const H = b.el = p ? p.el : l(""), ae = b.anchor = p ? p.anchor : l("");
    let { patchFlag: G, dynamicChildren: ee, slotScopeIds: de } = b;
    _.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Lt || G & 2048) && (G = 0, z = !1, ee = null), de && (U = U ? U.concat(de) : de), p == null ? (i(H, T, R), i(ae, T, R), V(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      T,
      ae,
      I,
      F,
      K,
      U,
      z
    )) : G > 0 && G & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (A(
      p.dynamicChildren,
      ee,
      T,
      I,
      F,
      K,
      U
    ), _.NODE_ENV !== "production" ? Xi(p, b) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (b.key != null || I && b === I.subTree) && Xi(
        p,
        b,
        !0
        /* shallow */
      )
    )) : ye(
      p,
      b,
      T,
      ae,
      I,
      F,
      K,
      U,
      z
    );
  }, B = (p, b, T, R, I, F, K, U, z) => {
    b.slotScopeIds = U, p == null ? b.shapeFlag & 512 ? I.ctx.activate(
      b,
      T,
      R,
      K,
      z
    ) : Z(
      b,
      T,
      R,
      I,
      F,
      K,
      z
    ) : Q(p, b, z);
  }, Z = (p, b, T, R, I, F, K) => {
    const U = p.component = cg(
      p,
      R,
      I
    );
    if (_.NODE_ENV !== "production" && U.type.__hmrId && Wm(U), _.NODE_ENV !== "production" && (Fo(p), on(U, "mount")), bo(p) && (U.ctx.renderer = Rn), _.NODE_ENV !== "production" && on(U, "init"), fg(U, !1, K), _.NODE_ENV !== "production" && sn(U, "init"), U.asyncDep) {
      if (_.NODE_ENV !== "production" && Lt && (p.el = null), I && I.registerDep(U, X, K), !p.el) {
        const z = U.subTree = f(Ke);
        k(null, z, b, T);
      }
    } else
      X(
        U,
        p,
        b,
        T,
        I,
        F,
        K
      );
    _.NODE_ENV !== "production" && (Lo(), sn(U, "mount"));
  }, Q = (p, b, T) => {
    const R = b.component = p.component;
    if (ng(p, b, T))
      if (R.asyncDep && !R.asyncResolved) {
        _.NODE_ENV !== "production" && Fo(b), q(R, b, T), _.NODE_ENV !== "production" && Lo();
        return;
      } else
        R.next = b, R.update();
    else
      b.el = p.el, R.vnode = b;
  }, X = (p, b, T, R, I, F, K) => {
    const U = () => {
      if (p.isMounted) {
        let { next: G, bu: ee, u: de, parent: we, vnode: $e } = p;
        {
          const St = Ic(p);
          if (St) {
            G && (G.el = $e.el, q(p, G, K)), St.asyncDep.then(() => {
              p.isUnmounted || U();
            });
            return;
          }
        }
        let Pe = G, wt;
        _.NODE_ENV !== "production" && Fo(G || p.vnode), jn(p, !1), G ? (G.el = $e.el, q(p, G, K)) : G = $e, ee && Fi(ee), (wt = G.props && G.props.onVnodeBeforeUpdate) && Wt(wt, we, G, $e), jn(p, !0), _.NODE_ENV !== "production" && on(p, "render");
        const ot = Gs(p);
        _.NODE_ENV !== "production" && sn(p, "render");
        const $t = p.subTree;
        p.subTree = ot, _.NODE_ENV !== "production" && on(p, "patch"), h(
          $t,
          ot,
          // parent may have changed if it's in a teleport
          c($t.el),
          // anchor may have changed if it's in a fragment
          Ie($t),
          p,
          I,
          F
        ), _.NODE_ENV !== "production" && sn(p, "patch"), G.el = ot.el, Pe === null && ig(p, ot.el), de && ht(de, I), (wt = G.props && G.props.onVnodeUpdated) && ht(
          () => Wt(wt, we, G, $e),
          I
        ), _.NODE_ENV !== "production" && oc(p), _.NODE_ENV !== "production" && Lo();
      } else {
        let G;
        const { el: ee, props: de } = b, { bm: we, m: $e, parent: Pe, root: wt, type: ot } = p, $t = Zi(b);
        if (jn(p, !1), we && Fi(we), !$t && (G = de && de.onVnodeBeforeMount) && Wt(G, Pe, b), jn(p, !0), ee && xo) {
          const St = () => {
            _.NODE_ENV !== "production" && on(p, "render"), p.subTree = Gs(p), _.NODE_ENV !== "production" && sn(p, "render"), _.NODE_ENV !== "production" && on(p, "hydrate"), xo(
              ee,
              p.subTree,
              p,
              I,
              null
            ), _.NODE_ENV !== "production" && sn(p, "hydrate");
          };
          $t && ot.__asyncHydrate ? ot.__asyncHydrate(
            ee,
            p,
            St
          ) : St();
        } else {
          wt.ce && wt.ce._injectChildStyle(ot), _.NODE_ENV !== "production" && on(p, "render");
          const St = p.subTree = Gs(p);
          _.NODE_ENV !== "production" && sn(p, "render"), _.NODE_ENV !== "production" && on(p, "patch"), h(
            null,
            St,
            T,
            R,
            p,
            I,
            F
          ), _.NODE_ENV !== "production" && sn(p, "patch"), b.el = St.el;
        }
        if ($e && ht($e, I), !$t && (G = de && de.onVnodeMounted)) {
          const St = b;
          ht(
            () => Wt(G, Pe, St),
            I
          );
        }
        (b.shapeFlag & 256 || Pe && Zi(Pe.vnode) && Pe.vnode.shapeFlag & 256) && p.a && ht(p.a, I), p.isMounted = !0, _.NODE_ENV !== "production" && Xm(p), b = T = R = null;
      }
    };
    p.scope.on();
    const z = p.effect = new Tu(U);
    p.scope.off();
    const H = p.update = z.run.bind(z), ae = p.job = z.runIfDirty.bind(z);
    ae.i = p, ae.id = p.uid, z.scheduler = () => Es(ae), jn(p, !0), _.NODE_ENV !== "production" && (z.onTrack = p.rtc ? (G) => Fi(p.rtc, G) : void 0, z.onTrigger = p.rtg ? (G) => Fi(p.rtg, G) : void 0), H();
  }, q = (p, b, T) => {
    b.component = p;
    const R = p.vnode.props;
    p.vnode = b, p.next = null, Av(p, b.props, R, T), zv(p, b.children, T), gn(), Wl(p), hn();
  }, ye = (p, b, T, R, I, F, K, U, z = !1) => {
    const H = p && p.children, ae = p ? p.shapeFlag : 0, G = b.children, { patchFlag: ee, shapeFlag: de } = b;
    if (ee > 0) {
      if (ee & 128) {
        me(
          H,
          G,
          T,
          R,
          I,
          F,
          K,
          U,
          z
        );
        return;
      } else if (ee & 256) {
        be(
          H,
          G,
          T,
          R,
          I,
          F,
          K,
          U,
          z
        );
        return;
      }
    }
    de & 8 ? (ae & 16 && ce(H, I, F), G !== H && u(T, G)) : ae & 16 ? de & 16 ? me(
      H,
      G,
      T,
      R,
      I,
      F,
      K,
      U,
      z
    ) : ce(H, I, F, !0) : (ae & 8 && u(T, ""), de & 16 && V(
      G,
      T,
      R,
      I,
      F,
      K,
      U,
      z
    ));
  }, be = (p, b, T, R, I, F, K, U, z) => {
    p = p || Si, b = b || Si;
    const H = p.length, ae = b.length, G = Math.min(H, ae);
    let ee;
    for (ee = 0; ee < G; ee++) {
      const de = b[ee] = z ? Vn(b[ee]) : Ft(b[ee]);
      h(
        p[ee],
        de,
        T,
        null,
        I,
        F,
        K,
        U,
        z
      );
    }
    H > ae ? ce(
      p,
      I,
      F,
      !0,
      !1,
      G
    ) : V(
      b,
      T,
      R,
      I,
      F,
      K,
      U,
      z,
      G
    );
  }, me = (p, b, T, R, I, F, K, U, z) => {
    let H = 0;
    const ae = b.length;
    let G = p.length - 1, ee = ae - 1;
    for (; H <= G && H <= ee; ) {
      const de = p[H], we = b[H] = z ? Vn(b[H]) : Ft(b[H]);
      if (Gn(de, we))
        h(
          de,
          we,
          T,
          null,
          I,
          F,
          K,
          U,
          z
        );
      else
        break;
      H++;
    }
    for (; H <= G && H <= ee; ) {
      const de = p[G], we = b[ee] = z ? Vn(b[ee]) : Ft(b[ee]);
      if (Gn(de, we))
        h(
          de,
          we,
          T,
          null,
          I,
          F,
          K,
          U,
          z
        );
      else
        break;
      G--, ee--;
    }
    if (H > G) {
      if (H <= ee) {
        const de = ee + 1, we = de < ae ? b[de].el : R;
        for (; H <= ee; )
          h(
            null,
            b[H] = z ? Vn(b[H]) : Ft(b[H]),
            T,
            we,
            I,
            F,
            K,
            U,
            z
          ), H++;
      }
    } else if (H > ee)
      for (; H <= G; )
        Ve(p[H], I, F, !0), H++;
    else {
      const de = H, we = H, $e = /* @__PURE__ */ new Map();
      for (H = we; H <= ee; H++) {
        const ut = b[H] = z ? Vn(b[H]) : Ft(b[H]);
        ut.key != null && (_.NODE_ENV !== "production" && $e.has(ut.key) && j(
          "Duplicate keys found during update:",
          JSON.stringify(ut.key),
          "Make sure keys are unique."
        ), $e.set(ut.key, H));
      }
      let Pe, wt = 0;
      const ot = ee - we + 1;
      let $t = !1, St = 0;
      const Mi = new Array(ot);
      for (H = 0; H < ot; H++) Mi[H] = 0;
      for (H = de; H <= G; H++) {
        const ut = p[H];
        if (wt >= ot) {
          Ve(ut, I, F, !0);
          continue;
        }
        let Ut;
        if (ut.key != null)
          Ut = $e.get(ut.key);
        else
          for (Pe = we; Pe <= ee; Pe++)
            if (Mi[Pe - we] === 0 && Gn(ut, b[Pe])) {
              Ut = Pe;
              break;
            }
        Ut === void 0 ? Ve(ut, I, F, !0) : (Mi[Ut - we] = H + 1, Ut >= St ? St = Ut : $t = !0, h(
          ut,
          b[Ut],
          T,
          null,
          I,
          F,
          K,
          U,
          z
        ), wt++);
      }
      const Bl = $t ? Yv(Mi) : Si;
      for (Pe = Bl.length - 1, H = ot - 1; H >= 0; H--) {
        const ut = we + H, Ut = b[ut], Rl = ut + 1 < ae ? b[ut + 1].el : R;
        Mi[H] === 0 ? h(
          null,
          Ut,
          T,
          Rl,
          I,
          F,
          K,
          U,
          z
        ) : $t && (Pe < 0 || H !== Bl[Pe] ? ne(Ut, T, Rl, 2) : Pe--);
      }
    }
  }, ne = (p, b, T, R, I = null) => {
    const { el: F, type: K, transition: U, children: z, shapeFlag: H } = p;
    if (H & 6) {
      ne(p.component.subTree, b, T, R);
      return;
    }
    if (H & 128) {
      p.suspense.move(b, T, R);
      return;
    }
    if (H & 64) {
      K.move(p, b, T, Rn);
      return;
    }
    if (K === ke) {
      i(F, b, T);
      for (let G = 0; G < z.length; G++)
        ne(z[G], b, T, R);
      i(p.anchor, b, T);
      return;
    }
    if (K === Ho) {
      M(p, b, T);
      return;
    }
    if (R !== 2 && H & 1 && U)
      if (R === 0)
        U.beforeEnter(F), i(F, b, T), ht(() => U.enter(F), I);
      else {
        const { leave: G, delayLeave: ee, afterLeave: de } = U, we = () => i(F, b, T), $e = () => {
          G(F, () => {
            we(), de && de();
          });
        };
        ee ? ee(F, we, $e) : $e();
      }
    else
      i(F, b, T);
  }, Ve = (p, b, T, R = !1, I = !1) => {
    const {
      type: F,
      props: K,
      ref: U,
      children: z,
      dynamicChildren: H,
      shapeFlag: ae,
      patchFlag: G,
      dirs: ee,
      cacheIndex: de
    } = p;
    if (G === -2 && (I = !1), U != null && vr(U, null, T, p, !0), de != null && (b.renderCache[de] = void 0), ae & 256) {
      b.ctx.deactivate(p);
      return;
    }
    const we = ae & 1 && ee, $e = !Zi(p);
    let Pe;
    if ($e && (Pe = K && K.onVnodeBeforeUnmount) && Wt(Pe, b, p), ae & 6)
      Y(p.component, T, R);
    else {
      if (ae & 128) {
        p.suspense.unmount(T, R);
        return;
      }
      we && Hn(p, null, b, "beforeUnmount"), ae & 64 ? p.type.remove(
        p,
        b,
        T,
        Rn,
        R
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== ke || G > 0 && G & 64) ? ce(
        H,
        b,
        T,
        !1,
        !0
      ) : (F === ke && G & 384 || !I && ae & 16) && ce(z, b, T), R && Je(p);
    }
    ($e && (Pe = K && K.onVnodeUnmounted) || we) && ht(() => {
      Pe && Wt(Pe, b, p), we && Hn(p, null, b, "unmounted");
    }, T);
  }, Je = (p) => {
    const { type: b, el: T, anchor: R, transition: I } = p;
    if (b === ke) {
      _.NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && I && !I.persisted ? p.children.forEach((K) => {
        K.type === Ke ? o(K.el) : Je(K);
      }) : Qe(T, R);
      return;
    }
    if (b === Ho) {
      x(p);
      return;
    }
    const F = () => {
      o(T), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (p.shapeFlag & 1 && I && !I.persisted) {
      const { leave: K, delayLeave: U } = I, z = () => K(T, F);
      U ? U(p.el, F, z) : z();
    } else
      F();
  }, Qe = (p, b) => {
    let T;
    for (; p !== b; )
      T = m(p), o(p), p = T;
    o(b);
  }, Y = (p, b, T) => {
    _.NODE_ENV !== "production" && p.type.__hmrId && Km(p);
    const { bum: R, scope: I, job: F, subTree: K, um: U, m: z, a: H } = p;
    oa(z), oa(H), R && Fi(R), I.stop(), F && (F.flags |= 8, Ve(K, p, b, T)), U && ht(U, b), ht(() => {
      p.isUnmounted = !0;
    }, b), b && b.pendingBranch && !b.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === b.pendingId && (b.deps--, b.deps === 0 && b.resolve()), _.NODE_ENV !== "production" && Qm(p);
  }, ce = (p, b, T, R = !1, I = !1, F = 0) => {
    for (let K = F; K < p.length; K++)
      Ve(p[K], b, T, R, I);
  }, Ie = (p) => {
    if (p.shapeFlag & 6)
      return Ie(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const b = m(p.anchor || p.el), T = b && b[ac];
    return T ? m(T) : b;
  };
  let at = !1;
  const Ge = (p, b, T) => {
    p == null ? b._vnode && Ve(b._vnode, null, null, !0) : h(
      b._vnode || null,
      p,
      b,
      null,
      null,
      null,
      T
    ), b._vnode = p, at || (at = !0, Wl(), ec(), at = !1);
  }, Rn = {
    p: h,
    um: Ve,
    m: ne,
    r: Je,
    mt: Z,
    mc: V,
    pc: ye,
    pbc: A,
    n: Ie,
    o: e
  };
  let No, xo;
  return {
    render: Ge,
    hydrate: No,
    createApp: Tv(Ge, No)
  };
}
function Ks({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function jn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Gv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Xi(e, t, n = !1) {
  const i = e.children, o = t.children;
  if (te(i) && te(o))
    for (let s = 0; s < i.length; s++) {
      const r = i[s];
      let l = o[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = Vn(o[s]), l.el = r.el), !n && l.patchFlag !== -2 && Xi(r, l)), l.type === ci && (l.el = r.el), _.NODE_ENV !== "production" && l.type === Ke && !l.el && (l.el = r.el);
    }
}
function Yv(e) {
  const t = e.slice(), n = [0];
  let i, o, s, r, l;
  const a = e.length;
  for (i = 0; i < a; i++) {
    const d = e[i];
    if (d !== 0) {
      if (o = n[n.length - 1], e[o] < d) {
        t[i] = o, n.push(i);
        continue;
      }
      for (s = 0, r = n.length - 1; s < r; )
        l = s + r >> 1, e[n[l]] < d ? s = l + 1 : r = l;
      d < e[n[s]] && (s > 0 && (t[i] = n[s - 1]), n[s] = i);
    }
  }
  for (s = n.length, r = n[s - 1]; s-- > 0; )
    n[s] = r, r = t[r];
  return n;
}
function Ic(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ic(t);
}
function oa(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const qv = Symbol.for("v-scx"), Zv = () => {
  {
    const e = Re(qv);
    return e || _.NODE_ENV !== "production" && j(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function yn(e, t) {
  return rl(e, null, t);
}
function ve(e, t, n) {
  return _.NODE_ENV !== "production" && !re(t) && j(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), rl(e, t, n);
}
function rl(e, t, n = Te) {
  const { immediate: i, deep: o, flush: s, once: r } = n;
  _.NODE_ENV !== "production" && !t && (i !== void 0 && j(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && j(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && j(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = Fe({}, n);
  _.NODE_ENV !== "production" && (l.onWarn = j);
  const a = t && i || !t && s !== "post";
  let d;
  if (lo) {
    if (s === "sync") {
      const v = Zv();
      d = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!a) {
      const v = () => {
      };
      return v.stop = qe, v.resume = qe, v.pause = qe, v;
    }
  }
  const u = Ze;
  l.call = (v, g, h) => Rt(v, u, g, h);
  let c = !1;
  s === "post" ? l.scheduler = (v) => {
    ht(v, u && u.suspense);
  } : s !== "sync" && (c = !0, l.scheduler = (v, g) => {
    g ? v() : Es(v);
  }), l.augmentJob = (v) => {
    t && (v.flags |= 4), c && (v.flags |= 2, u && (v.id = u.uid, v.i = u));
  };
  const m = Mm(e, t, l);
  return lo && (d ? d.push(m) : a && m()), m;
}
function Xv(e, t, n) {
  const i = this.proxy, o = Me(e) ? e.includes(".") ? $c(i, e) : () => i[e] : e.bind(i, i);
  let s;
  re(t) ? s = t : (s = t.handler, n = t);
  const r = _o(this), l = rl(o, s.bind(i), n);
  return r(), l;
}
function $c(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let o = 0; o < n.length && i; o++)
      i = i[n[o]];
    return i;
  };
}
const Jv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${tt(t)}Modifiers`] || e[`${Dn(t)}Modifiers`];
function Qv(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Te;
  if (_.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [c]
    } = e;
    if (u)
      if (!(t in u))
        (!c || !(Wn(tt(t)) in c)) && j(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Wn(tt(t))}" prop.`
        );
      else {
        const m = u[t];
        re(m) && (m(...n) || j(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), r = s && Jv(i, t.slice(7));
  if (r && (r.trim && (o = n.map((u) => Me(u) ? u.trim() : u)), r.number && (o = n.map(Yf))), _.NODE_ENV !== "production" && nv(e, t, o), _.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && i[Wn(u)] && j(
      `Event "${u}" is emitted in component ${Vs(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Dn(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = i[l = Wn(t)] || // also try camelCase event handler (#2249)
  i[l = Wn(tt(t))];
  !a && s && (a = i[l = Wn(Dn(t))]), a && Rt(
    a,
    e,
    6,
    o
  );
  const d = i[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Rt(
      d,
      e,
      6,
      o
    );
  }
}
function Mc(e, t, n = !1) {
  const i = t.emitsCache, o = i.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let r = {}, l = !1;
  if (!re(e)) {
    const a = (d) => {
      const u = Mc(d, t, !0);
      u && (l = !0, Fe(r, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (xe(e) && i.set(e, null), null) : (te(s) ? s.forEach((a) => r[a] = null) : Fe(r, s), xe(e) && i.set(e, r), r);
}
function ks(e, t) {
  return !e || !vo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, Dn(t)) || Se(e, t));
}
let wr = !1;
function ns() {
  wr = !0;
}
function Gs(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: o,
    propsOptions: [s],
    slots: r,
    attrs: l,
    emit: a,
    render: d,
    renderCache: u,
    props: c,
    data: m,
    setupState: v,
    ctx: g,
    inheritAttrs: h
  } = e, w = Qo(e);
  let k, O;
  _.NODE_ENV !== "production" && (wr = !1);
  try {
    if (n.shapeFlag & 4) {
      const x = o || i, N = _.NODE_ENV !== "production" && v.__isScriptSetup ? new Proxy(x, {
        get($, C, V) {
          return j(
            `Property '${String(
              C
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get($, C, V);
        }
      }) : x;
      k = Ft(
        d.call(
          N,
          x,
          u,
          _.NODE_ENV !== "production" ? Zt(c) : c,
          v,
          m,
          g
        )
      ), O = l;
    } else {
      const x = t;
      _.NODE_ENV !== "production" && l === c && ns(), k = Ft(
        x.length > 1 ? x(
          _.NODE_ENV !== "production" ? Zt(c) : c,
          _.NODE_ENV !== "production" ? {
            get attrs() {
              return ns(), Zt(l);
            },
            slots: r,
            emit: a
          } : { attrs: l, slots: r, emit: a }
        ) : x(
          _.NODE_ENV !== "production" ? Zt(c) : c,
          null
        )
      ), O = t.props ? l : eg(l);
    }
  } catch (x) {
    Ji.length = 0, po(x, e, 1), k = f(Ke);
  }
  let P = k, M;
  if (_.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && ([P, M] = Fc(k)), O && h !== !1) {
    const x = Object.keys(O), { shapeFlag: N } = P;
    if (x.length) {
      if (N & 7)
        s && x.some(Go) && (O = tg(
          O,
          s
        )), P = Ht(P, O, !1, !0);
      else if (_.NODE_ENV !== "production" && !wr && P.type !== Ke) {
        const $ = Object.keys(l), C = [], V = [];
        for (let L = 0, A = $.length; L < A; L++) {
          const S = $[L];
          vo(S) ? Go(S) || C.push(S[2].toLowerCase() + S.slice(3)) : V.push(S);
        }
        V.length && j(
          `Extraneous non-props attributes (${V.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), C.length && j(
          `Extraneous non-emits event listeners (${C.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (_.NODE_ENV !== "production" && !sa(P) && j(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), P = Ht(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(n.dirs) : n.dirs), n.transition && (_.NODE_ENV !== "production" && !sa(P) && j(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), li(P, n.transition)), _.NODE_ENV !== "production" && M ? M(P) : k = P, Qo(w), k;
}
const Fc = (e) => {
  const t = e.children, n = e.dynamicChildren, i = ll(t, !1);
  if (i) {
    if (_.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048)
      return Fc(i);
  } else return [e, void 0];
  const o = t.indexOf(i), s = n ? n.indexOf(i) : -1, r = (l) => {
    t[o] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ft(i), r];
};
function ll(e, t = !0) {
  let n;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (Vi(o)) {
      if (o.type !== Ke || o.children === "v-if") {
        if (n)
          return;
        if (n = o, _.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return ll(n.children);
      }
    } else
      return;
  }
  return n;
}
const eg = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, tg = (e, t) => {
  const n = {};
  for (const i in e)
    (!Go(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
}, sa = (e) => e.shapeFlag & 7 || e.type === Ke;
function ng(e, t, n) {
  const { props: i, children: o, component: s } = e, { props: r, children: l, patchFlag: a } = t, d = s.emitsOptions;
  if (_.NODE_ENV !== "production" && (o || l) && Lt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return i ? ra(i, r, d) : !!r;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        const m = u[c];
        if (r[m] !== i[m] && !ks(d, m))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : i === r ? !1 : i ? r ? ra(i, r, d) : !0 : !!r;
  return !1;
}
function ra(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < i.length; o++) {
    const s = i[o];
    if (t[s] !== e[s] && !ks(n, s))
      return !0;
  }
  return !1;
}
function ig({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Lc = (e) => e.__isSuspense;
function og(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : Qu(e);
}
const ke = Symbol.for("v-fgt"), ci = Symbol.for("v-txt"), Ke = Symbol.for("v-cmt"), Ho = Symbol.for("v-stc"), Ji = [];
let Ct = null;
function _e(e = !1) {
  Ji.push(Ct = e ? null : []);
}
function sg() {
  Ji.pop(), Ct = Ji[Ji.length - 1] || null;
}
let ro = 1;
function la(e) {
  ro += e, e < 0 && Ct && (Ct.hasOnce = !0);
}
function Bc(e) {
  return e.dynamicChildren = ro > 0 ? Ct || Si : null, sg(), ro > 0 && Ct && Ct.push(e), e;
}
function Yn(e, t, n, i, o, s) {
  return Bc(
    Ee(
      e,
      t,
      n,
      i,
      o,
      s,
      !0
    )
  );
}
function Ne(e, t, n, i, o) {
  return Bc(
    f(
      e,
      t,
      n,
      i,
      o,
      !0
    )
  );
}
function Vi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Gn(e, t) {
  if (_.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Bo.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const rg = (...e) => Hc(
  ...e
), Rc = ({ key: e }) => e ?? null, jo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Me(e) || Ae(e) || re(e) ? { i: rt, r: e, k: t, f: !!n } : e : null);
function Ee(e, t = null, n = null, i = 0, o = null, s = e === ke ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Rc(t),
    ref: t && jo(t),
    scopeId: rc,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: i,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: rt
  };
  return l ? (al(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= Me(n) ? 8 : 16), _.NODE_ENV !== "production" && a.key !== a.key && j("VNode created with invalid key (NaN). VNode type:", a.type), ro > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Ct && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ct.push(a), a;
}
const f = _.NODE_ENV !== "production" ? rg : Hc;
function Hc(e, t = null, n = null, i = 0, o = null, s = !1) {
  if ((!e || e === yv) && (_.NODE_ENV !== "production" && !e && j(`Invalid vnode type when creating vnode: ${e}.`), e = Ke), Vi(e)) {
    const l = Ht(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && al(l, n), ro > 0 && !s && Ct && (l.shapeFlag & 6 ? Ct[Ct.indexOf(e)] = l : Ct.push(l)), l.patchFlag = -2, l;
  }
  if (Wc(e) && (e = e.__vccOpts), t) {
    t = lg(t);
    let { class: l, style: a } = t;
    l && !Me(l) && (t.class = eo(l)), xe(a) && (io(a) && !te(a) && (a = Fe({}, a)), t.style = Qi(a));
  }
  const r = Me(e) ? 1 : Lc(e) ? 128 : uc(e) ? 64 : xe(e) ? 4 : re(e) ? 2 : 0;
  return _.NODE_ENV !== "production" && r & 4 && io(e) && (e = J(e), j(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Ee(
    e,
    t,
    n,
    i,
    o,
    r,
    s,
    !0
  );
}
function lg(e) {
  return e ? io(e) || xc(e) ? Fe({}, e) : e : null;
}
function Ht(e, t, n = !1, i = !1) {
  const { props: o, ref: s, patchFlag: r, children: l, transition: a } = e, d = t ? Ce(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Rc(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? te(s) ? s.concat(jo(t)) : [s, jo(t)] : jo(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: _.NODE_ENV !== "production" && r === -1 && te(l) ? l.map(jc) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ke ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ht(e.ssContent),
    ssFallback: e.ssFallback && Ht(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && i && li(
    u,
    a.clone(u)
  ), u;
}
function jc(e) {
  const t = Ht(e);
  return te(e.children) && (t.children = e.children.map(jc)), t;
}
function ie(e = " ", t = 0) {
  return f(ci, null, e, t);
}
function pi(e = "", t = !1) {
  return t ? (_e(), Ne(Ke, null, e)) : f(Ke, null, e);
}
function Ft(e) {
  return e == null || typeof e == "boolean" ? f(Ke) : te(e) ? f(
    ke,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vi(e) ? Vn(e) : f(ci, null, String(e));
}
function Vn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ht(e);
}
function al(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (te(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), al(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !xc(t) ? t._ctx = rt : o === 3 && rt && (rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else re(t) ? (t = { default: t, _ctx: rt }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [ie(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ce(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const o in i)
      if (o === "class")
        t.class !== i.class && (t.class = eo([t.class, i.class]));
      else if (o === "style")
        t.style = Qi([t.style, i.style]);
      else if (vo(o)) {
        const s = t[o], r = i[o];
        r && s !== r && !(te(s) && s.includes(r)) && (t[o] = s ? [].concat(s, r) : r);
      } else o !== "" && (t[o] = i[o]);
  }
  return t;
}
function Wt(e, t, n, i = null) {
  Rt(e, t, 7, [
    n,
    i
  ]);
}
const ag = Cc();
let ug = 0;
function cg(e, t, n) {
  const i = e.type, o = (t ? t.appContext : e.appContext) || ag, s = {
    uid: ug++,
    vnode: e,
    type: i,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Ou(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Oc(i, o),
    emitsOptions: Mc(i, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Te,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Te,
    data: Te,
    props: Te,
    attrs: Te,
    slots: Te,
    refs: Te,
    setupState: Te,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return _.NODE_ENV !== "production" ? s.ctx = _v(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Qv.bind(null, s), e.ce && e.ce(s), s;
}
let Ze = null;
const Ns = () => Ze || rt;
let is, Sr;
{
  const e = go(), t = (n, i) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(i), (s) => {
      o.length > 1 ? o.forEach((r) => r(s)) : o[0](s);
    };
  };
  is = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ze = n
  ), Sr = t(
    "__VUE_SSR_SETTERS__",
    (n) => lo = n
  );
}
const _o = (e) => {
  const t = Ze;
  return is(e), e.scope.on(), () => {
    e.scope.off(), is(t);
  };
}, aa = () => {
  Ze && Ze.scope.off(), is(null);
}, dg = /* @__PURE__ */ vn("slot,component");
function Er(e, { isNativeTag: t }) {
  (dg(e) || t(e)) && j(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function zc(e) {
  return e.vnode.shapeFlag & 4;
}
let lo = !1;
function fg(e, t = !1, n = !1) {
  t && Sr(t);
  const { props: i, children: o } = e.vnode, s = zc(e);
  Dv(e, i, s, t), jv(e, o, n);
  const r = s ? mg(e, t) : void 0;
  return t && Sr(!1), r;
}
function mg(e, t) {
  var n;
  const i = e.type;
  if (_.NODE_ENV !== "production") {
    if (i.name && Er(i.name, e.appContext.config), i.components) {
      const s = Object.keys(i.components);
      for (let r = 0; r < s.length; r++)
        Er(s[r], e.appContext.config);
    }
    if (i.directives) {
      const s = Object.keys(i.directives);
      for (let r = 0; r < s.length; r++)
        lc(s[r]);
    }
    i.compilerOptions && vg() && j(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Sc), _.NODE_ENV !== "production" && wv(e);
  const { setup: o } = i;
  if (o) {
    gn();
    const s = e.setupContext = o.length > 1 ? hg(e) : null, r = _o(e), l = Pi(
      o,
      e,
      0,
      [
        _.NODE_ENV !== "production" ? Zt(e.props) : e.props,
        s
      ]
    ), a = jr(l);
    if (hn(), r(), (a || e.sp) && !Zi(e) && hc(e), a) {
      if (l.then(aa, aa), t)
        return l.then((d) => {
          ua(e, d, t);
        }).catch((d) => {
          po(d, e, 0);
        });
      if (e.asyncDep = l, _.NODE_ENV !== "production" && !e.suspense) {
        const d = (n = i.name) != null ? n : "Anonymous";
        j(
          `Component <${d}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ua(e, l, t);
  } else
    Uc(e, t);
}
function ua(e, t, n) {
  re(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : xe(t) ? (_.NODE_ENV !== "production" && Vi(t) && j(
    "setup() should not return VNodes directly - return a render function instead."
  ), _.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Yu(t), _.NODE_ENV !== "production" && Sv(e)) : _.NODE_ENV !== "production" && t !== void 0 && j(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Uc(e, n);
}
let Cr;
const vg = () => !Cr;
function Uc(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && Cr && !i.render) {
      const o = i.template || ol(e).template;
      if (o) {
        _.NODE_ENV !== "production" && on(e, "compile");
        const { isCustomElement: s, compilerOptions: r } = e.appContext.config, { delimiters: l, compilerOptions: a } = i, d = Fe(
          Fe(
            {
              isCustomElement: s,
              delimiters: l
            },
            r
          ),
          a
        );
        i.render = Cr(o, d), _.NODE_ENV !== "production" && sn(e, "compile");
      }
    }
    e.render = i.render || qe;
  }
  {
    const o = _o(e);
    gn();
    try {
      Cv(e);
    } finally {
      hn(), o();
    }
  }
  _.NODE_ENV !== "production" && !i.render && e.render === qe && !t && (i.template ? j(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : j("Component is missing template or render function: ", i));
}
const ca = _.NODE_ENV !== "production" ? {
  get(e, t) {
    return ns(), Ye(e, "get", ""), e[t];
  },
  set() {
    return j("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return j("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Ye(e, "get", ""), e[t];
  }
};
function gg(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Ye(e, "get", "$slots"), t[n];
    }
  });
}
function hg(e) {
  const t = (n) => {
    if (_.NODE_ENV !== "production" && (e.exposed && j("expose() should be called only once per setup()."), n != null)) {
      let i = typeof n;
      i === "object" && (te(n) ? i = "array" : Ae(n) && (i = "ref")), i !== "object" && j(
        `expose() should be passed a plain object, received ${i}.`
      );
    }
    e.exposed = n || {};
  };
  if (_.NODE_ENV !== "production") {
    let n, i;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, ca));
      },
      get slots() {
        return i || (i = gg(e));
      },
      get emit() {
        return (o, ...s) => e.emit(o, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ca),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function xs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yu(Ku(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ti)
        return ti[n](e);
    },
    has(t, n) {
      return n in t || n in ti;
    }
  })) : e.proxy;
}
const pg = /(?:^|[-_])(\w)/g, yg = (e) => e.replace(pg, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ul(e, t = !0) {
  return re(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Vs(e, t, n = !1) {
  let i = ul(t);
  if (!i && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (i = o[1]);
  }
  if (!i && e && e.parent) {
    const o = (s) => {
      for (const r in s)
        if (s[r] === t)
          return r;
    };
    i = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return i ? yg(i) : n ? "App" : "Anonymous";
}
function Wc(e) {
  return re(e) && "__vccOpts" in e;
}
const y = (e, t) => {
  const n = Im(e, t, lo);
  if (_.NODE_ENV !== "production") {
    const i = Ns();
    i && i.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function $n(e, t, n) {
  const i = arguments.length;
  return i === 2 ? xe(t) && !te(t) ? Vi(t) ? f(e, null, [t]) : f(e, t) : f(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Vi(n) && (n = [n]), f(e, t, n));
}
function bg() {
  if (_.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, i = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(c) {
      return xe(c) ? c.__isVue ? ["div", e, "VueInstance"] : Ae(c) ? [
        "div",
        {},
        ["span", e, u(c)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in c ? c._value : c),
        ">"
      ] : Jn(c) ? [
        "div",
        {},
        ["span", e, vt(c) ? "ShallowReactive" : "Reactive"],
        "<",
        l(c),
        `>${mn(c) ? " (readonly)" : ""}`
      ] : mn(c) ? [
        "div",
        {},
        ["span", e, vt(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...s(c.$)
        ];
    }
  };
  function s(c) {
    const m = [];
    c.type.props && c.props && m.push(r("props", J(c.props))), c.setupState !== Te && m.push(r("setup", c.setupState)), c.data !== Te && m.push(r("data", J(c.data)));
    const v = a(c, "computed");
    v && m.push(r("computed", v));
    const g = a(c, "inject");
    return g && m.push(r("injected", g)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: i.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), m;
  }
  function r(c, m) {
    return m = Fe({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((v) => [
          "div",
          {},
          ["span", i, v + ": "],
          l(m[v], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(c, m = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", i, c] : xe(c) ? ["object", { object: m ? J(c) : c }] : ["span", n, String(c)];
  }
  function a(c, m) {
    const v = c.type;
    if (re(v))
      return;
    const g = {};
    for (const h in c.ctx)
      d(v, h, m) && (g[h] = c.ctx[h]);
    return g;
  }
  function d(c, m, v) {
    const g = c[v];
    if (te(g) && g.includes(m) || xe(g) && m in g || c.extends && d(c.extends, m, v) || c.mixins && c.mixins.some((h) => d(h, m, v)))
      return !0;
  }
  function u(c) {
    return vt(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const da = "3.5.12", pt = _.NODE_ENV !== "production" ? j : qe;
var It = {};
let kr;
const fa = typeof window < "u" && window.trustedTypes;
if (fa)
  try {
    kr = /* @__PURE__ */ fa.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    It.NODE_ENV !== "production" && pt(`Error creating trusted types policy: ${e}`);
  }
const Kc = kr ? (e) => kr.createHTML(e) : (e) => e, _g = "http://www.w3.org/2000/svg", wg = "http://www.w3.org/1998/Math/MathML", ln = typeof document < "u" ? document : null, ma = ln && /* @__PURE__ */ ln.createElement("template"), Sg = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const o = t === "svg" ? ln.createElementNS(_g, e) : t === "mathml" ? ln.createElementNS(wg, e) : n ? ln.createElement(e, { is: n }) : ln.createElement(e);
    return e === "select" && i && i.multiple != null && o.setAttribute("multiple", i.multiple), o;
  },
  createText: (e) => ln.createTextNode(e),
  createComment: (e) => ln.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ln.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, o, s) {
    const r = n ? n.previousSibling : t.lastChild;
    if (o && (o === s || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); )
        ;
    else {
      ma.innerHTML = Kc(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const l = ma.content;
      if (i === "svg" || i === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Cn = "transition", Ri = "animation", Oi = Symbol("_vtc"), Gc = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Yc = /* @__PURE__ */ Fe(
  {},
  fc,
  Gc
), Eg = (e) => (e.displayName = "Transition", e.props = Yc, e), ai = /* @__PURE__ */ Eg(
  (e, { slots: t }) => $n(av, qc(e), t)
), zn = (e, t = []) => {
  te(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, va = (e) => e ? te(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function qc(e) {
  const t = {};
  for (const S in e)
    S in Gc || (t[S] = e[S]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: i,
    duration: o,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: r = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = s,
    appearActiveClass: d = r,
    appearToClass: u = l,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: m = `${n}-leave-active`,
    leaveToClass: v = `${n}-leave-to`
  } = e, g = Cg(o), h = g && g[0], w = g && g[1], {
    onBeforeEnter: k,
    onEnter: O,
    onEnterCancelled: P,
    onLeave: M,
    onLeaveCancelled: x,
    onBeforeAppear: N = k,
    onAppear: $ = O,
    onAppearCancelled: C = P
  } = t, V = (S, D, B) => {
    kn(S, D ? u : l), kn(S, D ? d : r), B && B();
  }, L = (S, D) => {
    S._isLeaving = !1, kn(S, c), kn(S, v), kn(S, m), D && D();
  }, A = (S) => (D, B) => {
    const Z = S ? $ : O, Q = () => V(D, S, B);
    zn(Z, [D, Q]), ga(() => {
      kn(D, S ? a : s), rn(D, S ? u : l), va(Z) || ha(D, i, h, Q);
    });
  };
  return Fe(t, {
    onBeforeEnter(S) {
      zn(k, [S]), rn(S, s), rn(S, r);
    },
    onBeforeAppear(S) {
      zn(N, [S]), rn(S, a), rn(S, d);
    },
    onEnter: A(!1),
    onAppear: A(!0),
    onLeave(S, D) {
      S._isLeaving = !0;
      const B = () => L(S, D);
      rn(S, c), rn(S, m), Xc(), ga(() => {
        S._isLeaving && (kn(S, c), rn(S, v), va(M) || ha(S, i, w, B));
      }), zn(M, [S, B]);
    },
    onEnterCancelled(S) {
      V(S, !1), zn(P, [S]);
    },
    onAppearCancelled(S) {
      V(S, !0), zn(C, [S]);
    },
    onLeaveCancelled(S) {
      L(S), zn(x, [S]);
    }
  });
}
function Cg(e) {
  if (e == null)
    return null;
  if (xe(e))
    return [Ys(e.enter), Ys(e.leave)];
  {
    const t = Ys(e);
    return [t, t];
  }
}
function Ys(e) {
  const t = qf(e);
  return It.NODE_ENV !== "production" && Hm(t, "<transition> explicit duration"), t;
}
function rn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Oi] || (e[Oi] = /* @__PURE__ */ new Set())).add(t);
}
function kn(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Oi];
  n && (n.delete(t), n.size || (e[Oi] = void 0));
}
function ga(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let kg = 0;
function ha(e, t, n, i) {
  const o = e._endId = ++kg, s = () => {
    o === e._endId && i();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: r, timeout: l, propCount: a } = Zc(e, t);
  if (!r)
    return i();
  const d = r + "end";
  let u = 0;
  const c = () => {
    e.removeEventListener(d, m), s();
  }, m = (v) => {
    v.target === e && ++u >= a && c();
  };
  setTimeout(() => {
    u < a && c();
  }, l + 1), e.addEventListener(d, m);
}
function Zc(e, t) {
  const n = window.getComputedStyle(e), i = (g) => (n[g] || "").split(", "), o = i(`${Cn}Delay`), s = i(`${Cn}Duration`), r = pa(o, s), l = i(`${Ri}Delay`), a = i(`${Ri}Duration`), d = pa(l, a);
  let u = null, c = 0, m = 0;
  t === Cn ? r > 0 && (u = Cn, c = r, m = s.length) : t === Ri ? d > 0 && (u = Ri, c = d, m = a.length) : (c = Math.max(r, d), u = c > 0 ? r > d ? Cn : Ri : null, m = u ? u === Cn ? s.length : a.length : 0);
  const v = u === Cn && /\b(transform|all)(,|$)/.test(
    i(`${Cn}Property`).toString()
  );
  return {
    type: u,
    timeout: c,
    propCount: m,
    hasTransform: v
  };
}
function pa(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => ya(n) + ya(e[i])));
}
function ya(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Xc() {
  return document.body.offsetHeight;
}
function Ng(e, t, n) {
  const i = e[Oi];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const os = Symbol("_vod"), Jc = Symbol("_vsh"), Mn = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[os] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Hi(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Hi(e, !0), i.enter(e)) : i.leave(e, () => {
      Hi(e, !1);
    }) : Hi(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Hi(e, t);
  }
};
It.NODE_ENV !== "production" && (Mn.name = "show");
function Hi(e, t) {
  e.style.display = t ? e[os] : "none", e[Jc] = !t;
}
const xg = Symbol(It.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Vg = /(^|;)\s*display\s*:/;
function Og(e, t, n) {
  const i = e.style, o = Me(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (Me(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && zo(i, l, "");
        }
      else
        for (const r in t)
          n[r] == null && zo(i, r, "");
    for (const r in n)
      r === "display" && (s = !0), zo(i, r, n[r]);
  } else if (o) {
    if (t !== n) {
      const r = i[xg];
      r && (n += ";" + r), i.cssText = n, s = Vg.test(n);
    }
  } else t && e.removeAttribute("style");
  os in e && (e[os] = s ? i.display : "", e[Jc] && (i.display = "none"));
}
const Tg = /[^\\];\s*$/, ba = /\s*!important$/;
function zo(e, t, n) {
  if (te(n))
    n.forEach((i) => zo(e, t, i));
  else if (n == null && (n = ""), It.NODE_ENV !== "production" && Tg.test(n) && pt(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = Dg(e, t);
    ba.test(n) ? e.setProperty(
      Dn(i),
      n.replace(ba, ""),
      "important"
    ) : e[i] = n;
  }
}
const _a = ["Webkit", "Moz", "ms"], qs = {};
function Dg(e, t) {
  const n = qs[t];
  if (n)
    return n;
  let i = tt(t);
  if (i !== "filter" && i in e)
    return qs[t] = i;
  i = Dt(i);
  for (let o = 0; o < _a.length; o++) {
    const s = _a[o] + i;
    if (s in e)
      return qs[t] = s;
  }
  return t;
}
const wa = "http://www.w3.org/1999/xlink";
function Sa(e, t, n, i, o, s = lm(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(wa, t.slice(6, t.length)) : e.setAttributeNS(wa, t, n) : n == null || s && !Nu(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : An(n) ? String(n) : n
  );
}
function Ea(e, t, n, i, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Kc(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Nu(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    It.NODE_ENV !== "production" && !r && pt(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(o || t);
}
function Pg(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Ag(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Ca = Symbol("_vei");
function Ig(e, t, n, i, o = null) {
  const s = e[Ca] || (e[Ca] = {}), r = s[t];
  if (i && r)
    r.value = It.NODE_ENV !== "production" ? Na(i, t) : i;
  else {
    const [l, a] = $g(t);
    if (i) {
      const d = s[t] = Lg(
        It.NODE_ENV !== "production" ? Na(i, t) : i,
        o
      );
      Pg(e, l, d, a);
    } else r && (Ag(e, l, r, a), s[t] = void 0);
  }
}
const ka = /(?:Once|Passive|Capture)$/;
function $g(e) {
  let t;
  if (ka.test(e)) {
    t = {};
    let i;
    for (; i = e.match(ka); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Dn(e.slice(2)), t];
}
let Zs = 0;
const Mg = /* @__PURE__ */ Promise.resolve(), Fg = () => Zs || (Mg.then(() => Zs = 0), Zs = Date.now());
function Lg(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Rt(
      Bg(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = Fg(), n;
}
function Na(e, t) {
  return re(e) || te(e) ? e : (pt(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), qe);
}
function Bg(e, t) {
  if (te(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (o) => !o._stopped && i && i(o)
    );
  } else
    return t;
}
const xa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Rg = (e, t, n, i, o, s) => {
  const r = o === "svg";
  t === "class" ? Ng(e, i, r) : t === "style" ? Og(e, n, i) : vo(t) ? Go(t) || Ig(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Hg(e, t, i, r)) ? (Ea(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Sa(e, t, i, r, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Me(i)) ? Ea(e, tt(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Sa(e, t, i, r));
};
function Hg(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && xa(t) && re(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return xa(t) && Me(n) ? !1 : t in e;
}
const Qc = /* @__PURE__ */ new WeakMap(), ed = /* @__PURE__ */ new WeakMap(), ss = Symbol("_moveCb"), Va = Symbol("_enterCb"), jg = (e) => (delete e.props.mode, e), zg = /* @__PURE__ */ jg({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Fe({}, Yc, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Ns(), i = dc();
    let o, s;
    return nl(() => {
      if (!o.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!Gg(
        o[0].el,
        n.vnode.el,
        r
      ))
        return;
      o.forEach(Ug), o.forEach(Wg);
      const l = o.filter(Kg);
      Xc(), l.forEach((a) => {
        const d = a.el, u = d.style;
        rn(d, r), u.transform = u.webkitTransform = u.transitionDuration = "";
        const c = d[ss] = (m) => {
          m && m.target !== d || (!m || /transform$/.test(m.propertyName)) && (d.removeEventListener("transitionend", c), d[ss] = null, kn(d, r));
        };
        d.addEventListener("transitionend", c);
      });
    }), () => {
      const r = J(e), l = qc(r);
      let a = r.tag || ke;
      if (o = [], s)
        for (let d = 0; d < s.length; d++) {
          const u = s[d];
          u.el && u.el instanceof Element && (o.push(u), li(
            u,
            so(
              u,
              l,
              i,
              n
            )
          ), Qc.set(
            u,
            u.el.getBoundingClientRect()
          ));
        }
      s = t.default ? el(t.default()) : [];
      for (let d = 0; d < s.length; d++) {
        const u = s[d];
        u.key != null ? li(
          u,
          so(u, l, i, n)
        ) : It.NODE_ENV !== "production" && u.type !== ci && pt("<TransitionGroup> children must be keyed.");
      }
      return f(a, null, s);
    };
  }
}), cl = zg;
function Ug(e) {
  const t = e.el;
  t[ss] && t[ss](), t[Va] && t[Va]();
}
function Wg(e) {
  ed.set(e, e.el.getBoundingClientRect());
}
function Kg(e) {
  const t = Qc.get(e), n = ed.get(e), i = t.left - n.left, o = t.top - n.top;
  if (i || o) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${i}px,${o}px)`, s.transitionDuration = "0s", e;
  }
}
function Gg(e, t, n) {
  const i = e.cloneNode(), o = e[Oi];
  o && o.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && i.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && i.classList.add(l)), i.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(i);
  const { hasTransform: r } = Zc(i);
  return s.removeChild(i), r;
}
const Yg = ["ctrl", "shift", "alt", "meta"], qg = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Yg.some((n) => e[`${n}Key`] && !t.includes(n))
}, Xs = (e, t) => {
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (o, ...s) => {
    for (let r = 0; r < t.length; r++) {
      const l = qg[t[r]];
      if (l && l(o, t)) return;
    }
    return e(o, ...s);
  });
}, Zg = /* @__PURE__ */ Fe({ patchProp: Rg }, Sg);
let Oa;
function Xg() {
  return Oa || (Oa = Wv(Zg));
}
const Jg = (...e) => {
  const t = Xg().createApp(...e);
  It.NODE_ENV !== "production" && (eh(t), th(t));
  const { mount: n } = t;
  return t.mount = (i) => {
    const o = nh(i);
    if (!o) return;
    const s = t._component;
    !re(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = n(o, !1, Qg(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
};
function Qg(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function eh(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => im(t) || om(t) || sm(t),
    writable: !1
  });
}
function th(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        pt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, i = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return pt(i), n;
      },
      set() {
        pt(i);
      }
    });
  }
}
function nh(e) {
  if (Me(e)) {
    const t = document.querySelector(e);
    return It.NODE_ENV !== "production" && !t && pt(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return It.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && pt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var ih = {};
function oh() {
  bg();
}
ih.NODE_ENV !== "production" && oh();
function ui(e, t) {
  let n;
  function i() {
    n = Wr(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), i();
    }) : t());
  }
  ve(e, (o) => {
    o && !n ? i() : o || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), zt(() => {
    n == null || n.stop();
  });
}
const Be = typeof window < "u", dl = Be && "IntersectionObserver" in window, sh = Be && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0);
function td(e, t, n) {
  const i = t.length - 1;
  if (i < 0) return e === void 0 ? n : e;
  for (let o = 0; o < i; o++) {
    if (e == null)
      return n;
    e = e[t[o]];
  }
  return e == null || e[t[i]] === void 0 ? n : e[t[i]];
}
function Os(e, t) {
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length ? !1 : n.every((i) => Os(e[i], t[i]));
}
function Nr(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), td(e, t.split("."), n));
}
function ji(e, t, n) {
  if (t === !0) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const o = t(e, n);
    return typeof o > "u" ? n : o;
  }
  if (typeof t == "string") return Nr(e, t, n);
  if (Array.isArray(t)) return td(e, t, n);
  if (typeof t != "function") return n;
  const i = t(e, n);
  return typeof i > "u" ? n : i;
}
function fl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, i) => t + i);
}
function se(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function rh(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ta(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function lh(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const Da = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
}), ah = Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function Js(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function nd(e, t) {
  const n = {}, i = new Set(Object.keys(e));
  for (const o of t)
    i.has(o) && (n[o] = e[o]);
  return n;
}
function xr(e, t, n) {
  const i = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const s in e)
    t.some((r) => r instanceof RegExp ? r.test(s) : r === s) && !(n != null && n.some((r) => r === s)) ? i[s] = e[s] : o[s] = e[s];
  return [i, o];
}
function id(e, t) {
  const n = {
    ...e
  };
  return t.forEach((i) => delete n[i]), n;
}
function uh(e, t) {
  const n = {};
  return t.forEach((i) => n[i] = e[i]), n;
}
const od = /^on[^a-z]/, ml = (e) => od.test(e), ch = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function dh(e) {
  const [t, n] = xr(e, [od]), i = id(t, ch), [o, s] = xr(n, ["class", "style", "id", /^data-/]);
  return Object.assign(o, t), Object.assign(s, i), [o, s];
}
function ni(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Pn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Pa(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function Aa(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Ia(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function fh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let i = 0;
  for (; i < e.length; )
    n.push(e.substr(i, t)), i += t;
  return n;
}
function kt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const i = {};
  for (const o in e)
    i[o] = e[o];
  for (const o in t) {
    const s = e[o], r = t[o];
    if (Ta(s) && Ta(r)) {
      i[o] = kt(s, r, n);
      continue;
    }
    if (n && Array.isArray(s) && Array.isArray(r)) {
      i[o] = n(s, r);
      continue;
    }
    i[o] = r;
  }
  return i;
}
function sd(e) {
  return e.map((t) => t.type === ke ? sd(t.children) : t).flat();
}
function ii() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (ii.cache.has(e)) return ii.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return ii.cache.set(e, t), t;
}
ii.cache = /* @__PURE__ */ new Map();
function yi(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t))
    return t.map((n) => yi(e, n)).flat(1);
  if (t.suspense)
    return yi(e, t.ssContent);
  if (Array.isArray(t.children))
    return t.children.map((n) => yi(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return yi(e, t.component.subTree).flat(1);
  }
  return [];
}
function vl(e) {
  const t = et({}), n = y(e);
  return yn(() => {
    for (const i in n.value)
      t[i] = n.value[i];
  }, {
    flush: "sync"
  }), Zr(t);
}
function rs(e, t) {
  return e.includes(t);
}
function rd(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Ot = () => [Function, Array];
function $a(e, t) {
  return t = "on" + Dt(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function mh(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  if (Array.isArray(e))
    for (const o of e)
      o(...n);
  else typeof e == "function" && e(...n);
}
function ld(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((i) => `${i}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function vh(e, t, n) {
  let i, o = e.indexOf(document.activeElement);
  const s = t === "next" ? 1 : -1;
  do
    o += s, i = e[o];
  while ((!i || i.offsetParent == null) && o < e.length && o >= 0);
  return i;
}
function ad(e, t) {
  var i, o, s, r;
  const n = ld(e);
  if (!t)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((i = n[0]) == null || i.focus());
  else if (t === "first")
    (o = n[0]) == null || o.focus();
  else if (t === "last")
    (s = n.at(-1)) == null || s.focus();
  else if (typeof t == "number")
    (r = n[t]) == null || r.focus();
  else {
    const l = vh(n, t);
    l ? l.focus() : ad(e, t === "next" ? "first" : "last");
  }
}
function gh(e, t) {
  if (!(Be && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function hh(e, t) {
  if (!Be || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function Vr() {
  const e = he(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => lh(e.value)
  }), t;
}
const ud = ["top", "bottom"], ph = ["start", "end", "left", "right"];
function Or(e, t) {
  let [n, i] = e.split(" ");
  return i || (i = rs(ud, n) ? "start" : rs(ph, n) ? "top" : "center"), {
    side: Ma(n, t),
    align: Ma(i, t)
  };
}
function Ma(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Qs(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function er(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function Fa(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function La(e) {
  return rs(ud, e.side) ? "y" : "x";
}
class oi {
  constructor(t) {
    let {
      x: n,
      y: i,
      width: o,
      height: s
    } = t;
    this.x = n, this.y = i, this.width = o, this.height = s;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function Ba(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right)
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom)
    }
  };
}
function cd(e) {
  return Array.isArray(e) ? new oi({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function gl(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), i = n.transform;
  if (i) {
    let o, s, r, l, a;
    if (i.startsWith("matrix3d("))
      o = i.slice(9, -1).split(/, /), s = +o[0], r = +o[5], l = +o[12], a = +o[13];
    else if (i.startsWith("matrix("))
      o = i.slice(7, -1).split(/, /), s = +o[0], r = +o[3], l = +o[4], a = +o[5];
    else
      return new oi(t);
    const d = n.transformOrigin, u = t.x - l - (1 - s) * parseFloat(d), c = t.y - a - (1 - r) * parseFloat(d.slice(d.indexOf(" ") + 1)), m = s ? t.width / s : e.offsetWidth + 1, v = r ? t.height / r : e.offsetHeight + 1;
    return new oi({
      x: u,
      y: c,
      width: m,
      height: v
    });
  } else
    return new oi(t);
}
function bi(e, t, n) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let i;
  try {
    i = e.animate(t, n);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof i.finished > "u" && (i.finished = new Promise((o) => {
    i.onfinish = () => {
      o(i);
    };
  })), i;
}
const Uo = /* @__PURE__ */ new WeakMap();
function yh(e, t) {
  Object.keys(t).forEach((n) => {
    if (ml(n)) {
      const i = rd(n), o = Uo.get(e);
      if (t[n] == null)
        o == null || o.forEach((s) => {
          const [r, l] = s;
          r === i && (e.removeEventListener(i, l), o.delete(s));
        });
      else if (!o || ![...o].some((s) => s[0] === i && s[1] === t[n])) {
        e.addEventListener(i, t[n]);
        const s = o || /* @__PURE__ */ new Set();
        s.add([i, t[n]]), Uo.has(e) || Uo.set(e, s);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function bh(e, t) {
  Object.keys(t).forEach((n) => {
    if (ml(n)) {
      const i = rd(n), o = Uo.get(e);
      o == null || o.forEach((s) => {
        const [r, l] = s;
        r === i && (e.removeEventListener(i, l), o.delete(s));
      });
    } else
      e.removeAttribute(n);
  });
}
const vi = 2.4, Ra = 0.2126729, Ha = 0.7151522, ja = 0.072175, _h = 0.55, wh = 0.58, Sh = 0.57, Eh = 0.62, Ao = 0.03, za = 1.45, Ch = 5e-4, kh = 1.25, Nh = 1.25, Ua = 0.078, Wa = 12.82051282051282, Io = 0.06, Ka = 1e-3;
function Ga(e, t) {
  const n = (e.r / 255) ** vi, i = (e.g / 255) ** vi, o = (e.b / 255) ** vi, s = (t.r / 255) ** vi, r = (t.g / 255) ** vi, l = (t.b / 255) ** vi;
  let a = n * Ra + i * Ha + o * ja, d = s * Ra + r * Ha + l * ja;
  if (a <= Ao && (a += (Ao - a) ** za), d <= Ao && (d += (Ao - d) ** za), Math.abs(d - a) < Ch) return 0;
  let u;
  if (d > a) {
    const c = (d ** _h - a ** wh) * kh;
    u = c < Ka ? 0 : c < Ua ? c - c * Wa * Io : c - Io;
  } else {
    const c = (d ** Eh - a ** Sh) * Nh;
    u = c > -Ka ? 0 : c > -Ua ? c - c * Wa * Io : c + Io;
  }
  return u * 100;
}
function dn(e) {
  pt(`Vuetify: ${e}`);
}
function ls(e) {
  pt(`Vuetify error: ${e}`);
}
function xh(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`, pt(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`);
}
const as = 0.20689655172413793, Vh = (e) => e > as ** 3 ? Math.cbrt(e) : e / (3 * as ** 2) + 4 / 29, Oh = (e) => e > as ? e ** 3 : 3 * as ** 2 * (e - 4 / 29);
function dd(e) {
  const t = Vh, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function fd(e) {
  const t = Oh, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const Th = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Dh = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Ph = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Ah = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function md(e) {
  const t = Array(3), n = Dh, i = Th;
  for (let o = 0; o < 3; ++o)
    t[o] = Math.round(Pn(n(i[o][0] * e[0] + i[o][1] * e[1] + i[o][2] * e[2])) * 255);
  return {
    r: t[0],
    g: t[1],
    b: t[2]
  };
}
function hl(e) {
  let {
    r: t,
    g: n,
    b: i
  } = e;
  const o = [0, 0, 0], s = Ah, r = Ph;
  t = s(t / 255), n = s(n / 255), i = s(i / 255);
  for (let l = 0; l < 3; ++l)
    o[l] = r[l][0] * t + r[l][1] * n + r[l][2] * i;
  return o;
}
function Tr(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Ih(e) {
  return Tr(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Ya = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, $h = {
  rgb: (e, t, n, i) => ({
    r: e,
    g: t,
    b: n,
    a: i
  }),
  rgba: (e, t, n, i) => ({
    r: e,
    g: t,
    b: n,
    a: i
  }),
  hsl: (e, t, n, i) => qa({
    h: e,
    s: t,
    l: n,
    a: i
  }),
  hsla: (e, t, n, i) => qa({
    h: e,
    s: t,
    l: n,
    a: i
  }),
  hsv: (e, t, n, i) => ao({
    h: e,
    s: t,
    v: n,
    a: i
  }),
  hsva: (e, t, n, i) => ao({
    h: e,
    s: t,
    v: n,
    a: i
  })
};
function Jt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && dn(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Ya.test(e)) {
    const {
      groups: t
    } = e.match(Ya), {
      fn: n,
      values: i
    } = t, o = i.split(/,\s*/).map((s) => s.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(s) / 100 : parseFloat(s));
    return $h[n](...o);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((i) => i + i).join("") : [6, 8].includes(t.length) || dn(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && dn(`'${e}' is not a valid hex(a) color`), Fh(t);
  } else if (typeof e == "object") {
    if (Js(e, ["r", "g", "b"]))
      return e;
    if (Js(e, ["h", "s", "l"]))
      return ao(vd(e));
    if (Js(e, ["h", "s", "v"]))
      return ao(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function ao(e) {
  const {
    h: t,
    s: n,
    v: i,
    a: o
  } = e, s = (l) => {
    const a = (l + t / 60) % 6;
    return i - i * n * Math.max(Math.min(a, 4 - a, 1), 0);
  }, r = [s(5), s(3), s(1)].map((l) => Math.round(l * 255));
  return {
    r: r[0],
    g: r[1],
    b: r[2],
    a: o
  };
}
function qa(e) {
  return ao(vd(e));
}
function vd(e) {
  const {
    h: t,
    s: n,
    l: i,
    a: o
  } = e, s = i + n * Math.min(i, 1 - i), r = s === 0 ? 0 : 2 - 2 * i / s;
  return {
    h: t,
    s: r,
    v: s,
    a: o
  };
}
function $o(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Mh(e) {
  let {
    r: t,
    g: n,
    b: i,
    a: o
  } = e;
  return `#${[$o(t), $o(n), $o(i), o !== void 0 ? $o(Math.round(o * 255)) : ""].join("")}`;
}
function Fh(e) {
  e = Lh(e);
  let [t, n, i, o] = fh(e, 2).map((s) => parseInt(s, 16));
  return o = o === void 0 ? o : o / 255, {
    r: t,
    g: n,
    b: i,
    a: o
  };
}
function Lh(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Aa(Aa(e, 6), 8, "F")), e;
}
function Bh(e, t) {
  const n = dd(hl(e));
  return n[0] = n[0] + t * 10, md(fd(n));
}
function Rh(e, t) {
  const n = dd(hl(e));
  return n[0] = n[0] - t * 10, md(fd(n));
}
function Hh(e) {
  const t = Jt(e);
  return hl(t)[1];
}
function gd(e) {
  const t = Math.abs(Ga(Jt(0), Jt(e)));
  return Math.abs(Ga(Jt(16777215), Jt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function W(e, t) {
  return (n) => Object.keys(e).reduce((i, o) => {
    const r = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : {
      type: e[o]
    };
    return n && o in n ? i[o] = {
      ...r,
      default: n[o]
    } : i[o] = r, t && !i[o].source && (i[o].source = t), i;
  }, {});
}
const pe = W({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function Ue(e, t) {
  const n = Ns();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Qt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Ue(e).type;
  return ii((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
let hd = 0, Wo = /* @__PURE__ */ new WeakMap();
function Fn() {
  const e = Ue("getUid");
  if (Wo.has(e)) return Wo.get(e);
  {
    const t = hd++;
    return Wo.set(e, t), t;
  }
}
Fn.reset = () => {
  hd = 0, Wo = /* @__PURE__ */ new WeakMap();
};
function jh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const Ti = Symbol.for("vuetify:defaults");
function zh(e) {
  return ue(e);
}
function pl() {
  const e = Re(Ti);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Ii(e, t) {
  const n = pl(), i = ue(e), o = y(() => {
    if (Xt(t == null ? void 0 : t.disabled)) return n.value;
    const r = Xt(t == null ? void 0 : t.scoped), l = Xt(t == null ? void 0 : t.reset), a = Xt(t == null ? void 0 : t.root);
    if (i.value == null && !(r || l || a)) return n.value;
    let d = kt(i.value, {
      prev: n.value
    });
    if (r) return d;
    if (l || a) {
      const u = Number(l || 1 / 0);
      for (let c = 0; c <= u && !(!d || !("prev" in d)); c++)
        d = d.prev;
      return d && typeof a == "string" && a in d && (d = kt(kt(d, {
        prev: d
      }), d[a])), d;
    }
    return d.prev ? kt(d.prev, d) : d;
  });
  return gt(Ti, o), o;
}
function Uh(e, t) {
  var n, i;
  return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((i = e.props) == null ? void 0 : i[ii(t)]) < "u";
}
function Wh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : pl();
  const i = Ue("useDefaults");
  if (t = t ?? i.type.name ?? i.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const o = y(() => {
    var a;
    return (a = n.value) == null ? void 0 : a[e._as ?? t];
  }), s = new Proxy(e, {
    get(a, d) {
      var c, m, v, g, h, w, k;
      const u = Reflect.get(a, d);
      return d === "class" || d === "style" ? [(c = o.value) == null ? void 0 : c[d], u].filter((O) => O != null) : typeof d == "string" && !Uh(i.vnode, d) ? ((m = o.value) == null ? void 0 : m[d]) !== void 0 ? (v = o.value) == null ? void 0 : v[d] : ((h = (g = n.value) == null ? void 0 : g.global) == null ? void 0 : h[d]) !== void 0 ? (k = (w = n.value) == null ? void 0 : w.global) == null ? void 0 : k[d] : u : u;
    }
  }), r = he();
  yn(() => {
    if (o.value) {
      const a = Object.entries(o.value).filter((d) => {
        let [u] = d;
        return u.startsWith(u[0].toUpperCase());
      });
      r.value = a.length ? Object.fromEntries(a) : void 0;
    } else
      r.value = void 0;
  });
  function l() {
    const a = jh(Ti, i);
    gt(Ti, y(() => r.value ? kt((a == null ? void 0 : a.value) ?? {}, r.value) : a == null ? void 0 : a.value));
  }
  return {
    props: s,
    provideSubDefaults: l
  };
}
function $i(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return dn("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = W(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(i) {
      return nd(i, t);
    }, e.props._as = String, e.setup = function(i, o) {
      const s = pl();
      if (!s.value) return e._setup(i, o);
      const {
        props: r,
        provideSubDefaults: l
      } = Wh(i, i._as ?? e.name, s), a = e._setup(r, o);
      return l(), a;
    };
  }
  return e;
}
function le() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? $i : uv)(t);
}
function Ts(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return le()({
    name: n ?? Dt(tt(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...pe()
    },
    setup(i, o) {
      let {
        slots: s
      } = o;
      return () => {
        var r;
        return $n(i.tag, {
          class: [e, i.class],
          style: i.style
        }, (r = s.default) == null ? void 0 : r.call(s));
      };
    }
  });
}
function pd(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const us = "cubic-bezier(0.4, 0, 0.2, 1)", Kh = "cubic-bezier(0.0, 0, 0.2, 1)", Gh = "cubic-bezier(0.4, 0, 1, 1)";
function Yh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? qh(e) : yl(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function cs(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (yl(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function yl(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function qh(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function Zh(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function ge(e) {
  const t = Ue("useRender");
  t.render = e;
}
function nt(e, t, n) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (c) => c, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (c) => c;
  const s = Ue("useProxiedModel"), r = ue(e[t] !== void 0 ? e[t] : n), l = ii(t), d = y(l !== t ? () => {
    var c, m, v, g;
    return e[t], !!(((c = s.vnode.props) != null && c.hasOwnProperty(t) || (m = s.vnode.props) != null && m.hasOwnProperty(l)) && ((v = s.vnode.props) != null && v.hasOwnProperty(`onUpdate:${t}`) || (g = s.vnode.props) != null && g.hasOwnProperty(`onUpdate:${l}`)));
  } : () => {
    var c, m;
    return e[t], !!((c = s.vnode.props) != null && c.hasOwnProperty(t) && ((m = s.vnode.props) != null && m.hasOwnProperty(`onUpdate:${t}`)));
  });
  ui(() => !d.value, () => {
    ve(() => e[t], (c) => {
      r.value = c;
    });
  });
  const u = y({
    get() {
      const c = e[t];
      return i(d.value ? c : r.value);
    },
    set(c) {
      const m = o(c), v = J(d.value ? e[t] : r.value);
      v === m || i(v) === c || (r.value = m, s == null || s.emit(`update:${t}`, m));
    }
  });
  return Object.defineProperty(u, "externalValue", {
    get: () => d.value ? e[t] : r.value
  }), u;
}
const Xh = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dismiss: "Dismiss",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  }
}, Za = "$vuetify.", Xa = (e, t) => e.replace(/\{(\d+)\}/g, (n, i) => String(t[+i])), yd = (e, t, n) => function(i) {
  for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++)
    s[r - 1] = arguments[r];
  if (!i.startsWith(Za))
    return Xa(i, s);
  const l = i.replace(Za, ""), a = e.value && n.value[e.value], d = t.value && n.value[t.value];
  let u = Nr(a, l, null);
  return u || (dn(`Translation key "${i}" not found in "${e.value}", trying fallback locale`), u = Nr(d, l, null)), u || (ls(`Translation key "${i}" not found in fallback`), u = i), typeof u != "string" && (ls(`Translation key "${i}" has a non-string value`), u = i), Xa(u, s);
};
function bd(e, t) {
  return (n, i) => new Intl.NumberFormat([e.value, t.value], i).format(n);
}
function tr(e, t, n) {
  const i = nt(e, t, e[t] ?? n.value);
  return i.value = e[t] ?? n.value, ve(n, (o) => {
    e[t] == null && (i.value = n.value);
  }), i;
}
function _d(e) {
  return (t) => {
    const n = tr(t, "locale", e.current), i = tr(t, "fallback", e.fallback), o = tr(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: n,
      fallback: i,
      messages: o,
      t: yd(n, i, o),
      n: bd(n, i),
      provide: _d({
        current: n,
        fallback: i,
        messages: o
      })
    };
  };
}
function Jh(e) {
  const t = he((e == null ? void 0 : e.locale) ?? "en"), n = he((e == null ? void 0 : e.fallback) ?? "en"), i = ue({
    en: Xh,
    ...e == null ? void 0 : e.messages
  });
  return {
    name: "vuetify",
    current: t,
    fallback: n,
    messages: i,
    t: yd(t, n, i),
    n: bd(t, n),
    provide: _d({
      current: t,
      fallback: n,
      messages: i
    })
  };
}
const ds = Symbol.for("vuetify:locale");
function Qh(e) {
  return e.name != null;
}
function ep(e) {
  const t = e != null && e.adapter && Qh(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Jh(e), n = np(t, e);
  return {
    ...t,
    ...n
  };
}
function bl() {
  const e = Re(ds);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function tp() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function np(e, t) {
  const n = ue((t == null ? void 0 : t.rtl) ?? tp()), i = y(() => n.value[e.current.value] ?? !1);
  return {
    isRtl: i,
    rtl: n,
    rtlClasses: y(() => `v-locale--is-${i.value ? "rtl" : "ltr"}`)
  };
}
function en() {
  const e = Re(ds);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Ds = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  "GB-alt-variant": 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0
};
function ip(e, t, n) {
  const i = [];
  let o = [];
  const s = wd(e), r = Sd(e), l = n ?? Ds[t.slice(-2).toUpperCase()] ?? 0, a = (s.getDay() - l + 7) % 7, d = (r.getDay() - l + 7) % 7;
  for (let u = 0; u < a; u++) {
    const c = new Date(s);
    c.setDate(c.getDate() - (a - u)), o.push(c);
  }
  for (let u = 1; u <= r.getDate(); u++) {
    const c = new Date(e.getFullYear(), e.getMonth(), u);
    o.push(c), o.length === 7 && (i.push(o), o = []);
  }
  for (let u = 1; u < 7 - d; u++) {
    const c = new Date(r);
    c.setDate(c.getDate() + u), o.push(c);
  }
  return o.length > 0 && i.push(o), i;
}
function op(e, t, n) {
  const i = n ?? Ds[t.slice(-2).toUpperCase()] ?? 0, o = new Date(e);
  for (; o.getDay() !== i; )
    o.setDate(o.getDate() - 1);
  return o;
}
function sp(e, t) {
  const n = new Date(e), i = ((Ds[t.slice(-2).toUpperCase()] ?? 0) + 6) % 7;
  for (; n.getDay() !== i; )
    n.setDate(n.getDate() + 1);
  return n;
}
function wd(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function Sd(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function rp(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const lp = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function Ed(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (lp.test(e))
      return rp(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Ja = new Date(2e3, 0, 2);
function ap(e, t) {
  const n = t ?? Ds[e.slice(-2).toUpperCase()] ?? 0;
  return fl(7).map((i) => {
    const o = new Date(Ja);
    return o.setDate(Ja.getDate() + n + i), new Intl.DateTimeFormat(e, {
      weekday: "narrow"
    }).format(o);
  });
}
function up(e, t, n, i) {
  const o = Ed(e) ?? /* @__PURE__ */ new Date(), s = i == null ? void 0 : i[t];
  if (typeof s == "function")
    return s(o, t, n);
  let r = {};
  switch (t) {
    case "fullDate":
      r = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      r = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const l = o.getDate(), a = new Intl.DateTimeFormat(n, {
        month: "long"
      }).format(o);
      return `${l} ${a}`;
    case "normalDateWithWeekday":
      r = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      r = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      r = {
        year: "numeric"
      };
      break;
    case "month":
      r = {
        month: "long"
      };
      break;
    case "monthShort":
      r = {
        month: "short"
      };
      break;
    case "monthAndYear":
      r = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      r = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      r = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      r = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(n).format(o.getDate());
    case "hours12h":
      r = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      r = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      r = {
        minute: "numeric"
      };
      break;
    case "seconds":
      r = {
        second: "numeric"
      };
      break;
    case "fullTime":
      r = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullTime12h":
      r = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      r = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      r = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime12h":
      r = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      r = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      r = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      r = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDateTime12h":
      r = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "keyboardDateTime24h":
      r = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    default:
      r = s ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(n, r).format(o);
}
function cp(e, t) {
  const n = e.toJsDate(t), i = n.getFullYear(), o = Ia(String(n.getMonth() + 1), 2, "0"), s = Ia(String(n.getDate()), 2, "0");
  return `${i}-${o}-${s}`;
}
function dp(e) {
  const [t, n, i] = e.split("-").map(Number);
  return new Date(t, n - 1, i);
}
function fp(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function mp(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function vp(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function gp(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function hp(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function pp(e) {
  return e.getFullYear();
}
function yp(e) {
  return e.getMonth();
}
function bp(e) {
  return e.getDate();
}
function _p(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function wp(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function Sp(e) {
  return e.getHours();
}
function Ep(e) {
  return e.getMinutes();
}
function Cp(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function kp(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function Np(e, t) {
  return fs(e, t[0]) && Op(e, t[1]);
}
function xp(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function fs(e, t) {
  return e.getTime() > t.getTime();
}
function Vp(e, t) {
  return fs(Dr(e), Dr(t));
}
function Op(e, t) {
  return e.getTime() < t.getTime();
}
function Qa(e, t) {
  return e.getTime() === t.getTime();
}
function Tp(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Dp(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Pp(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function Ap(e, t, n) {
  const i = new Date(e), o = new Date(t);
  switch (n) {
    case "years":
      return i.getFullYear() - o.getFullYear();
    case "quarters":
      return Math.floor((i.getMonth() - o.getMonth() + (i.getFullYear() - o.getFullYear()) * 12) / 4);
    case "months":
      return i.getMonth() - o.getMonth() + (i.getFullYear() - o.getFullYear()) * 12;
    case "weeks":
      return Math.floor((i.getTime() - o.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((i.getTime() - o.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((i.getTime() - o.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((i.getTime() - o.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((i.getTime() - o.getTime()) / 1e3);
    default:
      return i.getTime() - o.getTime();
  }
}
function Ip(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function $p(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function Mp(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function Fp(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function Lp(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function Dr(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Bp(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class Rp {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return Ed(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return cp(this, t);
  }
  parseISO(t) {
    return dp(t);
  }
  addMinutes(t, n) {
    return fp(t, n);
  }
  addHours(t, n) {
    return mp(t, n);
  }
  addDays(t, n) {
    return vp(t, n);
  }
  addWeeks(t, n) {
    return gp(t, n);
  }
  addMonths(t, n) {
    return hp(t, n);
  }
  getWeekArray(t, n) {
    return ip(t, this.locale, n ? Number(n) : void 0);
  }
  startOfWeek(t, n) {
    return op(t, this.locale, n ? Number(n) : void 0);
  }
  endOfWeek(t) {
    return sp(t, this.locale);
  }
  startOfMonth(t) {
    return wd(t);
  }
  endOfMonth(t) {
    return Sd(t);
  }
  format(t, n) {
    return up(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Qa(t, n);
  }
  isValid(t) {
    return xp(t);
  }
  isWithinRange(t, n) {
    return Np(t, n);
  }
  isAfter(t, n) {
    return fs(t, n);
  }
  isAfterDay(t, n) {
    return Vp(t, n);
  }
  isBefore(t, n) {
    return !fs(t, n) && !Qa(t, n);
  }
  isSameDay(t, n) {
    return Tp(t, n);
  }
  isSameMonth(t, n) {
    return Dp(t, n);
  }
  isSameYear(t, n) {
    return Pp(t, n);
  }
  setMinutes(t, n) {
    return $p(t, n);
  }
  setHours(t, n) {
    return Ip(t, n);
  }
  setMonth(t, n) {
    return Mp(t, n);
  }
  setDate(t, n) {
    return Fp(t, n);
  }
  setYear(t, n) {
    return Lp(t, n);
  }
  getDiff(t, n, i) {
    return Ap(t, n, i);
  }
  getWeekdays(t) {
    return ap(this.locale, t ? Number(t) : void 0);
  }
  getYear(t) {
    return pp(t);
  }
  getMonth(t) {
    return yp(t);
  }
  getDate(t) {
    return bp(t);
  }
  getNextMonth(t) {
    return _p(t);
  }
  getPreviousMonth(t) {
    return wp(t);
  }
  getHours(t) {
    return Sp(t);
  }
  getMinutes(t) {
    return Ep(t);
  }
  startOfDay(t) {
    return Dr(t);
  }
  endOfDay(t) {
    return Bp(t);
  }
  startOfYear(t) {
    return Cp(t);
  }
  endOfYear(t) {
    return kp(t);
  }
}
const Hp = Symbol.for("vuetify:date-options"), eu = Symbol.for("vuetify:date-adapter");
function jp(e, t) {
  const n = kt({
    adapter: Rp,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: n,
    instance: zp(n, t)
  };
}
function zp(e, t) {
  const n = et(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return ve(t.current, (i) => {
    n.locale = e.locale[i] ?? i ?? n.locale;
  }), n;
}
const Ps = ["sm", "md", "lg", "xl", "xxl"], Pr = Symbol.for("vuetify:display"), tu = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, Up = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : tu;
  return kt(tu, e);
};
function nu(e) {
  return Be && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function iu(e) {
  return Be && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function ou(e) {
  const t = Be && !e ? window.navigator.userAgent : "ssr";
  function n(g) {
    return !!t.match(g);
  }
  const i = n(/android/i), o = n(/iphone|ipad|ipod/i), s = n(/cordova/i), r = n(/electron/i), l = n(/chrome/i), a = n(/edge/i), d = n(/firefox/i), u = n(/opera/i), c = n(/win/i), m = n(/mac/i), v = n(/linux/i);
  return {
    android: i,
    ios: o,
    cordova: s,
    electron: r,
    chrome: l,
    edge: a,
    firefox: d,
    opera: u,
    win: c,
    mac: m,
    linux: v,
    touch: sh,
    ssr: t === "ssr"
  };
}
function Wp(e, t) {
  const {
    thresholds: n,
    mobileBreakpoint: i
  } = Up(e), o = he(iu(t)), s = he(ou(t)), r = et({}), l = he(nu(t));
  function a() {
    o.value = iu(), l.value = nu();
  }
  function d() {
    a(), s.value = ou();
  }
  return yn(() => {
    const u = l.value < n.sm, c = l.value < n.md && !u, m = l.value < n.lg && !(c || u), v = l.value < n.xl && !(m || c || u), g = l.value < n.xxl && !(v || m || c || u), h = l.value >= n.xxl, w = u ? "xs" : c ? "sm" : m ? "md" : v ? "lg" : g ? "xl" : "xxl", k = typeof i == "number" ? i : n[i], O = l.value < k;
    r.xs = u, r.sm = c, r.md = m, r.lg = v, r.xl = g, r.xxl = h, r.smAndUp = !u, r.mdAndUp = !(u || c), r.lgAndUp = !(u || c || m), r.xlAndUp = !(u || c || m || v), r.smAndDown = !(m || v || g || h), r.mdAndDown = !(v || g || h), r.lgAndDown = !(g || h), r.xlAndDown = !h, r.name = w, r.height = o.value, r.width = l.value, r.mobile = O, r.mobileBreakpoint = i, r.platform = s.value, r.thresholds = n;
  }), Be && window.addEventListener("resize", a, {
    passive: !0
  }), {
    ...Zr(r),
    update: d,
    ssr: !!t
  };
}
function Kp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qt();
  const n = Re(Pr);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const i = y(() => {
    if (e.mobile != null) return e.mobile;
    if (!e.mobileBreakpoint) return n.mobile.value;
    const s = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : n.thresholds.value[e.mobileBreakpoint];
    return n.width.value < s;
  }), o = y(() => t ? {
    [`${t}--mobile`]: i.value
  } : {});
  return {
    ...n,
    displayClasses: o,
    mobile: i
  };
}
const Gp = Symbol.for("vuetify:goto");
function Yp() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => --e ** 3 + 1,
      easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - --e ** 4,
      easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + --e ** 5,
      easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
    }
  };
}
function qp(e, t) {
  return {
    rtl: t.isRtl,
    options: kt(Yp(), e)
  };
}
const Zp = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  eyeDropper: "mdi-eyedropper"
}, Xp = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => $n(kd, {
    ...e,
    class: "mdi"
  })
}, He = [String, Function, Object, Array], Ar = Symbol.for("vuetify:icons"), As = W({
  icon: {
    type: He
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), su = le()({
  name: "VComponentIcon",
  props: As(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const i = e.icon;
      return f(e.tag, null, {
        default: () => {
          var o;
          return [e.icon ? f(i, null, null) : (o = n.default) == null ? void 0 : o.call(n)];
        }
      });
    };
  }
}), Cd = $i({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: As(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => f(e.tag, Ce(n, {
      style: null
    }), {
      default: () => [f("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((i) => Array.isArray(i) ? f("path", {
        d: i[0],
        "fill-opacity": i[1]
      }, null) : f("path", {
        d: i
      }, null)) : f("path", {
        d: e.icon
      }, null)])]
    });
  }
});
$i({
  name: "VLigatureIcon",
  props: As(),
  setup(e) {
    return () => f(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const kd = $i({
  name: "VClassIcon",
  props: As(),
  setup(e) {
    return () => f(e.tag, {
      class: e.icon
    }, null);
  }
});
function Jp() {
  return {
    svg: {
      component: Cd
    },
    class: {
      component: kd
    }
  };
}
function Qp(e) {
  const t = Jp(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = Xp), kt({
    defaultSet: n,
    sets: t,
    aliases: {
      ...Zp,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, e);
}
const ey = (e) => {
  const t = Re(Ar);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: y(() => {
      var a;
      const i = Xt(e);
      if (!i) return {
        component: su
      };
      let o = i;
      if (typeof o == "string" && (o = o.trim(), o.startsWith("$") && (o = (a = t.aliases) == null ? void 0 : a[o.slice(1)])), o || dn(`Could not find aliased icon "${i}"`), Array.isArray(o))
        return {
          component: Cd,
          icon: o
        };
      if (typeof o != "string")
        return {
          component: su,
          icon: o
        };
      const s = Object.keys(t.sets).find((d) => typeof o == "string" && o.startsWith(`${d}:`)), r = s ? o.slice(s.length + 1) : o;
      return {
        component: t.sets[s ?? t.defaultSet].component,
        icon: r
      };
    })
  };
}, uo = Symbol.for("vuetify:theme"), Xe = W({
  theme: String
}, "theme");
function ru() {
  return {
    defaultTheme: "light",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#a3a3a3",
          "on-surface-variant": "#424242",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    }
  };
}
function ty() {
  var i, o;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ru();
  const t = ru();
  if (!e) return {
    ...t,
    isDisabled: !0
  };
  const n = {};
  for (const [s, r] of Object.entries(e.themes ?? {})) {
    const l = r.dark || s === "dark" ? (i = t.themes) == null ? void 0 : i.dark : (o = t.themes) == null ? void 0 : o.light;
    n[s] = kt(l, r);
  }
  return kt(t, {
    ...e,
    themes: n
  });
}
function ny(e) {
  const t = ty(e), n = ue(t.defaultTheme), i = ue(t.themes), o = y(() => {
    const u = {};
    for (const [c, m] of Object.entries(i.value)) {
      const v = u[c] = {
        ...m,
        colors: {
          ...m.colors
        }
      };
      if (t.variations)
        for (const g of t.variations.colors) {
          const h = v.colors[g];
          if (h)
            for (const w of ["lighten", "darken"]) {
              const k = w === "lighten" ? Bh : Rh;
              for (const O of fl(t.variations[w], 1))
                v.colors[`${g}-${w}-${O}`] = Mh(k(Jt(h), O));
            }
        }
      for (const g of Object.keys(v.colors)) {
        if (/^on-[a-z]/.test(g) || v.colors[`on-${g}`]) continue;
        const h = `on-${g}`, w = Jt(v.colors[g]);
        v.colors[h] = gd(w);
      }
    }
    return u;
  }), s = y(() => o.value[n.value]), r = y(() => {
    var g;
    const u = [];
    (g = s.value) != null && g.dark && Un(u, ":root", ["color-scheme: dark"]), Un(u, ":root", lu(s.value));
    for (const [h, w] of Object.entries(o.value))
      Un(u, `.v-theme--${h}`, [`color-scheme: ${w.dark ? "dark" : "normal"}`, ...lu(w)]);
    const c = [], m = [], v = new Set(Object.values(o.value).flatMap((h) => Object.keys(h.colors)));
    for (const h of v)
      /^on-[a-z]/.test(h) ? Un(m, `.${h}`, [`color: rgb(var(--v-theme-${h})) !important`]) : (Un(c, `.bg-${h}`, [`--v-theme-overlay-multiplier: var(--v-theme-${h}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${h})) !important`, `color: rgb(var(--v-theme-on-${h})) !important`]), Un(m, `.text-${h}`, [`color: rgb(var(--v-theme-${h})) !important`]), Un(m, `.border-${h}`, [`--v-border-color: var(--v-theme-${h})`]));
    return u.push(...c, ...m), u.map((h, w) => w === 0 ? h : `    ${h}`).join("");
  });
  function l() {
    return {
      style: [{
        children: r.value,
        id: "vuetify-theme-stylesheet",
        nonce: t.cspNonce || !1
      }]
    };
  }
  function a(u) {
    if (t.isDisabled) return;
    const c = u._context.provides.usehead;
    if (c)
      if (c.push) {
        const m = c.push(l);
        Be && ve(r, () => {
          m.patch(l);
        });
      } else
        Be ? (c.addHeadObjs(y(l)), yn(() => c.updateDOM())) : c.addHeadObjs(l());
    else {
      let v = function() {
        if (typeof document < "u" && !m) {
          const g = document.createElement("style");
          g.type = "text/css", g.id = "vuetify-theme-stylesheet", t.cspNonce && g.setAttribute("nonce", t.cspNonce), m = g, document.head.appendChild(m);
        }
        m && (m.innerHTML = r.value);
      }, m = Be ? document.getElementById("vuetify-theme-stylesheet") : null;
      Be ? ve(r, v, {
        immediate: !0
      }) : v();
    }
  }
  const d = y(() => t.isDisabled ? void 0 : `v-theme--${n.value}`);
  return {
    install: a,
    isDisabled: t.isDisabled,
    name: n,
    themes: i,
    current: s,
    computedThemes: o,
    themeClasses: d,
    styles: r,
    global: {
      name: n,
      current: s
    }
  };
}
function lt(e) {
  Ue("provideTheme");
  const t = Re(uo, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = y(() => e.theme ?? t.name.value), i = y(() => t.themes.value[n.value]), o = y(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), s = {
    ...t,
    name: n,
    current: i,
    themeClasses: o
  };
  return gt(uo, s), s;
}
function Nd() {
  Ue("useTheme");
  const e = Re(uo, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Un(e, t, n) {
  e.push(`${t} {
`, ...n.map((i) => `  ${i};
`), `}
`);
}
function lu(e) {
  const t = e.dark ? 2 : 1, n = e.dark ? 1 : 2, i = [];
  for (const [o, s] of Object.entries(e.colors)) {
    const r = Jt(s);
    i.push(`--v-theme-${o}: ${r.r},${r.g},${r.b}`), o.startsWith("on-") || i.push(`--v-theme-${o}-overlay-multiplier: ${Hh(s) > 0.18 ? t : n}`);
  }
  for (const [o, s] of Object.entries(e.variables)) {
    const r = typeof s == "string" && s.startsWith("#") ? Jt(s) : void 0, l = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    i.push(`--v-${o}: ${l ?? s}`);
  }
  return i;
}
function xd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Vr(), i = ue();
  if (Be) {
    const o = new ResizeObserver((s) => {
      s.length && (t === "content" ? i.value = s[0].contentRect : i.value = s[0].target.getBoundingClientRect());
    });
    yt(() => {
      o.disconnect();
    }), ve(() => n.el, (s, r) => {
      r && (o.unobserve(r), i.value = void 0), s && o.observe(s);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: ho(i)
  };
}
const ms = Symbol.for("vuetify:layout"), Vd = Symbol.for("vuetify:layout-item"), au = 1e3, iy = W({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), Od = W({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function oy() {
  const e = Re(ms);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function Td(e) {
  const t = Re(ms);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Fn()}`, i = Ue("useLayoutItem");
  gt(Vd, {
    id: n
  });
  const o = he(!1);
  yc(() => o.value = !0), pc(() => o.value = !1);
  const {
    layoutItemStyles: s,
    layoutItemScrimStyles: r
  } = t.register(i, {
    ...e,
    active: y(() => o.value ? !1 : e.active.value),
    id: n
  });
  return yt(() => t.unregister(n)), {
    layoutItemStyles: s,
    layoutRect: t.layoutRect,
    layoutItemScrimStyles: r
  };
}
const sy = (e, t, n, i) => {
  let o = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const s = [{
    id: "",
    layer: {
      ...o
    }
  }];
  for (const r of e) {
    const l = t.get(r), a = n.get(r), d = i.get(r);
    if (!l || !a || !d) continue;
    const u = {
      ...o,
      [l.value]: parseInt(o[l.value], 10) + (d.value ? parseInt(a.value, 10) : 0)
    };
    s.push({
      id: r,
      layer: u
    }), o = u;
  }
  return s;
};
function ry(e) {
  const t = Re(ms, null), n = y(() => t ? t.rootZIndex.value - 100 : au), i = ue([]), o = et(/* @__PURE__ */ new Map()), s = et(/* @__PURE__ */ new Map()), r = et(/* @__PURE__ */ new Map()), l = et(/* @__PURE__ */ new Map()), a = et(/* @__PURE__ */ new Map()), {
    resizeRef: d,
    contentRect: u
  } = xd(), c = y(() => {
    const N = /* @__PURE__ */ new Map(), $ = e.overlaps ?? [];
    for (const C of $.filter((V) => V.includes(":"))) {
      const [V, L] = C.split(":");
      if (!i.value.includes(V) || !i.value.includes(L)) continue;
      const A = o.get(V), S = o.get(L), D = s.get(V), B = s.get(L);
      !A || !S || !D || !B || (N.set(L, {
        position: A.value,
        amount: parseInt(D.value, 10)
      }), N.set(V, {
        position: S.value,
        amount: -parseInt(B.value, 10)
      }));
    }
    return N;
  }), m = y(() => {
    const N = [...new Set([...r.values()].map((C) => C.value))].sort((C, V) => C - V), $ = [];
    for (const C of N) {
      const V = i.value.filter((L) => {
        var A;
        return ((A = r.get(L)) == null ? void 0 : A.value) === C;
      });
      $.push(...V);
    }
    return sy($, o, s, l);
  }), v = y(() => !Array.from(a.values()).some((N) => N.value)), g = y(() => m.value[m.value.length - 1].layer), h = y(() => ({
    "--v-layout-left": se(g.value.left),
    "--v-layout-right": se(g.value.right),
    "--v-layout-top": se(g.value.top),
    "--v-layout-bottom": se(g.value.bottom),
    ...v.value ? void 0 : {
      transition: "none"
    }
  })), w = y(() => m.value.slice(1).map((N, $) => {
    let {
      id: C
    } = N;
    const {
      layer: V
    } = m.value[$], L = s.get(C), A = o.get(C);
    return {
      id: C,
      ...V,
      size: Number(L.value),
      position: A.value
    };
  })), k = (N) => w.value.find(($) => $.id === N), O = Ue("createLayout"), P = he(!1);
  In(() => {
    P.value = !0;
  }), gt(ms, {
    register: (N, $) => {
      let {
        id: C,
        order: V,
        position: L,
        layoutSize: A,
        elementSize: S,
        active: D,
        disableTransitions: B,
        absolute: Z
      } = $;
      r.set(C, V), o.set(C, L), s.set(C, A), l.set(C, D), B && a.set(C, B);
      const X = yi(Vd, O == null ? void 0 : O.vnode).indexOf(N);
      X > -1 ? i.value.splice(X, 0, C) : i.value.push(C);
      const q = y(() => w.value.findIndex((ne) => ne.id === C)), ye = y(() => n.value + m.value.length * 2 - q.value * 2), be = y(() => {
        const ne = L.value === "left" || L.value === "right", Ve = L.value === "right", Je = L.value === "bottom", Qe = S.value ?? A.value, Y = Qe === 0 ? "%" : "px", ce = {
          [L.value]: 0,
          zIndex: ye.value,
          transform: `translate${ne ? "X" : "Y"}(${(D.value ? 0 : -(Qe === 0 ? 100 : Qe)) * (Ve || Je ? -1 : 1)}${Y})`,
          position: Z.value || n.value !== au ? "absolute" : "fixed",
          ...v.value ? void 0 : {
            transition: "none"
          }
        };
        if (!P.value) return ce;
        const Ie = w.value[q.value];
        if (!Ie) throw new Error(`[Vuetify] Could not find layout item "${C}"`);
        const at = c.value.get(C);
        return at && (Ie[at.position] += at.amount), {
          ...ce,
          height: ne ? `calc(100% - ${Ie.top}px - ${Ie.bottom}px)` : S.value ? `${S.value}px` : void 0,
          left: Ve ? void 0 : `${Ie.left}px`,
          right: Ve ? `${Ie.right}px` : void 0,
          top: L.value !== "bottom" ? `${Ie.top}px` : void 0,
          bottom: L.value !== "top" ? `${Ie.bottom}px` : void 0,
          width: ne ? S.value ? `${S.value}px` : void 0 : `calc(100% - ${Ie.left}px - ${Ie.right}px)`
        };
      }), me = y(() => ({
        zIndex: ye.value - 1
      }));
      return {
        layoutItemStyles: be,
        layoutItemScrimStyles: me,
        zIndex: ye
      };
    },
    unregister: (N) => {
      r.delete(N), o.delete(N), s.delete(N), l.delete(N), a.delete(N), i.value = i.value.filter(($) => $ !== N);
    },
    mainRect: g,
    mainStyles: h,
    getLayoutItem: k,
    items: w,
    layoutRect: u,
    rootZIndex: n
  });
  const M = y(() => ["v-layout", {
    "v-layout--full-height": e.fullHeight
  }]), x = y(() => ({
    zIndex: t ? n.value : void 0,
    position: t ? "relative" : void 0,
    overflow: t ? "hidden" : void 0
  }));
  return {
    layoutClasses: M,
    layoutStyles: x,
    getLayoutItem: k,
    items: w,
    layoutRect: u,
    layoutRef: d
  };
}
function Dd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: t,
    ...n
  } = e, i = kt(t, n), {
    aliases: o = {},
    components: s = {},
    directives: r = {}
  } = i, l = zh(i.defaults), a = Wp(i.display, i.ssr), d = ny(i.theme), u = Qp(i.icons), c = ep(i.locale), m = jp(i.date, c), v = qp(i.goTo, c);
  return {
    install: (h) => {
      for (const w in r)
        h.directive(w, r[w]);
      for (const w in s)
        h.component(w, s[w]);
      for (const w in o)
        h.component(w, $i({
          ...o[w],
          name: w,
          aliasName: o[w].name
        }));
      if (d.install(h), h.provide(Ti, l), h.provide(Pr, a), h.provide(uo, d), h.provide(Ar, u), h.provide(ds, c), h.provide(Hp, m.options), h.provide(eu, m.instance), h.provide(Gp, v), Be && i.ssr)
        if (h.$nuxt)
          h.$nuxt.hook("app:suspense:resolve", () => {
            a.update();
          });
        else {
          const {
            mount: w
          } = h;
          h.mount = function() {
            const k = w(...arguments);
            return At(() => a.update()), h.mount = w, k;
          };
        }
      Fn.reset(), h.mixin({
        computed: {
          $vuetify() {
            return et({
              defaults: gi.call(this, Ti),
              display: gi.call(this, Pr),
              theme: gi.call(this, uo),
              icons: gi.call(this, Ar),
              locale: gi.call(this, ds),
              date: gi.call(this, eu)
            });
          }
        }
      });
    },
    defaults: l,
    display: a,
    theme: d,
    icons: u,
    locale: c,
    date: m,
    goTo: v
  };
}
const ly = "3.7.4";
Dd.version = ly;
function gi(e) {
  var i, o;
  const t = this.$, n = ((i = t.parent) == null ? void 0 : i.provides) ?? ((o = t.vnode.appContext) == null ? void 0 : o.provides);
  if (n && e in n)
    return n[e];
}
const ay = Dd({
  theme: {
    defaultTheme: "light"
  }
}), uy = {
  install: (e, t) => {
    const n = t.server;
    e.config.globalProperties.$alert = function(i, o, s) {
      e.$store.commit("alert", { type: i, msg: o, to: s }), i === "success" && setTimeout(() => {
        e.$store.commit("close_alert");
      }, 1300);
    }, e.config.globalProperties.$backend = async function(i, o) {
      if (i === void 0)
        throw "url is undefined ";
      var s = {
        mode: "cors",
        redirect: "follow",
        credentials: "include",
        timeout: 1e4
        // 添加超时设置
      }, r = n + i;
      o !== void 0 && Object.assign(s, o);
      const l = new AbortController(), a = setTimeout(() => l.abort(), s.timeout || 1e4);
      return fetch(r, {
        ...s,
        signal: l.signal
      }).then((d) => {
        clearTimeout(a);
        var u = "";
        if (d.status === 413)
          throw u = "服务器响应了413异常状态码。<br/>可能是上传的文件过大，超过了服务器设置的上传大小。", e.$alert("error", u), u;
        if (d.status === 502)
          throw u = "服务器正在启动中...", e.$alert("info", u), u;
        if (d.status !== 200)
          throw u = "服务器异常，状态码: " + d.status + "<br/>请查阅服务器日志:<br/>talebook.log", e.$alert("error", u), u;
        try {
          return d.json();
        } catch {
          throw u = "服务器异常，响应非JSON<br/>请查阅服务器日志:<br/>talebook.log", e.$alert("error", u), u;
        }
      }).then((d) => (d.err === "exception" && e.$store.commit("alert", { type: "error", msg: d.msg, to: null }), d)).catch((d) => {
        clearTimeout(a);
        var u = "";
        return d.name === "AbortError" ? u = "请求超时，请检查网络连接或服务器状态" : navigator.onLine ? u = "请求失败: " + (d.message || "未知错误") : u = "网络连接已断开，请检查网络设置", console.error("API请求失败:", d), { err: "network_error", msg: u, data: {} };
      });
    };
  }
};
function cy(e, t) {
  e.use(ay).use(uy, t);
}
const di = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
}, dy = W({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), it = le(!1)({
  name: "VDefaultsProvider",
  props: dy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: i,
      disabled: o,
      reset: s,
      root: r,
      scoped: l
    } = Zr(e);
    return Ii(i, {
      reset: s,
      root: r,
      scoped: l,
      disabled: o
    }), () => {
      var a;
      return (a = n.default) == null ? void 0 : a.call(n);
    };
  }
});
function _l(e) {
  return vl(() => {
    const t = [], n = {};
    if (e.value.background)
      if (Tr(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && Ih(e.value.background)) {
          const i = Jt(e.value.background);
          if (i.a == null || i.a === 1) {
            const o = gd(i);
            n.color = o, n.caretColor = o;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (Tr(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function jt(e, t) {
  const n = y(() => ({
    text: Ae(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: i,
    colorStyles: o
  } = _l(n);
  return {
    textColorClasses: i,
    textColorStyles: o
  };
}
function Tt(e, t) {
  const n = y(() => ({
    background: Ae(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: i,
    colorStyles: o
  } = _l(n);
  return {
    backgroundColorClasses: i,
    backgroundColorStyles: o
  };
}
const fy = ["x-small", "small", "default", "large", "x-large"], Is = W({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function $s(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qt();
  return vl(() => {
    let n, i;
    return rs(fy, e.size) ? n = `${t}--size-${e.size}` : e.size && (i = {
      width: se(e.size),
      height: se(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: i
    };
  });
}
const je = W({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), my = W({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: He,
  ...pe(),
  ...Is(),
  ...je({
    tag: "i"
  }),
  ...Xe()
}, "VIcon"), We = le()({
  name: "VIcon",
  props: my(),
  setup(e, t) {
    let {
      attrs: n,
      slots: i
    } = t;
    const o = ue(), {
      themeClasses: s
    } = lt(e), {
      iconData: r
    } = ey(y(() => o.value || e.icon)), {
      sizeClasses: l
    } = $s(e), {
      textColorClasses: a,
      textColorStyles: d
    } = jt(oe(e, "color"));
    return ge(() => {
      var m, v;
      const u = (m = i.default) == null ? void 0 : m.call(i);
      u && (o.value = (v = sd(u).filter((g) => g.type === ci && g.children && typeof g.children == "string")[0]) == null ? void 0 : v.children);
      const c = !!(n.onClick || n.onClickOnce);
      return f(r.value.component, {
        tag: e.tag,
        icon: r.value.icon,
        class: ["v-icon", "notranslate", s.value, l.value, a.value, {
          "v-icon--clickable": c,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [l.value ? void 0 : {
          fontSize: se(e.size),
          height: se(e.size),
          width: se(e.size)
        }, d.value, e.style],
        role: c ? "button" : void 0,
        "aria-hidden": !c,
        tabindex: c ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [u]
      });
    }), {};
  }
}), bn = W({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function _n(e) {
  return {
    dimensionStyles: y(() => {
      const n = {}, i = se(e.height), o = se(e.maxHeight), s = se(e.maxWidth), r = se(e.minHeight), l = se(e.minWidth), a = se(e.width);
      return i != null && (n.height = i), o != null && (n.maxHeight = o), s != null && (n.maxWidth = s), r != null && (n.minHeight = r), l != null && (n.minWidth = l), a != null && (n.width = a), n;
    })
  };
}
function vy(e) {
  return {
    aspectStyles: y(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const Pd = W({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...pe(),
  ...bn()
}, "VResponsive"), uu = le()({
  name: "VResponsive",
  props: Pd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: i
    } = vy(e), {
      dimensionStyles: o
    } = _n(e);
    return ge(() => {
      var s;
      return f("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [o.value, e.style]
      }, [f("div", {
        class: "v-responsive__sizer",
        style: i.value
      }, null), (s = n.additional) == null ? void 0 : s.call(n), n.default && f("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [n.default()])]);
    }), {};
  }
}), bt = W({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function _t(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qt();
  return {
    roundedClasses: y(() => {
      const i = Ae(e) ? e.value : e.rounded, o = Ae(e) ? e.value : e.tile, s = [];
      if (i === !0 || i === "")
        s.push(`${t}--rounded`);
      else if (typeof i == "string" || i === 0)
        for (const r of String(i).split(" "))
          s.push(`rounded-${r}`);
      else (o || i === !1) && s.push("rounded-0");
      return s;
    })
  };
}
const wo = W({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), cn = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: i,
    disabled: o,
    group: s,
    ...r
  } = e, {
    component: l = s ? cl : ai,
    ...a
  } = typeof i == "object" ? i : {};
  return $n(l, Ce(typeof i == "string" ? {
    name: o ? "" : i
  } : a, typeof i == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: o,
    group: s
  }).filter((d) => {
    let [u, c] = d;
    return c !== void 0;
  })), r), n);
};
function gy(e, t) {
  if (!dl) return;
  const n = t.modifiers || {}, i = t.value, {
    handler: o,
    options: s
  } = typeof i == "object" ? i : {
    handler: i,
    options: {}
  }, r = new IntersectionObserver(function() {
    var c;
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], a = arguments.length > 1 ? arguments[1] : void 0;
    const d = (c = e._observe) == null ? void 0 : c[t.instance.$.uid];
    if (!d) return;
    const u = l.some((m) => m.isIntersecting);
    o && (!n.quiet || d.init) && (!n.once || u || d.init) && o(u, l, a), u && n.once ? Ad(e, t) : d.init = !0;
  }, s);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: r
  }, r.observe(e);
}
function Ad(e, t) {
  var i;
  const n = (i = e._observe) == null ? void 0 : i[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Id = {
  mounted: gy,
  unmounted: Ad
}, hy = W({
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...Pd(),
  ...pe(),
  ...bt(),
  ...wo()
}, "VImg"), wl = le()({
  name: "VImg",
  directives: {
    intersect: Id
  },
  props: hy(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: i
    } = t;
    const {
      backgroundColorClasses: o,
      backgroundColorStyles: s
    } = Tt(oe(e, "color")), {
      roundedClasses: r
    } = _t(e), l = Ue("VImg"), a = he(""), d = ue(), u = he(e.eager ? "loading" : "idle"), c = he(), m = he(), v = y(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), g = y(() => v.value.aspect || c.value / m.value || 0);
    ve(() => e.src, () => {
      h(u.value !== "idle");
    }), ve(g, (S, D) => {
      !S && D && d.value && M(d.value);
    }), tl(() => h());
    function h(S) {
      if (!(e.eager && S) && !(dl && !S && !e.eager)) {
        if (u.value = "loading", v.value.lazySrc) {
          const D = new Image();
          D.src = v.value.lazySrc, M(D, null);
        }
        v.value.src && At(() => {
          var D;
          n("loadstart", ((D = d.value) == null ? void 0 : D.currentSrc) || v.value.src), setTimeout(() => {
            var B;
            if (!l.isUnmounted)
              if ((B = d.value) != null && B.complete) {
                if (d.value.naturalWidth || k(), u.value === "error") return;
                g.value || M(d.value, null), u.value === "loading" && w();
              } else
                g.value || M(d.value), O();
          });
        });
      }
    }
    function w() {
      var S;
      l.isUnmounted || (O(), M(d.value), u.value = "loaded", n("load", ((S = d.value) == null ? void 0 : S.currentSrc) || v.value.src));
    }
    function k() {
      var S;
      l.isUnmounted || (u.value = "error", n("error", ((S = d.value) == null ? void 0 : S.currentSrc) || v.value.src));
    }
    function O() {
      const S = d.value;
      S && (a.value = S.currentSrc || S.src);
    }
    let P = -1;
    yt(() => {
      clearTimeout(P);
    });
    function M(S) {
      let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const B = () => {
        if (clearTimeout(P), l.isUnmounted) return;
        const {
          naturalHeight: Z,
          naturalWidth: Q
        } = S;
        Z || Q ? (c.value = Q, m.value = Z) : !S.complete && u.value === "loading" && D != null ? P = window.setTimeout(B, D) : (S.currentSrc.endsWith(".svg") || S.currentSrc.startsWith("data:image/svg+xml")) && (c.value = 1, m.value = 1);
      };
      B();
    }
    const x = y(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), N = () => {
      var B;
      if (!v.value.src || u.value === "idle") return null;
      const S = f("img", {
        class: ["v-img__img", x.value],
        style: {
          objectPosition: e.position
        },
        src: v.value.src,
        srcset: v.value.srcset,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: d,
        onLoad: w,
        onError: k
      }, null), D = (B = i.sources) == null ? void 0 : B.call(i);
      return f(cn, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [Nt(D ? f("picture", {
          class: "v-img__picture"
        }, [D, S]) : S, [[Mn, u.value === "loaded"]])]
      });
    }, $ = () => f(cn, {
      transition: e.transition
    }, {
      default: () => [v.value.lazySrc && u.value !== "loaded" && f("img", {
        class: ["v-img__img", "v-img__img--preload", x.value],
        style: {
          objectPosition: e.position
        },
        src: v.value.lazySrc,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), C = () => i.placeholder ? f(cn, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(u.value === "loading" || u.value === "error" && !i.error) && f("div", {
        class: "v-img__placeholder"
      }, [i.placeholder()])]
    }) : null, V = () => i.error ? f(cn, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [u.value === "error" && f("div", {
        class: "v-img__error"
      }, [i.error()])]
    }) : null, L = () => e.gradient ? f("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, A = he(!1);
    {
      const S = ve(g, (D) => {
        D && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            A.value = !0;
          });
        }), S());
      });
    }
    return ge(() => {
      const S = uu.filterProps(e);
      return Nt(f(uu, Ce({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !A.value
        }, o.value, r.value, e.class],
        style: [{
          width: se(e.width === "auto" ? c.value : e.width)
        }, s.value, e.style]
      }, S, {
        aspectRatio: g.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => f(ke, null, [f(N, null, null), f($, null, null), f(L, null, null), f(C, null, null), f(V, null, null)]),
        default: i.default
      }), [[Ai("intersect"), {
        handler: h,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: a,
      image: d,
      state: u,
      naturalWidth: c,
      naturalHeight: m
    };
  }
}), Ln = W({
  border: [Boolean, Number, String]
}, "border");
function Bn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qt();
  return {
    borderClasses: y(() => {
      const i = Ae(e) ? e.value : e.border, o = [];
      if (i === !0 || i === "")
        o.push(`${t}--border`);
      else if (typeof i == "string" || i === 0)
        for (const s of String(i).split(" "))
          o.push(`border-${s}`);
      return o;
    })
  };
}
const py = [null, "default", "comfortable", "compact"], tn = W({
  density: {
    type: String,
    default: "default",
    validator: (e) => py.includes(e)
  }
}, "density");
function wn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qt();
  return {
    densityClasses: y(() => `${t}--density-${e.density}`)
  };
}
const yy = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function So(e, t) {
  return f(ke, null, [e && f("span", {
    key: "overlay",
    class: `${t}__overlay`
  }, null), f("span", {
    key: "underlay",
    class: `${t}__underlay`
  }, null)]);
}
const fi = W({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => yy.includes(e)
  }
}, "variant");
function Eo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qt();
  const n = y(() => {
    const {
      variant: s
    } = Xt(e);
    return `${t}--variant-${s}`;
  }), {
    colorClasses: i,
    colorStyles: o
  } = _l(y(() => {
    const {
      variant: s,
      color: r
    } = Xt(e);
    return {
      [["elevated", "flat"].includes(s) ? "background" : "text"]: r
    };
  }));
  return {
    colorClasses: i,
    colorStyles: o,
    variantClasses: n
  };
}
const by = W({
  start: Boolean,
  end: Boolean,
  icon: He,
  image: String,
  text: String,
  ...Ln(),
  ...pe(),
  ...tn(),
  ...bt(),
  ...Is(),
  ...je(),
  ...Xe(),
  ...fi({
    variant: "flat"
  })
}, "VAvatar"), Di = le()({
  name: "VAvatar",
  props: by(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: i
    } = lt(e), {
      borderClasses: o
    } = Bn(e), {
      colorClasses: s,
      colorStyles: r,
      variantClasses: l
    } = Eo(e), {
      densityClasses: a
    } = wn(e), {
      roundedClasses: d
    } = _t(e), {
      sizeClasses: u,
      sizeStyles: c
    } = $s(e);
    return ge(() => f(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, i.value, o.value, s.value, a.value, d.value, u.value, l.value, e.class],
      style: [r.value, c.value, e.style]
    }, {
      default: () => [n.default ? f(it, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            src: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [n.default()]
      }) : e.image ? f(wl, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? f(We, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, So(!1, "v-avatar")]
    })), {};
  }
}), Sn = W({
  elevation: {
    type: [Number, String],
    validator(e) {
      const t = parseInt(e);
      return !isNaN(t) && t >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      t <= 24;
    }
  }
}, "elevation");
function En(e) {
  return {
    elevationClasses: y(() => {
      const n = Ae(e) ? e.value : e.elevation, i = [];
      return n == null || i.push(`elevation-${n}`), i;
    })
  };
}
const $d = W({
  baseColor: String,
  divided: Boolean,
  ...Ln(),
  ...pe(),
  ...tn(),
  ...Sn(),
  ...bt(),
  ...je(),
  ...Xe(),
  ...fi()
}, "VBtnGroup"), _i = le()({
  name: "VBtnGroup",
  props: $d(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: i
    } = lt(e), {
      densityClasses: o
    } = wn(e), {
      borderClasses: s
    } = Bn(e), {
      elevationClasses: r
    } = En(e), {
      roundedClasses: l
    } = _t(e);
    Ii({
      VBtn: {
        height: "auto",
        baseColor: oe(e, "baseColor"),
        color: oe(e, "color"),
        density: oe(e, "density"),
        flat: !0,
        variant: oe(e, "variant")
      }
    }), ge(() => f(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, i.value, s.value, o.value, r.value, l.value, e.class],
      style: e.style
    }, n));
  }
}), Md = W({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), _y = W({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function wy(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const i = Ue("useGroupItem");
  if (!i)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const o = Fn();
  gt(Symbol.for(`${t.description}:id`), o);
  const s = Re(t, null);
  if (!s) {
    if (!n) return s;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const r = oe(e, "value"), l = y(() => !!(s.disabled.value || e.disabled));
  s.register({
    id: o,
    value: r,
    disabled: l
  }, i), yt(() => {
    s.unregister(o);
  });
  const a = y(() => s.isSelected(o)), d = y(() => s.items.value[0].id === o), u = y(() => s.items.value[s.items.value.length - 1].id === o), c = y(() => a.value && [s.selectedClass.value, e.selectedClass]);
  return ve(a, (m) => {
    i.emit("group:selected", {
      value: m
    });
  }, {
    flush: "sync"
  }), {
    id: o,
    isSelected: a,
    isFirst: d,
    isLast: u,
    toggle: () => s.select(o, !a.value),
    select: (m) => s.select(o, m),
    selectedClass: c,
    value: r,
    disabled: l,
    group: s
  };
}
function Fd(e, t) {
  let n = !1;
  const i = et([]), o = nt(e, "modelValue", [], (m) => m == null ? [] : Ld(i, ni(m)), (m) => {
    const v = Ey(i, m);
    return e.multiple ? v : v[0];
  }), s = Ue("useGroup");
  function r(m, v) {
    const g = m, h = Symbol.for(`${t.description}:id`), k = yi(h, s == null ? void 0 : s.vnode).indexOf(v);
    Xt(g.value) == null && (g.value = k, g.useIndexAsValue = !0), k > -1 ? i.splice(k, 0, g) : i.push(g);
  }
  function l(m) {
    if (n) return;
    a();
    const v = i.findIndex((g) => g.id === m);
    i.splice(v, 1);
  }
  function a() {
    const m = i.find((v) => !v.disabled);
    m && e.mandatory === "force" && !o.value.length && (o.value = [m.id]);
  }
  In(() => {
    a();
  }), yt(() => {
    n = !0;
  }), nl(() => {
    for (let m = 0; m < i.length; m++)
      i[m].useIndexAsValue && (i[m].value = m);
  });
  function d(m, v) {
    const g = i.find((h) => h.id === m);
    if (!(v && (g != null && g.disabled)))
      if (e.multiple) {
        const h = o.value.slice(), w = h.findIndex((O) => O === m), k = ~w;
        if (v = v ?? !k, k && e.mandatory && h.length <= 1 || !k && e.max != null && h.length + 1 > e.max) return;
        w < 0 && v ? h.push(m) : w >= 0 && !v && h.splice(w, 1), o.value = h;
      } else {
        const h = o.value.includes(m);
        if (e.mandatory && h) return;
        o.value = v ?? !h ? [m] : [];
      }
  }
  function u(m) {
    if (e.multiple && dn('This method is not supported when using "multiple" prop'), o.value.length) {
      const v = o.value[0], g = i.findIndex((k) => k.id === v);
      let h = (g + m) % i.length, w = i[h];
      for (; w.disabled && h !== g; )
        h = (h + m) % i.length, w = i[h];
      if (w.disabled) return;
      o.value = [i[h].id];
    } else {
      const v = i.find((g) => !g.disabled);
      v && (o.value = [v.id]);
    }
  }
  const c = {
    register: r,
    unregister: l,
    selected: o,
    select: d,
    disabled: oe(e, "disabled"),
    prev: () => u(i.length - 1),
    next: () => u(1),
    isSelected: (m) => o.value.includes(m),
    selectedClass: y(() => e.selectedClass),
    items: y(() => i),
    getItemIndex: (m) => Sy(i, m)
  };
  return gt(t, c), c;
}
function Sy(e, t) {
  const n = Ld(e, [t]);
  return n.length ? e.findIndex((i) => i.id === n[0]) : -1;
}
function Ld(e, t) {
  const n = [];
  return t.forEach((i) => {
    const o = e.find((r) => Os(i, r.value)), s = e[i];
    (o == null ? void 0 : o.value) != null ? n.push(o.id) : s != null && n.push(s.id);
  }), n;
}
function Ey(e, t) {
  const n = [];
  return t.forEach((i) => {
    const o = e.findIndex((s) => s.id === i);
    if (~o) {
      const s = e[o];
      n.push(s.value != null ? s.value : o);
    }
  }), n;
}
const Sl = Symbol.for("vuetify:v-btn-toggle"), Cy = W({
  ...$d(),
  ...Md()
}, "VBtnToggle");
le()({
  name: "VBtnToggle",
  props: Cy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: i,
      next: o,
      prev: s,
      select: r,
      selected: l
    } = Fd(e, Sl);
    return ge(() => {
      const a = _i.filterProps(e);
      return f(_i, Ce({
        class: ["v-btn-toggle", e.class]
      }, a, {
        style: e.style
      }), {
        default: () => {
          var d;
          return [(d = n.default) == null ? void 0 : d.call(n, {
            isSelected: i,
            next: o,
            prev: s,
            select: r,
            selected: l
          })];
        }
      });
    }), {
      next: o,
      prev: s,
      select: r
    };
  }
});
function Bd(e, t) {
  const n = ue(), i = he(!1);
  if (dl) {
    const o = new IntersectionObserver((s) => {
      i.value = !!s.find((r) => r.isIntersecting);
    }, t);
    yt(() => {
      o.disconnect();
    }), ve(n, (s, r) => {
      r && (o.unobserve(r), i.value = !1), s && o.observe(s);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: i
  };
}
const ky = W({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...pe(),
  ...Is(),
  ...je({
    tag: "div"
  }),
  ...Xe()
}, "VProgressCircular"), Rd = le()({
  name: "VProgressCircular",
  props: ky(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = 20, o = 2 * Math.PI * i, s = ue(), {
      themeClasses: r
    } = lt(e), {
      sizeClasses: l,
      sizeStyles: a
    } = $s(e), {
      textColorClasses: d,
      textColorStyles: u
    } = jt(oe(e, "color")), {
      textColorClasses: c,
      textColorStyles: m
    } = jt(oe(e, "bgColor")), {
      intersectionRef: v,
      isIntersecting: g
    } = Bd(), {
      resizeRef: h,
      contentRect: w
    } = xd(), k = y(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), O = y(() => Number(e.width)), P = y(() => a.value ? Number(e.size) : w.value ? w.value.width : Math.max(O.value, 32)), M = y(() => i / (1 - O.value / P.value) * 2), x = y(() => O.value / P.value * M.value), N = y(() => se((100 - k.value) / 100 * o));
    return yn(() => {
      v.value = s.value, h.value = s.value;
    }), ge(() => f(e.tag, {
      ref: s,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": g.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, r.value, l.value, d.value, e.class],
      style: [a.value, u.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : k.value
    }, {
      default: () => [f("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${M.value} ${M.value}`
      }, [f("circle", {
        class: ["v-progress-circular__underlay", c.value],
        style: m.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: i,
        "stroke-width": x.value,
        "stroke-dasharray": o,
        "stroke-dashoffset": 0
      }, null), f("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: i,
        "stroke-width": x.value,
        "stroke-dasharray": o,
        "stroke-dashoffset": N.value
      }, null)]), n.default && f("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: k.value
      })])]
    })), {};
  }
}), cu = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Co = W({
  location: String
}, "location");
function ko(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: i
  } = en();
  return {
    locationStyles: y(() => {
      if (!e.location) return {};
      const {
        side: s,
        align: r
      } = Or(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, i.value);
      function l(d) {
        return n ? n(d) : 0;
      }
      const a = {};
      return s !== "center" && (t ? a[cu[s]] = `calc(100% - ${l(s)}px)` : a[s] = 0), r !== "center" ? t ? a[cu[r]] = `calc(100% - ${l(r)}px)` : a[r] = 0 : (s === "center" ? a.top = a.left = "50%" : a[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[s]] = "50%", a.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[s]), a;
    })
  };
}
const Ny = W({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...pe(),
  ...Co({
    location: "top"
  }),
  ...bt(),
  ...je(),
  ...Xe()
}, "VProgressLinear"), xy = le()({
  name: "VProgressLinear",
  props: Ny(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    var A;
    let {
      slots: n
    } = t;
    const i = nt(e, "modelValue"), {
      isRtl: o,
      rtlClasses: s
    } = en(), {
      themeClasses: r
    } = lt(e), {
      locationStyles: l
    } = ko(e), {
      textColorClasses: a,
      textColorStyles: d
    } = jt(e, "color"), {
      backgroundColorClasses: u,
      backgroundColorStyles: c
    } = Tt(y(() => e.bgColor || e.color)), {
      backgroundColorClasses: m,
      backgroundColorStyles: v
    } = Tt(y(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: g,
      backgroundColorStyles: h
    } = Tt(e, "color"), {
      roundedClasses: w
    } = _t(e), {
      intersectionRef: k,
      isIntersecting: O
    } = Bd(), P = y(() => parseFloat(e.max)), M = y(() => parseFloat(e.height)), x = y(() => Pn(parseFloat(e.bufferValue) / P.value * 100, 0, 100)), N = y(() => Pn(parseFloat(i.value) / P.value * 100, 0, 100)), $ = y(() => o.value !== e.reverse), C = y(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), V = Be && ((A = window.matchMedia) == null ? void 0 : A.call(window, "(forced-colors: active)").matches);
    function L(S) {
      if (!k.value) return;
      const {
        left: D,
        right: B,
        width: Z
      } = k.value.getBoundingClientRect(), Q = $.value ? Z - S.clientX + (B - Z) : S.clientX - D;
      i.value = Math.round(Q / Z * P.value);
    }
    return ge(() => f(e.tag, {
      ref: k,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && O.value,
        "v-progress-linear--reverse": $.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, w.value, r.value, s.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? se(M.value) : 0,
        "--v-progress-linear-height": se(M.value),
        ...e.absolute ? l.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : N.value,
      onClick: e.clickable && L
    }, {
      default: () => [e.stream && f("div", {
        key: "stream",
        class: ["v-progress-linear__stream", a.value],
        style: {
          ...d.value,
          [$.value ? "left" : "right"]: se(-M.value),
          borderTop: `${se(M.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${se(M.value / 4)})`,
          width: se(100 - x.value, "%"),
          "--v-progress-linear-stream-to": se(M.value * ($.value ? 1 : -1))
        }
      }, null), f("div", {
        class: ["v-progress-linear__background", V ? void 0 : u.value],
        style: [c.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), f("div", {
        class: ["v-progress-linear__buffer", V ? void 0 : m.value],
        style: [v.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: se(x.value, "%")
        }]
      }, null), f(ai, {
        name: C.value
      }, {
        default: () => [e.indeterminate ? f("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((S) => f("div", {
          key: S,
          class: ["v-progress-linear__indeterminate", S, V ? void 0 : g.value],
          style: h.value
        }, null))]) : f("div", {
          class: ["v-progress-linear__determinate", V ? void 0 : g.value],
          style: [h.value, {
            width: se(N.value, "%")
          }]
        }, null)]
      }), n.default && f("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: N.value,
        buffer: x.value
      })])]
    })), {};
  }
}), El = W({
  loading: [Boolean, String]
}, "loader");
function Cl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qt();
  return {
    loaderClasses: y(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function Hd(e, t) {
  var i;
  let {
    slots: n
  } = t;
  return f("div", {
    class: `${e.name}__loader`
  }, [((i = n.default) == null ? void 0 : i.call(n, {
    color: e.color,
    isActive: e.active
  })) || f(xy, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const Vy = ["static", "relative", "fixed", "absolute", "sticky"], kl = W({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Vy.includes(e)
    )
  }
}, "position");
function Nl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qt();
  return {
    positionClasses: y(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function Oy() {
  const e = Ue("useRoute");
  return y(() => {
    var t;
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
  });
}
function Ty() {
  var e, t;
  return (t = (e = Ue("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router;
}
function xl(e, t) {
  var c, m;
  const n = bv("RouterLink"), i = y(() => !!(e.href || e.to)), o = y(() => (i == null ? void 0 : i.value) || $a(t, "click") || $a(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const v = oe(e, "href");
    return {
      isLink: i,
      isClickable: o,
      href: v,
      linkProps: et({
        href: v
      })
    };
  }
  const s = y(() => ({
    ...e,
    to: oe(() => e.to || "")
  })), r = n.useLink(s.value), l = y(() => e.to ? r : void 0), a = Oy(), d = y(() => {
    var v, g, h;
    return l.value ? e.exact ? a.value ? ((h = l.value.isExactActive) == null ? void 0 : h.value) && Os(l.value.route.value.query, a.value.query) : ((g = l.value.isExactActive) == null ? void 0 : g.value) ?? !1 : ((v = l.value.isActive) == null ? void 0 : v.value) ?? !1 : !1;
  }), u = y(() => {
    var v;
    return e.to ? (v = l.value) == null ? void 0 : v.route.value.href : e.href;
  });
  return {
    isLink: i,
    isClickable: o,
    isActive: d,
    route: (c = l.value) == null ? void 0 : c.route,
    navigate: (m = l.value) == null ? void 0 : m.navigate,
    href: u,
    linkProps: et({
      href: u,
      "aria-current": y(() => d.value ? "page" : void 0)
    })
  };
}
const Vl = W({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let nr = !1;
function Dy(e, t) {
  let n = !1, i, o;
  Be && (At(() => {
    window.addEventListener("popstate", s), i = e == null ? void 0 : e.beforeEach((r, l, a) => {
      nr ? n ? t(a) : a() : setTimeout(() => n ? t(a) : a()), nr = !0;
    }), o = e == null ? void 0 : e.afterEach(() => {
      nr = !1;
    });
  }), zt(() => {
    window.removeEventListener("popstate", s), i == null || i(), o == null || o();
  }));
  function s(r) {
    var l;
    (l = r.state) != null && l.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function Py(e, t) {
  ve(() => {
    var n;
    return (n = e.isActive) == null ? void 0 : n.value;
  }, (n) => {
    e.isLink.value && n && t && At(() => {
      t(!0);
    });
  }, {
    immediate: !0
  });
}
const Ir = Symbol("rippleStop"), Ay = 80;
function du(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function $r(e) {
  return e.constructor.name === "TouchEvent";
}
function jd(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Iy = function(e, t) {
  var c;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = 0, o = 0;
  if (!jd(e)) {
    const m = t.getBoundingClientRect(), v = $r(e) ? e.touches[e.touches.length - 1] : e;
    i = v.clientX - m.left, o = v.clientY - m.top;
  }
  let s = 0, r = 0.3;
  (c = t._ripple) != null && c.circle ? (r = 0.15, s = t.clientWidth / 2, s = n.center ? s : s + Math.sqrt((i - s) ** 2 + (o - s) ** 2) / 4) : s = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const l = `${(t.clientWidth - s * 2) / 2}px`, a = `${(t.clientHeight - s * 2) / 2}px`, d = n.center ? l : `${i - s}px`, u = n.center ? a : `${o - s}px`;
  return {
    radius: s,
    scale: r,
    x: d,
    y: u,
    centerX: l,
    centerY: a
  };
}, vs = {
  /* eslint-disable max-statements */
  show(e, t) {
    var v;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((v = t == null ? void 0 : t._ripple) != null && v.enabled))
      return;
    const i = document.createElement("span"), o = document.createElement("span");
    i.appendChild(o), i.className = "v-ripple__container", n.class && (i.className += ` ${n.class}`);
    const {
      radius: s,
      scale: r,
      x: l,
      y: a,
      centerX: d,
      centerY: u
    } = Iy(e, t, n), c = `${s * 2}px`;
    o.className = "v-ripple__animation", o.style.width = c, o.style.height = c, t.appendChild(i);
    const m = window.getComputedStyle(t);
    m && m.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), du(o, `translate(${l}, ${a}) scale3d(${r},${r},${r})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
      o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), du(o, `translate(${d}, ${u}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    var s;
    if (!((s = e == null ? void 0 : e._ripple) != null && s.enabled)) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const n = t[t.length - 1];
    if (n.dataset.isHiding) return;
    n.dataset.isHiding = "true";
    const i = performance.now() - Number(n.dataset.activated), o = Math.max(250 - i, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var l;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((l = n.parentNode) == null ? void 0 : l.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, o);
  }
};
function zd(e) {
  return typeof e > "u" || !!e;
}
function co(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[Ir])) {
    if (e[Ir] = !0, $r(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || jd(e), n._ripple.class && (t.class = n._ripple.class), $r(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        vs.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var i;
        (i = n == null ? void 0 : n._ripple) != null && i.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Ay);
    } else
      vs.show(e, n, t);
  }
}
function fu(e) {
  e[Ir] = !0;
}
function Et(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        Et(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), vs.hide(t);
  }
}
function Ud(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let fo = !1;
function Wd(e) {
  !fo && (e.keyCode === Da.enter || e.keyCode === Da.space) && (fo = !0, co(e));
}
function Kd(e) {
  fo = !1, Et(e);
}
function Gd(e) {
  fo && (fo = !1, Et(e));
}
function Yd(e, t, n) {
  const {
    value: i,
    modifiers: o
  } = t, s = zd(i);
  if (s || vs.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = s, e._ripple.centered = o.center, e._ripple.circle = o.circle, rh(i) && i.class && (e._ripple.class = i.class), s && !n) {
    if (o.stop) {
      e.addEventListener("touchstart", fu, {
        passive: !0
      }), e.addEventListener("mousedown", fu);
      return;
    }
    e.addEventListener("touchstart", co, {
      passive: !0
    }), e.addEventListener("touchend", Et, {
      passive: !0
    }), e.addEventListener("touchmove", Ud, {
      passive: !0
    }), e.addEventListener("touchcancel", Et), e.addEventListener("mousedown", co), e.addEventListener("mouseup", Et), e.addEventListener("mouseleave", Et), e.addEventListener("keydown", Wd), e.addEventListener("keyup", Kd), e.addEventListener("blur", Gd), e.addEventListener("dragstart", Et, {
      passive: !0
    });
  } else !s && n && qd(e);
}
function qd(e) {
  e.removeEventListener("mousedown", co), e.removeEventListener("touchstart", co), e.removeEventListener("touchend", Et), e.removeEventListener("touchmove", Ud), e.removeEventListener("touchcancel", Et), e.removeEventListener("mouseup", Et), e.removeEventListener("mouseleave", Et), e.removeEventListener("keydown", Wd), e.removeEventListener("keyup", Kd), e.removeEventListener("dragstart", Et), e.removeEventListener("blur", Gd);
}
function $y(e, t) {
  Yd(e, t, !1);
}
function My(e) {
  delete e._ripple, qd(e);
}
function Fy(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = zd(t.oldValue);
  Yd(e, t, n);
}
const Ms = {
  mounted: $y,
  unmounted: My,
  updated: Fy
}, Ly = W({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: Sl
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: He,
  appendIcon: He,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...Ln(),
  ...pe(),
  ...tn(),
  ...bn(),
  ...Sn(),
  ..._y(),
  ...El(),
  ...Co(),
  ...kl(),
  ...bt(),
  ...Vl(),
  ...Is(),
  ...je({
    tag: "button"
  }),
  ...Xe(),
  ...fi({
    variant: "elevated"
  })
}, "VBtn"), fe = le()({
  name: "VBtn",
  props: Ly(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: i
    } = t;
    const {
      themeClasses: o
    } = lt(e), {
      borderClasses: s
    } = Bn(e), {
      densityClasses: r
    } = wn(e), {
      dimensionStyles: l
    } = _n(e), {
      elevationClasses: a
    } = En(e), {
      loaderClasses: d
    } = Cl(e), {
      locationStyles: u
    } = ko(e), {
      positionClasses: c
    } = Nl(e), {
      roundedClasses: m
    } = _t(e), {
      sizeClasses: v,
      sizeStyles: g
    } = $s(e), h = wy(e, e.symbol, !1), w = xl(e, n), k = y(() => {
      var A;
      return e.active !== void 0 ? e.active : w.isLink.value ? (A = w.isActive) == null ? void 0 : A.value : h == null ? void 0 : h.isSelected.value;
    }), O = y(() => k.value ? e.activeColor ?? e.color : e.color), P = y(() => {
      var S, D;
      return {
        color: (h == null ? void 0 : h.isSelected.value) && (!w.isLink.value || ((S = w.isActive) == null ? void 0 : S.value)) || !h || ((D = w.isActive) == null ? void 0 : D.value) ? O.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: M,
      colorStyles: x,
      variantClasses: N
    } = Eo(P), $ = y(() => (h == null ? void 0 : h.disabled.value) || e.disabled), C = y(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), V = y(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function L(A) {
      var S;
      $.value || w.isLink.value && (A.metaKey || A.ctrlKey || A.shiftKey || A.button !== 0 || n.target === "_blank") || ((S = w.navigate) == null || S.call(w, A), h == null || h.toggle());
    }
    return Py(w, h == null ? void 0 : h.select), ge(() => {
      const A = w.isLink.value ? "a" : e.tag, S = !!(e.prependIcon || i.prepend), D = !!(e.appendIcon || i.append), B = !!(e.icon && e.icon !== !0);
      return Nt(f(A, Ce({
        type: A === "a" ? void 0 : "button",
        class: ["v-btn", h == null ? void 0 : h.selectedClass.value, {
          "v-btn--active": k.value,
          "v-btn--block": e.block,
          "v-btn--disabled": $.value,
          "v-btn--elevated": C.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, o.value, s.value, M.value, r.value, a.value, d.value, c.value, m.value, v.value, N.value, e.class],
        style: [x.value, l.value, u.value, g.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: $.value || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: L,
        value: V.value
      }, w.linkProps), {
        default: () => {
          var Z;
          return [So(!0, "v-btn"), !e.icon && S && f("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [i.prepend ? f(it, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, i.prepend) : f(We, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), f("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!i.default && B ? f(We, {
            key: "content-icon",
            icon: e.icon
          }, null) : f(it, {
            key: "content-defaults",
            disabled: !B,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var Q;
              return [((Q = i.default) == null ? void 0 : Q.call(i)) ?? e.text];
            }
          })]), !e.icon && D && f("span", {
            key: "append",
            class: "v-btn__append"
          }, [i.append ? f(it, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, i.append) : f(We, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && f("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((Z = i.loader) == null ? void 0 : Z.call(i)) ?? f(Rd, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[Ms, !$.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: h
    };
  }
}), Ni = le()({
  name: "VCardActions",
  props: pe(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Ii({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), ge(() => {
      var i;
      return f("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(i = n.default) == null ? void 0 : i.call(n)]);
    }), {};
  }
}), By = W({
  opacity: [Number, String],
  ...pe(),
  ...je()
}, "VCardSubtitle"), Ry = le()({
  name: "VCardSubtitle",
  props: By(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ge(() => f(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, n)), {};
  }
}), wi = Ts("v-card-title"), Hy = W({
  appendAvatar: String,
  appendIcon: He,
  prependAvatar: String,
  prependIcon: He,
  subtitle: [String, Number],
  title: [String, Number],
  ...pe(),
  ...tn()
}, "VCardItem"), Zd = le()({
  name: "VCardItem",
  props: Hy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ge(() => {
      var d;
      const i = !!(e.prependAvatar || e.prependIcon), o = !!(i || n.prepend), s = !!(e.appendAvatar || e.appendIcon), r = !!(s || n.append), l = !!(e.title != null || n.title), a = !!(e.subtitle != null || n.subtitle);
      return f("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [o && f("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [n.prepend ? f(it, {
        key: "prepend-defaults",
        disabled: !i,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.prependAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.prependIcon
          }
        }
      }, n.prepend) : f(ke, null, [e.prependAvatar && f(Di, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && f(We, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), f("div", {
        class: "v-card-item__content"
      }, [l && f(wi, {
        key: "title"
      }, {
        default: () => {
          var u;
          return [((u = n.title) == null ? void 0 : u.call(n)) ?? e.title];
        }
      }), a && f(Ry, {
        key: "subtitle"
      }, {
        default: () => {
          var u;
          return [((u = n.subtitle) == null ? void 0 : u.call(n)) ?? e.subtitle];
        }
      }), (d = n.default) == null ? void 0 : d.call(n)]), r && f("div", {
        key: "append",
        class: "v-card-item__append"
      }, [n.append ? f(it, {
        key: "append-defaults",
        disabled: !s,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.appendAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.appendIcon
          }
        }
      }, n.append) : f(ke, null, [e.appendIcon && f(We, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && f(Di, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), jy = W({
  opacity: [Number, String],
  ...pe(),
  ...je()
}, "VCardText"), xi = le()({
  name: "VCardText",
  props: jy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ge(() => f(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, n)), {};
  }
}), zy = W({
  appendAvatar: String,
  appendIcon: He,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: He,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...Ln(),
  ...pe(),
  ...tn(),
  ...bn(),
  ...Sn(),
  ...El(),
  ...Co(),
  ...kl(),
  ...bt(),
  ...Vl(),
  ...je(),
  ...Xe(),
  ...fi({
    variant: "elevated"
  })
}, "VCard"), Mt = le()({
  name: "VCard",
  directives: {
    Ripple: Ms
  },
  props: zy(),
  setup(e, t) {
    let {
      attrs: n,
      slots: i
    } = t;
    const {
      themeClasses: o
    } = lt(e), {
      borderClasses: s
    } = Bn(e), {
      colorClasses: r,
      colorStyles: l,
      variantClasses: a
    } = Eo(e), {
      densityClasses: d
    } = wn(e), {
      dimensionStyles: u
    } = _n(e), {
      elevationClasses: c
    } = En(e), {
      loaderClasses: m
    } = Cl(e), {
      locationStyles: v
    } = ko(e), {
      positionClasses: g
    } = Nl(e), {
      roundedClasses: h
    } = _t(e), w = xl(e, n), k = y(() => e.link !== !1 && w.isLink.value), O = y(() => !e.disabled && e.link !== !1 && (e.link || w.isClickable.value));
    return ge(() => {
      const P = k.value ? "a" : e.tag, M = !!(i.title || e.title != null), x = !!(i.subtitle || e.subtitle != null), N = M || x, $ = !!(i.append || e.appendAvatar || e.appendIcon), C = !!(i.prepend || e.prependAvatar || e.prependIcon), V = !!(i.image || e.image), L = N || C || $, A = !!(i.text || e.text != null);
      return Nt(f(P, Ce({
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": O.value
        }, o.value, s.value, r.value, d.value, c.value, m.value, g.value, h.value, a.value, e.class],
        style: [l.value, u.value, v.value, e.style],
        onClick: O.value && w.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, w.linkProps), {
        default: () => {
          var S;
          return [V && f("div", {
            key: "image",
            class: "v-card__image"
          }, [i.image ? f(it, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, i.image) : f(wl, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), f(Hd, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: i.loader
          }), L && f(Zd, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: i.item,
            prepend: i.prepend,
            title: i.title,
            subtitle: i.subtitle,
            append: i.append
          }), A && f(xi, {
            key: "text"
          }, {
            default: () => {
              var D;
              return [((D = i.text) == null ? void 0 : D.call(i)) ?? e.text];
            }
          }), (S = i.default) == null ? void 0 : S.call(i), i.actions && f(Ni, null, {
            default: i.actions
          }), So(O.value, "v-card")];
        }
      }), [[Ai("ripple"), O.value && e.ripple]]);
    }), {};
  }
}), Uy = W({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...pe(),
  ...Xe()
}, "VDivider"), fn = le()({
  name: "VDivider",
  props: Uy(),
  setup(e, t) {
    let {
      attrs: n,
      slots: i
    } = t;
    const {
      themeClasses: o
    } = lt(e), {
      textColorClasses: s,
      textColorStyles: r
    } = jt(oe(e, "color")), l = y(() => {
      const a = {};
      return e.length && (a[e.vertical ? "height" : "width"] = se(e.length)), e.thickness && (a[e.vertical ? "borderRightWidth" : "borderTopWidth"] = se(e.thickness)), a;
    });
    return ge(() => {
      const a = f("hr", {
        class: [{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, o.value, s.value, e.class],
        style: [l.value, r.value, {
          "--v-border-opacity": e.opacity
        }, e.style],
        "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${n.role || "separator"}`
      }, null);
      return i.default ? f("div", {
        class: ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }]
      }, [a, f("div", {
        class: "v-divider__content"
      }, [i.default()]), a]) : a;
    }), {};
  }
}), Xd = Ps.reduce((e, t) => (e[t] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), Jd = Ps.reduce((e, t) => {
  const n = "offset" + Dt(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Qd = Ps.reduce((e, t) => {
  const n = "order" + Dt(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), mu = {
  col: Object.keys(Xd),
  offset: Object.keys(Jd),
  order: Object.keys(Qd)
};
function Wy(e, t, n) {
  let i = e;
  if (!(n == null || n === !1)) {
    if (t) {
      const o = t.replace(e, "");
      i += `-${o}`;
    }
    return e === "col" && (i = "v-" + i), e === "col" && (n === "" || n === !0) || (i += `-${n}`), i.toLowerCase();
  }
}
const Ky = ["auto", "start", "end", "center", "baseline", "stretch"], Gy = W({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...Xd,
  offset: {
    type: [String, Number],
    default: null
  },
  ...Jd,
  order: {
    type: [String, Number],
    default: null
  },
  ...Qd,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => Ky.includes(e)
  },
  ...pe(),
  ...je()
}, "VCol"), ze = le()({
  name: "VCol",
  props: Gy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = y(() => {
      const o = [];
      let s;
      for (s in mu)
        mu[s].forEach((l) => {
          const a = e[l], d = Wy(s, l, a);
          d && o.push(d);
        });
      const r = o.some((l) => l.startsWith("v-col-"));
      return o.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !r || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), o;
    });
    return () => {
      var o;
      return $n(e.tag, {
        class: [i.value, e.class],
        style: e.style
      }, (o = n.default) == null ? void 0 : o.call(n));
    };
  }
}), Ol = ["start", "end", "center"], ef = ["space-between", "space-around", "space-evenly"];
function Tl(e, t) {
  return Ps.reduce((n, i) => {
    const o = e + Dt(i);
    return n[o] = t(), n;
  }, {});
}
const Yy = [...Ol, "baseline", "stretch"], tf = (e) => Yy.includes(e), nf = Tl("align", () => ({
  type: String,
  default: null,
  validator: tf
})), qy = [...Ol, ...ef], of = (e) => qy.includes(e), sf = Tl("justify", () => ({
  type: String,
  default: null,
  validator: of
})), Zy = [...Ol, ...ef, "stretch"], rf = (e) => Zy.includes(e), lf = Tl("alignContent", () => ({
  type: String,
  default: null,
  validator: rf
})), vu = {
  align: Object.keys(nf),
  justify: Object.keys(sf),
  alignContent: Object.keys(lf)
}, Xy = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function Jy(e, t, n) {
  let i = Xy[e];
  if (n != null) {
    if (t) {
      const o = t.replace(e, "");
      i += `-${o}`;
    }
    return i += `-${n}`, i.toLowerCase();
  }
}
const Qy = W({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: tf
  },
  ...nf,
  justify: {
    type: String,
    default: null,
    validator: of
  },
  ...sf,
  alignContent: {
    type: String,
    default: null,
    validator: rf
  },
  ...lf,
  ...pe(),
  ...je()
}, "VRow"), an = le()({
  name: "VRow",
  props: Qy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = y(() => {
      const o = [];
      let s;
      for (s in vu)
        vu[s].forEach((r) => {
          const l = e[r], a = Jy(s, r, l);
          a && o.push(a);
        });
      return o.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), o;
    });
    return () => {
      var o;
      return $n(e.tag, {
        class: ["v-row", i.value, e.class],
        style: e.style
      }, (o = n.default) == null ? void 0 : o.call(n));
    };
  }
}), af = Ts("v-spacer", "div", "VSpacer"), eb = W({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function xt(e, t, n) {
  return le()({
    name: e,
    props: eb({
      mode: n,
      origin: t
    }),
    setup(i, o) {
      let {
        slots: s
      } = o;
      const r = {
        onBeforeEnter(l) {
          i.origin && (l.style.transformOrigin = i.origin);
        },
        onLeave(l) {
          if (i.leaveAbsolute) {
            const {
              offsetTop: a,
              offsetLeft: d,
              offsetWidth: u,
              offsetHeight: c
            } = l;
            l._transitionInitialStyles = {
              position: l.style.position,
              top: l.style.top,
              left: l.style.left,
              width: l.style.width,
              height: l.style.height
            }, l.style.position = "absolute", l.style.top = `${a}px`, l.style.left = `${d}px`, l.style.width = `${u}px`, l.style.height = `${c}px`;
          }
          i.hideOnLeave && l.style.setProperty("display", "none", "important");
        },
        onAfterLeave(l) {
          if (i.leaveAbsolute && (l != null && l._transitionInitialStyles)) {
            const {
              position: a,
              top: d,
              left: u,
              width: c,
              height: m
            } = l._transitionInitialStyles;
            delete l._transitionInitialStyles, l.style.position = a || "", l.style.top = d || "", l.style.left = u || "", l.style.width = c || "", l.style.height = m || "";
          }
        }
      };
      return () => {
        const l = i.group ? cl : ai;
        return $n(l, {
          name: i.disabled ? "" : e,
          css: !i.disabled,
          ...i.group ? void 0 : {
            mode: i.mode
          },
          ...i.disabled ? {} : r
        }, s.default);
      };
    }
  });
}
function uf(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return le()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(i, o) {
      let {
        slots: s
      } = o;
      const r = i.group ? cl : ai;
      return () => $n(r, {
        name: i.disabled ? "" : e,
        css: !i.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...i.disabled ? {} : t
      }, s.default);
    }
  });
}
function cf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", i = tt(`offset-${n}`);
  return {
    onBeforeEnter(r) {
      r._parent = r.parentNode, r._initialStyle = {
        transition: r.style.transition,
        overflow: r.style.overflow,
        [n]: r.style[n]
      };
    },
    onEnter(r) {
      const l = r._initialStyle;
      r.style.setProperty("transition", "none", "important"), r.style.overflow = "hidden";
      const a = `${r[i]}px`;
      r.style[n] = "0", r.offsetHeight, r.style.transition = l.transition, e && r._parent && r._parent.classList.add(e), requestAnimationFrame(() => {
        r.style[n] = a;
      });
    },
    onAfterEnter: s,
    onEnterCancelled: s,
    onLeave(r) {
      r._initialStyle = {
        transition: "",
        overflow: r.style.overflow,
        [n]: r.style[n]
      }, r.style.overflow = "hidden", r.style[n] = `${r[i]}px`, r.offsetHeight, requestAnimationFrame(() => r.style[n] = "0");
    },
    onAfterLeave: o,
    onLeaveCancelled: o
  };
  function o(r) {
    e && r._parent && r._parent.classList.remove(e), s(r);
  }
  function s(r) {
    const l = r._initialStyle[n];
    r.style.overflow = r._initialStyle.overflow, l != null && (r.style[n] = l), delete r._initialStyle;
  }
}
const tb = W({
  target: [Object, Array]
}, "v-dialog-transition"), nb = le()({
  name: "VDialogTransition",
  props: tb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = {
      onBeforeEnter(o) {
        o.style.pointerEvents = "none", o.style.visibility = "hidden";
      },
      async onEnter(o, s) {
        var m;
        await new Promise((v) => requestAnimationFrame(v)), await new Promise((v) => requestAnimationFrame(v)), o.style.visibility = "";
        const {
          x: r,
          y: l,
          sx: a,
          sy: d,
          speed: u
        } = hu(e.target, o), c = bi(o, [{
          transform: `translate(${r}px, ${l}px) scale(${a}, ${d})`,
          opacity: 0
        }, {}], {
          duration: 225 * u,
          easing: Kh
        });
        (m = gu(o)) == null || m.forEach((v) => {
          bi(v, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * u,
            easing: us
          });
        }), c.finished.then(() => s());
      },
      onAfterEnter(o) {
        o.style.removeProperty("pointer-events");
      },
      onBeforeLeave(o) {
        o.style.pointerEvents = "none";
      },
      async onLeave(o, s) {
        var m;
        await new Promise((v) => requestAnimationFrame(v));
        const {
          x: r,
          y: l,
          sx: a,
          sy: d,
          speed: u
        } = hu(e.target, o);
        bi(o, [{}, {
          transform: `translate(${r}px, ${l}px) scale(${a}, ${d})`,
          opacity: 0
        }], {
          duration: 125 * u,
          easing: Gh
        }).finished.then(() => s()), (m = gu(o)) == null || m.forEach((v) => {
          bi(v, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * u,
            easing: us
          });
        });
      },
      onAfterLeave(o) {
        o.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? f(ai, Ce({
      name: "dialog-transition"
    }, i, {
      css: !1
    }), n) : f(ai, {
      name: "dialog-transition"
    }, n);
  }
});
function gu(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function hu(e, t) {
  const n = cd(e), i = gl(t), [o, s] = getComputedStyle(t).transformOrigin.split(" ").map((k) => parseFloat(k)), [r, l] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let a = n.left + n.width / 2;
  r === "left" || l === "left" ? a -= n.width / 2 : (r === "right" || l === "right") && (a += n.width / 2);
  let d = n.top + n.height / 2;
  r === "top" || l === "top" ? d -= n.height / 2 : (r === "bottom" || l === "bottom") && (d += n.height / 2);
  const u = n.width / i.width, c = n.height / i.height, m = Math.max(1, u, c), v = u / m || 0, g = c / m || 0, h = i.width * i.height / (window.innerWidth * window.innerHeight), w = h > 0.12 ? Math.min(1.5, (h - 0.12) * 10 + 1) : 1;
  return {
    x: a - (o + i.left),
    y: d - (s + i.top),
    sx: v,
    sy: g,
    speed: w
  };
}
xt("fab-transition", "center center", "out-in");
xt("dialog-bottom-transition");
xt("dialog-top-transition");
xt("fade-transition");
const ib = xt("scale-transition");
xt("scroll-x-transition");
xt("scroll-x-reverse-transition");
xt("scroll-y-transition");
xt("scroll-y-reverse-transition");
xt("slide-x-transition");
xt("slide-x-reverse-transition");
const df = xt("slide-y-transition");
xt("slide-y-reverse-transition");
const ff = uf("expand-transition", cf()), ob = uf("expand-x-transition", cf("", !0)), Mr = Symbol.for("vuetify:list");
function mf() {
  const e = Re(Mr, {
    hasPrepend: he(!1),
    updateHasPrepend: () => null
  }), t = {
    hasPrepend: he(!1),
    updateHasPrepend: (n) => {
      n && (t.hasPrepend.value = n);
    }
  };
  return gt(Mr, t), e;
}
function vf() {
  return Re(Mr, null);
}
const Dl = (e) => {
  const t = {
    activate: (n) => {
      let {
        id: i,
        value: o,
        activated: s
      } = n;
      return i = J(i), e && !o && s.size === 1 && s.has(i) || (o ? s.add(i) : s.delete(i)), s;
    },
    in: (n, i, o) => {
      let s = /* @__PURE__ */ new Set();
      if (n != null)
        for (const r of ni(n))
          s = t.activate({
            id: r,
            value: !0,
            activated: new Set(s),
            children: i,
            parents: o
          });
      return s;
    },
    out: (n) => Array.from(n)
  };
  return t;
}, gf = (e) => {
  const t = Dl(e);
  return {
    activate: (i) => {
      let {
        activated: o,
        id: s,
        ...r
      } = i;
      s = J(s);
      const l = o.has(s) ? /* @__PURE__ */ new Set([s]) : /* @__PURE__ */ new Set();
      return t.activate({
        ...r,
        id: s,
        activated: l
      });
    },
    in: (i, o, s) => {
      let r = /* @__PURE__ */ new Set();
      if (i != null) {
        const l = ni(i);
        l.length && (r = t.in(l.slice(0, 1), o, s));
      }
      return r;
    },
    out: (i, o, s) => t.out(i, o, s)
  };
}, sb = (e) => {
  const t = Dl(e);
  return {
    activate: (i) => {
      let {
        id: o,
        activated: s,
        children: r,
        ...l
      } = i;
      return o = J(o), r.has(o) ? s : t.activate({
        id: o,
        activated: s,
        children: r,
        ...l
      });
    },
    in: t.in,
    out: t.out
  };
}, rb = (e) => {
  const t = gf(e);
  return {
    activate: (i) => {
      let {
        id: o,
        activated: s,
        children: r,
        ...l
      } = i;
      return o = J(o), r.has(o) ? s : t.activate({
        id: o,
        activated: s,
        children: r,
        ...l
      });
    },
    in: t.in,
    out: t.out
  };
}, lb = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: i,
      parents: o
    } = e;
    if (n) {
      const s = /* @__PURE__ */ new Set();
      s.add(t);
      let r = o.get(t);
      for (; r != null; )
        s.add(r), r = o.get(r);
      return s;
    } else
      return i.delete(t), i;
  },
  select: () => null
}, hf = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: i,
      parents: o
    } = e;
    if (n) {
      let s = o.get(t);
      for (i.add(t); s != null && s !== t; )
        i.add(s), s = o.get(s);
      return i;
    } else
      i.delete(t);
    return i;
  },
  select: () => null
}, ab = {
  open: hf.open,
  select: (e) => {
    let {
      id: t,
      value: n,
      opened: i,
      parents: o
    } = e;
    if (!n) return i;
    const s = [];
    let r = o.get(t);
    for (; r != null; )
      s.push(r), r = o.get(r);
    return new Set(s);
  }
}, Pl = (e) => {
  const t = {
    select: (n) => {
      let {
        id: i,
        value: o,
        selected: s
      } = n;
      if (i = J(i), e && !o) {
        const r = Array.from(s.entries()).reduce((l, a) => {
          let [d, u] = a;
          return u === "on" && l.push(d), l;
        }, []);
        if (r.length === 1 && r[0] === i) return s;
      }
      return s.set(i, o ? "on" : "off"), s;
    },
    in: (n, i, o) => {
      let s = /* @__PURE__ */ new Map();
      for (const r of n || [])
        s = t.select({
          id: r,
          value: !0,
          selected: new Map(s),
          children: i,
          parents: o
        });
      return s;
    },
    out: (n) => {
      const i = [];
      for (const [o, s] of n.entries())
        s === "on" && i.push(o);
      return i;
    }
  };
  return t;
}, pf = (e) => {
  const t = Pl(e);
  return {
    select: (i) => {
      let {
        selected: o,
        id: s,
        ...r
      } = i;
      s = J(s);
      const l = o.has(s) ? /* @__PURE__ */ new Map([[s, o.get(s)]]) : /* @__PURE__ */ new Map();
      return t.select({
        ...r,
        id: s,
        selected: l
      });
    },
    in: (i, o, s) => {
      let r = /* @__PURE__ */ new Map();
      return i != null && i.length && (r = t.in(i.slice(0, 1), o, s)), r;
    },
    out: (i, o, s) => t.out(i, o, s)
  };
}, ub = (e) => {
  const t = Pl(e);
  return {
    select: (i) => {
      let {
        id: o,
        selected: s,
        children: r,
        ...l
      } = i;
      return o = J(o), r.has(o) ? s : t.select({
        id: o,
        selected: s,
        children: r,
        ...l
      });
    },
    in: t.in,
    out: t.out
  };
}, cb = (e) => {
  const t = pf(e);
  return {
    select: (i) => {
      let {
        id: o,
        selected: s,
        children: r,
        ...l
      } = i;
      return o = J(o), r.has(o) ? s : t.select({
        id: o,
        selected: s,
        children: r,
        ...l
      });
    },
    in: t.in,
    out: t.out
  };
}, db = (e) => {
  const t = {
    select: (n) => {
      let {
        id: i,
        value: o,
        selected: s,
        children: r,
        parents: l
      } = n;
      i = J(i);
      const a = new Map(s), d = [i];
      for (; d.length; ) {
        const c = d.shift();
        s.set(J(c), o ? "on" : "off"), r.has(c) && d.push(...r.get(c));
      }
      let u = J(l.get(i));
      for (; u; ) {
        const c = r.get(u), m = c.every((g) => s.get(J(g)) === "on"), v = c.every((g) => !s.has(J(g)) || s.get(J(g)) === "off");
        s.set(u, m ? "on" : v ? "off" : "indeterminate"), u = J(l.get(u));
      }
      return e && !o && Array.from(s.entries()).reduce((m, v) => {
        let [g, h] = v;
        return h === "on" && m.push(g), m;
      }, []).length === 0 ? a : s;
    },
    in: (n, i, o) => {
      let s = /* @__PURE__ */ new Map();
      for (const r of n || [])
        s = t.select({
          id: r,
          value: !0,
          selected: new Map(s),
          children: i,
          parents: o
        });
      return s;
    },
    out: (n, i) => {
      const o = [];
      for (const [s, r] of n.entries())
        r === "on" && !i.has(s) && o.push(s);
      return o;
    }
  };
  return t;
}, mo = Symbol.for("vuetify:nested"), yf = {
  id: he(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: ue(/* @__PURE__ */ new Map()),
    children: ue(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: ue(!1),
    selectable: ue(!1),
    opened: ue(/* @__PURE__ */ new Set()),
    activated: ue(/* @__PURE__ */ new Set()),
    selected: ue(/* @__PURE__ */ new Map()),
    selectedValues: ue([]),
    getPath: () => []
  }
}, fb = W({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), mb = (e) => {
  let t = !1;
  const n = ue(/* @__PURE__ */ new Map()), i = ue(/* @__PURE__ */ new Map()), o = nt(e, "opened", e.opened, (g) => new Set(g), (g) => [...g.values()]), s = y(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return sb(e.mandatory);
      case "single-leaf":
        return rb(e.mandatory);
      case "independent":
        return Dl(e.mandatory);
      case "single-independent":
      default:
        return gf(e.mandatory);
    }
  }), r = y(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return cb(e.mandatory);
      case "leaf":
        return ub(e.mandatory);
      case "independent":
        return Pl(e.mandatory);
      case "single-independent":
        return pf(e.mandatory);
      case "classic":
      default:
        return db(e.mandatory);
    }
  }), l = y(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return ab;
      case "single":
        return lb;
      case "multiple":
      default:
        return hf;
    }
  }), a = nt(e, "activated", e.activated, (g) => s.value.in(g, n.value, i.value), (g) => s.value.out(g, n.value, i.value)), d = nt(e, "selected", e.selected, (g) => r.value.in(g, n.value, i.value), (g) => r.value.out(g, n.value, i.value));
  yt(() => {
    t = !0;
  });
  function u(g) {
    const h = [];
    let w = g;
    for (; w != null; )
      h.unshift(w), w = i.value.get(w);
    return h;
  }
  const c = Ue("nested"), m = /* @__PURE__ */ new Set(), v = {
    id: he(),
    root: {
      opened: o,
      activatable: oe(e, "activatable"),
      selectable: oe(e, "selectable"),
      activated: a,
      selected: d,
      selectedValues: y(() => {
        const g = [];
        for (const [h, w] of d.value.entries())
          w === "on" && g.push(h);
        return g;
      }),
      register: (g, h, w) => {
        if (m.has(g)) {
          const k = u(g).map(String).join(" -> "), O = u(h).concat(g).map(String).join(" -> ");
          ls(`Multiple nodes with the same ID
	${k}
	${O}`);
          return;
        } else
          m.add(g);
        h && g !== h && i.value.set(g, h), w && n.value.set(g, []), h != null && n.value.set(h, [...n.value.get(h) || [], g]);
      },
      unregister: (g) => {
        if (t) return;
        m.delete(g), n.value.delete(g);
        const h = i.value.get(g);
        if (h) {
          const w = n.value.get(h) ?? [];
          n.value.set(h, w.filter((k) => k !== g));
        }
        i.value.delete(g);
      },
      open: (g, h, w) => {
        c.emit("click:open", {
          id: g,
          value: h,
          path: u(g),
          event: w
        });
        const k = l.value.open({
          id: g,
          value: h,
          opened: new Set(o.value),
          children: n.value,
          parents: i.value,
          event: w
        });
        k && (o.value = k);
      },
      openOnSelect: (g, h, w) => {
        const k = l.value.select({
          id: g,
          value: h,
          selected: new Map(d.value),
          opened: new Set(o.value),
          children: n.value,
          parents: i.value,
          event: w
        });
        k && (o.value = k);
      },
      select: (g, h, w) => {
        c.emit("click:select", {
          id: g,
          value: h,
          path: u(g),
          event: w
        });
        const k = r.value.select({
          id: g,
          value: h,
          selected: new Map(d.value),
          children: n.value,
          parents: i.value,
          event: w
        });
        k && (d.value = k), v.root.openOnSelect(g, h, w);
      },
      activate: (g, h, w) => {
        if (!e.activatable)
          return v.root.select(g, !0, w);
        c.emit("click:activate", {
          id: g,
          value: h,
          path: u(g),
          event: w
        });
        const k = s.value.activate({
          id: g,
          value: h,
          activated: new Set(a.value),
          children: n.value,
          parents: i.value,
          event: w
        });
        k && (a.value = k);
      },
      children: n,
      parents: i,
      getPath: u
    }
  };
  return gt(mo, v), v.root;
}, bf = (e, t) => {
  const n = Re(mo, yf), i = Symbol(Fn()), o = y(() => e.value !== void 0 ? e.value : i), s = {
    ...n,
    id: o,
    open: (r, l) => n.root.open(o.value, r, l),
    openOnSelect: (r, l) => n.root.openOnSelect(o.value, r, l),
    isOpen: y(() => n.root.opened.value.has(o.value)),
    parent: y(() => n.root.parents.value.get(o.value)),
    activate: (r, l) => n.root.activate(o.value, r, l),
    isActivated: y(() => n.root.activated.value.has(J(o.value))),
    select: (r, l) => n.root.select(o.value, r, l),
    isSelected: y(() => n.root.selected.value.get(J(o.value)) === "on"),
    isIndeterminate: y(() => n.root.selected.value.get(o.value) === "indeterminate"),
    isLeaf: y(() => !n.root.children.value.get(o.value)),
    isGroupActivator: n.isGroupActivator
  };
  return !n.isGroupActivator && n.root.register(o.value, n.id.value, t), yt(() => {
    !n.isGroupActivator && n.root.unregister(o.value);
  }), t && gt(mo, s), s;
}, vb = () => {
  const e = Re(mo, yf);
  gt(mo, {
    ...e,
    isGroupActivator: !0
  });
};
function Fs() {
  const e = he(!1);
  return In(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: y(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: ho(e)
  };
}
const gb = $i({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return vb(), () => {
      var i;
      return (i = n.default) == null ? void 0 : i.call(n);
    };
  }
}), hb = W({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: He,
    default: "$collapse"
  },
  expandIcon: {
    type: He,
    default: "$expand"
  },
  prependIcon: He,
  appendIcon: He,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...pe(),
  ...je()
}, "VListGroup"), gs = le()({
  name: "VListGroup",
  props: hb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: i,
      open: o,
      id: s
    } = bf(oe(e, "value"), !0), r = y(() => `v-list-group--id-${String(s.value)}`), l = vf(), {
      isBooted: a
    } = Fs();
    function d(v) {
      v.stopPropagation(), o(!i.value, v);
    }
    const u = y(() => ({
      onClick: d,
      class: "v-list-group__header",
      id: r.value
    })), c = y(() => i.value ? e.collapseIcon : e.expandIcon), m = y(() => ({
      VListItem: {
        active: i.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && c.value,
        appendIcon: e.appendIcon || !e.subgroup && c.value,
        title: e.title,
        value: e.value
      }
    }));
    return ge(() => f(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": l == null ? void 0 : l.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": i.value
      }, e.class],
      style: e.style
    }, {
      default: () => [n.activator && f(it, {
        defaults: m.value
      }, {
        default: () => [f(gb, null, {
          default: () => [n.activator({
            props: u.value,
            isOpen: i.value
          })]
        })]
      }), f(cn, {
        transition: {
          component: ff
        },
        disabled: !a.value
      }, {
        default: () => {
          var v;
          return [Nt(f("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": r.value
          }, [(v = n.default) == null ? void 0 : v.call(n)]), [[Mn, i.value]])];
        }
      })]
    })), {
      isOpen: i
    };
  }
}), pb = W({
  opacity: [Number, String],
  ...pe(),
  ...je()
}, "VListItemSubtitle"), _f = le()({
  name: "VListItemSubtitle",
  props: pb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ge(() => f(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, n)), {};
  }
}), Al = Ts("v-list-item-title"), yb = W({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: He,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: He,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: Ot(),
  onClickOnce: Ot(),
  ...Ln(),
  ...pe(),
  ...tn(),
  ...bn(),
  ...Sn(),
  ...bt(),
  ...Vl(),
  ...je(),
  ...Xe(),
  ...fi({
    variant: "text"
  })
}, "VListItem"), Le = le()({
  name: "VListItem",
  directives: {
    Ripple: Ms
  },
  props: yb(),
  emits: {
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: i,
      emit: o
    } = t;
    const s = xl(e, n), r = y(() => e.value === void 0 ? s.href.value : e.value), {
      activate: l,
      isActivated: a,
      select: d,
      isOpen: u,
      isSelected: c,
      isIndeterminate: m,
      isGroupActivator: v,
      root: g,
      parent: h,
      openOnSelect: w,
      id: k
    } = bf(r, !1), O = vf(), P = y(() => {
      var ne;
      return e.active !== !1 && (e.active || ((ne = s.isActive) == null ? void 0 : ne.value) || (g.activatable.value ? a.value : c.value));
    }), M = y(() => e.link !== !1 && s.isLink.value), x = y(() => !e.disabled && e.link !== !1 && (e.link || s.isClickable.value || !!O && (g.selectable.value || g.activatable.value || e.value != null))), N = y(() => e.rounded || e.nav), $ = y(() => e.color ?? e.activeColor), C = y(() => ({
      color: P.value ? $.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    ve(() => {
      var ne;
      return (ne = s.isActive) == null ? void 0 : ne.value;
    }, (ne) => {
      ne && h.value != null && g.open(h.value, !0), ne && w(ne);
    }, {
      immediate: !0
    });
    const {
      themeClasses: V
    } = lt(e), {
      borderClasses: L
    } = Bn(e), {
      colorClasses: A,
      colorStyles: S,
      variantClasses: D
    } = Eo(C), {
      densityClasses: B
    } = wn(e), {
      dimensionStyles: Z
    } = _n(e), {
      elevationClasses: Q
    } = En(e), {
      roundedClasses: X
    } = _t(N), q = y(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), ye = y(() => ({
      isActive: P.value,
      select: d,
      isOpen: u.value,
      isSelected: c.value,
      isIndeterminate: m.value
    }));
    function be(ne) {
      var Ve;
      o("click", ne), x.value && ((Ve = s.navigate) == null || Ve.call(s, ne), !v && (g.activatable.value ? l(!a.value, ne) : (g.selectable.value || e.value != null) && d(!c.value, ne)));
    }
    function me(ne) {
      (ne.key === "Enter" || ne.key === " ") && (ne.preventDefault(), ne.target.dispatchEvent(new MouseEvent("click", ne)));
    }
    return ge(() => {
      const ne = M.value ? "a" : e.tag, Ve = i.title || e.title != null, Je = i.subtitle || e.subtitle != null, Qe = !!(e.appendAvatar || e.appendIcon), Y = !!(Qe || i.append), ce = !!(e.prependAvatar || e.prependIcon), Ie = !!(ce || i.prepend);
      return O == null || O.updateHasPrepend(Ie), e.activeColor && xh("active-color", ["color", "base-color"]), Nt(f(ne, Ce({
        class: ["v-list-item", {
          "v-list-item--active": P.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": x.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !Ie && (O == null ? void 0 : O.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && P.value
        }, V.value, L.value, A.value, B.value, Q.value, q.value, X.value, D.value, e.class],
        style: [S.value, Z.value, e.style],
        tabindex: x.value ? O ? -2 : 0 : void 0,
        "aria-selected": g.activatable.value ? a.value : c.value,
        onClick: be,
        onKeydown: x.value && !M.value && me
      }, s.linkProps), {
        default: () => {
          var at;
          return [So(x.value || P.value, "v-list-item"), Ie && f("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [i.prepend ? f(it, {
            key: "prepend-defaults",
            disabled: !ce,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var Ge;
              return [(Ge = i.prepend) == null ? void 0 : Ge.call(i, ye.value)];
            }
          }) : f(ke, null, [e.prependAvatar && f(Di, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && f(We, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), f("div", {
            class: "v-list-item__spacer"
          }, null)]), f("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [Ve && f(Al, {
            key: "title"
          }, {
            default: () => {
              var Ge;
              return [((Ge = i.title) == null ? void 0 : Ge.call(i, {
                title: e.title
              })) ?? e.title];
            }
          }), Je && f(_f, {
            key: "subtitle"
          }, {
            default: () => {
              var Ge;
              return [((Ge = i.subtitle) == null ? void 0 : Ge.call(i, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (at = i.default) == null ? void 0 : at.call(i, ye.value)]), Y && f("div", {
            key: "append",
            class: "v-list-item__append"
          }, [i.append ? f(it, {
            key: "append-defaults",
            disabled: !Qe,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var Ge;
              return [(Ge = i.append) == null ? void 0 : Ge.call(i, ye.value)];
            }
          }) : f(ke, null, [e.appendIcon && f(We, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && f(Di, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), f("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[Ai("ripple"), x.value && e.ripple]]);
    }), {
      activate: l,
      isActivated: a,
      isGroupActivator: v,
      isSelected: c,
      list: O,
      select: d,
      root: g,
      id: k
    };
  }
}), bb = W({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...pe(),
  ...je()
}, "VListSubheader"), _b = le()({
  name: "VListSubheader",
  props: bb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: i,
      textColorStyles: o
    } = jt(oe(e, "color"));
    return ge(() => {
      const s = !!(n.default || e.title);
      return f(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, i.value, e.class],
        style: [{
          textColorStyles: o
        }, e.style]
      }, {
        default: () => {
          var r;
          return [s && f("div", {
            class: "v-list-subheader__text"
          }, [((r = n.default) == null ? void 0 : r.call(n)) ?? e.title])];
        }
      });
    }), {};
  }
}), wb = W({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), wf = le()({
  name: "VListChildren",
  props: wb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return mf(), () => {
      var i, o;
      return ((i = n.default) == null ? void 0 : i.call(n)) ?? ((o = e.items) == null ? void 0 : o.map((s) => {
        var m, v;
        let {
          children: r,
          props: l,
          type: a,
          raw: d
        } = s;
        if (a === "divider")
          return ((m = n.divider) == null ? void 0 : m.call(n, {
            props: l
          })) ?? f(fn, l, null);
        if (a === "subheader")
          return ((v = n.subheader) == null ? void 0 : v.call(n, {
            props: l
          })) ?? f(_b, l, null);
        const u = {
          subtitle: n.subtitle ? (g) => {
            var h;
            return (h = n.subtitle) == null ? void 0 : h.call(n, {
              ...g,
              item: d
            });
          } : void 0,
          prepend: n.prepend ? (g) => {
            var h;
            return (h = n.prepend) == null ? void 0 : h.call(n, {
              ...g,
              item: d
            });
          } : void 0,
          append: n.append ? (g) => {
            var h;
            return (h = n.append) == null ? void 0 : h.call(n, {
              ...g,
              item: d
            });
          } : void 0,
          title: n.title ? (g) => {
            var h;
            return (h = n.title) == null ? void 0 : h.call(n, {
              ...g,
              item: d
            });
          } : void 0
        }, c = gs.filterProps(l);
        return r ? f(gs, Ce({
          value: l == null ? void 0 : l.value
        }, c), {
          activator: (g) => {
            let {
              props: h
            } = g;
            const w = {
              ...l,
              ...h,
              value: e.returnObject ? d : l.value
            };
            return n.header ? n.header({
              props: w
            }) : f(Le, w, u);
          },
          default: () => f(wf, {
            items: r,
            returnObject: e.returnObject
          }, n)
        }) : n.item ? n.item({
          props: l
        }) : f(Le, Ce(l, {
          value: e.returnObject ? d : l.value
        }), u);
      }));
    };
  }
}), Sb = W({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: Os
  }
}, "list-items");
function Eb(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function Cb(e, t) {
  const n = ji(t, e.itemType, "item"), i = Eb(t) ? t : ji(t, e.itemTitle), o = ji(t, e.itemValue, void 0), s = ji(t, e.itemChildren), r = e.itemProps === !0 ? id(t, ["children"]) : ji(t, e.itemProps), l = {
    title: i,
    value: o,
    ...r
  };
  return {
    type: n,
    title: l.title,
    value: l.value,
    props: l,
    children: n === "item" && s ? Sf(e, s) : void 0,
    raw: t
  };
}
function Sf(e, t) {
  const n = [];
  for (const i of t)
    n.push(Cb(e, i));
  return n;
}
function kb(e) {
  return {
    items: y(() => Sf(e, e.items))
  };
}
const Nb = W({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: String,
  collapseIcon: String,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": Ot(),
  "onClick:select": Ot(),
  "onUpdate:opened": Ot(),
  ...fb({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...Ln(),
  ...pe(),
  ...tn(),
  ...bn(),
  ...Sn(),
  itemType: {
    type: String,
    default: "type"
  },
  ...Sb(),
  ...bt(),
  ...je(),
  ...Xe(),
  ...fi({
    variant: "text"
  })
}, "VList"), si = le()({
  name: "VList",
  props: Nb(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      items: i
    } = kb(e), {
      themeClasses: o
    } = lt(e), {
      backgroundColorClasses: s,
      backgroundColorStyles: r
    } = Tt(oe(e, "bgColor")), {
      borderClasses: l
    } = Bn(e), {
      densityClasses: a
    } = wn(e), {
      dimensionStyles: d
    } = _n(e), {
      elevationClasses: u
    } = En(e), {
      roundedClasses: c
    } = _t(e), {
      children: m,
      open: v,
      parents: g,
      select: h,
      getPath: w
    } = mb(e), k = y(() => e.lines ? `v-list--${e.lines}-line` : void 0), O = oe(e, "activeColor"), P = oe(e, "baseColor"), M = oe(e, "color");
    mf(), Ii({
      VListGroup: {
        activeColor: O,
        baseColor: P,
        color: M,
        expandIcon: oe(e, "expandIcon"),
        collapseIcon: oe(e, "collapseIcon")
      },
      VListItem: {
        activeClass: oe(e, "activeClass"),
        activeColor: O,
        baseColor: P,
        color: M,
        density: oe(e, "density"),
        disabled: oe(e, "disabled"),
        lines: oe(e, "lines"),
        nav: oe(e, "nav"),
        slim: oe(e, "slim"),
        variant: oe(e, "variant")
      }
    });
    const x = he(!1), N = ue();
    function $(D) {
      x.value = !0;
    }
    function C(D) {
      x.value = !1;
    }
    function V(D) {
      var B;
      !x.value && !(D.relatedTarget && ((B = N.value) != null && B.contains(D.relatedTarget))) && S();
    }
    function L(D) {
      const B = D.target;
      if (!(!N.value || ["INPUT", "TEXTAREA"].includes(B.tagName))) {
        if (D.key === "ArrowDown")
          S("next");
        else if (D.key === "ArrowUp")
          S("prev");
        else if (D.key === "Home")
          S("first");
        else if (D.key === "End")
          S("last");
        else
          return;
        D.preventDefault();
      }
    }
    function A(D) {
      x.value = !0;
    }
    function S(D) {
      if (N.value)
        return ad(N.value, D);
    }
    return ge(() => f(e.tag, {
      ref: N,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, o.value, s.value, l.value, a.value, u.value, k.value, c.value, e.class],
      style: [r.value, d.value, e.style],
      tabindex: e.disabled || x.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: $,
      onFocusout: C,
      onFocus: V,
      onKeydown: L,
      onMousedown: A
    }, {
      default: () => [f(wf, {
        items: i.value,
        returnObject: e.returnObject
      }, n)]
    })), {
      open: v,
      select: h,
      focus: S,
      children: m,
      parents: g,
      getPath: w
    };
  }
}), xb = W({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...pe(),
  ...wo({
    transition: {
      component: df
    }
  })
}, "VCounter"), Vb = le()({
  name: "VCounter",
  functional: !0,
  props: xb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = y(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return ge(() => f(cn, {
      transition: e.transition
    }, {
      default: () => [Nt(f("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [n.default ? n.default({
        counter: i.value,
        max: e.max,
        value: e.value
      }) : i.value]), [[Mn, e.active]])]
    })), {};
  }
}), Ob = W({
  text: String,
  onClick: Ot(),
  ...pe(),
  ...Xe()
}, "VLabel"), Ef = le()({
  name: "VLabel",
  props: Ob(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ge(() => {
      var i;
      return f("label", {
        class: ["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class],
        style: e.style,
        onClick: e.onClick
      }, [e.text, (i = n.default) == null ? void 0 : i.call(n)]);
    }), {};
  }
}), Tb = W({
  floating: Boolean,
  ...pe()
}, "VFieldLabel"), Mo = le()({
  name: "VFieldLabel",
  props: Tb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ge(() => f(Ef, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, n)), {};
  }
});
function Cf(e) {
  const {
    t
  } = bl();
  function n(i) {
    let {
      name: o
    } = i;
    const s = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[o], r = e[`onClick:${o}`], l = r && s ? t(`$vuetify.input.${s}`, e.label ?? "") : void 0;
    return f(We, {
      icon: e[`${o}Icon`],
      "aria-label": l,
      onClick: r
    }, null);
  }
  return {
    InputIcon: n
  };
}
const Il = W({
  focused: Boolean,
  "onUpdate:focused": Ot()
}, "focus");
function $l(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qt();
  const n = nt(e, "focused"), i = y(() => ({
    [`${t}--focused`]: n.value
  }));
  function o() {
    n.value = !0;
  }
  function s() {
    n.value = !1;
  }
  return {
    focusClasses: i,
    isFocused: n,
    focus: o,
    blur: s
  };
}
const Db = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], kf = W({
  appendInnerIcon: He,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: He,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: He,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => Db.includes(e)
  },
  "onClick:clear": Ot(),
  "onClick:appendInner": Ot(),
  "onClick:prependInner": Ot(),
  ...pe(),
  ...El(),
  ...bt(),
  ...Xe()
}, "VField"), Nf = le()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Il(),
    ...kf()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: i,
      slots: o
    } = t;
    const {
      themeClasses: s
    } = lt(e), {
      loaderClasses: r
    } = Cl(e), {
      focusClasses: l,
      isFocused: a,
      focus: d,
      blur: u
    } = $l(e), {
      InputIcon: c
    } = Cf(e), {
      roundedClasses: m
    } = _t(e), {
      rtlClasses: v
    } = en(), g = y(() => e.dirty || e.active), h = y(() => !e.singleLine && !!(e.label || o.label)), w = Fn(), k = y(() => e.id || `input-${w}`), O = y(() => `${k.value}-messages`), P = ue(), M = ue(), x = ue(), N = y(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: $,
      backgroundColorStyles: C
    } = Tt(oe(e, "bgColor")), {
      textColorClasses: V,
      textColorStyles: L
    } = jt(y(() => e.error || e.disabled ? void 0 : g.value && a.value ? e.color : e.baseColor));
    ve(g, (B) => {
      if (h.value) {
        const Z = P.value.$el, Q = M.value.$el;
        requestAnimationFrame(() => {
          const X = gl(Z), q = Q.getBoundingClientRect(), ye = q.x - X.x, be = q.y - X.y - (X.height / 2 - q.height / 2), me = q.width / 0.75, ne = Math.abs(me - X.width) > 1 ? {
            maxWidth: se(me)
          } : void 0, Ve = getComputedStyle(Z), Je = getComputedStyle(Q), Qe = parseFloat(Ve.transitionDuration) * 1e3 || 150, Y = parseFloat(Je.getPropertyValue("--v-field-label-scale")), ce = Je.getPropertyValue("color");
          Z.style.visibility = "visible", Q.style.visibility = "hidden", bi(Z, {
            transform: `translate(${ye}px, ${be}px) scale(${Y})`,
            color: ce,
            ...ne
          }, {
            duration: Qe,
            easing: us,
            direction: B ? "normal" : "reverse"
          }).finished.then(() => {
            Z.style.removeProperty("visibility"), Q.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const A = y(() => ({
      isActive: g,
      isFocused: a,
      controlRef: x,
      blur: u,
      focus: d
    }));
    function S(B) {
      B.target !== document.activeElement && B.preventDefault();
    }
    function D(B) {
      var Z;
      B.key !== "Enter" && B.key !== " " || (B.preventDefault(), B.stopPropagation(), (Z = e["onClick:clear"]) == null || Z.call(e, new MouseEvent("click")));
    }
    return ge(() => {
      var ye, be, me;
      const B = e.variant === "outlined", Z = !!(o["prepend-inner"] || e.prependInnerIcon), Q = !!(e.clearable || o.clear), X = !!(o["append-inner"] || e.appendInnerIcon || Q), q = () => o.label ? o.label({
        ...A.value,
        label: e.label,
        props: {
          for: k.value
        }
      }) : e.label;
      return f("div", Ce({
        class: ["v-field", {
          "v-field--active": g.value,
          "v-field--appended": X,
          "v-field--center-affix": e.centerAffix ?? !N.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": Z,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !q(),
          [`v-field--variant-${e.variant}`]: !0
        }, s.value, $.value, l.value, r.value, m.value, v.value, e.class],
        style: [C.value, e.style],
        onClick: S
      }, n), [f("div", {
        class: "v-field__overlay"
      }, null), f(Hd, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: o.loader
      }), Z && f("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && f(c, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (ye = o["prepend-inner"]) == null ? void 0 : ye.call(o, A.value)]), f("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && f(Mo, {
        key: "floating-label",
        ref: M,
        class: [V.value],
        floating: !0,
        for: k.value,
        style: L.value
      }, {
        default: () => [q()]
      }), f(Mo, {
        ref: P,
        for: k.value
      }, {
        default: () => [q()]
      }), (be = o.default) == null ? void 0 : be.call(o, {
        ...A.value,
        props: {
          id: k.value,
          class: "v-field__input",
          "aria-describedby": O.value
        },
        focus: d,
        blur: u
      })]), Q && f(ob, {
        key: "clear"
      }, {
        default: () => [Nt(f("div", {
          class: "v-field__clearable",
          onMousedown: (ne) => {
            ne.preventDefault(), ne.stopPropagation();
          }
        }, [f(it, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [o.clear ? o.clear({
            ...A.value,
            props: {
              onKeydown: D,
              onFocus: d,
              onBlur: u,
              onClick: e["onClick:clear"]
            }
          }) : f(c, {
            name: "clear",
            onKeydown: D,
            onFocus: d,
            onBlur: u
          }, null)]
        })]), [[Mn, e.dirty]])]
      }), X && f("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(me = o["append-inner"]) == null ? void 0 : me.call(o, A.value), e.appendInnerIcon && f(c, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), f("div", {
        class: ["v-field__outline", V.value],
        style: L.value
      }, [B && f(ke, null, [f("div", {
        class: "v-field__outline__start"
      }, null), h.value && f("div", {
        class: "v-field__outline__notch"
      }, [f(Mo, {
        ref: M,
        floating: !0,
        for: k.value
      }, {
        default: () => [q()]
      })]), f("div", {
        class: "v-field__outline__end"
      }, null)]), N.value && h.value && f(Mo, {
        ref: M,
        floating: !0,
        for: k.value
      }, {
        default: () => [q()]
      })])]);
    }), {
      controlRef: x
    };
  }
});
function Pb(e) {
  const t = Object.keys(Nf.props).filter((n) => !ml(n) && n !== "class" && n !== "style");
  return nd(e, t);
}
const Ab = W({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...pe(),
  ...wo({
    transition: {
      component: df,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Ib = le()({
  name: "VMessages",
  props: Ab(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = y(() => ni(e.messages)), {
      textColorClasses: o,
      textColorStyles: s
    } = jt(y(() => e.color));
    return ge(() => f(cn, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", o.value, e.class],
      style: [s.value, e.style],
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && i.value.map((r, l) => f("div", {
        class: "v-messages__message",
        key: `${l}-${i.value}`
      }, [n.message ? n.message({
        message: r
      }) : r]))]
    })), {};
  }
}), xf = Symbol.for("vuetify:form"), $b = W({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function Mb(e) {
  const t = nt(e, "modelValue"), n = y(() => e.disabled), i = y(() => e.readonly), o = he(!1), s = ue([]), r = ue([]);
  async function l() {
    const u = [];
    let c = !0;
    r.value = [], o.value = !0;
    for (const m of s.value) {
      const v = await m.validate();
      if (v.length > 0 && (c = !1, u.push({
        id: m.id,
        errorMessages: v
      })), !c && e.fastFail) break;
    }
    return r.value = u, o.value = !1, {
      valid: c,
      errors: r.value
    };
  }
  function a() {
    s.value.forEach((u) => u.reset());
  }
  function d() {
    s.value.forEach((u) => u.resetValidation());
  }
  return ve(s, () => {
    let u = 0, c = 0;
    const m = [];
    for (const v of s.value)
      v.isValid === !1 ? (c++, m.push({
        id: v.id,
        errorMessages: v.errorMessages
      })) : v.isValid === !0 && u++;
    r.value = m, t.value = c > 0 ? !1 : u === s.value.length ? !0 : null;
  }, {
    deep: !0,
    flush: "post"
  }), gt(xf, {
    register: (u) => {
      let {
        id: c,
        vm: m,
        validate: v,
        reset: g,
        resetValidation: h
      } = u;
      s.value.some((w) => w.id === c) && dn(`Duplicate input name "${c}"`), s.value.push({
        id: c,
        validate: v,
        reset: g,
        resetValidation: h,
        vm: Ku(m),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (u) => {
      s.value = s.value.filter((c) => c.id !== u);
    },
    update: (u, c, m) => {
      const v = s.value.find((g) => g.id === u);
      v && (v.isValid = c, v.errorMessages = m);
    },
    isDisabled: n,
    isReadonly: i,
    isValidating: o,
    isValid: t,
    items: s,
    validateOn: oe(e, "validateOn")
  }), {
    errors: r,
    isDisabled: n,
    isReadonly: i,
    isValidating: o,
    isValid: t,
    items: s,
    validate: l,
    reset: a,
    resetValidation: d
  };
}
function Fb() {
  return Re(xf, null);
}
const Lb = W({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...Il()
}, "validation");
function Bb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qt(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Fn();
  const i = nt(e, "modelValue"), o = y(() => e.validationValue === void 0 ? i.value : e.validationValue), s = Fb(), r = ue([]), l = he(!0), a = y(() => !!(ni(i.value === "" ? null : i.value).length || ni(o.value === "" ? null : o.value).length)), d = y(() => !!(e.disabled ?? (s == null ? void 0 : s.isDisabled.value))), u = y(() => !!(e.readonly ?? (s == null ? void 0 : s.isReadonly.value))), c = y(() => {
    var x;
    return (x = e.errorMessages) != null && x.length ? ni(e.errorMessages).concat(r.value).slice(0, Math.max(0, +e.maxErrors)) : r.value;
  }), m = y(() => {
    let x = (e.validateOn ?? (s == null ? void 0 : s.validateOn.value)) || "input";
    x === "lazy" && (x = "input lazy"), x === "eager" && (x = "input eager");
    const N = new Set((x == null ? void 0 : x.split(" ")) ?? []);
    return {
      input: N.has("input"),
      blur: N.has("blur") || N.has("input") || N.has("invalid-input"),
      invalidInput: N.has("invalid-input"),
      lazy: N.has("lazy"),
      eager: N.has("eager")
    };
  }), v = y(() => {
    var x;
    return e.error || (x = e.errorMessages) != null && x.length ? !1 : e.rules.length ? l.value ? r.value.length || m.value.lazy ? null : !0 : !r.value.length : !0;
  }), g = he(!1), h = y(() => ({
    [`${t}--error`]: v.value === !1,
    [`${t}--dirty`]: a.value,
    [`${t}--disabled`]: d.value,
    [`${t}--readonly`]: u.value
  })), w = Ue("validation"), k = y(() => e.name ?? Xt(n));
  tl(() => {
    s == null || s.register({
      id: k.value,
      vm: w,
      validate: M,
      reset: O,
      resetValidation: P
    });
  }), yt(() => {
    s == null || s.unregister(k.value);
  }), In(async () => {
    m.value.lazy || await M(!m.value.eager), s == null || s.update(k.value, v.value, c.value);
  }), ui(() => m.value.input || m.value.invalidInput && v.value === !1, () => {
    ve(o, () => {
      if (o.value != null)
        M();
      else if (e.focused) {
        const x = ve(() => e.focused, (N) => {
          N || M(), x();
        });
      }
    });
  }), ui(() => m.value.blur, () => {
    ve(() => e.focused, (x) => {
      x || M();
    });
  }), ve([v, c], () => {
    s == null || s.update(k.value, v.value, c.value);
  });
  async function O() {
    i.value = null, await At(), await P();
  }
  async function P() {
    l.value = !0, m.value.lazy ? r.value = [] : await M(!m.value.eager);
  }
  async function M() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const N = [];
    g.value = !0;
    for (const $ of e.rules) {
      if (N.length >= +(e.maxErrors ?? 1))
        break;
      const V = await (typeof $ == "function" ? $ : () => $)(o.value);
      if (V !== !0) {
        if (V !== !1 && typeof V != "string") {
          console.warn(`${V} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        N.push(V || "");
      }
    }
    return r.value = N, g.value = !1, l.value = x, r.value;
  }
  return {
    errorMessages: c,
    isDirty: a,
    isDisabled: d,
    isReadonly: u,
    isPristine: l,
    isValid: v,
    isValidating: g,
    reset: O,
    resetValidation: P,
    validate: M,
    validationClasses: h
  };
}
const Ml = W({
  id: String,
  appendIcon: He,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: He,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": Ot(),
  "onClick:append": Ot(),
  ...pe(),
  ...tn(),
  ...uh(bn(), ["maxWidth", "minWidth", "width"]),
  ...Xe(),
  ...Lb()
}, "VInput"), hs = le()({
  name: "VInput",
  props: {
    ...Ml()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: i,
      emit: o
    } = t;
    const {
      densityClasses: s
    } = wn(e), {
      dimensionStyles: r
    } = _n(e), {
      themeClasses: l
    } = lt(e), {
      rtlClasses: a
    } = en(), {
      InputIcon: d
    } = Cf(e), u = Fn(), c = y(() => e.id || `input-${u}`), m = y(() => `${c.value}-messages`), {
      errorMessages: v,
      isDirty: g,
      isDisabled: h,
      isReadonly: w,
      isPristine: k,
      isValid: O,
      isValidating: P,
      reset: M,
      resetValidation: x,
      validate: N,
      validationClasses: $
    } = Bb(e, "v-input", c), C = y(() => ({
      id: c,
      messagesId: m,
      isDirty: g,
      isDisabled: h,
      isReadonly: w,
      isPristine: k,
      isValid: O,
      isValidating: P,
      reset: M,
      resetValidation: x,
      validate: N
    })), V = y(() => {
      var L;
      return (L = e.errorMessages) != null && L.length || !k.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return ge(() => {
      var B, Z, Q, X;
      const L = !!(i.prepend || e.prependIcon), A = !!(i.append || e.appendIcon), S = V.value.length > 0, D = !e.hideDetails || e.hideDetails === "auto" && (S || !!i.details);
      return f("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, s.value, l.value, a.value, $.value, e.class],
        style: [r.value, e.style]
      }, [L && f("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(B = i.prepend) == null ? void 0 : B.call(i, C.value), e.prependIcon && f(d, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), i.default && f("div", {
        class: "v-input__control"
      }, [(Z = i.default) == null ? void 0 : Z.call(i, C.value)]), A && f("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && f(d, {
        key: "append-icon",
        name: "append"
      }, null), (Q = i.append) == null ? void 0 : Q.call(i, C.value)]), D && f("div", {
        class: "v-input__details"
      }, [f(Ib, {
        id: m.value,
        active: S,
        messages: V.value
      }, {
        message: i.message
      }), (X = i.details) == null ? void 0 : X.call(i, C.value)])]);
    }), {
      reset: M,
      resetValidation: x,
      validate: N,
      isValid: O,
      errorMessages: v
    };
  }
}), ir = Symbol("Forwarded refs");
function or(e, t) {
  let n = e;
  for (; n; ) {
    const i = Reflect.getOwnPropertyDescriptor(n, t);
    if (i) return i;
    n = Object.getPrototypeOf(n);
  }
}
function Fl(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  return e[ir] = n, new Proxy(e, {
    get(o, s) {
      if (Reflect.has(o, s))
        return Reflect.get(o, s);
      if (!(typeof s == "symbol" || s.startsWith("$") || s.startsWith("__"))) {
        for (const r of n)
          if (r.value && Reflect.has(r.value, s)) {
            const l = Reflect.get(r.value, s);
            return typeof l == "function" ? l.bind(r.value) : l;
          }
      }
    },
    has(o, s) {
      if (Reflect.has(o, s))
        return !0;
      if (typeof s == "symbol" || s.startsWith("$") || s.startsWith("__")) return !1;
      for (const r of n)
        if (r.value && Reflect.has(r.value, s))
          return !0;
      return !1;
    },
    set(o, s, r) {
      if (Reflect.has(o, s))
        return Reflect.set(o, s, r);
      if (typeof s == "symbol" || s.startsWith("$") || s.startsWith("__")) return !1;
      for (const l of n)
        if (l.value && Reflect.has(l.value, s))
          return Reflect.set(l.value, s, r);
      return !1;
    },
    getOwnPropertyDescriptor(o, s) {
      var l;
      const r = Reflect.getOwnPropertyDescriptor(o, s);
      if (r) return r;
      if (!(typeof s == "symbol" || s.startsWith("$") || s.startsWith("__"))) {
        for (const a of n) {
          if (!a.value) continue;
          const d = or(a.value, s) ?? ("_" in a.value ? or((l = a.value._) == null ? void 0 : l.setupState, s) : void 0);
          if (d) return d;
        }
        for (const a of n) {
          const d = a.value && a.value[ir];
          if (!d) continue;
          const u = d.slice();
          for (; u.length; ) {
            const c = u.shift(), m = or(c.value, s);
            if (m) return m;
            const v = c.value && c.value[ir];
            v && u.push(...v);
          }
        }
      }
    }
  });
}
const Rb = ["color", "file", "time", "date", "datetime-local", "week", "month"], Hb = W({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...Ml(),
  ...kf()
}, "VTextField"), qt = le()({
  name: "VTextField",
  directives: {
    Intersect: Id
  },
  inheritAttrs: !1,
  props: Hb(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: i,
      slots: o
    } = t;
    const s = nt(e, "modelValue"), {
      isFocused: r,
      focus: l,
      blur: a
    } = $l(e), d = y(() => typeof e.counterValue == "function" ? e.counterValue(s.value) : typeof e.counterValue == "number" ? e.counterValue : (s.value ?? "").toString().length), u = y(() => {
      if (n.maxlength) return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), c = y(() => ["plain", "underlined"].includes(e.variant));
    function m(N, $) {
      var C, V;
      !e.autofocus || !N || (V = (C = $[0].target) == null ? void 0 : C.focus) == null || V.call(C);
    }
    const v = ue(), g = ue(), h = ue(), w = y(() => Rb.includes(e.type) || e.persistentPlaceholder || r.value || e.active);
    function k() {
      var N;
      h.value !== document.activeElement && ((N = h.value) == null || N.focus()), r.value || l();
    }
    function O(N) {
      i("mousedown:control", N), N.target !== h.value && (k(), N.preventDefault());
    }
    function P(N) {
      k(), i("click:control", N);
    }
    function M(N) {
      N.stopPropagation(), k(), At(() => {
        s.value = null, mh(e["onClick:clear"], N);
      });
    }
    function x(N) {
      var C;
      const $ = N.target;
      if (s.value = $.value, (C = e.modelModifiers) != null && C.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const V = [$.selectionStart, $.selectionEnd];
        At(() => {
          $.selectionStart = V[0], $.selectionEnd = V[1];
        });
      }
    }
    return ge(() => {
      const N = !!(o.counter || e.counter !== !1 && e.counter != null), $ = !!(N || o.details), [C, V] = dh(n), {
        modelValue: L,
        ...A
      } = hs.filterProps(e), S = Pb(e);
      return f(hs, Ce({
        ref: v,
        modelValue: s.value,
        "onUpdate:modelValue": (D) => s.value = D,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": c.value
        }, e.class],
        style: e.style
      }, C, A, {
        centerAffix: !c.value,
        focused: r.value
      }), {
        ...o,
        default: (D) => {
          let {
            id: B,
            isDisabled: Z,
            isDirty: Q,
            isReadonly: X,
            isValid: q
          } = D;
          return f(Nf, Ce({
            ref: g,
            onMousedown: O,
            onClick: P,
            "onClick:clear": M,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, S, {
            id: B.value,
            active: w.value || Q.value,
            dirty: Q.value || e.dirty,
            disabled: Z.value,
            focused: r.value,
            error: q.value === !1
          }), {
            ...o,
            default: (ye) => {
              let {
                props: {
                  class: be,
                  ...me
                }
              } = ye;
              const ne = Nt(f("input", Ce({
                ref: h,
                value: s.value,
                onInput: x,
                autofocus: e.autofocus,
                readonly: X.value,
                disabled: Z.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: k,
                onBlur: a
              }, me, V), null), [[Ai("intersect"), {
                handler: m
              }, null, {
                once: !0
              }]]);
              return f(ke, null, [e.prefix && f("span", {
                class: "v-text-field__prefix"
              }, [f("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), o.default ? f("div", {
                class: be,
                "data-no-activator": ""
              }, [o.default(), ne]) : Ht(ne, {
                class: be
              }), e.suffix && f("span", {
                class: "v-text-field__suffix"
              }, [f("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: $ ? (D) => {
          var B;
          return f(ke, null, [(B = o.details) == null ? void 0 : B.call(o, D), N && f(ke, null, [f("span", null, null), f(Vb, {
            active: e.persistentCounter || r.value,
            value: d.value,
            max: u.value,
            disabled: e.disabled
          }, o.counter)])]);
        } : void 0
      });
    }), Fl({}, v, g, h);
  }
}), jb = {
  name: "BookComments",
  computed: {},
  mounted: function() {
  },
  methods: {},
  props: ["login", "comments"],
  data: () => ({
    content: ""
  })
};
function zb(e, t, n, i, o, s) {
  return _e(), Ne(Mt, null, {
    default: E(() => [
      f(an, null, {
        default: E(() => [
          f(ze, {
            offset: "2",
            cols: "8",
            class: "text-center"
          }, {
            default: E(() => t[4] || (t[4] = [
              Ee("h4", { class: "mt-3" }, "评论列表", -1)
            ])),
            _: 1
          }),
          f(ze, { cols: "2" }, {
            default: E(() => [
              f(fe, {
                variant: "plain",
                icon: "mdi-close",
                onClick: t[0] || (t[0] = (r) => e.$emit("close"))
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      f(fn),
      n.comments.length == 0 ? (_e(), Ne(si, {
        key: 0,
        density: "compact"
      }, {
        default: E(() => [
          f(Le, { class: "my-4" }, {
            default: E(() => [
              f(Al, { class: "text-center" }, {
                default: E(() => t[5] || (t[5] = [
                  ie("尚未有人发表评论")
                ])),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : (_e(), Ne(si, {
        key: 1,
        id: "book-comments",
        density: "compact"
      }, {
        default: E(() => [
          (_e(!0), Yn(ke, null, Ci(n.comments, (r) => (_e(), Ne(Le, {
            class: "pr-0 align-self-start mb-4",
            "prepend-avatar": r.avatar,
            "append-icon": "mdi-thumb-up",
            subtitle: r.nickName
          }, {
            prepend: E(() => [
              f(Di, {
                variant: "outlined",
                size: "large",
                color: "grey",
                class: "text-center",
                icon: r.avatar
              }, null, 8, ["icon"])
            ]),
            append: E(() => [
              f(fe, {
                class: "px-0",
                size: "small",
                variant: "plain",
                stacked: "",
                "prepend-icon": "mdi-thumb-up"
              }, {
                default: E(() => [
                  ie(ft(r.likeCount), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            default: E(() => [
              ie(ft(r.content) + " ", 1),
              f(_f, null, {
                default: E(() => [
                  ie(ft(r.level) + "楼 * " + ft(r.createTime) + " * " + ft(r.geo), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["prepend-avatar", "subtitle"]))), 256))
        ]),
        _: 1
      })),
      f(xi, { class: "my-2 py-0 px-2" }, {
        default: E(() => [
          n.login ? (_e(), Ne(an, { key: 1 }, {
            default: E(() => [
              f(ze, { cols: "9" }, {
                default: E(() => [
                  f(qt, {
                    modelValue: e.content,
                    "onUpdate:modelValue": t[2] || (t[2] = (r) => e.content = r),
                    density: "compact",
                    "single-line": "",
                    "hide-details": "",
                    placeholder: "爱书之人，维持良好的社区氛围"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              f(ze, { cols: "3" }, {
                default: E(() => [
                  f(fe, {
                    onClick: t[3] || (t[3] = (r) => e.$emit("add_review", this.content))
                  }, {
                    default: E(() => t[7] || (t[7] = [
                      ie("发表")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : (_e(), Ne(fe, {
            key: 0,
            onClick: t[1] || (t[1] = (r) => n.login = !n.login),
            variant: "text",
            style: { width: "100%" }
          }, {
            default: E(() => t[6] || (t[6] = [
              ie("点击登录，发表评论")
            ])),
            _: 1
          }))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const Vf = /* @__PURE__ */ di(jb, [["render", zb]]), Ub = Ts("v-alert-title"), Wb = ["success", "info", "warning", "error"], Kb = W({
  border: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: He,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (e) => Wb.includes(e)
  },
  ...pe(),
  ...tn(),
  ...bn(),
  ...Sn(),
  ...Co(),
  ...kl(),
  ...bt(),
  ...je(),
  ...Xe(),
  ...fi({
    variant: "flat"
  })
}, "VAlert"), Of = le()({
  name: "VAlert",
  props: Kb(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: i
    } = t;
    const o = nt(e, "modelValue"), s = y(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), r = y(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      themeClasses: l
    } = lt(e), {
      colorClasses: a,
      colorStyles: d,
      variantClasses: u
    } = Eo(r), {
      densityClasses: c
    } = wn(e), {
      dimensionStyles: m
    } = _n(e), {
      elevationClasses: v
    } = En(e), {
      locationStyles: g
    } = ko(e), {
      positionClasses: h
    } = Nl(e), {
      roundedClasses: w
    } = _t(e), {
      textColorClasses: k,
      textColorStyles: O
    } = jt(oe(e, "borderColor")), {
      t: P
    } = bl(), M = y(() => ({
      "aria-label": P(e.closeLabel),
      onClick(x) {
        o.value = !1, n("click:close", x);
      }
    }));
    return () => {
      const x = !!(i.prepend || s.value), N = !!(i.title || e.title), $ = !!(i.close || e.closable);
      return o.value && f(e.tag, {
        class: ["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, l.value, a.value, c.value, v.value, h.value, w.value, u.value, e.class],
        style: [d.value, m.value, g.value, e.style],
        role: "alert"
      }, {
        default: () => {
          var C, V;
          return [So(!1, "v-alert"), e.border && f("div", {
            key: "border",
            class: ["v-alert__border", k.value],
            style: O.value
          }, null), x && f("div", {
            key: "prepend",
            class: "v-alert__prepend"
          }, [i.prepend ? f(it, {
            key: "prepend-defaults",
            disabled: !s.value,
            defaults: {
              VIcon: {
                density: e.density,
                icon: s.value,
                size: e.prominent ? 44 : 28
              }
            }
          }, i.prepend) : f(We, {
            key: "prepend-icon",
            density: e.density,
            icon: s.value,
            size: e.prominent ? 44 : 28
          }, null)]), f("div", {
            class: "v-alert__content"
          }, [N && f(Ub, {
            key: "title"
          }, {
            default: () => {
              var L;
              return [((L = i.title) == null ? void 0 : L.call(i)) ?? e.title];
            }
          }), ((C = i.text) == null ? void 0 : C.call(i)) ?? e.text, (V = i.default) == null ? void 0 : V.call(i)]), i.append && f("div", {
            key: "append",
            class: "v-alert__append"
          }, [i.append()]), $ && f("div", {
            key: "close",
            class: "v-alert__close"
          }, [i.close ? f(it, {
            key: "close-defaults",
            defaults: {
              VBtn: {
                icon: e.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var L;
              return [(L = i.close) == null ? void 0 : L.call(i, {
                props: M.value
              })];
            }
          }) : f(fe, Ce({
            key: "close-btn",
            icon: e.closeIcon,
            size: "x-small",
            variant: "text"
          }, M.value), null)])];
        }
      });
    };
  }
});
function sr(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function Gb(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function pu(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: i
    } = e, o = i === "left" ? 0 : i === "center" ? t.width / 2 : i === "right" ? t.width : i, s = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return sr({
      x: o,
      y: s
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: i
    } = e, o = n === "left" ? 0 : n === "right" ? t.width : n, s = i === "top" ? 0 : i === "center" ? t.height / 2 : i === "bottom" ? t.height : i;
    return sr({
      x: o,
      y: s
    }, t);
  }
  return sr({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const Tf = {
  static: Zb,
  // specific viewport position, usually centered
  connected: Jb
  // connected to a certain element
}, Yb = W({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Tf
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function qb(e, t) {
  const n = ue({}), i = ue();
  Be && ui(() => !!(t.isActive.value && e.locationStrategy), (s) => {
    var r, l;
    ve(() => e.locationStrategy, s), zt(() => {
      window.removeEventListener("resize", o), i.value = void 0;
    }), window.addEventListener("resize", o, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? i.value = (r = e.locationStrategy(t, e, n)) == null ? void 0 : r.updateLocation : i.value = (l = Tf[e.locationStrategy](t, e, n)) == null ? void 0 : l.updateLocation;
  });
  function o(s) {
    var r;
    (r = i.value) == null || r.call(i, s);
  }
  return {
    contentStyles: n,
    updateLocation: i
  };
}
function Zb() {
}
function Xb(e, t) {
  const n = gl(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function Jb(e, t, n) {
  (Array.isArray(e.target.value) || Zh(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: o,
    preferredOrigin: s
  } = vl(() => {
    const g = Or(t.location, e.isRtl.value), h = t.origin === "overlap" ? g : t.origin === "auto" ? Qs(g) : Or(t.origin, e.isRtl.value);
    return g.side === h.side && g.align === er(h).align ? {
      preferredAnchor: Fa(g),
      preferredOrigin: Fa(h)
    } : {
      preferredAnchor: g,
      preferredOrigin: h
    };
  }), [r, l, a, d] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((g) => y(() => {
    const h = parseFloat(t[g]);
    return isNaN(h) ? 1 / 0 : h;
  })), u = y(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const g = t.offset.split(" ").map(parseFloat);
      return g.length < 2 && g.push(0), g;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let c = !1;
  const m = new ResizeObserver(() => {
    c && v();
  });
  ve([e.target, e.contentEl], (g, h) => {
    let [w, k] = g, [O, P] = h;
    O && !Array.isArray(O) && m.unobserve(O), w && !Array.isArray(w) && m.observe(w), P && m.unobserve(P), k && m.observe(k);
  }, {
    immediate: !0
  }), zt(() => {
    m.disconnect();
  });
  function v() {
    if (c = !1, requestAnimationFrame(() => c = !0), !e.target.value || !e.contentEl.value) return;
    const g = cd(e.target.value), h = Xb(e.contentEl.value, e.isRtl.value), w = cs(e.contentEl.value), k = 12;
    w.length || (w.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const O = w.reduce((A, S) => {
      const D = S.getBoundingClientRect(), B = new oi({
        x: S === document.documentElement ? 0 : D.x,
        y: S === document.documentElement ? 0 : D.y,
        width: S.clientWidth,
        height: S.clientHeight
      });
      return A ? new oi({
        x: Math.max(A.left, B.left),
        y: Math.max(A.top, B.top),
        width: Math.min(A.right, B.right) - Math.max(A.left, B.left),
        height: Math.min(A.bottom, B.bottom) - Math.max(A.top, B.top)
      }) : B;
    }, void 0);
    O.x += k, O.y += k, O.width -= k * 2, O.height -= k * 2;
    let P = {
      anchor: o.value,
      origin: s.value
    };
    function M(A) {
      const S = new oi(h), D = pu(A.anchor, g), B = pu(A.origin, S);
      let {
        x: Z,
        y: Q
      } = Gb(D, B);
      switch (A.anchor.side) {
        case "top":
          Q -= u.value[0];
          break;
        case "bottom":
          Q += u.value[0];
          break;
        case "left":
          Z -= u.value[0];
          break;
        case "right":
          Z += u.value[0];
          break;
      }
      switch (A.anchor.align) {
        case "top":
          Q -= u.value[1];
          break;
        case "bottom":
          Q += u.value[1];
          break;
        case "left":
          Z -= u.value[1];
          break;
        case "right":
          Z += u.value[1];
          break;
      }
      return S.x += Z, S.y += Q, S.width = Math.min(S.width, a.value), S.height = Math.min(S.height, d.value), {
        overflows: Ba(S, O),
        x: Z,
        y: Q
      };
    }
    let x = 0, N = 0;
    const $ = {
      x: 0,
      y: 0
    }, C = {
      x: !1,
      y: !1
    };
    let V = -1;
    for (; ; ) {
      if (V++ > 10) {
        ls("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: A,
        y: S,
        overflows: D
      } = M(P);
      x += A, N += S, h.x += A, h.y += S;
      {
        const B = La(P.anchor), Z = D.x.before || D.x.after, Q = D.y.before || D.y.after;
        let X = !1;
        if (["x", "y"].forEach((q) => {
          if (q === "x" && Z && !C.x || q === "y" && Q && !C.y) {
            const ye = {
              anchor: {
                ...P.anchor
              },
              origin: {
                ...P.origin
              }
            }, be = q === "x" ? B === "y" ? er : Qs : B === "y" ? Qs : er;
            ye.anchor = be(ye.anchor), ye.origin = be(ye.origin);
            const {
              overflows: me
            } = M(ye);
            (me[q].before <= D[q].before && me[q].after <= D[q].after || me[q].before + me[q].after < (D[q].before + D[q].after) / 2) && (P = ye, X = C[q] = !0);
          }
        }), X) continue;
      }
      D.x.before && (x += D.x.before, h.x += D.x.before), D.x.after && (x -= D.x.after, h.x -= D.x.after), D.y.before && (N += D.y.before, h.y += D.y.before), D.y.after && (N -= D.y.after, h.y -= D.y.after);
      {
        const B = Ba(h, O);
        $.x = O.width - B.x.before - B.x.after, $.y = O.height - B.y.before - B.y.after, x += B.x.before, h.x += B.x.before, N += B.y.before, h.y += B.y.before;
      }
      break;
    }
    const L = La(P.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${P.anchor.side} ${P.anchor.align}`,
      transformOrigin: `${P.origin.side} ${P.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: se(rr(N)),
      left: e.isRtl.value ? void 0 : se(rr(x)),
      right: e.isRtl.value ? se(rr(-x)) : void 0,
      minWidth: se(L === "y" ? Math.min(r.value, g.width) : r.value),
      maxWidth: se(yu(Pn($.x, r.value === 1 / 0 ? 0 : r.value, a.value))),
      maxHeight: se(yu(Pn($.y, l.value === 1 / 0 ? 0 : l.value, d.value)))
    }), {
      available: $,
      contentBox: h
    };
  }
  return ve(() => [o.value, s.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => v()), At(() => {
    const g = v();
    if (!g) return;
    const {
      available: h,
      contentBox: w
    } = g;
    w.height > h.y && requestAnimationFrame(() => {
      v(), requestAnimationFrame(() => {
        v();
      });
    });
  }), {
    updateLocation: v
  };
}
function rr(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function yu(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Fr = !0;
const ps = [];
function Qb(e) {
  !Fr || ps.length ? (ps.push(e), Lr()) : (Fr = !1, e(), Lr());
}
let bu = -1;
function Lr() {
  cancelAnimationFrame(bu), bu = requestAnimationFrame(() => {
    const e = ps.shift();
    e && e(), ps.length ? Lr() : Fr = !0;
  });
}
const Ko = {
  none: null,
  close: n_,
  block: i_,
  reposition: o_
}, e_ = W({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Ko
  }
}, "VOverlay-scroll-strategies");
function t_(e, t) {
  if (!Be) return;
  let n;
  yn(async () => {
    n == null || n.stop(), t.isActive.value && e.scrollStrategy && (n = Wr(), await new Promise((i) => setTimeout(i)), n.active && n.run(() => {
      var i;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (i = Ko[e.scrollStrategy]) == null || i.call(Ko, t, e, n);
    }));
  }), zt(() => {
    n == null || n.stop();
  });
}
function n_(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  Df(e.targetEl.value ?? e.contentEl.value, t);
}
function i_(e, t) {
  var r;
  const n = (r = e.root.value) == null ? void 0 : r.offsetParent, i = [.../* @__PURE__ */ new Set([...cs(e.targetEl.value, t.contained ? n : void 0), ...cs(e.contentEl.value, t.contained ? n : void 0)])].filter((l) => !l.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, s = ((l) => yl(l) && l)(n || document.documentElement);
  s && e.root.value.classList.add("v-overlay--scroll-blocked"), i.forEach((l, a) => {
    l.style.setProperty("--v-body-scroll-x", se(-l.scrollLeft)), l.style.setProperty("--v-body-scroll-y", se(-l.scrollTop)), l !== document.documentElement && l.style.setProperty("--v-scrollbar-offset", se(o)), l.classList.add("v-overlay-scroll-blocked");
  }), zt(() => {
    i.forEach((l, a) => {
      const d = parseFloat(l.style.getPropertyValue("--v-body-scroll-x")), u = parseFloat(l.style.getPropertyValue("--v-body-scroll-y")), c = l.style.scrollBehavior;
      l.style.scrollBehavior = "auto", l.style.removeProperty("--v-body-scroll-x"), l.style.removeProperty("--v-body-scroll-y"), l.style.removeProperty("--v-scrollbar-offset"), l.classList.remove("v-overlay-scroll-blocked"), l.scrollLeft = -d, l.scrollTop = -u, l.style.scrollBehavior = c;
    }), s && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function o_(e, t, n) {
  let i = !1, o = -1, s = -1;
  function r(l) {
    Qb(() => {
      var u, c;
      const a = performance.now();
      (c = (u = e.updateLocation).value) == null || c.call(u, l), i = (performance.now() - a) / (1e3 / 60) > 2;
    });
  }
  s = (typeof requestIdleCallback > "u" ? (l) => l() : requestIdleCallback)(() => {
    n.run(() => {
      Df(e.targetEl.value ?? e.contentEl.value, (l) => {
        i ? (cancelAnimationFrame(o), o = requestAnimationFrame(() => {
          o = requestAnimationFrame(() => {
            r(l);
          });
        })) : r(l);
      });
    });
  }), zt(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(s), cancelAnimationFrame(o);
  });
}
function Df(e, t) {
  const n = [document, ...cs(e)];
  n.forEach((i) => {
    i.addEventListener("scroll", t, {
      passive: !0
    });
  }), zt(() => {
    n.forEach((i) => {
      i.removeEventListener("scroll", t);
    });
  });
}
const s_ = Symbol.for("vuetify:v-menu"), r_ = W({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function l_(e, t) {
  let n = () => {
  };
  function i(r) {
    n == null || n();
    const l = Number(r ? e.openDelay : e.closeDelay);
    return new Promise((a) => {
      n = hh(l, () => {
        t == null || t(r), a(r);
      });
    });
  }
  function o() {
    return i(!0);
  }
  function s() {
    return i(!1);
  }
  return {
    clearDelay: n,
    runOpenDelay: o,
    runCloseDelay: s
  };
}
const a_ = W({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...r_()
}, "VOverlay-activator");
function u_(e, t) {
  let {
    isActive: n,
    isTop: i,
    contentEl: o
  } = t;
  const s = Ue("useActivator"), r = ue();
  let l = !1, a = !1, d = !0;
  const u = y(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), c = y(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !u.value), {
    runOpenDelay: m,
    runCloseDelay: v
  } = l_(e, (C) => {
    C === (e.openOnHover && l || u.value && a) && !(e.openOnHover && n.value && !i.value) && (n.value !== C && (d = !0), n.value = C);
  }), g = ue(), h = {
    onClick: (C) => {
      C.stopPropagation(), r.value = C.currentTarget || C.target, n.value || (g.value = [C.clientX, C.clientY]), n.value = !n.value;
    },
    onMouseenter: (C) => {
      var V;
      (V = C.sourceCapabilities) != null && V.firesTouchEvents || (l = !0, r.value = C.currentTarget || C.target, m());
    },
    onMouseleave: (C) => {
      l = !1, v();
    },
    onFocus: (C) => {
      gh(C.target, ":focus-visible") !== !1 && (a = !0, C.stopPropagation(), r.value = C.currentTarget || C.target, m());
    },
    onBlur: (C) => {
      a = !1, C.stopPropagation(), v();
    }
  }, w = y(() => {
    const C = {};
    return c.value && (C.onClick = h.onClick), e.openOnHover && (C.onMouseenter = h.onMouseenter, C.onMouseleave = h.onMouseleave), u.value && (C.onFocus = h.onFocus, C.onBlur = h.onBlur), C;
  }), k = y(() => {
    const C = {};
    if (e.openOnHover && (C.onMouseenter = () => {
      l = !0, m();
    }, C.onMouseleave = () => {
      l = !1, v();
    }), u.value && (C.onFocusin = () => {
      a = !0, m();
    }, C.onFocusout = () => {
      a = !1, v();
    }), e.closeOnContentClick) {
      const V = Re(s_, null);
      C.onClick = () => {
        n.value = !1, V == null || V.closeParents();
      };
    }
    return C;
  }), O = y(() => {
    const C = {};
    return e.openOnHover && (C.onMouseenter = () => {
      d && (l = !0, d = !1, m());
    }, C.onMouseleave = () => {
      l = !1, v();
    }), C;
  });
  ve(i, (C) => {
    var V;
    C && (e.openOnHover && !l && (!u.value || !a) || u.value && !a && (!e.openOnHover || !l)) && !((V = o.value) != null && V.contains(document.activeElement)) && (n.value = !1);
  }), ve(n, (C) => {
    C || setTimeout(() => {
      g.value = void 0;
    });
  }, {
    flush: "post"
  });
  const P = Vr();
  yn(() => {
    P.value && At(() => {
      r.value = P.el;
    });
  });
  const M = Vr(), x = y(() => e.target === "cursor" && g.value ? g.value : M.value ? M.el : Pf(e.target, s) || r.value), N = y(() => Array.isArray(x.value) ? void 0 : x.value);
  let $;
  return ve(() => !!e.activator, (C) => {
    C && Be ? ($ = Wr(), $.run(() => {
      c_(e, s, {
        activatorEl: r,
        activatorEvents: w
      });
    })) : $ && $.stop();
  }, {
    flush: "post",
    immediate: !0
  }), zt(() => {
    $ == null || $.stop();
  }), {
    activatorEl: r,
    activatorRef: P,
    target: x,
    targetEl: N,
    targetRef: M,
    activatorEvents: w,
    contentEvents: k,
    scrimEvents: O
  };
}
function c_(e, t, n) {
  let {
    activatorEl: i,
    activatorEvents: o
  } = n;
  ve(() => e.activator, (a, d) => {
    if (d && a !== d) {
      const u = l(d);
      u && r(u);
    }
    a && At(() => s());
  }, {
    immediate: !0
  }), ve(() => e.activatorProps, () => {
    s();
  }), zt(() => {
    r();
  });
  function s() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l(), d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    a && yh(a, Ce(o.value, d));
  }
  function r() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l(), d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    a && bh(a, Ce(o.value, d));
  }
  function l() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const d = Pf(a, t);
    return i.value = (d == null ? void 0 : d.nodeType) === Node.ELEMENT_NODE ? d : void 0, i.value;
  }
}
function Pf(e, t) {
  var i, o;
  if (!e) return;
  let n;
  if (e === "parent") {
    let s = (o = (i = t == null ? void 0 : t.proxy) == null ? void 0 : i.$el) == null ? void 0 : o.parentNode;
    for (; s != null && s.hasAttribute("data-no-activator"); )
      s = s.parentNode;
    n = s;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
function d_() {
  if (!Be) return he(!1);
  const {
    ssr: e
  } = Kp();
  if (e) {
    const t = he(!1);
    return In(() => {
      t.value = !0;
    }), t;
  } else
    return he(!0);
}
const f_ = W({
  eager: Boolean
}, "lazy");
function m_(e, t) {
  const n = he(!1), i = y(() => n.value || e.eager || t.value);
  ve(t, () => n.value = !0);
  function o() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: i,
    onAfterLeave: o
  };
}
function Af() {
  const t = Ue("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const _u = Symbol.for("vuetify:stack"), zi = et([]);
function v_(e, t, n) {
  const i = Ue("useStack"), o = !n, s = Re(_u, void 0), r = et({
    activeChildren: /* @__PURE__ */ new Set()
  });
  gt(_u, r);
  const l = he(+t.value);
  ui(e, () => {
    var c;
    const u = (c = zi.at(-1)) == null ? void 0 : c[1];
    l.value = u ? u + 10 : +t.value, o && zi.push([i.uid, l.value]), s == null || s.activeChildren.add(i.uid), zt(() => {
      if (o) {
        const m = J(zi).findIndex((v) => v[0] === i.uid);
        zi.splice(m, 1);
      }
      s == null || s.activeChildren.delete(i.uid);
    });
  });
  const a = he(!0);
  o && yn(() => {
    var c;
    const u = ((c = zi.at(-1)) == null ? void 0 : c[0]) === i.uid;
    setTimeout(() => a.value = u);
  });
  const d = y(() => !r.activeChildren.size);
  return {
    globalTop: ho(a),
    localTop: d,
    stackStyles: y(() => ({
      zIndex: l.value
    }))
  };
}
function g_(e) {
  return {
    teleportTarget: y(() => {
      const n = e();
      if (n === !0 || !Be) return;
      const i = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (i == null) {
        pt(`Unable to locate target ${n}`);
        return;
      }
      let o = [...i.children].find((s) => s.matches(".v-overlay-container"));
      return o || (o = document.createElement("div"), o.className = "v-overlay-container", i.appendChild(o)), o;
    })
  };
}
function h_() {
  return !0;
}
function If(e, t, n) {
  if (!e || $f(e, n) === !1) return !1;
  const i = pd(t);
  if (typeof ShadowRoot < "u" && i instanceof ShadowRoot && i.host === e.target) return !1;
  const o = (typeof n.value == "object" && n.value.include || (() => []))();
  return o.push(t), !o.some((s) => s == null ? void 0 : s.contains(e.target));
}
function $f(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || h_)(e);
}
function p_(e, t, n) {
  const i = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && If(e, t, n) && setTimeout(() => {
    $f(e, n) && i && i(e);
  }, 0);
}
function wu(e, t) {
  const n = pd(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const y_ = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (o) => p_(o, e, t), i = (o) => {
      e._clickOutside.lastMousedownWasOutside = If(o, e, t);
    };
    wu(e, (o) => {
      o.addEventListener("click", n, !0), o.addEventListener("mousedown", i, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: i
    };
  },
  beforeUnmount(e, t) {
    e._clickOutside && (wu(e, (n) => {
      var s;
      if (!n || !((s = e._clickOutside) != null && s[t.instance.$.uid])) return;
      const {
        onClick: i,
        onMousedown: o
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", i, !0), n.removeEventListener("mousedown", o, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function b_(e) {
  const {
    modelValue: t,
    color: n,
    ...i
  } = e;
  return f(ai, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && f("div", Ce({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, i), null)]
  });
}
const Mf = W({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...a_(),
  ...pe(),
  ...bn(),
  ...f_(),
  ...Yb(),
  ...e_(),
  ...Xe(),
  ...wo()
}, "VOverlay"), Br = le()({
  name: "VOverlay",
  directives: {
    ClickOutside: y_
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...Mf()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: i,
      emit: o
    } = t;
    const s = Ue("VOverlay"), r = ue(), l = ue(), a = ue(), d = nt(e, "modelValue"), u = y({
      get: () => d.value,
      set: (Y) => {
        Y && e.disabled || (d.value = Y);
      }
    }), {
      themeClasses: c
    } = lt(e), {
      rtlClasses: m,
      isRtl: v
    } = en(), {
      hasContent: g,
      onAfterLeave: h
    } = m_(e, u), w = Tt(y(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: k,
      localTop: O,
      stackStyles: P
    } = v_(u, oe(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: M,
      activatorRef: x,
      target: N,
      targetEl: $,
      targetRef: C,
      activatorEvents: V,
      contentEvents: L,
      scrimEvents: A
    } = u_(e, {
      isActive: u,
      isTop: O,
      contentEl: a
    }), {
      teleportTarget: S
    } = g_(() => {
      var Ie, at, Ge;
      const Y = e.attach || e.contained;
      if (Y) return Y;
      const ce = ((Ie = M == null ? void 0 : M.value) == null ? void 0 : Ie.getRootNode()) || ((Ge = (at = s.proxy) == null ? void 0 : at.$el) == null ? void 0 : Ge.getRootNode());
      return ce instanceof ShadowRoot ? ce : !1;
    }), {
      dimensionStyles: D
    } = _n(e), B = d_(), {
      scopeId: Z
    } = Af();
    ve(() => e.disabled, (Y) => {
      Y && (u.value = !1);
    });
    const {
      contentStyles: Q,
      updateLocation: X
    } = qb(e, {
      isRtl: v,
      contentEl: a,
      target: N,
      isActive: u
    });
    t_(e, {
      root: r,
      contentEl: a,
      targetEl: $,
      isActive: u,
      updateLocation: X
    });
    function q(Y) {
      o("click:outside", Y), e.persistent ? Ve() : u.value = !1;
    }
    function ye(Y) {
      return u.value && k.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || Y.target === l.value || Y instanceof MouseEvent && Y.shadowTarget === l.value);
    }
    Be && ve(u, (Y) => {
      Y ? window.addEventListener("keydown", be) : window.removeEventListener("keydown", be);
    }, {
      immediate: !0
    }), yt(() => {
      Be && window.removeEventListener("keydown", be);
    });
    function be(Y) {
      var ce, Ie;
      Y.key === "Escape" && k.value && (e.persistent ? Ve() : (u.value = !1, (ce = a.value) != null && ce.contains(document.activeElement) && ((Ie = M.value) == null || Ie.focus())));
    }
    const me = Ty();
    ui(() => e.closeOnBack, () => {
      Dy(me, (Y) => {
        k.value && u.value ? (Y(!1), e.persistent ? Ve() : u.value = !1) : Y();
      });
    });
    const ne = ue();
    ve(() => u.value && (e.absolute || e.contained) && S.value == null, (Y) => {
      if (Y) {
        const ce = Yh(r.value);
        ce && ce !== document.scrollingElement && (ne.value = ce.scrollTop);
      }
    });
    function Ve() {
      e.noClickAnimation || a.value && bi(a.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: us
      });
    }
    function Je() {
      o("afterEnter");
    }
    function Qe() {
      h(), o("afterLeave");
    }
    return ge(() => {
      var Y;
      return f(ke, null, [(Y = n.activator) == null ? void 0 : Y.call(n, {
        isActive: u.value,
        targetRef: C,
        props: Ce({
          ref: x
        }, V.value, e.activatorProps)
      }), B.value && g.value && f(rv, {
        disabled: !S.value,
        to: S.value
      }, {
        default: () => [f("div", Ce({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": u.value,
            "v-overlay--contained": e.contained
          }, c.value, m.value, e.class],
          style: [P.value, {
            "--v-overlay-opacity": e.opacity,
            top: se(ne.value)
          }, e.style],
          ref: r
        }, Z, i), [f(b_, Ce({
          color: w,
          modelValue: u.value && !!e.scrim,
          ref: l
        }, A.value), null), f(cn, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: N.value,
          onAfterEnter: Je,
          onAfterLeave: Qe
        }, {
          default: () => {
            var ce;
            return [Nt(f("div", Ce({
              ref: a,
              class: ["v-overlay__content", e.contentClass],
              style: [D.value, Q.value]
            }, L.value, e.contentProps), [(ce = n.default) == null ? void 0 : ce.call(n, {
              isActive: u
            })]), [[Mn, u.value], [Ai("click-outside"), {
              handler: q,
              closeConditional: ye,
              include: () => [M.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: M,
      scrimEl: l,
      target: N,
      animateClick: Ve,
      contentEl: a,
      globalTop: k,
      localTop: O,
      updateLocation: X
    };
  }
}), Ff = W({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...Mf({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: nb
    },
    zIndex: 2400
  })
}, "VDialog"), qn = le()({
  name: "VDialog",
  props: Ff(),
  emits: {
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: i
    } = t;
    const o = nt(e, "modelValue"), {
      scopeId: s
    } = Af(), r = ue();
    function l(u) {
      var v, g;
      const c = u.relatedTarget, m = u.target;
      if (c !== m && ((v = r.value) != null && v.contentEl) && // We're the topmost dialog
      ((g = r.value) != null && g.globalTop) && // It isn't the document or the dialog body
      ![document, r.value.contentEl].includes(m) && // It isn't inside the dialog body
      !r.value.contentEl.contains(m)) {
        const h = ld(r.value.contentEl);
        if (!h.length) return;
        const w = h[0], k = h[h.length - 1];
        c === w ? k.focus() : w.focus();
      }
    }
    yt(() => {
      document.removeEventListener("focusin", l);
    }), Be && ve(() => o.value && e.retainFocus, (u) => {
      u ? document.addEventListener("focusin", l) : document.removeEventListener("focusin", l);
    }, {
      immediate: !0
    });
    function a() {
      var u;
      n("afterEnter"), (u = r.value) != null && u.contentEl && !r.value.contentEl.contains(document.activeElement) && r.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function d() {
      n("afterLeave");
    }
    return ve(o, async (u) => {
      var c;
      u || (await At(), (c = r.value.activatorEl) == null || c.focus({
        preventScroll: !0
      }));
    }), ge(() => {
      const u = Br.filterProps(e), c = Ce({
        "aria-haspopup": "dialog"
      }, e.activatorProps), m = Ce({
        tabindex: -1
      }, e.contentProps);
      return f(Br, Ce({
        ref: r,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, u, {
        modelValue: o.value,
        "onUpdate:modelValue": (v) => o.value = v,
        "aria-modal": "true",
        activatorProps: c,
        contentProps: m,
        height: e.fullscreen ? void 0 : e.height,
        width: e.fullscreen ? void 0 : e.width,
        maxHeight: e.fullscreen ? void 0 : e.maxHeight,
        maxWidth: e.fullscreen ? void 0 : e.maxWidth,
        role: "dialog",
        onAfterEnter: a,
        onAfterLeave: d
      }, s), {
        activator: i.activator,
        default: function() {
          for (var v = arguments.length, g = new Array(v), h = 0; h < v; h++)
            g[h] = arguments[h];
          return f(it, {
            root: "VDialog"
          }, {
            default: () => {
              var w;
              return [(w = i.default) == null ? void 0 : w.call(i, ...g)];
            }
          });
        }
      });
    }), Fl({}, r);
  }
}), __ = {
  name: "UserCenter",
  props: ["messages", "user"],
  data: () => ({
    editAvatar: !1,
    editNickname: !1,
    editPassword: !1,
    checkLogout: !1,
    newNickname: "",
    oldPassword: "",
    newPassword: "",
    examPassword: "",
    rules: {
      pass: (e) => 20 >= e.length && e.length >= 8 || "8 ~ 20 characters",
      nick: (e) => e.length >= 2 || "Min 2 characters",
      email: function(e) {
        var t = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return t.test(e) || "Invalid email format";
      }
    }
  }),
  methods: {
    thumb_or_content: function(e) {
      return Math.random() > 0.5 ? e.content : "赞了你的评论";
    },
    double_check_password: function(e) {
      return e.length < 8 ? "Min 8 characters" : e == this.newPassword || "Password are not same.";
    },
    alert_avatar: function() {
      alert("请前往 https://cavatar.cn 更改");
    },
    saveNickname: function() {
      this.update_user({
        nickname: this.newNickname
      }).then(() => {
        this.editNickname = !1;
      });
    },
    savePassword() {
      this.examPassword != this.newPassword, this.update_user({
        password0: this.oldPassword,
        password1: this.newPassword
      }).then(() => {
        this.editPassword = !1;
      });
    },
    update_user: function(e) {
      return this.user.nickName = this.newNickname, this.$backend("/api/user/update", {
        method: "POST",
        body: JSON.stringify(e)
      }).then((t) => {
        if (t.err != "ok") {
          this.alert.msg = t.msg, this.alert.type = "error";
          return;
        }
        this.$emit("update", t.data);
      });
    },
    do_logout: function() {
      return this.user.nickName = this.newNickname, this.$backend("/api/user/sign_out").then((e) => {
        if (e.err != "ok") {
          this.alert.msg = e.msg, this.alert.type = "error";
          return;
        }
        this.$emit("logout");
      });
    }
  }
}, w_ = { class: "px-4 py-2" }, S_ = { class: "px-4 py-2" }, E_ = { class: "my-2" };
function C_(e, t, n, i, o, s) {
  return _e(), Ne(Mt, null, {
    default: E(() => [
      f(wi, { class: "text-center" }, {
        default: E(() => t[14] || (t[14] = [
          ie(" 消息 ")
        ])),
        _: 1
      }),
      Ee("div", w_, [
        f(Mt, {
          class: "mb-3 elevation-4 rounded-lg",
          subtitle: "用户信息"
        }, {
          default: E(() => [
            f(si, null, {
              default: E(() => [
                f(Le, {
                  class: "text-right",
                  onClick: s.alert_avatar
                }, {
                  prepend: E(() => t[15] || (t[15] = [
                    Ee("span", null, "头像", -1)
                  ])),
                  append: E(() => [
                    f(Di, {
                      image: n.user.avatar
                    }, null, 8, ["image"])
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                f(Le, {
                  class: "text-right",
                  title: n.user.email
                }, {
                  prepend: E(() => t[16] || (t[16] = [
                    Ee("span", null, "邮箱", -1)
                  ])),
                  _: 1
                }, 8, ["title"]),
                f(Le, {
                  class: "text-right",
                  onClick: t[0] || (t[0] = (r) => e.editNickname = !0),
                  title: n.user.nickname
                }, {
                  prepend: E(() => t[17] || (t[17] = [
                    Ee("span", null, "昵称", -1)
                  ])),
                  append: E(() => [
                    f(We, null, {
                      default: E(() => t[18] || (t[18] = [
                        ie("mdi-chevron-right")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["title"]),
                f(Le, {
                  class: "text-right",
                  onClick: t[1] || (t[1] = (r) => e.editPassword = !0),
                  title: "(点击更改)",
                  "append-icon": "mdi-chevron-right"
                }, {
                  prepend: E(() => t[19] || (t[19] = [
                    Ee("span", null, "密码", -1)
                  ])),
                  _: 1
                }),
                f(Le, {
                  class: "text-right",
                  onClick: t[2] || (t[2] = (r) => e.checkLogout = !0),
                  "append-icon": "mdi-chevron-right"
                }, {
                  prepend: E(() => t[20] || (t[20] = [
                    Ee("span", null, "退出登录", -1)
                  ])),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      Ee("div", S_, [
        f(Mt, {
          class: "mb-3 elevation-4 rounded-lg",
          subtitle: "章评互动信息"
        }, {
          default: E(() => [
            n.messages.length === 0 ? (_e(), Ne(si, {
              key: 0,
              density: "compact",
              class: "mr-4"
            }, {
              default: E(() => [
                f(Le, { class: "my-4" }, {
                  default: E(() => [
                    f(Al, { class: "text-center" }, {
                      default: E(() => t[21] || (t[21] = [
                        ie("无新的互动消息")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : pi("", !0),
            f(si, {
              id: "book-comments",
              density: "compact",
              class: "mr-4"
            }, {
              default: E(() => [
                (_e(!0), Yn(ke, null, Ci(n.messages, (r) => (_e(), Ne(Le, {
                  key: r.id,
                  class: "pr-0 align-self-start mb-4",
                  "prepend-avatar": r.avatar,
                  subtitle: r.nickName + " @《宿命之环》"
                }, {
                  default: E(() => [
                    Ee("div", E_, ft(s.thumb_or_content(r)), 1),
                    f(Mt, {
                      variant: "tonal",
                      color: "surface-variant",
                      subtitle: "这一段写得真厉害哦"
                    })
                  ]),
                  _: 2
                }, 1032, ["prepend-avatar", "subtitle"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      f(qn, {
        modelValue: e.editAvatar,
        "onUpdate:modelValue": t[3] || (t[3] = (r) => e.editAvatar = r),
        persistent: ""
      }, {
        default: E(() => [
          f(Of)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      f(qn, {
        modelValue: e.editNickname,
        "onUpdate:modelValue": t[6] || (t[6] = (r) => e.editNickname = r),
        persistent: ""
      }, {
        default: E(() => [
          f(Mt, null, {
            default: E(() => [
              f(wi, { class: "text-center" }, {
                default: E(() => t[22] || (t[22] = [
                  ie("修改昵称")
                ])),
                _: 1
              }),
              f(xi, null, {
                default: E(() => [
                  f(qt, {
                    modelValue: e.newNickname,
                    "onUpdate:modelValue": t[4] || (t[4] = (r) => e.newNickname = r),
                    label: "新昵称"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              f(Ni, null, {
                default: E(() => [
                  f(fe, {
                    text: "",
                    onClick: t[5] || (t[5] = (r) => e.editNickname = !1)
                  }, {
                    default: E(() => t[23] || (t[23] = [
                      ie("取消")
                    ])),
                    _: 1
                  }),
                  f(fe, {
                    text: "",
                    onClick: s.saveNickname
                  }, {
                    default: E(() => t[24] || (t[24] = [
                      ie("保存")
                    ])),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]),
      f(qn, {
        modelValue: e.editPassword,
        "onUpdate:modelValue": t[11] || (t[11] = (r) => e.editPassword = r),
        persistent: "",
        "z-index": "2999"
      }, {
        default: E(() => [
          f(Mt, null, {
            default: E(() => [
              f(wi, { class: "text-center" }, {
                default: E(() => t[25] || (t[25] = [
                  ie("修改密码")
                ])),
                _: 1
              }),
              f(xi, null, {
                default: E(() => [
                  f(qt, {
                    modelValue: e.oldPassword,
                    "onUpdate:modelValue": t[7] || (t[7] = (r) => e.oldPassword = r),
                    label: "当前密码"
                  }, null, 8, ["modelValue"]),
                  f(qt, {
                    modelValue: e.newPassword,
                    "onUpdate:modelValue": t[8] || (t[8] = (r) => e.newPassword = r),
                    label: "新密码",
                    rules: [e.rules.pass]
                  }, null, 8, ["modelValue", "rules"]),
                  f(qt, {
                    modelValue: e.examPassword,
                    "onUpdate:modelValue": t[9] || (t[9] = (r) => e.examPassword = r),
                    label: "确认密码",
                    rules: [s.double_check_password]
                  }, null, 8, ["modelValue", "rules"])
                ]),
                _: 1
              }),
              f(Ni, null, {
                default: E(() => [
                  f(fe, {
                    text: "",
                    onClick: t[10] || (t[10] = (r) => e.editPassword = !1)
                  }, {
                    default: E(() => t[26] || (t[26] = [
                      ie("取消")
                    ])),
                    _: 1
                  }),
                  f(fe, {
                    text: "",
                    onClick: s.savePassword
                  }, {
                    default: E(() => t[27] || (t[27] = [
                      ie("保存")
                    ])),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]),
      f(qn, {
        modelValue: e.checkLogout,
        "onUpdate:modelValue": t[13] || (t[13] = (r) => e.checkLogout = r),
        persistent: ""
      }, {
        default: E(() => [
          f(Mt, null, {
            default: E(() => [
              f(wi, { class: "text-center" }, {
                default: E(() => t[28] || (t[28] = [
                  ie("请确认")
                ])),
                _: 1
              }),
              f(xi, null, {
                default: E(() => t[29] || (t[29] = [
                  ie(" 是否要退出登录？ ")
                ])),
                _: 1
              }),
              f(Ni, null, {
                default: E(() => [
                  f(fe, {
                    text: "",
                    onClick: t[12] || (t[12] = (r) => e.checkLogout = !1)
                  }, {
                    default: E(() => t[30] || (t[30] = [
                      ie("取消")
                    ])),
                    _: 1
                  }),
                  f(fe, {
                    text: "",
                    onClick: s.do_logout
                  }, {
                    default: E(() => t[31] || (t[31] = [
                      ie("确认")
                    ])),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 1
  });
}
const Lf = /* @__PURE__ */ di(__, [["render", C_], ["__scopeId", "data-v-cacf4611"]]), k_ = W({
  ...pe(),
  ...$b()
}, "VForm"), lr = le()({
  name: "VForm",
  props: k_(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: i
    } = t;
    const o = Mb(e), s = ue();
    function r(a) {
      a.preventDefault(), o.reset();
    }
    function l(a) {
      const d = a, u = o.validate();
      d.then = u.then.bind(u), d.catch = u.catch.bind(u), d.finally = u.finally.bind(u), i("submit", d), d.defaultPrevented || u.then((c) => {
        var v;
        let {
          valid: m
        } = c;
        m && ((v = s.value) == null || v.submit());
      }), d.preventDefault();
    }
    return ge(() => {
      var a;
      return f("form", {
        ref: s,
        class: ["v-form", e.class],
        style: e.style,
        novalidate: !0,
        onReset: r,
        onSubmit: l
      }, [(a = n.default) == null ? void 0 : a.call(n, o)]);
    }), Fl(o, s);
  }
}), N_ = {
  data: () => ({
    mode: "login",
    email: "",
    password: "",
    password2: "",
    nickname: "",
    failmsg: "",
    validmsg: "",
    rules: {
      nick: (e) => e.length >= 2 || "昵称需至少包含两个字符",
      email: function(e) {
        var t = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return t.test(e) || "无效的邮箱地址";
      }
    },
    alert: {
      type: "error",
      msg: ""
    }
  }),
  head: () => ({
    title: "登录"
  }),
  computed: {},
  methods: {
    do_login: function() {
      var e = new URLSearchParams();
      e.append("email", this.email), e.append("password", this.password), this.$backend("/api/user/sign_in", {
        method: "POST",
        body: e
      }).then((t) => {
        t.err != "ok" ? (this.alert.type = "error", this.alert.msg = t.msg) : this.$emit("login", t.data);
      });
    },
    do_reset: function() {
      var e = new URLSearchParams();
      e.append("email", this.email), this.$backend("/api/user/reset", {
        method: "POST",
        body: e
      }).then((t) => {
        t.err == "ok" ? (this.alert.type = "success", this.alert.msg = "重置成功！请查阅密码通知邮件。") : (this.alert.type = "error", this.alert.msg = t.msg);
      });
    },
    do_signup: function() {
      if (!this.$refs.form.validate())
        return !1;
      var e = new URLSearchParams();
      e.append("email", this.email), e.append("nickname", this.nickname), this.$backend("/api/user/sign_up", {
        method: "POST",
        body: e
      }).then((t) => {
        t.err != "ok" ? this.failmsg = t.msg : (this.alert.type = "success", this.alert.msg = "注册成功！请查阅密码通知邮件。", this.mode = "login");
      });
    }
  }
};
function x_(e, t, n, i, o, s) {
  return _e(), Ne(Mt, { title: "登录到书评系统" }, {
    default: E(() => [
      f(fn),
      f(Zd, null, {
        default: E(() => [
          e.mode == "login" ? (_e(), Ne(lr, {
            key: 0,
            onSubmit: Xs(s.do_login, ["prevent"])
          }, {
            default: E(() => [
              f(qt, {
                "prepend-icon": "mdi-email",
                modelValue: e.email,
                "onUpdate:modelValue": t[0] || (t[0] = (r) => e.email = r),
                label: "邮箱",
                type: "text",
                autocomplete: "old-email"
              }, null, 8, ["modelValue"]),
              f(qt, {
                "prepend-icon": "mdi-lock",
                modelValue: e.password,
                "onUpdate:modelValue": t[1] || (t[1] = (r) => e.password = r),
                label: "密码",
                type: "password"
              }, null, 8, ["modelValue"]),
              f(fe, {
                type: "submit",
                color: "primary"
              }, {
                default: E(() => t[8] || (t[8] = [
                  ie("登录")
                ])),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onSubmit"])) : e.mode == "forget" ? (_e(), Ne(lr, {
            key: 1,
            onSubmit: Xs(s.do_reset, ["prevent"])
          }, {
            default: E(() => [
              f(qt, {
                "prepend-icon": "mdi-email",
                modelValue: e.email,
                "onUpdate:modelValue": t[2] || (t[2] = (r) => e.email = r),
                label: "邮箱",
                type: "text",
                autocomplete: "old-email"
              }, null, 8, ["modelValue"]),
              f(fe, {
                type: "submit",
                color: "red"
              }, {
                default: E(() => t[9] || (t[9] = [
                  ie("重置密码")
                ])),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onSubmit"])) : e.mode == "signup" ? (_e(), Ne(lr, {
            key: 2,
            ref: "form",
            onSubmit: Xs(s.do_signup, ["prevent"])
          }, {
            default: E(() => [
              f(qt, {
                required: "",
                "prepend-icon": "mdi-email",
                modelValue: e.email,
                "onUpdate:modelValue": t[3] || (t[3] = (r) => e.email = r),
                label: "邮箱",
                type: "text",
                autocomplete: "new-email",
                rules: [e.rules.email]
              }, null, 8, ["modelValue", "rules"]),
              f(qt, {
                required: "",
                "prepend-icon": "mdi-guy-fawkes-mask",
                modelValue: e.nickname,
                "onUpdate:modelValue": t[4] || (t[4] = (r) => e.nickname = r),
                label: "昵称",
                type: "text",
                autocomplete: "new-nickname",
                rules: [e.rules.nick]
              }, null, 8, ["modelValue", "rules"]),
              f(fe, {
                type: "submit",
                color: "green"
              }, {
                default: E(() => t[10] || (t[10] = [
                  ie("注册")
                ])),
                _: 1
              }),
              t[11] || (t[11] = Ee("p", { class: "text-small" }, " * 账号密码将随机生成，并发往邮箱", -1))
            ]),
            _: 1
          }, 8, ["onSubmit"])) : pi("", !0)
        ]),
        _: 1
      }),
      e.alert.msg ? (_e(), Ne(Of, {
        key: 0,
        type: e.alert.type
      }, {
        default: E(() => [
          ie(ft(e.alert.msg), 1)
        ]),
        _: 1
      }, 8, ["type"])) : pi("", !0),
      f(fn),
      f(Ni, null, {
        default: E(() => [
          e.mode == "login" ? (_e(), Ne(fe, {
            key: 0,
            onClick: t[5] || (t[5] = (r) => e.mode = "forget"),
            text: "忘记密码?"
          })) : pi("", !0),
          e.mode != "login" ? (_e(), Ne(fe, {
            key: 1,
            onClick: t[6] || (t[6] = (r) => e.mode = "login"),
            text: "登录账号"
          })) : pi("", !0),
          f(af),
          f(fe, {
            onClick: t[7] || (t[7] = (r) => e.mode = "signup"),
            text: "快速注册"
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const Bf = /* @__PURE__ */ di(N_, [["render", x_]]), V_ = {
  name: "BookToc",
  computed: {
    meta_items: function() {
      var e = [];
      for (var t in this.meta) {
        var n = this.meta[t];
        n == "" || n == null || e.push({ title: this.gettext(t), subtitle: n, lines: 3 });
      }
      return console.log(e), e;
    }
  },
  mounted: function() {
  },
  methods: {
    click_toc: function(e) {
      this.$emit("click:select", e);
    },
    has_data: function(e) {
      return console.log(e), e != "" && e != null && e != null;
    },
    gettext: function(e) {
      const t = {
        creator: "作者",
        description: "描述",
        direction: "方向",
        flow: "布局",
        identifier: "标识符",
        language: "语言",
        modified_date: "修订日期",
        orientation: "显示方向",
        pubdate: "出版日期",
        publisher: "出版社",
        rights: "版权",
        title: "书名"
      };
      return t[e] !== void 0 ? t[e] : e;
    }
  },
  props: ["meta", "toc_items"],
  data: () => ({})
};
function O_(e, t, n, i, o, s) {
  return _e(), Ne(si, { "onClick:select": s.click_toc }, {
    default: E(() => [
      f(gs, null, {
        activator: E(({ props: r }) => [
          f(Le, Ce(r, { title: "书籍信息" }), null, 16)
        ]),
        default: E(() => [
          (_e(!0), Yn(ke, null, Ci(s.meta_items, (r) => (_e(), Ne(Le, {
            key: r.title,
            title: r.title,
            subtitle: r.subtitle,
            lines: "3"
          }, null, 8, ["title", "subtitle"]))), 128))
        ]),
        _: 1
      }),
      f(fn),
      (_e(!0), Yn(ke, null, Ci(n.toc_items, (r, l) => (_e(), Yn(ke, null, [
        r.subitems.length == 0 ? (_e(), Ne(Le, {
          key: 0,
          "prepend-icon": "mdi-book-open-page-variant-outline",
          title: r.label,
          value: r.href
        }, null, 8, ["title", "value"])) : (_e(), Ne(gs, {
          key: r.href
        }, {
          activator: E(({ props: a }) => [
            f(Le, Ce({ ref_for: !0 }, a, {
              "prepend-icon": "mdi-book-open-page-variant-outline",
              title: r.label,
              value: r.href
            }), null, 16, ["title", "value"])
          ]),
          default: E(() => [
            (_e(!0), Yn(ke, null, Ci(r.subitems, (a, d) => (_e(), Ne(Le, {
              key: r.href,
              title: a.label,
              value: a.href
            }, null, 8, ["title", "value"]))), 128))
          ]),
          _: 2
        }, 1024))
      ], 64))), 256))
    ]),
    _: 1
  }, 8, ["onClick:select"]);
}
const Rf = /* @__PURE__ */ di(V_, [["render", O_]]), Ll = Symbol.for("vuetify:v-slider");
function T_(e, t, n) {
  const i = n === "vertical", o = t.getBoundingClientRect(), s = "touches" in e ? e.touches[0] : e;
  return i ? s.clientY - (o.top + o.height / 2) : s.clientX - (o.left + o.width / 2);
}
function D_(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const P_ = W({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  readonly: {
    type: Boolean,
    default: null
  },
  max: {
    type: [Number, String],
    default: 100
  },
  min: {
    type: [Number, String],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 0
  },
  thumbColor: String,
  thumbLabel: {
    type: [Boolean, String],
    default: void 0,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  thumbSize: {
    type: [Number, String],
    default: 20
  },
  showTicks: {
    type: [Boolean, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  ticks: {
    type: [Array, Object]
  },
  tickSize: {
    type: [Number, String],
    default: 2
  },
  color: String,
  trackColor: String,
  trackFillColor: String,
  trackSize: {
    type: [Number, String],
    default: 4
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  reverse: Boolean,
  ...bt(),
  ...Sn({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), A_ = (e) => {
  const t = y(() => parseFloat(e.min)), n = y(() => parseFloat(e.max)), i = y(() => +e.step > 0 ? parseFloat(e.step) : 0), o = y(() => Math.max(Pa(i.value), Pa(t.value)));
  function s(r) {
    if (r = parseFloat(r), i.value <= 0) return r;
    const l = Pn(r, t.value, n.value), a = t.value % i.value, d = Math.round((l - a) / i.value) * i.value + a;
    return parseFloat(Math.min(d, n.value).toFixed(o.value));
  }
  return {
    min: t,
    max: n,
    step: i,
    decimals: o,
    roundValue: s
  };
}, I_ = (e) => {
  let {
    props: t,
    steps: n,
    onSliderStart: i,
    onSliderMove: o,
    onSliderEnd: s,
    getActiveThumb: r
  } = e;
  const {
    isRtl: l
  } = en(), a = oe(t, "reverse"), d = y(() => t.direction === "vertical"), u = y(() => d.value !== a.value), {
    min: c,
    max: m,
    step: v,
    decimals: g,
    roundValue: h
  } = n, w = y(() => parseInt(t.thumbSize, 10)), k = y(() => parseInt(t.tickSize, 10)), O = y(() => parseInt(t.trackSize, 10)), P = y(() => (m.value - c.value) / v.value), M = oe(t, "disabled"), x = y(() => t.error || t.disabled ? void 0 : t.thumbColor ?? t.color), N = y(() => t.error || t.disabled ? void 0 : t.trackColor ?? t.color), $ = y(() => t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color), C = he(!1), V = he(0), L = ue(), A = ue();
  function S(Y) {
    var b;
    const ce = t.direction === "vertical", Ie = ce ? "top" : "left", at = ce ? "height" : "width", Ge = ce ? "clientY" : "clientX", {
      [Ie]: Rn,
      [at]: No
    } = (b = L.value) == null ? void 0 : b.$el.getBoundingClientRect(), xo = D_(Y, Ge);
    let p = Math.min(Math.max((xo - Rn - V.value) / No, 0), 1) || 0;
    return (ce ? u.value : u.value !== l.value) && (p = 1 - p), h(c.value + p * (m.value - c.value));
  }
  const D = (Y) => {
    s({
      value: S(Y)
    }), C.value = !1, V.value = 0;
  }, B = (Y) => {
    A.value = r(Y), A.value && (A.value.focus(), C.value = !0, A.value.contains(Y.target) ? V.value = T_(Y, A.value, t.direction) : (V.value = 0, o({
      value: S(Y)
    })), i({
      value: S(Y)
    }));
  }, Z = {
    passive: !0,
    capture: !0
  };
  function Q(Y) {
    o({
      value: S(Y)
    });
  }
  function X(Y) {
    Y.stopPropagation(), Y.preventDefault(), D(Y), window.removeEventListener("mousemove", Q, Z), window.removeEventListener("mouseup", X);
  }
  function q(Y) {
    var ce;
    D(Y), window.removeEventListener("touchmove", Q, Z), (ce = Y.target) == null || ce.removeEventListener("touchend", q);
  }
  function ye(Y) {
    var ce;
    B(Y), window.addEventListener("touchmove", Q, Z), (ce = Y.target) == null || ce.addEventListener("touchend", q, {
      passive: !1
    });
  }
  function be(Y) {
    Y.preventDefault(), B(Y), window.addEventListener("mousemove", Q, Z), window.addEventListener("mouseup", X, {
      passive: !1
    });
  }
  const me = (Y) => {
    const ce = (Y - c.value) / (m.value - c.value) * 100;
    return Pn(isNaN(ce) ? 0 : ce, 0, 100);
  }, ne = oe(t, "showTicks"), Ve = y(() => ne.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((Y) => ({
    value: Y,
    position: me(Y),
    label: Y.toString()
  })) : Object.keys(t.ticks).map((Y) => ({
    value: parseFloat(Y),
    position: me(parseFloat(Y)),
    label: t.ticks[Y]
  })) : P.value !== 1 / 0 ? fl(P.value + 1).map((Y) => {
    const ce = c.value + Y * v.value;
    return {
      value: ce,
      position: me(ce)
    };
  }) : [] : []), Je = y(() => Ve.value.some((Y) => {
    let {
      label: ce
    } = Y;
    return !!ce;
  })), Qe = {
    activeThumbRef: A,
    color: oe(t, "color"),
    decimals: g,
    disabled: M,
    direction: oe(t, "direction"),
    elevation: oe(t, "elevation"),
    hasLabels: Je,
    isReversed: a,
    indexFromEnd: u,
    min: c,
    max: m,
    mousePressed: C,
    numTicks: P,
    onSliderMousedown: be,
    onSliderTouchstart: ye,
    parsedTicks: Ve,
    parseMouseMove: S,
    position: me,
    readonly: oe(t, "readonly"),
    rounded: oe(t, "rounded"),
    roundValue: h,
    showTicks: ne,
    startOffset: V,
    step: v,
    thumbSize: w,
    thumbColor: x,
    thumbLabel: oe(t, "thumbLabel"),
    ticks: oe(t, "ticks"),
    tickSize: k,
    trackColor: N,
    trackContainerRef: L,
    trackFillColor: $,
    trackSize: O,
    vertical: d
  };
  return gt(Ll, Qe), Qe;
}, $_ = W({
  focused: Boolean,
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  modelValue: {
    type: Number,
    required: !0
  },
  position: {
    type: Number,
    required: !0
  },
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  name: String,
  ...pe()
}, "VSliderThumb"), M_ = le()({
  name: "VSliderThumb",
  directives: {
    Ripple: Ms
  },
  props: $_(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: i
    } = t;
    const o = Re(Ll), {
      isRtl: s,
      rtlClasses: r
    } = en();
    if (!o) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor: l,
      step: a,
      disabled: d,
      thumbSize: u,
      thumbLabel: c,
      direction: m,
      isReversed: v,
      vertical: g,
      readonly: h,
      elevation: w,
      mousePressed: k,
      decimals: O,
      indexFromEnd: P
    } = o, M = y(() => d.value ? void 0 : w.value), {
      elevationClasses: x
    } = En(M), {
      textColorClasses: N,
      textColorStyles: $
    } = jt(l), {
      pageup: C,
      pagedown: V,
      end: L,
      home: A,
      left: S,
      right: D,
      down: B,
      up: Z
    } = ah, Q = [C, V, L, A, S, D, B, Z], X = y(() => a.value ? [1, 2, 3] : [1, 5, 10]);
    function q(be, me) {
      if (!Q.includes(be.key)) return;
      be.preventDefault();
      const ne = a.value || 0.1, Ve = (e.max - e.min) / ne;
      if ([S, D, B, Z].includes(be.key)) {
        const Qe = (g.value ? [s.value ? S : D, v.value ? B : Z] : P.value !== s.value ? [S, Z] : [D, Z]).includes(be.key) ? 1 : -1, Y = be.shiftKey ? 2 : be.ctrlKey ? 1 : 0;
        me = me + Qe * ne * X.value[Y];
      } else if (be.key === A)
        me = e.min;
      else if (be.key === L)
        me = e.max;
      else {
        const Je = be.key === V ? 1 : -1;
        me = me - Je * ne * (Ve > 100 ? Ve / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, me));
    }
    function ye(be) {
      const me = q(be, e.modelValue);
      me != null && i("update:modelValue", me);
    }
    return ge(() => {
      const be = se(P.value ? 100 - e.position : e.position, "%");
      return f("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && k.value
        }, e.class, r.value],
        style: [{
          "--v-slider-thumb-position": be,
          "--v-slider-thumb-size": se(u.value)
        }, e.style],
        role: "slider",
        tabindex: d.value ? -1 : 0,
        "aria-label": e.name,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!h.value,
        "aria-orientation": m.value,
        onKeydown: h.value ? void 0 : ye
      }, [f("div", {
        class: ["v-slider-thumb__surface", N.value, x.value],
        style: {
          ...$.value
        }
      }, null), Nt(f("div", {
        class: ["v-slider-thumb__ripple", N.value],
        style: $.value
      }, null), [[Ai("ripple"), e.ripple, null, {
        circle: !0,
        center: !0
      }]]), f(ib, {
        origin: "bottom center"
      }, {
        default: () => {
          var me;
          return [Nt(f("div", {
            class: "v-slider-thumb__label-container"
          }, [f("div", {
            class: ["v-slider-thumb__label"]
          }, [f("div", null, [((me = n["thumb-label"]) == null ? void 0 : me.call(n, {
            modelValue: e.modelValue
          })) ?? e.modelValue.toFixed(a.value ? O.value : 1)])])]), [[Mn, c.value && e.focused || c.value === "always"]])];
        }
      })]);
    }), {};
  }
}), F_ = W({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...pe()
}, "VSliderTrack"), L_ = le()({
  name: "VSliderTrack",
  props: F_(),
  emits: {},
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = Re(Ll);
    if (!i) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: o,
      parsedTicks: s,
      rounded: r,
      showTicks: l,
      tickSize: a,
      trackColor: d,
      trackFillColor: u,
      trackSize: c,
      vertical: m,
      min: v,
      max: g,
      indexFromEnd: h
    } = i, {
      roundedClasses: w
    } = _t(r), {
      backgroundColorClasses: k,
      backgroundColorStyles: O
    } = Tt(u), {
      backgroundColorClasses: P,
      backgroundColorStyles: M
    } = Tt(d), x = y(() => `inset-${m.value ? "block" : "inline"}-${h.value ? "end" : "start"}`), N = y(() => m.value ? "height" : "width"), $ = y(() => ({
      [x.value]: "0%",
      [N.value]: "100%"
    })), C = y(() => e.stop - e.start), V = y(() => ({
      [x.value]: se(e.start, "%"),
      [N.value]: se(C.value, "%")
    })), L = y(() => l.value ? (m.value ? s.value.slice().reverse() : s.value).map((S, D) => {
      var Z;
      const B = S.value !== v.value && S.value !== g.value ? se(S.position, "%") : void 0;
      return f("div", {
        key: S.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": S.position >= e.start && S.position <= e.stop,
          "v-slider-track__tick--first": S.value === v.value,
          "v-slider-track__tick--last": S.value === g.value
        }],
        style: {
          [x.value]: B
        }
      }, [(S.label || n["tick-label"]) && f("div", {
        class: "v-slider-track__tick-label"
      }, [((Z = n["tick-label"]) == null ? void 0 : Z.call(n, {
        tick: S,
        index: D
      })) ?? S.label])]);
    }) : []);
    return ge(() => f("div", {
      class: ["v-slider-track", w.value, e.class],
      style: [{
        "--v-slider-track-size": se(c.value),
        "--v-slider-tick-size": se(a.value)
      }, e.style]
    }, [f("div", {
      class: ["v-slider-track__background", P.value, {
        "v-slider-track__background--opacity": !!o.value || !u.value
      }],
      style: {
        ...$.value,
        ...M.value
      }
    }, null), f("div", {
      class: ["v-slider-track__fill", k.value],
      style: {
        ...V.value,
        ...O.value
      }
    }, null), l.value && f("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": l.value === "always"
      }]
    }, [L.value])])), {};
  }
}), B_ = W({
  ...Il(),
  ...P_(),
  ...Ml(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), R_ = le()({
  name: "VSlider",
  props: B_(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    start: (e) => !0,
    end: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: i
    } = t;
    const o = ue(), {
      rtlClasses: s
    } = en(), r = A_(e), l = nt(e, "modelValue", void 0, (N) => r.roundValue(N ?? r.min.value)), {
      min: a,
      max: d,
      mousePressed: u,
      roundValue: c,
      onSliderMousedown: m,
      onSliderTouchstart: v,
      trackContainerRef: g,
      position: h,
      hasLabels: w,
      readonly: k
    } = I_({
      props: e,
      steps: r,
      onSliderStart: () => {
        i("start", l.value);
      },
      onSliderEnd: (N) => {
        let {
          value: $
        } = N;
        const C = c($);
        l.value = C, i("end", C);
      },
      onSliderMove: (N) => {
        let {
          value: $
        } = N;
        return l.value = c($);
      },
      getActiveThumb: () => {
        var N;
        return (N = o.value) == null ? void 0 : N.$el;
      }
    }), {
      isFocused: O,
      focus: P,
      blur: M
    } = $l(e), x = y(() => h(l.value));
    return ge(() => {
      const N = hs.filterProps(e), $ = !!(e.label || n.label || n.prepend);
      return f(hs, Ce({
        class: ["v-slider", {
          "v-slider--has-labels": !!n["tick-label"] || w.value,
          "v-slider--focused": O.value,
          "v-slider--pressed": u.value,
          "v-slider--disabled": e.disabled
        }, s.value, e.class],
        style: e.style
      }, N, {
        focused: O.value
      }), {
        ...n,
        prepend: $ ? (C) => {
          var V, L;
          return f(ke, null, [((V = n.label) == null ? void 0 : V.call(n, C)) ?? (e.label ? f(Ef, {
            id: C.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (L = n.prepend) == null ? void 0 : L.call(n, C)]);
        } : void 0,
        default: (C) => {
          let {
            id: V,
            messagesId: L
          } = C;
          return f("div", {
            class: "v-slider__container",
            onMousedown: k.value ? void 0 : m,
            onTouchstartPassive: k.value ? void 0 : v
          }, [f("input", {
            id: V.value,
            name: e.name || V.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: l.value
          }, null), f(L_, {
            ref: g,
            start: 0,
            stop: x.value
          }, {
            "tick-label": n["tick-label"]
          }), f(M_, {
            ref: o,
            "aria-describedby": L.value,
            focused: O.value,
            min: a.value,
            max: d.value,
            modelValue: l.value,
            "onUpdate:modelValue": (A) => l.value = A,
            position: x.value,
            elevation: e.elevation,
            onFocus: P,
            onBlur: M,
            ripple: e.ripple,
            name: e.name
          }, {
            "thumb-label": n["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), H_ = {
  name: "Settings",
  computed: {},
  mounted: function() {
    var e, t, n, i, o, s;
    this.opt = {
      flow: ((e = this.settings) == null ? void 0 : e.flow) || this.opt.flow,
      theme: ((t = this.settings) == null ? void 0 : t.theme) || this.opt.theme,
      theme_mode: ((n = this.settings) == null ? void 0 : n.theme_mode) || this.opt.theme_mode,
      font_size: ((i = this.settings) == null ? void 0 : i.font_size) || this.opt.font_size,
      brightness: ((o = this.settings) == null ? void 0 : o.brightness) || this.opt.brightness,
      show_comments: ((s = this.settings) == null ? void 0 : s.show_comments) ?? this.opt.show_comments
    };
  },
  methods: {
    set_and_emit: function(e, t) {
      e === "font_size" && (t = Math.max(12, Math.min(48, t))), this.opt = {
        ...this.opt,
        [e]: t
      }, this.$emit("update", { ...this.opt });
    },
    set_theme_and_emit: function(e, t) {
      this.opt = {
        ...this.opt,
        theme: e,
        theme_mode: t
      }, this.$emit("update", { ...this.opt });
    }
  },
  props: ["settings"],
  data: () => ({
    opt: {
      flow: "scrolled",
      theme: "eyecare",
      theme_mode: "day",
      font_size: 18,
      brightness: 100
    },
    themes: [{
      name: "white",
      mode: "day",
      color: "#F6F6F6",
      icon: "mdi-weather-sunny"
    }, {
      name: "eyecare",
      mode: "day",
      color: "#D3E3D3",
      icon: "mdi-eye"
    }, {
      name: "grey",
      mode: "night",
      color: "#4B4B4B",
      icon: "mdi-weather-night"
    }, {
      name: "dark",
      mode: "night",
      color: "#1A1A1A",
      icon: "mdi-candle"
    }]
  })
}, j_ = { class: "d-inline-blockx text-center" };
function z_(e, t, n, i, o, s) {
  return _e(), Ne(si, { density: "compact" }, {
    default: E(() => [
      f(Le, { class: "my-2" }, {
        default: E(() => [
          f(an, { class: "align-center" }, {
            default: E(() => [
              f(ze, { cols: "2" }, {
                default: E(() => t[9] || (t[9] = [
                  Ee("span", null, "亮度", -1)
                ])),
                _: 1
              }),
              f(ze, { cols: "9" }, {
                default: E(() => [
                  f(R_, {
                    "hide-details": "",
                    modelValue: e.opt.brightness,
                    "onUpdate:modelValue": [
                      t[0] || (t[0] = (r) => e.opt.brightness = r),
                      t[1] || (t[1] = (r) => e.$emit("update", e.opt))
                    ],
                    max: "100",
                    min: "1",
                    step: "1"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      f(Le, { class: "my-2" }, {
        default: E(() => [
          f(an, { class: "align-center gx-3" }, {
            default: E(() => [
              f(ze, { cols: "2" }, {
                default: E(() => t[10] || (t[10] = [
                  Ee("span", { class: "text-justify" }, "字体*", -1)
                ])),
                _: 1
              }),
              f(ze, { cols: "2" }, {
                default: E(() => [
                  f(fe, {
                    class: "text-justify",
                    variant: "outlined",
                    density: "comfortable",
                    onClick: t[2] || (t[2] = (r) => s.set_and_emit("font_size", e.opt.font_size - 2))
                  }, {
                    default: E(() => t[11] || (t[11] = [
                      ie("A-")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              }),
              f(ze, {
                cols: "2",
                class: "d-flex align-center justify-center"
              }, {
                default: E(() => [
                  Ee("span", j_, ft(e.opt.font_size), 1)
                ]),
                _: 1
              }),
              f(ze, { cols: "3" }, {
                default: E(() => [
                  f(fe, {
                    variant: "outlined",
                    density: "comfortable",
                    onClick: t[3] || (t[3] = (r) => s.set_and_emit("font_size", e.opt.font_size + 2))
                  }, {
                    default: E(() => t[12] || (t[12] = [
                      ie("A+")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              }),
              f(ze, { cols: "3" }, {
                default: E(() => [
                  f(fe, {
                    variant: "outlined",
                    density: "comfortable",
                    onClick: t[4] || (t[4] = (r) => s.set_and_emit("font_size", 18))
                  }, {
                    default: E(() => t[13] || (t[13] = [
                      ie("默认")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      f(Le, { class: "my-2" }, {
        default: E(() => [
          f(an, { class: "align-center" }, {
            default: E(() => [
              f(ze, { cols: "2" }, {
                default: E(() => t[14] || (t[14] = [
                  Ee("span", null, "翻页", -1)
                ])),
                _: 1
              }),
              f(ze, { cols: "10" }, {
                default: E(() => [
                  f(_i, {
                    variant: "outlined",
                    divided: "",
                    density: "compact"
                  }, {
                    default: E(() => [
                      f(fe, {
                        active: e.opt.flow == "paginated",
                        onClick: t[5] || (t[5] = (r) => s.set_and_emit("flow", "paginated"))
                      }, {
                        default: E(() => t[15] || (t[15] = [
                          ie("左右点击")
                        ])),
                        _: 1
                      }, 8, ["active"]),
                      f(fe, {
                        active: e.opt.flow == "scrolled",
                        onClick: t[6] || (t[6] = (r) => s.set_and_emit("flow", "scrolled"))
                      }, {
                        default: E(() => t[16] || (t[16] = [
                          ie("上下滑动")
                        ])),
                        _: 1
                      }, 8, ["active"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      f(Le, { class: "my-2" }, {
        default: E(() => [
          f(an, { class: "align-center" }, {
            default: E(() => [
              f(ze, { cols: "2" }, {
                default: E(() => t[17] || (t[17] = [
                  Ee("span", null, "动画*", -1)
                ])),
                _: 1
              }),
              f(ze, { cols: "10" }, {
                default: E(() => [
                  f(_i, {
                    variant: "outlined",
                    divided: "",
                    density: "compact"
                  }, {
                    default: E(() => [
                      f(fe, {
                        active: e.opt.animation == "none"
                      }, {
                        default: E(() => t[18] || (t[18] = [
                          ie("无动画")
                        ])),
                        _: 1
                      }, 8, ["active"]),
                      f(fe, {
                        active: e.opt.animation == "swap"
                      }, {
                        default: E(() => t[19] || (t[19] = [
                          ie("平移")
                        ])),
                        _: 1
                      }, 8, ["active"]),
                      f(fe, {
                        active: e.opt.animation == "paper"
                      }, {
                        default: E(() => t[20] || (t[20] = [
                          ie("仿真")
                        ])),
                        _: 1
                      }, 8, ["active"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      f(Le, { class: "my-2" }, {
        default: E(() => [
          f(an, { class: "align-center" }, {
            default: E(() => [
              f(ze, { cols: "2" }, {
                default: E(() => t[21] || (t[21] = [
                  Ee("span", null, "背景*", -1)
                ])),
                _: 1
              }),
              f(ze, { cols: "10" }, {
                default: E(() => [
                  f(_i, {
                    variant: "outlined",
                    divided: "",
                    density: "compact"
                  }, {
                    default: E(() => [
                      f(fe, {
                        active: e.opt.background == "p0"
                      }, {
                        default: E(() => t[22] || (t[22] = [
                          ie("主题图0")
                        ])),
                        _: 1
                      }, 8, ["active"]),
                      f(fe, {
                        active: e.opt.background == "p1"
                      }, {
                        default: E(() => t[23] || (t[23] = [
                          ie("主题图1")
                        ])),
                        _: 1
                      }, 8, ["active"]),
                      f(fe, {
                        active: e.opt.background == "p2"
                      }, {
                        default: E(() => t[24] || (t[24] = [
                          ie("主题图2")
                        ])),
                        _: 1
                      }, 8, ["active"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      f(Le, { class: "my-2" }, {
        default: E(() => [
          f(an, { style: { "margin-bottom": "1px" } }, {
            default: E(() => [
              f(ze, { cols: "2" }, {
                default: E(() => t[25] || (t[25] = [
                  Ee("span", { density: "compact" }, "章评*", -1)
                ])),
                _: 1
              }),
              f(ze, { cols: "10" }, {
                default: E(() => [
                  f(_i, {
                    variant: "outlined",
                    divided: "",
                    density: "compact"
                  }, {
                    default: E(() => [
                      f(fe, {
                        active: e.opt.show_comments == !0,
                        onClick: t[7] || (t[7] = (r) => s.set_and_emit("show_comments", !0))
                      }, {
                        default: E(() => t[26] || (t[26] = [
                          ie("开启")
                        ])),
                        _: 1
                      }, 8, ["active"]),
                      f(fe, {
                        active: e.opt.show_comments == !1,
                        onClick: t[8] || (t[8] = (r) => s.set_and_emit("show_comments", !1))
                      }, {
                        default: E(() => t[27] || (t[27] = [
                          ie("关闭")
                        ])),
                        _: 1
                      }, 8, ["active"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      f(Le, { class: "my-2" }, {
        default: E(() => [
          f(an, { style: { "margin-bottom": "1px" } }, {
            default: E(() => [
              f(ze, { cols: "2" }, {
                default: E(() => t[28] || (t[28] = [
                  Ee("span", { density: "compact" }, "主题", -1)
                ])),
                _: 1
              }),
              (_e(!0), Yn(ke, null, Ci(e.themes, (r) => (_e(), Ne(ze, { cols: "2" }, {
                default: E(() => [
                  f(fe, {
                    active: e.opt.theme == r.name,
                    density: "compact",
                    icon: r.icon,
                    color: r.color,
                    onClick: (l) => s.set_theme_and_emit(r.name, r.mode)
                  }, null, 8, ["active", "icon", "color", "onClick"])
                ]),
                _: 2
              }, 1024))), 256))
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      f(fn),
      f(Le, {
        class: "my-2",
        title: "带 * 号功能都在开发中"
      })
    ]),
    _: 1
  });
}
const Hf = /* @__PURE__ */ di(H_, [["render", z_]]), U_ = W({
  ...pe(),
  ...iy({
    fullHeight: !0
  }),
  ...Xe()
}, "VApp"), W_ = le()({
  name: "VApp",
  props: U_(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = lt(e), {
      layoutClasses: o,
      getLayoutItem: s,
      items: r,
      layoutRef: l
    } = ry(e), {
      rtlClasses: a
    } = en();
    return ge(() => {
      var d;
      return f("div", {
        ref: l,
        class: ["v-application", i.themeClasses.value, o.value, a.value, e.class],
        style: [e.style]
      }, [f("div", {
        class: "v-application__wrap"
      }, [(d = n.default) == null ? void 0 : d.call(n)])]);
    }), {
      getLayoutItem: s,
      items: r,
      theme: i
    };
  }
}), K_ = W({
  text: String,
  ...pe(),
  ...je()
}, "VToolbarTitle"), G_ = le()({
  name: "VToolbarTitle",
  props: K_(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ge(() => {
      const i = !!(n.default || n.text || e.text);
      return f(e.tag, {
        class: ["v-toolbar-title", e.class],
        style: e.style
      }, {
        default: () => {
          var o;
          return [i && f("div", {
            class: "v-toolbar-title__placeholder"
          }, [n.text ? n.text() : e.text, (o = n.default) == null ? void 0 : o.call(n)])];
        }
      });
    }), {};
  }
}), Y_ = [null, "prominent", "default", "comfortable", "compact"], jf = W({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => Y_.includes(e)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...Ln(),
  ...pe(),
  ...Sn(),
  ...bt(),
  ...je({
    tag: "header"
  }),
  ...Xe()
}, "VToolbar"), Rr = le()({
  name: "VToolbar",
  props: jf(),
  setup(e, t) {
    var v;
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Tt(oe(e, "color")), {
      borderClasses: s
    } = Bn(e), {
      elevationClasses: r
    } = En(e), {
      roundedClasses: l
    } = _t(e), {
      themeClasses: a
    } = lt(e), {
      rtlClasses: d
    } = en(), u = he(!!(e.extended || (v = n.extension) != null && v.call(n))), c = y(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), m = y(() => u.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return Ii({
      VBtn: {
        variant: "text"
      }
    }), ge(() => {
      var k;
      const g = !!(e.title || n.title), h = !!(n.image || e.image), w = (k = n.extension) == null ? void 0 : k.call(n);
      return u.value = !!(e.extended || w), f(e.tag, {
        class: ["v-toolbar", {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, i.value, s.value, r.value, l.value, a.value, d.value, e.class],
        style: [o.value, e.style]
      }, {
        default: () => [h && f("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [n.image ? f(it, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, n.image) : f(wl, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), f(it, {
          defaults: {
            VTabs: {
              height: se(c.value)
            }
          }
        }, {
          default: () => {
            var O, P, M;
            return [f("div", {
              class: "v-toolbar__content",
              style: {
                height: se(c.value)
              }
            }, [n.prepend && f("div", {
              class: "v-toolbar__prepend"
            }, [(O = n.prepend) == null ? void 0 : O.call(n)]), g && f(G_, {
              key: "title",
              text: e.title
            }, {
              text: n.title
            }), (P = n.default) == null ? void 0 : P.call(n), n.append && f("div", {
              class: "v-toolbar__append"
            }, [(M = n.append) == null ? void 0 : M.call(n)])])];
          }
        }), f(it, {
          defaults: {
            VTabs: {
              height: se(m.value)
            }
          }
        }, {
          default: () => [f(ff, null, {
            default: () => [u.value && f("div", {
              class: "v-toolbar__extension",
              style: {
                height: se(m.value)
              }
            }, [w])]
          })]
        })]
      });
    }), {
      contentHeight: c,
      extensionHeight: m
    };
  }
}), q_ = W({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function Z_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: n
  } = t;
  let i = 0, o = 0;
  const s = ue(null), r = he(0), l = he(0), a = he(0), d = he(!1), u = he(!1), c = y(() => Number(e.scrollThreshold)), m = y(() => Pn((c.value - r.value) / c.value || 0)), v = () => {
    const g = s.value;
    if (!g || n && !n.value) return;
    i = r.value, r.value = "window" in g ? g.pageYOffset : g.scrollTop;
    const h = g instanceof Window ? document.documentElement.scrollHeight : g.scrollHeight;
    if (o !== h) {
      o = h;
      return;
    }
    u.value = r.value < i, a.value = Math.abs(r.value - c.value);
  };
  return ve(u, () => {
    l.value = l.value || r.value;
  }), ve(d, () => {
    l.value = 0;
  }), In(() => {
    ve(() => e.scrollTarget, (g) => {
      var w;
      const h = g ? document.querySelector(g) : window;
      if (!h) {
        dn(`Unable to locate element with identifier ${g}`);
        return;
      }
      h !== s.value && ((w = s.value) == null || w.removeEventListener("scroll", v), s.value = h, s.value.addEventListener("scroll", v, {
        passive: !0
      }));
    }, {
      immediate: !0
    });
  }), yt(() => {
    var g;
    (g = s.value) == null || g.removeEventListener("scroll", v);
  }), n && ve(n, v, {
    immediate: !0
  }), {
    scrollThreshold: c,
    currentScroll: r,
    currentThreshold: a,
    isScrollActive: d,
    scrollRatio: m,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp: u,
    savedScroll: l
  };
}
const X_ = W({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  location: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ...jf(),
  ...Od(),
  ...q_(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), J_ = le()({
  name: "VAppBar",
  props: X_(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = ue(), o = nt(e, "modelValue"), s = y(() => {
      var P;
      const O = new Set(((P = e.scrollBehavior) == null ? void 0 : P.split(" ")) ?? []);
      return {
        hide: O.has("hide"),
        fullyHide: O.has("fully-hide"),
        inverted: O.has("inverted"),
        collapse: O.has("collapse"),
        elevate: O.has("elevate"),
        fadeImage: O.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    }), r = y(() => {
      const O = s.value;
      return O.hide || O.fullyHide || O.inverted || O.collapse || O.elevate || O.fadeImage || // behavior.shrink ||
      !o.value;
    }), {
      currentScroll: l,
      scrollThreshold: a,
      isScrollingUp: d,
      scrollRatio: u
    } = Z_(e, {
      canScroll: r
    }), c = y(() => s.value.hide || s.value.fullyHide), m = y(() => e.collapse || s.value.collapse && (s.value.inverted ? u.value > 0 : u.value === 0)), v = y(() => e.flat || s.value.fullyHide && !o.value || s.value.elevate && (s.value.inverted ? l.value > 0 : l.value === 0)), g = y(() => s.value.fadeImage ? s.value.inverted ? 1 - u.value : u.value : void 0), h = y(() => {
      var M, x;
      if (s.value.hide && s.value.inverted) return 0;
      const O = ((M = i.value) == null ? void 0 : M.contentHeight) ?? 0, P = ((x = i.value) == null ? void 0 : x.extensionHeight) ?? 0;
      return c.value ? l.value < a.value || s.value.fullyHide ? O + P : O : O + P;
    });
    ui(y(() => !!e.scrollBehavior), () => {
      yn(() => {
        c.value ? s.value.inverted ? o.value = l.value > a.value : o.value = d.value || l.value < a.value : o.value = !0;
      });
    });
    const {
      ssrBootStyles: w
    } = Fs(), {
      layoutItemStyles: k
    } = Td({
      id: e.name,
      order: y(() => parseInt(e.order, 10)),
      position: oe(e, "location"),
      layoutSize: h,
      elementSize: he(void 0),
      active: o,
      absolute: oe(e, "absolute")
    });
    return ge(() => {
      const O = Rr.filterProps(e);
      return f(Rr, Ce({
        ref: i,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [{
          ...k.value,
          "--v-toolbar-image-opacity": g.value,
          height: void 0,
          ...w.value
        }, e.style]
      }, O, {
        collapse: m.value,
        flat: v.value
      }), n);
    }), {};
  }
}), Q_ = W({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: He,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: !0
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...pe(),
  ...Co({
    location: "top end"
  }),
  ...bt(),
  ...je(),
  ...Xe(),
  ...wo({
    transition: "scale-rotate-transition"
  })
}, "VBadge"), e0 = le()({
  name: "VBadge",
  inheritAttrs: !1,
  props: Q_(),
  setup(e, t) {
    const {
      backgroundColorClasses: n,
      backgroundColorStyles: i
    } = Tt(oe(e, "color")), {
      roundedClasses: o
    } = _t(e), {
      t: s
    } = bl(), {
      textColorClasses: r,
      textColorStyles: l
    } = jt(oe(e, "textColor")), {
      themeClasses: a
    } = Nd(), {
      locationStyles: d
    } = ko(e, !0, (u) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(u) ? +(e.offsetY ?? 0) : ["left", "right"].includes(u) ? +(e.offsetX ?? 0) : 0));
    return ge(() => {
      const u = Number(e.content), c = !e.max || isNaN(u) ? e.content : u <= +e.max ? u : `${e.max}+`, [m, v] = xr(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return f(e.tag, Ce({
        class: ["v-badge", {
          "v-badge--bordered": e.bordered,
          "v-badge--dot": e.dot,
          "v-badge--floating": e.floating,
          "v-badge--inline": e.inline
        }, e.class]
      }, v, {
        style: e.style
      }), {
        default: () => {
          var g, h;
          return [f("div", {
            class: "v-badge__wrapper"
          }, [(h = (g = t.slots).default) == null ? void 0 : h.call(g), f(cn, {
            transition: e.transition
          }, {
            default: () => {
              var w, k;
              return [Nt(f("span", Ce({
                class: ["v-badge__badge", a.value, n.value, o.value, r.value],
                style: [i.value, l.value, e.inline ? {} : d.value],
                "aria-atomic": "true",
                "aria-label": s(e.label, u),
                "aria-live": "polite",
                role: "status"
              }, m), [e.dot ? void 0 : t.slots.badge ? (k = (w = t.slots).badge) == null ? void 0 : k.call(w) : e.icon ? f(We, {
                icon: e.icon
              }, null) : c]), [[Mn, e.modelValue]])];
            }
          })])];
        }
      });
    }), {};
  }
}), t0 = W({
  baseColor: String,
  bgColor: String,
  color: String,
  grow: Boolean,
  mode: {
    type: String,
    validator: (e) => !e || ["horizontal", "shift"].includes(e)
  },
  height: {
    type: [Number, String],
    default: 56
  },
  active: {
    type: Boolean,
    default: !0
  },
  ...Ln(),
  ...pe(),
  ...tn(),
  ...Sn(),
  ...bt(),
  ...Od({
    name: "bottom-navigation"
  }),
  ...je({
    tag: "header"
  }),
  ...Md({
    selectedClass: "v-btn--selected"
  }),
  ...Xe()
}, "VBottomNavigation"), n0 = le()({
  name: "VBottomNavigation",
  props: t0(),
  emits: {
    "update:active": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: i
    } = Nd(), {
      borderClasses: o
    } = Bn(e), {
      backgroundColorClasses: s,
      backgroundColorStyles: r
    } = Tt(oe(e, "bgColor")), {
      densityClasses: l
    } = wn(e), {
      elevationClasses: a
    } = En(e), {
      roundedClasses: d
    } = _t(e), {
      ssrBootStyles: u
    } = Fs(), c = y(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), m = nt(e, "active", e.active), {
      layoutItemStyles: v
    } = Td({
      id: e.name,
      order: y(() => parseInt(e.order, 10)),
      position: y(() => "bottom"),
      layoutSize: y(() => m.value ? c.value : 0),
      elementSize: c,
      active: m,
      absolute: oe(e, "absolute")
    });
    return Fd(e, Sl), Ii({
      VBtn: {
        baseColor: oe(e, "baseColor"),
        color: oe(e, "color"),
        density: oe(e, "density"),
        stacked: y(() => e.mode !== "horizontal"),
        variant: "text"
      }
    }, {
      scoped: !0
    }), ge(() => f(e.tag, {
      class: ["v-bottom-navigation", {
        "v-bottom-navigation--active": m.value,
        "v-bottom-navigation--grow": e.grow,
        "v-bottom-navigation--shift": e.mode === "shift"
      }, i.value, s.value, o.value, l.value, a.value, d.value, e.class],
      style: [r.value, v.value, {
        height: se(c.value)
      }, u.value, e.style]
    }, {
      default: () => [n.default && f("div", {
        class: "v-bottom-navigation__content"
      }, [n.default()])]
    })), {};
  }
}), i0 = W({
  inset: Boolean,
  ...Ff({
    transition: "bottom-sheet-transition"
  })
}, "VBottomSheet"), Ui = le()({
  name: "VBottomSheet",
  props: i0(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const i = nt(e, "modelValue");
    return ge(() => {
      const o = qn.filterProps(e);
      return f(qn, Ce(o, {
        contentClass: ["v-bottom-sheet__content", e.contentClass],
        modelValue: i.value,
        "onUpdate:modelValue": (s) => i.value = s,
        class: ["v-bottom-sheet", {
          "v-bottom-sheet--inset": e.inset
        }, e.class],
        style: e.style
      }), n);
    }), {};
  }
}), o0 = W({
  scrollable: Boolean,
  ...pe(),
  ...bn(),
  ...je({
    tag: "main"
  })
}, "VMain"), s0 = le()({
  name: "VMain",
  props: o0(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      dimensionStyles: i
    } = _n(e), {
      mainStyles: o
    } = oy(), {
      ssrBootStyles: s
    } = Fs();
    return ge(() => f(e.tag, {
      class: ["v-main", {
        "v-main--scrollable": e.scrollable
      }, e.class],
      style: [o.value, s.value, i.value, e.style]
    }, {
      default: () => {
        var r, l;
        return [e.scrollable ? f("div", {
          class: "v-main__scroller"
        }, [(r = n.default) == null ? void 0 : r.call(n)]) : (l = n.default) == null ? void 0 : l.call(n)];
      }
    })), {};
  }
}), r0 = {
  name: "EpubReader",
  components: {
    Settings: Hf,
    BookToc: Rf,
    Guest: Bf,
    UserCenter: Lf,
    BookComments: Vf
  },
  props: ["book_url", "display_url", "debug", "themes_css"],
  computed: {
    switch_theme_icon: function() {
      return ["white", "eyecare"].includes(this.settings.theme) ? "mdi-weather-night" : "mdi-weather-sunny";
    },
    switch_theme_text: function() {
      return ["white", "eyecare"].includes(this.settings.theme) ? "夜晚" : "白天";
    }
  },
  methods: {
    switch_theme: function() {
      ["white", "eyecare"].includes(this.settings.theme) ? (this.settings.app_theme = "dark", this.settings.theme_mode = "night", this.settings.theme = this.settings.theme_night || "grey") : (this.settings.app_theme = "light", this.settings.theme_mode = "day", this.settings.theme = this.settings.theme_day || "white"), this.rendition.themes.select(this.settings.theme), this.save_settings();
    },
    set_menu: function(e) {
      var t = e;
      this.menu.current_panel == t && this.menu.panels[t] === !0 && (t = "hide"), this.menu.value = t == "hide" ? void 0 : t, console.log("set menu = ", t, ", current menu.value=", this.menu.value), this.menu.current_panel = t, this.menu.show_navbar = !0;
      for (var n in this.menu.panels)
        this.menu.panels[n] = n == t;
    },
    save_settings: function() {
      localStorage.setItem("readerSettings", JSON.stringify(this.settings));
    },
    update_settings: function(e) {
      e.flow != this.settings.flow && (this.rendition.flow(e.flow), this.set_menu("hide"));
      for (const i in e)
        this.settings[i] = e[i];
      const t = e.theme_mode, n = "theme_" + t;
      if (this.settings[n] = this.settings.theme, this.rendition.themes.select(this.settings.theme), this.settings.app_theme = t == "day" ? "light" : "dark", e.brightness !== void 0) {
        const i = e.brightness / 100;
        document.getElementById("reader").style.filter = `brightness(${i})`;
      }
      e.font_size !== void 0 && this.rendition.themes.fontSize(e.font_size + "px"), this.save_settings();
    },
    on_click_toc: function(e) {
      console.log(e), this.set_menu("hide"), this.rendition.display(e.id);
    },
    on_mousedown: function(e) {
      this.mouse_down_time = /* @__PURE__ */ new Date();
    },
    on_mouseup: function(e) {
      /* @__PURE__ */ new Date() - this.mouse_down_time > 600 ? this.check_if_selected_content = !0 : this.check_if_selected_content = !1;
    },
    on_click_content: function(e) {
      if (!this.check_if_selected_content)
        return this.smart_click(e);
      setTimeout(() => {
        this.is_handlering_selected_content ? this.is_handlering_selected_content = !1 : this.smart_click(e);
      }, 300);
    },
    smart_click: function(e) {
      const t = e.view.frameElement.getBoundingClientRect(), n = document.getElementById("reader"), i = n.offsetWidth, o = n.offsetHeight, s = (e.clientX + t.x) % n.offsetWidth, r = (e.clientY + t.y) % n.offsetHeight;
      if (this.debug_click(s, r, i, o), this.is_toolbar_visible()) {
        this.hide_toolbar();
        return;
      }
      const l = i < this.wide_screen, a = l ? 3 : 5;
      s < i / a || l && r < o / a ? (console.log("<- prev page"), this.rendition.prev()) : s > i * (a - 1) / a || l && r > o * (a - 1) / a ? (console.log("-> next page"), this.rendition.next().then()) : (console.log("-- toggle menu"), this.menu.show_navbar = !this.menu.show_navbar);
    },
    bin_search: function(e, t, n) {
      for (var i = 0, o = e.length; i < o; ) {
        const r = Math.floor((i + o) / 2);
        if (r == i)
          break;
        const l = e[r];
        if (l.cfi === void 0) {
          if (l.href.indexOf("#") > 0) {
            const d = l.href.split("#")[1];
            l.elem = n.document.getElementById(d);
          } else
            l.elem = n.document.getElementsByTagName("p")[0];
          l.cfi = new ePub.CFI(l.elem, n.cfiBase), l.cfi = new ePub.CFI(l.cfi.toString());
        }
        const a = this.book.locations.epubcfi.compare(t, l.cfi);
        if (a == 0)
          return l;
        a < 0 && (o = r), a > 0 && (i = r);
      }
      const s = e[i];
      if (s.cfi === void 0) {
        if (s.href.indexOf("#") > 0) {
          const r = s.href.split("#")[1];
          s.elem = n.document.getElementById(r);
        } else
          s.elem = n.document.getElementsByTagName("p")[0];
        s.cfi = new ePub.CFI(s.elem, n.cfiBase);
      }
      return s;
    },
    find_same_href_in_toc_tree: function(e, t) {
      for (var n in e) {
        const i = e[n];
        if (i.href == t)
          return i;
        if (i.subitems.length > 0) {
          const o = this.find_same_href_in_toc_tree(i.subitems, t);
          if (o !== void 0)
            return o;
        }
      }
    },
    find_toc: function(e, t) {
      const n = new ePub.CFI(e.toString()), i = this.book.spine.get(t.sectionIndex), o = this.find_same_href_in_toc_tree(this.toc_items, i.href);
      if (console.log("got spine href in toc:", o), o !== void 0) {
        if (o.elem === void 0) {
          const r = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
          for (let a of r) {
            const d = t.document.getElementsByTagName(a);
            if (d.length > 0) {
              o.elem = d[0];
              break;
            }
          }
          const l = new ePub.CFI(o.elem, t.cfiBase);
          o.cfi = new ePub.CFI(l.toString());
        }
        var s = o;
        return o.subitems.length > 0 && (s = this.bin_search(o.subitems, n, t), this.book.locations.epubcfi.compare(n, s.cfi) < 0 && (s = o)), console.log("find_toc = ", s), s;
      }
    },
    count_distinct_between: function(e, t) {
      for (var n = t; n.parentElement != e.parentNode; )
        n = n.parentElement;
      let i = 0, o = e;
      for (; o && o !== n; ) {
        const s = o.nodeName.toUpperCase();
        if ((s === "P" || s[0] === "H") && i++, o.firstChild)
          o = o.firstChild;
        else if (o.nextSibling)
          o = o.nextSibling;
        else {
          for (; !o.nextSibling && o.parentNode; )
            o = o.parentNode;
          o = o.nextSibling;
        }
      }
      return i;
    },
    hide_toolbar: function() {
      this.toolbar_left = -999;
    },
    show_toolbar: function(e, t) {
      console.log("show toolbar at rect", e, " from iframe rect", t);
      const n = document.getElementById("comments-toolbar");
      this.toolbar_left = e.left + t.x;
      const i = e.top + t.y, o = e.bottom + t.y;
      i >= n.offsetHeight + 64 ? this.toolbar_top = i - n.offsetHeight - 12 : this.toolbar_top = o + 12;
    },
    is_toolbar_visible: function() {
      return this.toolbar_left > 0;
    },
    on_select_content: function(e, t) {
      console.log("on selectd", e, t), this.is_handlering_selected_content = !0;
      const n = this.rendition.getRange(e);
      for (var i = n.startContainer.nodeType === Node.TEXT_NODE ? n.startContainer.parentElement : n.startContainer; i.nodeName.toUpperCase() != "P" && i.nodeName.toUpperCase()[0] != "H"; )
        i = i.parentElement;
      console.log("selected elem =", i);
      const o = new ePub.CFI(i, t.cfiBase), s = this.find_toc(o, t);
      console.log("cfi = ", o, "toc =", s);
      const r = this.count_distinct_between(s.elem, i);
      console.log("selected segment_id = ", r), this.selected_location = {
        toc: s,
        cfi: o,
        contents: t,
        segment_id: r
      };
      const l = this.rendition.views()._views.filter((a) => a.index == t.sectionIndex)[0];
      this.show_toolbar(i.getBoundingClientRect(), l.iframe.getBoundingClientRect());
    },
    on_click_toolbar_comments: function() {
      console.log("点击发表评论按钮", this.selected_location);
      const e = this.selected_location;
      this.hide_toolbar(), this.show_selected_comments(e.toc, e.segment_id, e.cfi);
    },
    on_keyup: function(e) {
      const t = e.keyCode || e.which;
      (t == 37 || t == 38) && this.rendition.prev(), (t == 39 || t == 40) && this.rendition.next();
    },
    debug_click: function(e, t, n, i) {
      if (console.log("click at", e, t, n, i), !this.is_debug_click) return;
      e = e - 10, t = t - 10;
      const o = document.createElement("div");
      o.classList.add("dot"), o.style.left = `${e}px`, o.style.top = `${t}px`, document.body.appendChild(o), setTimeout(() => {
        document.body.removeChild(o);
      }, 2e3);
    },
    debug_signals: function() {
      if (this.is_debug_signal) {
        var e = ["click", "selected", "touchstart", "touchend", "touchmove"], e = ["added", "attach", "attached", "axis", "changed", "detach", "displayed", "displayerror", "expand", "hidden", "layout", "linkClicked", "loaderror", "locationChanged", "markClicked", "openFailed", "orientationchange", "relocated", "removed", "rendered", "resize", "resized", "scroll", "scrolled", "selected", "selectedRange", "shown", "started", "updated", "writingMode", "mouseup", "mousedown", "mousemove", "click", "touchend", "touchstart", "touchmove"];
        e.forEach((t) => {
          this.rendition.on(t, (n) => {
            this.alert_msg = t, console.log("rendition signal:", t, n);
          });
        });
      }
    },
    init_listeners: function() {
      document.addEventListener("keyup", this.on_keyup), this.rendition.on("keyup", this.on_keyup), this.rendition.on("click", this.on_click_content), this.rendition.on("selected", this.on_select_content), this.rendition.on("locationChanged", this.on_location_changed), this.rendition.on("mousedown", this.on_mousedown), this.rendition.on("mouseup", this.on_mouseup), this.debug_signals();
    },
    init_themes: function() {
      console.log("load themes from:", this.themes_css), this.rendition.themes.register("white", this.themes_css), this.rendition.themes.register("dark", this.themes_css), this.rendition.themes.register("grey", this.themes_css), this.rendition.themes.register("brown", this.themes_css), this.rendition.themes.register("eyecare", this.themes_css), this.rendition.themes.select(this.settings.theme);
    },
    on_add_review: function(e) {
      const t = this.comments_location, n = {
        book_id: this.book_id,
        chapter_name: t.toc.label.trim(),
        chapter_id: t.toc.chapter_id,
        segment_id: t.segment_id,
        cfi: t.cfi.toString(),
        content: e,
        type: 1
      };
      console.log("add review = ", n), this.$backend("/api/review/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(n)
      }).then((i) => {
        i.err == "ok" && (this.comments.push(i.data), alert("评论成功")), console.log("add review rsp = ", i);
      });
    },
    on_location_changed_old: function(e) {
      const t = this.rendition.getContents();
      [e.start, e.end].forEach((n) => {
        console.log("handle location ", n);
        const i = this.book.spine.get(n), o = t.filter((l) => l.cfiBase == i.cfiBase)[0], s = new ePub.CFI(n), r = this.find_toc(s, o, i.href);
        this.load_comments_summary(o, r);
      });
    },
    on_location_changed: function(e) {
      const t = this.rendition.currentLocation();
      if (t && t.end && t.end.percentage !== void 0)
        this.current_toc_progress = Math.round(t.end.percentage * 100) / 100 + "%";
      else {
        const r = t.start.spinePos, l = this.book.spine.length, a = l > 0 ? Math.round(r / l * 1e4) / 100 : 0;
        this.current_toc_progress = a + "%";
      }
      const n = new ePub.CFI(e.start), i = this.rendition.getContents(), o = this.book.spine.get(n.spinePos), s = i.filter((r) => r.cfiBase == o.cfiBase);
      if (s && s.length > 0) {
        const r = s[0], l = r.document.getElementsByTagName("p")[0];
        if (l) {
          const a = new ePub.CFI(l, o.cfiBase), d = this.find_toc(a, r);
          d && this.current_toc_title !== d.label && (this.current_toc_title = d.label, this.load_comments_summary(r, d));
        }
      }
    },
    load_comments_summary: function(e, t) {
      if (console.log("load_comments_summary at ", e, t), t === void 0) {
        console.log("!! 加载章评错误，章节信息为空");
        return;
      }
      if (t.load_time !== void 0 && /* @__PURE__ */ new Date() - t.load_time < this.comments_refresh_time)
        return;
      t.load_time = /* @__PURE__ */ new Date();
      const n = t.label.trim();
      var i = `/api/review/summary?book_id=${this.book_id}&chapter_name=${n}`;
      this.$backend(i).then((o) => {
        t.load_time = /* @__PURE__ */ new Date(), t.summary = {}, t.chapter_id = o.data.chapter_id, o.data.list.forEach((s) => {
          t.summary[s.segmentId] = s, t.icons_rendered = !1;
        });
      }).catch(function(o) {
        console.error("请求过程中出现错误：", o);
      }).finally(() => {
        this.add_comment_icons(e, t);
      });
    },
    add_comment_icons: function(e, t) {
      if (console.log("添加评论图标和计数器：", t.label.trim()), !!this.settings.show_comments) {
        var n = 0;
        for (var i in t.summary)
          i > n && (n = i);
        for (var o = 0, s = t.elem; o <= n && s; ) {
          const r = s.nodeName.toUpperCase();
          if ((r === "P" || r[0] === "H") && (this.add_icon_into_paragraph(e, s, o, t), o++), s.firstChild)
            s = s.firstChild;
          else if (s.nextSibling)
            s = s.nextSibling;
          else {
            for (; !s.nextSibling && s.parentNode; )
              s = s.parentNode;
            s = s.nextSibling;
          }
        }
        t.icons_rendered = !0;
      }
    },
    add_icon_into_paragraph: function(e, t, n, i) {
      const o = i.summary[n];
      if (o === void 0 || (console.log("添加评论图标：", n, t, o), t.querySelector(".comment-icon")))
        return;
      const s = new ePub.CFI(t, e.cfiBase).toString(), r = o.reviewNum, l = o.is_hot ? "hot-comment" : "", d = e.document.createElement("div");
      d.className = `comment-icon ${l}`, d.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        ${r > 0 ? `<span class="comment-count">${r}</span>` : ""}
      `, (t.style.position === "" || t.style.position === "static") && (t.style.position = "relative"), t.appendChild(d), d.addEventListener("click", (u) => {
        u.stopPropagation(), console.log("点击评论按钮", i.chapter_id, n, s), this.show_selected_comments(i, n, s);
      });
    },
    show_selected_comments: function(e, t, n) {
      if (this.comments = [], this.comments_location = {
        toc: e,
        cfi: n,
        segment_id: t
      }, e.chapter_id === void 0) {
        this.set_menu("comments");
        return;
      }
      const i = `/api/review/list?book_id=${this.book_id}&chapter_id=${e.chapter_id}&segment_id=${t}&cfi=${n}`;
      this.$backend(i).then((o) => {
        this.comments = o.data.list, this.set_menu("comments");
      });
    },
    on_login_user: function(e) {
      this.user = e, this.is_login = !0;
    },
    retryLoad: function() {
      this.showTimeoutDialog = !1, this.loading = !0, this.book = ePub(this.book_url), this.rendition = this.book.renderTo("reader", {
        manager: "continuous",
        flow: this.settings.flow,
        width: "100%",
        height: "100%"
      }), this.init_listeners(), this.init_themes(), this.book.ready.then(() => {
        const e = localStorage.getItem("lastReadPosition");
        return this.rendition.display(e || this.display_url);
      }).then(() => {
        clearTimeout(this.loadingTimeout), this.loading = !1;
      }).catch((e) => {
        clearTimeout(this.loadingTimeout), console.error("加载电子书失败:", e), this.loading = !1, this.showTimeoutDialog = !0;
      }), this.loadingTimeout = setTimeout(() => {
        this.loading && (console.warn("电子书加载超时，显示提示框"), this.loading = !1, this.showTimeoutDialog = !0);
      }, 1e4);
    }
  },
  mounted: function() {
    const e = document.createElement("link");
    e.rel = "stylesheet", e.type = "text/css", e.href = this.themes_css, document.head.appendChild(e);
    const t = localStorage.getItem("readerSettings");
    t && (this.settings = JSON.parse(t), console.log("加载设置：", t)), this.is_debug_signal = this.debug, this.is_debug_click = this.debug, this.loadingTimeout = setTimeout(() => {
      this.loading && (console.warn("电子书加载超时，显示提示框"), this.loading = !1, this.showTimeoutDialog = !0);
    }, 1e4), this.loading = !0, this.$backend("/api/review/me?count=true").then((i) => {
      i.err == "user.need_login" ? this.is_login = !1 : i.err == "ok" && (this.unread_count = i.data.count);
    }).catch((i) => {
      console.error("获取未读消息数失败:", i);
    }), this.$backend("/api/user/info").then((i) => {
      i.err == "ok" && (this.user = i.data);
    }).catch((i) => {
      console.error("获取用户信息失败:", i);
    }), this.book = ePub(this.book_url), this.rendition = this.book.renderTo("reader", {
      manager: "continuous",
      flow: this.settings.flow,
      width: "100%",
      height: "100%"
      //snap: true
    }), this.book.loaded.metadata.then((i) => {
      console.log(i), this.book_meta = i, this.book_title = i.title;
      const o = `/api/review/book?title=${this.book_title}`;
      this.$backend(o).then((s) => {
        s.err == "ok" && (this.book_id = s.data.id);
      }).catch((s) => {
        console.error("获取书籍ID失败:", s);
      });
    }).catch((i) => {
      console.error("加载书籍元数据失败:", i);
    }), this.book.loaded.navigation.then((i) => {
      this.toc_items = i.toc;
    }).catch((i) => {
      console.error("加载目录失败:", i);
    }), this.init_listeners(), this.init_themes(), this.rendition.on("relocated", (i) => {
      localStorage.setItem("lastReadPosition", i.start.cfi);
    }), this.book.ready.then(() => {
      const i = localStorage.getItem("lastReadPosition");
      return this.rendition.display(i || this.display_url);
    }).then(() => {
      clearTimeout(this.loadingTimeout), this.loading = !1;
      const i = this.settings.brightness / 100;
      document.getElementById("reader").style.filter = `brightness(${i})`, this.rendition.themes.fontSize(this.settings.font_size + "px");
    }).catch((i) => {
      clearTimeout(this.loadingTimeout), console.error("加载电子书失败:", i), this.loading = !1, this.showTimeoutDialog = !0;
    });
  },
  data: () => ({
    loading: !0,
    book: null,
    settings: {
      flow: "paginated",
      // flow: "scrolled",
      font_size: 18,
      brightness: 100,
      theme: "white",
      theme_mode: "day",
      theme_day: "white",
      theme_night: "grey",
      show_comments: !0,
      app_theme: "light"
    },
    wide_screen: 1e3,
    // 宽屏尺寸
    comments_refresh_time: 10 * 60 * 100,
    // 10min
    user: null,
    is_login: !0,
    book_title: "",
    book_meta: null,
    book_id: 0,
    alert_msg: "秉烛夜读",
    rendition: null,
    auto_close: !1,
    menu: {
      show_navbar: !0,
      current_panel: "hide",
      value: "",
      panels: {
        toc: !1,
        more: !1,
        settings: !1,
        comments: !1,
        ai: !1
      }
    },
    theme_mode: "day",
    toc_items: [],
    comments: [],
    comments_location: {},
    // 评论内容的位置
    selected_location: {},
    // 选中内容的位置
    current_toc_title: "",
    current_toc_progress: "",
    toolbar_left: -999,
    toolbar_top: 0,
    is_debug_signal: !1,
    is_debug_click: !1,
    unread_count: 0,
    is_handlering_selected_content: !1,
    check_if_selected_content: !1,
    showTimeoutDialog: !1
  })
}, l0 = {
  id: "status-bar-left",
  class: "align-start"
}, a0 = {
  id: "status-bar-right",
  class: "align-end"
}, u0 = { class: "progress-bar-container" };
function c0(e, t, n, i, o, s) {
  const r = Hf, l = Rf, a = Bf, d = Lf, u = Vf;
  return _e(), Ne(W_, {
    theme: e.settings.app_theme,
    "full-height": "",
    density: "compact"
  }, {
    default: E(() => [
      e.menu.show_navbar ? (_e(), Ne(J_, {
        key: 0,
        density: "compact"
      }, {
        prepend: E(() => [
          f(fe, { icon: "" }, {
            default: E(() => [
              f(We, null, {
                default: E(() => [
                  ie(ft(e.is_debug_signal ? "mdi-arrow-left" : "mdi-candle"), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: E(() => [
          ie(" " + ft(e.is_debug_signal ? e.alert_msg : e.book_title) + " ", 1),
          f(af),
          f(fe, { icon: "" }, {
            default: E(() => [
              f(We, null, {
                default: E(() => t[15] || (t[15] = [
                  ie("mdi-dots-vertical")
                ])),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : pi("", !0),
      f(n0, {
        modelValue: e.menu.value,
        "onUpdate:modelValue": t[4] || (t[4] = (c) => e.menu.value = c),
        active: e.menu.show_navbar,
        "z-index": "2599"
      }, {
        default: E(() => [
          f(fe, {
            value: "toc",
            onClick: t[0] || (t[0] = (c) => s.set_menu("toc"))
          }, {
            default: E(() => [
              f(We, null, {
                default: E(() => t[16] || (t[16] = [
                  ie("mdi-book-open-variant-outline")
                ])),
                _: 1
              }),
              t[17] || (t[17] = Ee("span", null, "目录", -1))
            ]),
            _: 1
          }),
          f(fe, { onClick: s.switch_theme }, {
            default: E(() => [
              f(We, null, {
                default: E(() => [
                  ie(ft(s.switch_theme_icon), 1)
                ]),
                _: 1
              }),
              Ee("span", null, ft(s.switch_theme_text), 1)
            ]),
            _: 1
          }, 8, ["onClick"]),
          f(fe, {
            value: "settings",
            onClick: t[1] || (t[1] = (c) => s.set_menu("settings"))
          }, {
            default: E(() => [
              f(We, null, {
                default: E(() => t[18] || (t[18] = [
                  ie("mdi-cog")
                ])),
                _: 1
              }),
              t[19] || (t[19] = Ee("span", null, "设置", -1))
            ]),
            _: 1
          }),
          f(fe, {
            value: "more",
            onClick: t[2] || (t[2] = (c) => s.set_menu("more"))
          }, {
            default: E(() => [
              e.unread_count ? (_e(), Ne(e0, {
                key: 0,
                color: "error",
                content: e.unread_count
              }, {
                default: E(() => [
                  f(We, null, {
                    default: E(() => t[20] || (t[20] = [
                      ie("mdi-account-circle-outline")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["content"])) : (_e(), Ne(We, { key: 1 }, {
                default: E(() => t[21] || (t[21] = [
                  ie("mdi-account-circle-outline")
                ])),
                _: 1
              })),
              t[22] || (t[22] = Ee("span", null, "用户", -1))
            ]),
            _: 1
          }),
          f(fe, {
            value: "ai",
            onClick: t[3] || (t[3] = (c) => s.set_menu("ai"))
          }, {
            default: E(() => [
              f(We, null, {
                default: E(() => t[23] || (t[23] = [
                  ie("mdi-face-man-shimmer")
                ])),
                _: 1
              }),
              t[24] || (t[24] = Ee("span", null, "AI", -1))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "active"]),
      f(Ui, {
        class: "fixed mb-14",
        "max-height": "90%",
        modelValue: e.menu.panels.settings,
        "onUpdate:modelValue": t[5] || (t[5] = (c) => e.menu.panels.settings = c),
        contained: "",
        persistent: "",
        "z-index": "234"
      }, {
        default: E(() => [
          f(r, {
            settings: e.settings,
            onUpdate: s.update_settings
          }, null, 8, ["settings", "onUpdate"])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      f(Ui, {
        class: "fixed mb-14",
        "max-height": "90%",
        modelValue: e.menu.panels.toc,
        "onUpdate:modelValue": t[6] || (t[6] = (c) => e.menu.panels.toc = c),
        contained: "",
        "close-on-content-click": "",
        "z-index": "234"
      }, {
        default: E(() => [
          f(l, {
            meta: e.book_meta,
            toc_items: e.toc_items,
            "onClick:select": s.on_click_toc
          }, null, 8, ["meta", "toc_items", "onClick:select"])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      f(Ui, {
        class: "fixed mb-14",
        "max-height": "90%",
        modelValue: e.menu.panels.more,
        "onUpdate:modelValue": t[8] || (t[8] = (c) => e.menu.panels.more = c),
        contained: "",
        "z-index": "234"
      }, {
        default: E(() => [
          e.user ? (_e(), Ne(d, {
            key: 1,
            messages: e.comments,
            user: e.user,
            onUpdate: s.on_login_user,
            onLogout: t[7] || (t[7] = (c) => e.user = null)
          }, null, 8, ["messages", "user", "onUpdate"])) : (_e(), Ne(a, {
            key: 0,
            onLogin: s.on_login_user
          }, null, 8, ["onLogin"]))
        ]),
        _: 1
      }, 8, ["modelValue"]),
      f(Ui, {
        class: "fixed mb-14",
        "max-height": "90%",
        modelValue: e.menu.panels.comments,
        "onUpdate:modelValue": t[10] || (t[10] = (c) => e.menu.panels.comments = c),
        contained: "",
        "z-index": "234"
      }, {
        default: E(() => [
          f(u, {
            login: e.is_login,
            comments: e.comments,
            onClose: t[9] || (t[9] = (c) => s.set_menu("hide")),
            onAdd_review: s.on_add_review
          }, null, 8, ["login", "comments", "onAdd_review"])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      f(Ui, {
        class: "fixed mb-14",
        "max-height": "90%",
        modelValue: e.menu.panels.ai,
        "onUpdate:modelValue": t[11] || (t[11] = (c) => e.menu.panels.ai = c),
        contained: "",
        "z-index": "234"
      }, {
        default: E(() => [
          f(Mt, { title: "开发中" })
        ]),
        _: 1
      }, 8, ["modelValue"]),
      Ee("div", {
        id: "comments-toolbar",
        style: Qi(`left: ${e.toolbar_left}px; top: ${e.toolbar_top}px;`)
      }, [
        f(Rr, {
          density: "compact",
          border: "",
          dense: "",
          floating: "",
          elevation: "10",
          rounded: ""
        }, {
          default: E(() => [
            f(fe, { onClick: s.on_click_toolbar_comments }, {
              default: E(() => t[25] || (t[25] = [
                ie("发段评")
              ])),
              _: 1
            }, 8, ["onClick"]),
            f(fn, { vertical: "" }),
            f(fe, null, {
              default: E(() => t[26] || (t[26] = [
                ie("从这里听")
              ])),
              _: 1
            }),
            f(fn, { vertical: "" }),
            f(fe, null, {
              default: E(() => t[27] || (t[27] = [
                ie("复制")
              ])),
              _: 1
            }),
            f(fn, { vertical: "" }),
            f(fe, null, {
              default: E(() => t[28] || (t[28] = [
                ie("反馈")
              ])),
              _: 1
            })
          ]),
          _: 1
        })
      ], 4),
      f(s0, {
        id: "main",
        class: "pa-0"
      }, {
        default: E(() => [
          f(Br, {
            modelValue: e.loading,
            "onUpdate:modelValue": t[12] || (t[12] = (c) => e.loading = c),
            "z-index": "auto",
            class: "align-center justify-center",
            persistent: ""
          }, {
            default: E(() => [
              f(Rd, {
                indeterminate: "",
                size: "64",
                color: "primary"
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          f(qn, {
            modelValue: e.showTimeoutDialog,
            "onUpdate:modelValue": t[14] || (t[14] = (c) => e.showTimeoutDialog = c),
            "max-width": "500px"
          }, {
            default: E(() => [
              f(Mt, null, {
                default: E(() => [
                  f(wi, { class: "text-h5 text-center" }, {
                    default: E(() => t[29] || (t[29] = [
                      ie("加载超时")
                    ])),
                    _: 1
                  }),
                  f(xi, { class: "text-center" }, {
                    default: E(() => t[30] || (t[30] = [
                      ie(" 电子书加载超时，可能是网络问题或文件格式不支持。 ")
                    ])),
                    _: 1
                  }),
                  f(Ni, { class: "justify-center" }, {
                    default: E(() => [
                      f(fe, {
                        color: "primary",
                        variant: "text",
                        onClick: t[13] || (t[13] = (c) => e.showTimeoutDialog = !1)
                      }, {
                        default: E(() => t[31] || (t[31] = [
                          ie(" 关闭 ")
                        ])),
                        _: 1
                      }),
                      f(fe, {
                        color: "primary",
                        variant: "flat",
                        onClick: s.retryLoad
                      }, {
                        default: E(() => t[32] || (t[32] = [
                          ie(" 重试 ")
                        ])),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          Ee("div", {
            id: "status-bar-top",
            class: eo(e.settings.theme)
          }, [
            Ee("div", l0, ft(e.current_toc_title), 1),
            Ee("div", a0, ft(e.current_toc_progress), 1)
          ], 2),
          t[33] || (t[33] = Ee("div", { id: "reader" }, null, -1)),
          Ee("div", {
            id: "status-bar-bottom",
            class: eo(e.settings.theme)
          }, [
            Ee("div", u0, [
              Ee("div", {
                class: "progress-bar",
                style: Qi({ width: e.current_toc_progress })
              }, null, 4)
            ])
          ], 2)
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["theme"]);
}
const d0 = /* @__PURE__ */ di(r0, [["render", c0]]), f0 = {
  name: "CandleReader",
  computed: {},
  mounted: function() {
  },
  props: {
    book_url: {
      type: String,
      required: !0
    },
    display_url: {
      type: String,
      required: !0
    },
    debug: {
      type: Boolean,
      default: !1
    },
    themes_css: {
      type: String,
      default: "theme.css"
    }
  },
  data: () => ({})
};
function m0(e, t, n, i, o, s) {
  const r = d0;
  return _e(), Ne(r, {
    book_url: n.book_url,
    display_url: n.display_url,
    debug: n.debug,
    themes_css: n.themes_css
  }, null, 8, ["book_url", "display_url", "debug", "themes_css"]);
}
const v0 = /* @__PURE__ */ di(f0, [["render", m0]]);
class g0 {
  constructor(t, n) {
    var i = "https://api.talebook.org";
    const o = Jg(v0, n);
    cy(o, {
      server: n.server || i
    }), o.mount(t);
  }
}
export {
  g0 as Reader
};
