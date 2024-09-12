import {useEffect, useReducer, useState} from "react";
import axios from "axios";
import actionTypes from "./actionTypes";
import fetchReducer from "../reducer-hook/fetchReducer";
import { initialFetchState } from "../reducer-hook/fetchReducer";

function useFetch(port, DB, groupId) {
    const [data, setData] = useState(null);
    const [fetchState, dispatch] = useReducer(fetchReducer, initialFetchState);

    async function fetchData() {
        try {
            dispatch({type: actionTypes.fetchStart});
        
            const finalURL = `http://localhost:${port}/${DB}/${groupId}`; 

            const res = await axios.get(finalURL);

            if (res.status === 200 || res.status === 304) { //* Since the "GET" method will always return 304 in this case, unless there's a network issue, it's going to flawlessly fetch the DB.
                const fetchedData = await res.data;
                setData(fetchedData);

                dispatch({type: actionTypes.fetchSuccess});
            } 
        }

        catch(err) { dispatch({type: actionTypes.fetchError, payload: err.message}); }

        finally { dispatch({type: actionTypes.fetchEnd}); }
    }

    useEffect(() => { fetchData(); }, [groupId]); //* Re-fetches on changes to "fetchAllGroups" or "groupId"

    return {
        data,
        isLoading: fetchState.isLoading,
        error: fetchState.error
    };
}

export default useFetch;