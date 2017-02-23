module.exports = {
  entry: './lib/readout.js',
  output: {
    libraryTarget: 'var',
    library: 'Readout',
    filename: './dist/readout.js'
  },
  externals: {
    'jquery': 'jQuery'
  }
}
