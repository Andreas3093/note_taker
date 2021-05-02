const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080; 

app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(express.static(path.join(__dirname, "public")));

// api routes get data, posting data and deleting data
require('./routes/apiRoutes')(app);

// html route for changing pages
require('./routes/htmlRoutes')(app);

// application request and response throught port
app.listen(PORT,()=>{
    console.log(`connected to port http://localhost:${PORT}`);
});
