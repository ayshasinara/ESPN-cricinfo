import axios from 'axios';
import * as types from './actionTypes';

const getData=()=>(dispatch)=>{
dispatch({type:types.GET_TOPEVENT_REQUEST});
return axios.get("https://cricinfodata.herokuapp.com/TopEvenet")

.then(res=>{
    
    return dispatch({type:types.GET_TOPEVENT_SUCCESS,payload:res.data}
        );
   
    }).catch(err=>{
        return dispatch({type:types.GET_TOPEVENT_REQUEST,payload:err})
    })
}
const getDataMajor=()=>(dispatch)=>{
    dispatch({type:types.GET_MAJOR_REQUEST});
    return axios.get("https://cricinfodata.herokuapp.com/majorTournament")
    
    .then(res=>{
        
        return dispatch({type:types.GET_MAJOR_SUCCESS,payload:res.data}
            );
       
        }).catch(err=>{
            return dispatch({type:types.GET_MAJOR_REQUEST,payload:err})
        })
    }

    const getNewsData=()=>(dispatch)=>{
        dispatch({type:types.GET_NEWS_REQUEST});
        return axios.get("https://cricinfodata.herokuapp.com/newsdata")
        
        .then(res=>{
            
            return dispatch({type:types.GET_NEWS_SUCCESS,payload:res.data}
                );
           
            }).catch(err=>{
                return dispatch({type:types.GET_NEWS_REQUEST,payload:err})
            })
        }

        const getFeaturesData=()=>(dispatch)=>{
            dispatch({type:types.GET_FEATURES_REQUEST});
            return axios.get("https://cricinfodata.herokuapp.com/featuresdata")
            
            .then(res=>{
                
                return dispatch({type:types.GET_FEATURES_SUCCESS,payload:res.data}
                    );
               
                }).catch(err=>{
                    return dispatch({type:types.GET_FEATURES_REQUEST,payload:err})
                })
            }
            const getUpComingData=()=>(dispatch)=>{
                dispatch({type:types.GET_UPCOMINGSUN_REQUEST});
                return axios.get("https://cricinfodata.herokuapp.com/UpcomingSun")
                
                .then(res=>{
                    
                    return dispatch({type:types.GET_UPCOMINGSUN_SUCCESS,payload:res.data}
                        );
                   
                    }).catch(err=>{
                        return dispatch({type:types.GET_UPCOMINGSUN_REQUEST,payload:err})
                    })
                }

                const getUpComingDataSat=()=>(dispatch)=>{
                    dispatch({type:types.GET_UPCOMINGSAT_REQUEST});
                    return axios.get("https://cricinfodata.herokuapp.com/UpcomingSat")
                    
                    .then(res=>{
                        
                        return dispatch({type:types.GET_UPCOMINGSAT_SUCCESS,payload:res.data}
                            );
                       
                        }).catch(err=>{
                            return dispatch({type:types.GET_UPCOMINGSAT_REQUEST,payload:err})
                        })
                    }

export {getData,getDataMajor,getNewsData,getFeaturesData,getUpComingData,getUpComingDataSat}