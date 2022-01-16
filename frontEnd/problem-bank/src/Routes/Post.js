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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
            <div className="navbar">
            <a href="/">Home</a>
                <Link to = "/">Problem Bank</Link>
            </div>
            <div className="formDiv">
                <h3>Enter the details of the problem.</h3>
                {/* <form class= "container-input"> */}
                <form>
                    <input onChange = {titleHandler} class= "post-title-input" type= "text" placeholder='Enter the title'/> <br />
                    <textarea onChange = {bodyHandler} class= "post-body-input" type= "text" placeholder='Enter the problem body'/> <br />
                    <button onClick={submitHandler} class="submitButton">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Post;
