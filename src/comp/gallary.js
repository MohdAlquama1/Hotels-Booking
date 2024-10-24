import React from "react";
import Header from './header'; 
import{ ReactSession} from 'react-client-session';
function Gallary() {
    // ReactSession.setStoreType("localStorage"); // Set session storage type to localStorage
    // const clearSessionData = () => {
    //     ReactSession.remove("id");
    //     console.log("All session data cleared.");
    //   };
    return ( 
    <div>
         <Header/>
         <h1>Gallary</h1>
    </div>
    );
}

export default Gallary;