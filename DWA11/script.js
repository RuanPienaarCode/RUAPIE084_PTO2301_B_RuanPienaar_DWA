/**
 * Represents a Redux-inspired store for managing the counter state.
 */
class Store {
	/**
	 * Create a new Store instance.
	 * @constructor
	 * @param {Object} initialState - The initial state of the store.
	 */
	constructor(initialState = {}) {
		this.state = initialState;
		this.subscribers = [];
	}

	/**
	 * Get the current state of the store.
	 * @returns {Object} The current state.
	 */
	getState() {
		return {
			...this.state,
		};
	}

	/**
	 * Dispatch an action to update the state.
	 * @param {Object} action - The action object with a "type" property.
	 */
	dispatch(action) {
		this.state = this.reducer(this.state, action);
		this.notifySubscribers();
	}

	/**
	 * Subscribe a callback function to be notified of state changes.
	 * @param {Function} callback - The callback function to be called on state changes.
	 * @returns {Function} A function to unsubscribe the callback.
	 */
	subscribe(callback) {
		this.subscribers.push(callback);
		return () => {
			this.subscribers = this.subscribers.filter((subscriber) => subscriber !== callback);
		};
	}

	/**
	 * Notify all subscribers of a state change.
	 */
	notifySubscribers() {
		this.subscribers.forEach((subscriber) => subscriber(this.getState()));
	}

	/**
	 * Set the reducer function to handle state updates.
	 * @param {Function} reducer - The reducer function.
	 */
	setReducer(reducer) {
		this.reducer = reducer;
	}
}

// Create a new instance of the store with initial state and reducer
const counterStore = new Store({
	count: 0,
});

// Define a reducer function
const counterReducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1,
			};
		case 'DECREMENT':
			return {
				...state,
				count: Math.max(0, state.count - 1),
			};
		case 'RESET':
			return {
				...state,
				count: 0,
			};
		default:
			return state;
	}
};

// Set the reducer for the store
counterStore.setReducer(counterReducer);

// Select DOM elements
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');
const counterElement = document.getElementById('counter');

// Function to update the UI based on the state
const updateUI = (state) => {
	counterElement.textContent = state.count;
};

// Subscribe the updateUI function to the store
const unsubscribe = counterStore.subscribe(updateUI);

// Attach event listeners to buttons
plusButton.addEventListener('click', () => {
	counterStore.dispatch({
		type: 'INCREMENT',
	});
});

minusButton.addEventListener('click', () => {
	counterStore.dispatch({
		type: 'DECREMENT',
	});
});

resetButton.addEventListener('click', () => {
	counterStore.dispatch({
		type: 'RESET',
	});
});

// Initial UI update
updateUI(counterStore.getState());
