import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

//importing routes
import home from './routes/home.js'; 
import events from './routes/events.js';
import about from './routes/about.js';
import history from './routes/history.js';
import contacts from './routes/contacts.js';
import user from './routes/user.js';
let app=express();
app.use(express.json());
//middleware configuration
app.use(cors());
// app.use(bodyParser.json({limit:'30mb',extended:true}));// used to take the json from the post request we are sending
// app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));// used to seperate the urlencoded body data

let PORT=5000;
// let URL="mongodb+srv://whitedevil:0pM8ysT3HmMh5KyZ@cluster0.mtzjakd.mongodb.net/?retryWrites=true&w=majority";
let URL='mongodb://127.0.0.1:27017/mcea';

await mongoose.connect(URL, {
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