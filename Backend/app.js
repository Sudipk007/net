const express = require('express')
const app = express();
const {mongoConnect} = require('./db')
const {createUseer} = require('./Controller/UserModel')

const cors = require('cors');

const path =require('path')
const _dirname= path.dirname('')
const { json } = require('body-parser');
const {GoogleGenAI} =require('@google/genai')
const buildpath = path.join(_dirname , '../Frontend/Frontend/dist')
app.use(cors())
app.use(express.json())
app.use(express.static(buildpath))
app.get('/',(req,res)=>{
    res.sendFile(
        path.join(__dirname, "../Frontend/Frontend/dist/index.html"),
        function(err){
            if(err){
                res.status(500).send('error')
            }
        }
    );
});

// app.post('/create',createClient)
app.post('/create',createUseer)
    
    

app.post('/api/chatbot',async(req,res)=>{
    const ai =await new GoogleGenAI({apiKey:process.env.APIKEY})
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
    // connection();
    mongoConnect();
})
