import axios from 'axios';

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
    const counterId = Math.random();
    return {
        type: 'COUNTER_ADD',
        payload: {counterId, counterName, counterValue}
    };
}

export function counterDelete(id) {
    return {
        type: 'COUNTER_DELETE',
        payload: {id}
    };
}

export function counterUpdate(counterName, id) {
    return {
        type: 'COUNTER_UPDATE',
        payload: {counterName, id}
    };
}

export function userLogin(args) {

    axios({
        method: 'post',
        url: 'https://server-stage.pasv.us/user/login',
        data: args
    }).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    });

    return {
        type: 'USER_LOGIN',
        payload: args
    };
}

export function userUpdate(args) {

    axios({
        method: 'patch',
        url: 'https://server-stage.pasv.us/user/login',
        data: args
    }).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    });

    return {
        type: 'USER_LOGIN',
        payload: args
    };
}

export function getUserById(args) {

    axios({
        method: 'get',
        url: 'https://server-stage.pasv.us/user/login',
    }).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    });

    return {
        type: 'USER_LOGIN',
        payload: args
    };
}

export function userDelete(args) {

    axios({
        method: 'delete',
        url: `https://server-stage.pasv.us/user/${args.userId}`,
        data: args
    }).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    });

    return {
        type: 'USER_LOGIN',
        payload: args
    };
}