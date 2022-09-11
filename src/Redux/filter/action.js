import axios from "axios";
import * as types from "./actionType";

const getData = () => (dispatch) =>{
dispatch({type: types.GET_DATA_REQUEST});
return axios
.get("https://cricinfodata.herokuapp.com/TopEvenet1")
.then ((r)=>{
    dispatch({type: types.GET_DATA_SUCCESS, payload: r.data});
})
.catch((e)=>{
    dispatch({type: types.GET_DATA_ERROR, payload: e});
});
}


const mvpData = () => (dispatch) =>{
    dispatch({type: types.MVP_DATA_REQUEST});
    return axios
    .get(" https://cricinfodata.herokuapp.com/londonvswelsh")
    .then ((r)=>{
        dispatch({type: types.MVP_DATA_SUCCESS, payload: r.data});
    })
    .catch((e)=>{
        dispatch({type: types.MVP_DATA_ERROR, payload: e});
    });
    }

    const battingData = () => (dispatch) =>{
        dispatch({type: types.BATTING_DATA_REQUEST});
        return axios
        .get(" https://cricinfodata.herokuapp.com/batting1")
        .then ((r)=>{
            dispatch({type: types.BATTING_DATA_SUCCESS, payload: r.data});
        })
        .catch((e)=>{
            dispatch({type: types.BATTING_DATA_ERROR, payload: e});
        });
        }

        const bowlingData = () => (dispatch) =>{
            dispatch({type: types.BOWLING_DATA_REQUEST});
            return axios
            .get(" https://cricinfodata.herokuapp.com/bowling")
            .then ((r)=>{
                dispatch({type: types.BOWLING_DATA_SUCCESS, payload: r.data});
            })
            .catch((e)=>{
                dispatch({type: types.BOWLING_DATA_ERROR, payload: e});
            });
            }

            const batting2Data = () => (dispatch) =>{
                dispatch({type: types.BATTING2_DATA_REQUEST});
                return axios
                .get(" https://cricinfodata.herokuapp.com/batting2")
                .then ((r)=>{
                    dispatch({type: types.BATTING2_DATA_SUCCESS, payload: r.data});
                })
                .catch((e)=>{
                    dispatch({type: types.BATTING2_DATA_ERROR, payload: e});
                });
                }

                const bowling2Data = () => (dispatch) =>{
                    dispatch({type: types.BOWLING2_DATA_REQUEST});
                    return axios
                    .get(" https://cricinfodata.herokuapp.com/bowling2")
                    .then ((r)=>{
                        dispatch({type: types.BOWLING2_DATA_SUCCESS, payload: r.data});
                    })
                    .catch((e)=>{
                        dispatch({type: types.BOWLING2_DATA_ERROR, payload: e});
                    });
                    }

const filterData = (legue, payload)=>(dispatch)=>{
    dispatch({type: types.FILTER_DATA_REQUEST});
    return axios
    .get(`https://cricinfodata.herokuapp.com/TopEvenet1?legue=${legue}`, payload)
    .then((res)=>{
        dispatch({type: types.FILTER_DATA_SUCCESS, payload: res});
    })
    .catch((err)=>{
        dispatch({type: types.FILTER_DATA_ERROR, payload: err});
    });
}
export {
    getData,
    filterData,
    mvpData,
    battingData,
    bowlingData,
    batting2Data,
    bowling2Data

}