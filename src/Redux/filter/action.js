import axios from "axios";
import * as types from "./actionType";

const getData = () => (dispatch) =>{
dispatch({type: types.GET_DATA_REQUEST});
return axios
.get("http://localhost:3004/TopEvenet")
.then ((r)=>{
    dispatch({type: types.GET_DATA_SUCCESS, payload: r.data});
    console.log(r.data)
})
.catch((e)=>{
    dispatch({type: types.GET_DATA_ERROR, payload: e});
});
}

const filterData = (legue,payload)=>(dispatch)=>{
    dispatch({type: types.FILTER_DATA_REQUEST});
    return axios
    .get(`http://localhost:3004/TopEvenet?legue=${legue}`, payload)
    .then((res)=>{
        dispatch({type: types.FILTER_DATA_SUCCESS, payload: res});
    })
    .catch((err)=>{
        dispatch({type: types.FILTER_DATA_ERROR, payload: err});
    });
}
export {
    getData,
    filterData
}