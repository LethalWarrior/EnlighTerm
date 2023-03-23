import './term-item.js';

class TermList extends HTMLElement {
  constructor() {
    super();
  }

  set terms(terms) {
    this._terms = terms;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._terms.forEach((term) => {
      const termItemElement = document.createElement('term-item');
      termItemElement.term = term;

      this.appendChild(termItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `<h2 class="text-center text-2xl">${message}</h2>`;
  }
}

customElements.define('term-list', TermList);
