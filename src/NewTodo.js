import { useState } from 'react';

export default function NewTodo(props){
  // {onSubmit} then we can call addTodo just with onSubmit, it's called destructure
  const [newItem, setNewItem] = useState("");
  
  function handleSubmit(e){
    e.preventDefault(); // tnis will prevent the page from getting refreshed

    if(newItem === "") return

    props.onSubmit(newItem); // here it's passing the value that we've 
    // provided in the input.
    
    setNewItem("")
  }

  return(
    <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)}
            // onChange will get the value from the input by e.target.value
            // and then pass it into setnewItem and store into newItem
            // and by value={newItem} we are getting the value we changed
            // then it'll re-run the component(input) to show the value
            type="text" name="item"/>
        </div>
        <button className='btn'>Add</button>
      </form>
  )
}