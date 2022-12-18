import React from 'react';
import axios from "axios";
import "../App.css";
import {Formik} from "formik";
import * as Yup from "yup";


const schema = Yup.object().shape({
  userName: Yup.string()
    .required("userName is a required field"),
  
    
  password: Yup.string()
    .required("Password is a required field")
    .min(4, "Password must be at least 8 characters"),
});

const onSubmit =(data) =>{

  console.log(data);
  axios.post("http://localhost:3001/InfoLogin/login/",data).then((response) => {
      console.log("Login success ")
    });
  console.log(data);
};




function LoginUser() {
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}

      <Formik
        validationSchema={schema}
        initialValues={{ userName: "", password: "" }}
        onSubmit={onSubmit }  
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (

          <div className="login">
            <div className="form">
           {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="text"
                  name="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userName}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="userName"
                />

                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.userName && touched.userName && errors.userName}
                </p>
                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
              
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default LoginUser;


// import React from 'react'

// const LoginUser = () => {
//   return (
//     <div>LoginUser</div>
//   )
// }

// export default LoginUser