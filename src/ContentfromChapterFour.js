import { useState } from 'react'
import './index.css'


const ContentfromChapterFour = () => {

    const [name, setName] = useState('Udaya')
    const [count, setCount] = useState(0)

    const handleName = ()=>{
        const names = ["Udaya", "Messi", "Emi"]
        const int = Math.floor(Math.random()*3)
        setName(names[int])
    }

    const handleClick = ()=>{
        // The current value of the state comes into the function and we do not alter that and even though we might use setCount or whatever you use to set the state for your used state when you log to the console or use the value of the current state after that it will not have changed because thats what was brought into the function
        setCount(count+1)
        setCount(count+1)
        console.log(count)
    }

    const handleClick2 = ()=>{
        console.log(count)
    }

    // const handleClick21 = (name)=>{
    //     console.log(`${name} was clicked`)
    // }
    // const handleClick31 = (e)=>{
    //     console.log(e.target.innerText)
    // }


  return (
    <main>
        <p onDoubleClick={handleClick}>Hello {name}</p>
        <button onClick={handleName}>Change Name</button>
        <button onClick={handleClick}>Click it</button>
        <button onClick={handleClick2}>Click it</button>


{/*     this is enoromous function
        <button onClick={() => handleClick21('Udaya')}>Click it</button> */}
        {/* <button onClick={(e)=>{handleClick31(e)}}>Click it</button> */}

    </main>
  )
}

export default ContentfromChapterFour