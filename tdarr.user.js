// ==UserScript==
// @name         Tdarr
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tdarr.frostii.duckdns.org/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=duckdns.org
// @grant unsafeWindow
// ==/UserScript==

(function(open) {
    XMLHttpRequest.prototype.open = function() {
        this.addEventListener("readystatechange", function() {
            if (this.responseURL.includes("auth-status")) {
                Object.defineProperty(this, 'responseText', {
                    writable: true
                });
                Object.defineProperty(this, 'response', {
                    writable: true
                });
                this.responseText = "true";
                this.response = "true";
            }
        }, false);
        open.apply(this, arguments);
    };
})(XMLHttpRequest.prototype.open);

// (function() {
//     'use strict';
//     setTimeout(function() {

// var divs =document.getElementsByClassName("history-graphs-blurred");

// divs=Array.from(divs);

// divs.forEach(function(div){
//   div.classList.remove('history-graphs-blurred');
//  });

//     divs =document.getElementsByClassName("graph-login-button");

// divs=Array.from(divs);

// divs.forEach(function(div){
//   div.remove()
//  });
//     }, 100);
// })();
