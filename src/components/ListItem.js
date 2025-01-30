import { Component } from '../core/Component';

export class ListItem extends Component {
	setup(props) {
		this.state = {
			id: Date.now(),
			date: new Date(),
			amount: props.amount,
		};

		const bEl = document.createElement('b');
		bEl.textContent = `$${this.state.amount}`;

		const btnDelete = document.createElement('button');
		btnDelete.className = 'delete-button';
		btnDelete.textContent = 'Удалить';

		this.$rootElement = document.createElement('div');
		this.$rootElement.className = 'donate-item';
		this.$rootElement.id = this.state.id;
		this.$rootElement.textContent = `${this.formattedDate()} -`;

		this.$rootElement.appendChild(bEl);
		this.$rootElement.appendChild(btnDelete);

		btnDelete.addEventListener('click', () => {
			console.log('id', this.state.id);
			console.log('amount', this.state.amount);

			this.props.onDelete(this.state.id, this.state.amount);
		});
	}

	formattedDate() {
		return this.state.date.toLocaleString('ru-RU', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
	}
}
