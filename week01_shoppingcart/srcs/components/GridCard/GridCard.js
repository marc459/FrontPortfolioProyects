import Schema from '../Schema.js';
import TerminalCard from '../TerminalCard/TerminalCard.js';
customElements.define('terminal-card', TerminalCard);


class GridCard extends Schema {

    initComponent() {
        this.$text = this.shadowDOM.querySelector('.sh-cart-div');
    }

    template() {
        let result = '<div class="grid">';
        for(let i = 1; i<=15;i++)
            result += `<div class="div${i}">
                            <terminal-card img="iphone-15-black.png"></terminal-card>
                        </div>`;
        result += '</div>';
        return result;
    }

    templateCss() {
        return `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="./srcs/components/GridCard/styles.css">
            
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
    
export default GridCard;