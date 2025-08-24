import express from 'express';
export const routerUser = express.Router()


routerUser.get('/user', (req, res)=>{
    res.send('hellow world')
})

routerUser.post('/user', (req, res)=>{
    res.send('hellow world')
})

routerUser.put('/user', (req, res)=>{
    res.send('hellow world')
})

routerUser.delete('/user', (req, res)=>{
    res.send('hellow world')
})
