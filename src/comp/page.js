import React, { useEffect } from "react";
import Header from '../comp/header'; 
import axios from "axios";

function Page() {
    // axios.post('http://localhost:8080/api', {name:"al"}).then((response,req) => {
        
    //     console.log("Response from server:"+ req.name);
    // }).catch((error) => {
    //     // Handle any errors
    //     console.error("There was an error with the POST request:", error);
    // });
    return ( 
        <div>
            <Header/>
            <h1>Page</h1>
        </div>
    );
}

export default Page; 
