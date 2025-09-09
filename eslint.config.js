// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
import tseslint from "typescript-eslint";
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  eslintPluginPrettierRecommended,
  tseslint.configs.recommended,
  expoConfig,
  {
    ignores: ["dist/*"],
  },
  {
    files: ["**/*.ts"],
    extends: [tseslint.configs.recommendedTypeChecked],
  },
]);
