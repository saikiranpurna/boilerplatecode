import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.extends(
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ),
  ...compat.config({
    parser: "@typescript-eslint/parser",
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      "import/named": "off",
      "import/no-unresolved": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-var-requires": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/jsx-props-no-spreading": "off",
      "react/display-name": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-loss-of-precision": "off",
      quotes: ["off"],
      semi: ["error", "always"],
      "no-unused-vars": [
        "off",
        {
          argsIgnorePattern: "^_",
        },
      ],
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "react/prop-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "off",
        {
          argsIgnorePattern: "^_",
        },
      ],
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["to"],
        },
      ],
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
        },
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: [".jsx", ".tsx"],
        },
      ],
      "no-debugger": "warn",
      "prettier/prettier": [
        "warn",
        {
          endOfLine: "auto",
        },
      ],
      "react/jsx-no-bind": [
        "error",
        {
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
          ignoreRefs: true,
        },
      ],
      "react/no-multi-comp": [
        "warn",
        {
          ignoreStateless: true,
        },
      ],
      "react/jsx-boolean-value": ["error", "always"],
      "react/self-closing-comp": "warn",
      "no-console": [
        "warn",
        {
          allow: ["warn", "error", "info", "debug"],
        },
      ],
      "consistent-return": "error",
      "no-else-return": "error",
      "no-lonely-if": "error",
      "no-unneeded-ternary": "error",
      "no-restricted-globals": ["error", "event", "fdescribe"],
      "unicode-bom": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  }),
];

export default eslintConfig;
