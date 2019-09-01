import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

function AllUsers() {
  const { loading, error, data } = useQuery(gql`
      {
          allUsers {
              username
          }
      }
  `);

  if(loading) return <p>Loading..</p>;
  if(error) return <p>Error :(</p>;
  
  return data.allUsers.map(({ id, username }) => (
    <div key={id}>
      <p>{username}</p>
    </div>
  )); 
  
}

export default AllUsers
