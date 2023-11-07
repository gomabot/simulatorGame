import { LitElement, html, css } from 'lit';

class SplashBox extends LitElement {
  static styles = css`
    .splashBoxContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
    }

    .button-grow {
      font-size: 17px;
      color: black;
      background-color: white;
      border: 1px solid black;
      padding: 0 16px;
      cursor: pointer;
      height: 60px;
      width: 200px;
      transition: all 0.3s ease-in-out;
    }

    .button-grow:hover {
      transform: scale(1.2);
    }

    .logoContainer {
      transform: translateY(100px);
    }
  `;

  changeSplash() {
    this.dispatchEvent(new CustomEvent('setSplashUnActive'));
  }

  render() {
    return html`
      <div class="splashBoxContainer">
        <div class="logoContainer">
        </div>

        <div class="buttonArea">
          <button class="button-grow" @click=${this.changeSplash}>Start Game</button>
        </div>
      </div>
    `;
  }
}

customElements.define('splash-box', SplashBox);