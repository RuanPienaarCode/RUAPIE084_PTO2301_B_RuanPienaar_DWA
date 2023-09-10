import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

/**
 * Represents a LitElement component that displays the state of the app.
 */
class UpdateStateApp extends LitElement {
  /**
   * CSS styles for the component.
   * @type {CSSResult}
   */
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
  `;

  /**
   * Properties and their types for the component.
   * @type {Object}
   * @property {number} counter - The counter value to determine the state.
   */
  static properties = {
    /**
     * The current counter value to determine the state.
     * @type {number}
     */
    counter: { type: Number },
  };

  /**
   * Renders the component based on the current counter value.
   * @returns {TemplateResult} The HTML template.
   */
  render() {
    /**
     * The text to display representing the state.
     * @type {string}
     */
    let stateText = '';

    if (this.counter === -5) {
      stateText = 'Minimum Reached';
    } else if (this.counter === 5) {
      stateText = 'Maximum Reached';
    } else {
      stateText = 'Normal';
    }

    return html` <p>State: ${stateText}</p> `;
  }
}

customElements.define('update-state-app', UpdateStateApp);

/**
 * Represents a counter application that increments, decrements, and resets a counter.
 */
class CounterApp {
  /**
   * Create a new CounterApp instance.
   * @constructor
   */
  constructor() {
    /**
     * The current counter value.
     * @type {number}
     */
    this.counter = 0;

    /**
     * Flag to control the reset display.
     * @type {boolean}
     */
    this.showResetDisplay = false;

    /**
     * The plus button element.
     * @type {HTMLElement}
     */
    this.plusButton = document.getElementById('plus');

    /**
     * The minus button element.
     * @type {HTMLElement}
     */
    this.minusButton = document.getElementById('minus');

    /**
     * The reset button element.
     * @type {HTMLElement}
     */
    this.resetButton = document.getElementById('reset');

    /**
     * The counter element.
     * @type {HTMLElement}
     */
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
     * @listens click
     */
    this.plusButton.addEventListener('click', () => {
      /**
       * Increment the counter value if it's less than 5.
       * @type {number}
       */
      if (this.counter < 5) {
        this.counter++;
        // Update the counter display
        this.updateCounterDisplay();
        // Update the counter property of the UpdateStateApp component
        document.querySelector('update-state-app').counter = this.counter;
      }
    });

    /**
     * Event listener for the minus button click.
     * @listens click
     */
    this.minusButton.addEventListener('click', () => {
      /**
       * Decrement the counter value if it's greater than -5.
       * @type {number}
       */
      if (this.counter > -5) {
        this.counter--;
        // Update the counter display
        this.updateCounterDisplay();
        // Update the counter property of the UpdateStateApp component
        document.querySelector('update-state-app').counter = this.counter;
      }
    });

    /**
     * Event listener for the reset button click.
     * @listens click
     */
    this.resetButton.addEventListener('click', () => {
      /**
       * Reset the counter value to 0 and show "Reset" briefly.
       * @type {number}
       */
      this.counter = 0;
      this.showResetDisplay = true;
      // Update the counter display
      this.updateCounterDisplay();
      // Update the counter property of the UpdateStateApp component
      document.querySelector('update-state-app').counter = this.counter;
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
