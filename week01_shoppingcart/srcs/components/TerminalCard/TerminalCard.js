import Schema from '../Schema.js';


class TerminalCard extends Schema {

    initComponent() {
        // this.$img = this.shadowDOM.querySelector('.terminal-card');
    }

    template() {
        return `
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
                <button>Add to cart</button>
            </div>
        `;
    }

    templateCss() {
        return `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="./srcs/components/TerminalCard/styles.css">
        `;
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