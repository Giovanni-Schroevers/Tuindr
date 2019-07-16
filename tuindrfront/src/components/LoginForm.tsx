import React, { Component } from 'react' 
import { IFormProps } from '../interfaces/index'
import { IFormState } from '../interfaces/index'

class LoginForm extends Component<IFormState, IFormProps>{

  render() {
    return (
        <form>
            <input type="text" className="form-input" name="email"  placeholder="email"/>
            <input type="password" className="form-input" name="password"  placeholder="password" />
        <input type="submit" value="login"></input>
        </form>
    )
  }
}
export default LoginForm;