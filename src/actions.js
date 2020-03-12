export function counterPlus(id) {
    return {
        type: 'COUNTER_PLUS',
        payload: id
    };
}

export function counterMinus(id) {
    return {
        type: 'COUNTER_MINUS',
        payload: id
    };
}

export function countersReset() {
    return {type: 'COUNTER_RESET'};
}

export function countersAdd(counterName, counterValue) {
    const counterId= Math.random();
    return {
        type: 'COUNTER_ADD',
        payload: {counterId, counterName, counterValue}
    };
}

export function counterDelete(id) {
    return {
        type: 'COUNTER_DELETE',
        payload: id
    };
}