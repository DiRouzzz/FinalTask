import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
	setup(props) {
		this.state = {
			total: 0,
			donates: [],
		};

		this.$rootElement = document.createElement('div');
		this.$rootElement.className = 'app';

		const h1El = document.createElement('h1');
		h1El.className = 'total-amount';
		h1El.textContent = 'Итого: $';

		this.$total = document.createElement('span');
		this.$total.textContent = `${this.state.total}`;

		h1El.appendChild(this.$total);
		this.$rootElement.appendChild(h1El);

		const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
		this.$rootElement.appendChild(donateForm.$rootElement);
		const donateList = new List();
		this.$rootElement.appendChild(donateList.$rootElement);

		this.donateList = donateList;
	}

	onItemCreate(amount) {
		const item = new ListItem({
			amount,
			onDelete: this.onItemDelete.bind(this),
		});
		this.state.donates.push(item);
		this.donateList.addItem(item);
		this.state.total += amount;
		this.$total.textContent = `${this.state.total}`;
	}

	onItemDelete(id, amount) {
		this.state.donates = this.state.donates.filter(
			item => item.state.id !== id
		);
		this.state.total -= amount;
		this.$total.textContent = `${this.state.total}`;

		const itemElement = document.getElementById(id);
		if (itemElement) {
			itemElement.remove();
		}
	}
}
