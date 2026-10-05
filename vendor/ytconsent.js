/* Zwei-Klick-Loesung: YouTube wird erst nach ausdruecklichem Klick geladen. */
(function () {
  function load(ph) {
    var f = document.createElement("iframe");
    var src = ph.getAttribute("data-src");
    f.src = src + (src.indexOf("?") > -1 ? "&" : "?") + "autoplay=1";
    f.setAttribute("allow", ph.getAttribute("data-allow") ||
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    f.setAttribute("allowfullscreen", "");
    f.setAttribute("title", ph.getAttribute("data-title") || "Video");
    f.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;border:none;border-radius:8px;";
    ph.parentNode.replaceChild(f, ph);
  }
  function init() {
    var list = document.querySelectorAll(".ytc");
    for (var i = 0; i < list.length; i++) {
      (function (ph) {
        ph.addEventListener("click", function () { load(ph); });
        ph.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); load(ph); }
        });
      })(list[i]);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
