import React, { useState } from "react";


function EditTransaction({ transaction, onEdit }) {
  const [date, setDate] = useState(transaction.date);
  const [description, setDescription] = useState(transaction.description);
  const [category, setCategory] = useState(transaction.category);
  const [amount, setAmount] = useState(transaction.amount)


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
    <label>Date:<input type="date" value={date} onChange={(e) => setDate(e.target.value)}/></label>
    <label>Description:<input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/></label>
    <label>Category:<input type="text" value={category} onChange={(e) => setCategory(e.target.value)}/></label>
    <label>Amount:<input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/></label>
    
    <button type="submit">Save</button>
    </form>
  );
}
export default EditTransaction;