
import { useState } from 'react';
import Header from '../comp/header';
import Botton from './reptiCom/fouter';
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
        <div className=''>
            <Header />
            <div className="absolute flex  w-full">

                <img className="sm:w-full  " src={require("../image/desktopImage/page-title.7bf035e9037d9b2173f7.jpg")} />

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
                    <div className="flex flex-col items-center justify-center mt-2">
                        <h1 className="text-xl font-sans italic text-white">About us</h1>
                    </div>
                    <div className="absolute  flex items-center justify-center w-full  bg-opacity-30">
                        <h1 className="text-xl  relative  top-10   text-white">us</h1>
                    </div>
                </div>
            </div>

            <div className="relative top-[400px] flex justify-around gap-[0%]">
                <div className="w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        className="w-full h-2/3 object-cover"
                        src="path/to/image1.jpg"
                        alt="Card Image 1"
                    />
                    <div className="p-4 flex flex-col justify-between h-1/3">
                        <h2 className="text-xl font-semibold mb-2">Card Title 1</h2>
                        <p className="text-gray-700 mb-4">Some descriptive text about the card.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
                            <a href="#" className="text-blue-300 hover:text-blue-500">Twitter</a>
                            <a href="#" className="text-pink-500 hover:text-pink-700">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        className="w-full h-2/3 object-cover"
                        src="path/to/image2.jpg"
                        alt="Card Image 2"
                    />
                    <div className="p-4 flex flex-col justify-between h-1/3">
                        <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
                        <p className="text-gray-700 mb-4">Some descriptive text about the card.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
                            <a href="#" className="text-blue-300 hover:text-blue-500">Twitter</a>
                            <a href="#" className="text-pink-500 hover:text-pink-700">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        className="w-full h-2/3 object-cover"
                        src="path/to/image3.jpg"
                        alt="Card Image 3"
                    />
                    <div className="p-4 flex flex-col justify-between h-1/3">
                        <h2 className="text-xl font-semibold mb-2">Card Title 3</h2>
                        <p className="text-gray-700 mb-4">Some descriptive text about the card.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
                            <a href="#" className="text-blue-300 hover:text-blue-500">Twitter</a>
                            <a href="#" className="text-pink-500 hover:text-pink-700">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='bottom-[-6%] absolute'>
                
            </footer>

        </div>
    );
}

export default About;
