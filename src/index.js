import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: (process.env.REACT_APP_DANHAT_GQL_API_DEV + '/graphql'), 
  cache: new InMemoryCache()
})


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);


