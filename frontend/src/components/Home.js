import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate= useNavigate()

    const handleSubmit=()=>{
        navigate("/dashboard")
    }

    return (
        <>
        <div className='home_scope'>
            <div className="card">
                <div className='form_container px-5 py-3'>
                    <h4>Login</h4>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control input_label" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" className="form-control input_label" id="exampleInputPassword1" />
                </div>
                </div>
                <button type="submit" className="btn btn-primary mx-5 my-3" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
        </>
    )
}

export default Home