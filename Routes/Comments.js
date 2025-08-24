import express from 'express';
export const routerComments = express.Router()

routerComments.get('/comments', (req, res)=>{
    res.send('hellow world')
})

routerComments.post('/comments', (req, res)=>{
    res.send('hellow world')
})

routerComments.put('/comments', (req, res)=>{
    res.send('hellow world')
})

routerComments.delete('/comments', (req, res)=>{
    res.send('hellow world')
})

