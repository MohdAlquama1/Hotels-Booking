
import { useState } from 'react';
import Header from '../comp/header'; 

function About() {
  
    
        // const X = ()=>{
            
            
        //     let [a , setA ] = useState("");
            
        //     fetch("http://localhost:8080/api")
        //     .then((res) => res.json())
        //     .then(
        //         (data) => setA(data)
        //     )
        //     .catch((error) => console.error('Error fetching data:', error));
        // }

    return (
        <div>
            <Header/>
            <h1>About</h1>
            <div className=''>
               <form className=''>
                <input type='text' placeholder='f foi'></input>
               </form>
            </div>
        </div>
    );
}

export default About;
