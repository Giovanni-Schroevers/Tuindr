import  React  from 'react';
import {Provider} from 'react-redux';
import './App.css';
import  LoginForm  from './components/Login';
import Home from './components/Home';
import store from '../src/store'
import { Route, BrowserRouter } from "react-router-dom";
import setAuthToken from './utils/setAuthorizationToken';
import handleToken from './utils/handleToken'



const App: React.FC = () => {

  setAuthToken(localStorage.jwtToken);
  if(window.location.href !== 'http://localhost:3000/login') {
    handleToken()
  }
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
      </Provider>
    </BrowserRouter>
  );
}
 
export default App;
