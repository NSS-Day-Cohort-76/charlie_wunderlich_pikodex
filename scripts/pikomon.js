import { database } from "./database.js";


export const createPikoDex = (database) => {
    let pikoDexHTML = '';
    for (let i = 0; i < database.length; i++) {
        pikoDexHTML += `
         <div class = "piko-card">
            <img src=${database[i].imageUrl} alt=${database[i].name}>
            <p class="piko-name">${database[i].name}</p>
            <div class="category">${database[i].category}</div>
            <div class="abilities">${database[i].abilities}</div>
            <div class="weakness">${database[i].weakness}</div>
         </div>
        



        `;
    }
    return pikoDexHTML;
}
