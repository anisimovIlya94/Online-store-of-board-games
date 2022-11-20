import React from 'react'
import LoginWindow from '../../personalAccount/loginWindow';
import classes from "../../../modules/account.module.css"
import { useAuth } from '../../hooks/useAuth';

const LoginPage = () => {
    const { currentUser,isLoggedIn, isLoading } = useAuth()
    console.log(currentUser)
    console.log(isLoading)
    return (<div className={"d-flex " + classes.loginWrapper}>
        <div className={classes.loginWindow}>
            <div className={classes.loginMargin}>
            <LoginWindow margin="0 0 30px -5px"/>
            </div>
        
        </div>
    </div> );
}
 
export default LoginPage;