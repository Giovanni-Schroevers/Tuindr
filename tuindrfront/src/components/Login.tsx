import React, { Component } from 'react' 
import { IFormProps, IFormState, IReducer } from '../interfaces/index'
import styles from './styles/Login.module.scss'
import {connect} from 'react-redux'
import {bindActionCreators, Dispatch} from 'redux'
import  Tomato  from '../img/Tomato.png';
import {isEmpty} from 'lodash'



import {
  requestLogin
} from '../modules/ui/actions';

class Login extends Component<IFormProps>{
  state: IFormState = {
    username: "",
    password: "",
    token: null
  };



  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handleSubmit = () => {
    this.props.requestLogin( {
      username: this.state.username,
      password: this.state.password
    });

    if(!isEmpty(localStorage.getItem('jwtToken'))) {
      window.location.href = 'http://localhost:3000';
    }
  }


  render() {
    return (
      <div className={styles.page}>
      <h1 className={styles.Pagetitle}>Tuindr.</h1>
        <div className={styles.container}>
        <img className={styles.img} src={Tomato} alt='Hm nee die werkt niet'/>
        <h2 className={styles.title}>Login</h2>
          {this.props.loginError && <p>{this.props.loginError}</p>}
          <input type="text" className={styles.input} name="username" onChange={this.handleChange} defaultValue=""  placeholder="Email"/>
          <input type="password" className={styles.input} name="password" onChange={this.handleChange} defaultValue=""placeholder="Password" />
          <div className={styles.buttonContainer}>
            <button onClick={() => this.handleSubmit()} className={styles.submit}>login</button>
            <p className={styles.resetpass}>Reset Password</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState: { Loginreducer: IReducer }){
  return {
    loginError: appState.Loginreducer.loginError
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
