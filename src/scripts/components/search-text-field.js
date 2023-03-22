class SearchTextField extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  set keypressEvent(event) {
    this._keypressEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
    <input
        id="searchTextField"
        type="text"
        class="w-full md:w-1/2 lg:w-1/3 border-none p-2 md:p-4 bg-white border-2 rounded-xl text-gray-500 mb-10"
        placeholder="Search for a word / term"
        type="search"
    />
    `;

    this.querySelector('#searchTextField').addEventListener(
      'keypress',
      this._keypressEvent
    );
  }
}

customElements.define('search-text-field', SearchTextField);
