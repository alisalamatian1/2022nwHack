import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as styledComponents from "https://cdn.skypack.dev/styled-components@5.3.3";
import "../index.css"


export default function ProblemBank() {
    const [problems, setProblems] = useState([]);

    const fetchProblemList = () => {
        const config = {
            headers: {
                "Content-Type": "application/json" 
            }
        }

        axios.get('/api/list/all', config).then(
            res => {
                setProblems(res.data.problems_list);
                console.log(res.data.problems_list);
            }
        ).catch(
            err => {
                alert(err.message);
            }
        )
    }

    fetchProblemList();

    /*
    useEffect(() => {
        fetchProblemList();
    }, []);
    */

    return (
        <div>
            We are at the problem bank
            <p>
                <Link to="/Post">Post</Link>
            </p>     
            <div class="container">
                {problems.map(
                    (problem) => {
                        return(
                            <div className="message-blue">
                                <p className="message-content">{problem.title}</p>
                                <p className="message-content">{problem.body}</p>
                            </div>
                        )
                    }
                )}  
            </div>      
        </div>
        
    )
}






