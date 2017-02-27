## Options

The constructor accepts the following options:

* `namespace`: You can specify your own custom namespace, instead of `data-readout-src`, but it must follow the string pattern `data-\*`
* `calllback: function(el, html)`: You can add a callback that accepts `el` and `html` as parameters. By default `el` just gets assigned the resulting `html`.
