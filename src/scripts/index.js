('use strict');

import '../styles/index.scss';
import hej5 from './giphy.js';
import queryString from 'query-string';

const apiKey = process.env.GIPHY_API_KEY;
const searchBtn = document.querySelector('.search__button');
const searchField = document.querySelector('.search__field');
const gallery = document.querySelector('.gallery');
const notFound = document.querySelector('.not-found');

searchBtn.addEventListener('click', event => {
  event.preventDefault();
  gallery.innerHTML = '';
  notFound.classList.remove('not-found--active');
  const input = searchField.value;
  const searchQuery = queryString.stringify({
    api_key: apiKey,
    q: input,
    limit: 5
  });
  fetch('https://api.giphy.com/v1/gifs/search?' + searchQuery)
    .then(res => {
      return res.json();
    })
    .then(json => {
      if (json.data.length == 0) {
        notFound.classList.add('not-found--active');
        notFound.textContent = `We couldn't find any GIFs with the search query "${input}".`;
      } else {
        json.data.forEach(gif => {
          const url = gif.images.downsized.url;
          const a = document.createElement('a');
          const img = document.createElement('img');
          a.classList.add('gallery__item');
          img.src = url;
          a.appendChild(img);
          gallery.appendChild(a);
        });
      }
    });
});
