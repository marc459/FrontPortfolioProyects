import Schema from '../Schema.js';

let listArray = new Map();

class ShoppingCart extends Schema {

    initComponent() {
    }

    template() {

        let res= `
            <div class="sh-cart-div">
                <button id="sh-list-btn">
                    <i class="fa fa-shopping-cart"></i>   
                    <b style="color:red;">${this.attributes.cartitems.value}</b>
                </button>
                <div class="sh-list">
                    <button id='delete-list-btn' ><i class='fa fa-solid fa-trash'></i></button>
                    <div class="list">

                    </div>
                
                    
                <div>
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

    render() {
        this.togglesh = false;
        this.shadowRoot.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;

        listArray = this.attributes.shoppinglist.value.slice(1).split(";");
        console.log(listArray)
        // let inner = "<button id='delete-list-btn' ><i class='fa fa-solid fa-trash'></i></button>";
        let inner = this.attributes.shoppinglist.value.slice(1).split(";").map((e) =>{
            return "<p>" + e + " </p>";
    }).join("");
        this.shadowRoot.querySelector("#sh-list-btn").onclick = e => {
            this.togglesh=!this.togglesh;
            if(this.togglesh)
                this.shadowRoot.querySelector('.sh-list').setAttribute("style", "display:block;");
            else
                this.shadowRoot.querySelector('.sh-list').setAttribute("style", "display:none;");

            this.shadowRoot.querySelector('.list').innerHTML = inner;
        }

        this.shadowRoot.querySelector("#delete-list-btn").onclick = e => {
            this.attributes.shoppinglist.value="";
            this.attributes.cartitems.value=0
            listArray = [];
        }
    }

    initComponent()
    {

    }

    mapComponentAttributes() {
        const attributesMapping = [
            'cartitems',
            'shoppinglist'
        ];
        attributesMapping.forEach(key => {
            if (!this.attributes[key]) {
                this.attributes[key] = {value: ''};
            }
            });
    }
    static get observedAttributes() {
        return ['cartitems','shoppinglist'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'cartitems' && oldValue !== newValue) {
          this.render();
        }
        if (name === 'shoppinglist' && oldValue !== newValue) {
            this.render();
         }
    }
}
    
export default ShoppingCart;