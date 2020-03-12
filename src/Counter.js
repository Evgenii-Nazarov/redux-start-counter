import React from 'react';
import './App.css';

function Counter(props) {

    return (
        <div key={props.id}>


                {props.name}




                <button onClick={()=>props.counterMinus(props.id)}>MINUS</button>

                {props.value}

                <button onClick={()=>props.counterPlus(props.id)}>PLUS</button>

                <hr/>


        </div>
    );
}
export default Counter;
