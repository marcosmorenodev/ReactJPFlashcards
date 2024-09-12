import React from 'react'
import GroupDetails from './GroupDetails'
import LoadingPage from './LoadingPage';
import ErrorPage from './ErrorPage';
import { useParams } from 'react-router';
import GroupNavBar from '../GroupNavBar';
import useFetch from './custom-hook/useFetch';

const HiraganaLayout = () => {
  const isHiragana = true; //Flag used for displaying a DB's items over the other one and affecting the "GroupNavBar" component 
  const port = 8000;
  const DB = "hiraganaChars";
  const {groupId} = useParams();

  const {data: group, isLoading, error} = useFetch(port, DB, groupId);

  return (
    <main>
      <GroupNavBar isHiragana={isHiragana} />
      
      { isLoading ? (<LoadingPage />) : null }

      {
        group ? //Will only render the following component if data was properly fetched
        (<GroupDetails group={group} />)

        :

        null
      }

      { error ? (<ErrorPage err={error}/>) : null }
    </main>
  )
}

export default HiraganaLayout