import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

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
  
  return data.allUsers.map(({ id, username }) => (
    <div key={id}>
      <p>{username}</p>
    </div>
  )); 
  
}

export default Home

const App = () => (
<ApolloProvider client={client}>
    <Home/>
</ApolloProvider>)

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
