import $ from 'jquery'
import { Converter } from 'showdown'

module.exports = function readout (opts) {
  opts = opts || {}
  let readoutNamespace = opts.namespace || 'data-readout-src'
  let readoutSelector = `[${readoutNamespace}]`
  $(`${readoutSelector}:not(:has(>${readoutSelector}))`).each(function (i, el) {
    let readoutSrc = $(el).parents(readoutSelector).andSelf()
      .map(function (i, parent) {
        return parent.getAttribute(readoutNamespace)
      }).get()
      .reduce(function (result, readoutSrc) {
        return `${result}/${readoutSrc}`
      })
    $.get(readoutSrc, function (data) {
      let converter = new Converter()
      converter.setFlavor('github')
      let html = converter.makeHtml(data)
      if (opts.callback) {
        opts.callback(el, html)
      } else {
        el.innerHTML = html
      }
    })
  })
}
