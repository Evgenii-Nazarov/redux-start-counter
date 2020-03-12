import React, {useState} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {counterMinus, counterPlus, countersReset, countersAdd, counterDelete} from "./actions";
import Counter from "./Counter";
import AddCounter from "./AddCounter";

function App(props) {

    const [counterName, setCounterName] = useState('');
    const [counterValue, setCounterValue] = useState('');

    const inputCounterNameHandler = (e) => {
        setCounterName(e.target.value);
    };

    const inputCounterValueHandler = (e) => {
        setCounterValue(e.target.value);
    };

    const addCounterButtonHandler = () => {
        props.addCounter(counterName, counterValue);
        setCounterName('');
        setCounterValue('');
    };

    return (
        <div className="App">
            <h2>Counters</h2>
            Total {props.myCounters.reduce((acc, el) => acc + el.counterValue, 0)}
            <hr/>

            {props.myCounters.map((el) => (
                <Counter key={el.id}
                         name={el.counterName}
                         id={el.id}
                         value={el.counterValue}
                         counterPlus={props.myCounterPlus}
                         counterMinus={props.myCounterMinus}
                />
            ))}
            <button onClick={props.myReset}>RESET</button>
            <hr/>

            <AddCounter onSubmit={addCounterButtonHandler}
            />


            <input type="text" name='counterName' placeholder='type name' value={counterName}
                   onChange={inputCounterNameHandler}/>
            <input type="text" name='counterValue' placeholder='type value' value={counterValue}
                   onChange={inputCounterValueHandler}/>
            <button onClick={() => addCounterButtonHandler()}>Add counter</button>
        </div>
    );
}

const mapStateToProps = state => ({
    myCounter: state.counters[0].counterValue,
    myCounterName: state.counters[0].counterName,
    myCounters: state.counters
});

const mapDispatchToProps = dispatch => ({
    myCounterPlus: (id) => dispatch(counterPlus(id)),
    myCounterMinus: (id) => dispatch(counterMinus(id)),
    myReset: () => dispatch(countersReset()),
    addCounter: (counterName, counterValue) => dispatch(countersAdd(counterName, counterValue)),
    deleteCounter: (id) => dispatch(counterDelete(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
