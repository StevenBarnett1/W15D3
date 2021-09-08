import produceData from '../mockData/produce.json';

const ADD = 'cart/ADD';

export const populateCart = (id) => {
    return {
        type: ADD,
        id
    }
}

const cartReducer = (state = {}, action) => {
    switch (action.type){
        case ADD:
            console.log("state: ",state)
            const newState = {...state}
            console.log("newState: ",newState)
            if (newState[action.id]) newState[action.id].count++
            else newState[action.id] = {"id" : action.id, "count" : 1}
            return newState
        default:
            return state;
    }
}

export default cartReducer
