import { resolveComponent, withCtx, unref, createVNode, useSSRContext, createSSRApp, h } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Head, createInertiaApp } from "@inertiajs/vue3";
import axios from "axios";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: { user: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Layout = resolveComponent("Layout");
      _push(ssrRenderComponent(_component_Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent2, _scopeId));
            _push2(`<h1${_scopeId}>Welcome</h1><p${_scopeId}>Hello , welcome to your first Inertia app</p>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Welcome" }),
              createVNode("h1", null, "Welcome"),
              createVNode("p", null, "Hello , welcome to your first Inertia app")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/GroupList/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const isServer = typeof window === "undefined";
if (!isServer) {
  window.axios = axios;
  window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
}
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/GroupList/Index.vue": __vite_glob_0_0 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin).mount(el);
    }
  })
);
