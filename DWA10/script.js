// Select elements from the DOM
const plusButton =
	document.getElementById(
		'plus'
	);
const minusButton =
	document.getElementById(
		'minus'
	);
const resetButton =
	document.getElementById(
		'reset'
	);
const counterElement =
	document.getElementById(
		'counter'
	);
// Initialize the counter variable
let counter = 0;
// Flag to control the reset display
let showResetDisplay = false;
// Update the counter element's text content
function updateCounterDisplay() {
	if (
		showResetDisplay
	) {
		counterElement.textContent =
			'Reset';
		setTimeout(
			() => {
				counterElement.textContent =
					counter;
			},
			1000
		);
	} else {
		counterElement.textContent =
			counter;
	}
}
// Event listener for the plus button
plusButton.addEventListener(
	'click',
	() => {
		counter++;
		updateCounterDisplay();
	}
);
// Event listener for the minus button
minusButton.addEventListener(
	'click',
	() => {
		counter--;
		updateCounterDisplay();
	}
);
// Event listener for the reset button
resetButton.addEventListener(
	'click',
	() => {
		counter = 0;
		showResetDisplay = true;
		updateCounterDisplay();
	}
);
// Initial counter display
updateCounterDisplay();
