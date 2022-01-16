import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import "../index.css"

const Post = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        
        const config = {
            headers: {
                "Content-Type": "application/json" 
            }
        }

        axios.post('/api/post', {title, body}, config).then(
            res => {
                alert(`${res.data.message}`);
            }
        ).catch(
            err => {
                alert(err.message);
            }
        )
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
