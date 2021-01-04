import React from 'react';

function LoginForm(props) {

    const {loginValues, updateLogin, submitLogin, loginErrors} = props;

    const changeLoginValues = (event) => {
        const {name, value} = event.target;
        updateLogin(name, value);
    };

    const uponSubmitLogin = (event) => {
        event.preventDefault();
        submitLogin();
    };

    return (
        <div>
            <form onSubmit = {uponSubmitLogin}>
                <label> Username
                    <input name = 'username'
                     type = 'text' 
                     value = {loginValues.username}
                     onChange = {changeLoginValues} />
                </label>

                <label> Password
                    <input name = 'password'
                     type = 'password' 
                     value = {loginValues.password} 
                     onChange = {changeLoginValues} />
                </label>
                <button>Submit</button>
            </form>
            
            <div className = 'errors-container'>
                <p>{loginErrors.username}</p>
                <p>{loginErrors.password}</p>
            </div>
        </div>
    )
};

export default LoginForm;