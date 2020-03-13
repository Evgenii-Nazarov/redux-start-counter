import React, {useState} from 'react';
import './App.css';

function Counter(props) {

    const [newCounterName, setNewCounterName] = useState('');

    const inputUpdateCounterHandler = (e) => {
        setNewCounterName(e.target.value);
    };

    const updateButtonHandler = (e) => {
        props.counterUpdate(newCounterName,props.id);
        setNewCounterName('');
    };

    return (
        <div key={props.id}>
            {props.name}

            <button onClick={() => props.counterMinus(props.id)}>MINUS</button>

            {props.value}

            <button onClick={() => props.counterPlus(props.id)}>PLUS</button>

            <button onClick={() => props.counterDelete(props.id)}>delete</button>


            <input type="text" onChange={inputUpdateCounterHandler} name='counterUpdate' value={newCounterName}
                   placeholder='type new name'/>
            <button onClick={()=>{updateButtonHandler()}}>Update</button>
            <hr/>

        </div>
    );
}

export default Counter;
