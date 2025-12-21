import axios from "axios"
function Home(){
    
   const handleChange=(e)=>{
            const h1 = document.getElementById('h1')
        if(e.target.value!=''){
                h1.innerText="Bye Sudip" 

        }
        else{
                h1.innerText="Hello Sudip"
        }
                
    }


    async function run(){
       const inp = document.getElementById('inp')
       const inp1 = document.getElementById('inp1')
       const send = await axios.post('/create',{username:inp.value,password:inp1.value})

    }
    return(
        <>
            <h1 id="h1">Hello Sudip</h1>
            <input id="inp" placeholder="Username" onChange={handleChange}></input>
            <input id="inp1" placeholder="Password"></input>
            <button onClick={run} >Click</button>
            
        </>
    )
}

export default Home