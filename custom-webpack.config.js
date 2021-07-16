

module.exports = {
  module: {
    rules: [
      {
        node: {
          fs: 'empty',
          net: 'empty',
          tls: 'empty',
        },
      }
    ]
  }
};