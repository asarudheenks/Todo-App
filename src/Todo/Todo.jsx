import React, { useState } from 'react'
import './Todo.css'

function Todo() {
    const [input,setinput] = useState("");
    const [store,setstore] = useState([])
    const [edit,setedit] = useState(null)


    const handleSubmit =()=>{
        if(edit !== null){
            setstore(store.map((data,index)=>(index===edit ? input : data)))
            setedit(null)
          }
          else{
            setstore([...store,input])
          }
          setinput('')
    }
    const handleDelete =(index)=>{
        const data = [...store]
        data.splice(index,1)
        setstore(data)
    }
    const handleEdit =(index)=>{
        setinput(store[index])
        setedit(index)
    }


  return (
    <div>
      <div className="todo">
                <h1>Todo App</h1>
                <div className="todo-input">
                    <input type="text"
                        placeholder="Enter Here"
                        value={input}
                        onChange={((e)=>setinput(e.target.value))}
                    />
                    <button className="submit" onClick={handleSubmit}>Submit</button>

                </div>
                <ul>
                    {
                        store.map((list,index)=>
                        <li key={index}>
                            {list} <button onClick={()=>handleEdit(index)}>Edit</button><button onClick={()=>handleDelete(index)}>Delete</button></li>
                        )
                    }
                </ul>
            </div>

    </div>
  )
}

export default Todo
