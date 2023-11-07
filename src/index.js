import { LitElement, html, css } from 'lit';
import './components/navBox.js';
import './components/splashBox.js';
import './components/tutorialBox.js';
import './components/playerBox.js';


class IndexPage extends LitElement {
  static properties = {
    splashIsActive: {type: Boolean},
    tutorialIsActive: {type: Boolean},
    gameIsActive: {type: Boolean},
    loseIsActive: {type: Boolean},
    winIsActive: {type: Boolean},
  };

  constructor() {
    super();
    this.splashIsActive = true;
    this.tutorialIsActive = false;
    this.gameIsActive = false;
    this.loseIsActive = false;
    this.winIsActive = false;
  }



  setSplashUnActive() {
    this.splashIsActive = false;
    this.tutorialIsActive = true;

  }

  setTutorialUnActive() {
    this.tutorialIsActive = false;
    this.gameIsActive = true;
  }

  setSplashActive() {
    this.gameIsActive = false;
    this.loseIsActive = true;
  }

  setLoseUnActive() {
    this.loseIsActive = false;
    this.splashIsActive = true;
  }

  setWinActive() {
    this.gameIsActive = false;
    this.winIsActive = true;
  }

  static styles = css`
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .backgroundFix {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  `;

  render() {
    return html`
      <div class="container">
        <img
            src="../assets/background.png"
            class="backgroundFix"
        />
        <nav-box></nav-box>
        ${this.splashIsActive ? html`<splash-box @setSplashUnActive="${this.setSplashUnActive}"></splash-box>` : ''}
        ${this.tutorialIsActive ? html`<tutorial-box @setTutorialUnActive="${this.setTutorialUnActive}"></tutorial-box>` : ''}
        ${this.gameIsActive ? html`<player-box @setSplashActive="${this.setSplashActive}" @setWinActive="${this.setWinActive}"></player-box>` : ''}
        ${this.loseIsActive ? html`<LoseBox @setLoseUnActive="${this.setLoseUnActive}"></LoseBox>` : ''}
        ${this.winIsActive ? html`<WinBox></WinBox>` : ''}
      </div>
    `;
  }


}

customElements.define('index-page', IndexPage);