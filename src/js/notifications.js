import Notiflix from 'notiflix';

function notifyNoPictures() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function notifyEndOfResults() {
  Notiflix.Notify.info(
    "We're sorry, but you've reached the end of search results."
  );
}

export { notifyNoPictures, notifyEndOfResults };