/**
 * Represents a counter application that increments, decrements, and resets a counter.
 */
class CounterApp {
  /**
   * Create a new CounterApp instance.
   * @constructor
   */
  constructor() {
    /** @type {number} The current counter value. */
    this.counter = 0;

    /** @type {boolean} Flag to control the reset display. */
    this.showResetDisplay = false;

    /** @type {HTMLElement} The plus button element. */
    this.plusButton = document.getElementById('plus');

    /** @type {HTMLElement} The minus button element. */
    this.minusButton = document.getElementById('minus');

    /** @type {HTMLElement} The reset button element. */
    this.resetButton = document.getElementById('reset');

    /** @type {HTMLElement} The counter element. */
    this.counterElement = document.getElementById('counter');

    // Attach event listeners to buttons
    this.attachEventListeners();

    // Update the initial counter display
    this.updateCounterDisplay();
  }

  /**
   * Attach event listeners to the buttons.
   * @private
   */
  attachEventListeners() {
    /**
     * Event listener for the plus button click.
     */
    this.plusButton.addEventListener('click', () => {
      // Increment the counter value
      this.counter++;
      // Update the counter display
      this.updateCounterDisplay();
    });

    /**
     * Event listener for the minus button click.
     */
    this.minusButton.addEventListener('click', () => {
      // Decrement the counter value if it's greater than 0
      if (this.counter > 0) {
        this.counter--;
        // Update the counter display
        this.updateCounterDisplay();
      }
    });

    /**
     * Event listener for the reset button click.
     */
    this.resetButton.addEventListener('click', () => {
      // Reset the counter value to 0 and show "Reset" briefly
      this.counter = 0;
      this.showResetDisplay = true;
      // Update the counter display
      this.updateCounterDisplay();
    });
  }

  /**
   * Update the counter display based on the current counter value.
   * @private
   */
  updateCounterDisplay() {
    if (this.showResetDisplay) {
      // Display "Reset" temporarily before showing the counter value
      this.counterElement.textContent = 'Reset';
      setTimeout(() => {
        this.counterElement.textContent = this.counter;
      }, 2000);
      this.showResetDisplay = false;
    } else {
      // Display the current counter value
      this.counterElement.textContent = this.counter;
    }
  }
}

// Create an instance of the CounterApp class
const counterApp = new CounterApp();
