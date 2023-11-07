import { LitElement, html, css } from 'lit';
class PlayerBox extends LitElement {
  static properties = {
    gameOn: { type: Boolean },
    winOn: { type: Boolean },
    loseOn: { type: Boolean },
    events: { type: Array },
  };

  constructor() {
    super();
    this.gameOn = true;
    this.winOn = false;
    this.loseOn = false;
    this.events = [];
    this.dates = [
        'January 3',
        'January 10',
        'January 15',
        'January 22',
        'January 25',
        'February 3',
        'February 10',
        'February 16',
        'February 27',
        'March 2',
        'March 9',
        'March 15',
        'March 17',
        'March 20',
        'March 29',
        'April 1',
        'April 15',
        'April 30',
        'May 2',
        'May 5',
        'May 10',
        'May 17',
        'May 19',
        'May 27',
        'May 29',
        'June 10',
        'June 12',
        'June 18',
        'June 28',
        'July 6',
        'July 7',
        'July 18',
        'July 20',
        'July 29',
        'August 1',
        'August 15',
        'August 30',
        'September 5',
        'September 12',
        'September 20',
        'September 22',
        'September 30',
        'October 2',
        'October 8',
        'October 16',
        'October 21',
        'November 1',
        'November 5',
        'November 13',
        'November 19',
        'November 21',
        'November 29',
        'November 30',
        'December 10',
        'December 20',
        'December 30',
      ];
    this.dateDisplay = 'January 1';
    this.moneyDisplay = 1;
    this.happiness = 50;
    this.arrayEvents = [];
    this.currentEvent = [];
    this.randomEvents = [];
    this.jsonLength = null;
    this.eventCounter = 0;
    this.item = {};

    this.fetchArrayEvents();
    this.fetchJsonLength();
  }

   static styles = css`
    .playerBoxContainer {
      background-color: #626275;
    }
    .winContainer {
      display: grid;
      grid-template-columns: 1fr;
      place-items: center;
    }
    .textTutorialContainer {
      display: grid;
      justify-items: center;
    }
    .button-growPlayer {
      color: black;
      background-color: white;
      border: 1px solid black;
      padding: 0 16px;
      cursor: pointer;
      min-height: 40px;
      transition: all 0.3s ease-in-out;
    }
    .button-growPlayer:hover {
      transform: scale(1.2);
    }
    .hudContainer {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      color: white;
    }
    .moneyContainer {
      grid-column: auto;
    }
    .HappinessContainer {
      grid-column: span 2;
      display: grid;
      justify-items: center;
    }
    .DateContainer {
      display: grid;
      grid-column: auto;
    }
    .playerActions {
      transform: translateY(-80px);
    }
    .avatar {
      display: grid;
      justify-items: center;
      margin-top: 5rem;
    }
    .playerHud {
      margin: 0 10rem;
      padding: 1.25rem;
      background-color: #efefef;
      border: 5px solid #968383;
    }
    .text-sm {
      font-size: 0.875rem;
    }
    .text-xs {
      font-size: 0.75rem;
    }
    .hidden {
      display: none;
    }
  `;

  render() {
    return html`
      <div class="playerBoxContainer p-5 sm:w-80 w-screen h-screen sm:h-auto sm sm:w-1/3">
        <!-- Here goes the Win or Lose condition -->
        <!-- Win -->
        <div class="${this.winOn ? 'winContainer' : 'hidden'}">
          <h1>Victory!</h1>
          <br />
          <br />
          <br />
          <br />
          <div class="textTutorialContainer">
            <p class="mt-10 text-center">You defeated the game!</p>
            <p class="mt-3">May the Gods remember about your epic win!</p>
            <p class="mt-3">You can refresh the site to play again!</p>
          </div>
          <br />
          <br />
        </div>

        <!-- Defeat -->
        <div class="${this.loseOn ? 'winContainer' : 'hidden'}">
          <h1>Defeat! </h1>
          <br />
          <br />
          <br />
          <br />
          <div class="textTutorialContainer">
            <p class="mt-10 text-center">You were defeated :(</p>
            <p class="mt-3">You didn't achieve your goals </p>
            <p class="mt-3">But you can refresh the site to play again!</p>
          </div>
          <br />
          <br />
        </div>

        <!-- Game Init -->
        <!-- TODO: I should make this cleaner with a single gameOn wrapper without messing with the layout -->
        <div class="${this.gameOn ? 'hudContainer' : 'hidden'}">
          <div class="${this.gameOn ? 'moneyContainer' : 'hidden'}">
            <p class="mb-0 text-base">$ ${this.moneyDisplay} M</p>
            <p>Valuation</p>
          </div>
          <div class="${this.gameOn ? 'HappinessContainer' : 'hidden'}">
            <p>${this.happiness}</p>
            <p>Happiness</p>
          </div>
          <div class="${this.gameOn ? 'DateContainer' : 'hidden'}">
            <p class="mb-2 text-base">${this.dateDisplay}</p>
          </div>
        </div>

        <div class="${this.gameOn ? 'playerActions' : 'hidden'}">
          <div class="avatar">
            <!-- Avatar from JSON -->
            <div>
              <img class="avatarContainer mb-2" src="${this.item.avatar}"  alt=""/>
            </div>
          </div>
          <div class="playerHud">
            <!-- Name from JSON -->
            <div>
              <h2 class="text-sm mt-14">${this.item.name}</h2>
            </div>

            <!-- Text from JSON -->
            <div>
              <h1 class="text-xs text-black">${this.item.text}</h1>
            </div>
          </div>
        </div>

        <div class="${this.gameOn ? 'playerButtonArea grid grid-cols-6' : 'hidden'}">
          <button
            class="button-growPlayer text-xs col-start-2 col-span-4 sm:col-start-3 sm:col-span-2"
            @click="${this.nextItem}"
          >
            ${this.item.option1}
          </button>
          <button
            class="button-growPlayer text-xs col-start-2 col-span-4 sm:col-start-3 sm:col-span-2 mt-2 mb-5"
            @click="${this.nextItem2}"
          >
            ${this.item.option2}
          </button>
        </div>
      </div>
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchEvents();
    this.fetchArrayEvents();
    this.fetchJsonLength();
  }

  async fetchEvents() {
  try {
    const response = await fetch('../../assets/events.json');
    if (!response.ok) {
      throw new Error('Failed to fetch the events data');
    }
    this.events = await response.json();
    console.log('Events data loaded successfully:', this.events);

    if (this.events && this.events.length) {
      this.fetchArrayEvents();
      this.fetchJsonLength();
    }
  } catch (error) {
    console.error('Error loading events data:', error);
  }
}

fetchArrayEvents() {
  if (this.events && this.events.length) {
    this.currentEvent.push(this.events[0]);
    for (let index = 1; index < this.events.length; index++) {
      this.arrayEvents.push(this.events[index]);
    }
  }
}

fetchJsonLength() {
  if (this.events && this.events.length) {
    this.jsonLength = this.events.length;
    this.randomEvents = this.events;
    this.randomEvents.sort(() => Math.random() - 0.5);
  } else {
    console.error('this.events is undefined');
  }
}

    nextItem() {
    this.moneyDisplay = this.moneyDisplay + this.currentEvent[0].option1money;
    this.happiness = this.happiness + this.currentEvent[0].option1happy;

    if (
      this.happiness < 0 ||
      this.moneyDisplay < 0 ||
      (this.happiness > 0 && this.moneyDisplay < 1000 && this.dateDisplay === 'December 30')
    ) {
      this.gameOn = false;
      this.loseOn = true;
    } else {
      if (this.happiness > 0 && this.moneyDisplay > 0 && this.dateDisplay !== 'December 30') {
        this.currentEvent.shift();
        this.eventCounter++;
        this.currentEvent.push(this.randomEvents[this.eventCounter]);
        this.dateDisplay = this.dates[this.eventCounter];
      }

      if (this.happiness > 0 && this.moneyDisplay > 0 && this.dateDisplay === 'December 30') {
        this.gameOn = false;
        this.winOn = true;
        this.currentEvent.shift();
        this.eventCounter++;
        this.currentEvent.push(this.randomEvents[this.eventCounter]);
        this.dateDisplay = this.dates[this.eventCounter];
      }
    }
  }

  nextItem2() {
    this.moneyDisplay = this.moneyDisplay + this.currentEvent[0].option2money;
    this.happiness = this.happiness + this.currentEvent[0].option2happy;

    if (
      this.happiness < 0 ||
      this.moneyDisplay < 0 ||
      (this.happiness > 0 && this.moneyDisplay < 1000 && this.dateDisplay === 'December 30')
    ) {
      this.gameOn = false;
      this.loseOn = true;
    } else {
      if (this.happiness > 0 && this.moneyDisplay > 0 && this.dateDisplay !== 'December 30') {
        this.currentEvent.shift();
        this.eventCounter++;
        this.currentEvent.push(this.randomEvents[this.eventCounter]);
        this.dateDisplay = this.dates[this.eventCounter];
      }

      if (this.happiness > 0 && this.moneyDisplay > 0 && this.dateDisplay === 'December 30') {
        this.gameOn = false;
        this.winOn = true;
        this.currentEvent.shift();
        this.eventCounter++;
        this.currentEvent.push(this.randomEvents[this.eventCounter]);
        this.dateDisplay = this.dates[this.eventCounter];
      }
    }
  }
}

customElements.define('player-box', PlayerBox);