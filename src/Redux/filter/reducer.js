import * as types from "./actionType";
const initalstate = {
    events:[],
    mvp:[],
    batting1:[],
    bowling1:[],
    batting2:[],
    bowling2:[],
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


            case types.MVP_DATA_REQUEST:
                return {...state,isLoading:true};
            case types.MVP_DATA_SUCCESS:
                return {...state,isLoading:false, mvp:payload};
            case types.MVP_DATA_ERROR:
                return {...state,isLoading:false, isError:true};

        case types.BATTING_DATA_REQUEST:
            return {...state,isLoading:true};
        case types.BATTING_DATA_SUCCESS:
            return {...state,isLoading:false, batting1:payload};
        case types.BATTING_DATA_ERROR:
            return {...state,isLoading:false, isError:true};

            case types.BOWLING_DATA_REQUEST:
                return {...state,isLoading:true};
            case types.BOWLING_DATA_SUCCESS:
                return {...state,isLoading:false,  bowling1:payload};
            case types.BOWLING_DATA_ERROR:
                return {...state,isLoading:false, isError:true};

                case types.BATTING2_DATA_REQUEST:
                    return {...state,isLoading:true};
                case types.BATTING2_DATA_SUCCESS:
                    return {...state,isLoading:false, batting2:payload};
                case types.BATTING2_DATA_ERROR:
                    return {...state,isLoading:false, isError:true};

                    case types.BOWLING2_DATA_REQUEST:
                        return {...state,isLoading:true};
                    case types.BOWLING2_DATA_SUCCESS:
                        return {...state,isLoading:false,  bowling2:payload};
                    case types.BOWLING2_DATA_ERROR:
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