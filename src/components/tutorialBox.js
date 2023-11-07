import { LitElement, html, css } from 'lit';

class TutorialBox extends LitElement {
  static styles = css`
    .tutorialBoxContainer {
      background-color: #626275;
      width: 600px;
      height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .tutorialButtonArea {
      background-color: #626275;
    }

    .textTutorialContainer {
      color: white;
    }

    .button-grow {
      color: black;
      background-color: white;
      border: 1px solid black;
      padding: 0 16px;
      cursor: pointer;
      height: 40px;
      transition: all 0.3s ease-in-out;
    }

    .button-grow:hover {
      transform: scale(1.2);
    }

    h1 {
      color: white;
      font-size: 30px;
    }

    .mt-5 {
      margin-top: 1.25rem;
    }

    .mt-10 {
      margin-top: 2.5rem;
    }

    .mt-3 {
      margin-top: 0.75rem;
    }

    .text-center {
      text-align: center;
    }

    .grid {
      display: grid;
    }

    .col-start-2 {
      grid-column-start: 2;
    }

    .col-span-4 {
      grid-column-end: span 4;
    }

    .sm\\:w-80 {
      width: 20rem;
    }

    .sm\\:h-5\\/6 {
      height: 83.33vh;
    }

    .sm\\:w-1\\/3 {
      width: 33.33%;
    }

    .mt-72 {
      margin-top: 4.5rem;
    }

    .sm\\:mt-64 {
      margin-top: 4rem;
    }

    .mb-10 {
      margin-bottom: 2.5rem;
    }
  `;

  changeTutorial() {
    this.dispatchEvent(new CustomEvent('setTutorialUnActive', { detail: false }));
  }

  render() {
    return html`
      <div class="tutorialBoxContainer">
        <div class="logoTutorialContainer mt-5">
          <h1>Tutorial</h1>
        </div>
        <div class="textTutorialContainer">
          <p class="mt-10 text-center">
            Your goal is to have a valuation of $1 billion by the end of the year
          </p>
          <p class="mt-3">Keep everyone happy :-)</p>
          <p class="mt-3">And use your time wisely!</p>
        </div>
        <div class="tutorialButtonArea">
          <button
            class="button-grow col-start-2 col-span-4 mt-72 sm:mt-64 mb-10"
            @click=${this.changeTutorial}
          >
            I'm ready!
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('tutorial-box', TutorialBox);