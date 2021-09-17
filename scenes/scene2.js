class Scene2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <article class="section2">
        <mouse-character class="mouse" size="2.5"></mouse-character>
        <mouse-character class="mouse" size="1.5"></mouse-character>
        <mouse-character class="mouse" size="2"></mouse-character>
        <mouse-character class="mouse" size="1.5"></mouse-character>
        <mouse-character class="mouse" size="2"></mouse-character>
        <chat-box class="chat-box" radius="5px">
          <p slot="content"> Pero no estoy solo</p>
        </chat-box>
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
      .mouse:nth-of-type(1){
        position: absolute;
        left: 35%;
        top: 50%;
      }
      .mouse:nth-of-type(2){
        position: absolute;
        opacity: 0.8;
        left: 10%;
        top: 50%
      }
      .mouse:nth-of-type(3){
        position: absolute;
        opacity: 0.9;
        left: 20%;
        top: 50%
      }
      .mouse:nth-of-type(4){
        position: absolute;
        opacity: 0.8;
        left: 70%;
        top: 50%
      }
      .mouse:nth-of-type(5){
        position: absolute;
        opacity: 0.9;
        left: 55%;
        top: 50%
      }
      .chat-box{
        position:absolute;
        top: 5px;
        left: 5px;
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

customElements.define('scene-2', Scene2);
