(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const sidebarSections = [
    {
        title: "Эхлэх",
        items: [
            {
                title: "Танилцуулга",
                href: "/"
            },
            {
                title: "Хичээлүүд",
                href: "/subjects"
            }
        ]
    },
    {
        title: "Веб Хөгжүүлэлт",
        items: [
            {
                title: "HTML",
                href: "/subjects/html"
            },
            {
                title: "CSS",
                href: "/subjects/css"
            },
            {
                title: "JavaScript",
                href: "/subjects/javascript"
            }
        ]
    },
    {
        title: "Backend Хөгжүүлэлт",
        items: [
            {
                title: "Node.js",
                href: "/subjects/nodejs"
            },
            {
                title: "Express.js",
                href: "/subjects/expressjs"
            }
        ]
    },
    {
        title: "Програмчлалын Хэл",
        items: [
            {
                title: "Python",
                href: "/subjects/python"
            },
            {
                title: "Python with AI",
                href: "/subjects/python-ai"
            },
            {
                title: "C++",
                href: "/subjects/cpp"
            }
        ]
    },
    {
        title: "Хувилбар Удирдлага",
        items: [
            {
                title: "GitHub",
                href: "/subjects/github"
            }
        ]
    }
];
function Sidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-border md:sticky md:block md:w-64 lg:w-72",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full py-6 pr-6 lg:py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "space-y-6",
                children: sidebarSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "mb-2 px-2 text-sm font-semibold tracking-tight text-foreground",
                                children: section.title
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: section.items.map((item)=>{
                                    const isActive = pathname === item.href;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors", isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"),
                                        children: [
                                            item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2",
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/sidebar.tsx",
                                                lineNumber: 82,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-1",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/sidebar.tsx",
                                                lineNumber: 83,
                                                columnNumber: 23
                                            }, this),
                                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "h-4 w-4 text-accent-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sidebar.tsx",
                                                lineNumber: 84,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/components/sidebar.tsx",
                                        lineNumber: 72,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sidebar.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        ]
                    }, section.title, true, {
                        fileName: "[project]/components/sidebar.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sidebar.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sidebar.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sidebar.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/code-block.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlock",
    ()=>CodeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CodeBlock({ code, language = "javascript" }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const copyToClipboard = async ()=>{
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    size: "icon",
                    variant: "ghost",
                    className: "h-8 w-8 bg-muted hover:bg-muted/80",
                    onClick: copyToClipboard,
                    children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4 text-green-500"
                    }, void 0, false, {
                        fileName: "[project]/components/code-block.tsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/code-block.tsx",
                        lineNumber: 25,
                        columnNumber: 68
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/code-block.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/code-block.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "bg-muted border border-border rounded-lg p-4 overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    className: "text-sm font-mono",
                    children: code
                }, void 0, false, {
                    fileName: "[project]/components/code-block.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/code-block.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            language && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 top-2 text-xs text-muted-foreground",
                children: language
            }, void 0, false, {
                fileName: "[project]/components/code-block.tsx",
                lineNumber: 31,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/code-block.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(CodeBlock, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = CodeBlock;
var _c;
__turbopack_context__.k.register(_c, "CodeBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/subjects/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubjectPage,
    "subjectsData",
    ()=>subjectsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$code$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/code-block.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quiz$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/quiz.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
// Mock data - In production, this would come from an API
const subjectsData = {
    html: {
        slug: "html",
        title: "HTML",
        icon: "🌐",
        description: "HyperText Markup Language - Вэб хуудасны үндэс суурь",
        sections: [
            {
                id: "introduction",
                title: "Танилцуулга",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 23,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `HTML буюу HyperText Markup Language нь вэб хуудасны бүтцийг тодорхойлоход хэрэглэгддэг markup хэл юм. HTML нь вэб хөгжүүлэлтийн үндэс бөгөөд бүх вэб хуудас HTML-ээр бичигддэг.

HTML элементүүд нь вэб хуудсанд текст, зураг, холбоос, хүснэгт болон бусад контентыг байршуулах боломжийг олгодог. Хөтөч нь HTML кодыг уншиж, хэрэглэгчид харагдах хуудсыг үүсгэдэг.

HTML-ийн анхны хувилбар нь 1993 онд гарсан бөгөөд одоо HTML5 хувилбар хамгийн сүүлийн стандарт болоод байна. HTML5 нь видео, аудио, график зэрэг орчин үеийн вэб функцуудыг дэмждэг.`
            },
            {
                id: "why",
                title: "Яагаад хэрэгтэй вэ",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 33,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**HTML суралцах шалтгаанууд:**

• Вэб хөгжүүлэлтийн үндэс суурь юм - Бүх вэб хуудас HTML ашигладаг
• Хамгийн түгээмэл ашигладаг технологи - Интернет дээрх бүх сайт
• Бусад вэб технологиудын (CSS, JavaScript) үндэс
• Карьерын өргөн боломж нээдэг - Вэб хөгжүүлэгч, Front-end developer
• Өөрийн вэбсайт, блог үүсгэх боломж
• Сурахад хялбар - Програмчлалын ур чадваргүй хүмүүст тохиромжтой
• Бусад технологиудтай хялбар нийцдэг`
            },
            {
                id: "concepts",
                title: "Үндсэн ойлголтууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 47,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**HTML Элементүүд:**
HTML элемент нь opening tag, контент, closing tag-аас бүрдэнэ.
Жишээ нь: <p>Энэ бол параграф</p>

**HTML Таг:**
HTML таг нь angle brackets (<>) хоорондох кодын хэсэг юм. Ихэнх тагууд хос (opening, closing) байдаг.

**HTML Атрибутууд:**
Атрибутууд нь элементүүдийн нэмэлт мэдээллийг агуулдаг:
- id: Элементийн өвөрмөц таних тэмдэг
- class: Элементийн ангилал (стайл хийхэд ашиглагдана)
- src: Зураг, скриптийн эх сурвалж
- href: Холбоосын хаяг
- alt: Зургийн тайлбар текст

**Семантик HTML:**
Семантик тагууд нь контентын утга санааг илэрхийлдэг:
- <header>: Хуудасны толгой хэсэг
- <nav>: Навигацийн цэс
- <main>: Үндсэн контент
- <article>: Бие даасан контент
- <section>: Контентын бүлэг
- <aside>: Хажуугийн контент
- <footer>: Хуудасны доод хэсэг

**Блок болон Inline элементүүд:**
- Блок элементүүд: Шинэ мөрөөс эхэлж бүтэн өргөн эзэлдэг (div, p, h1)
- Inline элементүүд: Контентын урсгалд байрладаг (span, a, img)`
            },
            {
                id: "resources",
                title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 80,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `HTML-ийг цаашид гүнзгий судлахын тулд дараах эх сурвалжуудыг ашиглаарай:

- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/)
- [W3C HTML Specification](https://www.w3.org/TR/html52/)

Эдгээр баримтжуулалтаас та:
- Form элементүүд ба валидаци
- Accessibility ба ARIA атрибутууд
- Media элементүүд (audio, video, track)
- SEO-д ээлтэй семантик бүтэц
зэргийг дэлгэрэнгүй суралцаж болно.`
            }
        ],
        codeExample: {
            title: "Жишээ код",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/app/subjects/[slug]/page.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            code: `<!DOCTYPE html>
<html lang="mn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="HTML-ийн дэлгэрэнгүй жишээ">
    <title>Миний Анхны HTML Хуудас</title>
</head>
<body>
    <header>
        <h1>Сайн уу! HTML-д тавтай морил!</h1>
        <nav>
            <ul>
                <li><a href="#home">Нүүр</a></li>
                <li><a href="#about">Бидний тухай</a></li>
                <li><a href="#contact">Холбоо барих</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <article>
                <h2>HTML гэж юу вэ?</h2>
                <p>HTML нь вэб хуудасны бүтцийг тодорхойлдог markup хэл юм.</p>
                <img src="/images/html-logo.png" alt="HTML лого" width="200">
            </article>
        </section>

        <section id="about">
            <h2>Бидний тухай</h2>
            <p>Бид <strong>Amjilt Cyber School</strong> сургалтын төв бөгөөд 
            <em>программчлал</em> сургадаг.</p>
            
            <h3>Сургалтууд:</h3>
            <ul>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C++</li>
            </ul>
        </section>

        <section id="contact">
            <h2>Холбоо барих</h2>
            <form action="/submit" method="POST">
                <label for="name">Нэр:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">И-мэйл:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Мессеж:</label>
                <textarea id="message" name="message" rows="4"></textarea>
                
                <button type="submit">Илгээх</button>
            </form>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Amjilt Cyber School. Бүх эрх хуулиар хамгаалагдсан.</p>
    </footer>
</body>
</html>`,
            language: "html"
        },
        exercises: [
            {
                title: "Анхан шатны дасгал",
                tasks: [
                    "Өөрийн хувийн мэдээлэл агуулсан HTML хуудас үүсгэх (нэр, нас, хобби)",
                    "Heading (h1-h6), paragraph, list (ul, ol) ашиглах",
                    "Зураг болон холбоос нэмэх (img, a тагууд)",
                    "HTML хүснэгт (table) ашиглан хичээлийн хуваарь үүсгэх"
                ]
            },
            {
                title: "Дунд шатны дасгал",
                tasks: [
                    "Семантик тагууд ашиглан блог хуудас үүсгэх (header, nav, main, article, footer)",
                    "HTML form элементүүд ашиглан бүртгэлийн форм үүсгэх",
                    "Хүснэгт ашиглан өгөгдөл харуулах (colspan, rowspan ашиглах)",
                    "Audio болон Video тагууд ашиглан мультимедиа контент нэмэх"
                ]
            },
            {
                title: "Дэвшилтэт дасгал",
                tasks: [
                    "Бүрэн functional хувийн portfolio вэбсайт үүсгэх",
                    "HTML5 шинэ элементүүдийг ашиглах (canvas, svg, details)",
                    "Accessible (хүртээмжтэй) вэб хуудас үүсгэх (ARIA атрибутууд)"
                ]
            }
        ],
        quiz: [
            {
                question: "HTML нь юу гэсэн утгатай вэ?",
                options: [
                    "HyperText Markup Language",
                    "HighText Machine Language",
                    "HyperText Modern Language",
                    "Home Tool Markup Language"
                ],
                correctAnswer: 0,
                explanation: "HTML нь HyperText Markup Language гэсэн утгатай бөгөөд вэб хуудасны бүтцийг тодорхойлдог markup хэл юм."
            },
            {
                question: "HTML документ ямар тагаар эхэлдэг вэ?",
                options: [
                    "<html>",
                    "<body>",
                    "<!DOCTYPE html>",
                    "<head>"
                ],
                correctAnswer: 2,
                explanation: "HTML5 документ заавал <!DOCTYPE html> зарлалаар эхлэх ёстой."
            },
            {
                question: "Хамгийн том heading таг аль нь вэ?",
                options: [
                    "<h6>",
                    "<h1>",
                    "<heading>",
                    "<h0>"
                ],
                correctAnswer: 1,
                explanation: "<h1> нь хамгийн том heading таг бөгөөд хуудасны үндсэн гарчигт ашигладаг."
            },
            {
                question: "Зураг оруулахад ямар таг хэрэглэдэг вэ?",
                options: [
                    "<image>",
                    "<img>",
                    "<picture>",
                    "<photo>"
                ],
                correctAnswer: 1,
                explanation: "<img> таг нь HTML-д зураг оруулахад хэрэглэгддэг стандарт таг юм."
            },
            {
                question: "Семантик таг биш нь аль нь вэ?",
                options: [
                    "<header>",
                    "<nav>",
                    "<div>",
                    "<footer>"
                ],
                correctAnswer: 2,
                explanation: "<div> нь семантик биш container таг бөгөөд ямар нэг утга санааг илэрхийлдэггүй. Харин header, nav, footer нь семантик тагууд."
            }
        ]
    },
    css: {
        slug: "css",
        title: "CSS",
        icon: "🎨",
        description: "Cascading Style Sheets - Вэб хуудасны загвар",
        sections: [
            {
                id: "introduction",
                title: "Танилцуулга",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 242,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `CSS буюу Cascading Style Sheets нь HTML элементүүдийн харагдах байдлыг тодорхойлдог stylesheet хэл юм. CSS нь өнгө, font, зай, зохион байгуулалт зэрэг харагдах байдлын бүх шинж чанарыг удирддаг.

CSS-ийн тусламжтайгаар HTML-ийн бүтэцтэй хуудсыг үзэсгэлэнтэй болгож чаддаг. Орчин үеийн вэб дизайныг CSS-гүйгээр төсөөлөх боломжгүй.`
            },
            {
                id: "why",
                title: "Яагаад хэрэгтэй вэ",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 250,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**CSS суралцах шалтгаанууд:**

• Вэб хуудсыг үзэсгэлэнтэй болгодог
• Хариуцлагатай дизайн (responsive design) үүсгэдэг
• Код засвар үйлчилгээг хялбар болгодог
• Олон хуудсанд нэг загварыг ашиглах боломжтой
• Хөдөлгөөн ба animation нэмэх боломжтой`
            },
            {
                id: "concepts",
                title: "Үндсэн ойлголтууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 262,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**CSS Селектор:**
HTML элементүүдийг сонгох арга (tag, class, id).

**CSS Шинж чанарууд:**
Өнгө, хэмжээ, зай, font зэрэг харагдах байдлын тохиргоо.

**Box Model:**
Margin, border, padding, content-ийн загвар.

**Flexbox ба Grid:**
Орчин үеийн layout системүүд.

**Media Queries:**
Янз бүрийн дэлгэцийн хэмжээнд тохирсон загвар.`
            },
            {
                id: "resources",
                title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 281,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `CSS-ийг илүү гүнзгий түвшинд судлахдаа дараах баримтжуулалт, заавруудыг ашиглаарай:

- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3C CSS Specifications](https://www.w3.org/Style/CSS/Overview.en.html)
- [web.dev - Responsive Design](https://web.dev/learn/design/)

Эдгээрээс дараах дэвшилтэт сэдвүүдийг судалж болно:
- CSS Grid, Flexbox-ийн нарийвчилсан боломжууд
- Responsive typography ба layout
- Transitions, transforms, animations
- CSS variables (custom properties) ба dark mode`
            }
        ],
        codeExample: {
            title: "Жишээ код",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/app/subjects/[slug]/page.tsx",
                lineNumber: 297,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            code: `/* Үндсэн CSS жишээ */

/* Tag selector */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

/* Class selector */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* ID selector */
#header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
    text-align: center;
}

/* Flexbox ашиглах */
.card-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.card {
    flex: 1;
    min-width: 300px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

/* Media query */
@media (max-width: 768px) {
    .card {
        min-width: 100%;
    }
}`,
            language: "css"
        },
        exercises: [
            {
                title: "Анхан шатны дасгал",
                tasks: [
                    "HTML хуудсандаа өнгө, font өөрчлөх",
                    "Class ба ID selector ашиглах",
                    "Box model-ийн margin, padding ашиглах"
                ]
            },
            {
                title: "Дунд шатны дасгал",
                tasks: [
                    "Flexbox ашиглан card layout үүсгэх",
                    "Hover эффект нэмэх",
                    "Responsive design үүсгэх (mobile, tablet, desktop)"
                ]
            }
        ],
        quiz: [
            {
                question: "CSS нь юу гэсэн утгатай вэ?",
                options: [
                    "Cascading Style Sheets",
                    "Computer Style Sheets",
                    "Creative Style System",
                    "Colorful Style Sheets"
                ],
                correctAnswer: 0,
                explanation: "CSS нь Cascading Style Sheets гэсэн утгатай бөгөөд HTML элементүүдийн загварыг тодорхойлдог."
            },
            {
                question: "Class selector хэрхэн бичигддэг вэ?",
                options: [
                    "#classname",
                    ".classname",
                    "*classname",
                    "@classname"
                ],
                correctAnswer: 1,
                explanation: "CSS-д class selector нь цэг (.) ашиглан бичигддэг. Жишээ нь: .container"
            },
            {
                question: "Flexbox-ийг идэвхжүүлэх шинж чанар аль нь вэ?",
                options: [
                    "display: block",
                    "display: flex",
                    "layout: flex",
                    "flex: true"
                ],
                correctAnswer: 1,
                explanation: "display: flex; гэж тохируулснаар элемент flex container болж flexbox layout идэвхждэг."
            }
        ]
    },
    javascript: {
        slug: "javascript",
        title: "JavaScript",
        icon: "⚡",
        description: "Интерактив вэб програмчлалын хэл",
        sections: [
            {
                id: "introduction",
                title: "Танилцуулга",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 401,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `JavaScript нь вэбийн програмчлалын хэл бөгөөд вэб хуудсыг интерактив болгох боломжийг олгодог. Энэ нь HTML, CSS-тай хамт вэб хөгжүүлэлтийн гурван үндсэн технологийн нэг юм.

JavaScript-ийн тусламжтайгаар та товч дарах, form илгээх, animation үүсгэх, серверт өгөгдөл илгээх зэрэг бүх интерактив үйлдлийг хийж чаддаг. Одоогийн вэб апликейшнууд бараг бүгд JavaScript ашигладаг.`
            },
            {
                id: "why",
                title: "Яагаад хэрэгтэй вэ",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 409,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**JavaScript суралцах шалтгаанууд:**

• Хамгийн түгээмэл програмчлалын хэл
• Front-end болон back-end хөгжүүлэлтэд ашигладаг
• Асар олон framework, library байдаг (React, Vue, Node.js)
• Интерактив вэб апликейшн үүсгэдэг
• Өндөр цалинтай мэргэжил`
            },
            {
                id: "concepts",
                title: "Үндсэн ойлголтууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 421,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**Хувьсагч (Variables):**
Өгөгдөл хадгалах (let, const, var).

**Өгөгдлийн төрөл:**
String, Number, Boolean, Array, Object гэх мэт.

**Функц (Functions):**
Дахин ашиглагдах код блок.

**DOM Manipulation:**
HTML элементүүдтэй ажиллах.

**Events:**
Хэрэглэгчийн үйлдэлд хариу үйлдэл үзүүлэх.

**Асинхрон програмчлал:**
Promises, async/await ашиглан өгөгдөл татах.`
            },
            {
                id: "resources",
                title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 443,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `JavaScript-ийг илүү сайн эзэмшихийн тулд дараах эх сурвалжуудыг ашиглаарай:

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ECMAScript Language Specification](https://tc39.es/ecma262/)
- [JavaScript.info сургалт](https://javascript.info/)

Судлах нэмэлт сэдвүүд:
- Modern ES6+ боломжууд (arrow functions, destructuring, modules)
- Error handling (try/catch), async/await, fetch API
- Browser APIs (localStorage, History API, Canvas)
- Functional programming ойлголтууд (map, filter, reduce)`
            }
        ],
        codeExample: {
            title: "Жишээ код",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/app/subjects/[slug]/page.tsx",
                lineNumber: 459,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            code: `// Хувьсагч зарлах
const name = 'Амжилт';
let age = 16;

// Функц үүсгэх
function greet(person) {
    return \`Сайн уу, \${person}!\`;
}

console.log(greet(name)); // Сайн уу, Амжилт!

// Array ашиглах
const subjects = ['HTML', 'CSS', 'JavaScript', 'Python'];

subjects.forEach(subject => {
    console.log(\`Би \${subject} сурч байна\`);
});

// DOM Manipulation
const button = document.querySelector('#myButton');

button.addEventListener('click', () => {
    document.querySelector('#output').textContent = 'Товч дарагдлаа!';
});

// Async/Await ашиглах
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Алдаа гарлаа:', error);
    }
}

// Object ашиглах
const student = {
    name: 'Болд',
    age: 17,
    subjects: ['Math', 'Physics'],
    introduce() {
        console.log(\`Намайг \${this.name} гэдэг, \${this.age} настай\`);
    }
};

student.introduce();`,
            language: "javascript"
        },
        exercises: [
            {
                title: "Анхан шатны дасгал",
                tasks: [
                    "Хувьсагч зарлаж консол руу хэвлэх",
                    "Энгийн функц бичиж дуудах",
                    "Array үүсгэж forEach ашиглах"
                ]
            },
            {
                title: "Дунд шатны дасгал",
                tasks: [
                    "Товч дарахад текст өөрчлөгдөх програм бичих",
                    "Form validation хийх",
                    "API-аас өгөгдөл татаж харуулах"
                ]
            }
        ],
        quiz: [
            {
                question: "JavaScript-д хувьсагч зарлахад ямар түлхүүр үг хэрэглэдэг вэ?",
                options: [
                    "var, let, const",
                    "int, float, string",
                    "variable, value",
                    "define, declare"
                ],
                correctAnswer: 0,
                explanation: "JavaScript-д var, let, const гэсэн түлхүүр үгсийг ашиглан хувьсагч зарладаг."
            },
            {
                question: "DOM нь юу гэсэн утгатай вэ?",
                options: [
                    "Document Object Model",
                    "Data Object Management",
                    "Digital Online Method",
                    "Direct Output Mechanism"
                ],
                correctAnswer: 0,
                explanation: "DOM (Document Object Model) нь HTML документыг JavaScript-ээр удирдах боломж олгодог интерфейс юм."
            },
            {
                question: "Event listener нэмэхэд ямар функц хэрэглэдэг вэ?",
                options: [
                    "attachEvent()",
                    "addEventListener()",
                    "addListener()",
                    "onEvent()"
                ],
                correctAnswer: 1,
                explanation: "addEventListener() функц нь элементэд event listener нэмэхэд хэрэглэгддэг стандарт арга юм."
            }
        ]
    },
    nodejs: {
        slug: "nodejs",
        title: "Node.js",
        icon: "💚",
        description: "JavaScript серверийн орчин",
        sections: [
            {
                id: "introduction",
                title: "Танилцуулга",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 559,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `Node.js нь Chrome V8 JavaScript хөдөлгүүр дээр суурилсан серверийн JavaScript runtime орчин юм. Node.js-ийг ашигласнаар та JavaScript хэлээр серверийн програм бичиж болно.

Node.js нь 2009 онд Ryan Dahl үүсгэсэн бөгөөд одоо хамгийн түгээмэл ашиглагддаг серверийн технологиудын нэг болсон. Netflix, PayPal, LinkedIn зэрэг том компаниуд Node.js ашигладаг.

Node.js-ийн гол давуу тал нь асинхрон, event-driven архитектур бөгөөд олон хэрэглэгчийг хүлээн авч чаддаг high-performance апликейшн үүсгэх боломжтой.`
            },
            {
                id: "why",
                title: "Яагаад хэрэгтэй вэ",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 569,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**Node.js суралцах шалтгаанууд:**

• Full-stack JavaScript хөгжүүлэгч болох - Front-end болон back-end аль алинд JavaScript
• Хурдан ба scalable апликейшн - Олон concurrent холболтыг боловсруулдаг
• NPM package ecosystem - 1 сая гаруй package ашиглах боломжтой
• Real-time апликейшн үүсгэх - Chat, gaming, collaboration tool
• Microservices архитектур үүсгэх
• Өндөр эрэлттэй ур чадвар - Олон компани Node.js хөгжүүлэгч хайж байдаг
• API болон REST services үүсгэх`
            },
            {
                id: "concepts",
                title: "Үндсэн ойлголтууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 583,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**Event-Driven Architecture:**
Node.js нь event emitter pattern ашигладаг. Event гарвал тухайн listener function ажиллана.

**Non-Blocking I/O:**
Node.js нь асинхрон I/O ажиллагаа гүйцэтгэдэг. Өгөгдөл уншихыг хүлээхгүйгээр дараагийн код ажиллана.

**Single-Threaded:**
Node.js нь нэг thread дээр ажилладаг боловч event loop-ийн тусламжтайгаар олон ажлыг зэрэг гүйцэтгэж чаддаг.

**Modules:**
Node.js дотор код бичихдээ modules ашиглан ангилдаг. CommonJS (require) болон ES Modules (import) хэрэглэдэг.

**NPM (Node Package Manager):**
Node.js-ийн package manager бөгөөд гаднаас бэлэн library татаж ашиглах боломжтой.

**Buffer:**
Binary өгөгдөлтэй ажиллахад ашиглагддаг Node.js-ийн тусгай класс.

**Streams:**
Том өгөгдөлтэй chunk-аар ажиллах механизм (Readable, Writable, Duplex, Transform).`
            },
            {
                id: "resources",
                title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 608,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `Node.js-ийг мэргэжлийн түвшинд ашиглахын тулд дараах баримтжуулалтыг тогтмол ашиглаарай:

- [Node.js Official Docs](https://nodejs.org/en/docs)
- [Node.js API Reference](https://nodejs.org/api/)
- [npm Registry](https://www.npmjs.com/)

Нэмэлтээр судлах сэдвүүд:
- Event loop ба call stack-ийн нарийвчилсан ажиллагаа
- Streams ба Buffer-уудыг ашиглан их хэмжээний өгөгдөл боловсруулах
- Cluster, worker threads ашиглан гүйцэтгэл сайжруулах
- Config, environment variables, logging ба monitoring`
            }
        ],
        codeExample: {
            title: "Жишээ код",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/app/subjects/[slug]/page.tsx",
                lineNumber: 624,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            code: `// Энгийн HTTP сервер үүсгэх
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Сайн уу! Node.js сервер!</h1>');
});

server.listen(3000, () => {
    console.log('Сервер 3000 порт дээр ажиллаж байна');
});

// File system ашиглах
const fs = require('fs');

// Файл унших (асинхрон)
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Алдаа:', err);
        return;
    }
    console.log('Файлын агуулга:', data);
});

// Файл бичих
fs.writeFile('output.txt', 'Сайн уу Node.js!', (err) => {
    if (err) throw err;
    console.log('Файл амжилттай хадгалагдлаа');
});

// Event Emitter ашиглах
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', (message) => {
    console.log('Event-д:', message);
});

myEmitter.emit('event', 'Сайн уу!');

// Modules үүсгэж ашиглах
// math.js файл
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : 'Тэгд хуваах боломжгүй'
};

// app.js файл
const math = require('./math');

console.log(math.add(5, 3)); // 8
console.log(math.multiply(4, 7)); // 28

// Асинхрон Promise ашиглах
const readFilePromise = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

// Async/Await ашиглах
async function processFile() {
    try {
        const data = await readFilePromise('data.txt');
        console.log('Өгөгдөл:', data);
    } catch (error) {
        console.error('Алдаа гарлаа:', error);
    }
}

processFile();`,
            language: "javascript"
        },
        exercises: [
            {
                title: "Анхан шатны дасгал",
                tasks: [
                    "Энгийн HTTP сервер үүсгэж 'Hello World' гэсэн мессеж харуулах",
                    "Файл унших, бичих програм бичих",
                    "Өөрийн модуль үүсгэж эксport/import хийх",
                    "Console-д өнгөтэй текст хэвлэх програм (chalk package ашиглах)"
                ]
            },
            {
                title: "Дунд шатны дасгал",
                tasks: [
                    "JSON файлаас өгөгдөл уншиж боловсруулах програм",
                    "Event Emitter ашиглан custom event system үүсгэх",
                    "CLI tool үүсгэх (command line arguments ашиглах)",
                    "Файлын системтэй ажиллах програм (folder үүсгэх, устгах)"
                ]
            },
            {
                title: "Дэвшилтэт дасгал",
                tasks: [
                    "Stream ашиглан том файл уншиж боловсруулах",
                    "Child process ашиглан өөр програм ажиллуулах",
                    "Cluster module ашиглан multi-core ашиглах програм",
                    "RESTful API үүсгэх (Express ашиглахгүйгээр цэвэр Node.js)"
                ]
            }
        ],
        quiz: [
            {
                question: "Node.js нь ямар хөдөлгүүр дээр суурилдаг вэ?",
                options: [
                    "SpiderMonkey",
                    "V8 Engine",
                    "JavaScriptCore",
                    "Chakra"
                ],
                correctAnswer: 1,
                explanation: "Node.js нь Google Chrome-ийн V8 JavaScript хөдөлгүүр дээр суурилдаг."
            },
            {
                question: "Node.js дээр package суулгахад ямар команд хэрэглэдэг вэ?",
                options: [
                    "npm install",
                    "node install",
                    "package install",
                    "get package"
                ],
                correctAnswer: 0,
                explanation: "npm install (эсвэл npm i) команд нь Node.js-д шаардлагатай package суулгахад хэрэглэгддэг."
            },
            {
                question: "Node.js-ийн асинхрон кодыг удирдахад юу хэрэглэдэг вэ?",
                options: [
                    "Callbacks, Promises, Async/Await",
                    "Threads",
                    "Loops",
                    "Timers"
                ],
                correctAnswer: 0,
                explanation: "Node.js-д асинхрон код бичихдээ callbacks, promises, болон async/await pattern ашигладаг."
            },
            {
                question: "Node.js-д файл унших module нь аль нь вэ?",
                options: [
                    "http",
                    "fs",
                    "path",
                    "os"
                ],
                correctAnswer: 1,
                explanation: "fs (File System) module нь Node.js-д файл унших, бичих үйлдлүүдэд хэрэглэгддэг."
            }
        ]
    },
    expressjs: {
        slug: "expressjs",
        title: "Express.js",
        icon: "🚀",
        description: "Node.js-ийн вэб апликейшн framework",
        sections: [
            {
                id: "introduction",
                title: "Танилцуулга",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 771,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `Express.js нь Node.js-ийн хамгийн алдартай вэб апликейшн framework юм. Express нь вэб сервер болон API үүсгэхэд хэрэгтэй олон хэрэгцээтэй функцуудыг хялбар хэлбэрээр өгдөг.

Express нь minimal ба уян хатан бөгөөд вэб ба mobile апликейшнүүдэд зориулсан robust функцууд олгодог. Express нь Node.js дээр суурилдаг учраас та бүх Node.js-ийн давуу талуудыг ашиглаж чадна.

Express.js-ийг IBM, Accenture, Uber зэрэг томоохон компаниуд production-д ашигладаг. Энэ нь RESTful API, MVC апликейшн, single page апликейшн үүсгэхэд маш тохиромжтой.`
            },
            {
                id: "why",
                title: "Яагаад хэрэгтэй вэ",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 781,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**Express.js суралцах шалтгаанууд:**

• Хурдан хөгжүүлэлт - Цэвэр Node.js-с хамаагүй хялбар
• Routing систем - URL болон HTTP method-уудыг удирдахад хялбар
• Middleware ecosystem - Олон бэлэн middleware package
• Template engine дэмжлэг - EJS, Pug, Handlebars зэрэг
• RESTful API үүсгэх - Standard REST architecture
• Database integration - MongoDB, PostgreSQL, MySQL зэрэгтэй хялбар холбогдоно
• Том community - Асуудалд хариулт хурдан олдоно
• Production-ready - Олон том компани ашигладаг найдвартай framework`
            },
            {
                id: "concepts",
                title: "Үндсэн ойлголтууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 796,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**Routing:**
Express дээр route үүсгэж янз бүрийн URL болон HTTP method-д хариу өгөх.
app.get(), app.post(), app.put(), app.delete() гэх мэт.

**Middleware:**
Request болон Response объектуудтай ажиллах функцууд. Middleware нь дараалалаар ажилладаг.
- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware

**Request & Response Objects:**
req нь client-аас ирсэн мэдээлэл агуулна (body, params, query, headers)
res нь client-д буцаах хариу илгээнэ (json, send, render, status)

**Template Engines:**
Динамик HTML хуудас үүсгэхэд ашиглагдана. EJS, Pug, Handlebars.

**Static Files:**
express.static() middleware ашиглан CSS, JS, зураг зэргийг serve хийнэ.

**Error Handling:**
Express дээр error handling middleware ашиглан алдааг барьж боловсруулна.

**Router:**
Express Router ашиглан route-уудыг модуляар хуваана.`
            },
            {
                id: "resources",
                title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 828,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `Express.js-ийг илүү гүнзгий судлахын тулд:

- [Express Official Website](https://expressjs.com/)
- [Express API Reference](https://expressjs.com/en/4x/api.html)

Нэмэлтээр судлах дэвшилтэт сэдвүүд:
- Authentication ба authorization (JWT, sessions, cookies)
- Request validation (celebrate, joi, express-validator)
- Security best practices (helmet, rate limiting, CORS)
- File upload, pagination, error handling patterns`
            }
        ],
        codeExample: {
            title: "Жишээ код",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/app/subjects/[slug]/page.tsx",
                lineNumber: 843,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            code: `// Express апп үүсгэх
const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // JSON body parser
app.use(express.static('public')); // Static файлууд

// Үндсэн route
app.get('/', (req, res) => {
    res.send('<h1>Сайн уу Express!</h1>');
});

// JSON хариу
app.get('/api/data', (req, res) => {
    res.json({ 
        message: 'Амжилттай', 
        data: [1, 2, 3, 4, 5] 
    });
});

// Route parameters
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ userId, name: 'Болд' });
});

// Query parameters
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.json({ searchTerm: query });
});

// POST request
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    console.log('Шинэ хэрэглэгч:', newUser);
    res.status(201).json({ 
        success: true, 
        user: newUser 
    });
});

// Middleware функц
const logger = (req, res, next) => {
    console.log(\`\${req.method} \${req.url}\`);
    next(); // Дараагийн middleware руу дамжуулах
};

app.use(logger);

// Router ашиглах
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.json({ users: ['Дорж', 'Болд', 'Сүх'] });
});

userRouter.get('/:id', (req, res) => {
    res.json({ id: req.params.id, name: 'Дорж' });
});

userRouter.post('/', (req, res) => {
    res.status(201).json({ message: 'Хэрэглэгч үүслээ' });
});

app.use('/api/users', userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Серверийн алдаа',
        message: err.message 
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Хуудас олдсонгүй' });
});

// Серверийг эхлүүлэх
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(\`Сервер http://localhost:\${PORT} дээр ажиллаж байна\`);
});`,
            language: "javascript"
        },
        exercises: [
            {
                title: "Анхан шатны дасгал",
                tasks: [
                    "Энгийн Express сервер үүсгэх (/, /about, /contact route-тай)",
                    "JSON API endpoint үүсгэх (хэрэглэгчдийн жагсаалт)",
                    "Static файл serve хийх (HTML, CSS, JS)",
                    "Route parameters ашиглан динамик route үүсгэх"
                ]
            },
            {
                title: "Дунд шатны дасгал",
                tasks: [
                    "CRUD API үүсгэх (Create, Read, Update, Delete)",
                    "Middleware ашиглан logger болон authentication үүсгэх",
                    "Express Router ашиглан модуляр route үүсгэх",
                    "Template engine (EJS) ашиглан динамик хуудас үүсгэх",
                    "Form өгөгдөл хүлээн авч боловсруулах"
                ]
            },
            {
                title: "Дэвшилтэт дасгал",
                tasks: [
                    "RESTful API үүсгэх (бүх HTTP method-тай)",
                    "JWT authentication систем нэмэх",
                    "File upload функц нэмэх (multer ашиглах)",
                    "MongoDB-тай холбож бодит database ашиглах",
                    "Error handling болон validation (express-validator)",
                    "API documentation (Swagger/OpenAPI)"
                ]
            }
        ],
        quiz: [
            {
                question: "Express.js нь юу дээр суурилдаг вэ?",
                options: [
                    "Python",
                    "Node.js",
                    "PHP",
                    "Ruby"
                ],
                correctAnswer: 1,
                explanation: "Express.js нь Node.js дээр суурилсан вэб апликейшн framework юм."
            },
            {
                question: "Express дээр GET route үүсгэхэд ямар функц хэрэглэдэг вэ?",
                options: [
                    "app.route()",
                    "app.get()",
                    "app.request()",
                    "app.fetch()"
                ],
                correctAnswer: 1,
                explanation: "app.get() функц нь GET HTTP method-тай route үүсгэхэд хэрэглэгддэг."
            },
            {
                question: "Middleware функцэд дараагийн middleware руу шилжихэд юу дууддаг вэ?",
                options: [
                    "continue()",
                    "next()",
                    "forward()",
                    "proceed()"
                ],
                correctAnswer: 1,
                explanation: "next() функцийг дуудсанаар Express дараагийн middleware руу шилжинэ. Дуудаагүй бол request зогсоно."
            },
            {
                question: "Express дээр JSON өгөгдөл parse хийхэд ямар middleware хэрэглэдэг вэ?",
                options: [
                    "express.json()",
                    "express.parser()",
                    "bodyParser.json()",
                    "json.parse()"
                ],
                correctAnswer: 0,
                explanation: "express.json() нь built-in middleware бөгөөд JSON өгөгдөлтэй request body-г parse хийдэг."
            },
            {
                question: "Static файл serve хийхэд ямар middleware хэрэглэдэг вэ?",
                options: [
                    "express.files()",
                    "express.static()",
                    "express.serve()",
                    "express.public()"
                ],
                correctAnswer: 1,
                explanation: "express.static() middleware нь CSS, JavaScript, зураг зэрэг static файлуудыг serve хийдэг."
            }
        ]
    },
    github: {
        slug: "github",
        title: "GitHub",
        icon: "🐙",
        description: "Кодын хамтын ажиллагааны платформ",
        sections: [
            {
                id: "introduction",
                title: "Танилцуулга",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1008,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `GitHub нь Git version control system ашигладаг кодын хадгалалт ба хамтын ажиллагааны платформ юм. Microsoft-ийн эзэмшдэг энэхүү платформ нь дэлхийн хамгийн том программистуудын нийгэмлэг болоод байна.

GitHub нь 2008 онд байгуулагдсан бөгөөд одоо 100 сая гаруй хэрэглэгчтэй болсон. Бүх том компаниуд болон хувиараа хөгжүүлэгчид GitHub ашигладаг. Linux, React, VS Code зэрэг алдартай төслүүд бүгд GitHub дээр байрладаг.

GitHub нь зөвхөн код хадгалах төдийгүй багаар ажиллах, code review хийх, төслийн менежмент хийх, CI/CD ажиллуулах зэрэг олон функцтэй.`
            },
            {
                id: "why",
                title: "Яагаад хэрэгтэй вэ",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1018,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**GitHub суралцах шалтгаанууд:**

• Мэргэжлийн портфолио - Ажил олоход таны GitHub profile чухал
• Хамтран ажиллах - Багийн гишүүдтэй кодоо хуваалцах
• Кодын түүх хадгалах - Бүх өөрчлөлтийг хянах, буцаах боломжтой
• Open source төслүүд - Дэлхийн аль ч төсөлд хувь нэмэр оруулах
• Backup - Кодоо найдвартай хадгалах
• Code review - Бусдын кодыг шалгах, сайжруулах
• Job opportunities - Ихэнх компаниуд GitHub profile харна
• Collaboration skills - Багаар ажиллах чадвар хөгжүүлнэ`
            },
            {
                id: "concepts",
                title: "Үндсэн ойлголтууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1033,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**Repository (Repo):**
Төслийн кодыг агуулсан folder. Public буюу Private байж болно.

**Commit:**
Кодын өөрчлөлтийг хадгалах үйлдэл. Commitын бүр тайлбар (message) байна.

**Branch:**
Кодын салаа. Main код өөрчлөлтгүй шинэ функц хөгжүүлэх боломжтой.

**Pull Request (PR):**
Өөрийн өөрчлөлтийг үндсэн кодод нэмэх хүсэлт. Бусад хүмүүс code review хийнэ.

**Merge:**
Branch-ийг үндсэн кодод нэгтгэх үйлдэл.

**Fork:**
Бусдын repository-г өөрийн account руу хуулах.

**Clone:**
Repository-г өөрийн компьютер руу татах.

**Issue:**
Асуудал эсвэл санал хэлэлцэх хэсэг.

**Git Commands:**
git clone, git add, git commit, git push, git pull, git branch гэх мэт командууд.

**.gitignore:**
Git-д хамруулахгүй байх файлуудын жагсаалт.

**README.md:**
Төслийн тайлбар, заавар агуулсан markdown файл.`
            },
            {
                id: "resources",
                title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1070,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `Git ба GitHub-ийг гүнзгий сурахад:

- [Pro Git Book (official)](https://git-scm.com/book/en/v2)
- [GitHub Docs](https://docs.github.com/)
- [Git Reference](https://git-scm.com/docs)

Нэмэлт сэдвүүд:
- Advanced branching стратеги (Git Flow, trunk-based)
- Rebasing, cherry-picking, interactive rebase
- Protected branches, CODEOWNERS, review rules
- GitHub Actions ашиглан CI/CD төсөл дээрээ нэмэх`
            }
        ],
        codeExample: {
            title: "Жишээ код",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/app/subjects/[slug]/page.tsx",
                lineNumber: 1086,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            code: `# Git үндсэн командууд

# Git тохируулах (анх удаа)
git config --global user.name "Таны Нэр"
git config --global user.email "tany-email@example.com"

# Repository үүсгэх
git init

# Эсвэл GitHub-аас татах
git clone https://github.com/username/repository.git

# Файлуудыг stage area руу нэмэх
git add index.html
git add .  # Бүх өөрчлөлтийг нэмэх

# Commit хийх
git commit -m "Анхны commit: HTML хуудас нэмлээ"

# Commit түүх харах
git log
git log --oneline  # Товч хэлбэрээр

# Remote repository нэмэх
git remote add origin https://github.com/username/repo.git

# GitHub руу push хийх
git push origin main

# GitHub-аас шинэчлэл татах
git pull origin main

# Branch үүсгэх
git branch feature-login
git checkout feature-login
# Эсвэл нэг командаар
git checkout -b feature-login

# Branch-ууд харах
git branch

# Main branch руу буцах
git checkout main

# Branch merge хийх
git merge feature-login

# Branch устгах
git branch -d feature-login

# Өөрчлөлтийн статус харах
git status

# Diff харах (өөрчлөлт юу байгааг)
git diff

# Commit-г буцаах
git revert <commit-hash>

# Сүүлийн commit-г засах
git commit --amend -m "Засварласан commit message"

# .gitignore файл жишээ
# node_modules/
# .env
# *.log
# dist/
# .DS_Store

# README.md файл жишээ
# Төслийн нэр

## Тайлбар
Энэ бол миний анхны GitHub төсөл юм.

## Суулгах заавар
\`\`\`bash
npm install
\`\`\`

## Ажиллуулах
\`\`\`bash
npm start
\`\`\`

## License
MIT`,
            language: "bash"
        },
        exercises: [
            {
                title: "Анхан шатны дасгал",
                tasks: [
                    "GitHub account үүсгэх",
                    "Анхны repository үүсгэх (public)",
                    "README.md файл нэмж commit хийх",
                    "Git command line ашиглан өөрчлөлт push хийх",
                    ".gitignore файл үүсгэх"
                ]
            },
            {
                title: "Дунд шатны дасгал",
                tasks: [
                    "Branch үүсгэж шинэ функц нэмэх",
                    "Pull Request үүсгэх",
                    "Бусдын repository-г fork хийж өөрчлөлт оруулах",
                    "GitHub Issues ашиглах",
                    "Өөрийн portfolio repository үүсгэх"
                ]
            },
            {
                title: "Дэвшилтэт дасгал",
                tasks: [
                    "Merge conflict шийдвэрлэх",
                    "GitHub Actions ашиглан CI/CD тохируулах",
                    "Git rebase ашиглах",
                    "Open source төсөлд contribute хийх",
                    "GitHub Pages ашиглан вэбсайт deploy хийх",
                    "Git hooks ашиглах"
                ]
            }
        ],
        quiz: [
            {
                question: "Git commit хийхээс өмнө ямар команд хэрэглэдэг вэ?",
                options: [
                    "git push",
                    "git add",
                    "git pull",
                    "git save"
                ],
                correctAnswer: 1,
                explanation: "git add команд нь файлуудыг staging area руу нэмдэг бөгөөд commit хийхээс өмнө заавал хийх ёстой."
            },
            {
                question: "GitHub-аас repository татахад ямар команд хэрэглэдэг вэ?",
                options: [
                    "git download",
                    "git clone",
                    "git copy",
                    "git fetch"
                ],
                correctAnswer: 1,
                explanation: "git clone команд нь GitHub дээрх repository-г өөрийн компьютер руу хуулж авдаг."
            },
            {
                question: "Branch үүсгэхэд ямар команд хэрэглэдэг вэ?",
                options: [
                    "git new branch",
                    "git branch <name>",
                    "git create <name>",
                    "git add branch"
                ],
                correctAnswer: 1,
                explanation: "git branch <name> гэж бичснээр шинэ branch үүсгэж болно."
            },
            {
                question: "Pull Request гэж юу вэ?",
                options: [
                    "Код татах хүсэлт",
                    "Өөрчлөлтийг нэгтгэх хүсэлт",
                    "Repository хуулах",
                    "Issue үүсгэх"
                ],
                correctAnswer: 1,
                explanation: "Pull Request нь өөрийн өөрчлөлтийг үндсэн кодод нэмэх хүсэлт бөгөөд code review хийгдсэний дараа merge хийгдэнэ."
            },
            {
                question: ".gitignore файлын зориулалт юу вэ?",
                options: [
                    "Git тохиргоо хадгалах",
                    "Хамааралтай файлууд жагсаах",
                    "Git-д хамруулахгүй байх файлууд заах",
                    "Commit message бичих"
                ],
                correctAnswer: 2,
                explanation: ".gitignore файл нь Git-д хамруулахгүй байх файл болон folder-уудыг заадаг (node_modules, .env гэх мэт)."
            }
        ]
    },
    "python-ai": {
        slug: "python-ai",
        title: "Python with AI",
        icon: "🤖",
        description: "Python ашиглан хиймэл оюун ухаан",
        sections: [
            {
                id: "introduction",
                title: "Танилцуулга",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1259,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `Python with AI нь хиймэл оюун ухаан болон машин сургалтын апликейшнүүд хөгжүүлэхэд Python хэл ашиглах талаар юм. Python нь AI хөгжүүлэлтийн хамгийн түгээмэл хэрэглэгддэг хэл бөгөөд TensorFlow, PyTorch, Scikit-learn зэрэг хүчирхэг library-тай.

AI нь өнөө үед маш эрэлттэй салбар бөгөөд ChatGPT, Google Translate, Face Recognition зэрэг технологиуд AI дээр суурилдаг. Python-ийн тусламжтайгаар та өөрийн AI model-ийг сургаж, ашиглаж чадна.

Machine Learning, Deep Learning, Natural Language Processing (NLP), Computer Vision зэрэг AI-ийн бүх чиглэлийг Python ашиглан хөгжүүлж болно.`
            },
            {
                id: "why",
                title: "Яагаад хэрэгтэй вэ",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1269,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**Python with AI суралцах шалтгаанууд:**

• Ирээдүйн технологи - AI нь бүх салбарт хэрэглэгдэж байна
• Өндөр цалин - AI хөгжүүлэгчид дэлхийн хамгийн өндөр цалинтай мэргэжилтнүүд
• Бодит асуудал шийдэх - Өвчлөл оношлох, хөдөлгөөнт тээвэр, сошиал медиа
• Creativity - AI ашиглан бүтээлч ажил хийх (зураг, хөгжим, текст үүсгэх)
• Automation - Давтагдах ажлыг автоматжуулах
• Олон салбарт хэрэглэгдэнэ - Эрүүл мэнд, санхүү, худалдаа, боловсрол
• Эрэлт өндөр - AI хөгжүүлэгч хайж байгаа компани олон`
            },
            {
                id: "concepts",
                title: "Үндсэн ойлголтууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1283,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**Machine Learning:**
Компьютерт программчлалгүйгээр өгөгдлөөс суралцаж дадлага хийх боломж олгох.

**Supervised Learning:**
Label-тэй өгөгдлөөс суралцах. Жишээ нь: Зургаас нохой, муур таних.

**Unsupervised Learning:**
Label-гүй өгөгдлөөс pattern олох. Жишээ нь: Хэрэглэгчдийг бүлэглэх.

**Deep Learning:**
Neural network ашигласан machine learning. Зураг, дуу хоолой таних.

**Neural Networks:**
Хүний тархины загварчилсан сүлжээ. Neurons (node) болон layer-ээс бүрдэнэ.

**Natural Language Processing (NLP):**
Хүний хэлийг ойлгож боловсруулах. ChatGPT, орчуулга, sentiment analysis.

**Computer Vision:**
Зураг, видеог ойлгох. Нүүр таних, объект илрүүлэх, autonomous driving.

**Popular Libraries:**
- NumPy: Математик тооцоолол
- Pandas: Өгөгдөл боловсруулах
- Matplotlib/Seaborn: Visualization
- Scikit-learn: Machine learning
- TensorFlow/Keras: Deep learning
- PyTorch: Deep learning
- OpenCV: Computer vision
- NLTK/spaCy: NLP`
            },
            {
                id: "resources",
                title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1318,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `AI, ML, DL-ийг Python хэлээр сурахад ашиглах чухал эх сурвалжууд:

- [Scikit-learn Docs](https://scikit-learn.org/stable/user_guide.html)
- [TensorFlow Guide](https://www.tensorflow.org/learn)
- [PyTorch Tutorials](https://pytorch.org/tutorials/)
- [Keras Documentation](https://keras.io/)

Нэмэлтээр судлах сэдвүүд:
- Model evaluation (train/validation/test split, cross-validation, metrics)
- Overfitting, regularization, early stopping
- Deployment (FastAPI, Flask, Streamlit ашиглан model publish хийх)
- Responsible AI (bias, fairness, explainability)`
            }
        ],
        codeExample: {
            title: "Жишээ код",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/app/subjects/[slug]/page.tsx",
                lineNumber: 1335,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            code: `# NumPy ба Pandas ашиглах
import numpy as np
import pandas as pd

# NumPy array үүсгэх
arr = np.array([1, 2, 3, 4, 5])
print("Array:", arr)
print("Дундаж:", np.mean(arr))

# Pandas DataFrame үүсгэх
data = {
    'Нэр': ['Болд', 'Дорж', 'Сүх'],
    'Нас': [17, 16, 18],
    'Оноо': [95, 87, 92]
}
df = pd.DataFrame(data)
print(df)

# Simple Linear Regression (Scikit-learn)
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Өгөгдөл бэлтгэх
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Train/Test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Model сургах
model = LinearRegression()
model.fit(X_train, y_train)

# Таамаглал хийх
predictions = model.predict(X_test)
print("Таамаглал:", predictions)

# Neural Network (TensorFlow/Keras)
import tensorflow as tf
from tensorflow import keras

# Sequential model үүсгэх
model = keras.Sequential([
    keras.layers.Dense(64, activation='relu', input_shape=(10,)),
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dense(1, activation='sigmoid')
])

# Model compile хийх
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)

# Model-ийн бүтцийг харах
model.summary()

# Image classification (CNN)
from tensorflow.keras import layers

cnn_model = keras.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(10, activation='softmax')
])

# Natural Language Processing
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

# Текст өгөгдөл
texts = ['Би Python дуртай', 'Python хялбар', 'JavaScript сайн']
labels = [1, 1, 0]  # 1 = эерэг, 0 = сөрөг

# Vectorization
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

# Model сургах
classifier = MultinomialNB()
classifier.fit(X, labels)

# Шинэ текст таамаглах
new_text = ['Python програмчлал']
new_X = vectorizer.transform(new_text)
prediction = classifier.predict(new_X)
print("Таамаглал:", prediction)`,
            language: "python"
        },
        exercises: [
            {
                title: "Анхан шатны дасгал",
                tasks: [
                    "NumPy ашиглан математик үйлдлүүд хийх",
                    "Pandas ашиглан CSV файл унших, боловсруулах",
                    "Matplotlib ашиглан график зурах",
                    "Энгийн Linear Regression model сургах"
                ]
            },
            {
                title: "Дунд шатны дасгал",
                tasks: [
                    "Scikit-learn ашиглан classification model сургах",
                    "MNIST dataset дээр гарын бичээс таних model сургах",
                    "Text classification хийх (spam эсвэл ham)",
                    "K-Means clustering ашиглан өгөгдөл бүлэглэх"
                ]
            },
            {
                title: "Дэвшилтэт дасгал",
                tasks: [
                    "CNN ашиглан зураг ангилах (cats vs dogs)",
                    "RNN/LSTM ашиглан текст үүсгэх",
                    "Transfer Learning ашиглах (pre-trained models)",
                    "OpenCV ашиглан face detection",
                    "Chatbot үүсгэх (NLP ашиглан)",
                    "Real-time object detection (YOLO)"
                ]
            }
        ],
        quiz: [
            {
                question: "Machine Learning гэж юу вэ?",
                options: [
                    "Компьютер суралцаж дадлага хийх",
                    "Машин засах технологи",
                    "Интернетийн хурд нэмэгдүүлэх",
                    "Программ бичих арга"
                ],
                correctAnswer: 0,
                explanation: "Machine Learning нь компьютерт программчлалгүйгээр өгөгдлөөс суралцаж дадлага хийх боломж олгодог."
            },
            {
                question: "Python дээр хамгийн түгээмэл Deep Learning library аль нь вэ?",
                options: [
                    "NumPy",
                    "Pandas",
                    "TensorFlow",
                    "Matplotlib"
                ],
                correctAnswer: 2,
                explanation: "TensorFlow (мөн PyTorch) нь Python дээрх хамгийн түгээмэл Deep Learning framework юм."
            },
            {
                question: "Supervised Learning гэж юу вэ?",
                options: [
                    "Label-тэй өгөгдлөөс суралцах",
                    "Label-гүй өгөгдлөөс суралцах",
                    "Багш заадаг систем",
                    "Автоматаар ажилладаг систем"
                ],
                correctAnswer: 0,
                explanation: "Supervised Learning нь label (answer) бүхий өгөгдлөөс суралцах machine learning төрөл юм."
            },
            {
                question: "Computer Vision гэж юу вэ?",
                options: [
                    "Компьютерийн дэлгэц",
                    "Зураг, видеог ойлгох AI",
                    "Нүдний шинжилгээ",
                    "3D график"
                ],
                correctAnswer: 1,
                explanation: "Computer Vision нь зураг болон видеог ойлгож боловсруулах AI-ийн салбар юм."
            },
            {
                question: "NLP ямар зүйлд ашиглагддаг вэ?",
                options: [
                    "Зураг таних",
                    "Текст ойлгох",
                    "Тоо тооцоолох",
                    "Өгөгдөл хадгалах"
                ],
                correctAnswer: 1,
                explanation: "NLP (Natural Language Processing) нь хүний хэлийг ойлгож боловсруулахад ашиглагддаг. ChatGPT, орчуулга зэрэгт."
            }
        ]
    },
    cpp: {
        slug: "cpp",
        title: "C++",
        icon: "⚙️",
        description: "Өндөр гүйцэтгэлтэй програмчлалын хэл",
        sections: [
            {
                id: "introduction",
                title: "Танилцуулга",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1515,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `C++ нь Bjarne Stroustrup 1979 онд үүсгэсэн өндөр гүйцэтгэлтэй, general-purpose програмчлалын хэл юм. C хэлний өргөтгөл болгон үүсгэсэн бөгөөд Object-Oriented Programming (OOP) дэмждэг.

C++ нь operating system, game engine, embedded system, database зэрэгт ашиглагддаг. Windows, Linux, MacOS-ийн ихэнх хэсэг C++ дээр бичигдсэн. Google Chrome, Adobe Photoshop, MySQL зэрэг алдартай программууд C++ ашигладаг.

C++ нь хурдан ажилладаг учраас real-time систем, game development, AI engine зэрэгт тохиромжтой. Хэцүү боловч хүчирхэг хэл бөгөөд системийн түвшний програмчлалд давуу талтай.`
            },
            {
                id: "why",
                title: "Яагаад хэрэгтэй вэ",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1525,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**C++ суралцах шалтгаанууд:**

• Өндөр гүйцэтгэл - Хамгийн хурдан програмчлалын хэлүүдийн нэг
• Game development - Unreal Engine, Unity зэрэг game engine-үүд C++ ашигладаг
• System programming - Operating system, driver, embedded system
• Competitive programming - Олимпиад, competition-д түгээмэл ашигладаг
• Мэдлэгийн суурь - C++ мэдвэл бусад хэл сурахад хялбар
• Low-level control - Санах ой, hardware-тай ойр ажилладаг
• Эрэлт өндөр - Системийн програмист, game developer өндөр цалинтай
• Олон салбарт - Finance, AI, robotics, automotive`
            },
            {
                id: "concepts",
                title: "Үндсэн ойлголтууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1540,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**Variables & Data Types:**
int, float, double, char, bool, string зэрэг өгөгдлийн төрлүүд.

**Operators:**
Arithmetic (+, -, *, /), comparison (==, !=, <, >), logical (&&, ||, !).

**Control Flow:**
if-else, switch, for loop, while loop, do-while loop.

**Functions:**
Код дахин ашиглах, return type, parameters, function overloading.

**Arrays & Vectors:**
Олон өгөгдөл хадгалах, dynamic array (vector).

**Pointers:**
Санах ойн хаягтай ажиллах. C++-ийн хүчирхэг боловч хэцүү хэсэг.

**Object-Oriented Programming:**
- Class & Objects: Объект үүсгэх загвар
- Encapsulation: Өгөгдөл далдлах
- Inheritance: Өв залгамжлал
- Polymorphism: Олон хэлбэрийн байдал
- Abstraction: Хийсвэр байдал

**STL (Standard Template Library):**
vector, map, set, queue, stack зэрэг бэлэн өгөгдлийн бүтэц.

**Memory Management:**
new, delete, stack vs heap, memory leak.

**Exception Handling:**
try-catch block ашиглан алдаа барих.`
            },
            {
                id: "resources",
                title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1578,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `C++-ийг системийн түвшинд сайн сурахад:

- [cppreference.com](https://en.cppreference.com/w/)
- [C++ Standard Drafts](https://isocpp.org/std/the-standard)
- [ISO C++ сайт](https://isocpp.org/)

Нэмэлт судлах сэдвүүд:
- Modern C++ (C++11/14/17/20) боломжууд (auto, smart pointers, move semantics)
- Templates ба generic programming
- Concurrency ба multithreading (std::thread, async, mutex)
- Performance optimization, profiling, memory sanitizer хэрэгслүүд`
            }
        ],
        codeExample: {
            title: "Жишээ код",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/app/subjects/[slug]/page.tsx",
                lineNumber: 1594,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            code: `// Энгийн Hello World
#include <iostream>
using namespace std;

int main() {
    cout << "Сайн уу, C++!" << endl;
    return 0;
}

// Variables & Data Types
#include <iostream>
#include <string>
using namespace std;

int main() {
    int age = 17;
    double score = 95.5;
    char grade = 'A';
    string name = "Болд";
    bool isPassed = true;
    
    cout << "Нэр: " << name << endl;
    cout << "Нас: " << age << endl;
    cout << "Оноо: " << score << endl;
    
    return 0;
}

// Functions
#include <iostream>
using namespace std;

// Function зарлах
int add(int a, int b) {
    return a + b;
}

double calculateAverage(int arr[], int size) {
    int sum = 0;
    for(int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return (double)sum / size;
}

int main() {
    int result = add(5, 3);
    cout << "Нийлбэр: " << result << endl;
    
    int scores[] = {90, 85, 92, 88};
    double avg = calculateAverage(scores, 4);
    cout << "Дундаж: " << avg << endl;
    
    return 0;
}

// Class & Objects (OOP)
#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int age;
    double gpa;

public:
    // Constructor
    Student(string n, int a, double g) {
        name = n;
        age = a;
        gpa = g;
    }
    
    // Methods
    void displayInfo() {
        cout << "Нэр: " << name << endl;
        cout << "Нас: " << age << endl;
        cout << "GPA: " << gpa << endl;
    }
    
    void setGPA(double g) {
        gpa = g;
    }
    
    double getGPA() {
        return gpa;
    }
};

int main() {
    Student student1("Дорж", 17, 3.8);
    student1.displayInfo();
    
    student1.setGPA(3.9);
    cout << "Шинэ GPA: " << student1.getGPA() << endl;
    
    return 0;
}

// STL Vector ашиглах
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> numbers;
    
    // Элемент нэмэх
    numbers.push_back(5);
    numbers.push_back(2);
    numbers.push_back(8);
    numbers.push_back(1);
    
    // Эрэмбэлэх
    sort(numbers.begin(), numbers.end());
    
    // Хэвлэх
    for(int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}

// Pointers
#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int* ptr = &x;  // Pointer зарлах
    
    cout << "Утга: " << x << endl;
    cout << "Хаяг: " << &x << endl;
    cout << "Pointer-ийн утга: " << *ptr << endl;
    
    *ptr = 20;  // Pointer-ээр утгыг өөрчлөх
    cout << "Шинэ утга: " << x << endl;
    
    return 0;
}`,
            language: "cpp"
        },
        exercises: [
            {
                title: "Анхан шатны дасгал",
                tasks: [
                    "Hello World програм бичих",
                    "Хоёр тоо нэмэх, хасах, үржүүлэх, хуваах програм",
                    "For loop ашиглан 1-100 хүртэл тоо хэвлэх",
                    "Массивын элементүүдийн нийлбэр олох функц бичих",
                    "Тэгш эсвэл сондгой тоо шалгах програм"
                ]
            },
            {
                title: "Дунд шатны дасгал",
                tasks: [
                    "Calculator class үүсгэх (OOP)",
                    "Vector ашиглан оюутны мэдээлэл хадгалах програм",
                    "Bubble sort эсвэл Selection sort хэрэгжүүлэх",
                    "Файл унших, бичих програм",
                    "Bank Account class үүсгэх (deposit, withdraw methods)"
                ]
            },
            {
                title: "Дэвшилтэт дасгал",
                tasks: [
                    "Linked List хэрэгжүүлэх (insert, delete, search)",
                    "Binary Search Tree хийх",
                    "Pointer ашиглан dynamic memory allocation",
                    "Template class үүсгэх",
                    "Exception handling ашиглан robust програм",
                    "Multi-file project үүсгэх (header files ашиглах)"
                ]
            }
        ],
        quiz: [
            {
                question: "C++ програм компьютер дээр ажиллахын өмнө юу хийх ёстой вэ?",
                options: [
                    "Интерпретлэх",
                    "Компайл хийх",
                    "Татаж авах",
                    "Зөвхөн ажиллуулах"
                ],
                correctAnswer: 1,
                explanation: "C++ нь compiled хэл бөгөөд програмыг ажиллуулахаас өмнө compiler ашиглан machine code руу хөрвүүлэх (compile) хэрэгтэй."
            },
            {
                question: "C++ дээр текст хэвлэхэд ямар команд хэрэглэдэг вэ?",
                options: [
                    "print()",
                    "cout <<",
                    "echo",
                    "printf()"
                ],
                correctAnswer: 1,
                explanation: "C++ дээр cout << операторыг ашиглан текст хэвлэнэ. Жишээ нь: cout << 'Hello' << endl;"
            },
            {
                question: "Class гэж юу вэ?",
                options: [
                    "Өгөгдлийн төрөл",
                    "Объект үүсгэх загвар",
                    "Функцийн нэр",
                    "Хувьсагчийн төрөл"
                ],
                correctAnswer: 1,
                explanation: "Class нь Object-Oriented Programming-д объект үүсгэх загвар (blueprint) юм. Class-аас олон объект үүсгэж болно."
            },
            {
                question: "Pointer нь юу вэ?",
                options: [
                    "Тоо хадгалах хувьсагч",
                    "Санах ойн хаяг хадгалах хувьсагч",
                    "Текст хадгалах хувьсагч",
                    "Логик утга хадгалах хувьсагч"
                ],
                correctAnswer: 1,
                explanation: "Pointer нь санах ойн хаяг хадгалах тусгай хувьсагч юм. Өөр хувьсагчийн хаягийг заадаг."
            },
            {
                question: "Vector нь array-с ямар ялгаатай вэ?",
                options: [
                    "Ялгаагүй",
                    "Vector нь dynamic хэмжээтэй",
                    "Vector илүү удаан",
                    "Array нь дахин ашиглагддаггүй"
                ],
                correctAnswer: 1,
                explanation: "Vector нь dynamic array бөгөөд хэмжээ нь автоматаар өөрчлөгддөг. Array нь fixed хэмжээтэй."
            }
        ]
    },
    python: {
        slug: "python",
        title: "Python",
        icon: "🐍",
        description: "Хялбар бөгөөд хүчирхэг програмчлалын хэл",
        sections: [
            {
                id: "introduction",
                title: "Танилцуулга",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1824,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `Python нь Guido van Rossum 1991 онд үүсгэсэн өндөр түвшний, уншихад хялбар програмчлалын хэл юм. Python нь анхлагчдад хамгийн тохиромжтой хэл бөгөөд мөн мэргэжлийн хөгжүүлэгчид өргөнөөр ашигладаг.

Python нь web development, data science, artificial intelligence, automation, scientific computing зэрэг олон салбарт хэрэглэгддэг. Google, Facebook, Netflix, Spotify зэрэг томоохон компаниуд Python ашигладаг.

Python-ийн философи нь "бичихэд хялбар, уншихэд хялбар" гэсэн үзэл санаа дээр суурилдаг. Энэ нь code-ийг ойлгоход хялбар болгодог бөгөөд багаар ажиллахад тохиромжтой.`
            },
            {
                id: "why",
                title: "Яагаад хэрэгтэй вэ",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1834,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**Python суралцах шалтгаанууд:**

• Хялбар синтакс - Ойлгоход бөгөөд бичихэд хялбар
• Өргөн хэрэглээ - Web, AI, Data Science, automation
• Том library ecosystem - 300,000+ package PyPI дээр
• Эрэлт өндөр - Олон компани Python хөгжүүлэгч хайдаг
• Beginner-friendly - Анхлагчдад хамгийн тохиромжтой
• Cross-platform - Windows, Mac, Linux дээр ажилладаг
• Олон нийтийн дэмжлэг - Хамгийн том программистуудын нийгэмлэг
• Карьерын боломж - Data scientist, ML engineer, backend developer`
            },
            {
                id: "concepts",
                title: "Үндсэн ойлголтууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1849,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `**Variables & Data Types:**
Python-д хувьсагчийн төрөл зарлах шаардлагагүй (dynamic typing).
- int, float, str, bool, list, tuple, dict, set

**Operators:**
Arithmetic (+, -, *, /, //, %, **), comparison (==, !=, <, >), logical (and, or, not).

**Control Flow:**
if-elif-else, for loop, while loop, break, continue.

**Functions:**
def keyword ашиглан функц үүсгэнэ. Lambda functions (anonymous functions).

**Lists:**
Ordered, mutable collection. [1, 2, 3, 'text']

**Tuples:**
Ordered, immutable collection. (1, 2, 3)

**Dictionaries:**
Key-value pairs. {'name': 'Болд', 'age': 17}

**Sets:**
Unordered, unique elements. {1, 2, 3, 4}

**List Comprehension:**
Товч хэлбэрээр list үүсгэх: [x*2 for x in range(10)]

**File I/O:**
Файл унших, бичих: open(), read(), write(), close()

**Exception Handling:**
try-except-finally block ашиглан алдаа барих.

**Modules & Packages:**
import keyword ашиглан бусад кодыг ашиглах.

**OOP (Object-Oriented Programming):**
Class, objects, inheritance, encapsulation, polymorphism.`
            },
            {
                id: "resources",
                title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                    lineNumber: 1893,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                content: `Python-ыг хүчтэй түвшинд эзэмшихийн тулд:

- [Python Official Docs](https://docs.python.org/3/)
- [The Python Tutorial](https://docs.python.org/3/tutorial/)
- [Real Python нийтлэлүүд](https://realpython.com/)

Нэмэлтээр судлах сэдвүүд:
- Virtualenv, pip, dependency management
- Asyncio, concurrency (threads, processes)
- Popular frameworks: Django, Flask, FastAPI
- Testing (unittest, pytest) ба type hints (mypy, pyright)`
            }
        ],
        codeExample: {
            title: "Жишээ код",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/app/subjects/[slug]/page.tsx",
                lineNumber: 1909,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            code: `# Hello World
print("Сайн уу, Python!")

# Variables & Data Types
name = "Болд"
age = 17
height = 1.75
is_student = True

print(f"Нэр: {name}, Нас: {age}")

# Lists
fruits = ["алим", "банана", "жүрж", "усан үзэм"]
print(fruits[0])  # алим
fruits.append("лийр")
print(fruits)

# Dictionaries
student = {
    "name": "Дорж",
    "age": 16,
    "grade": 11,
    "subjects": ["Математик", "Физик", "Хими"]
}

print(student["name"])
print(student.get("age"))

# Control Flow
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Үнэлгээ: {grade}")

# For Loop
for i in range(1, 6):
    print(f"Тоо: {i}")

for fruit in fruits:
    print(f"Жимс: {fruit}")

# While Loop
count = 0
while count < 5:
    print(f"Тоолуур: {count}")
    count += 1

# Functions
def greet(name):
    return f"Сайн уу, {name}!"

def add(a, b):
    return a + b

def calculate_average(numbers):
    return sum(numbers) / len(numbers)

print(greet("Сүх"))
print(add(5, 3))
print(calculate_average([90, 85, 92, 88]))

# List Comprehension
squares = [x**2 for x in range(1, 11)]
print(squares)  # [1, 4, 9, 16, 25, ...]

even_numbers = [x for x in range(20) if x % 2 == 0]
print(even_numbers)

# Lambda Functions
multiply = lambda x, y: x * y
print(multiply(4, 5))  # 20

# File I/O
# Файл бичих
with open("example.txt", "w", encoding="utf-8") as file:
    file.write("Сайн уу Python!\\n")
    file.write("Энэ бол жишээ файл.\\n")

# Файл унших
with open("example.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)

# Exception Handling
try:
    number = int(input("Тоо оруулна уу: "))
    result = 100 / number
    print(f"Үр дүн: {result}")
except ValueError:
    print("Зөв тоо оруулна уу!")
except ZeroDivisionError:
    print("Тэгд хуваах боломжгүй!")
finally:
    print("Програм дууссан")

# Class & OOP
class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
        self.speed = 0
    
    def accelerate(self, increase):
        self.speed += increase
        print(f"Хурд: {self.speed} км/ц")
    
    def brake(self):
        self.speed = 0
        print("Машин зогссон")
    
    def display_info(self):
        print(f"{self.year} {self.brand} {self.model}")

# Object үүсгэх
my_car = Car("Toyota", "Camry", 2023)
my_car.display_info()
my_car.accelerate(50)
my_car.accelerate(30)
my_car.brake()`,
            language: "python"
        },
        exercises: [
            {
                title: "Анхан шатны дасгал",
                tasks: [
                    "Өөрийн нэр, нас хэвлэх програм бичих",
                    "Хоёр тооны нийлбэр, ялгавар, үржвэр олох калькулятор",
                    "List ашиглан жимсний жагсаалт үүсгэж хэвлэх",
                    "Тэгш эсвэл сондгой тоо шалгах програм",
                    "1-ээс 100 хүртэл тоонуудын нийлбэр олох"
                ]
            },
            {
                title: "Дунд шатны дасгал",
                tasks: [
                    "Dictionary ашиглан оюутны мэдээлэл хадгалах програм",
                    "List comprehension ашиглан өгөгдөл боловсруулах",
                    "Файл уншиж үг тоолох програм",
                    "Quiz програм үүсгэх (dict ашиглах)",
                    "Temperature converter (Celsius ↔ Fahrenheit)",
                    "Palindrome шалгах функц бичих"
                ]
            },
            {
                title: "Дэвшилтэт дасгал",
                tasks: [
                    "Student Management System (OOP ашиглах)",
                    "Вэб scraping хийх (requests, BeautifulSoup)",
                    "Command-line Todo list програм",
                    "CSV файл унших, боловсруулах (pandas)",
                    "API-аас өгөгдөл татах програм (requests)",
                    "Recursive функц ашиглан Fibonacci дараалал"
                ]
            }
        ],
        quiz: [
            {
                question: "Python нь interpreted эсвэл compiled хэл вэ?",
                options: [
                    "Compiled",
                    "Interpreted",
                    "Hybrid",
                    "Assembly"
                ],
                correctAnswer: 1,
                explanation: "Python нь interpreted хэл бөгөөд кодыг шууд гүйцэтгэдэг. Compile хийх шаардлагагүй."
            },
            {
                question: "Python дээр коммент бичихэд ямар тэмдэг хэрэглэдэг вэ?",
                options: [
                    "//",
                    "/* */",
                    "#",
                    "<!--"
                ],
                correctAnswer: 2,
                explanation: "Python дээр # тэмдэг ашиглан нэг мөрийн коммент бичнэ."
            },
            {
                question: "List болон Tuple-ийн ялгаа юу вэ?",
                options: [
                    "Ялгаагүй",
                    "List нь mutable, Tuple нь immutable",
                    "List нь удаан, Tuple нь хурдан",
                    "Tuple нь зөвхөн тоо хадгална"
                ],
                correctAnswer: 1,
                explanation: "List нь mutable (өөрчлөгдөж болох) бол Tuple нь immutable (өөрчлөгдөхгүй) байдаг."
            },
            {
                question: "Python дээр функц үүсгэхэд ямар түлхүүр үг хэрэглэдэг вэ?",
                options: [
                    "function",
                    "def",
                    "func",
                    "define"
                ],
                correctAnswer: 1,
                explanation: "Python дээр def түлхүүр үг ашиглан функц үүсгэнэ. Жишээ нь: def my_function():"
            },
            {
                question: "Dictionary-д хандахдаа юу ашигладаг вэ?",
                options: [
                    "Index number",
                    "Key",
                    "Position",
                    "ID"
                ],
                correctAnswer: 1,
                explanation: "Dictionary-д key ашиглан value-д хандана. Жишээ нь: student['name']"
            }
        ]
    }
};
;
async function SubjectPage({ params }) {
    const { slug } = await params;
    const subject = subjectsData[slug];
    if (!subject) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/app/subjects/[slug]/page.tsx",
                lineNumber: 2131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                        fileName: "[project]/app/subjects/[slug]/page.tsx",
                        lineNumber: 2133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full px-4 md:px-8 py-8 md:py-12 max-w-4xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 space-y-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-6xl",
                                                children: subject.icon
                                            }, void 0, false, {
                                                fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                lineNumber: 2139,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-4xl font-bold tracking-tight",
                                                        children: subject.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                        lineNumber: 2141,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg text-muted-foreground mt-2",
                                                        children: subject.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                        lineNumber: 2142,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                lineNumber: 2140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/subjects/[slug]/page.tsx",
                                        lineNumber: 2138,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                                    lineNumber: 2137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        subject.sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                section.icon,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    children: section.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                                    lineNumber: 2154,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                            lineNumber: 2152,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                        lineNumber: 2151,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        className: "prose prose-slate dark:prose-invert max-w-none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "whitespace-pre-line",
                                                            children: section.content
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                            lineNumber: 2158,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                        lineNumber: 2157,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, section.id, true, {
                                                fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                lineNumber: 2150,
                                                columnNumber: 17
                                            }, this)),
                                        subject.codeExample && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            subject.codeExample.icon,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                children: subject.codeExample.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                                lineNumber: 2169,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                        lineNumber: 2167,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                    lineNumber: 2166,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$code$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                                        code: subject.codeExample.code,
                                                        language: subject.codeExample.language
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                        lineNumber: 2173,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                    lineNumber: 2172,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/subjects/[slug]/page.tsx",
                                            lineNumber: 2165,
                                            columnNumber: 17
                                        }, this),
                                        subject.exercises && subject.exercises.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                                    lineNumber: 2183,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    children: "Дасгал ажлууд"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                                    lineNumber: 2184,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                            lineNumber: 2182,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            children: "Эдгээр дасгалуудыг хийснээр танд суралцсан зүйлээ дадлага хийх боломж олгоно"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                            lineNumber: 2186,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                    lineNumber: 2181,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "space-y-6",
                                                    children: subject.exercises.map((exercise, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold text-lg",
                                                                    children: exercise.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                                    lineNumber: 2193,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2",
                                                                    children: exercise.tasks.map((task, taskIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "outline",
                                                                                    className: "mt-0.5",
                                                                                    children: taskIndex + 1
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                                                    lineNumber: 2197,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-muted-foreground",
                                                                                    children: task
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                                                    lineNumber: 2200,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, taskIndex, true, {
                                                                            fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                                            lineNumber: 2196,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                                    lineNumber: 2194,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                            lineNumber: 2192,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                    lineNumber: 2190,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/subjects/[slug]/page.tsx",
                                            lineNumber: 2180,
                                            columnNumber: 17
                                        }, this),
                                        (()=>{
                                            // Collect all quiz questions from sections and direct quiz array
                                            const allQuizQuestions = [];
                                            // Collect from sections
                                            if (subject.sections && Array.isArray(subject.sections)) {
                                                subject.sections.forEach((section)=>{
                                                    if (section.quiz && Array.isArray(section.quiz)) {
                                                        section.quiz.forEach((quiz)=>{
                                                            allQuizQuestions.push({
                                                                question: quiz.question,
                                                                options: quiz.options || [],
                                                                correctAnswer: quiz.correctAnswer || quiz.answer || 0,
                                                                explanation: quiz.explanation
                                                            });
                                                        });
                                                    }
                                                });
                                            }
                                            // Collect from direct quiz array (backward compatibility)
                                            if (subject.quiz && Array.isArray(subject.quiz)) {
                                                subject.quiz.forEach((quiz)=>{
                                                    allQuizQuestions.push({
                                                        question: quiz.question,
                                                        options: quiz.options || [],
                                                        correctAnswer: quiz.correctAnswer || quiz.answer || 0,
                                                        explanation: quiz.explanation
                                                    });
                                                });
                                            }
                                            return allQuizQuestions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                                lineNumber: 2246,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                                                                children: "Багахан тест"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                                lineNumber: 2247,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                                                children: "Суралцсан зүйлээ шалгаж үзэхийн тулд доорх асуултуудад хариулна уу. Асуултууд random-р солигдож байрлал өөрчлөгдөнө."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                                lineNumber: 2248,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                        lineNumber: 2245,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$quiz$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                                                        questions: allQuizQuestions,
                                                        randomize: true,
                                                        maxQuestions: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                        lineNumber: 2253,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/subjects/[slug]/page.tsx",
                                                lineNumber: 2244,
                                                columnNumber: 19
                                            }, this) : null;
                                        })()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/subjects/[slug]/page.tsx",
                                    lineNumber: 2148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/subjects/[slug]/page.tsx",
                            lineNumber: 2135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/subjects/[slug]/page.tsx",
                        lineNumber: 2134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/subjects/[slug]/page.tsx",
                lineNumber: 2132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/app/subjects/[slug]/page.tsx",
                lineNumber: 2261,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/subjects/[slug]/page.tsx",
        lineNumber: 2130,
        columnNumber: 5
    }, this);
}
_c = SubjectPage;
var _c;
__turbopack_context__.k.register(_c, "SubjectPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1e8dedfe._.js.map