module.exports = main

function main() {
  throw new Error("Please use main.define")
}

main.define = function (module, fn) {
  module.exports.__main__ = fn

  if (module === require.main) {
    fn.call(module, process.argv.slice(2))
  }
}
