// Add imports above this line
import { galleryItems } from './gallery-items';
import "simple-lightbox/dist/simpleLightbox.min.css"
import SimpleLightbox from "simplelightbox"
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, description, original }) =>`<li class="gallery__link"><a class="gallery__item" href="${original}"><img class= "gallery__image" src=${preview} alt = "${description}"></a></li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);


const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
