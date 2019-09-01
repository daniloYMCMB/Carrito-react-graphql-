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

const App = () => (
<ApolloProvider client={client}>
    <Routes/>
</ApolloProvider>)

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
