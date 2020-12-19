function callAll(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("head")[0].appendChild(src);
}
callAll("assets/js/jquery.min.js");
callAll("assets/js/jquery.scrolly.min.js");
callAll("assets/js/jquery.scrollex.min.js");
callAll("assets/js/browser.min.js");
callAll("assets/js/breakpoints.min.js");
callAll("assets/js/util.js");
callAll("assets/js/main.js");