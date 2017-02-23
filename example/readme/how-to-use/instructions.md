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
