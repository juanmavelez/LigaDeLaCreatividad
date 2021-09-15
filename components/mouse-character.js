class mouseCharacter extends HTMLElement {
  constructor() {
    super();
    this.color = 'black';
    this.color2 = 'white';
    this.size = 1;
    this.attachShadow({ mode: 'open' });
  }
  static get observedAttributes() {
    return ['color', 'color2', 'size'];
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'color') {
      this.color = newVal;
    }
    if (attr === 'color2') {
      this.color2 = newVal;
    }
    if (attr === 'size') {
      this.size = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="head">
        <div class="face"></div>
        <div class="ear ear--left"></div>
        <div class="inner__ear inner__ear--left"></div>
        <div class="ear ear--right"></div>
        <div class="inner__ear inner__ear--right"></div>
        <div class="eye eye--left"></div>
        <div class="eye eye--right"></div>
      </div>
      ${this.getStyles()}
  `;
    return template;
  }
  getStyles() {
    return `
    <style>
    .head{
      position: relative;
      width:  ${30 * this.size}px;
      height: ${30 * this.size} px;
    }
    .face{
      position: absolute;
      z-index: 10;
      width:  ${30 * this.size}px;
      height: ${30 * this.size}px;
      border-radius: 100%;
      background-color: ${this.color};
    }
    .ear{
      position: absolute;
      top:    ${-10 * this.size}px;
      width:  ${20 * this.size}px;
      height: ${20 * this.size}px;
      background-color: ${this.color};
      border-radius: 100%;
    }
    .ear--left{
      left:   ${-10 * this.size}px;
    }
    .ear--right{
      right:  ${-10 * this.size}px
    }
    .inner__ear{
      position: absolute;
      top:    ${-3 * this.size}px;
      z-index: 5;
      width:  ${10 * this.size}px;
      height: ${10 * this.size}px;
      border-radius: 100%;
      background-color: ${this.color2};
    }
    .inner__ear--left{
      left:   ${-3 * this.size}px;
    }
    .inner__ear--right{
      right:  ${-3 * this.size}px;
    }
    .eye{
      position: absolute;
      z-index: 15;
      top:    ${10 * this.size}px;
      width:  ${5 * this.size}px;
      height: ${10 * this.size}px;
      border-radius: 100%;
      background-color: ${this.color2};
    }
    .eye--left{
      left:   ${5 * this.size}px
    }
    .eye--right{
      right:  ${5 * this.size}px;
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

customElements.define('mouse-character', mouseCharacter);
