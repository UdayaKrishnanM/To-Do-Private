import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'


const AddItem = ({newItem, setNewItem, handleSubmit}) =>{ 

  const inputRef = useRef()

  return (
    // onSubmit is attribute thats submits the form
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input
            autoFocus
            id='addItem'
            type='text'
            ref={inputRef}
            placeholder="Add Item"
            required 
            value = {newItem}
            onChange = {(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Item'
            // focus is used here because when we click this button the cursor moves to the above input box
            onClick={()=> inputRef.current.focus()}
        >
            <FaPlus/>
        </button>
    </form>
  )
}
export default AddItem
