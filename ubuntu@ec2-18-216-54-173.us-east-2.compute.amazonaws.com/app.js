const express = require('express')
const app = express();
const connectDb = require('./db')
const cors = require('cors');
const { json } = require('body-parser');
const {GoogleGenAI} =require('@google/genai')
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hello')
})

app.post('/create',connectDb)

app.post('/api/chatbot',async(req,res)=>{
    const ai =await new GoogleGenAI({apiKey:'AIzaSyCJJ3Smb1Wv_to8B9dKJtDzR9fjauSDUkI'})
    const {message} =req.body;
    const response =await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: message
})
    
    res.send({data:response.text, sender:response.candidates[0].content.role })

   
    debugger


    

})

app.listen(3000,()=>{
    console.log('Server Connected')
    connectDb();
})
