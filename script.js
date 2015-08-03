document.queryAll(".view-box").forEach(function(element) {
  new IScroll(element, {
    tap: true,
    scrollbars: "custom",
    fadeScrollbars: true,
    mouseWheel: true,
    HWCompositing: false
  });

  element.queryAll("a").forEach(function(link) {
    link.addEventListener("tap", function() {
      this.click();
    });
  });
});
