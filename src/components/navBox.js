import { LitElement, html, css } from 'lit';

class NavBox extends LitElement {
  static styles = css`
    .navContainer {
      display: none;
    }

      .navContainer {
        display: block;
      }

    h1 {
      font-size: 34px;
      text-align: center;
      padding: 10px;
      color: #ffffff;
    }
  `;

  render() {
    return html`
      <div class="navContainer">
        <h1>TechCompany Simulator</h1>
      </div>
    `;
  }
}

customElements.define('nav-box', NavBox);