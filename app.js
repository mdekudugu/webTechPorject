const express=require('express')
const http=require('http')
const bodyParser=require('body-parser')
const path=require('path')
const exphbs=require('express-handlebars')

// instance of the app
const app =express()


// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/index', (req, res) => {
    res.render('index',{layout:false});
    
});

app.get('/blank', (req, res) => {
    res.render('blank',{layout:false});
    
});
app.get('/checkout', (req, res) => {
    res.render('checkout',{layout:false});
    
});
app.get('/product', (req, res) => {
    res.render('product',{layout:false});
    
});


app.get('/store', (req, res) => {
    res.render('store',{layout:false});
    
});
const server = http.createServer(app)

server.listen(process.env.PORT || 8000, (req,res)=>{
    console.log('app running on port 8000')
})


