const fs = require("fs");
const path = require("path");
let jsonDb = require("../db/db.json");

module.exports = (app) => {
    const readPrompt = () => 
    new Promise((res, rej) => {
        fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data)=> {
            if (err) rej (err);
            res(data)
        })
    })
}


