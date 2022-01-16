import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "../index.css"

const Post = ()=>{
    const [message, setMessage] = useState(null);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const submitHandler = ()=>{
        setMessage({
            title,
            body,
        })
    }

    const titleHandler = (e)=>{
        setTitle(e.target.value)
    }

    const bodyHandler = (e)=>{
        setBody(e.target.value)
    }
    
    
    return (
        <div>
            at the post!
            <Link to = "/">Problem Bank</Link>
            <form class= "container-input">
                <input onChange = {titleHandler} class= "post-title-input" type= "text" placeholder='Enter the title'/> <br />
                <input onChange = {bodyHandler} class= "post-body-input" type= "text" placeholder='Enter the problem body'/> <br />
                <button onClick={submitHandler}>
                    submit
                </button>
            </form>
        </div>
    )
}

export default Post;
