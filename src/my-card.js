import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  /**
   * Default
   * V
   */
  constructor() {
    super();
    this.title = "Default Card";
    this.image = "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg";
    this.duration = "99:99";
    this.channel = "Default User";
    this.stats = "• ~ views • ~ years ago";
    this.description = "Description for video";
    this.channelProfile = "https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg";
    this.fancy = false;
    this.URL = "https://hax.psu.edu";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 400px;
        background-color: var(--my-card-bg, #1a1a1a);
        border-radius: 12px;
        overflow: hidden;
        padding: 16px;
      }

      :host([fancy]) details[open] {
        --my-card-bg: var(--my-card-fancy-bg, #2a2a2a);
        border: none;
      }

      .thumbnail-container {
        position: relative;
        width: 100%;
        border-radius: 8px;
      }

      .yt-thumbnail {
        width: 100%;
        height: auto;
        border-radius: 8px;
        object-fit: cover;
      }

      .duration {
        position: absolute;
        bottom: 8px;
        right: 8px;
        background-color: rgba(0,0,0,0.8);
        color: white;
        padding: 4px 6px;
        border-radius: 4px;
        font-size: 12px;
      }

      .video-details {
        padding: 12px;
      }
      
      .video-meta {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 12px;
      }
      
      .channel-profile {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        object-fit: cover;
      }
      
      .video-text {
        flex-grow: 1;
        overflow: hidden;
      }
      
      .video-title {
        color: white;
        font-size: 16px;
        margin: 0 0 4px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.2;
      }
      
      .channel-info {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        color: #aaa;
        font-size: 12px;
        gap: 4px;
      }
      
      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
        color: #ddd;
        cursor: pointer;
  }
  
      details[open] summary {
        font-weight: bold;
      }
  
      details div {
        border: 2px solid #333;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
        font-size: 12px;
        color: #bbb;
        border-radius: 4px;
        background-color: #242424;
      }

      .details-button {
        width: 100%;
        background-color: #ff0000;
        color: white;
        padding: 10px;
        margin-top: 8px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .details-button:hover {
        background-color: #cc0000;
      }
    `;
  }

  openChanged(e) {
    this.fancy = e.target.open;
  }

  handleDetailsClick() {
    window.location.href = this.URL;
  }

  render() {
    return html`
    <div class="yt-card" ?fancy="${this.fancy}">
      <div class="thumbnail-container">
        <img src="${this.image}" alt="Thumbnail" class="yt-thumbnail">
        <span class="duration">${this.duration}</span>
      </div>

      <div class="video-details">
        <div class="video-meta">
          <img src="${this.channelProfile}" alt="Channel Profile" class="channel-profile">
          <div class="video-text">
            <h2 class="video-title">${this.title}</h2>
            <div class="channel-info">
              <span class="channel-name">${this.channel}</span>
              <span class="video-stats">${this.stats}</span>
            </div>
          </div>
        </div>
        <details @toggle="${this.openChanged}">
          <summary>More Info</summary>
          <div>
            <slot>${this.description}</slot>
          </div>
        </details>
        <button class="details-button" @click="${this.handleDetailsClick}">Details</button>
      </div>
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: {type: String},
      duration: {type: String},
      channel: {type: String},
      stats: {type: String},
      description: {type: String},
      channelProfile: {type: String},
      fancy: {type: Boolean, reflect: true},
      URL: {type: String}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);