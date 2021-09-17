class Scene3 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <article class="section2">
        <cat-character class="mouse" size="3  "></cat-character>
      </article>
    ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
      p{
        margin:0;
      }
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
      .section2 .mouse:nth-of-type(1){
        position: absolute;
        left: 35%;
        top: 50%;
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

customElements.define('scene-3', Scene3);
