import pluginNext from "@next/eslint-plugin-next";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

/** @type {import('typescript-eslint').Config} */
const eslintConfig = [
  // ── Ignored paths ──────────────────────────────────────────────────────────
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/out/**",
      "**/dist/**",
      "**/build/**",
      "**/.cache/**",
      "**/.turbo/**",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      "**/public/**",
      "**/*.lock",
      "**/*.min.js",
      "**/*.min.css",
      "**/coverage/**",
    ],
  },

  // ── TypeScript ─────────────────────────────────────────────────────────────
  ...tseslint.configs.recommended,

  // ── Next.js ────────────────────────────────────────────────────────────────
  {
    plugins: { "@next/next": pluginNext },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },

  // ── React ──────────────────────────────────────────────────────────────────
  {
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/self-closing-comp": "error",
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
    },
  },

  // ── Import sorting (15 groups) ─────────────────────────────────────────────
  {
    plugins: { "simple-import-sort": simpleImportSort },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // 1. Side-effect imports
            ["^\\u0000"],
            // 2. Node built-ins
            [
              "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*)?$",
            ],
            // 3. React
            ["^react", "^react-dom", "^react-.*"],
            // 4. Next.js
            ["^next", "^next/.*"],
            // 5. External packages
            ["^@?\\w"],
            // 6. Internal — types
            ["^@/types", "^@/interfaces"],
            // 7. Internal — lib / utils
            ["^@/lib", "^@/utils", "^@/helpers"],
            // 8. Internal — hooks
            ["^@/hooks"],
            // 9. Internal — components
            ["^@/components"],
            // 10. Internal — everything else
            ["^@/"],
            // 11. Parent imports
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // 12. Same-folder imports
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // 13. Asset imports
            ["^.+\\.(svg|png|jpg|jpeg|gif|webp|avif|ico|bmp|woff|woff2|ttf|eot)$"],
            // 14. JSON imports
            ["^.+\\.json$"],
            // 15. Style imports
            ["^.+\\.s?css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },

  // ── Prettier (must come last) ──────────────────────────────────────────────
  eslintPluginPrettier,

  // ── Unused imports / variables ─────────────────────────────────────────────
  {
    plugins: { "unused-imports": unusedImports },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },

  // ── General best practices ─────────────────────────────────────────────────
  {
    rules: {
      "no-console": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
    },
  },
];

export default eslintConfig;

