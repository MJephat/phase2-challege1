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
            setColumn(Object.keys(data.transactions[0]))
            setRecords(data.transactions)
            })
    }, [])
      
    return(
        <div>
            <table slassName="table">
                <thead>
                    <tr>
                        {column.map((c, i)=>(
                            <th key={i}>{c}</th>
                        ))}
                    </tr>

                </thead>
            </table>

        </div>
    )
}
export default Fetch;