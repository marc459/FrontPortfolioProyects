import Schema from '../Schema.js';


class ShoppingCart extends Schema {

    initComponent() {
        // this.$text = this.shadowDOM.querySelector('.sh-cart-div');
    }

    template() {
        let res= `
            <div class="sh-cart-div">
                <button>
                <i class="fa fa-shopping-cart"></i>   
                <b style="color:red;">${this.attributes.text.value}</b>
        `;
        res +=`
                </button>
            </div>
        `;
        return res;
    }

    templateCss() {
        return `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="./srcs/components/ShoppingCart/styles.css">
        `;
    }
    

    mapComponentAttributes() {
        const attributesMapping = [
            'text',
        ];
        attributesMapping.forEach(key => {
            if (!this.attributes[key]) {
                this.attributes[key] = {value: ''};
            }
            });
    }
    static get observedAttributes() {
        return ['text'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'text' && oldValue !== newValue) {
          this._text = newValue;
          this.render();
        }
    }
}
    
export default ShoppingCart;