import React, { Component } from 'react' 
import { IFormProps, IFormState, IReducer } from '../interfaces/index'
import styles from './styles/Login.module.scss'
import {connect} from 'react-redux'
import {bindActionCreators, Dispatch} from 'redux'
import  Tomato  from '../img/Tomato.png';
import { requestPassword } from '../modules/ui/actions';

class ResetPassword extends Component<IFormProps>{
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
    this.props.sendPasswordSaga( {
      username: this.state.password
    });
  }


  render() {
    return (
      <div className={styles.page}>
      <h1 className={styles.Pagetitle}>Tuindr.</h1>
        <div className={styles.container}>
        <img className={styles.img} src={Tomato} alt='Hm nee die werkt niet'/>
        <h2 className={styles.title}>New Password</h2>
          {this.props.loginError && <p>{this.props.loginError}</p>}
          <input type="password" className={styles.input} name="password" onChange={this.handleChange} defaultValue="" placeholder="New password"/>
          <input type="password" className={styles.input} name="password" onChange={this.handleChange} defaultValue="" placeholder="Repeat Password"/>
          <div className={styles.buttonContainer}>
            <button onClick={() => this.handleSubmit()} className={styles.submitPass}>Change Password</button>
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
  return {
    ...bindActionCreators({
      sendPasswordSaga
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
