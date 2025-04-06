const common = `
--require setup/hooks.js
--require setup/assertions.js
--require step-definitions/**/*.step.js
`
module.exports = {
  default: `${common} features/**/*.feature`,
}