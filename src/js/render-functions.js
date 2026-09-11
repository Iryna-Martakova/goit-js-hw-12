import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadButton = document.querySelector('.load-btn');


let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function imageTemplate({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="info">
        <p class="info-label">Likes <span class="info-value">${likes}</span></p>
        <p class="info-label">Views <span class="info-value">${views}</span></p>
        <p class="info-label">Comments <span class="info-value">${comments}</span></p>
        <p class="info-label">Downloads <span class="info-value">${downloads}</span></p>
      </div>
    </li>
  `;
}

export function createGallery(images) {
  const markup = images.map(imageTemplate).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadButton.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadButton.classList.add('hidden');
}