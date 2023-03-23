class TermItem extends HTMLElement {
  constructor() {
    super();
  }

  set term(term) {
    this._term = term;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="flex flex-col gap-3 w-full bg-white p-10 rounded-xl h-fit mb-5">
        <div class="flex items-baseline gap-3">
          <div class="text-5xl font-serif font-bold">${this._term.word}</div>
          <div class="text-2xl font-sans">${this._term.phonetic}</div>
        </div>
        <hr />
        ${this._term.meanings
          .map((meaning) => {
            return `
            <div class="text-2xl italic text-blue-500">${
              meaning.partOfSpeech
            }</div>
            <div class="ml-5 text-lg">
                <ul class="list-none flex flex-col w-full">
                    ${meaning.definitions
                      .map((item, index) => {
                        return `
                        <li class="grid grid-cols-12 gap-3 w-full mb-3">
                            <div class="col-span-1 text-gray-500 text-base text-center">
                                ${index + 1}
                            </div>
                            <div class="col-span-11">
                                <div>${item.definition}</div>
                                ${
                                  item.example
                                    ? `<div class="italic text-gray-400">${item.example}</div>`
                                    : ``
                                }
                            </div>
                        </li>
                        `;
                      })
                      .join('')}
                </ul>
            </div>
            `;
          })
          .join('')}
    </div>
    `;
  }
}

customElements.define('term-item', TermItem);
