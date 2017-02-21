module.exports = {
  entry: './lib/readout.js',
  output: {
    libraryTarget: 'var',
    library: 'Readout',
    filename: './dist/readout.js'
  },
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    'jquery': 'jQuery'
  }
}
