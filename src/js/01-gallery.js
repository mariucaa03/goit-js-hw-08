import { galleryItems } from "./gallery-items.js";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryStart = document.querySelector(".gallery");

function createImage() {
let galleryHTML = "";

for (let i = 0; i < galleryItems.length; i++){
galleryHTML += `
<li class="gallery__item">
<a class="gallery__link" href="${galleryItems[i].original}">
<img class="gallery__image"
src="${galleryItems[i].preview}"
alt="${galleryItems[i].description}"
/>
</a>
</li>`;
}
galleryStart.innerHTML = galleryHTML;
}

createImage();

let lightbox = null;

galleryStart.addEventListener("click", e => {
e.preventDefault();

const imageURL = e.target.dataset.source;

lightbox = new SimpleLightbox(`<img src="${imageURL}" width="800" height="600"/>`);
lightbox.show();
}
);

document.addEventListener("keydown", e => {
lightbox.close();
lightbox = null;
}
);