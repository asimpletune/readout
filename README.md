# readout
A tool for inserting markdown content into your site as HTML.

This project is early in its development. The premise is that when it comes to writing actual content, you probably don't need anything besides markdown. As a huge fan of it, I'd like to be able to write all of my "word-stuff" in good ol' markdown, but insert it nicely into a page.

**To see an example:** view a readout of this README on the [readout site](http://asimpletune.github.io/readout/).

## Installation

Install readout via bower or npm.
```bash
bower install readout-markdown
```

or

```bash
npm install readout-markdown
```

## How to use

1. Put dependencies into your html or template

    ```html
    <script type="text/javascript" src="/bower_components/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="/bower_components/readout/dist/readout.js"></script>
    ```

2. Add the `data-readout-src` attribute where you want your markdown inserted into in your HTML, with the value being the path to the markdown file, as shown below.

    ```html
    <article data-readout-src="/content/hello.md"></article>
    ```

    You can also nest your markdown, to match your file-system's hierarchy. For example:

    ```bash
    # Directory of resources
    content/
    ├── example.md
    └── hello.md
    ```

    ```html
    <div data-readout-src="content">
      <div data-readout-src="example.md"></div>
      <div data-readout-src="hello.md"></div>
    </div>
    ```

3. Call readout!

    ```html
    <script type="text/javascript">
      $(function() {
        Readout();
      });
    </script>
    ```

## Options

The constructor accepts the following options:

* `namespace`: You can specify your own custom namespace, instead of `data-readout-src`, but it must follow the string pattern `data-\*`
* `calllback: function(el, html)`: You can add a callback that accepts `el` and `html` as parameters. By default `el` just gets assigned the resulting `html`.
