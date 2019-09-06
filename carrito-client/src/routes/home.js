import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import Toolbar from '../components/toolbar'

function Home() {
  const { loading, error, data } = useQuery(gql`
      {
          allUsers {
              username
              password
          }
      }
  `);

  if(loading) return <p>Loading..</p>;
  if(error) return <p>Error :(</p>;
  
  return  <div>
            <Toolbar/>
            {data.allUsers.map(({ username,password,i }) => (
              <div key={i}>
                <p>{username} - {password} </p>
              </div>
            ))}
          </div>
  
}

export default Home

