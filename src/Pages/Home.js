import React from "react";
import Navbar from "../Nav/Navbar";
import Quote from "../Quote/Quote";


const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='content'>
                <Quote />
            </div>
        </div>
    )
}

export default Home;



