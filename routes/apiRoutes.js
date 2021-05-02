const fs = require("fs");
const path = require("path");
let jsonDb = require("../Develop/db/db.json");

module.exports = (app) => {
    const readPromise = () => 
    new Promise((res, rej) => {
        fs.readFile(path.join(__dirname, '../Develop/db/db.json'), 'utf8', (err, data)=> {
            if (err) rej (err);
            res(data)
        })
    })



const writePromise = (data, operate) => 
new Promises((res, rej) => {
    let result;
    switch(operate){
        case 'post':
            jsonDb.push(data);
            break;
        case 'delete':
            jsonDb.splice(0,jsonDb.length);
            jsonDb = data;
            break;
    }
    fs.writeFile(path.join(__dirname, "../Develop/db/db.json"), JSON.stringify (jsonDb), (err) => {
        if (err) rej (err);
        result = (operate == 'post')?"<< WRITTEN !! >>":"<< DELETED !! >>"
        res(result)
    })
})

app.get("/api/notes", (req, res) => {
    readPromise().then((result) => {
        res.json(JSON.parse(result));
    }).catch(err => console.log(err));
});

}