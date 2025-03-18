import { createPikoDex } from "./pikomon.js"
import { database } from "./database.js"




const pikoDexHTML = createPikoDex(database)
const container = document.querySelector('#container')
container.innerHTML = pikoDexHTML;
