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
  let url = window.location.href
  let hostname = window.location.origin
  if(url !== `${hostname}/login` && url !== `${hostname}/reset-password` && url.substring(0, url.lastIndexOf("/")) !== `${hostname}/reset-password` ) {
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
