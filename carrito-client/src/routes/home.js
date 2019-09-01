import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import Toolbar from '../components/toolbar'

function Home() {
  const { loading, error, data } = useQuery(gql`
      {
          allUsers {
              username
          }
      }
  `);

  if(loading) return <p>Loading..</p>;
  if(error) return <p>Error :(</p>;
  
  return  <div>
            <Toolbar/>
            {data.allUsers.map(({ username }) => (
              <div>
                <p>{username}</p>
              </div>
            ))}; 
          </div>
  
}

export default Home

