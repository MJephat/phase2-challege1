import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';

function Fetch(){
    // setting useState variable
    const [column, setColumn] = useState([])
    const [records, setRecords] = useState([])

    //   fetching data from api
    useEffect(() => {
        fetch('http://localhost:3000/Data.json',)
        .then(resp => resp.json())
        .then(data => {
            setColumn(Object.keys(data.transactions[0]))
            setRecords(data.transactions)
            })
    }, [])
      
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        {/* mapping data from column */}
                        {column.map((c, i)=>(
                            <th key={i}>{c}</th>
                            
                        ))}
                    </tr>

                </thead>
                <tbody>
                    {
                       records.map((record, i)=>(
                        <tr key={i}>
                            <td>{record.id}</td>
                            <td>{record.date}</td>
                            <td>{record.description}</td>
                            <td>{record.category}</td>
                            <td>{record.amount}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                       )) 
                    }
                </tbody>
            </table>

        </div>
    )
}
export default Fetch;