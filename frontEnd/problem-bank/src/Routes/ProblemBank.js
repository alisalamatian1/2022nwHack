import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as styledComponents from "https://cdn.skypack.dev/styled-components@5.3.3";
import "../index.css"
import { AiFillLike } from "react-icons/ai";
import { icons } from 'react-icons/lib';

export default function ProblemBank() {
    const [problems, setProblems] = useState([]);
    const [likeState, setLikeState] = useState(false);
    const [option, setOption] = useState(0);

    const fetchProblemList = () => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        axios.get('/api/list/all', config).then(
            res => {
                setProblems(res.data.problems_list);
                console.log("-------")
                console.log(res)
                console.log(res.data.problems_list);
            }
        ).catch(
            err => {
                alert(err.message);
            }
        )
    }

    useEffect(() => {
        fetchProblemList();
    }, [likeState]);


    const addOneLike = (problem)=>{ 
        setLikeState(!likeState);     
        const config = {
            headers: {
                "Content-Type": "application/json" 
            }
        }
        const postId = problem._id;
        axios.put('/api/updateLike', {postId}, config);           
    }

    const changeToRecent = ()=>{
        setOption(1);
    }
    const changeToPopular= ()=>{
        setOption(0);
    }


    return (
        <div>
           <div className="navbar">
                <a href="/">Home</a>
                <Link to = "/Post">Post</Link>
            </div>
            <h3>Problem Bank</h3>
            <div className="container">
                <button onClick={changeToRecent}>
                Recent
                </button>
                <button onClick={changeToPopular}>
                Popular
                </button>
                {problems.map(
                    (problem) => {
                        return (
                            <div className="message-blue">
                                <p className="message-content">{problem.title}
                                <hr />
                                    <button onClick={()=>{addOneLike(problem)}}>
                                        <AiFillLike />{problem.likeCount}
                                    </button>
                                </p>
                                <p className="message-content">{problem.body}</p>
                            </div>
                        )
                    }
                )}
            </div>
        </div>

    )
}






