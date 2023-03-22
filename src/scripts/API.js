class API {
  static searchTerm(term) {
    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 404) {
          return Promise.reject(`${term} is not found`);
        }
        return Promise.reject(`An error has occured!`);
      })
      .then((responseJSON) => {
        return Promise.resolve(responseJSON);
      });
  }
}

export default API;
