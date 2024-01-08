const express=require('express');
const cors=require("cors");
const mongoose=require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
//importing routes
const home =require('./routes/home.js'); 
const events=require('./routes/events.js');
const about=require('./routes/about.js');
const history =require('./routes/history.js');
const contacts=require('./routes/contacts.js');
const user =require('./routes/user.js');
let app=express();
app.use(express.json());
//middleware configuration
app.use(cors());
// app.use(bodyParser.json({limit:'30mb',extended:true}));// used to take the json from the post request we are sending
// app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));// used to seperate the urlencoded body data


 let PORT=process.env.PORT||5000;

let URL=process.env.URL;


 mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(app.listen(PORT,()=>{
    console.log(`connected to mongo and server started listening on ${PORT}`);})
).catch(()=>{
    console.log("cant connect to mongo");
});

app.use('/',home);
app.use('/events',events);
app.use('/about',about);
app.use('/history',history);
app.use('/contacts',contacts);
app.use('/auth',user);