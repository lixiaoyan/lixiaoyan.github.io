(function() {
  var scrollbar = (function() {
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = "-9999px";
    div.style.top = "-9999px";
    div.style.overflow = "scroll";
    div.style.width = "100px";
    div.style.height = "100px";
    document.body.appendChild(div);
    var width = div.offsetWidth - div.clientWidth;
    var height = div.offsetHeight - div.clientHeight;
    document.body.removeChild(div);
    return {
      width: width,
      height: height
    };
  })();

  var style = document.createElement("style");
  document.body.appendChild(style);
  var index = style.sheet.insertRule(".view-scroll {}", 0);
  var rule = style.sheet.cssRules[index];
  rule.style.overflowY = "scroll";
  rule.style.marginRight = "-" + (scrollbar.width.toString()) + "px";
})();
