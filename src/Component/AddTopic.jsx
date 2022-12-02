

import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import EditorCustomToolbarOption from './Form'

let host = 'http://localhost:3005'

const AddTopic = () => {

    const [topic, setTopic] = useState('')
    const [textData, setTextData] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()
    const { StudentName } = useParams()

    const userid = JSON.parse(localStorage.getItem('userinfo'))._id

     // Put Api call
    const createTopic = async () => {

        await axios.put(`${host}/user/${userid}`, { topicname: topic, addTopic: textData }).then((res) => {
            console.log(res.data)
            setTopic('')
            setSuccess('successfully added topic')
        }).catch(err => console.log(err))
    }


    return (
        <>
            <button className="btn1 my-3"> <i className="fa fa-close" onClick={() => navigate(`/user/${StudentName}`)} > Close </i> </button>

            <div className="user my-5" style={{ 'margin': '3rem 5rem' }}>
                <form className='shadow p-3 mb-5 bg-body rounded'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your Topic</label>
                        <input type="text" placeholder='topic' className="form-control" name='topic' value={topic} onChange={(e) => setTopic(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Text Area</label>
                        <EditorCustomToolbarOption setTextData={setTextData} />
                    </div>
                    <div className='d-flex'>
                    <button type="submit" className="btn btn-outline-success" onClick={(e) => {
                        e.preventDefault()
                        createTopic()
                    }}>Submit</button>
                    <p  style={{'color': 'green' ,'margin': 'auto', 'marginLeft': '20px'}}>{success}</p>
                    </div>
                </form>
            </div>
            <div className="user my-5" style={{ 'margin': '3rem 5rem' }}>

                <div className='shadow p-3 mb-5 bg-body rounded'>
                    <h5>Instruction Note :-</h5>
                    <p> • UNDERSTOOD • SOMEWHAT UNDERSTOOD  • NOT CLEAR   • WHAT RUBBISH</p>
                    <p><i> → If you are understand then used double qoute   [ ] </i></p>
                    <p><i> → If you should understand litle bit then used bracket   ? | </i></p>
                    <p><i> → If you shouldn't clear your topic then used Pipe symbol  ( ) </i></p>
                    <p><i> → If you dislike this topic then used small bracket   / = </i></p>
                </div>
            </div>
        </>
    )
}







export default AddTopic
