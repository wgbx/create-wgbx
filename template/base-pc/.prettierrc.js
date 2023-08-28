module.exports = {
  printWidth: 140,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  plugins: ['./node_modules/prettier-plugin-sort-imports'],
  importTypeOrder: ['NPMPackages', 'localImports'],
  sortingMethod: 'alphabetical'
}
