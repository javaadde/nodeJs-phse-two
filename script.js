//   what is a rout:
//   In Express.js, a route defines how an application
//   responds to a client's request to a specific endpoint,

import express from 'express';

import {routerUser} from './Routes/User.js';
import {routerComments} from './Routes/Comments.js';


const app = express();
const PORT = process.env.PORT || 8000;


app.use('/users',routerUser);
app.use('/comments',routerComments)

app.get('/show',(req,res)=>{
     res.status(200)
     .json({
        name:'javad',
        age:19,
        sex:'male'
     });
})


app.listen(PORT,()=>{
    console.log(`app is running on prt: ${PORT}`);
})