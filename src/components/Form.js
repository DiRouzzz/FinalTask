import { Component } from '../core/Component';

export class Form extends Component {
	setup(props) {
		this.state = {
			amount: '',
		};

		this.$rootElement = document.createElement('form');
		this.$rootElement.className = 'donate-form';

		const labelEl = document.createElement('label');
		labelEl.className = 'donate-form__input-label';
		labelEl.textContent = 'Введите сумму в $';

		this.$input = document.createElement('input');
		this.$input.className = 'donate-form__donate-input';
		this.$input.name = 'amount';
		this.$input.type = 'number';
		this.$input.max = '100';
		this.$input.min = '1';
		this.$input.setAttribute('required', '');

		this.$button = document.createElement('button');
		this.$button.setAttribute('disabled', '');
		this.$button.className = 'donate-form__submit-button';
		this.$button.type = 'submit';
		this.$button.textContent = 'Задонатить';

		labelEl.appendChild(this.$input);
		this.$rootElement.appendChild(labelEl);
		this.$rootElement.appendChild(this.$button);

		this.$input.addEventListener('input', this.handleInput.bind(this));

		this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
	}

	handleInput(event) {
		this.state.amount = event.target.value;

		this.isValid
			? (this.$button.disabled = false)
			: (this.$button.disabled = true);
	}

	handleSubmit(event) {
		event.preventDefault();

		if (this.isValid) {
			const amount = Number(this.state.amount);
			this.props.onSubmit(amount);

			this.state.amount = '';
			this.$input.value = '';
		}
	}

	get isValid() {
		return this.state.amount >= 1 && this.state.amount <= 100;
	}
}
