import  React  from 'react';
import {Provider} from 'react-redux';
import './App.css';
import  LoginForm  from './components/Login';
import  ResetPassword  from './components/ResetPassword';
import Home from './components/Home';
import store from '../src/store'
import { Route, BrowserRouter } from "react-router-dom";
import setAuthToken from './utils/setAuthorizationToken';
import handleToken from './utils/handleToken'



const App: React.FC = () => {

  setAuthToken(localStorage.jwtToken);
<<<<<<< Updated upstream
  let path = window.location.pathname
  if(path !== '/login' && path !== '/reset-password' && path.substring(0, path.lastIndexOf("/")) !== '/reset-password' ) {
=======
  if(window.location.href !== 'http://localhost:3000/login' && window.location.href !== 'http://localhost:3000/reset-password' && window.location.href !== 'http://localhost:3000/reset-passord/*') {
>>>>>>> Stashed changes
    handleToken()
  }
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/reset-password" component={ResetPassword} />
      </Provider>
    </BrowserRouter>
  );
}
 
export default App;
