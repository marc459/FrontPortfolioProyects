import Schema from '../Schema.js';


class ShoppingCart extends Schema {
    // constructor()
    // {
    //     this.cartitems = 0;
    // }
    initComponent() {
        // this.attributes.cartitems.value=0;
        // this.$text = this.shadowDOM.querySelector('.sh-cart-div');
    }

    template() {

        let res= `
            <div class="sh-cart-div">
                <button>
                <i class="fa fa-shopping-cart"></i>   
                <b style="color:red;">${this.attributes.cartitems.value}</b>
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
            'cartitems',
        ];
        attributesMapping.forEach(key => {
            if (!this.attributes[key]) {
                this.attributes[key] = {value: ''};
            }
            });
    }
    static get observedAttributes() {
        return ['cartitems'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(oldValue,newValue)

        if (name === 'cartitems' && oldValue !== newValue) {
          this.render();
        }
    }
}
    
export default ShoppingCart;