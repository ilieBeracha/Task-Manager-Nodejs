import express from 'express';
import { chatGpt, dallE, deleteImageFromDB, saveImgToDB } from '../4-logic/openAoLogic';

export const openAiServer = express.Router();

openAiServer.post('/openai/task', async (req, res) => {
    const body = req.body.body;
    console.log(body);

    try {
        const data = await chatGpt(body);
        res.json(data)
    } catch (e) {
        console.log(e);
        res.send(e)

    }
})

openAiServer.post('/openai/image', async (req, res) => {
    const query = req.body.body.query;
    const type = req.body.body.type;
    const body = req.body.body;
    console.log(body)
    try {
        const data = await dallE(query, type);
        res.send(data)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

openAiServer.post('/openai/image/save/:id',async (req,res)=>{
    const {id} = req.params;
    const body = req.body.body;
    console.log(id)
    console.log(body)
    try{
        let data = await saveImgToDB(+id,body)
        console.log(data);
        
    }catch(e){
        console.log(e);
        
    }
})

openAiServer.delete('/openai/image/delete/:id',async (req,res)=>{
    const {id} = req.params;
    try{
        let data = await deleteImageFromDB(+id);
        res.send(data)
    }catch(e){
        console.log(e)
    }
})