import React, {useState} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {
    counterMinus,
    counterPlus,
    countersReset,
    countersAdd,
    counterDelete,
    counterUpdate,
    userLogin
} from "./actions";


function USerLoginForm(props) {

    const [email, setEmail] = useState('qwe@qwe.qwe');
    const [password, setPassword] = useState('');

    const inputEmailHandler = (e) => {
        setEmail(e.target.value);
    };

    const inputPasswordHandler = (e) => {
        setPassword(e.target.value);
    };

    const loginButtonHandler = (e) => {
        console.log(email, password);
        props.userLogin({email,password})
    };

    return (
        <div className="App">

            <h3>USer Login Form</h3>
            <input name={'email'} value={email} onChange={inputEmailHandler} type="text"/>
            <input name={'email'} value={email} onChange={inputEmailHandler} type="text"/>
            <input name={'email'} value={email} onChange={inputEmailHandler} type="text"/>
            <input name='password' value={password} onChange={inputPasswordHandler} type="password"/>
            <input name='password' value={password} onChange={inputPasswordHandler} type="password"/>
            <button onClick={()=>loginButtonHandler()}>Login</button>
            <button onClick={()=>loginButtonHandler()}>Logout</button>


        </div>
    );
}

const mapStateToProps = state => ({
    myCounters: state.counters
});

const mapDispatchToProps = dispatch => ({
    userLogin: (args) => dispatch(userLogin(args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(USerLoginForm);

