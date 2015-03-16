(function() {
  var forEach = Array.prototype.forEach;
  var query = document.querySelector.bind(document);
  var queryAll = document.querySelectorAll.bind(document);
  
  forEach.call(queryAll("a[data-dialog]"), function(ele) {
    (function(ele, id) {
      var dialog = query(".dialog[data-id='" + id +"']");
      var mask = dialog.parentElement;
      ele.onclick = function(e) {
        mask.setAttribute("data-show", "");
        dialog.setAttribute("data-show", "");
      };
    })(ele, ele.dataset["dialog"]);
  });
  
  forEach.call(queryAll(".dialog"), function(dialog) {
    var mask = dialog.parentElement;
    mask.onclick = function(e) {
      if(e.target == this) {
        mask.removeAttribute("data-show");
        dialog.removeAttribute("data-show");
      }
    };
  });
})();