!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire4c75;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire4c75=r),(0,r.register)("dCfNN",function(t,n){var r="Expected a function",i=0/0,o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==v.call(t))return i;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=u.test(e);return r||f.test(e)?l(e.slice(2),r?2:8):a.test(e)?i:+e}t.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw TypeError(r);function x(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function O(e){var n=e-l,r=e-c;return void 0===l||n>=t||n<0||d&&r>=a}function S(){var e,n,r,i=g();if(O(i))return h(i);f=setTimeout(S,(e=i-l,n=i-c,r=t-e,d?p(r,a-n):r))}function h(e){return(f=void 0,v&&i)?x(e):(i=o=void 0,u)}function j(){var e,n=g(),r=O(n);if(i=arguments,o=this,l=n,r){if(void 0===f)return c=e=l,f=setTimeout(S,t),s?x(e):u;if(d)return f=setTimeout(S,t),x(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},j.flush=function(){return void 0===f?u:h(g())},j}(e,t,{leading:i,maxWait:t,trailing:o})}});var i=r("dCfNN");let o=document.querySelector(".feedback-form"),a=o.querySelector('input[name="email"]'),u=o.querySelector('textarea[name="message"]');o.querySelector('button[type="submit"]');let f=(i&&i.__esModule?i.default:i)(function(){let e={email:a.value,message:u.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))},500);document.addEventListener("DOMContentLoaded",function(){let e=localStorage.getItem("feedback-form-state");if(null!==e){let t=JSON.parse(e);a.value=t.email,u.value=t.message}}),o.addEventListener("input",f),o.addEventListener("submit",function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),console.log({email:a.value,message:u.value})})}();
//# sourceMappingURL=03-feedback.d9dadeee.js.map
