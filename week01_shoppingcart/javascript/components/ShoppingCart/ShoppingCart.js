import Schema from '../Schema.js';


class ShoppingCart extends Schema {

    initComponent() {
        this.$text = this.shadowDOM.querySelector('.tag');
    }

    template() {
        return `
            <div class="tag">
                ${this.attributes.text.value}
            </div>
        `;
    }

    templateCss() {
        return `
            <link rel="stylesheet" href="./javascript/components/ShoppingCart/styles.css">
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
}
    
export default ShoppingCart;