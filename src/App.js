import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {counterMinus, counterPlus, countersReset, countersAdd, counterDelete, counterUpdate} from "./actions";
import Counter from "./Counter";
import AddCounter from "./AddCounter";
import UserLoginForm from "./UserLoginForm";

function App(props) {


    // const addCounterButtonHandler = (counterName, counterValue) => {
    //     props.addCounter(counterName, counterValue);
    // };

    return (
        <div className="App">



<UserLoginForm/>


            {/*<h2>Counters</h2>*/}
            {/*Total {props.myCounters.reduce((acc, el) => acc + el.counterValue, 0)}*/}
            {/*<hr/>*/}

            {/*{props.myCounters.map((el) => (*/}
            {/*    <Counter key={el.id}*/}
            {/*             name={el.counterName}*/}
            {/*             id={el.id}*/}
            {/*             value={el.counterValue}*/}
            {/*             counterPlus={props.myCounterPlus}*/}
            {/*             counterMinus={props.myCounterMinus}*/}
            {/*             counterDelete={props.deleteCounter}*/}
            {/*             counterUpdate={props.counterUpdate}*/}
            {/*    />*/}
            {/*))}*/}
            {/*<button onClick={props.myReset}>RESET</button>*/}
            {/*<hr/>*/}

            {/*<AddCounter onSubmit={addCounterButtonHandler}*/}
            {/*/>*/}

        </div>
    );
}

const mapStateToProps = state => ({
    // myCounters: state.counters
});

const mapDispatchToProps = dispatch => ({
    // myCounterPlus: (id) => dispatch(counterPlus(id)),
    // myCounterMinus: (id) => dispatch(counterMinus(id)),
    // myReset: () => dispatch(countersReset()),
    // addCounter: (counterName, counterValue) => dispatch(countersAdd(counterName, counterValue)),
    // deleteCounter: (id) => dispatch(counterDelete(id)),
    // counterUpdate: (counterName,id) => dispatch(counterUpdate(counterName,id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
