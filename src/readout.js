/* global NodeFilter, XMLHttpRequest */
import Traverse from './traverse'
import { Parser, HtmlRenderer } from 'commonmark'

module.exports = function readout () {
  let readoutNS = 'data-readout-src'
  let root = document.documentElement
  let reader = new Parser()
  let writer = new HtmlRenderer()
  let treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode: node => node.hasAttribute(readoutNS) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  })
  let currentPath = []
  let anchor = document.createElement('a')
  let traverseOpts = {
    each (node) {
      currentPath.push(node.getAttribute(readoutNS))
    },
    leaf (node) {
      anchor.href = currentPath.reduce((result, el) => result + '/' + el)
      get(anchor.href, (data) => {
        node.innerHTML = writer.render(reader.parse(data))
      })
    },
    sibling () {
      currentPath.pop()
    }
  }
  Traverse(treeWalker, traverseOpts)
}

/**
 * url
 * callback (httpReponseText)
 */
function get (url, callback) {
  var httpRequest = new XMLHttpRequest()
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
      callback(httpRequest.responseText)
    }
  }
  httpRequest.open('GET', url, true)
  httpRequest.send()
}
