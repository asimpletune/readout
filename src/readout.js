/* global $ */

import { Converter } from 'showdown'

module.exports = function readout (customAttribute, callback) {
  let readoutNamespace = customAttribute || 'data-readout-src'
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
      let html = (new Converter()).makeHtml(data)
      if (callback) {
        callback(el, html)
      } else {
        el.innerHTML = html
      }
    })
  })
}
