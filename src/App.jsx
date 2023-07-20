import { useState } from "react";
import "./styles.css"
import DeleteIcon from '@mui/icons-material/Delete';

export default function App() {
  const [newItem, setNewItem] = useState("Test");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
  <>
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input 
        value={newItem} 
        type="text" 
        id="item"
        onChange={e => setNewItem(e.target.value)}
      /> 
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox" />
        Item 1
      </label>
      <button className="btn btn-danger"><DeleteIcon /></button>
    </li>
  </ul>
  </>
  )
}