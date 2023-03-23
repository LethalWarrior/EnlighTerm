import API from '../API';

const main = () => {
  const searchElement = document.querySelector('search-text-field');
  const termListElement = document.querySelector('term-list');

  const onSearchTextFieldKeypress = (event) => {
    if (event.target.value !== '') {
      if (event.key === 'Enter') {
        API.searchTerm(event.target.value)
          .then(renderResult)
          .catch(fallbackResult);
      }
    }
  };

  const renderResult = (results) => {
    termListElement.terms = results;
  };

  const fallbackResult = (message) => {
    termListElement.renderError(message);
  };

  searchElement.keypressEvent = onSearchTextFieldKeypress;
};

export default main;
