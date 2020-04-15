const initialState = {
    counters: [
        {
            counterValue: 1,
            counterName: 'First Counter',
            id: 123
        }, {
            counterValue: 2,
            counterName: 'Second Counter',
            id: 234
        }, {
            counterValue: 3,
            counterName: 'Third Counter',
            id: 345
        }],
    userAuth: {}
};


export default function counter(state = initialState, action) {
    switch (action.type) {
        case 'COUNTER_PLUS':
            return {
                ...state,
                counters: state.counters.map(el => {
                    if (action.payload === el.id) return {...el, counterValue: el.counterValue + 1};
                    return el
                })
            };

        case 'COUNTER_MINUS':
            return {
                ...state,
                counters: state.counters.map(el => {
                    if (action.payload === el.id) return {...el, counterValue: el.counterValue - 1};
                    return el
                })
            };

        case 'COUNTER_RESET':
            return {
                ...state,
                counters: state.counters.map(el => ({...el, counterValue: 0}))
            };

        case 'COUNTER_ADD':
            return {
                ...state,
                counters: [...state.counters, {
                    counterValue: action.payload.counterValue,
                    counterName: action.payload.counterName,
                    id: action.payload.counterId
                }]
            };

        case 'COUNTER_DELETE':
            return {
                ...state,
                counters: state.counters.filter(el => el.id !== action.payload.id)
            };

        case 'COUNTER_UPDATE':
            return {
                ...state,
                counters: state.counters.map(el => {
                    if (action.payload.id === el.id) return {...el, counterName: action.payload.counterName};
                    return el;
                })
            };

            case 'User_login':
            return {
                ...state,
                userAuth: action.payload
            };

        default:
            return state;
    }
}
