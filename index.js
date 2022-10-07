const path=require('path')
const { engine }  = require('express-handlebars');
var express= require('express')
const port=3000;

const app= express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.get('/', function (req, res) {
//     res.render('home');
// });
app.use('/',require(path.join(__dirname,'./routes/blog.js')));
app.listen(port,()=>{
    console.log(`blog app is listening at http://localhost:${port}`)
})