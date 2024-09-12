import React, { useEffect, useReducer, useState } from 'react'
import { NavLink } from 'react-router-dom'
import fetchReducer, { initialFetchState } from '../src/components/reducer-hook/fetchReducer';
import actionTypes from "../src/components/custom-hook/actionTypes";
import axios from 'axios';
import ErrorPage from './components/ErrorPage';

const GroupNavBar = ({isHiragana}) => {
    const katakanaNavBar = "lg:flex flex-1 justify-center overflow-x-auto m-1";

    const [groups, setGroups] = useState([]);
    const [fetchState, dispatch] = useReducer(fetchReducer, initialFetchState);
    
    async function fetchGroups() {
        try {
          dispatch({type: actionTypes.fetchStart});
    
          const finalURL = isHiragana ? `http://localhost:8000/hiraganaChars` : `http://localhost:8001/katakanaChars`;
          
          const res = await axios.get(finalURL); //Fetches all groups
    
          if (res.status === 200 || res.status === 304) { //Since the "GET" method will always return 304 in this case, unless there's a network issue, it's going to flawlessly fetch the DB.
            const fetchedData = await res.data;
            setGroups(fetchedData);
    
            dispatch({type: actionTypes.fetchSuccess});
          }
        }
        
        catch(err) { dispatch({type: actionTypes.fetchError, payload: err.message}); }
      
        finally { dispatch({type: actionTypes.fetchEnd}); }
    }
    
    useEffect(() => { fetchGroups(); }, []); //Fetches and sets data on mount

    return (
        <>
            { fetchState.isLoading ?
              (<h1 className="text-green-400 text-xl">
                Loading Remaining Groups...
              </h1>)
              
              :
              
              null 
            }
            
            <div className={isHiragana ? 'flex flex-1 overflow-x-auto m-1' : katakanaNavBar}>
                <nav className="flex text-2xl gap-1.5 text-red-400 font-semibold bg-white">
                    {
                        groups && groups.length > 0 ? 
                        groups.map(group => 
                        (
                            <NavLink
                                key={group.id}
                                className="bg-inherit p-3.5 border-4 border-red-200 rounded-lg cursor-pointer transition-all hover:bg-red-400 hover:text-white hover:border-red-400"
                                to={isHiragana ? `/hira-chars/${group.id}` : `/kata-chars/${group.id}`}
                            >
                                <h1> {group.name} </h1>
                                <h1> {(group.chars).slice(0, 3).map(char => char.japanese)} </h1>
                            </NavLink>
                        ))

                        :

                        null
                    }
                </nav>
            </div>

            { fetchState.error ? (<ErrorPage err={fetchState.error}/>) : null }
        </>
    )
}

export default GroupNavBar
