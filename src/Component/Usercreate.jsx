

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import EditorCustomToolbarOption from './Form'

let host = 'http://localhost:3005'

function Usercreate() {

    const [data, setData] = useState('')
    const [currtopic, setCurrtopic] = useState('')
    const [textData, setTextData] = useState('')
    let navigate = useNavigate()
    const [success, setSuccess] = useState('')

    // Post Api call
    const CreateData = async (e) => {

        e.preventDefault()
        await axios.post(`${host}/createuser`, { userName: data, topicName: currtopic, addTopic: textData }).then(res => {
            console.log(res.data.data)
            setData('')
            setCurrtopic('')
            setTextData('')
            setSuccess('successfully created userName')
        }).catch(err => console.log(err))

    }


    return (
        <>
            <button className="btn1 my-3"> <i className="fa fa-home" onClick={() => navigate('/')} > Home </i> </button>
            <div className="user my-5" style={{ 'margin': '3rem 5rem' }}>

                <form className='shadow p-3 mb-5 bg-body rounded'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your UserName</label>
                        <input type="text" placeholder='UserName' className="form-control" name='data' value={data} onChange={(e) => setData(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your Topic</label>
                        <input type="text" placeholder='topic' className="form-control" name='currtopic' value={currtopic} onChange={(e) => setCurrtopic(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Text Area</label>
                        <EditorCustomToolbarOption setTextData={setTextData} />
                    </div>
                    <div className='d-flex'>
                        <button type="submit" className="btn btn-outline-success" onClick={(e) => CreateData(e)}>Submit</button>
                        <p style={{ 'color': 'green', 'margin': 'auto', 'marginLeft': '20px' }}>{success}</p>
                    </div>
                </form>
            </div>
            <div className="user my-5" style={{ 'margin': '3rem 5rem' }}>

                <div className='shadow p-3 mb-5 bg-body rounded'>

                    <h5>Instruction Note :-</h5>
                    <p> • UNDERSTOOD • SOMEWHAT UNDERSTOOD  • NOT CLEAR  • WHAT RUBBISH</p>
                    <p><i> → If you are understand then used double qoute   [ ] </i></p>
                    <p><i> → If you should understand litle bit then used bracket  ? | </i></p>
                    <p><i> → If you shouldn't clear your topic then used Pipe symbol  ( ) </i></p>
                    <p><i> → If you dislike this topic then used small bracket   / = </i></p>
                </div>
            </div>


        </>
    )
}

export default Usercreate
