
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

let host = 'http://localhost:3005'

const Landingpage = () => {

    const [username, setUsername] = useState('')
    let navigate = useNavigate()

    // Get Api call
    const Submit = async (e) => {
        if (username.length === 0) alert('please enter the student name');
        else {
            e.preventDefault()

            await axios.get(`${host}/name/${username}`).then(res => {
                console.log(res.data.data)
                localStorage.setItem('userinfo', JSON.stringify(res.data.data))
            }).catch(err => console.log(err))
            navigate(`/user/${username}`);
        }
    }

    return (
        <>
            <div className=' d-flex justify-content-between my-3 '>
                <h1 className=' mx-3 ' style={{ 'fontFamily': 'Josefin Sans' }} >LANDING PAGE</h1>
                <button className="button btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"  > <Link className="nav-link active" to='/create'> Create UserName </Link></button>
            </div>
            <div className='d-flex justify-content-center align-items-center' style={{ 'height': '70vh' }}>
                <div className=' d-flex justify-content-center align-items-center' style={{ 'border': '2px solid red', 'width': '60vh', 'height': '50vh', 'borderRadius': '20px' }}>
                    <form onSubmit={(e) => {
                        Submit(e)
                    }}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">UserName</label>
                            <input type="text" className="form-control" name='username' value={username} id="exampleFormControlInput1" placeholder="Enter your UserName" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-warning" onClick={(e) => Submit(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Landingpage





