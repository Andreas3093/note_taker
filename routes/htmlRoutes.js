const path = require("path")

module.exports = (app) => {

    // Forward to note page
    app.get("/notes", (req, res)=>{
        res.sendFile(path.join(__dirname,"../public/notes.html"))
    })
    // to index page
    app.get("/", (req, res)=> {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
    // loadin app to index page
    app.get("*", (req, res)=> {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
}