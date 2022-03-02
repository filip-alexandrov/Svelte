var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => U5Bidu5D,
  load: () => load
});
var import_index_13c0de55 = __toModule(require("../../../chunks/index-13c0de55.js"));
const load = async ({ params, fetch }) => {
  let id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
  const user = await userRes.json();
  return { props: { post, user } };
};
const U5Bidu5D = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let { user } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<h1>${(0, import_index_13c0de55.e)(post.title)}</h1>
<p>${(0, import_index_13c0de55.e)(post.body)}</p>
<p>- Written by <a sveltekit:prefetch${(0, import_index_13c0de55.a)("href", `/authors/${user.id}`, 0)}>${(0, import_index_13c0de55.e)(user.name)}</a></p>`;
});
