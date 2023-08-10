// //Encapsulate This Code

// const counter = {
// 	value: 1,

// 	/**
// 	 * Increases counter by 1
// 	 */
// 	increase() {
// 		counter.value += 1;
// 	},

// 	/**
// 	 * Decreases counter by 1
// 	 */
// 	decrease() {
// 		counter.value -= 1;
// 	},

// 	/**
// 	 * Display counter value
// 	 */
// 	display() {
// 		console.log(
// 			counter.value
// 		);
// 	},
// };

// counter.increase();
// counter.increase();
// counter.display();

//Factory Functions

/**
 * @callback Modify
 * @param {number} [amount] - The Amount to modify the value with
 */

/**
 *@returns {Counter}
 */

/**
 * An object that keeps internal state and allows you to increase, decrease and display the counter, value is not accessible from outside the function.
 * @typedef{object} Counter
 * @prop {} increase
 * @prop {} decrease
 * @prop {} display
 */
const createCounter =
	() => {
		let value = 1;
		const increase =
			(amount) => {
				value +=
					amount ||
					1;
			};
		const decrease =
			(amount) => {
				value -=
					amount ||
					1;
			};
		const display =
			() => {
				console.log(
					value
				);
			};
		return {
			increase,
			decrease,
			display,
		};
	};

const counter =
	createCounter();

counter.increase();
counter.decrease(
	10
);
counter.display();
