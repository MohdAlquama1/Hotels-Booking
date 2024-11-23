import React from 'react';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';
import Header from './header';
// Set the storage type for ReactSession
ReactSession.setStoreType("localStorage");

function ProfileBox({ onLogout }) {
    // Get session data inside the component to ensure the latest data
    const loginDetails = ReactSession.get("LoginDetails");

    // Check if loginDetails exist
    if (!loginDetails) {
        return <p>No profile data available.</p>;
    }

    const profile = {
        userIdOfProfile:loginDetails.id,
        name: loginDetails.name,
        lastName: loginDetails.lname,
        phone: loginDetails.num,
        email: loginDetails.email,
    };
    console.log(profile.userIdOfProfile);
    
    return (

        <React.Fragment>
            <Header/>
        <div className="flex justify-center items-center h-screen">
            <div className="flex-wrap p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold mb-4">Profile Information</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <strong>Name:</strong>
                    </div>
                    <div>{profile.name}</div>
                    
                    <div>
                        <strong>Last Name:</strong>
                    </div>
                    <div>{profile.lastName}</div>
                    
                    <div>
                        <strong>Phone:</strong>
                    </div>
                    <div>{profile.phone}</div>
                    
                    <div>
                        <strong>Email:</strong>
                    </div>
                    <div>{profile.email}</div>
                </div>
                <button 
                    onClick={onLogout}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                >
                    Logout
                </button>
            </div>
        </div>
        </React.Fragment>
    );
}

export default function Profile() {
    const navigate = useNavigate(); // Call useNavigate inside the component

    const handleLogout = () => {
        ReactSession.remove("LoginDetails"); // Remove session data
        navigate("/"); // Redirect to login page
    };

    return (
        <ProfileBox onLogout={handleLogout} />
    );
}
