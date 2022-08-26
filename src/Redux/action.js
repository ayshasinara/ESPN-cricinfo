import axios from 'axios';
import * as types from './actionTypes';

const getData=()=>(dispatch)=>{
dispatch({type:types.GET_TOPEVENT_REQUEST});
return axios.get("http://localhost:8080/TopEvenet")

.then(res=>{
    
    return dispatch({type:types.GET_TOPEVENT_SUCCESS,payload:res.data}
        );
   
    }).catch(err=>{
        return dispatch({type:types.GET_TOPEVENT_REQUEST,payload:err})
    })
}
const getDataMajor=()=>(dispatch)=>{
    dispatch({type:types.GET_MAJOR_REQUEST});
    return axios.get("http://localhost:8080/majorTournament")
    
    .then(res=>{
        
        return dispatch({type:types.GET_MAJOR_SUCCESS,payload:res.data}
            );
       
        }).catch(err=>{
            return dispatch({type:types.GET_MAJOR_REQUEST,payload:err})
        })
    }
export {getData,getDataMajor}