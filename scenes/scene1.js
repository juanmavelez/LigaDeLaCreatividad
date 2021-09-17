class Scene1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <article class="section1">
        <mouse-character class="mouse" size="2.5"></mouse-character>
        <chat-box class="chat-box" radius="100%">
          <p slot="content">Buenas, soy un ratoncito</p>
        </chat-box>
      </article>
    ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
    p{margin:0;}
    article{
      position: relative;
      width: 100%;
      min-width: 300px;
      height: 100%;
      min-height: 200px;
      border-radius: 5px;
      border: solid 2px black;
      background: linear-gradient(#F2B705,#d6c913);
      justify-self: center;
      align-items: center;
    }
    .mouse{
      position: absolute;
      left: calc(30% - 45px);
      top: calc(50%)
    }
    .chat-box{
      position: absolute;
      right: 15px;
      top: 15px;
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

customElements.define('scene-1', Scene1);
