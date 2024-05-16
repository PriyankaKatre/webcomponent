
// const template = document.createElement('template');
// template.innerHTML = `
//     <style>
//         @import "./components/Table.css";
//     </style>
//     <table>
//         <thead>
//             <tr>
//                 ID
//             </tr>
//             <tr>
//                 UserName
//             </tr>
//             <tr>
//                 Country
//             </tr>
//         </thead>
//     </table>`;

export class Table extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' });

    }
    connectedCallback() {
        //this.shadowRoot.appendChild(template.content.cloneNode(true));
        const headers = this.dataset.headers.split(',').map((header) =>header.trim() )
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/Table.css">
            <table>
                <thead>
                    <tr>
                        ${headers.map(header =>
                            `<th>
                                ${header}
                            </th>`
                        ).join('')}
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `
    }
    /**
     * @param data {string[][]}
     */
    set data(data) {
        const tableBody = this.shadowRoot.querySelector("tbody")
        console.log(tableBody)
        const rows = data.map((rowData) => {
            const row = document.createElement("tr")
            const cells = rowData.map((cellData) => {
                const cell = document.createElement('td')
                cell.textContent = cellData
                return cell
            })
            row.append(...cells)
            return row
        })
        //tableBody.innerHTML = ""
        tableBody.append(...rows)
    }
}
