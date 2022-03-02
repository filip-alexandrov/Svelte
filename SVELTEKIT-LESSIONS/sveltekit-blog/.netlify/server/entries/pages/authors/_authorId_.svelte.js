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
  default: () => U5BauthorIdu5D,
  load: () => load
});
var import_index_13c0de55 = __toModule(require("../../../chunks/index-13c0de55.js"));
var _authorId__svelte_svelte_type_style_lang = "";
const css = {
  code: "li.svelte-1t81zvk{margin-bottom:10px}",
  map: null
};
const load = async ({ params, fetch }) => {
  const id = params.authorId;
  const [resUser, resPost] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
    fetch("https://jsonplaceholder.typicode.com/posts")
  ]);
  const user = await resUser.json();
  const allPosts = await resPost.json();

  const posts = allPosts.filter((post) => {
    return post.userId == user.id;
  });
  return { props: { user, posts } };
};
const U5BauthorIdu5D = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  let { posts } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<h1>${(0, import_index_13c0de55.e)(user.name)}</h1>
<i>${(0, import_index_13c0de55.e)(user.company.catchPhrase)}</i>
<p>${(0, import_index_13c0de55.e)(user.email)}</p>

<h2>Posts by ${(0, import_index_13c0de55.e)(user.name)}</h2>
<ul>${(0, import_index_13c0de55.b)(posts, (post) => {
    return `<li class="${"svelte-1t81zvk"}"><a sveltekit:prefetch${(0, import_index_13c0de55.a)("href", `/blog/${post.id}`, 0)}>${(0, import_index_13c0de55.e)(post.title)}</a>
		</li>`;
  })}
</ul>`;
});
