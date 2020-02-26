const express = require ('express');
const bodyParser = require ('body-parser');
const path = require ('path');
const userRoute = require('./routes/shop'); 
const adminRoute = require('./routes/admin');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(userRoute);
app.use('/admin', adminRoute);




app.use(function(req,res,next){
    res.status(404).render('404', {
        pageTitle: "Oops. Page Not Found",
        pageNotFound: "Oops. Page Not Found. Try something else",
        pageTest: "Page Test"
    });
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    //console.log(path.join(__dirname, 'views', '404.html'))
})
app.listen(3000, ()=>{
    console.log("Server is running on Port 3000");
})