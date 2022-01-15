import React from 'react'
import { Link } from 'react-router-dom'

export default function Post() {
    return (
        <div>
            at the post!
            <Link to = "/">Problem Bank</Link>
            <form>
                <input type= "text" placeholder='Enter the problem'/>
            </form>
        </div>
    )
}
