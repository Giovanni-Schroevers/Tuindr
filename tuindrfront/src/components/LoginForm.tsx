import React, { Component } from 'react' 
import { IFormProps, IFormState, IReducer } from '../interfaces/index'
import styles from './styles/Login.module.scss'
import {connect} from 'react-redux'
import {bindActionCreators, Dispatch} from 'redux'
import  Tomato  from '../img/Tomato.png';

import {
  requestLogin
} from '../modules/ui/actions';

class LoginForm extends Component<IFormProps>{
  state: IFormState = {
    username: "",
    password: ""
  };
  
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handleSubmit = () => {
    console.log("test");
    this.props.requestLogin( {
      username: this.state.username,
      password: this.state.password
    });
  }


  render() {
    return (
      <div className={styles.page}>
      <h1 className={styles.Pagetitle}>Tuindr</h1>
        <div className={styles.container}>
        <img className={styles.img} src={Tomato} alt='Hm nee die werkt niet'/>
        <h2 className={styles.title}>Login</h2>
          <input type="text" className={styles.input} name="username" onChange={this.handleChange} defaultValue=""  placeholder="Email"/>
          <input type="password" className={styles.input} name="password" onChange={this.handleChange} defaultValue=""placeholder="Password" />
          <button onClick={() => this.handleSubmit()} className={styles.submit}>login</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState: { reducer: IReducer }){
  return {
    ui: appState.reducer,
    login: appState.reducer.login
  }
}

function mapDispatchToProps(dispatch: Dispatch){
  console.log(dispatch)
  return {
    ...bindActionCreators({
      requestLogin,
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
