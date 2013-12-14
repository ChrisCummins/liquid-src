var LiquidSrc = LiquidSrc || {};

(function() {
  'use strict';

  /*
   * 3 - The ID component, and any query string attached to the end.
   */
  var youTubeURLRegexp = new RegExp(['^(https?:\/\/)?(www\.)?youtube\.com',
                                     '\/watch.v=?',
                                     '([a-zA-Z0-9\?=&]+)'].join(''));

  function warning(msg) {
    console.log('warning: ' + msg);
  }

  function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] === obj) {
        return true;
      }
    }
    return false;
  }

  function isValidYouTubeID(url) {
    return url.match(youTubeURLRegexp) !== null;
  }

  function getYouTubeVideoID(url) {
    return url.match(youTubeURLRegexp)[3];
  }

  function linkIsValid(link, links) {
    return (link.category &&
            link.name  &&
            links[link.category] &&
            links[link.category][link.name]
           );
  }

  function getLinkURL(link, links) {

    function getYouTubeURL(value) {
      var id = getYouTubeVideoID(value);
      return 'http://www.youtube.com/embed/' + id;
    }

    var value = links[link.category][link.name];

    if (isValidYouTubeID(value))
      var url = getYouTubeURL(value);
    else
      var url = value;

    return url;
  }

  function getElementCategory(element) {
    return element.get(0).tagName.toLowerCase();
  }

  function getElementLink(element) {
    return element.attr('data-src');
  }

  $(document).ready(function() {

    var links = $.data(document.body, 'liquid-src');

    $('.liquid-src').each(function(index) {

      var link = {
        category: getElementCategory($(this)),
        name: getElementLink($(this))
      };

      if (!linkIsValid(link, links)) {
        return warning('Liquid link "' + link.category +
                       '.' + link.name + '" is invalid!');
      }

      /* Lookup the link value */
      $(this).attr('src', getLinkURL(link, links));
    });

  });

}).call(LiquidSrc);
