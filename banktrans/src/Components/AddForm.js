import React, { useState } from "react";
import '../App.css';


function AddTransaction() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

//   function to listent to the event submit and add new list on the UI
  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      date,
      description,
      category,
      amount
    }
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  ;

    // the post function that allows update in the json (API)
    fetch("https://my-json-server.typicode.com/MJephat/phase2-challege1/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
      .then(res => res.json())
      .then(() => {

        alert("Transaction ++");
        
       
      })
      .catch(error => console.error(error));
  }
  return (
    // form for submitting new transactions
    <form onSubmit={handleSubmit} className="addForm">
      <input type="date" value={date} placeholder="Date" onChange={(e) => setDate(e.target.value)}/>  
      <input type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
      <input type="text" value={category} placeholder="Category" onChange={(e) => setCategory(e.target.value)}/>
      <input type="number" value={amount} placeholder="Amount" onChange={(e) => setAmount(e.target.value)}/>

      <button type="submit" id="submit">Submit</button>
    </form>
  );
  }
export default AddTransaction;