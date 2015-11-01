document.addEventListener("DOMContentLoaded", function() {
  requestAnimationFrame(function() {
    var header = document.querySelector(".header");
    header.classList.add("active");
    header.addEventListener("transitionend", function handler() {
      header.classList.remove("active");
      header.classList.remove("hide");
      header.removeEventListener("transitionend", handler);
    });
  });
});
