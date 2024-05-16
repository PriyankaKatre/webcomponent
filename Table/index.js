import { Table }  from './components/table.js'

customElements.define("style-table", Table)

const newData = [
    ["8831", "decode", "Australia"],
    ["6605", "red.square", "United States"]
]

const UsersTable = document.getElementById("users")

UsersTable.data = newData

console.log(UsersTable)
