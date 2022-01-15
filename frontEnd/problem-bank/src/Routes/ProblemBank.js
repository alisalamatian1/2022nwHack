import React from 'react'
import { Link } from 'react-router-dom'
import * as styledComponents from "https://cdn.skypack.dev/styled-components@5.3.3";
import "../index.css"


export default function ProblemBank() {
    return (
        <div>
            We are at the problem bank
            <p>
                <Link to="/Post">Post</Link>
            </p>     
            <div class="container">
                <div class="message-blue">
                    <p class="message-content">This is the first problem!</p>
                </div>
            </div>      
        </div>
        
    )
}






