import API from '../api';

const main = () => {
  const searchElement = document.querySelector('search-text-field');

  const onSearchTextFieldKeypress = (event) => {
    if (event.target.value !== '') {
      if (event.key === 'Enter') {
        API.searchTerm(event.target.value).then((data) => console.log(data));
      }
    }
  };

  searchElement.keypressEvent = onSearchTextFieldKeypress;
};

export default main;
