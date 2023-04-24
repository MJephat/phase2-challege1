import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import './Bank.css'

function Fetch(){
    // setting useState variable
    const [column, setColumn] = useState([])
    const [records, setRecords] = useState([])
    // variables for search.
    const [query, setQuery] = useState("")

    console.log(query)

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
            {/* seach bar */}
            <input type="text" placeholder='Search...' className='search' 
            onChange={e=>setQuery(e.target.value)}/>
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
                        // filter function and mapping.
                       records.filter(record=>record.description.toLowerCase().includes(query)
                       ).map((record, i)=>(
                        <tr key={i}>
                            <td>{record.id}</td>
                            <td>{record.date}</td>
                            <td>{record.description}</td>
                            <td>{record.category}</td>
                            <td>{record.amount}</td>
                            <td>
                                <button id="edit">Edit</button>
                                <button id="delete">Delete</button>
                            </td>
                        </tr>
                       )) 
                    }
                </tbody>
            </table>

            <AddList setRecords={setRecords}/>

        </div>
    )
}


function AddList({setRecords}){
    const dateRef = useRef()
    const descriptionRef = useRef()
    const categoryRef = useRef()
    const amountRef = useRef()

    function handleSubmit(e){
        e.preventDefault();
        // grab the values in the form
        const date = e.target.elements.date.value;
        const description = e.target.elements.description.value;
        const category = e.target.elements.category.value;
        const amount = e.target.elements.amount.value;
        // create another object
        const newTransaction ={
            id:"15",
            date,
            description,
            category,
            amount
        }
        setRecords((prevRecords)=>{
            return prevRecords.concat(newTransaction)
        })
        dateRef.current.value =""
        descriptionRef.current.value =""
        categoryRef.current.value =""
        amountRef.current.value =""

    }
    return(
        <form className="addForm" onSubmit={handleSubmit} >
        <input type="date" name="date" placeholder="Enter date" ref={dateRef}/>
        <input type="text" name="description" placeholder="Enter description" ref={descriptionRef}/>
        <input type="text" name="category" placeholder="Enter category" ref={categoryRef}/>
        <input type="amount" name="amount" placeholder="Enter amount" ref={amountRef}/>
        <button id="submit">Add</button>




    </form>
    )
}


export default Fetch;