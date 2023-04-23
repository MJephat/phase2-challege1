import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';

function Fetch(){
    const [column, setColumn] = useState([])
    const [records, setRecords] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/transactions')
        .then(resp => resp.json)
        .then(data =>{

        })
    }, [])
      
    return(
        <div>

        </div>
    )
}
export default Fetch;