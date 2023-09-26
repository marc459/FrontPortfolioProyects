import Schema from '../Schema.js';
import TerminalCard from '../TerminalCard/TerminalCard.js';
customElements.define('terminal-card', TerminalCard);


 // BBDD
let terminals = [{
    title: "iphone-15-black"
},
{
    title: "iphone14"
},
{
    title: "samsunggalaxys23"
},
{
    title: "xiaomiredmi12"
}
];

class GridCard extends Schema {
    GridCard()
    {

    }

    initComponent() {
        // this.$text = this.shadowDOM.querySelector('.sh-cart-div');
    }

    template() {
        let result = '<div class="grid">';
        for(let i = 0; i<terminals.length;i++)
            result += `<div class="div${i+1}">
                            <terminal-card title="${terminals[i].title.toUpperCase()}" img="${terminals[i].title}.png"></terminal-card>
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