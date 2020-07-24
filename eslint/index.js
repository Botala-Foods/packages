module.exports = {
  extends: ["airbnb-typescript/base"],
  rules: {
    "@typescript-eslint/semi": ["warn", "never"],
    "@typescript-eslint/indent": ["warn", 4],
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "implicit-arrow-linebreak": "off",
    "@typescript-eslint/implicit-arrow-linebreak": "off",
    "no-unused-vars": ["off"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_ignored|^_", argsIgnorePattern: "^_ignored|^_" },
    ],
    camelcase: "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      { selector: "memberLike", format: ["camelCase"] },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      { selector: "variable", format: ["PascalCase", "camelCase", "UPPER_CASE"] },
      { selector: "typeLike", format: ["PascalCase"] },
      { selector: "typeParameter", format: ["PascalCase"] },
      { selector: "enumMember", format: ["PascalCase"] },
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: { regex: "^I[A-Z]", match: false },
      },
    ],
    "arrow-parens": ["warn", "as-needed"],
    "max-len": [
      "warn",
      {
        code: 100,
      },
    ],
    quotes: ["warn", "single"],
    "comma-dangle": ["warn", "always-multiline"],
    "object-curly-spacing": ["warn", "always"],
    "arrow-body-style": ["off"],
    "linebreak-style": 0,
    "capitalized-comments": ["warn"],
    "prefer-destructuring": [
      "error",
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "lines-around-comment": [
      "error",
      {
        beforeBlockComment: true,
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
      },
    ],
    "no-underscore-dangle": "off",
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "return" },
      // 1A. Blank line after const or let
      { blankLine: "always", prev: ["const", "let"], next: "*" },
      // 1B. Blank line before const, if, or let expect for when there is a function declaration above
      { blankLine: "always", prev: "*", next: ["const", "let"] },
      { blankLine: "always", prev: "function", next: ["const", "let"] },
      // 1C. No space allowed between them
      {
        blankLine: "any",
        prev: ["const", "let"],
        next: ["const", "let"],
      },
      // 2. Blank line before and after if, try, or for
      { blankLine: "always", prev: ["if", "try", "for"], next: "*" },
      { blankLine: "always", prev: "*", next: ["if", "try", "for"] },
      // 3. Blank line before and after export
      { blankLine: "always", prev: "*", next: "export" },
      { blankLine: "always", prev: "export", next: "*" },
    ],
  },
  "@typescript-eslint/no-use-before-define": [
    "error",
    {
      functions: false,
      classes: true,
      variables: true
    }
  ]
};
