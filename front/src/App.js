import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ReactDOM from 'react-dom';

function App() {
  const client = new ApolloClient({
      cache: new InMemoryCache(),
      uri: "http://localhost:3001/"
    })

  return (
    ReactDOM.render(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>,
      document.getElementById('root'),
    )
  )
}

export default App;
