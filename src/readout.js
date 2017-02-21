var Readout = function(callback, customAttribute) {
  let readoutNamespace = customAttribute || 'data-readout-src',
    readoutSelector = `[${readoutNamespace}]`    
  $(`${readoutSelector}:not(:has(>${readoutSelector}))`).each(function (i, el) {
    let readoutSrc = $(el).parents(readoutSelector).andSelf()
      .map(function (i, parent) {
        return parent.getAttribute(readoutNamespace)
      }).get()
      .reduce(function (result, readoutSrc) {
        return `${result}/${readoutSrc}`
      })
    $.get(readoutSrc, function (data) {
      let html = (new showdown.Converter()).makeHtml(data)
      if (callback) {
        callback(el, html)
      } else {
        el.innerHTML = html
      }
    })
  })
}
