class CatCharacter extends HTMLElement {
  /**
   * @param {string} color Main color of the mouse
   * @param {string} color2 Eyes and inner ear color
   * @param {number} size Allow us to create different sizes of mouses
   * @param {string}  axiesx  Change the view of the mouse the only valid arguments are: "center" "left" and "right"
   * @param {string}  axiesy Change the view of the mouse the only valid arguments are: "center" "top" and "bottom"
   */
  constructor() {
    super();
    this.color = '#292525';
    this.color2 = '#f7ebeb';
    this.size = 1;
    this.axiesX = 'center';
    this.axiesY = 'center';
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['color', 'color2', 'size', 'axiesx', 'axiesy'];
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
    if (attr === 'profile') {
      this.axiesX = newVal;
    }
    if (attr === 'axiesx' && (newVal === 'left' || newVal === 'right')) {
      this.axiesX = newVal;
    }
    if (attr === 'axiesy' && (newVal === 'top' || newVal === 'bottom')) {
      this.axiesY = newVal;
    }
  }

  /**
   * manipulates the view of the eyes and ears. depending to wich side is the mouse facing
   * @param {string} face  Should only be "center", "left", "right"
   * @returns {string} 'none' or block
   */
  axiesXfacing(face) {
    if (this.axiesX === face) {
      return 'none';
    }
    return 'block';
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="head">
        <div class="face"></div>
        <div class="ear ear--left ear--${this.axiesY}"></div>
        <div class="inner__ear inner__ear--left inner__ear--${this.axiesY}" ></div>
        <div class="ear ear--right ear--${this.axiesY}"></div>
        <div class="inner__ear inner__ear--right inner__ear--${this.axiesY}"></div>
        <div class="eye eye--left  eye--${this.axiesY}"></div>
        <div class="eye eye--right eye--${this.axiesY}"></div>
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
      height: ${30 * this.size}px;
    }
    .face{
      position: absolute;
      z-index: 10;
      width:  ${30 * this.size}px;
      height: ${30 * this.size}px;
      border-radius: 40%;
      background-color: ${this.color};
      box-shadow: -1px 6px 20px 0px black;
    }

    .ear{
      position: absolute;
      top: ${-10 * this.size}px;
    }
    .ear--top{
      top: ${5.5 * this.size}px;
    }
    .ear--bottom{
      top: ${-10 * this.size}px;
    }
    .ear--left{
      display:    ${this.axiesXfacing('left')};
      border-left:${20 * this.size}px solid ${this.color};
      border-top: ${25 * this.size}px solid transparent;
      left: 0px;
    }
    .ear--right{
      display:      ${this.axiesXfacing('right')};
      right:   0px;
      border-right: ${20 * this.size}px solid ${this.color};
      border-top:   ${25 * this.size}px solid transparent;
    }

    .inner__ear{
      position: absolute;
      top: ${-3 * this.size}px;
      z-index: 5;
    }
    .inner__ear--top{
      top: ${8 * this.size}px;
    }
    .inner__ear--left{
      display:      ${this.axiesXfacing('left')};
      left:         ${2 * this.size}px;
      border-left:  ${7.5 * this.size}px solid ${this.color2};
      border-top:   ${10 * this.size}px solid transparent;
    }
    .inner__ear--right{
      display:      ${this.axiesXfacing('right')};
      right:        ${2 * this.size}px;
      border-right: ${7.5 * this.size}px solid ${this.color2};
      border-top:   ${10 * this.size}px solid transparent;
    }

    .eye{
      position: absolute;
      z-index: 15;
      top:    ${10 * this.size}px;
      width:  ${10 * this.size}px;
      height: ${5 * this.size}px;
      border-radius: 100%;
      background-color: ${this.color2};
    }
    .eye--top{
      top:  ${3.5 * this.size}px;
    }
    .eye--bottom{
      top:  ${15 * this.size}px;
    }
    .eye--left{
      display: ${this.axiesXfacing('right')};
      left:    ${4 * this.size}px
    }
    .eye--right{
      display: ${this.axiesXfacing('left')};
      right:   ${4 * this.size}px;
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

customElements.define('cat-character', CatCharacter);
