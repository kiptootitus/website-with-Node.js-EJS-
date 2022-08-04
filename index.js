const express = require('express')
const app = express();
const morgan = require('morgan');

const port = process.env.PORT || 8080;
//view engine to ejs
app.set('view engine','ejs');
//middleware
app.use(morgan('dev'));
//index page
app.get('/',(req,res)=>{
    res.render('pages/index');
});
//about page
app.get('/about',(req,res)=>{
    res.render('pages/about');
});
//contact page
app.get('/contact',(req,res)=>{
    res.render('pages/contact');
});
app.get('/about',(req,res)=>{
    res.render('pages/services');
});
// const posts = [
//     {title: 'Title 1', body: 'Body 1' },
//     {title: 'Title 2', body: 'Body 2' },
//     {title: 'Title 3', body: 'Body 3' },
//     {title: 'Title 4', body: 'Body 4' },
// ]
// const user = {
//     firstName: 'Tim',
//     lastName: 'Cook',
// }
app.get('/', (req, res) => {
    res.render('pages/index', {
        user: user
    })
})




//initializng the routes
const productRoutes=require('/Rest_Full API/routes/products');
const orderRoutes=require('/Rest_Full API/routes/orders');





//handle routes
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
// (require('./Rest_Full API/index'))(app);


//error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});