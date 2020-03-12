import React, {useState} from 'react';
import './App.css';

function AddCounter(props) {
    const [counterName, setCounterName] = useState('');
    const [counterValue, setCounterValue] = useState('');

    const inputCounterNameHandler = (e) => {
        setCounterName(e.target.value);
    };

    const inputCounterValueHandler = (e) => {
        setCounterValue( e.target.value );
    };

    const buttonHandler = () => {
        props.onSubmit(counterName, Number(counterValue) );
        setCounterName('');
        setCounterValue('');
    };

    return (
        <div >

            <input type="text" name='counterName' placeholder='type name' value={counterName}
                   onChange={inputCounterNameHandler}/>
            <input type="text" name='counterValue' placeholder='type value' value={counterValue}
                   onChange={inputCounterValueHandler}/>
            <button onClick={() => buttonHandler()}>Add counter</button>

        </div>
    );
}
export default AddCounter;
