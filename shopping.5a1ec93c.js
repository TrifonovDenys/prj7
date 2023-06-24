function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){l[e]=t},o.parcelRequired7c6=r),r.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return l},function(e){return l=e});var n,l,r={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)r[t[o]]=e[t[o]]},l=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("kyEFX").register(JSON.parse('{"3bDNW":"shopping.5a1ec93c.js","lgsSw":"image1.586f8e53.png","26klC":"image2.652b354e.png","ZMyw0":"image3.2cbe462c.png","hAMe3":"iconRemove.2e13b02b.png","lpllV":"shopping.e36c5da7.css","dlck2":"index.ff2fb770.js","kurnV":"index.0b314569.js"}')),r("dTazW"),r("8FnLx"),r("fRYpo");var i=r("a3AA9");const a={modalContent:document.querySelector(".modal-content"),overlay:document.querySelector("#overlay-modal"),closeButton:document.querySelector(".js-modal-close"),modal:document.querySelector(".modal"),supportBlock:document.querySelector(".support-block"),articlesContainer:document.querySelector(".shopping-list"),descriptionBlock:document.querySelector(".shopping-description-block"),deleteBtn:document.querySelector(".delete-button"),shoppingItem:document.querySelector(".shopping-item"),cardRemoveBtn:document.querySelector(".add-book-button")},s=e=>{let t=g(),o=t.filter(t=>t._id!==e);localStorage.setItem("bookCard",JSON.stringify(o))};var c={};c=new URL(r("kyEFX").resolve("lgsSw"),import.meta.url).toString();var d={};d=new URL(r("kyEFX").resolve("26klC"),import.meta.url).toString();var u={};u=new URL(r("kyEFX").resolve("ZMyw0"),import.meta.url).toString();var p={};p=new URL(r("kyEFX").resolve("hAMe3"),import.meta.url).toString();const g=()=>{let e=localStorage.getItem("bookCard"),t=JSON.parse(e);return t};function m(){let e=g();e.length>0&&a.descriptionBlock.classList.add("visually-hidden"),b(e)}const b=e=>{a.articlesContainer.innerHTML=e.map(e=>{let{_id:o,book_image:n,title:l,list_name:r,description:i,author:a}=e;return`
            <li id="${o}" data-id="${o}" class="shopping-item">
                <div class="shopping-card-thumb">
                    <img src="${n}" alt="" class="book-img">
                </div>
                <div class="shopping-card-content">
                    <h2 class="book-title">${l}</h2>
                    <p class="book-category">${r}</p>
                    <p class="book-description cut-text">${i}</p>
                    <p class="book-author">${a}</p>
                    <ul class="buy-links-list list">
                        <li class="buy-links-item">
                            <a target="_blank" href="https://goto.applebooks.apple/9781250144058?at=10lIEQ" class="buy-link">
                                <img src="${t(c)}" alt="">
                            </a>
                        </li>
                        <li class="buy-links-item">
                            <a target="_blank" href="https://goto.applebooks.apple/9781250144058?at=10lIEQ" class="buy-link">
                                <img src="${t(d)}" alt="">
                            </a>
                        </li>
                        <li class="buy-links-item">
                            <a target="_blank" href="https://goto.applebooks.apple/9781250144058?at=10lIEQ" class="buy-link">
                                <img src="${t(u)}" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <button btn-close-id="${o}" class="delete-button" type="button">
                    <img btn-close-id="${o}" class="remove-card-img" src="${t(p)}" alt="">
                </button>
            </li>
        `}).join("")};function f(e){"Escape"===e.key&&(v(),document.removeEventListener("keydown",f))}function v(){a.modal.classList.toggle("active"),a.overlay.classList.toggle("active"),a.overlay.classList.toggle("js-modal-close")}async function k(e){let t=e.target.getAttribute("btn-close-id"),o=e.target.closest("li").dataset.id;s(t),e.target.closest("li")&&!e.target.closest("button")&&(0,i.marckModal)(o).then(e=>{a.modalContent.innerHTML=e,a.cardRemoveBtn.setAttribute("data-id",o),a.modal.classList.toggle("active"),a.overlay.classList.toggle("active"),document.addEventListener("keydown",f),a.cardRemoveBtn.textContent="remove from the shopping list"}),e.target.closest("button")&&(e.target.parentNode.remove(),m())}a.cardRemoveBtn.addEventListener("click",function(e){let t=a.cardRemoveBtn.getAttribute("data-id"),o=document.getElementById(`${t}`);o.remove(),s(t),m(),v()}),a.closeButton.addEventListener("click",function(){v()}),a.overlay.addEventListener("click",function(e){e.currentTarget===e.target&&v()}),m(),a.articlesContainer.addEventListener("click",k);
//# sourceMappingURL=shopping.5a1ec93c.js.map
