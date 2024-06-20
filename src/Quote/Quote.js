import "../Quote/Quote.scss";
import { useEffect, useState } from "react";
const quoteUrl = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
    const [quote, setQuote] = useState({ text: "", author: "" });

    // useEffect(() => {
    //     async function getInitialQuote() {
    //         const response = await fetch(quoteUrl);
    //     const jsonResponse = await response.json();
    //         const randomQuote = jsonResponse.quote;
    //         setQuote(randomQuote);
    //     }
    //     getInitialQuote();
    // }, [])

    useEffect(() => {
        fetchQuote();
    }, []);

    async function fetchQuote() {
        const response = await fetch(quoteUrl);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
    }

    return (
        <div>
            <h1>{quote.text}</h1>
            <h2>{quote.author}</h2>
            <button onClick={fetchQuote}>Quote me!</button>
        </div>
    );
}








// import "../Quote/Quote.scss";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function Quote() {
//     const [quote, setQuote] = useState("");

//     useEffect(() => {
//         fetchQuote();
//     }, []);

//     const fetchQuote = async () => {
//         try {
//             const response = await axios.get("https://api.quotable.io/random");
//             setQuote(response.data.content);
//         } catch (error) {
//             console.error("Error fetching quote", error);
//         }
//     };

//     const handleNewQuote = () => {
//         fetchQuote();
//     };

//     return (
//         <div>
//             <h1 className="heading">{quote}</h1>
//             <button className="button" onClick={handleNewQuote}><span>Quote me!</span>
//             </button>
//         </div >
//     );
// }


