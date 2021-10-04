import {GET_LOGS, SET_LOADING, ADD_LIST, LOGS_ERROR, SEARCH_LOGS, ADD_LOG, DELETE_LOG, UPDATE_LOG, SET_CURRENT, CLEAR_CURRENT, CLEAR_LOGS } from './types'

//Get logs
export const getLogs = () => async dispatch => {     //getState is an additional parameter for the functin that can be added
  
    //set loading to true
    setLoading();
    try {
        const res = await fetch(
					'http://api.countrylayer.com/v2/all?access_key=bbfb2fef2dd05a2a4d0385f9ea60903e'
				);
        const data = await res.json();


        dispatch({
            type: GET_LOGS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response
        })
    }
}

//Add new log
export const addLog = (log) => async dispatch => {     //getState is an additional parameter for the functin that can be added
  
    //set loading to true
    setLoading();
    try {
        const res = await fetch('/api/logs',{
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response
        })
    }
}



//Edit log
export const updateLog = (log) => async dispatch => {     //getState is an additional parameter for the functin that can be added
  
    //set loading to true
    setLoading();
    try {
        const res = await fetch(`/api/logs/${log._id}`,{
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response
        })
    }
}

//Search logs
export const searchLogs = (text) => dispatch => {     //getState is an additional parameter for the functin that can be added
  
    dispatch({
        type: SEARCH_LOGS,
        payload: text
    })
}

//Clear Log
export const clearLogs = () => dispatch => {
    dispatch({
        type: CLEAR_LOGS
    })
}

//Delete log
export const deleteLog = (id) => async dispatch => {

    try {

        setLoading();

        await fetch(`/api/logs/${id}`, {
            method: 'DELETE',
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.msg
        })
    }
}

//Set current log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

//Clear current log
export const clearCurrent = log => {
    return {
        type: CLEAR_CURRENT
    }
}

//Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const addList = list => {
    setLoading();
    return {
        type: ADD_LIST,
        payload: list
    }
	// try {
	// 	dispatch({
	// 		type: ADD_LIST,
	// 		payload: list,
	// 	});
	// } catch (error) {
	// 	dispatch({
	// 		type: LOGS_ERROR,
	// 		payload: 'Error adding to list',
	// 	});
	// }
};