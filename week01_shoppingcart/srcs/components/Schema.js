class Schema extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
 
    disconnectedCallback() {
        this.remove();
    }
 
    connectedCallback() {
        this.mapComponentAttributes();
        this.render()
        this.initComponent();
    }
 
    render() {
        this.shadowRoot.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
    }
 
    mapComponentAttributes() {}
    templateCss() {}
    template() { }

    initComponent() {}
    
 }
 export default Schema;