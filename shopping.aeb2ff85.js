function e(e,t,o,l){Object.defineProperty(e,t,{get:o,set:l,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},r={},n=o.parcelRequired7c6;null==n&&((n=function(e){if(e in l)return l[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return l[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},o.parcelRequired7c6=n),n.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return l},function(e){return l=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var l,r,n={};l=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)n[t[o]]=e[t[o]]},r=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("kyEFX").register(JSON.parse('{"3bDNW":"shopping.aeb2ff85.js","lgsSw":"image1.586f8e53.png","26klC":"image2.652b354e.png","ZMyw0":"image3.2cbe462c.png","hAMe3":"iconRemove.2e13b02b.png","lpllV":"shopping.e36c5da7.css","dlck2":"index.8073bf4c.js","kurnV":"index.dd19ba84.js"}')),n("dTazW"),n("8FnLx"),n("fRYpo");var s=n("a3AA9");const i={modalContent:document.querySelector(".modal-content"),overlay:document.querySelector("#overlay-modal"),closeButton:document.querySelector(".js-modal-close"),modal:document.querySelector(".modal"),supportBlock:document.querySelector(".support-block"),articlesContainer:document.querySelector(".shopping-list"),descriptionBlock:document.querySelector(".shopping-description-block"),deleteBtn:document.querySelector(".delete-button"),shoppingItem:document.querySelector(".shopping-item"),cardRemoveBtn:document.querySelector(".add-book-button")},a=e=>{let t=p(),o=t.filter(t=>t._id!==e);localStorage.setItem("bookCard",JSON.stringify(o))};var c={};c=new URL(n("kyEFX").resolve("lgsSw"),import.meta.url).toString();var d={};d=new URL(n("kyEFX").resolve("26klC"),import.meta.url).toString();var u={};u=new URL(n("kyEFX").resolve("ZMyw0"),import.meta.url).toString();var g={};g=new URL(n("kyEFX").resolve("hAMe3"),import.meta.url).toString();const p=()=>{let e=localStorage.getItem("bookCard"),t=JSON.parse(e);return t};function m(){let e=p();e.length>0&&i.descriptionBlock.classList.add("visually-hidden"),b(e)}const b=e=>{i.articlesContainer.innerHTML=e.map(e=>{let{_id:o,book_image:l,title:r,list_name:n,description:s,author:i}=e;return`
            <li id="${o}" data-id="${o}" class="shopping-item">
                <div class="shopping-card-thumb">
                    <img src="${l}" alt="" class="book-img">
                </div>
                <div class="shopping-card-content">
                    <h2 class="book-title">${r}</h2>
                    <p class="book-category">${n}</p>
                    <p class="book-description cut-text">${s}</p>
                    <p class="book-author">${i}</p>
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
                    <img btn-close-id="${o}" class="remove-card-img" src="${t(g)}" alt="">
                </button>
            </li>
        `}).join("")},v=document.querySelector(".new-modal");function f(e){"Escape"===e.key&&(y(),document.removeEventListener("keydown",f))}function y(){i.modal.classList.toggle("active"),i.overlay.classList.toggle("active"),i.overlay.classList.toggle("js-modal-close")}async function k(e){let t=e.target.getAttribute("btn-close-id"),o=e.target.closest("li").dataset.id;a(t),e.target.closest("li")&&!e.target.closest("button")&&(0,s.marckModal)(o).then(e=>{v.innerHTML=e;let t=document.querySelector(".js-btn-add");i.modal.classList.toggle("active"),i.overlay.classList.toggle("active"),t.textContent="remove from the shopping list",t.addEventListener("click",h),document.addEventListener("keydown",f)}),e.target.closest("button")&&(e.target.parentNode.remove(),m(),0===JSON.parse(localStorage.getItem("bookCard")).length&&i.descriptionBlock.classList.remove("visually-hidden"))}function h(e){i.modal.classList.toggle("active"),i.overlay.classList.toggle("active"),i.overlay.classList.toggle("js-modal-close");let t=e.target.getAttribute("data-id"),o=[...document.querySelectorAll(".shopping-item")];o.map(e=>{e.dataset.id===t&&e.remove()}),a(t),m(),0===JSON.parse(localStorage.getItem("bookCard")).length&&i.descriptionBlock.classList.remove("visually-hidden")}document.querySelector(".under-remove-btn-text"),i.closeButton.addEventListener("click",function(){y()}),i.overlay.addEventListener("click",function(e){e.currentTarget===e.target&&y()}),m(),i.articlesContainer.addEventListener("click",k);
//# sourceMappingURL=shopping.aeb2ff85.js.map
