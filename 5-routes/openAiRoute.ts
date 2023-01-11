import express from 'express';
import { chatGpt } from '../4-logic/openAoLogic';

export const openAiServer = express.Router();

openAiServer.post('/openai',async (req,res)=>{
    const body = req.body.body;
    console.log(body);
    
    try{
        const data = await chatGpt(body);
        res.json(data)
    }catch(e){
        console.log(e);
        res.send(e)
        
    }
})