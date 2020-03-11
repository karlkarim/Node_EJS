const express = require ('express');
const bodyParser = require ('body-parser');
const path = require ('path');
const userRoute = require('./routes/shop'); 
const adminRoute = require('./routes/admin');
const errorPage = require('./controllers/404');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(userRoute);
app.use('/admin', adminRoute);




app.use(errorPage.getErrorPage);
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    //console.log(path.join(__dirname, 'views', '404.html'))

app.listen(3000, ()=>{
    console.log("Server is running on Port 3000");
})