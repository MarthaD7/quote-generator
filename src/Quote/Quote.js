import "../Quote/Quote.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Quote() {
    const url = "https://type.fit/api/quotes";
    const [date, setData] = useState([]);

    const fetchInfo = () => {
        return axios.get(url).then((response) => setData(response.data));
    };

    useEffect(() => {
        fetchInfo();
    }, [])
};