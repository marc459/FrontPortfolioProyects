import Schema from '../Schema.js';


class TerminalCard extends Schema {

    initComponent() {
        
    }
    
    template() {
        
        let res  = `
            <div class="card terminal-card">
                <img src="./srcs/assets/images/${this.attributes.img.value}" alt=""></img>
                <div class="rate">
                    <i class="fa fa-solid fa-star"></i>
                    <i class="fa fa-solid fa-star"></i>
                    <i class="fa fa-solid fa-star"></i>
                    <i class="fa fa-solid fa-star"></i>
                    <i class="fa fa-regular fa-star"></i>
                </div>
                ${this.attributes.title.value}
                <button class="addtocart" >Add to cart</button>
            </div>
        `;

        return res;
    }

    templateCss() {
        return `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="./srcs/components/TerminalCard/styles.css">
        `;
    }
    render() {
        
        this.shadowRoot.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
        this.shadowRoot.querySelector(".addtocart").onclick = e => {
            this.cartitems++;
            let gcaritems = document.getElementById('shcart-component').getAttribute("cartitems");
            gcaritems++;
            document.getElementById('shcart-component').setAttribute("cartitems", gcaritems);


            let shoppinglist = document.getElementById('shcart-component').getAttribute("shoppinglist");
            shoppinglist = shoppinglist +";" + this.attributes.title.value;
            document.getElementById('shcart-component').setAttribute("shoppinglist", shoppinglist);





        }
    }   

    mapComponentAttributes() {
        const attributesMapping = [
            'img',
            'title'
        ];
        attributesMapping.forEach(key => {
            if (!this.attributes[key]) {
                this.attributes[key] = {value: ''};
            }
        });
    }
}
    
export default TerminalCard;