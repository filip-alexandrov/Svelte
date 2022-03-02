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
  default: () => Routes,
  load: () => load
});
var import_index_13c0de55 = __toModule(require("../../chunks/index-13c0de55.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".posts.svelte-1hqrnsz{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;margin:30px 0}.post.svelte-1hqrnsz{border:1px solid #ddd;padding:10px;box-shadow:0 0 10px #eee}h2.svelte-1hqrnsz{margin:0}.link.svelte-1hqrnsz{text-align:right}@media screen and (max-width: 600px){.posts.svelte-1hqrnsz{display:grid;grid-template-columns:1fr;grid-gap:20px;margin:30px 0}}input.svelte-1hqrnsz{border:1px solid #ddd;padding:10px 20px;border-radius:5px}",
  map: null
};
const load = async ({ fetch }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { props: { posts } };
};
const Routes = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  let searchedPosts;
  let { posts } = $$props;
  let searchTerm = "";
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  searchedPosts = posts.filter((post) => {
    return post.title.includes(searchTerm) || post.body.includes(searchTerm);
  });
  return `<h1>Posts</h1>
<input type="${"text"}" placeholder="${"Search"}" class="${"svelte-1hqrnsz"}"${(0, import_index_13c0de55.a)("value", searchTerm, 0)}>

${searchedPosts.length ? `<div class="${"posts svelte-1hqrnsz"}">${(0, import_index_13c0de55.b)(searchedPosts, (item) => {
    return `<div class="${"post svelte-1hqrnsz"}"><h2 class="${"svelte-1hqrnsz"}">${(0, import_index_13c0de55.e)(item.title.substring(0, 30))}...</h2>
				<p>${(0, import_index_13c0de55.e)(item.body.substring(0, 120))}...</p>
				<p class="${"link svelte-1hqrnsz"}"><a sveltekit:prefetch${(0, import_index_13c0de55.a)("href", `/blog/${item.id}`, 0)}>Read More</a></p>
			</div>`;
  })}</div>` : `<p>No posts found with &quot;${(0, import_index_13c0de55.e)(searchTerm)}&quot;</p>`}`;
});
