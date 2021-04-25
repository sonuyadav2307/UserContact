import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import {authenticateUsers} from '../../redux/actions/authentication'
const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authenticateUsers())
        localStorage.removeItem('state')
    })
    return (
        <div>
            <h1>Logged Out</h1>
        </div>
    )
}

export default HomePage
