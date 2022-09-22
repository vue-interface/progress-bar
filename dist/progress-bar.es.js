import { openBlock as t, createElementBlock as s, normalizeStyle as o, createElementVNode as m, normalizeClass as h, Fragment as f, createTextVNode as u, toDisplayString as c, createCommentVNode as v, renderSlot as d } from "vue";
const g = {
  props: {
    componentPrefix: String,
    variant: String,
    variantPrefix: String
  },
  computed: {
    variantClassPrefix() {
      return this.variantPrefix || this.componentPrefix;
    },
    hasVariantPrefix() {
      return this.variant && !!this.variant.match(
        new RegExp(`^${this.variantClassPrefix}`)
      );
    },
    variantClass() {
      return this.variant ? !this.variantClassPrefix || this.hasVariantPrefix ? this.variant : `${this.variantClassPrefix}-${this.variant}` : "";
    }
  }
};
const _ = (a, i) => {
  const e = a.__vccOpts || a;
  for (const [n, l] of i)
    e[n] = l;
  return e;
}, p = {
  name: "ProgressBar",
  mixins: [
    g
  ],
  props: {
    color: String,
    value: {
      type: Number,
      required: !0
    },
    height: String,
    label: [String, Boolean],
    striped: Boolean,
    animated: Boolean,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    variant: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    classes() {
      return {
        [this.variantClass]: !!this.variant,
        ...this.progressClasses
      };
    },
    variantClassPrefix() {
      return "bg";
    },
    offsetValue() {
      return this.value / this.max * 100;
    },
    progressClasses() {
      return {
        "progress-bar-striped": this.striped,
        "progress-bar-animated": this.animated
      };
    },
    styles() {
      return {
        width: `${this.offsetValue}%`,
        background: `${this.color} !important`
      };
    }
  }
}, x = ["aria-valuenow", "aria-valuemin", "aria-valuemax"], y = { key: 0 }, P = { key: 1 };
function b(a, i, e, n, l, r) {
  return t(), s("div", {
    class: "progress",
    style: o({ height: e.height })
  }, [
    m("div", {
      class: h(["progress-bar", r.classes]),
      role: "progressbar",
      style: o(r.styles),
      "aria-valuenow": r.offsetValue,
      "aria-valuemin": e.min,
      "aria-valuemax": e.max
    }, [
      e.label ? (t(), s("span", y, [
        e.label !== !0 ? (t(), s(f, { key: 0 }, [
          u(c(e.label), 1)
        ], 64)) : v("", !0),
        u(" " + c(r.offsetValue) + "% ", 1)
      ])) : (t(), s("span", P, [
        d(a.$slots, "default")
      ]))
    ], 14, x)
  ], 4);
}
const S = /* @__PURE__ */ _(p, [["render", b]]);
export {
  S as ProgressBar
};
