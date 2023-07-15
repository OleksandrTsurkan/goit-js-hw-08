// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGallaryMarkup(galleryItems);
let instance;
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

// const lightbox = new SimpleLightbox(".gallery__link", {
//  captionsData: "alt",
//  captionDelay: 250,
// });

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
   <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `;
    })
    .join("");
}

function openGallery(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
}

galleryList.addEventListener("click", openGallery);

//galleryList.addEventListener("keyup", closeGallery);

function closeGallery(event) {
  if(event.code === 'Escape') {
    document.removeEventListener('keyup', closeGallery);
    instance.close();
}
}

