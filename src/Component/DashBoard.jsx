

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import getpercent from './Percentage'
let host = 'http://localhost:3005'




function DashBoard() {

    const [userdata, setUserdata] = useState([])
    const { StudentName } = useParams()
    let navigate = useNavigate()


     // Get Api call
    const getDetail = async () => {

        await axios.get(`${host}/name/${StudentName}`).then(res => {
            // console.log(res.data.data.topic)
            setUserdata(res.data.data.topic)
        }).catch(err => {
            navigate('/')
            console.log(err)
        })


    }
    
    useEffect(() => {
        getDetail()
    }, [])

    return (
        <>
            <button className="btn1 my-3"> <i className="fa fa-home" onClick={() => { localStorage.clear(); navigate('/') }} > Home </i> </button>
            <div className='my-3'>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <h1 className='dashboard' style={{ 'fontFamily': 'Josefin Sans' }}>  WELCOME TO  DASHBOARD <p style={{ 'color': 'red' }}> <i> {StudentName.toUpperCase()} </i> </p></h1>
                    <button className="btn btn-dark" type="button" onClick={() => navigate(`/addtopic/${StudentName}`)}> ADD TOPIC</button>
                </div>
            </div>

            <div className='d-flex justify-content-center flex-wrap mx-5'>
                {userdata.map((cur, index) => (
                    <div className="card my-2 mx-2 p-0" style={{ "width": "18rem" }} key={index}>
                        {/* { console.log(cur.addTopic)} */}
                        <div className="card-body">
                            <h5 className="card-title">Topic Name : <i> {cur.topicName} </i></h5>
                            <hr />
                            <p className="card-text btn btn-outline-danger px-5" > UNDERSTOOD {("" + getpercent(cur.addTopic).percentageunderstand).slice(0, 2)}% </p>
                            <p className="card-text btn btn-outline-success "> SOMEWHAT UNDERSTOOD {("" + getpercent(cur.addTopic).percentageSOMEWHATUNDERSTOOD).slice(0, 2)}% </p>
                            <p className="card-text btn btn-outline-warning px-5">NOT CLEAR {("" + getpercent(cur.addTopic).percentageNOTCLEAR).slice(0, 2)}% </p>
                            <p className="card-text btn btn-outline-dark px-5">  WHAT RUBBISH {("" + getpercent(cur.addTopic).percentageWHATRUBBISH).slice(0, 2)}% </p>

                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default DashBoard
