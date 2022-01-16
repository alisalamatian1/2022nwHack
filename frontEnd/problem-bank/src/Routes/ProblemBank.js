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

        console.log("????")

        if (option === 0){
            axios.get('/api/list/all', config).then(
                res => {
    
                    setProblems(res.data.problems_list.reverse());
                    console.log("!!!!")
                    console.log(res)
                    console.log(res.data.problems_list);
                }
            ).catch(
                err => {
                    alert(err.message);
                }
            )
        }else if (option === 1){
            axios.get('/api/list/all_like', config).then(
                res => {
    
                    setProblems(res.data.problems_list);
                    console.log("!!!!")
                    console.log(res)
                    console.log(res.data.problems_list);
                }
            ).catch(
                err => {
                    alert(err.message);
                }
            )
        }
        
    }

    useEffect(() => {
        console.log("-------")
        fetchProblemList();
    }, [likeState, option]);


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
        setOption(0);
    }
    const changeToPopular= ()=>{
        setOption(1);
    }


    return (
        <div>
            {console.log("++++")}
           <div className="navbar">
                <a href="/">Home</a>
                <Link to = "/Post">Post a problem</Link>
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
                                </p>
                                <hr />
                                <p className="message-content message-body">{problem.body}</p>
                                <hr />
                                    <button onClick={()=>{addOneLike(problem)}}>
                                        <AiFillLike />{problem.likeCount}
                                    </button>
                            </div>
                        )
                    }
                )}
            </div>
        </div>

    )
}






