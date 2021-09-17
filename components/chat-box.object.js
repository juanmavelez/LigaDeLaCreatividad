class ChatBox extends HTMLElement {
  constructor() {
    super();
    this.radius = '0';
    this.color = 'white';
    this.attachShadow({ mode: 'open' });
  }
  static get observedAttributes() {
    return ['radius', 'color'];
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'radius') {
      this.radius = newVal;
    }
    if (attr === 'color') {
      this.color = newVal;
    }
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
    <div class="chat-box">
        <slot name="content"></slot>
    <div>
    ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
      .chat-box{
        display: flex;
        padding: 20px;
        width: fit-content;
        border: solid 1px black;
        background-color:${this.color};
        border-radius:   ${this.radius};
        text-align: center;
        justify-content: center;
        align-items: center;
     }
    </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define('chat-box', ChatBox);
