import Schema from '../Schema.js';


class TerminalCard extends Schema {

    initComponent() {
        this.$text = this.shadowDOM.querySelector('.sh-cart-div');
    }

    template() {
        return `
            <div class="card terminal-card">
                <img src="./srcs/assets/images/iphone-15-black.png" style="width:100px;" alt=""></img>
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
            'text',
        ];
        attributesMapping.forEach(key => {
            if (!this.attributes[key]) {
                this.attributes[key] = {value: ''};
            }
            });
    }
}
    
export default TerminalCard;