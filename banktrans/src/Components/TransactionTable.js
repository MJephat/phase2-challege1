// importing libliries for this component
import React, { useEffect, useState } from "react";
import '../App.css'
import EditTransaction from "./EditTable";
import './Bank.css';


// writing transactionTableComponent functionality.
function TransactionTable() {
  // creating useState variables
  const [transactions, setTransactions] = useState([]);
  const [editId, setEditId] = useState(null);
  const [query, setQuery] = useState("")

  console.log(query)
// fetching data using UseEffect from the API
  useEffect(() => {
    fetch("https://transaction-details.onrender.com/transactions")
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions));

  }, []);

// function for Delete from the API by id
  function handleDelete(id) {
    fetch(`https://transaction-details.onrender.com/transactions/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("Are you sure you want to delete this transaction?");
          setTransactions(transactions.filter((rem) => rem.id !== id));
        } else {
          throw new Error("Event couldn't be completed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

// function for editing transactions and updating it.
  function handleUpdate(updatedTransaction) {
    const updatedTransactions = transactions.map((transaction) =>
    transaction.id === updatedTransaction.id ? updatedTransaction : transaction
    );
    setTransactions(updatedTransactions);
    setEditId(null);
    }


  return (
    <div>
            {/* seach bar  for live search*/}
    <input type="text" placeholder='Search.' className='search' onChange={e=>setQuery(e.target.value)}/>
       
    <table className="table">
      <thead>
        <tr>
          {/* table data heads */}
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th> Action</th>
          
        </tr>
      </thead>
      <tbody>
        {
          // mapping for data from json file and also for live filter in the search bar.
        transactions.filter(transaction=>transaction.description.toLowerCase().includes(query)
        ).map((transaction) => (
          <tr key={transaction.id}>
        
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>
  {editId === transaction.id ? (
    <EditTransaction
      transaction={transaction}
      onEdit={handleUpdate}
      onCancel={() => setEditId(null)}
    />
    // creating buttons for edit and delete.
  ) : ( <button id="edit" onClick={()=> setEditId(transaction.id)}> Edit </button>)}
         <button id="delete" onClick={()=> handleDelete(transaction.id)}> Delete </button>
        </td>
       </tr>
     ))}
    </tbody>
</table>
</div>
  );
}
export default TransactionTable;