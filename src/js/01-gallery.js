// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector('.gallery');
const galerryMarkup = createGalleryMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('afterbegin', galerryMarkup);

function createGalleryMarkup(galleryItems) {
  const imageMarkUp = galleryItems
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}"
                />
              </a>
            </div>
      `;
    })
    .join('');
  return imageMarkUp;
}

const imageLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
