import 'bootstrap/dist/css/bootstrap.min.css';
// import 'D:/perpus/public/index.html';
import React, {Component} from 'react';
import axios from 'axios'
import './register.css';

class Register extends React.Component{
  constructor(){
      super()
      this.state={
          name : '',
          email : '',
          password : '',
      }
  }
  handleChange = (e) =>{
      this.setState({ [e.target.name] : e.target.value })
  }
  handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state)
      axios.post("http://127.0.0.1:8000/api/register" , this.state)
      this.props.history.push('/Login');
  }

    render(){
        return(
          <body id="registerBody">
          <div class="signup-form">
            <form action="/Login" onSubmit={this.handleSubmit} >
		          <h2>Sign Up</h2>
		            <p>Please fill in this form to create an account!</p>
		              <hr>
                    </hr>
       	<div class="form-group">
        	<input type="name" class="form-control" name="name" placeholder="Name" required="required" onChange={this.handleChange}/>
        </div>
        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Email" required="required" onChange={this.handleChange}/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required" onChange={this.handleChange}/>
        </div>
        <div class="form-group">
			<label class="checkbox-inline"><input type="checkbox" required="required" onChange={this.handleChange}/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
        </div>
    </form>
    <p class="text-center"><a href="Login">Already have an account?</a></p>
</div>
</body>
        )
    }
}
export default Register;
