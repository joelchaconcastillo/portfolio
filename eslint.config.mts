// eslint.config.mts
import globals from "globals";
import react from "eslint-plugin-react";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS files
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: globals.browser,
    },
    rules: {
      // Add any JS-specific rules here
    },
  },

  // TS/TSX and JSX files
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react,
    },
    rules: {
      // TypeScript recommended rules
      ...tsPlugin.configs.recommended.rules,
      // React recommended rules
      ...react.configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Prettier integration (must be last)
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      ...prettier.rules,
    },
  },
]);
