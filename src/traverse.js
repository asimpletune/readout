/**
 * opts {
 *  each: fn(node),
 *  leaf: fn(node),
 *  sibling: fn(node),
 *  parent: TODO
 *   includeRoot: TODO
 * }
 */
function traverse (tw, opts) {
  function fn () {
    if (!tw.currentNode.isEqualNode(tw.root)) {
      opts.each(tw.currentNode)
    }
    if (tw.firstChild()) {
      fn()
    } else {
      opts.leaf(tw.currentNode)
    }
    opts.sibling(tw.currentNode)
    if (tw.nextSibling()) {
      fn()
    } else {
      tw.parentNode()
      return
    }
  }

  fn()
}

export default traverse
