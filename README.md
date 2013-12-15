# liquid-src - Fluid links management

Managing a large collection of links can be a pain. What if your super-awesome
client keeps sending you new YouTube promos to show-off on their websites? Do
they actually expect you to `sed` your way through each of their 150 web pages?

Liquid-src provides a simple means for you to store your collection of links in
one single place (a `links.js` file), allowing multiple pages to share the same
assets (even across multiple domains!) and to be modified from one location.

## Installation

Simply include the (extremely lightweight)
[JavaScript library](https://raw.github.com/ChrisCummins/liquid-src/master/dist/liquid-src-latest.min.js)
or download your own copy, then include it in your HTML files (note, requires
jQuery). Create your links file and include that too:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://chriscummins.github.io/liquid-src/js/liquid-src-latest.min.js"></script>
<script src="js/links.js"></script>
```

Here's a sample `links.js` file:

```js
$.data(document.body, 'liquid-src', {
  "iframe": {
    "gangnam-style": "http://www.youtube.com/embed/9bZkp7q19f0",
    "higgs-boson-blues": "http://www.youtube.com/embed/1GWsdqCYvgw"
  },
  "img": {
    "google-logo": "https://www.google.co.uk/images/srpr/logo11w.png"
  },
  "script": {
    "jquery-ui": "//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"
  }
});
```

## Usage

Any time you want to use one of your links, simple add the `liquid-src` class to
the element, and instead of setting the `src` attribute to point to a URL, set a
`data-src` attribute to the name which you gave the link in `links.js`. For
example, to include the Google logo from the above example:

```html
<img class="liquid-src" data-src="google-logo"/>
```

It works on any kind of tag with a `src=` attribute!

```html
<!-- YouTube videos -->
<iframe class="liquid-src" data-src="gangnam-style" width="420" height="315" frameborder="0" allowfullscreen></iframe>

<!-- JavaScript libraries -->
<script class="liquid-src" data-src="jquery-ui"/></script>
```

## License

Fluid-src is licensed under the Apache License, Version 2.0. [View the license
file](LICENSE).

Copyright 2013 Chris Cummins.