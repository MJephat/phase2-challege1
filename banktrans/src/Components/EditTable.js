import React, { useState } from "react";
import './Bank.css';

function EditTransaction({ transaction, onEdit }) {
  const [date, setDate] = useState(transaction.date);
  const [description, setDescription] = useState(transaction.description);
  const [category, setCategory] = useState(transaction.category);
  const [amount, setAmount] = useState(transaction.amount)
//   const [query, setQuery] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
    const updatedTransaction= {
    
      ...transaction,
      date,
      description,
      category,
      amount

    };
    onEdit(updatedTransaction);
  }

  return (
    <form onSubmit={handleSubmit}>
    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}/>
    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
    
    <button type="submit" id="submit">submit</button>
    </form>
  );
}
export default EditTransaction;