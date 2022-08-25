import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: (process.env.REACT_APP_DANHAT_GQL_API + '/graphql'), 
  cache: new InMemoryCache()
})


// client
//   .query({
//     query: gql`
//       query GetSkills {
//         skills {
//           name
//           importance
//           type
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result))


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);


