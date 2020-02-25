const app = require('./app');

app.init(3733, (req,res) => {
    console.log("Server listening on port 3733");
})