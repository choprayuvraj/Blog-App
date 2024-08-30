import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

export default function Protected({children, authetication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // let authValue = authStatus === true ? true : false
        if(authetication && authStatus !== authetication) {
            navigate("/login")
        }
        else if(!authetication && authStatus !== authetication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authetication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}

