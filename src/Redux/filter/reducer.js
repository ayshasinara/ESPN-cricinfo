import * as types from "./actionType";
const initalstate = {
    events:[],
    isLoading:false,
    isError:false,
}

const reducer = (state = initalstate, action)=>{
    const {type, payload} = action;
    switch(type) {
        case types.GET_DATA_REQUEST:
            return {...state,isLoading:true};
        case types.GET_DATA_SUCCESS:
            return {...state,isLoading:false, events:payload};
        case types.GET_DATA_ERROR:
            return {...state,isLoading:false, isError:true};
        case types.FILTER_DATA_REQUEST:
            return {...state};
        case types.FILTER_DATA_SUCCESS:
            return {...state, events:payload};
        case types.FILTER_DATA_ERROR:
            return { ...state}
        default:
            return state;
    }
}
export {reducer}