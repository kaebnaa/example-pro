module.exports = [
"[project]/app/subjects/[slug]/page.tsx [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/_5f8523b1._.js",
  "server/chunks/ssr/node_modules_lucide-react_dist_esm_icons_175e2cf0._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/app/subjects/[slug]/page.tsx [app-ssr] (ecmascript)");
    });
});
}),
];