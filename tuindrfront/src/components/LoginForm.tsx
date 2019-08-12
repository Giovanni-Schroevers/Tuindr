import React, { Component } from 'react' 
import { IFormProps, IFormState } from '../interfaces/index'
import styles from './styles/Login.module.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

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
    console.log("email: ",this.state.username, "password: ", this.state.password);
  };

  handleSubmit = () => {
    
  }


  render() {
    return (
      <div className={styles.page}>
          <form className={styles.container}>
            <div>
              <input type="text" className={styles.input} name="email" onChange={this.handleChange} defaultValue=""  placeholder="email"/>
              <input type="password" className={styles.input} name="password" onChange={this.handleChange} defaultValue=""placeholder="password" />
              <input type="submit" value="login" className={styles.submit}></input>
            </div>
          </form>
        </div>
    )
  }
}

function mapStateToProps(appState: { ui: { login: any; }; }, ownProps: any){
  return {
    ui: appState.ui,
    login: appState.ui.login
  }
}

function mapDispatchToProps(dispatch: any){
  return {
    ...bindActionCreators({
      requestLogin,
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
