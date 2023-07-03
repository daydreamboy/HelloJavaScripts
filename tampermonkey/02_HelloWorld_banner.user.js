// ==UserScript==
// @name         HelloWorld
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       wesley chen
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_log
// @run-at       document-end
// @require https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';
    var banner = $("<div id='hello_banner'><p style='color: red;'>Hello Tampermonkey!</p></div>");
    banner.css({
        "display": "flex",
        "align-items": "center",
        "top": "0px",
        "background-color": "#FFFFFF",
        "width": "100%",
        "height": "30px",
        "border": "2px solid red",
        "z-index": "10000",
    });
    $('body').prepend(banner);
})();
