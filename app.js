const express=require('express')
const http=require('http')
const bodyParser=require('body-parser')
const path=require('path')

// instance of the app
const app =express()


// Middlewares
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
// view engine setup
app.set('view', path.join(__dirname, 'view'));
app.set('view engine', 'hbs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.send('working')
});


app.get('/home', (req, res) => {
    res.render(index);
    
});


const server = http.createServer(app)

server.listen(process.env.PORT || 8000, (req,res)=>{
    console.log('app running on port 8000')
})


