import React, { useEffect, useState } from "react";
import '../App.css'
import EditTransaction from "./EditTable";
import './Bank.css';



function TransactionTable() {
  const [transactions, setTransactions] = useState([]);
  const [editId, setEditId] = useState(null);
  const [query, setQuery] = useState("")

  console.log(query)

  useEffect(() => {
    fetch("http://localhost:3004/transactions")
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions));

  }, []);


  function handleDelete(id) {
    fetch(`http://localhost:3004/transactions/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("Are you sure you want to delete this transaction?");
          setTransactions(transactions.filter((t) => t.id !== id));
        } else {
          throw new Error("Event couldn't be completed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


  function handleUpdate(updatedTransaction) {
    const updatedTransactions = transactions.map((transaction) =>
    transaction.id === updatedTransaction.id ? updatedTransaction : transaction
    );
    setTransactions(updatedTransactions);
    setEditId(null);
    }


  return (
    <div>
            {/* seach bar */}
    <input type="text" placeholder='Search.' className='search' onChange={e=>setQuery(e.target.value)}/>
       
    <table className="table">
      <thead>
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th> Action</th>
          
        </tr>
      </thead>
      <tbody>
        {transactions.filter(transaction=>transaction.description.toLowerCase().includes(query)
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