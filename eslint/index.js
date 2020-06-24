module.exports = {
  extends: ["airbnb-typescript/base"],
  rules: {
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/indent": ["error", 4],
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
  },
};
