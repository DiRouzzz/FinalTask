import { Component } from '../core/Component';

export class List extends Component {
	setup() {
		this.$rootElement = document.createElement('div');
		this.$rootElement.className = 'donates-container';

		const h2El = document.createElement('h2');
		h2El.className = 'donates-container__title';
		h2El.textContent = 'Список донатов';

		this.$listContainer = document.createElement('div');
		this.$listContainer.className = 'donates-container__donates';

		this.$rootElement.appendChild(h2El);
		this.$rootElement.appendChild(this.$listContainer);
	}

	addItem(item) {
		this.$listContainer.appendChild(item.$rootElement);
	}
}
