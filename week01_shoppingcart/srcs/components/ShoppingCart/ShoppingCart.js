import Schema from '../Schema.js';


class ShoppingCart extends Schema {

    initComponent() {
        // this.$text = this.shadowDOM.querySelector('.sh-cart-div');
    }

    template() {
        return `
            <div class="sh-cart-div">
                <button>
                <i class="fa fa-shopping-cart"></i>   
                <!--  ${this.attributes.text.value} -->
                </button>
            </div>
        `;
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
}
    
export default ShoppingCart;