import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => (
<ApolloProvider client={client}>
    <Routes/>
</ApolloProvider>)

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
