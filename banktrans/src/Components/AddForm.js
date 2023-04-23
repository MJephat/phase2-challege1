import React from "react";

function AddForm(){
    return(
        // creating a form
        // and event onSubmit
        <form className="addForm"  on onSubmit={handleValues}>
            <input type="date" name="date" placeholder="Enter date"/>
            <input type="text" name="description" placeholder="Enter description"/>
            <input type="text" name="category" placeholder="Enter category"/>
            <input type="amount" name="amount" placeholder="Enter amount"/>
            <button>Add</button>




        </form>
        
    )
}
export default AddForm;