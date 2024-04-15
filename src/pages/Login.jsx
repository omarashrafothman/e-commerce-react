import React from 'react';
import "../style.css";
  import { useFormik } from 'formik' ;

function Login() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password:''  
    },
  })
  return (
    <div className="d-lg-flex half">
  
    <div className="contents">

      <div className="container p-0">
        <div className="row align-items-center justify-content-center ">
          <div className="col-md-7">
            <div className="mb-4">
              <h3>Sign In</h3>
         
            </div>
            <form action="#" method="post">
              <div className="form-group ">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username"/>

              </div>
              <div className="form-group last mb-3">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password"/>
                
              </div>
              
              <div className="d-flex mb-3 align-items-center ">
                <label className="control control--checkbox mb-0"><span class="caption">Remember me</span>
                  <input type="checkbox" checked="checked"/>
                  <div className="control__indicator"></div>
                </label>
                <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span> 
              </div>

              <input type="submit" value="Log In" className="btn btn-block btn-primary "/>

              <span className="d-block text-center my-4 text-muted">&mdash; or &mdash;</span>
              
              <div className="social-login">
                <a href="#" className="facebook btn d-flex justify-content-center align-items-center">
                  <span className="icon-facebook mr-3"></span> Login with Facebook
                </a>
                <a href="#" className="twitter btn d-flex justify-content-center align-items-center">
                  <span className="icon-twitter mr-3"></span> Login with  Twitter
                </a>
                <a href="#" className="google btn d-flex justify-content-center align-items-center">
                  <span className="icon-google mr-3"></span> Login with  Google
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    
  </div>
  )
}

export default Login