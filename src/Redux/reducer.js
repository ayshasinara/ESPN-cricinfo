import * as types from "./actionTypes"
const initialState={
    liveScore:[],
    majorTournament:[],
    newsdata:[],
    isLoading:false,
    isError:false
}

const reducer =(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_TOPEVENT_REQUEST:
            return{
                ...state,
                isLoading: true,
                isError: false,
            }
            case types.GET_TOPEVENT_SUCCESS:
                // console.log(payload)
                return{
                    ...state,
                    isLoading:false,
                    isError:false,
                    liveScore:payload
                }
                case types.GET_TOPEVENT_FAILURE:
                    return{
                        ...state,
                        isLoading:false,
                        isError:false
                    }
                    case types.GET_MAJOR_REQUEST:
            return{
                ...state,
                isLoading: true,
                isError: false,
            }
            case types.GET_MAJOR_SUCCESS:
                // console.log(payload)
                return{
                    ...state,
                    isLoading:false,
                    isError:false,
                    majorTournament:payload
                }
                case types.GET_MAJOR_FAILURE:
                    return{
                        ...state,
                        isLoading:false,
                        isError:false
                    }
                    case types.GET_NEWS_REQUEST:
                        return{
                            ...state,
                            isLoading: true,
                            isError: false,
                        }
                        case types.GET_NEWS_SUCCESS:
                            // console.log(payload)
                            return{
                                ...state,
                                isLoading:false,
                                isError:false,
                                newsdata:payload
                            }
                            case types.GET_NEWS_FAILURE:
                                return{
                                    ...state,
                                    isLoading:false,
                                    isError:false
                                }

                    default:
                        return state;

    }
}
export {reducer}