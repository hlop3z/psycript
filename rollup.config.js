import pkg from "./package.json";

export default [
  // ESM (ECMAScript — Module)
  {
    input: pkg.initFile,
    output: [
      { file: `dist/${pkg.name}.js`, format: "iife", name: pkg.name },
      { file: `dist/${pkg.name}.mjs`, format: "es" },
      { file: `dist/${pkg.name}.cjs.js`, format: "cjs" },
    ],
  },
];
