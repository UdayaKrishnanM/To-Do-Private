import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    
    <li className="item">
        <input
            type="checkbox"
            // onChange is used in input tags of HTML. For button tags we use onClick for input tags use onChange
            onChange={()=> handleCheck(item.id)}
            // below checked is used for ticking the box
            // checked attribute is used to checkbox to get tick or not depends on the boolean value of item.che
            checked={item.checked}
        />
        <label
            style={(item.checked) ? {textDecoration:'line-through'} : null}
            onDoubleClick={()=>{handleCheck(item.id)}}
        >{item.item}</label>
        <FaTrashAlt 
            onClick={()=>handleDelete(item.id)}
            role="button" 
            tabIndex="0"
            // Most JSX attribute are CamelCase but aria-lavel uses hypher
            aria-label={`Delete ${item.item}`}
            />
    </li>
  )
}

export default LineItem