export default LoginForm;

import React from 'react';

function LoginForm(props) {

    const {loginValues} = props;

    return (
        <div>
            <form>
                <label> Username
                    <input name = 'username'
                     type = 'text' 
                     value = {loginValues.username} />
                </label>

                <label> Password
                    <input name = 'password'
                     type = 'password' 
                     value = {loginValues.password} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default LoginForm;