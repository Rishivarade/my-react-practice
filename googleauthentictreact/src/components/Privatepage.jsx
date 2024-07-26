import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../service/firebase';
import { Navigate } from 'react-router-dom';
const Privatepage = ({children}) => {
    const [user] = useAuthState(auth);
    if (!user){
        return <Navigate to={"/login"}/>
    }
    return children
}

export default Privatepage
