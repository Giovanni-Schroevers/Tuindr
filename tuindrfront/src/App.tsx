import  React  from 'react';
import {Provider} from 'react-redux';
import './App.css';
import  LoginForm  from './components/LoginForm'
import store from '../src/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <LoginForm />
    </Provider>
  );
}
 
export default App;
