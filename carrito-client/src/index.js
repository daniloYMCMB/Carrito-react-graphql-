import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import "../node_modules/css-reset-and-normalize/css/reset-and-normalize.min.css";
import "./App.css"



const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => (
<ApolloProvider client={client}>
    <Routes/>
</ApolloProvider>)

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
