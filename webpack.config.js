module.exports = {
  entry: './lib/readout.js',
  output: {
    libraryTarget: 'var',
    library: 'Readout',
    filename: './dist/readout.js'
  },
  devtool: "source-map",
  externals: {
    'jquery': 'jQuery'
  }
}
