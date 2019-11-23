import React, {Component} from 'react'
import {login} from './AuthFunction'
import swal from 'sweetalert';

class Login extends Component{
    constructor(){
        super()
        this.state={
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if(res){
                swal("Login Berhasil", " ", "success");
                this.props.history.push('/Book')
            }
            else{
                swal("Login Gagal", " ", "error");
            }
        })
    }

    render(){
        return(
          <body id="loginBody">
<div class="login-form">
      <form noValidate onSubmit={this.onSubmit}>
        <h2 class="text-center">Log in</h2>
        <div class="form-group">
        <input type="email" className="form-control" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.onChange}>

        </input>

        </div>
        <div className="form-group">
                               <label htmlFor="password">Password</label>
                               <input type="password"
                                   className="form-control"
                                   name="password"
                                   placeholder="Enter Password"
                                   value={this.state.password}
                                   onChange={this.onChange}>
                               </input>
                           </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Log in</button>
        </div>
        <div class="clearfix">
            <label class="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
            <a href="#" class="pull-right">Forgot Password?</a>
        </div>
    </form>
    <p class="text-center"><a href="Register">Create an Account</a></p>
</div>
</body>
        )
    }
}
export default Login;
