import { LitElement, html, css } from './lit.js';
import { Machine, assign } from './xstate.js';

class CounterApp extends LitElement {
  counter = 0;

  machine = Machine(
    {
      id: 'counter',
      initial: 'normal',
      context: {
        counter: 0,
      },
      states: {
        normal: {
          on: {
            INCREMENT: {
              target: 'maximumReached',
              cond: 'isMaxReached',
              actions: 'incrementCounter',
            },
            DECREMENT: {
              target: 'minimumReached',
              cond: 'isMinReached',
              actions: 'decrementCounter',
            },
          },
        },
        minimumReached: {
          on: {
            INCREMENT: 'normal',
            RESET: 'normal',
          },
        },
        maximumReached: {
          on: {
            DECREMENT: 'normal',
            RESET: 'normal',
          },
        },
      },
    },
    {
      actions: {
        incrementCounter: assign({
          counter: (context) => context.counter + 1,
        }),
        decrementCounter: assign({
          counter: (context) => context.counter - 1,
        }),
      },
      guards: {
        isMaxReached: (context) => context.counter <= 5,
        isMinReached: (context) => context.counter >= -5,
      },
    }
  );

  constructor() {
    super();
    this.showResetDisplay = false;
    this.attachEventListeners();
    this.updateCounterDisplay();
  }

  attachEventListeners() {
    this.plusButton = this.shadowRoot.getElementById('plusBtn');
    this.minusButton = this.shadowRoot.getElementById('minusBtn');
    this.resetButton = this.shadowRoot.getElementById('resetBtn');
    this.counterElement = this.shadowRoot.getElementById('counter');

    this.plusButton.addEventListener('click', () => {
      this.machine.send('INCREMENT');
      this.updateCounterDisplay();
    });

    this.minusButton.addEventListener('click', () => {
      this.machine.send('DECREMENT');
      this.updateCounterDisplay();
    });

    this.resetButton.addEventListener('click', () => {
      this.machine.send('RESET');
      this.updateCounterDisplay();
    });
  }

  updateCounterDisplay() {
    if (this.showResetDisplay) {
      this.counterElement.textContent = 'Reset';
      setTimeout(() => {
        this.counterElement.textContent = this.counter;
      }, 2000);
      this.showResetDisplay = false;
    } else {
      this.counterElement.textContent = this.counter;
    }
  }

  render() {
    return html`
      <sl-button-group label="Alignment">
        <sl-button id="minusBtn" size="large" variant="danger" pill>Minus</sl-button>
        <sl-button id="plusBtn" size="large" variant="success">Plus</sl-button>
        <sl-button id="resetBtn" size="large" variant="neutral" pill>Reset</sl-button>
      </sl-button-group>
    `;
  }

  static styles = css`
    #counter {
      width: 230px;
      max-width: 300px;
    }
  `;
}

customElements.define('counter-app', CounterApp);
