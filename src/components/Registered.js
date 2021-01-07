import React from 'react';
import {useHistory} from 'react-router-dom';

const Registered = () => {
    const {push} = useHistory();
    const pushToSignIn = () => {
        push('/login');
    }
    return (
        <div>
            <div>
            Thank you for registering please continue to the login screen below!
            </div>
            <button onClick={pushToSignIn}>Sign In!</button>
        </div>
    )
}

export default Registered;